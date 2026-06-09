import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { useChat } from '../contexts/ChatContext';

export default function ChatOverlay() {
  const { isOpen, closeChat, messages, sendMessage } = useChat();
  const [inputValue, setInputValue] = useState('');

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    sendMessage(inputValue);
    setInputValue('');
  };

  return (
    <div className="fixed inset-y-0 right-0 z-[200] w-full max-w-sm bg-white shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200">
            <img src="/lovable-uploads/zahin-profile.png" alt="Zahin Syahiran" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Zahin Syahiran</h3>
            <p className="text-xs text-slate-500">Ask me anything</p>
          </div>
        </div>
        <button
          onClick={closeChat}
          className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                msg.isUser
                  ? 'bg-slate-900 text-white rounded-br-none'
                  : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100">
        <form onSubmit={handleSend} className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="absolute right-2 p-2 rounded-full bg-slate-900 text-white disabled:opacity-50 hover:bg-slate-800 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
