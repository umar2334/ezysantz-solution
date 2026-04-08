"use client";
import { useState, useEffect } from "react";
import { tokens } from "@/styles/tokens";
import { Nav, Services, CTA, Footer, CustomCursor, ScrollProgress } from "@/components/sections";

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
