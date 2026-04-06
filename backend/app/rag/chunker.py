"""
Text chunker — splits documents into overlapping chunks for embedding.
"""

from typing import List
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter


def chunk_documents(
    documents: List[Document],
    chunk_size: int = 1000,
    chunk_overlap: int = 200,
) -> List[Document]:
    """
    Split documents into smaller chunks for embedding and retrieval.

    For QA-type documents (short Q&A pairs), we keep them as-is since
    they're already small enough. For longer documents (articles, PDFs),
    we split them into overlapping chunks.
    """
    short_docs = []
    long_docs = []

    for doc in documents:
        if len(doc.page_content) <= chunk_size:
            short_docs.append(doc)
        else:
            long_docs.append(doc)

    # Split long documents
    if long_docs:
        splitter = RecursiveCharacterTextSplitter(
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap,
            length_function=len,
            separators=["\n\n", "\n", ". ", " ", ""],
        )
        split_docs = splitter.split_documents(long_docs)
    else:
        split_docs = []

    all_chunks = short_docs + split_docs
    print(f"Chunking: {len(documents)} docs -> {len(all_chunks)} chunks")
    return all_chunks
