"""RAG chain for retrieval plus generation."""

import logging

from langchain_core.documents import Document

from app.core.config import settings
from app.rag.vector_store import get_vector_store, query_vector_store

logger = logging.getLogger(__name__)

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


def _format_context(documents: list[Document]) -> str:
    if not documents:
        return "No relevant context found."

    cleaned = []
    for doc in documents:
        content = doc.page_content.strip()

        # Remove unwanted patterns (numbers, noise)
        if len(content) < 30:
            continue

        cleaned.append(content)

    return "\n\n".join(cleaned[:3])  # only top 3 clean chunks


def _extract_sources(documents: list[Document]) -> list[dict]:
    sources = []
    seen = set()
    for document in documents:
        source = document.metadata.get("source", "Unknown")
        if source in seen:
            continue
        seen.add(source)
        sources.append(
            {
                "name": source,
                "type": document.metadata.get("type", "document"),
            }
        )
    return sources


async def generate_rag_response(query: str) -> dict:
    if get_vector_store() is None:
        return {
            "reply": (
                "The knowledge base has not been initialized yet. "
                "Please ingest documents first by calling the /api/documents/ingest endpoint. "
                "In the meantime, I can try to help with general legal questions."
            ),
            "sources": [],
        }

    retrieved_docs = query_vector_store(query, k=3)

    if not retrieved_docs:
        return {
            "reply": (
                "I couldn't find relevant information in my knowledge base for your query. "
                "Please try rephrasing your question, or consult the National Legal Services Authority "
                "(NALSA) helpline at 15100 for free legal assistance."
            ),
            "sources": [],
        }

    context = _format_context(retrieved_docs)
    sources = _extract_sources(retrieved_docs)

    try:
        reply = await _generate_with_ollama(query, context)
    except Exception as exc:
        logger.warning(
            "Ollama unavailable (%s), falling back to context-based response", exc
        )
        reply = _generate_context_response(retrieved_docs)

    return {
        "reply": reply,
        "sources": sources,
    }


async def _generate_with_ollama(query: str, context: str) -> str:
    import httpx

    prompt = f"""
You are NyayBandhu, an AI legal assistant for Indian law.

STRICT INSTRUCTIONS:
- Answer ONLY from the given context
- Give a clear, structured explanation
- Do NOT copy raw text
- Do NOT include random numbers or irrelevant lines
- If answer is not clear → say "Not found in legal database"
- Keep answer simple and helpful

Context:
{context}

Question:
{query}

Answer (in clear explanation form):
"""

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
        return data.get(
            "response",
            "I apologize, but I couldn't generate a response. Please try again.",
        )


def _generate_context_response(documents: list[Document]) -> str:
    if not documents:
        return "I couldn't find relevant information for your query."

    best_document = documents[0]
    content = best_document.page_content.strip()

    if content.startswith("Question:") and "\nAnswer:" in content:
        answer = content.split("\nAnswer:", 1)[1].strip()
        return (
            f"{answer}\n\n"
            f"Source: {best_document.metadata.get('source', 'Legal Knowledge Base')}\n\n"
            "Note: This information is from our legal database. For specific legal advice, "
            "please consult a qualified lawyer or contact NALSA helpline at 15100."
        )

    return f"""
Here is the relevant legal information:

{content[:500]}

Note: This is extracted from legal documents. Please consult a lawyer for final advice.
"""
