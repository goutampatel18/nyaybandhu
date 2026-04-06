from sqlalchemy import String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class LibraryBook(Base):
    __tablename__ = "library_books"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String(255))
    author: Mapped[str] = mapped_column(String(255))
    year: Mapped[str] = mapped_column(String(20))
    description: Mapped[str] = mapped_column(Text)
    cover_image: Mapped[str] = mapped_column(Text)


class LibraryAct(Base):
    __tablename__ = "library_acts"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(255))
    last_updated: Mapped[str] = mapped_column(String(100))
