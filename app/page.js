"use client";
import { useState, useEffect } from "react";
import { tokens } from "@/styles/tokens";
import {
  Preloader,
  CustomCursor,
  ScrollProgress,
  Nav,
  Hero,
  Stats,
  Stages,
  Services,
  LogoSection,
  Cases,
  Testimonials,
  Awards,
  FAQ,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      style={{
        background: tokens.bg,
        minHeight: "100vh",
        color: tokens.white,
        overflowX: "hidden",
        cursor: !isMobile ? "none" : "auto",
        fontFamily: tokens.fontBody,
      }}
    >
      {/* Preloader */}
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      {/* Custom Cursor (desktop only) */}
      {!isMobile && loaded && <CustomCursor />}

      {/* Scroll Progress */}
      {loaded && <ScrollProgress />}

      {/* Main Content */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Nav />
        <Hero />
        <Stats />
        <Stages />
        <Services />
        <LogoSection />
        <Cases />
        <Testimonials />
        <Awards />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
