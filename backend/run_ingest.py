import asyncio
import sys
import traceback


async def main() -> None:
    from app.db.init_db import init_db
    from app.db.session import AsyncSessionLocal
    from app.rag.pipeline import ingest_documents

    await init_db()
    async with AsyncSessionLocal() as session:
        result = await ingest_documents(session)
    print("Ingestion result:", result)


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except Exception:
        print("Error during ingestion:", file=sys.stderr)
        traceback.print_exc()
