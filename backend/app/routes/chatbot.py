"""Chatbot route handles legal query messages and history."""

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db_session
from app.schemas.chatbot import (
    ChatHistoryItem,
    ChatHistoryResponse,
    ChatRequest,
    ChatResponse,
)
from app.services.chatbot import generate_chat_reply, list_chat_history

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
async def chat(
    request: ChatRequest,
    session: AsyncSession = Depends(get_db_session),
):
    response_data = await generate_chat_reply(session, request.message)
    return ChatResponse(
        reply=response_data["reply"],
        sources=response_data["sources"],
    )


@router.get("/chat-history", response_model=ChatHistoryResponse)
async def get_chat_history(
    limit: int = Query(default=20, ge=1, le=100),
    session: AsyncSession = Depends(get_db_session),
):
    history = await list_chat_history(session, limit=limit)
    return ChatHistoryResponse(
        history=[ChatHistoryItem.model_validate(item) for item in history],
        total=len(history),
    )
