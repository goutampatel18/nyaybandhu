"""RAG ingestion pipeline for loading, chunking, embedding, and indexing documents."""

import logging
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.models.document import DocumentRecord
from app.models.embedding_metadata import EmbeddingMetadata
from app.rag.chunker import chunk_documents
from app.rag.loader import load_all_documents
from app.rag.vector_store import build_vector_store, load_vector_store, save_vector_store

logger = logging.getLogger(__name__)


def _ingestion_directories() -> list[Path]:
    directories = [settings.data_dir_path, settings.upload_dir_path]
    if settings.legacy_data_dir_path:
        directories.append(settings.legacy_data_dir_path)

    unique_directories: list[Path] = []
    seen: set[str] = set()
    for directory in directories:
        resolved = str(directory.resolve())
        if resolved not in seen:
            seen.add(resolved)
            unique_directories.append(directory)
    return unique_directories


def _serialize_metadata(metadata: dict) -> dict:
    serialized: dict = {}
    for key, value in metadata.items():
        if isinstance(value, (str, int, float, bool)) or value is None:
            serialized[key] = value
        else:
            serialized[key] = str(value)
    return serialized


async def _get_or_create_document(session: AsyncSession, file_path: str) -> DocumentRecord:
    result = await session.execute(
        select(DocumentRecord).where(DocumentRecord.file_path == file_path)
    )
    record = result.scalar_one_or_none()
    path_obj = Path(file_path)
    stat_result = path_obj.stat() if path_obj.exists() else None

    if record is None:
        record = DocumentRecord(
            filename=path_obj.name,
            stored_filename=path_obj.name,
            file_path=file_path,
            content_type=None,
            file_size=stat_result.st_size if stat_result else None,
            status="ingested",
        )
        session.add(record)
        await session.flush()

    return record


async def ingest_documents(session: AsyncSession) -> dict:
    logger.info("Starting document ingestion pipeline.")

    documents = []
    for directory in _ingestion_directories():
        if not directory.exists():
            logger.info("Skipping missing ingestion directory: %s", directory)
            continue
        documents.extend(load_all_documents(directory))

    if not documents:
        return {
            "status": "error",
            "message": "No documents found in the configured data directories.",
            "documents_loaded": 0,
            "chunks_created": 0,
        }

    chunks = chunk_documents(
        documents,
        chunk_size=settings.chunk_size,
        chunk_overlap=settings.chunk_overlap,
    )

    build_vector_store(chunks)
    save_vector_store()

    chunk_counts = Counter(
        chunk.metadata.get("file_path")
        for chunk in chunks
        if chunk.metadata.get("file_path")
    )

    document_records: dict[str, DocumentRecord] = {}
    for file_path in chunk_counts:
        record = await _get_or_create_document(session, file_path)
        record.status = "ingested"
        record.chunk_count = chunk_counts[file_path]
        record.ingested_at = datetime.now(timezone.utc)
        document_records[file_path] = record

    await session.execute(delete(EmbeddingMetadata))

    for chunk_index, chunk in enumerate(chunks):
        file_path = chunk.metadata.get("file_path")
        record = document_records.get(file_path) if file_path else None
        session.add(
            EmbeddingMetadata(
                document_id=record.id if record else None,
                chunk_index=chunk_index,
                source=chunk.metadata.get("source", "Unknown"),
                content_excerpt=chunk.page_content[:500],
                metadata_json=_serialize_metadata(chunk.metadata),
            )
        )

    await session.commit()

    result = {
        "status": "success",
        "message": "Documents ingested successfully.",
        "documents_loaded": len(documents),
        "chunks_created": len(chunks),
    }
    logger.info(
        "Ingestion complete. documents_loaded=%s chunks_created=%s",
        result["documents_loaded"],
        result["chunks_created"],
    )
    return result


def try_load_existing_index() -> bool:
    try:
        return load_vector_store() is not None
    except Exception as exc:
        logger.warning("Could not load existing vector store: %s", exc)
        return False
