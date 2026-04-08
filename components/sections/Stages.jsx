"use client";
import { useState } from "react";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal, TiltCard } from "@/components/ui";

const STAGES = [
  { tag: "01", title: "Discovery & Planning", desc: "We start by understanding your business goals, target audience, and project requirements. We then create a clear roadmap with timelines, tech stack, and cost estimates — no surprises.", highlight: "✦ You get a detailed proposal within 24 hours of your first message", color: "#c8ff00" },
  { tag: "02", title: "Design & Development", desc: "Our team gets to work — designing, building, and testing your product iteratively. You stay in the loop at every stage with regular updates and demos.", highlight: "✦ Weekly progress updates so you always know where things stand", color: "#06d6a0" },
  { tag: "03", title: "Launch & Support", desc: "We deploy your project, handle all technical setup, and make sure everything runs smoothly. Post-launch support is always available — we don't disappear after delivery.", highlight: "✦ Ongoing support & maintenance available after every project", color: "#4cc9f0" },
];

export default function Stages() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: tokens.sectionPadding, maxWidth: tokens.maxW, margin: "0 auto" }}>
      <FadeUp>
        <TextReveal text="How we work with you" style={{
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
          A simple, transparent process from first message to final delivery —
          so you always know what's happening and what's next.
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
