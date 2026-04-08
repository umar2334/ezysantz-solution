"use client";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal, TiltCard } from "@/components/ui";

const CASES = [
  { name: "AppNACV", desc: "A modern full-stack web application — built and deployed on Vercel with a clean UI and smooth user experience.", color: "#c8ff00", tag: "Full Stack · Web App", link: "https://apnnacv.vercel.app/", image: "/projects/apnacv.png" },
  { name: "Finance Visualizer", desc: "Personal finance tracking and visualization tool — helps users manage budgets, track expenses, and view spending insights.", color: "#4cc9f0", tag: "Full Stack · Finance", link: "https://personal-finance-visualizer-ochre-psi.vercel.app/login", image: "/projects/finance.png" },
  { name: "MediTrack", desc: "Cross-platform mobile app for clinic appointment booking, patient records, and doctor-patient messaging on iOS & Android.", color: "#f97316", tag: "Mobile App · Healthcare", link: "#" },
  { name: "LuxeStay", desc: "High-converting responsive website for a luxury hospitality brand — optimised for all devices and integrated with a booking engine.", color: "#ec4899", tag: "Web Design · Hospitality", link: "#" },
  { name: "TechBlog WP", desc: "Custom WordPress website with tailored theme, SEO-optimised structure, and a smooth editorial workflow for a growing tech publication.", color: "#8b5cf6", tag: "WordPress · Blog", link: "#" },
  { name: "WooBoost", desc: "Bespoke WooCommerce plugin extending checkout flow with upsells, discount logic, and custom shipping rules — zero third-party dependency.", color: "#06d6a0", tag: "WP Plugin · WooCommerce", link: "#" },
];

export default function Cases() {
  return (
    <section style={{ padding: tokens.sectionPadding, maxWidth: tokens.maxW, margin: "0 auto" }}>
      <FadeUp>
        <TextReveal text="Selected Work" style={{
          fontFamily: tokens.font, fontWeight: 800,
          fontSize: "clamp(30px, 4.5vw, 52px)",
          color: tokens.white, letterSpacing: "-0.03em", marginBottom: 14,
        }} />
      </FadeUp>
      <FadeUp delay={0.1}>
        <p style={{
          fontFamily: tokens.fontBody, fontSize: 17, color: tokens.gray,
          maxWidth: 600, marginBottom: 56, lineHeight: 1.65,
        }}>
          We think about the big picture and focus primarily on your
          product's funding & business success.
        </p>
      </FadeUp>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
        gap: 20,
      }}>
        {CASES.map((c, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <TiltCard style={{ height: "100%" }}>
              <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block", height: "100%" }}>
              <div data-hover style={{
                borderRadius: tokens.radius, overflow: "hidden",
                cursor: "pointer", border: `1px solid ${tokens.border}`,
                background: tokens.card,
                transition: "border-color 0.4s, box-shadow 0.4s",
                height: "100%", display: "flex", flexDirection: "column",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = c.color + "55";
                  e.currentTarget.style.boxShadow = `0 16px 48px ${c.color}11`;
                  const img = e.currentTarget.querySelector("[data-case-img]");
                  if (img) img.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = tokens.border;
                  e.currentTarget.style.boxShadow = "none";
                  const img = e.currentTarget.querySelector("[data-case-img]");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                {/* Image area */}
                <div style={{ overflow: "hidden", position: "relative" }}>
                  <div data-case-img style={{
                    height: 220,
                    background: `linear-gradient(135deg, ${c.color}18, ${c.color}06, ${tokens.card})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "transform 0.6s ease", position: "relative",
                  }}>
                    {c.image ? (
                      <img
                        src={c.image}
                        alt={c.name}
                        style={{
                          width: "100%", height: "100%",
                          objectFit: "cover", objectPosition: "top",
                          display: "block",
                        }}
                      />
                    ) : (
                      <>
                        <span style={{
                          fontFamily: tokens.font, fontWeight: 800, fontSize: 80,
                          color: c.color + "15", letterSpacing: "-0.05em",
                        }}>{c.name[0]}</span>
                        <div style={{
                          position: "absolute", top: 16, right: 16,
                          width: 40, height: 40, border: `1px solid ${c.color}22`,
                          borderRadius: 10, transform: "rotate(15deg)",
                        }} />
                        <div style={{
                          position: "absolute", bottom: 20, left: 20,
                          width: 24, height: 24, borderRadius: "50%",
                          background: `${c.color}11`, border: `1px solid ${c.color}18`,
                        }} />
                      </>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  padding: "28px 28px 32px", flex: 1,
                  display: "flex", flexDirection: "column",
                }}>
                  <span style={{
                    fontFamily: tokens.fontBody, fontSize: 12, fontWeight: 600,
                    color: c.color, textTransform: "uppercase",
                    letterSpacing: "0.08em", marginBottom: 10,
                  }}>{c.tag}</span>
                  <h3 style={{
                    fontFamily: tokens.font, fontWeight: 700, fontSize: 24,
                    color: tokens.white, marginBottom: 12,
                    letterSpacing: "-0.02em",
                  }}>{c.name}</h3>
                  <p style={{
                    fontFamily: tokens.fontBody, fontSize: 14, color: tokens.gray,
                    lineHeight: 1.6, marginBottom: 24, flex: 1,
                  }}>{c.desc}</p>
                  <span style={{
                    fontFamily: tokens.fontBody, fontSize: 14, fontWeight: 600,
                    color: tokens.white,
                    display: "inline-flex", alignItems: "center", gap: 8,
                  }}>
                    {c.link !== "#" ? "View live →" : "Case study"} <span style={{ color: c.color }}>→</span>
                  </span>
                </div>
              </div>
              </a>
            </TiltCard>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
