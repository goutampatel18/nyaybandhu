"""Document loader for JSON, CSV, PDF, and text files used in the RAG pipeline."""

import csv
import json
import logging
from pathlib import Path

from langchain_core.documents import Document

logger = logging.getLogger(__name__)


def load_json_qa(file_path: Path) -> list[Document]:
    documents = []
    with file_path.open("r", encoding="utf-8") as file:
        data = json.load(file)

    for index, item in enumerate(data):
        question = item.get("question", "")
        answer = item.get("answer", "")
        content = f"Question: {question}\nAnswer: {answer}"
        documents.append(
            Document(
                page_content=content,
                metadata={
                    "source": file_path.name,
                    "file_path": str(file_path.resolve()),
                    "type": "qa",
                    "index": index,
                },
            )
        )
    return documents


def load_csv_articles(file_path: Path) -> list[Document]:
    documents = []
    with file_path.open("r", encoding="utf-8", errors="replace") as file:
        reader = csv.reader(file)
        next(reader, None)

        for index, row in enumerate(reader):
            if not row:
                continue

            content = " ".join(row).strip()
            if len(content) <= 20:
                continue

            documents.append(
                Document(
                    page_content=content,
                    metadata={
                        "source": file_path.name,
                        "file_path": str(file_path.resolve()),
                        "type": "article",
                        "index": index,
                    },
                )
            )
    return documents


def load_text_file(file_path: Path) -> list[Document]:
    with file_path.open("r", encoding="utf-8", errors="replace") as file:
        content = file.read()

    return [
        Document(
            page_content=content,
            metadata={
                "source": file_path.name,
                "file_path": str(file_path.resolve()),
                "type": "text",
            },
        )
    ]


def load_pdf_file(file_path: Path) -> list[Document]:
    try:
        from langchain_community.document_loaders import PyPDFLoader

        loader = PyPDFLoader(str(file_path))
        documents = loader.load()
        for document in documents:
            document.metadata["source"] = file_path.name
            document.metadata["file_path"] = str(file_path.resolve())
            document.metadata.setdefault("type", "pdf")
        return documents
    except ImportError:
        logger.warning("pypdf not installed. Skipping PDF: %s", file_path)
        return []


def load_all_documents(data_dir: str | Path) -> list[Document]:
    documents: list[Document] = []
    data_path = Path(data_dir)

    if not data_path.exists():
        logger.warning("Data directory not found: %s", data_path)
        return documents

    for file_path in data_path.rglob("*"):
        if not file_path.is_file():
            continue

        ext = file_path.suffix.lower()
        try:
            if ext == ".json":
                docs = load_json_qa(file_path)
            elif ext == ".csv":
                docs = load_csv_articles(file_path)
            elif ext == ".txt":
                docs = load_text_file(file_path)
            elif ext == ".pdf":
                docs = load_pdf_file(file_path)
            else:
                continue

            documents.extend(docs)
            logger.info("Loaded %s document(s) from %s", len(docs), file_path.name)
        except Exception as exc:
            logger.exception("Error loading %s: %s", file_path.name, exc)

    logger.info("Total documents loaded from %s: %s", data_path, len(documents))
    return documents
