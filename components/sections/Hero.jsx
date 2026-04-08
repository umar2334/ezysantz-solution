"use client";
import { useState, useEffect } from "react";
import { useMousePosition } from "@/hooks";
import { tokens } from "@/styles/tokens";
import { MagneticBtn } from "@/components/ui";

const FLOATING_SHAPES = [
  { top: "12%", left: "8%", size: 60, rot: 45, delay: 0, br: 12 },
  { top: "25%", right: "10%", size: 40, rot: 12, delay: 1.5, br: "50%" },
  { bottom: "20%", left: "12%", size: 50, rot: -20, delay: 3, br: 10 },
  { bottom: "30%", right: "8%", size: 35, rot: 60, delay: 0.8, br: "50%" },
  { top: "60%", left: "5%", size: 28, rot: 30, delay: 2, br: 6 },
  { top: "15%", right: "25%", size: 22, rot: -10, delay: 0.5, br: "50%" },
];

export default function Hero() {
  const mouse = useMousePosition();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const parallax = (factor) => ({
    transform: `translate(${(mouse.x - (typeof window !== "undefined" ? window.innerWidth : 1000) / 2) * factor}px, ${(mouse.y - (typeof window !== "undefined" ? window.innerHeight : 800) / 2) * factor}px)`,
    transition: "transform 0.3s ease-out",
  });

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", textAlign: "center",
      padding: "140px clamp(20px, 4vw, 64px) 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Gradient Orbs */}
      <div style={{
        position: "absolute", top: "-15%", left: "-8%", width: 700, height: 700,
        borderRadius: "50%", background: `radial-gradient(circle, ${tokens.accent}0d, transparent 65%)`,
        filter: "blur(100px)", pointerEvents: "none", ...parallax(-0.02),
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", right: "-5%", width: 500, height: 500,
        borderRadius: "50%", background: "radial-gradient(circle, #4f46e50d, transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none", ...parallax(0.015),
      }} />
      <div style={{
        position: "absolute", top: "20%", right: "15%", width: 300, height: 300,
        borderRadius: "50%", background: "radial-gradient(circle, #06b6d408, transparent 60%)",
        filter: "blur(60px)", pointerEvents: "none", ...parallax(0.03),
      }} />

      {/* Floating Geometric Shapes */}
      {FLOATING_SHAPES.map((s, i) => (
        <div key={i} style={{
          position: "absolute", top: s.top, bottom: s.bottom,
          left: s.left, right: s.right,
          width: s.size, height: s.size,
          border: `1px solid ${tokens.border}`, borderRadius: s.br,
          transform: `rotate(${s.rot}deg)`, pointerEvents: "none",
          animation: `float ${4 + i}s ${s.delay}s ease-in-out infinite alternate`,
          opacity: 0.5, ...parallax(0.02 + i * 0.008),
        }} />
      ))}

      {/* Badge */}
      <div style={{
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        transition: `all 0.8s 0.2s ${tokens.ease}`,
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: tokens.accentGlow, border: `1px solid ${tokens.accentDim}`,
          borderRadius: 100, padding: "8px 20px 8px 12px", marginBottom: 32,
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%", background: tokens.accent,
            animation: "pulse 2s infinite",
          }} />
          <span style={{
            fontFamily: tokens.fontBody, fontSize: 13, color: tokens.accent,
            textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600,
          }}>Digital brand design agency</span>
        </div>
      </div>

      {/* Main Heading */}
      <h1 style={{
        fontFamily: tokens.font, fontWeight: 800, color: tokens.white,
        fontSize: "clamp(38px, 6.5vw, 84px)", lineHeight: 1.02,
        maxWidth: 950, letterSpacing: "-0.04em", margin: "0 auto 28px",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(40px)",
        transition: `all 1s 0.35s ${tokens.ease}`,
      }}>
        Design <span style={{ color: tokens.accent }}>&amp;</span> Brand<br />
        Acceleration for<br />
        <span style={{
          background: `linear-gradient(135deg, ${tokens.accent}, #a0e000)`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>SaaS Startups</span>
      </h1>

      {/* Subtitle */}
      <p style={{
        fontFamily: tokens.fontBody, fontSize: "clamp(16px, 1.8vw, 20px)",
        color: tokens.gray, maxWidth: 600, lineHeight: 1.65,
        margin: "0 auto 44px",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.9s 0.55s ${tokens.ease}`,
      }}>
        We prove, design, implement, and market your idea with absolute
        transparency and efficiency at its core
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.8s 0.7s ${tokens.ease}`,
      }}>
        <MagneticBtn href="/contact-us">Book a call</MagneticBtn>
        <MagneticBtn accent={false} href="/cases">View Cases →</MagneticBtn>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: "absolute", bottom: 36, left: "50%",
        transform: "translateX(-50%)",
        opacity: loaded ? 1 : 0, transition: "opacity 1s 1.2s ease",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
      }}>
        <div style={{
          width: 26, height: 44, borderRadius: 13,
          border: `2px solid ${tokens.grayDark}`,
          display: "flex", justifyContent: "center", paddingTop: 10,
        }}>
          <div style={{
            width: 3, height: 10, borderRadius: 2, background: tokens.accent,
            animation: "scrollDot 2s ease infinite",
          }} />
        </div>
        <span style={{
          fontFamily: tokens.fontBody, fontSize: 11, color: tokens.grayDark,
          letterSpacing: "0.1em", textTransform: "uppercase",
        }}>Scroll</span>
      </div>
    </section>
  );
}
