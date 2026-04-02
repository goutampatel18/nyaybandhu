"""Pydantic schemas for chatbot request/response validation."""

from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    """Incoming chat message from the frontend."""

    message: str = Field(
        ...,
        min_length=1,
        max_length=2000,
        description="The user's legal question or query",
        examples=["What is the Right to Information Act?"],
    )


class ChatResponse(BaseModel):
    """Chatbot response sent back to the frontend."""

    reply: str = Field(
        ...,
        description="The bot's response to the user's query",
    )
    sources: list[dict] = Field(
        default_factory=list,
        description="Sources used to generate the response",
    )
