"""NyayBandhu FastAPI backend application entry point."""

import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.db.init_db import init_db
from app.rag.pipeline import try_load_existing_index
from app.routes import chatbot, documents, health, library

logging.basicConfig(level=logging.DEBUG if settings.debug else logging.INFO)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Application starting up.")
    await init_db()

    if try_load_existing_index():
        logger.info("Vector store loaded successfully on startup.")
    else:
        logger.info("No existing vector store found. Call /api/documents/ingest to build one.")

    yield

    logger.info("Application shutting down.")


def create_app() -> FastAPI:
    app = FastAPI(
        title=settings.app_name,
        version=settings.app_version,
        description="Backend API for the NyayBandhu legal assistance platform",
        lifespan=lifespan,
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins_list,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(health.router, prefix="/api", tags=["Health"])
    app.include_router(chatbot.router, prefix="/api", tags=["Chatbot"])
    app.include_router(library.router, prefix="/api", tags=["Library"])
    app.include_router(documents.router, prefix="/api", tags=["Documents"])

    return app


app = create_app()
