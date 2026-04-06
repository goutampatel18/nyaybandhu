/**
 * Centralized API service layer.
 * All HTTP calls to the backend go through this module.
 *
 * Set VITE_API_BASE_URL in a .env file to point at your FastAPI backend.
 * Default: http://localhost:8000/api
 */

import type {
  ApiError,
  ChatHistoryResponse,
  ChatResponse,
  DocumentsResponse,
  IngestResponse,
  UploadResponse,
} from '@/types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

/**
 * Generic fetch wrapper with error handling.
 */
async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  const isFormData = options?.body instanceof FormData;

  const response = await fetch(url, {
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(options?.headers ?? {}),
    },
    ...options,
  });

  if (!response.ok) {
    const error: ApiError = {
      message: `API Error: ${response.statusText}`,
      status: response.status,
    };
    throw error;
  }

  return response.json() as Promise<T>;
}

/**
 * Send a chat message to the FastAPI backend.
 * Falls back to local mock if the backend is unreachable.
 */
export async function sendChatMessage(message: string): Promise<ChatResponse> {
  try {
    return await apiFetch<ChatResponse>('/chat', {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
  } catch {
    // Fallback: use local chatbot service when backend is offline
    const { generateBotResponse } = await import('./chatbot');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ reply: generateBotResponse(message) });
      }, 800);
    });
  }
}

/**
 * Health check — verify backend is reachable.
 */
export async function checkHealth(): Promise<{ status: string }> {
  return apiFetch<{ status: string }>('/health');
}

/**
 * Trigger the RAG document ingestion pipeline on the backend.
 */
export async function ingestDocuments(): Promise<import('@/types').IngestResponse> {
  return apiFetch('/documents/ingest', {
    method: 'POST',
  });
}

export async function getDocuments(): Promise<DocumentsResponse> {
  return apiFetch<DocumentsResponse>('/documents');
}

export async function getChatHistory(limit = 20): Promise<ChatHistoryResponse> {
  return apiFetch<ChatHistoryResponse>(`/chat-history?limit=${limit}`);
}

export async function uploadDocuments(
  files: File[] | FileList,
  options?: { ingest?: boolean }
): Promise<UploadResponse> {
  const formData = new FormData();
  Array.from(files).forEach((file) => {
    formData.append('files', file);
  });

  const ingest = options?.ingest ? '?ingest=true' : '';
  return apiFetch<UploadResponse>(`/upload${ingest}`, {
    method: 'POST',
    body: formData,
  });
}

// Re-export for convenience
export { apiFetch, BASE_URL };
