"use client";
import { useRef, useState } from "react";
import { tokens } from "@/styles/tokens";

export default function MagneticBtn({ children, style = {}, accent = true, onClick, href }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({ x: (e.clientX - cx) * 0.15, y: (e.clientY - cy) * 0.15 });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const baseStyle = {
    fontFamily: tokens.fontBody,
    fontSize: 15,
    fontWeight: 600,
    background: accent ? tokens.accent : "transparent",
    color: accent ? tokens.bg : tokens.white,
    border: accent ? "none" : `1.5px solid ${tokens.grayDark}`,
    borderRadius: 100,
    padding: "14px 34px",
    cursor: "pointer",
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: "transform 0.3s ease-out, box-shadow 0.4s ease, border-color 0.3s",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...style,
  };

  const handleEnter = (e) => {
    if (accent) e.currentTarget.style.boxShadow = `0 0 40px ${tokens.accent}44, 0 8px 32px ${tokens.accent}22`;
    else e.currentTarget.style.borderColor = tokens.accent;
  };

  const handleOut = (e) => {
    e.currentTarget.style.boxShadow = "none";
    if (!accent) e.currentTarget.style.borderColor = tokens.grayDark;
  };

  if (href) {
    return (
      <a ref={ref} href={href} onMouseMove={handleMove} onMouseLeave={handleLeave}
        onMouseEnter={handleEnter} onMouseOut={handleOut} style={baseStyle}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} onClick={onClick} onMouseMove={handleMove} onMouseLeave={handleLeave}
      onMouseEnter={handleEnter} onMouseOut={handleOut} style={baseStyle}>
      {children}
    </button>
  );
}
