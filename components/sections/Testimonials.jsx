"use client";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal, MagneticBtn } from "@/components/ui";

const REVIEWS = [
  { name: "Ahmed Raza", role: "Startup Founder", quote: "Ezysantz Solution delivered our web app exactly as we envisioned. Clean code, great communication, and on time. Highly recommended!" },
  { name: "Sarah Johnson", role: "Small Business Owner", quote: "Our WordPress site went from slow and outdated to fast and beautiful. The team was patient and responsive throughout." },
  { name: "Ali Hassan", role: "Freelance Client", quote: "They built our mobile app from scratch and handled everything — design, backend, deployment. Truly professional team." },
  { name: "Fatima Malik", role: "E-commerce Owner", quote: "WooCommerce customization was done perfectly. Every feature I asked for was implemented without any issues." },
  { name: "James Miller", role: "SaaS Client", quote: "The Firebase backend setup was solid. Scalable, secure, and well-documented. Will definitely work with them again." },
  { name: "Zainab Sheikh", role: "Local Business", quote: "Responsive website looks amazing on all devices. Got compliments from customers immediately after launch!" },
];

const COLORS = ["#c8ff00", "#4cc9f0", "#f97316", "#06d6a0", "#ec4899", "#8b5cf6"];

export default function Testimonials() {
  return (
    <section style={{ padding: tokens.sectionPadding, maxWidth: tokens.maxW, margin: "0 auto" }}>
      {/* Badge */}
      <FadeUp>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          marginBottom: 16, background: tokens.accentGlow,
          border: `1px solid ${tokens.accentDim}`,
          borderRadius: 100, padding: "6px 16px",
        }}>
          <span style={{
            fontFamily: tokens.fontBody, fontSize: 13,
            fontWeight: 600, color: tokens.accent,
          }}>100% Client Satisfaction</span>
          <span style={{ fontSize: 12, color: tokens.accent }}>★★★★★</span>
        </div>
      </FadeUp>

      <FadeUp delay={0.05}>
        <TextReveal text="Clients speak out about us" style={{
          fontFamily: tokens.font, fontWeight: 800,
          fontSize: "clamp(30px, 4.5vw, 52px)",
          color: tokens.white, letterSpacing: "-0.03em", marginBottom: 52,
        }} />
      </FadeUp>

      {/* Reviews Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 18,
      }}>
        {REVIEWS.map((r, i) => (
          <FadeUp key={i} delay={i * 0.06}>
            <div data-hover style={{
              background: tokens.card, borderRadius: tokens.radius,
              padding: "32px 28px", border: `1px solid ${tokens.border}`,
              transition: "border-color 0.4s, transform 0.3s",
              cursor: "default", height: "100%",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = COLORS[i] + "33";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = tokens.border;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Header */}
              <div style={{
                display: "flex", alignItems: "center", gap: 14, marginBottom: 20,
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${COLORS[i]}28, ${COLORS[i]}0a)`,
                  display: "grid", placeItems: "center",
                  fontFamily: tokens.font, fontWeight: 700,
                  fontSize: 18, color: COLORS[i],
                  border: `1px solid ${COLORS[i]}22`,
                }}>{r.name[0]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: tokens.fontBody, fontSize: 15,
                    fontWeight: 600, color: tokens.white,
                  }}>{r.name}</div>
                  <div style={{
                    fontFamily: tokens.fontBody, fontSize: 13, color: tokens.gray,
                  }}>{r.role}</div>
                </div>
                <div style={{
                  fontFamily: tokens.font, fontSize: 14, fontWeight: 700,
                  color: tokens.accent, background: tokens.accentGlow,
                  padding: "4px 10px", borderRadius: 8,
                }}>5.0</div>
              </div>

              <div style={{ color: tokens.accent, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>
                ★★★★★
              </div>

              <p style={{
                fontFamily: tokens.fontBody, fontSize: 15, color: tokens.offWhite,
                fontStyle: "italic", lineHeight: 1.6,
              }}>
                &ldquo;{r.quote}&rdquo;
              </p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.4} style={{ marginTop: 40, textAlign: "center" }}>
        <MagneticBtn accent={false} href="/contact-us" style={{ fontSize: 14 }}>
          Work with us →
        </MagneticBtn>
      </FadeUp>
    </section>
  );
}
