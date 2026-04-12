"use client";
import { useState, useEffect } from "react";
import { tokens } from "@/styles/tokens";
import { Nav, Packages, CTA, Footer, CustomCursor, ScrollProgress, StickyBookCall } from "@/components/sections";

export default function PackagesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={{
      background: tokens.bg, minHeight: "100vh",
      color: tokens.white, overflowX: "hidden",
      cursor: !isMobile ? "none" : "auto",
      fontFamily: tokens.fontBody,
    }}>
      {!isMobile && <CustomCursor />}
      <ScrollProgress />
      <Nav />
      <div style={{ paddingTop: 80 }}>
        <Packages />
        <CTA />
      </div>
      <StickyBookCall />
      <Footer />
    </div>
  );
}
