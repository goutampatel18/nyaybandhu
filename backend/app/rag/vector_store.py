"""
Vector store — manages FAISS index for similarity search.
Supports building, saving, loading, and querying.
"""

import os
from typing import List, Optional

from langchain.schema import Document
from langchain_community.vectorstores import FAISS

from app.rag.embeddings import get_embeddings
from app.core.config import settings

_vector_store: Optional[FAISS] = None


def build_vector_store(documents: List[Document]) -> FAISS:
    """Build a new FAISS vector store from documents."""
    global _vector_store

    if not documents:
        raise ValueError("No documents to build vector store from")

    embeddings = get_embeddings()
    print(f"Building FAISS index with {len(documents)} documents...")
    _vector_store = FAISS.from_documents(documents, embeddings)
    print("FAISS index built successfully")
    return _vector_store


def save_vector_store(path: Optional[str] = None) -> None:
    """Save the current vector store to disk."""
    global _vector_store

    if _vector_store is None:
        raise ValueError("No vector store to save")

    save_path = path or settings.vector_store_path
    os.makedirs(save_path, exist_ok=True)
    _vector_store.save_local(save_path)
    print(f"Vector store saved to {save_path}")


def load_vector_store(path: Optional[str] = None) -> Optional[FAISS]:
    """Load a previously saved vector store from disk."""
    global _vector_store

    load_path = path or settings.vector_store_path
    index_file = os.path.join(load_path, "index.faiss")

    if not os.path.exists(index_file):
        print(f"No vector store found at {load_path}")
        return None

    embeddings = get_embeddings()
    _vector_store = FAISS.load_local(
        load_path, embeddings, allow_dangerous_deserialization=True
    )
    print(f"Vector store loaded from {load_path}")
    return _vector_store


def get_vector_store() -> Optional[FAISS]:
    """Get the current vector store instance."""
    return _vector_store


def query_vector_store(query: str, k: int = 4) -> List[Document]:
    """
    Query the vector store for similar documents.
    Returns the top-k most similar documents.
    """
    global _vector_store

    if _vector_store is None:
        return []

    results = _vector_store.similarity_search(query, k=k)
    return results
