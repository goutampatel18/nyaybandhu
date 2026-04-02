"""
RAG Chain — combines retrieval with LLM generation.
Uses Ollama for the LLM and FAISS for retrieval.
Falls back to context-only responses if Ollama is unavailable.
"""

from typing import List, Optional
from langchain.schema import Document
from app.rag.vector_store import query_vector_store, get_vector_store
from app.core.config import settings


LEGAL_SYSTEM_PROMPT = """You are NyayBandhu, an AI legal assistant specializing in Indian law. 
You are created by the Department of Justice, Government of India.
Your role is to provide accurate, helpful information about Indian law, constitution, and legal procedures.

IMPORTANT RULES:
1. Always base your answers on the provided context documents.
2. If the context doesn't contain relevant information, say so honestly.
3. Never make up legal information or cite non-existent laws.
4. Always suggest consulting a qualified lawyer for specific legal advice.
5. Be respectful, clear, and use simple language that all citizens can understand.
6. When citing constitutional articles or laws, be precise with article numbers.
"""


def _format_context(documents: List[Document]) -> str:
    """Format retrieved documents into a context string."""
    if not documents:
        return "No relevant context found."

    context_parts = []
    for i, doc in enumerate(documents, 1):
        source = doc.metadata.get("source", "Unknown")
        context_parts.append(f"[Source {i}: {source}]\n{doc.page_content}")

    return "\n\n---\n\n".join(context_parts)


def _extract_sources(documents: List[Document]) -> List[dict]:
    """Extract source information from retrieved documents."""
    sources = []
    seen = set()
    for doc in documents:
        source = doc.metadata.get("source", "Unknown")
        if source not in seen:
            seen.add(source)
            sources.append({
                "name": source,
                "type": doc.metadata.get("type", "document"),
            })
    return sources


async def generate_rag_response(query: str) -> dict:
    """
    Generate a response using RAG pipeline:
    1. Retrieve relevant documents from FAISS
    2. Try to generate response via Ollama LLM
    3. Fall back to context-based response if Ollama unavailable
    
    Returns dict with 'reply' and 'sources'.
    """
    # Step 1: Check if vector store exists
    vs = get_vector_store()
    if vs is None:
        return {
            "reply": (
                "The knowledge base has not been initialized yet. "
                "Please ingest documents first by calling the /api/documents/ingest endpoint. "
                "In the meantime, I can try to help with general legal questions."
            ),
            "sources": [],
        }

    # Step 2: Retrieve relevant documents
    retrieved_docs = query_vector_store(query, k=4)

    if not retrieved_docs:
        return {
            "reply": (
                "I couldn't find relevant information in my knowledge base for your query. "
                "Please try rephrasing your question, or consult the National Legal Services Authority "
                "(NALSA) helpline at 15100 for free legal assistance."
            ),
            "sources": [],
        }

    # Step 3: Format context
    context = _format_context(retrieved_docs)
    sources = _extract_sources(retrieved_docs)

    # Step 4: Try LLM generation via Ollama
    try:
        reply = await _generate_with_ollama(query, context)
    except Exception as e:
        print(f"Ollama unavailable ({e}), falling back to context-based response")
        reply = _generate_context_response(query, retrieved_docs)

    return {
        "reply": reply,
        "sources": sources,
    }


async def _generate_with_ollama(query: str, context: str) -> str:
    """Generate a response using Ollama LLM."""
    import httpx

    prompt = f"""{LEGAL_SYSTEM_PROMPT}

Context from legal knowledge base:
{context}

User Question: {query}

Based on the context provided, give a clear, accurate, and helpful answer. If the context doesn't fully answer the question, acknowledge what you know and what you don't."""

    async with httpx.AsyncClient(timeout=60.0) as client:
        response = await client.post(
            f"{settings.ollama_base_url}/api/generate",
            json={
                "model": settings.ollama_model,
                "prompt": prompt,
                "stream": False,
                "options": {
                    "temperature": 0.3,
                    "top_p": 0.9,
                    "num_predict": 500,
                },
            },
        )
        response.raise_for_status()
        data = response.json()
        return data.get("response", "I apologize, but I couldn't generate a response. Please try again.")


def _generate_context_response(query: str, documents: List[Document]) -> str:
    """
    Generate a response directly from context when Ollama is unavailable.
    Returns the most relevant document content with a helpful wrapper.
    """
    if not documents:
        return "I couldn't find relevant information for your query."

    # Use the most relevant document(s)
    best_doc = documents[0]
    content = best_doc.page_content.strip()

    # If it's a QA pair, extract the answer
    if content.startswith("Question:") and "\nAnswer:" in content:
        answer = content.split("\nAnswer:", 1)[1].strip()
        return (
            f"{answer}\n\n"
            f"📚 Source: {best_doc.metadata.get('source', 'Legal Knowledge Base')}\n\n"
            f"⚠️ Note: This information is from our legal database. For specific legal advice, "
            f"please consult a qualified lawyer or contact NALSA helpline at 15100."
        )

    return (
        f"Based on our legal knowledge base:\n\n{content[:800]}\n\n"
        f"📚 Source: {best_doc.metadata.get('source', 'Legal Knowledge Base')}\n\n"
        f"⚠️ Note: For specific legal advice, please consult a qualified lawyer."
    )
