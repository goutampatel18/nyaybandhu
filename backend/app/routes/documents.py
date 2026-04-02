"""Documents route — handles data ingestion and index management."""

from fastapi import APIRouter, BackgroundTasks, HTTPException
from pydantic import BaseModel

from app.rag.pipeline import ingest_documents

router = APIRouter()


class IngestResponse(BaseModel):
    status: str
    message: str
    documents_loaded: int = 0
    chunks_created: int = 0


@router.post("/ingest", response_model=IngestResponse)
async def trigger_ingestion(background_tasks: BackgroundTasks):
    """
    Trigger the RAG document ingestion pipeline.
    This reads from the configured datasets directory and builds a new FAISS index.
    
    Warning: This endpoint runs synchronously for this demo, keeping it simple.
    In production, use background_tasks or Celery.
    """
    try:
        # Note: In a real app we'd trigger this via background_tasks,
        # but returning exact numbers synchronously is better for this demo.
        result = ingest_documents()
        
        if result["status"] == "error":
            raise HTTPException(status_code=400, detail=result["message"])
            
        return IngestResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
