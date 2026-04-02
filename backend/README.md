# FastAPI Backend for NyayBandhu

A clean, modular FastAPI backend for the NyayBandhu legal assistance platform.

## Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/chat` | Send chatbot query |
| GET | `/api/library/books` | List legal books |
| GET | `/api/library/acts` | List bare acts |

## Docs

Visit `http://localhost:8000/docs` for interactive Swagger documentation.
