import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  messages: Message[];
  sendMessage: (text: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Zahin's AI assistant. How can I help you today?", isUser: false },
  ]);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen((prev) => !prev);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text, isUser: true }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "Thanks for reaching out! This is a placeholder response. Zahin is currently working on adding more functionality here.", isUser: false }
      ]);
    }, 1000);
  };

  return (
    <ChatContext.Provider value={{ isOpen, openChat, closeChat, toggleChat, messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
