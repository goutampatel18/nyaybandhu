"""Library routes — serves legal books and bare acts data."""

from fastapi import APIRouter

from app.schemas.library import (
    BookResponse,
    ActResponse,
    LibraryBooksResponse,
    LibraryActsResponse,
)

router = APIRouter()

# In-memory data — replace with database queries in production
_BOOKS = [
    BookResponse(
        title="Indian Constitutional Law",
        author="M.P. Jain",
        year="2022",
        description="A comprehensive analysis of the Indian Constitution and constitutional law.",
        cover_image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3",
    ),
    BookResponse(
        title="Law of Torts",
        author="Ratanlal & Dhirajlal",
        year="2021",
        description="Classic text on the law of torts in the Indian context.",
        cover_image="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3",
    ),
    BookResponse(
        title="Criminal Procedure Code",
        author="K.N. Chandrasekharan Pillai",
        year="2020",
        description="Detailed commentary on the Criminal Procedure Code.",
        cover_image="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3",
    ),
    BookResponse(
        title="The Indian Evidence Act",
        author="Batuk Lal",
        year="2021",
        description="Commentary on the Indian Evidence Act with case references.",
        cover_image="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3",
    ),
    BookResponse(
        title="Law of Contracts",
        author="Avtar Singh",
        year="2023",
        description="Detailed explanation of contract law principles in India.",
        cover_image="https://images.unsplash.com/photo-1560184611-44e3dba48541?ixlib=rb-4.0.3",
    ),
    BookResponse(
        title="Family Law in India",
        author="Paras Diwan",
        year="2022",
        description="Comprehensive coverage of family law across different personal laws.",
        cover_image="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3",
    ),
]

_ACTS = [
    ActResponse(name="Constitution of India", last_updated="Jan 26, 2023"),
    ActResponse(name="Indian Penal Code, 1860", last_updated="Dec 15, 2022"),
    ActResponse(name="Code of Criminal Procedure, 1973", last_updated="Nov 30, 2022"),
    ActResponse(name="Indian Evidence Act, 1872", last_updated="Oct 10, 2022"),
    ActResponse(name="Civil Procedure Code, 1908", last_updated="Sep 05, 2022"),
    ActResponse(name="Contract Act, 1872", last_updated="Aug 22, 2022"),
    ActResponse(name="Right to Information Act, 2005", last_updated="Jul 18, 2022"),
    ActResponse(name="Labour Codes", last_updated="Jun 30, 2022"),
]


@router.get("/library/books", response_model=LibraryBooksResponse)
async def list_books():
    """Return all available legal books."""
    return LibraryBooksResponse(books=_BOOKS, total=len(_BOOKS))


@router.get("/library/acts", response_model=LibraryActsResponse)
async def list_acts():
    """Return all available bare acts."""
    return LibraryActsResponse(acts=_ACTS, total=len(_ACTS))
