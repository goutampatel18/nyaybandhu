"""Backward-compatible database dependency exports."""

from app.db.session import AsyncSessionLocal, engine, get_db_session


async def get_db():
    async for session in get_db_session():
        yield session


__all__ = ["AsyncSessionLocal", "engine", "get_db", "get_db_session"]
