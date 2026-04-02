// ========================
// Chat Types
// ========================

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  sources?: Array<{ name: string; type: string }>;
}

// ========================
// Navigation Types
// ========================

export interface NavItem {
  name: string;
  path: string;
}

export interface ExternalLink {
  name: string;
  url: string;
}

// ========================
// Home Page Types
// ========================

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export interface NewsItem {
  title: string;
  date: string;
  snippet: string;
  url: string;
}

export interface CaseItem {
  title: string;
  court: string;
  date: string;
  snippet: string;
  url: string;
}

// ========================
// Library Types
// ========================

export interface ConstitutionLanguage {
  code: string;
  name: string;
  available: boolean;
}

export interface LegalBook {
  title: string;
  author: string;
  year: string;
  description: string;
  coverImage: string;
}

export interface BareAct {
  name: string;
  lastUpdated: string;
}

// ========================
// API Types
// ========================

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
  sources?: Array<{ name: string; type: string }>;
}

export interface ApiError {
  message: string;
  status: number;
}

// ========================
// Document/RAG Types
// ========================

export interface DocumentInfo {
  name: string;
  type: string;
  size?: number;
}

export interface UploadResponse {
  status: string;
  message: string;
  filename: string;
}

export interface IngestResponse {
  status: string;
  message: string;
  documents_loaded: number;
  chunks_created: number;
}
