import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useChat } from '../contexts/ChatContext';

const PAGE_TIPS: Record<string, { text: string; sub: string }> = {
  '/': {
    text: "Need a product designer?",
    sub: "Let's build something great together.",
  },
  '/about': {
    text: "Looking for a UX expert?",
    sub: "I'd love to hear about your team.",
  },
};

function getTipKey(pathname: string) {
  return `chat-tip-dismissed:${pathname}`;
}

export default function ChatWidget() {
  const { openChat, isOpen } = useChat();
  const { pathname } = useLocation();
  const [tipVisible, setTipVisible] = useState(false);
  const eyesRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ eyeX: 0, eyeY: 0, orbX: 0, orbY: 0 });
  const rafRef = useRef<number | null>(null);

  let tip = PAGE_TIPS[pathname] || {
    text: "Curious about my process?",
    sub: "Ask me anything about my case studies.",
  };

  useEffect(() => {
    if (!tip || isOpen) return;
    if (sessionStorage.getItem(getTipKey(pathname))) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setTipVisible(true);
    };

    timerRef.current = setTimeout(show, 1500);

    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled >= 0.3) show();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, tip, isOpen]);

  useEffect(() => {
    if (isOpen) setTipVisible(false);
  }, [isOpen]);

  useEffect(() => {
    setTipVisible(false);
  }, [pathname]);

  // Mascot cursor tracking with RAF lerp
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

    const tick = () => {
      const orb = orbRef.current;
      const eyes = eyesRef.current;
      if (orb && eyes) {
        const rect = orb.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        const targetEyeX = clamp((mx - cx) / 400 * 7, -7, 7);
        const targetEyeY = clamp((my - cy) / 400 * 7, -7, 7);
        const targetOrbX = clamp((mx - cx) / 400 * 8, -8, 8);
        const targetOrbY = clamp((my - cy) / 400 * 8, -8, 8);

        const c = currentRef.current;
        c.eyeX = lerp(c.eyeX, targetEyeX, 0.14);
        c.eyeY = lerp(c.eyeY, targetEyeY, 0.14);
        c.orbX = lerp(c.orbX, targetOrbX, 0.08);
        c.orbY = lerp(c.orbY, targetOrbY, 0.08);

        eyes.style.transform = `translate(${c.eyeX}px, ${c.eyeY}px)`;
        orb.style.transform = `translate(${c.orbX}px, ${c.orbY}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const dismissTip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTipVisible(false);
    sessionStorage.setItem(getTipKey(pathname), '1');
  };

  const handleTipClick = () => {
    setTipVisible(false);
    openChat();
  };

  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex items-end gap-3">
      {/* Smart tip bubble */}
      {tipVisible && tip && (
        <div
          className="relative bg-white rounded-2xl shadow-xl px-5 py-4 max-w-[220px] cursor-pointer animate-in slide-in-from-right-4 fade-in duration-300 hover:shadow-2xl transition-shadow"
          onClick={handleTipClick}
        >
          <button
            onClick={dismissTip}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-700 text-white flex items-center justify-center hover:bg-slate-900 transition-colors shadow"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="absolute right-[-8px] bottom-5 w-0 h-0 border-t-[8px] border-t-transparent border-l-[9px] border-l-white border-b-[8px] border-b-transparent" />
          <p className="text-slate-900 text-sm font-semibold leading-snug">{tip.text}</p>
          <p className="text-slate-500 text-xs mt-1 leading-snug">{tip.sub}</p>
        </div>
      )}

      <button
        ref={orbRef}
        onClick={openChat}
        className="relative w-16 h-16 shrink-0 animate-float-mascot group will-change-transform shadow-2xl hover:scale-105 transition-all duration-500 bg-gradient-to-r from-blue-600 to-cyan-400 p-[3px] rounded-full hover:[border-radius:40%_60%_70%_30%/40%_50%_60%_50%]"
        aria-label="Open chat"
      >
        <div className="absolute -inset-3 bg-blue-500/40 blur-xl transition-all duration-500 rounded-full group-hover:bg-cyan-400/60 group-hover:blur-2xl group-hover:[border-radius:40%_60%_70%_30%/40%_50%_60%_50%]" />
        <div className="w-full h-full overflow-hidden bg-slate-900 relative z-10 transition-all duration-500 rounded-full group-hover:[border-radius:40%_60%_70%_30%/40%_50%_60%_50%]">
          <img 
            src="/Profile/photo_6233468766528409645_y.jpg_202607230735.jpeg" 
            alt="Zahin Syahiran" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </button>
    </div>
  );
}
