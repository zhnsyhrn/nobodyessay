import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

interface Message {
  text: ReactNode;
  isUser: boolean;
}

export interface QuickReply {
  label: string;
  intentId: string;
}

interface ChatContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  resetChat: () => void;
  messages: Message[];
  sendMessage: (text: string) => void;
  sendQuickReply: (reply: QuickReply) => void;
  isBotReady: boolean;
  quickReplies: QuickReply[];
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const INITIAL_GREETING = "Hey, thanks for stopping by! I'm Zahin's site assistant. Ask me about his work experience, skills, past projects, availability for freelance, or how to get in touch.";
const INITIAL_QUICK_REPLIES: QuickReply[] = [
  { label: "What does Zahin do?", intentId: "who_is_zahin" },
  { label: "See his work", intentId: "portfolio_projects" },
  { label: "Is he open for freelance?", intentId: "availability_freelance" },
  { label: "How do I contact him?", intentId: "contact" }
];

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: INITIAL_GREETING, isUser: false },
  ]);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>(INITIAL_QUICK_REPLIES);
  const [isBotReady, setIsBotReady] = useState(false);
  
  const botRef = useRef<any>(null);

  useEffect(() => {
    async function initBot() {
      try {
        const engineUrl = '/chatbot-engine.js';
        const module = await import(/* @vite-ignore */ engineUrl);
        const kb = await module.loadKnowledgeBase('/knowledge-base.json');
        botRef.current = new module.ChatbotEngine(kb);
        setIsBotReady(true);
      } catch (err) {
        console.error("Failed to load chatbot engine:", err);
      }
    }
    initBot();
  }, []);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen((prev) => !prev);
  
  const resetChat = () => {
    setMessages([{ text: INITIAL_GREETING, isUser: false }]);
    setQuickReplies(INITIAL_QUICK_REPLIES);
    if (botRef.current) {
      botRef.current.history = [];
    }
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { text, isUser: true }]);
    setQuickReplies([]);

    setTimeout(() => {
      if (botRef.current) {
        const result = botRef.current.ask(text);
        let parsedText: ReactNode = result.answer;
        
        setMessages(prev => [...prev, { text: parsedText, isUser: false }]);
        
        if (result.quickReplies && result.quickReplies.length > 0) {
          setQuickReplies(result.quickReplies);
        }
      } else {
        setMessages(prev => [
          ...prev,
          { text: "Sorry, the chatbot is still loading. Please try again in a moment.", isUser: false }
        ]);
      }
    }, 500);
  };

  const sendQuickReply = (reply: QuickReply) => {
    if (!reply || !reply.intentId) return;

    setMessages(prev => [...prev, { text: reply.label, isUser: true }]);
    setQuickReplies([]);

    setTimeout(() => {
      if (botRef.current) {
        const result = botRef.current.askByIntentId(reply.intentId);
        let parsedText: ReactNode = result.answer;
        
        setMessages(prev => [...prev, { text: parsedText, isUser: false }]);
        
        if (result.quickReplies && result.quickReplies.length > 0) {
          setQuickReplies(result.quickReplies);
        }
      } else {
        setMessages(prev => [
          ...prev,
          { text: "Sorry, the chatbot is still loading. Please try again in a moment.", isUser: false }
        ]);
      }
    }, 500);
  };

  return (
    <ChatContext.Provider value={{ isOpen, openChat, closeChat, toggleChat, resetChat, messages, sendMessage, sendQuickReply, isBotReady, quickReplies }}>
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
