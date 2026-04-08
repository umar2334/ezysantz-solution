"use client";
import { useState, useEffect } from "react";
import { useMousePosition } from "@/hooks";
import { tokens } from "@/styles/tokens";

export default function CustomCursor() {
  const mouse = useMousePosition();
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const addH = () => setHovering(true);
    const remH = () => setHovering(false);
    const update = () => {
      const els = document.querySelectorAll("a, button, [data-hover]");
      els.forEach((el) => {
        el.addEventListener("mouseenter", addH);
        el.addEventListener("mouseleave", remH);
      });
    };
    update();
    const interval = setInterval(update, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div style={{
        position: "fixed", top: mouse.y - 5, left: mouse.x - 5,
        width: 10, height: 10, borderRadius: "50%", background: tokens.accent,
        pointerEvents: "none", zIndex: 10000,
        transition: "transform 0.1s ease, opacity 0.2s",
        transform: hovering ? "scale(0)" : "scale(1)",
        mixBlendMode: "difference",
      }} />
      {/* Outer ring */}
      <div style={{
        position: "fixed", top: mouse.y - 24, left: mouse.x - 24,
        width: 48, height: 48, borderRadius: "50%",
        border: `1.5px solid ${tokens.accent}88`,
        pointerEvents: "none", zIndex: 10000,
        transition: "transform 0.15s ease-out, width 0.3s, height 0.3s, top 0.15s ease-out, left 0.15s ease-out, border-color 0.3s",
        transform: hovering ? "scale(1.6)" : "scale(1)",
        borderColor: hovering ? tokens.accent : `${tokens.accent}55`,
      }} />
    </>
  );
}
