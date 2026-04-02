import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { ChatMessage } from '@/types';
import { sendChatMessage } from '@/services/api';

// ========================
// Context Shape
// ========================

interface ChatbotContextValue {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  openChatbot: () => void;
  closeChatbot: () => void;
  toggleChatbot: () => void;
  sendMessage: (text: string) => void;
}

const ChatbotContext = createContext<ChatbotContextValue | undefined>(undefined);

// ========================
// Provider
// ========================

const INITIAL_MESSAGE: ChatMessage = {
  id: 1,
  text: "Namaste! I'm Nyaybandhu Assistant. How can I help you with legal information today?",
  sender: 'bot',
  timestamp: new Date(),
};

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const location = useLocation();
  const hasAutoOpened = useRef(false);

  // Auto-open on homepage (once)
  useEffect(() => {
    if (location.pathname === '/' && !hasAutoOpened.current) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        hasAutoOpened.current = true;
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const openChatbot = useCallback(() => setIsOpen(true), []);
  const closeChatbot = useCallback(() => setIsOpen(false), []);
  const toggleChatbot = useCallback(() => setIsOpen((prev) => !prev), []);

  const sendMessageHandler = useCallback((text: string) => {
    if (text.trim() === '') return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    sendChatMessage(text)
      .then((response) => {
        const botMessage: ChatMessage = {
          id: Date.now() + 1,
          text: response.reply,
          sender: 'bot',
          timestamp: new Date(),
          sources: response.sources,
        };
        setMessages((prev) => [...prev, botMessage]);
      })
      .catch(() => {
        const errorMessage: ChatMessage = {
          id: Date.now() + 1,
          text: "I'm sorry, I encountered an error. Please try again.",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      })
      .finally(() => {
        setIsTyping(false);
      });
  }, []);

  const value: ChatbotContextValue = {
    isOpen,
    messages,
    isTyping,
    openChatbot,
    closeChatbot,
    toggleChatbot,
    sendMessage: sendMessageHandler,
  };

  return (
    <ChatbotContext.Provider value={value}>
      {children}
    </ChatbotContext.Provider>
  );
};

// ========================
// Hook
// ========================

export function useChatbot(): ChatbotContextValue {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}
