"use client";
import { useState, useEffect } from "react";
import { tokens } from "@/styles/tokens";

export default function StickyBookCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{
      position: "fixed",
      bottom: 24,
      left: "50%",
      transform: `translateX(-50%) translateY(${visible ? "0" : "80px"})`,
      opacity: visible ? 1 : 0,
      transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease",
      zIndex: 900,
      pointerEvents: visible ? "auto" : "none",
    }}>
      <a
        href="/contact-us"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(8,8,10,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${tokens.accentDim}`,
          borderRadius: 100,
          padding: "12px 22px 12px 14px",
          textDecoration: "none",
          boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${tokens.accentDim}`,
          transition: "box-shadow 0.3s, border-color 0.3s, transform 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.5), 0 0 20px ${tokens.accent}22`;
          e.currentTarget.style.borderColor = tokens.accent + "55";
          e.currentTarget.style.transform = "scale(1.03)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${tokens.accentDim}`;
          e.currentTarget.style.borderColor = tokens.accentDim;
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {/* Pulsing dot */}
        <span style={{
          width: 32, height: 32, borderRadius: "50%",
          background: tokens.accent,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14, flexShrink: 0,
        }}>📞</span>
        <span style={{
          fontFamily: tokens.fontBody, fontWeight: 700, fontSize: 14,
          color: tokens.white, letterSpacing: "-0.01em",
        }}>Book a Free Call</span>
        <span style={{
          fontFamily: tokens.fontBody, fontSize: 12,
          color: tokens.accent, fontWeight: 600,
        }}>→</span>
      </a>
    </div>
  );
}
