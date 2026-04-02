"""
Embeddings — generates vector embeddings using HuggingFace sentence-transformers.
Falls back gracefully if model loading fails.
"""

from langchain_huggingface import HuggingFaceEmbeddings
from app.core.config import settings

_embeddings_instance = None


def get_embeddings() -> HuggingFaceEmbeddings:
    """
    Get or create the HuggingFace embeddings instance (singleton).
    Uses the model specified in settings (default: all-MiniLM-L6-v2).
    """
    global _embeddings_instance

    if _embeddings_instance is None:
        print(f"Loading embedding model: {settings.embedding_model}")
        _embeddings_instance = HuggingFaceEmbeddings(
            model_name=settings.embedding_model,
            model_kwargs={"device": "cpu"},
            encode_kwargs={"normalize_embeddings": True},
        )
        print("Embedding model loaded successfully")

    return _embeddings_instance
