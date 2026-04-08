"use client";
import { useState } from "react";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal, TiltCard } from "@/components/ui";

const STAGES = [
  { tag: "01", title: "Pre-seed Bootstrapped", desc: "This is POC stage. You have a hypothetical product idea, you want it done & tested properly to know whether it's worth the time and resources.", highlight: "More than 40% of our clients on this stage get initial investment for MVPs", color: "#c8ff00" },
  { tag: "02", title: "Seed", desc: "This is an MVP stage. You approved a product-market fit and want to start working with real users, and start initial marketing efforts.", highlight: "More than 25% of our clients get Series A investments to build full-scale product", color: "#06d6a0" },
  { tag: "03", title: "Series A", desc: "This is a product optimisation stage. You raised the investment and faced burn-rates while expanding further.", highlight: "We've helped every start-up at this stage to cut costs and improve user experience", color: "#4cc9f0" },
];

export default function Stages() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: tokens.sectionPadding, maxWidth: tokens.maxW, margin: "0 auto" }}>
      <FadeUp>
        <TextReveal text="Stages of startup development" style={{
          fontFamily: tokens.font, fontWeight: 800,
          fontSize: "clamp(30px, 4.5vw, 52px)",
          color: tokens.white, letterSpacing: "-0.03em", marginBottom: 14,
        }} />
      </FadeUp>
      <FadeUp delay={0.1}>
        <p style={{
          fontFamily: tokens.fontBody, fontSize: 17, color: tokens.gray,
          maxWidth: 560, marginBottom: 56, lineHeight: 1.65,
        }}>
          Examples of our most common engagement models into early-stage
          start-ups on different stages of the lifecycle.
        </p>
      </FadeUp>

      <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
        {STAGES.map((s, i) => (
          <FadeUp key={i} delay={0.1 + i * 0.1} style={{
            flex: active === i ? "2.2 1 0" : "1 1 0",
            minWidth: 260, transition: `flex 0.6s ${tokens.ease}`,
          }}>
            <TiltCard>
              <div
                onClick={() => setActive(i)}
                style={{
                  background: active === i ? tokens.card : "transparent",
                  border: `1px solid ${active === i ? s.color + "44" : tokens.border}`,
                  borderRadius: tokens.radius, padding: "36px 30px",
                  cursor: "pointer", transition: `all 0.5s ${tokens.ease}`,
                  minHeight: 320, display: "flex", flexDirection: "column",
                  justifyContent: "space-between", position: "relative", overflow: "hidden",
                }}
                onMouseEnter={(e) => { if (active !== i) e.currentTarget.style.borderColor = tokens.borderLight; }}
                onMouseLeave={(e) => { if (active !== i) e.currentTarget.style.borderColor = tokens.border; }}
              >
                {/* Active glow */}
                {active === i && (
                  <div style={{
                    position: "absolute", top: -50, right: -50, width: 200, height: 200,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${s.color}0d, transparent 70%)`,
                    filter: "blur(40px)", pointerEvents: "none",
                  }} />
                )}

                <div>
                  <div style={{
                    fontFamily: tokens.fontBody, fontSize: 12, fontWeight: 700,
                    color: s.color, textTransform: "uppercase",
                    letterSpacing: "0.15em", marginBottom: 16,
                    opacity: active === i ? 1 : 0.4, transition: "opacity 0.4s",
                  }}>{s.tag}</div>

                  <h3 style={{
                    fontFamily: tokens.font, fontWeight: 700,
                    fontSize: active === i ? 26 : 21, color: tokens.white,
                    marginBottom: 18, transition: `font-size 0.4s ${tokens.ease}`,
                    letterSpacing: "-0.02em",
                  }}>{s.title}</h3>

                  <p style={{
                    fontFamily: tokens.fontBody, fontSize: 15, color: tokens.gray,
                    lineHeight: 1.65,
                    maxHeight: active === i ? 250 : 0, overflow: "hidden",
                    transition: `max-height 0.6s ${tokens.ease}, opacity 0.5s`,
                    opacity: active === i ? 1 : 0,
                  }}>{s.desc}</p>
                </div>

                <div style={{
                  maxHeight: active === i ? 100 : 0, overflow: "hidden",
                  transition: `max-height 0.6s ${tokens.ease}, opacity 0.5s`,
                  opacity: active === i ? 1 : 0, marginTop: 20,
                }}>
                  <div style={{
                    height: 1,
                    background: `linear-gradient(90deg, ${s.color}33, transparent)`,
                    marginBottom: 16,
                  }} />
                  <p style={{
                    fontFamily: tokens.fontBody, fontSize: 13,
                    color: s.color, fontWeight: 500,
                  }}>✦ {s.highlight}</p>
                </div>
              </div>
            </TiltCard>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
