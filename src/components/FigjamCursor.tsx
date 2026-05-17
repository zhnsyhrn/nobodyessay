import { useEffect, useRef, useState } from "react";

interface FigjamCursorProps {
  targetRef: React.RefObject<HTMLElement>;
  label?: string;
  color?: string;
}

const FigjamCursor = ({ targetRef, label = "You", color = "#ec4899" }: FigjamCursorProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setPos({ x, y }));
    };
    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [targetRef]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 z-50 hidden md:block transition-opacity duration-150"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Arrow */}
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}>
        <path
          d="M3 2L3 17L7.5 13L10.2 18.8L12.6 17.7L9.9 11.9L16 11.5L3 2Z"
          fill={color}
          stroke="white"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      {/* Label */}
      <div
        className="absolute font-jakarta text-[11px] font-medium text-white px-2 py-0.5 rounded-full whitespace-nowrap"
        style={{
          backgroundColor: color,
          left: 18,
          top: 18,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default FigjamCursor;