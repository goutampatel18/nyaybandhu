"""Pydantic schemas for chatbot request, response, and history."""

from datetime import datetime
from typing import Any

from pydantic import BaseModel, ConfigDict, Field


class ChatRequest(BaseModel):
    message: str = Field(
        ...,
        min_length=1,
        max_length=2000,
        description="The user's legal question or query",
        examples=["What is the Right to Information Act?"],
    )


class ChatResponse(BaseModel):
    reply: str = Field(..., description="The bot's response to the user's query")
    sources: list[dict[str, Any]] = Field(
        default_factory=list,
        description="Sources used to generate the response",
    )


class ChatHistoryItem(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    question: str
    response: str
    sources: list[dict[str, Any]] = Field(default_factory=list)
    created_at: datetime


class ChatHistoryResponse(BaseModel):
    history: list[ChatHistoryItem]
    total: int
