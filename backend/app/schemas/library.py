"""Pydantic schemas for library resources."""

from pydantic import BaseModel, ConfigDict, Field


class BookResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, from_attributes=True)

    title: str
    author: str
    year: str
    description: str
    cover_image: str = Field(alias="coverImage", default="")


class ActResponse(BaseModel):
    model_config = ConfigDict(populate_by_name=True, from_attributes=True)

    name: str
    last_updated: str = Field(alias="lastUpdated", default="")


class LibraryBooksResponse(BaseModel):
    books: list[BookResponse]
    total: int


class LibraryActsResponse(BaseModel):
    acts: list[ActResponse]
    total: int
