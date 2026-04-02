"""
NyayBandhu FastAPI Backend
Main application entry point with CORS, lifespan, and router registration.
"""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.routes import chatbot, library, health, documents
from app.rag.pipeline import try_load_existing_index


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifecycle manager for FastAPI."""
    print("Application starting up...")
    # Attempt to load RAG vector store
    success = try_load_existing_index()
    if success:
        print("Vector store loaded successfully on startup.")
    else:
        print("No existing vector store found. Call /api/documents/ingest to build one.")
    yield
    print("Application shutting down...")


def create_app() -> FastAPI:
    """Application factory."""
    app = FastAPI(
        title=settings.app_name,
        version=settings.app_version,
        description="Backend API for the NyayBandhu legal assistance platform",
        lifespan=lifespan,
    )

    # CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins_list,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Register routers
    app.include_router(health.router, prefix="/api", tags=["Health"])
    app.include_router(chatbot.router, prefix="/api", tags=["Chatbot"])
    app.include_router(library.router, prefix="/api", tags=["Library"])
    app.include_router(documents.router, prefix="/api/documents", tags=["Documents"])

    return app


app = create_app()
