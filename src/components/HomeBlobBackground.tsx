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

/**
 * Dedicated Blob Background Component for the Homepage.
 * Customize color palette, blob counts, sizing, and motion independently for the homepage hero.
 */
export const HomeBlobBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const isMobile = width < 768;

    // Helper to calculate homepage blob radius
    const getBaseRadius = (factor: number) => {
      const dim = Math.max(width, height);
      const minRadius = isMobile ? 165 : 230;
      return Math.max(dim * factor, minRadius);
    };

    let blobs: Blob[] = [];

    const initBlobs = () => {
      blobs = [
        {
          x: width * 0.25,
          y: height * 0.35,
          vx: 0.8,
          vy: 0.5,
          radius: getBaseRadius(0.42),
          baseRadius: getBaseRadius(0.42),
          color: "rgba(16, 165, 135, 0.55)", // Emerald Teal
          pulseSpeed: 0.002,
          phase: 0,
        },
        {
          x: width * 0.5,
          y: height * 0.7,
          vx: -0.6,
          vy: -0.6,
          radius: getBaseRadius(0.38),
          baseRadius: getBaseRadius(0.38),
          color: "rgba(145, 50, 240, 0.40)", // Electric Violet
          pulseSpeed: 0.0018,
          phase: Math.PI / 1.5,
        },
        {
          x: width * 0.78,
          y: height * 0.4,
          vx: -0.5,
          vy: 0.4,
          radius: getBaseRadius(0.35),
          baseRadius: getBaseRadius(0.35),
          color: "rgba(0, 200, 230, 0.45)", // Bright Cyan Highlight
          pulseSpeed: 0.003,
          phase: Math.PI,
        },
      ];
    };

    initBlobs();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initBlobs();
    };

    window.addEventListener("resize", handleResize);

    // Mouse & Touch position tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const updateTargetPos = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = clientX - rect.left;
      targetMouseY = clientY - rect.top;
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateTargetPos(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateTargetPos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("touchmove", handleTouchMove, { passive: true });
      parent.addEventListener("touchstart", handleTouchMove, { passive: true });
    }

    let time = 0;

    const render = () => {
      time += 0.016;

      // Ease position towards mouse/touch
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Draw dark background base
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      // Render each blob with organic motion and radial gradient
      blobs.forEach((blob, index) => {
        // Continuous organic sine/cosine drift + velocity
        blob.x += blob.vx + Math.sin(time * 1.2 + index * 1.5) * 1.2;
        blob.y += blob.vy + Math.cos(time * 1.1 + index * 1.5) * 1.2;

        // Bounce smoothly off padding boundary
        const padding = isMobile ? 50 : 120;
        if (blob.x < -padding || blob.x > width + padding) blob.vx *= -1;
        if (blob.y < -padding || blob.y > height + padding) blob.vy *= -1;

        // Gentle radius pulsing
        blob.radius = blob.baseRadius + Math.sin(time * 2.2 + blob.phase) * (isMobile ? 25 : 40);

        // Interactive mouse/touch influence
        const dx = mouseX - blob.x;
        const dy = mouseY - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = isMobile ? 250 : 450;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 0.2;
          blob.x += (dx / dist) * force * 2.0;
          blob.y += (dy / dist) * force * 2.0;
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
        gradient.addColorStop(0.5, blob.color.replace(/[\d\.]+\)$/, "0.20)"));
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
        parent.removeEventListener("touchmove", handleTouchMove);
        parent.removeEventListener("touchstart", handleTouchMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ filter: "blur(32px)" }}
    />
  );
};

export default HomeBlobBackground;
