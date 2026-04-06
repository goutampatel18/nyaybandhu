"""Documents route handles uploads, listing, and index management."""

from fastapi import APIRouter, Depends, File, HTTPException, Query, UploadFile
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db_session
from app.rag.pipeline import ingest_documents
from app.schemas.documents import (
    DocumentListResponse,
    DocumentResponse,
    IngestResponse,
    UploadResponse,
)
from app.services.documents import list_documents, upload_documents

router = APIRouter()


@router.post("/upload", response_model=UploadResponse)
async def upload_documents_route(
    files: list[UploadFile] = File(...),
    ingest: bool = Query(default=False),
    session: AsyncSession = Depends(get_db_session),
):
    if not files:
        raise HTTPException(status_code=400, detail="No files were provided for upload.")

    uploaded_records, ingestion_result = await upload_documents(
        session,
        files,
        ingest_after_upload=ingest,
    )

    if not uploaded_records:
        raise HTTPException(status_code=400, detail="Uploaded files were empty.")

    return UploadResponse(
        status="success",
        message="Files uploaded successfully.",
        uploaded=[DocumentResponse.model_validate(record) for record in uploaded_records],
        ingestion=IngestResponse(**ingestion_result) if ingestion_result else None,
    )


@router.get("/documents", response_model=DocumentListResponse)
async def list_documents_route(
    session: AsyncSession = Depends(get_db_session),
):
    documents = await list_documents(session)
    return DocumentListResponse(
        documents=[DocumentResponse.model_validate(document) for document in documents],
        total=len(documents),
    )


@router.post("/documents/ingest", response_model=IngestResponse)
async def trigger_ingestion(
    session: AsyncSession = Depends(get_db_session),
):
    try:
        result = await ingest_documents(session)

        if result["status"] == "error":
            raise HTTPException(status_code=400, detail=result["message"])

        return IngestResponse(**result)
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc
