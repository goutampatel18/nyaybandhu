from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Integer, JSON, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class EmbeddingMetadata(Base):
    __tablename__ = "embeddings_metadata"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    document_id: Mapped[int | None] = mapped_column(ForeignKey("documents.id"), nullable=True)
    chunk_index: Mapped[int] = mapped_column(Integer, index=True)
    source: Mapped[str] = mapped_column(String(255), index=True)
    content_excerpt: Mapped[str] = mapped_column(Text)
    metadata_json: Mapped[dict] = mapped_column(JSON, default=dict)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
    )
