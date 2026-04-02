"""Chatbot route — handles legal query messages."""

from fastapi import APIRouter

from app.schemas.chatbot import ChatRequest, ChatResponse
from app.services.chatbot import generate_bot_response

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Process a user's legal question and return a response.

    Currently uses keyword matching. Can be upgraded to use
    an LLM or retrieval-augmented generation (RAG) pipeline.
    """
    reply = generate_bot_response(request.message)
    return ChatResponse(reply=reply)
