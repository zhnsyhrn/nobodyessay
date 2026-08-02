import React, { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseRadius: number;
  pulseSpeed: number;
  phase: number;
}

export const ZHABlobBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse position tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
    }

    // Initialize ZHA signature color blobs (Teal, Cyan, Royal Blue, Deep Purple)
    const blobs: Blob[] = [
      {
        x: width * 0.25,
        y: height * 0.4,
        vx: 0.6,
        vy: 0.4,
        radius: Math.min(width, height) * 0.45,
        baseRadius: Math.min(width, height) * 0.45,
        color: "rgba(16, 145, 120, 0.45)", // ZHA Emerald Teal
        pulseSpeed: 0.002,
        phase: 0,
      },
      {
        x: width * 0.75,
        y: height * 0.3,
        vx: -0.5,
        vy: 0.5,
        radius: Math.min(width, height) * 0.4,
        baseRadius: Math.min(width, height) * 0.4,
        color: "rgba(41, 98, 255, 0.35)", // Sapphire Blue
        pulseSpeed: 0.0025,
        phase: Math.PI / 3,
      },
      {
        x: width * 0.5,
        y: height * 0.7,
        vx: 0.4,
        vy: -0.6,
        radius: Math.min(width, height) * 0.38,
        baseRadius: Math.min(width, height) * 0.38,
        color: "rgba(138, 43, 226, 0.25)", // Electric Violet
        pulseSpeed: 0.0018,
        phase: Math.PI / 1.5,
      },
      {
        x: width * 0.8,
        y: height * 0.75,
        vx: -0.4,
        vy: -0.3,
        radius: Math.min(width, height) * 0.35,
        baseRadius: Math.min(width, height) * 0.35,
        color: "rgba(0, 180, 216, 0.3)", // Cyan Highlight
        pulseSpeed: 0.003,
        phase: Math.PI,
      },
    ];

    let time = 0;

    const render = () => {
      time += 0.015;

      // Ease mouse position
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw background base
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      // Render each blob with smooth motion and radial gradient
      blobs.forEach((blob, index) => {
        // Organic sine/cosine drift + velocity
        blob.x += blob.vx + Math.sin(time + index) * 0.8;
        blob.y += blob.vy + Math.cos(time * 0.9 + index) * 0.8;

        // Bounce gently off canvas bounds
        const padding = 100;
        if (blob.x < -padding || blob.x > width + padding) blob.vx *= -1;
        if (blob.y < -padding || blob.y > height + padding) blob.vy *= -1;

        // Gentle radius pulsing
        blob.radius = blob.baseRadius + Math.sin(time * 2 + blob.phase) * 35;

        // Subtle mouse influence towards mouse
        const dx = mouseX - blob.x;
        const dy = mouseY - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 400;
        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 0.15;
          blob.x += (dx / dist) * force * 1.5;
          blob.y += (dy / dist) * force * 1.5;
        }

        // Draw glowing radial gradient
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );

        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(0.5, blob.color.replace(/[\d\.]+\)$/, "0.15)"));
        gradient.addColorStop(1, "rgba(10, 10, 10, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ filter: "blur(40px)" }}
    />
  );
};

export default ZHABlobBackground;
