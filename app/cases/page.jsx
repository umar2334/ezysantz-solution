"use client";
import { useState, useEffect } from "react";
import { tokens } from "@/styles/tokens";
import { Nav, Cases, CTA, Footer, CustomCursor, ScrollProgress } from "@/components/sections";
import { FadeUp, TextReveal } from "@/components/ui";

export default function CasesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{
      background: tokens.bg,
      minHeight: "100vh",
      color: tokens.white,
      overflowX: "hidden",
      cursor: !isMobile ? "none" : "auto",
      fontFamily: tokens.fontBody,
    }}>
      {!isMobile && <CustomCursor />}
      <ScrollProgress />
      <Nav />

      {/* Hero */}
      <section style={{
        padding: "160px clamp(20px,4vw,64px) 60px",
        maxWidth: tokens.maxW, margin: "0 auto",
        textAlign: "center", position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 80, left: "50%", transform: "translateX(-50%)",
          width: 500, height: 260, borderRadius: "50%",
          background: `radial-gradient(ellipse, ${tokens.accent}08, transparent 70%)`,
          filter: "blur(80px)", pointerEvents: "none",
        }} />
        <FadeUp>
          <span style={{
            fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 600,
            color: tokens.accent, textTransform: "uppercase",
            letterSpacing: "0.14em", display: "block", marginBottom: 20,
          }}>Our Work</span>
        </FadeUp>
        <FadeUp delay={0.08}>
          <TextReveal text="Selected Cases" style={{
            fontFamily: tokens.font, fontWeight: 800,
            fontSize: "clamp(38px, 6vw, 76px)",
            color: tokens.white, letterSpacing: "-0.03em",
            lineHeight: 1.1, display: "block", marginBottom: 20,
          }} />
        </FadeUp>
        <FadeUp delay={0.14}>
          <p style={{
            fontFamily: tokens.fontBody, fontSize: 18, color: tokens.gray,
            lineHeight: 1.7, maxWidth: 560, margin: "0 auto",
          }}>
            Real projects, real results. Here's a look at some of the work we've delivered for our clients.
          </p>
        </FadeUp>
      </section>

      <Cases />
      <CTA />
      <Footer />
    </div>
  );
}
