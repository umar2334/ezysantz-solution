"use client";
import { useState, useEffect } from "react";
import { tokens } from "@/styles/tokens";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 12 + 3;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setHide(true), 400);
        setTimeout(onComplete, 900);
      }
      setProgress(Math.min(p, 100));
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999, background: tokens.bg,
      display: "flex", flexDirection: "column", justifyContent: "center",
      alignItems: "center",
      opacity: hide ? 0 : 1, transition: "opacity 0.5s ease",
      pointerEvents: hide ? "none" : "all",
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: tokens.font, fontWeight: 800,
        fontSize: "clamp(24px, 5vw, 42px)",
        color: tokens.white, letterSpacing: "-0.03em",
        marginBottom: 40, display: "flex", alignItems: "center", gap: 12,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: "50%", background: tokens.accent,
          display: "grid", placeItems: "center", fontSize: 20, color: tokens.bg,
          animation: "loaderSpin 1.2s ease infinite",
        }}>
          ✦
        </div>
        Ezysantz Solution
      </div>

      {/* Progress Bar */}
      <div style={{
        width: "clamp(200px, 30vw, 320px)", height: 3,
        background: tokens.border, borderRadius: 4, overflow: "hidden",
      }}>
        <div style={{
          height: "100%", background: tokens.accent, borderRadius: 4,
          width: `${progress}%`, transition: "width 0.2s ease",
        }} />
      </div>

      {/* Percentage */}
      <div style={{
        fontFamily: tokens.fontBody, fontSize: 13, color: tokens.gray,
        marginTop: 16, fontVariantNumeric: "tabular-nums",
      }}>
        {Math.round(progress)}%
      </div>
    </div>
  );
}
