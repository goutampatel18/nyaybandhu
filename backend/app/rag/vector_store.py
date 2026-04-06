"""FAISS vector store management for similarity search."""

import logging
from pathlib import Path

from langchain_core.documents import Document
from langchain_community.vectorstores import FAISS

from app.core.config import settings
from app.rag.embeddings import get_embeddings

logger = logging.getLogger(__name__)

_vector_store: FAISS | None = None


def build_vector_store(documents: list[Document]) -> FAISS:
    global _vector_store

    if not documents:
        raise ValueError("No documents to build vector store from")

    embeddings = get_embeddings()
    logger.info("Building FAISS index with %s chunk(s).", len(documents))
    _vector_store = FAISS.from_documents(documents, embeddings)
    logger.info("FAISS index built successfully.")
    return _vector_store


def save_vector_store(path: str | Path | None = None) -> None:
    global _vector_store

    if _vector_store is None:
        raise ValueError("No vector store to save")

    save_path = Path(path or settings.vector_store_path_obj)
    save_path.mkdir(parents=True, exist_ok=True)
    _vector_store.save_local(str(save_path))
    logger.info("Vector store saved to %s", save_path)


def load_vector_store(path: str | Path | None = None) -> FAISS | None:
    global _vector_store

    load_path = Path(path or settings.vector_store_path_obj)
    index_file = load_path / "index.faiss"

    if not index_file.exists():
        logger.info("No vector store found at %s", load_path)
        return None

    embeddings = get_embeddings()
    _vector_store = FAISS.load_local(
        str(load_path),
        embeddings,
        allow_dangerous_deserialization=True,
    )
    logger.info("Vector store loaded from %s", load_path)
    return _vector_store


def get_vector_store() -> FAISS | None:
    return _vector_store


def query_vector_store(query: str, k: int = 4) -> list[Document]:
    if _vector_store is None:
        return []

    return _vector_store.similarity_search(query, k=k)
