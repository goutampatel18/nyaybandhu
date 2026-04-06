import logging
from uuid import uuid4

import aiofiles
from fastapi import UploadFile
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.models.document import DocumentRecord
from app.rag.pipeline import ingest_documents

logger = logging.getLogger(__name__)


async def list_documents(session: AsyncSession) -> list[DocumentRecord]:
    result = await session.execute(
        select(DocumentRecord).order_by(DocumentRecord.created_at.desc())
    )
    return list(result.scalars().all())


async def upload_documents(
    session: AsyncSession,
    files: list[UploadFile],
    ingest_after_upload: bool = False,
) -> tuple[list[DocumentRecord], dict | None]:
    settings.upload_dir_path.mkdir(parents=True, exist_ok=True)
    uploaded_records: list[DocumentRecord] = []

    for file in files:
        file_bytes = await file.read()
        if not file_bytes:
            continue

        original_name = file.filename or "uploaded-file"
        stored_filename = f"{uuid4().hex}_{original_name}"
        destination = settings.upload_dir_path / stored_filename

        async with aiofiles.open(destination, "wb") as output_file:
            await output_file.write(file_bytes)

        record = DocumentRecord(
            filename=original_name,
            stored_filename=stored_filename,
            file_path=str(destination),
            content_type=file.content_type,
            file_size=len(file_bytes),
            status="uploaded",
        )
        session.add(record)
        uploaded_records.append(record)

    await session.commit()

    for record in uploaded_records:
        await session.refresh(record)

    ingestion_result = None
    should_ingest = ingest_after_upload or settings.auto_ingest_uploads
    if uploaded_records and should_ingest:
        logger.info("Auto-ingestion enabled. Ingesting %s uploaded file(s).", len(uploaded_records))
        ingestion_result = await ingest_documents(session)

    return uploaded_records, ingestion_result
