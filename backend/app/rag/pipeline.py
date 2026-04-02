"""
RAG Pipeline — end-to-end document processing pipeline.
Loads documents, chunks them, generates embeddings, and builds FAISS index.
"""

from app.rag.loader import load_all_documents
from app.rag.chunker import chunk_documents
from app.rag.vector_store import build_vector_store, save_vector_store, load_vector_store
from app.core.config import settings


def ingest_documents() -> dict:
    """
    Full ingestion pipeline:
    1. Load all documents from the data directory
    2. Chunk them into smaller pieces
    3. Generate embeddings and build FAISS index
    4. Save the index to disk
    
    Returns stats about the ingestion.
    """
    print(f"\n{'='*50}")
    print("Starting document ingestion pipeline...")
    print(f"Data directory: {settings.data_dir}")
    print(f"{'='*50}\n")

    # Step 1: Load documents
    print("Step 1: Loading documents...")
    documents = load_all_documents(settings.data_dir)

    if not documents:
        return {
            "status": "error",
            "message": "No documents found in the data directory",
            "documents_loaded": 0,
            "chunks_created": 0,
        }

    # Step 2: Chunk documents
    print("\nStep 2: Chunking documents...")
    chunks = chunk_documents(
        documents,
        chunk_size=settings.chunk_size,
        chunk_overlap=settings.chunk_overlap,
    )

    # Step 3: Build vector store
    print("\nStep 3: Building FAISS vector store...")
    build_vector_store(chunks)

    # Step 4: Save to disk
    print("\nStep 4: Saving vector store...")
    save_vector_store()

    result = {
        "status": "success",
        "message": "Documents ingested successfully",
        "documents_loaded": len(documents),
        "chunks_created": len(chunks),
    }

    print(f"\n{'='*50}")
    print(f"Ingestion complete: {result}")
    print(f"{'='*50}\n")

    return result


def try_load_existing_index() -> bool:
    """
    Try to load an existing FAISS index at startup.
    Returns True if successful, False otherwise.
    """
    try:
        vs = load_vector_store()
        return vs is not None
    except Exception as e:
        print(f"Could not load existing vector store: {e}")
        return False
