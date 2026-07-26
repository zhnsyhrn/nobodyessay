import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

export function parseMessageContent(content: ReactNode): ReactNode {
  if (typeof content !== 'string') return content;

  const lines = content.split('\n');

  return (
    <div className="space-y-1">
      {lines.map((line, lineIdx) => {
        if (!line.trim()) return <div key={lineIdx} className="h-1" />;

        // Match markdown links [label](url) and bare URLs
        const tokenRegex = /\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s]+)/g;
        const elements: ReactNode[] = [];
        let lastIndex = 0;
        let match: RegExpExecArray | null;

        while ((match = tokenRegex.exec(line)) !== null) {
          if (match.index > lastIndex) {
            elements.push(line.substring(lastIndex, match.index));
          }

          if (match[1] && match[2]) {
            const label = match[1];
            const url = match[2];
            if (url.startsWith('/')) {
              elements.push(
                <Link key={match.index} to={url} className="text-blue-600 hover:underline font-medium">
                  {label}
                </Link>
              );
            } else {
              elements.push(
                <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  {label}
                </a>
              );
            }
          } else if (match[3]) {
            const url = match[3];
            elements.push(
              <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                {url}
              </a>
            );
          }

          lastIndex = tokenRegex.lastIndex;
        }

        if (lastIndex < line.length) {
          elements.push(line.substring(lastIndex));
        }

        return <p key={lineIdx}>{elements}</p>;
      })}
    </div>
  );
}

const INITIAL_GREETING = "Hey, thanks for stopping by! I'm Zahin's site assistant. Ask me about his work experience, skills, past projects, availability for freelance, or how to get in touch. Explore [Services & Rates](/service), view [Projects](/projects), or read [About Zahin](/about).";
const INITIAL_QUICK_REPLIES: QuickReply[] = [
  { label: "What does Zahin do?", intentId: "who_is_zahin" },
  { label: "See his work", intentId: "portfolio_projects" },
  { label: "Is he open for freelance?", intentId: "availability_freelance" },
  { label: "How do I contact him?", intentId: "contact" }
];

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: parseMessageContent(INITIAL_GREETING), isUser: false },
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
    setMessages([{ text: parseMessageContent(INITIAL_GREETING), isUser: false }]);
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
        const parsedText = parseMessageContent(result.answer);
        
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
        const parsedText = parseMessageContent(result.answer);
        
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
