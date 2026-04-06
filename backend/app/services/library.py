from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.library import LibraryAct, LibraryBook


async def list_books(session: AsyncSession) -> list[LibraryBook]:
    result = await session.execute(select(LibraryBook).order_by(LibraryBook.id))
    return list(result.scalars().all())


async def list_acts(session: AsyncSession) -> list[LibraryAct]:
    result = await session.execute(select(LibraryAct).order_by(LibraryAct.id))
    return list(result.scalars().all())
