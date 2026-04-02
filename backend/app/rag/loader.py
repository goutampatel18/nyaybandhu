"""
Document loader — loads JSON, CSV, PDF, and text files from the data directory.
Converts them into LangChain Document objects for processing.
"""

import json
import csv
import os
from pathlib import Path
from typing import List

from langchain.schema import Document


def load_json_qa(file_path: str) -> List[Document]:
    """Load a JSON file containing question-answer pairs."""
    documents = []
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    for i, item in enumerate(data):
        question = item.get("question", "")
        answer = item.get("answer", "")
        content = f"Question: {question}\nAnswer: {answer}"
        documents.append(
            Document(
                page_content=content,
                metadata={
                    "source": os.path.basename(file_path),
                    "type": "qa",
                    "index": i,
                },
            )
        )
    return documents


def load_csv_articles(file_path: str) -> List[Document]:
    """Load a CSV file containing constitutional articles or similar structured data."""
    documents = []
    with open(file_path, "r", encoding="utf-8", errors="replace") as f:
        reader = csv.reader(f)
        headers = next(reader, None)

        for i, row in enumerate(reader):
            if row:
                content = " ".join(row).strip()
                if len(content) > 20:  # Skip very short rows
                    documents.append(
                        Document(
                            page_content=content,
                            metadata={
                                "source": os.path.basename(file_path),
                                "type": "article",
                                "index": i,
                            },
                        )
                    )
    return documents


def load_text_file(file_path: str) -> List[Document]:
    """Load a plain text file."""
    with open(file_path, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()

    return [
        Document(
            page_content=content,
            metadata={
                "source": os.path.basename(file_path),
                "type": "text",
            },
        )
    ]


def load_pdf_file(file_path: str) -> List[Document]:
    """Load a PDF file using pypdf."""
    try:
        from langchain_community.document_loaders import PyPDFLoader
        loader = PyPDFLoader(file_path)
        return loader.load()
    except ImportError:
        print(f"Warning: pypdf not installed. Skipping PDF: {file_path}")
        return []


def load_all_documents(data_dir: str) -> List[Document]:
    """
    Load all supported documents from the data directory.
    Supports: .json, .csv, .txt, .pdf
    """
    documents = []
    data_path = Path(data_dir)

    if not data_path.exists():
        print(f"Warning: Data directory not found: {data_dir}")
        return documents

    for file_path in data_path.iterdir():
        if not file_path.is_file():
            continue

        ext = file_path.suffix.lower()
        full_path = str(file_path)

        try:
            if ext == ".json":
                docs = load_json_qa(full_path)
                print(f"  Loaded {len(docs)} documents from {file_path.name}")
                documents.extend(docs)
            elif ext == ".csv":
                docs = load_csv_articles(full_path)
                print(f"  Loaded {len(docs)} documents from {file_path.name}")
                documents.extend(docs)
            elif ext == ".txt":
                docs = load_text_file(full_path)
                print(f"  Loaded {len(docs)} documents from {file_path.name}")
                documents.extend(docs)
            elif ext == ".pdf":
                docs = load_pdf_file(full_path)
                print(f"  Loaded {len(docs)} documents from {file_path.name}")
                documents.extend(docs)
            else:
                print(f"  Skipping unsupported file: {file_path.name}")
        except Exception as e:
            print(f"  Error loading {file_path.name}: {e}")

    print(f"Total documents loaded: {len(documents)}")
    return documents
