"""Pydantic schemas for library resources."""

from pydantic import BaseModel, Field


class BookResponse(BaseModel):
    """A legal book in the library."""

    title: str
    author: str
    year: str
    description: str
    cover_image: str = Field(alias="coverImage", default="")

    class Config:
        populate_by_name = True


class ActResponse(BaseModel):
    """A bare act / legislation."""

    name: str
    last_updated: str = Field(alias="lastUpdated", default="")

    class Config:
        populate_by_name = True


class LibraryBooksResponse(BaseModel):
    """Response containing a list of legal books."""

    books: list[BookResponse]
    total: int


class LibraryActsResponse(BaseModel):
    """Response containing a list of bare acts."""

    acts: list[ActResponse]
    total: int
