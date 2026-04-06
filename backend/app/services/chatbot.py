from sqlalchemy import desc, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.chat_history import ChatHistory
from app.rag.chain import generate_rag_response


async def generate_chat_reply(session: AsyncSession, message: str) -> dict:
    response_data = await generate_rag_response(message)

    chat_entry = ChatHistory(
        question=message,
        response=response_data["reply"],
        sources=response_data["sources"],
    )
    session.add(chat_entry)
    await session.commit()

    return response_data


async def list_chat_history(session: AsyncSession, limit: int = 20) -> list[ChatHistory]:
    result = await session.execute(
        select(ChatHistory).order_by(desc(ChatHistory.created_at)).limit(limit)
    )
    return list(result.scalars().all())
