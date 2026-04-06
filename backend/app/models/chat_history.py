from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, JSON, Text, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class ChatHistory(Base):
    __tablename__ = "chat_history"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    user_id: Mapped[int | None] = mapped_column(ForeignKey("users.id"), nullable=True)
    question: Mapped[str] = mapped_column(Text)
    response: Mapped[str] = mapped_column(Text)
    sources: Mapped[list[dict]] = mapped_column(JSON, default=list)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
    )
