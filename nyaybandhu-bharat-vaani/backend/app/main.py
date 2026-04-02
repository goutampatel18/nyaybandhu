"""
NyayBandhu FastAPI Backend
Main application entry point with CORS, lifespan, and router registration.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.routes import chatbot, library, health


def create_app() -> FastAPI:
    """Application factory."""
    app = FastAPI(
        title=settings.app_name,
        version=settings.app_version,
        description="Backend API for the NyayBandhu legal assistance platform",
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

    return app


app = create_app()
