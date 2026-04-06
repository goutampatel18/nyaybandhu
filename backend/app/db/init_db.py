from app.data.bootstrap import seed_reference_data
from app.db.base import Base
from app.db.session import AsyncSessionLocal, engine
from app.models import chat_history, document, embedding_metadata, library, user  # noqa: F401


async def init_db() -> None:
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with AsyncSessionLocal() as session:
        await seed_reference_data(session)
