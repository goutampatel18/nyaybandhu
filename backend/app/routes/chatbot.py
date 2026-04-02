"""Chatbot route — handles legal query messages."""

from fastapi import APIRouter

from app.schemas.chatbot import ChatRequest, ChatResponse
from app.rag.chain import generate_rag_response

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Process a user's legal question and return a response using the RAG pipeline.
    """
    # Generating response using Ollama + FAISS RAG setup
    response_data = await generate_rag_response(request.message)
    return ChatResponse(
        reply=response_data["reply"],
        sources=response_data["sources"],
    )
