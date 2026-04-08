"use client";
import { tokens } from "@/styles/tokens";
import { ScaleIn, MagneticBtn } from "@/components/ui";

export default function CTA() {
  return (
    <section style={{
      padding: "80px clamp(20px,4vw,64px) 120px",
      maxWidth: tokens.maxW, margin: "0 auto",
    }}>
      <ScaleIn>
        <div style={{
          background: `linear-gradient(145deg, ${tokens.accent}0a, ${tokens.accent}04, ${tokens.bgAlt})`,
          border: `1px solid ${tokens.accent}18`,
          borderRadius: 28,
          padding: "clamp(48px,7vw,88px) clamp(24px,5vw,64px)",
          textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          {/* Decorative orbs */}
          <div style={{
            position: "absolute", top: -120, right: -80, width: 350, height: 350,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${tokens.accent}0a, transparent 65%)`,
            filter: "blur(60px)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -80, left: -60, width: 250, height: 250,
            borderRadius: "50%",
            background: "radial-gradient(circle, #4f46e508, transparent 60%)",
            filter: "blur(50px)", pointerEvents: "none",
          }} />

          {/* Grid pattern overlay */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none",
            backgroundImage: `linear-gradient(${tokens.white} 1px, transparent 1px), linear-gradient(90deg, ${tokens.white} 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }} />

          <h2 style={{
            fontFamily: tokens.font, fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 58px)",
            color: tokens.white, letterSpacing: "-0.03em",
            marginBottom: 18, position: "relative",
          }}>Innovate with us</h2>

          <p style={{
            fontFamily: tokens.fontBody, fontSize: 18, color: tokens.gray,
            lineHeight: 1.6, maxWidth: 500, margin: "0 auto 40px",
            position: "relative",
          }}>
            Our creative solutions have helped clients raise $100+ mln
            and expand their reach.
          </p>

          <div style={{
            display: "flex", gap: 16, justifyContent: "center",
            flexWrap: "wrap", position: "relative",
          }}>
            <MagneticBtn onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=umarfreelancerweb@gmail.com", "_blank")} style={{ padding: "16px 42px", fontSize: 16 }}>
              Write us
            </MagneticBtn>
            <MagneticBtn accent={false} href="/contact-us" style={{ padding: "16px 42px", fontSize: 16 }}>
              Book a call
            </MagneticBtn>
          </div>
        </div>
      </ScaleIn>
    </section>
  );
}
