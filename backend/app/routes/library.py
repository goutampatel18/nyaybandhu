"""Library routes backed by the database."""

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db_session
from app.schemas.library import (
    ActResponse,
    BookResponse,
    LibraryActsResponse,
    LibraryBooksResponse,
)
from app.services.library import list_acts, list_books

router = APIRouter()


@router.get("/library/books", response_model=LibraryBooksResponse)
async def list_books_route(session: AsyncSession = Depends(get_db_session)):
    books = await list_books(session)
    return LibraryBooksResponse(
        books=[BookResponse.model_validate(book) for book in books],
        total=len(books),
    )


@router.get("/library/acts", response_model=LibraryActsResponse)
async def list_acts_route(session: AsyncSession = Depends(get_db_session)):
    acts = await list_acts(session)
    return LibraryActsResponse(
        acts=[ActResponse.model_validate(act) for act in acts],
        total=len(acts),
    )
