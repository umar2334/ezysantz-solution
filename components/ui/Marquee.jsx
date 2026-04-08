"use client";
import { tokens } from "@/styles/tokens";

export default function Marquee({ items, speed = 35 }) {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", padding: "24px 0" }}>
      <div style={{
        display: "inline-flex",
        animation: `marquee ${speed}s linear infinite`,
      }}>
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: tokens.font,
              fontWeight: 800,
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "transparent",
              WebkitTextStroke: `1.5px ${tokens.grayDark}`,
              padding: "0 clamp(20px, 3vw, 48px)",
              transition: "color 0.4s, -webkit-text-stroke 0.4s",
              cursor: "default",
              letterSpacing: "-0.03em",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = tokens.accent;
              e.target.style.WebkitTextStroke = `1.5px ${tokens.accent}`;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "transparent";
              e.target.style.WebkitTextStroke = `1.5px ${tokens.grayDark}`;
            }}
          >
            {item} ✦
          </span>
        ))}
      </div>
    </div>
  );
}
