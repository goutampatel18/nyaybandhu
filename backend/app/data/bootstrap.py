from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.library import LibraryAct, LibraryBook

BOOK_SEED_DATA = [
    {
        "title": "Indian Constitutional Law",
        "author": "M.P. Jain",
        "year": "2022",
        "description": "A comprehensive analysis of the Indian Constitution and constitutional law.",
        "cover_image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3",
    },
    {
        "title": "Law of Torts",
        "author": "Ratanlal & Dhirajlal",
        "year": "2021",
        "description": "Classic text on the law of torts in the Indian context.",
        "cover_image": "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3",
    },
    {
        "title": "Criminal Procedure Code",
        "author": "K.N. Chandrasekharan Pillai",
        "year": "2020",
        "description": "Detailed commentary on the Criminal Procedure Code.",
        "cover_image": "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3",
    },
    {
        "title": "The Indian Evidence Act",
        "author": "Batuk Lal",
        "year": "2021",
        "description": "Commentary on the Indian Evidence Act with case references.",
        "cover_image": "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3",
    },
    {
        "title": "Law of Contracts",
        "author": "Avtar Singh",
        "year": "2023",
        "description": "Detailed explanation of contract law principles in India.",
        "cover_image": "https://images.unsplash.com/photo-1560184611-44e3dba48541?ixlib=rb-4.0.3",
    },
    {
        "title": "Family Law in India",
        "author": "Paras Diwan",
        "year": "2022",
        "description": "Comprehensive coverage of family law across different personal laws.",
        "cover_image": "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3",
    },
]

ACT_SEED_DATA = [
    {"name": "Constitution of India", "last_updated": "Jan 26, 2023"},
    {"name": "Indian Penal Code, 1860", "last_updated": "Dec 15, 2022"},
    {"name": "Code of Criminal Procedure, 1973", "last_updated": "Nov 30, 2022"},
    {"name": "Indian Evidence Act, 1872", "last_updated": "Oct 10, 2022"},
    {"name": "Civil Procedure Code, 1908", "last_updated": "Sep 05, 2022"},
    {"name": "Contract Act, 1872", "last_updated": "Aug 22, 2022"},
    {"name": "Right to Information Act, 2005", "last_updated": "Jul 18, 2022"},
    {"name": "Labour Codes", "last_updated": "Jun 30, 2022"},
]


async def seed_reference_data(session: AsyncSession) -> None:
    book_count = await session.scalar(select(func.count(LibraryBook.id)))
    act_count = await session.scalar(select(func.count(LibraryAct.id)))

    if not book_count:
        session.add_all([LibraryBook(**book) for book in BOOK_SEED_DATA])

    if not act_count:
        session.add_all([LibraryAct(**act) for act in ACT_SEED_DATA])

    if not book_count or not act_count:
        await session.commit()
