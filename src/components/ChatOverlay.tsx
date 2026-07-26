import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Mic, ArrowRight, RotateCcw } from 'lucide-react';
import { useChat } from '../contexts/ChatContext';

export default function ChatOverlay() {
  const { isOpen, closeChat, messages, sendMessage, sendQuickReply, resetChat, isBotReady, quickReplies } = useChat();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    sendMessage(inputValue);
    setInputValue('');
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-6 z-[200] w-[calc(100vw-3rem)] sm:w-[380px] h-[650px] max-h-[calc(100vh-4rem)] bg-white/75 backdrop-blur-2xl shadow-2xl flex flex-col border border-white/50 rounded-[24px] animate-in slide-in-from-right-8 fade-in duration-300 overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-black/5 bg-white/40">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-slate-800 text-[15px]">Zahin Syahiran <span className="text-slate-400 font-normal">AI</span></h3>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={resetChat}
            className="flex items-center gap-1 px-2 py-1 mr-2 rounded-md hover:bg-black/5 text-slate-500 hover:text-slate-700 text-xs font-medium transition-colors"
            title="Reset Chat"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            onClick={closeChat}
            className="p-1.5 rounded-full hover:bg-black/5 text-slate-500 transition-colors"
            title="Close Chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div data-lenis-prevent className="flex-1 overflow-y-auto overscroll-contain p-5 space-y-5">
        
        {/* Prominent Image at the top of the chat */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-2 shadow-sm border border-black/5 group">
          <img 
            src="/lovable-uploads/zahin-profile.png" 
            alt="Zahin Syahiran" 
            className="w-full h-full object-cover object-top" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-slate-800 shadow-sm flex items-center gap-1.5 border border-white/50">
              <Mic className="w-3 h-3 text-blue-500" /> Speak with Zahin
            </div>
          </div>
        </div>

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-[20px] px-4 py-3 text-[14px] leading-relaxed ${
                msg.isUser
                  ? 'bg-blue-600 text-white rounded-br-sm shadow-md shadow-blue-500/20'
                  : 'bg-white/80 text-slate-700 shadow-sm border border-black/5 rounded-bl-sm backdrop-blur-md'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input & Presets Area */}
      <div className="p-4 bg-white/60 border-t border-black/5 backdrop-blur-md flex flex-col gap-3">
        
        {/* Quick Replies */}
        {quickReplies && quickReplies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply, idx) => (
              <button 
                key={idx}
                type="button" 
                onClick={() => sendQuickReply(reply)} 
                className="px-3 py-1.5 bg-transparent border border-blue-500 text-blue-600 text-[13px] font-medium rounded-md hover:bg-blue-50 transition-colors text-left"
              >
                {reply.label}
              </button>
            ))}
          </div>
        )}

        {/* Input Box */}
        <form onSubmit={handleSend} className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={!isBotReady}
            placeholder={isBotReady ? "Ask Zahin a question" : "Connecting to AI..."}
            className="w-full pl-4 pr-20 py-3 bg-white border border-slate-200 rounded-lg text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm disabled:opacity-50 disabled:bg-slate-50"
          />
          <div className="absolute right-2 flex items-center gap-1">
            <button type="button" className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Mic className="w-4 h-4" />
            </button>
            <button
              type="submit"
              disabled={!inputValue.trim() || !isBotReady}
              className="p-1.5 rounded-md bg-slate-100 text-slate-500 disabled:opacity-50 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Disclaimer */}
        <p className="text-[9px] leading-tight text-slate-400 text-center px-2 pb-1">
          By using this automated chatbot, the personal information you provide in the chat session will be processed for following up on your request. Please do not provide sensitive personal information.
        </p>
      </div>
    </div>
  );
}
