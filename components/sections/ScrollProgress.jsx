"use client";
import { useState, useEffect } from "react";
import { tokens } from "@/styles/tokens";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, height: 3,
      zIndex: 9998, background: "transparent",
    }}>
      <div style={{
        height: "100%",
        background: `linear-gradient(90deg, ${tokens.accent}, #a0e000)`,
        width: `${progress}%`,
        transition: "width 0.05s linear",
        boxShadow: `0 0 12px ${tokens.accent}66`,
      }} />
    </div>
  );
}
