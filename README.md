# ⚖️ NyayBandhu – AI Legal Assistant (RAG + Local LLM)

NyayBandhu is a full-stack AI-powered legal assistant designed to make Indian legal information accessible to everyone. It uses a **Retrieval-Augmented Generation (RAG)** pipeline with a local LLM (Ollama), FAISS vector search, and FastAPI backend.

---

## 🚀 Features

* 🤖 AI Legal Chatbot (Indian Law focused)
* 📚 RAG Pipeline (FAISS + HuggingFace embeddings)
* 🧠 Local LLM (Ollama – no external API)
* ⚡ FastAPI backend (async + scalable)
* 🎨 React + Vite frontend
* 🗄️ PostgreSQL database (chat history, metadata)
* 🔒 Privacy-first (runs locally)

---

## 🏗️ Tech Stack

**Frontend**

* React (TypeScript)
* Vite
* Tailwind CSS

**Backend**

* FastAPI
* PostgreSQL + SQLAlchemy
* FAISS (Vector DB)
* Sentence Transformers

**AI / ML**

* Ollama (LLM)
* HuggingFace embeddings

---

## 📁 Project Structure

```
nyaybandhu/
├── frontend/
├── backend/
│   ├── app/
│   ├── vector_store/
│   └── requirements.txt
├── datasets/
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have installed:

* Python 3.10+
* Node.js (v18+)
* PostgreSQL
* Ollama

---

## 🧠 Step 1: Setup Ollama

Install Ollama:

👉 https://ollama.com

Run:

```bash
ollama pull llama3.2
```

Start server (auto runs usually):

```bash
ollama serve
```

---

## 🗄️ Step 2: Setup PostgreSQL

1. Open psql:

```bash
psql -U postgres
```

2. Create database:

```sql
CREATE DATABASE nyaybandhu;
```

---

## ⚙️ Step 3: Backend Setup

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate  # Windows

pip install -r requirements.txt
```

---

## 🔐 Step 4: Environment Variables

Create `.env` inside `backend/`:

```ini
APP_NAME="NyayBandhu API"
DEBUG=true

DATABASE_URL=postgresql+asyncpg://postgres:YOUR_PASSWORD@localhost:5432/nyaybandhu

OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2

EMBEDDING_MODEL=all-MiniLM-L6-v2
VECTOR_STORE_PATH=./vector_store
DATA_DIR=../datasets

CHUNK_SIZE=300
CHUNK_OVERLAP=50
```

---

## ▶️ Step 5: Run Backend

```bash
uvicorn app.main:app --reload
```

Open:

```
http://localhost:8000/docs
```

---

## 📄 Step 6: Build Knowledge Base (IMPORTANT)

Run this endpoint:

```
POST /api/documents/ingest
```

👉 This creates FAISS vector index
👉 Must run before using chatbot

---

## 🎨 Step 7: Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 💬 How to Use

Ask questions like:

* What is IPC 420?
* Explain Indian Constitution
* What are labour laws?

---

## 🧠 How it Works

```
User → React UI
     → FastAPI Backend
     → FAISS (retrieve documents)
     → Ollama (generate response)
     → Answer + Sources
```

---

## ⚠️ Notes

* First response may be slow (model loading)
* Ensure PostgreSQL is running
* Ensure Ollama is running
* Re-run ingestion if datasets change

---

## 🚀 Future Improvements

* Streaming responses (ChatGPT-like UX)
* Better RAG ranking
* Chat memory (context-aware)
* Deployment (Docker + Cloud)

---

## 🤝 Contributing

PRs are welcome. Feel free to improve RAG, UI, or add new datasets.

---

## 📜 License

MIT License
