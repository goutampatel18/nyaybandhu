# NyayBandhu: AI Legal Assistant

NyayBandhu is a robust, modern, full-stack platform designed to provide accessible legal information and assistance to Indian citizens. Built with a React + Vite frontend and a highly scalable FastAPI backend, it features a comprehensive Retrieval-Augmented Generation (RAG) chatbot using HuggingFace embeddings, FAISS vector search, and Ollama.

![NyayBandhu Banner](https://via.placeholder.com/1000x300?text=NyayBandhu+AI+Legal+Assistant)

## 🌟 Key Features

- **🎓 Modern UI:** Highly responsive UI utilizing India-themed aesthetics (India Saffron & Blue), fully optimized for citizens to explore legal rights, resources, and case histories.
- **🤖 Robust RAG Chatbot:** Ask complex questions about the Indian Constitution, IPC, and labor laws, and get answers grounded entirely in the internal knowledge base with precise source citations.
- **📚 Rich Knowledge Base:** Includes curated pages for Citizen's Charters, historical archives, legal aid, circulars, and comprehensive case databases.
- **⚡ High-Performance Backend:** Engineered using Python, FastAPI, and Pydantic for high concurrency and type safety.
- **🔒 Local-First AI:** Leverages local LLMs via Ollama (`llama3.2`) and local embeddings via `sentence-transformers`, meaning your legal data never leaves your infrastructure!

## 🚀 Directory Structure

```text
📁 nyaybandhu/
├── 📁 frontend/            # React (TypeScript) frontend application
│   ├── src/                # Components, hooks, pages, contexts
│   └── package.json        
├── 📁 backend/             # Python FastAPI backend application
│   ├── app/                # Main application logic (routes, schemas, rag)
│   ├── vector_store/       # FAISS indexes for RAG
│   └── requirements.txt    
└── 📁 datasets/            # Core datasets for Document Ingestion (CSV, JSON, PDF)
```

## 🛠️ Installation & Setup

### 1. Run the Frontend

The frontend is built using Vite, React, and Tailwind CSS.

```bash
cd frontend
npm install
npm run dev
```
> The frontend will be available at `http://localhost:5173`.

### 2. Configure the Backend

The backend utilizes Python 3.10+ and requires Ollama running locally.

```bash
cd backend
python -m venv venv

# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
# source venv/bin/activate

pip install -r requirements.txt
```

### 3. Provide Environment Variables

Create a `.env` file inside the `backend/` folder:

```ini
APP_NAME="NyayBandhu API"
APP_VERSION="1.0.0"
DEBUG=true
CORS_ORIGINS="http://localhost:5173,http://localhost:8080"
OLLAMA_BASE_URL="http://localhost:11434"
OLLAMA_MODEL="llama3.2"
EMBEDDING_MODEL="all-MiniLM-L6-v2"
VECTOR_STORE_PATH="./vector_store"
DATA_DIR="../datasets"
CHUNK_SIZE=1000
CHUNK_OVERLAP=200
```

*Note: Ensure [Ollama](https://ollama.com/) is installed and the `llama3.2` model is pulled (`ollama pull llama3.2`).*

### 4. Run the Backend & Build Knowledge Base

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```
> The API will be available at `http://localhost:8000`
> API Documentation (Swagger) is at `http://localhost:8000/docs`

**Ingest the Data:** To activate the RAG capability, you must build the FAISS index by calling the ingestion route (ensure your data is placed in the `datasets/` folder):

```bash
curl -X POST http://localhost:8000/api/documents/ingest
```

## 🤝 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License
Distributed under the MIT License. See `LICENSE` for more information.
