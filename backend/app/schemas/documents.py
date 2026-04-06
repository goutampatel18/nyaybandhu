from datetime import datetime

from pydantic import BaseModel, ConfigDict


class DocumentResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    filename: str
    stored_filename: str
    file_path: str
    content_type: str | None
    file_size: int | None
    status: str
    chunk_count: int
    created_at: datetime
    updated_at: datetime | None
    ingested_at: datetime | None


class DocumentListResponse(BaseModel):
    documents: list[DocumentResponse]
    total: int


class IngestResponse(BaseModel):
    status: str
    message: str
    documents_loaded: int = 0
    chunks_created: int = 0


class UploadResponse(BaseModel):
    status: str
    message: str
    uploaded: list[DocumentResponse]
    ingestion: IngestResponse | None = None
