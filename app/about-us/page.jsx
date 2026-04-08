"use client";
import { useState, useEffect } from "react";
import { tokens } from "@/styles/tokens";
import { Nav, CTA, Footer, CustomCursor, ScrollProgress } from "@/components/sections";
import { FadeUp, TextReveal, ScaleIn } from "@/components/ui";

/* ── Data ─────────────────────────────────────────── */
const STATS = [
  { value: "10+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Team Members" },
];

const VALUES = [
  { icon: "◆", title: "Quality First", desc: "We never ship code we wouldn't be proud to put our name on. Every line matters.", color: "#c8ff00" },
  { icon: "◉", title: "Client Partnership", desc: "We treat every project as a long-term relationship, not a one-time transaction.", color: "#f97316" },
  { icon: "▣", title: "Innovation", desc: "We stay ahead of the curve, adopting modern tools and practices that give clients an edge.", color: "#4cc9f0" },
  { icon: "◈", title: "Transparency", desc: "Clear communication, honest timelines, and no hidden surprises — ever.", color: "#06d6a0" },
];

const TEAM = [
  { name: "Umar Khan", role: "CEO & Founder", initials: "UK", color: "#c8ff00", image: "/team/umar.png" },
  { name: "Sara Khan", role: "UI/UX Designer", initials: "SK", color: "#f97316", image: null },
  { name: "Usman Ali", role: "Mobile Developer", initials: "UA", color: "#4cc9f0", image: null },
  { name: "Fatima Noor", role: "WordPress Specialist", initials: "FN", color: "#ec4899", image: null },
];

/* ── Page ─────────────────────────────────────────── */
export default function AboutUsPage() {
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

      {/* ── Hero ──────────────────────────────────── */}
      <section style={{
        padding: "160px clamp(20px,4vw,64px) 100px",
        maxWidth: tokens.maxW, margin: "0 auto",
        position: "relative",
      }}>
        {/* Decorative glow */}
        <div style={{
          position: "absolute", top: 80, left: "50%", transform: "translateX(-50%)",
          width: 600, height: 300, borderRadius: "50%",
          background: `radial-gradient(ellipse, ${tokens.accent}08, transparent 70%)`,
          filter: "blur(80px)", pointerEvents: "none",
        }} />

        <div style={{ textAlign: "center", position: "relative" }}>
          <FadeUp>
            <span style={{
              fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 600,
              color: tokens.accent, textTransform: "uppercase", letterSpacing: "0.14em",
              display: "block", marginBottom: 20,
            }}>Who We Are</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <TextReveal text="Building Digital" style={{
              fontFamily: tokens.font, fontWeight: 800,
              fontSize: "clamp(38px, 6vw, 80px)",
              color: tokens.white, letterSpacing: "-0.03em",
              lineHeight: 1.1, display: "block",
            }} />
          </FadeUp>
          <FadeUp delay={0.12}>
            <TextReveal text="Products That Matter" style={{
              fontFamily: tokens.font, fontWeight: 800,
              fontSize: "clamp(38px, 6vw, 80px)",
              color: tokens.accent, letterSpacing: "-0.03em",
              lineHeight: 1.1, display: "block", marginBottom: 28,
            }} />
          </FadeUp>
          <FadeUp delay={0.18}>
            <p style={{
              fontFamily: tokens.fontBody, fontSize: 18, color: tokens.gray,
              lineHeight: 1.7, maxWidth: 620, margin: "0 auto",
            }}>
              Ezysantz Solution is a full-service digital agency passionate about crafting
              high-quality web, mobile, and cloud solutions that help businesses grow and thrive.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────── */}
      <section style={{
        padding: "0 clamp(20px,4vw,64px) 100px",
        maxWidth: tokens.maxW, margin: "0 auto",
      }}>
        <ScaleIn>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40, alignItems: "center",
            background: tokens.card,
            border: `1px solid ${tokens.border}`,
            borderRadius: 28, padding: "clamp(36px,5vw,64px)",
            position: "relative", overflow: "hidden",
          }}>
            {/* Glow accent */}
            <div style={{
              position: "absolute", top: -60, right: -60, width: 300, height: 300,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${tokens.accent}0a, transparent 65%)`,
              filter: "blur(60px)", pointerEvents: "none",
            }} />

            <div>
              <span style={{
                fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 600,
                color: tokens.accent, textTransform: "uppercase", letterSpacing: "0.12em",
                display: "block", marginBottom: 16,
              }}>Our Story</span>
              <h2 style={{
                fontFamily: tokens.font, fontWeight: 800,
                fontSize: "clamp(26px, 3.5vw, 42px)",
                color: tokens.white, letterSpacing: "-0.03em",
                lineHeight: 1.2, marginBottom: 20,
              }}>From idea to impact</h2>
            </div>

            <div>
              <p style={{
                fontFamily: tokens.fontBody, fontSize: 16, color: tokens.gray,
                lineHeight: 1.75, marginBottom: 20,
              }}>
                Ezysantz Solution was founded with a simple belief — great software should be
                accessible to every business, regardless of size. We started as a small team
                of developers and designers with a shared obsession for clean code and
                thoughtful UX.
              </p>
              <p style={{
                fontFamily: tokens.fontBody, fontSize: 16, color: tokens.gray,
                lineHeight: 1.75,
              }}>
                Today we partner with startups, SMEs, and enterprises across the globe,
                delivering full-stack web apps, mobile solutions, cloud backends, and
                WordPress platforms that drive real business results.
              </p>
            </div>
          </div>
        </ScaleIn>
      </section>

      {/* ── Stats ─────────────────────────────────── */}
      <section style={{
        padding: "0 clamp(20px,4vw,64px) 100px",
        maxWidth: tokens.maxW, margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 18,
        }}>
          {STATS.map((s, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div style={{
                background: tokens.card, border: `1px solid ${tokens.border}`,
                borderRadius: tokens.radius, padding: "36px 28px", textAlign: "center",
              }}>
                <div style={{
                  fontFamily: tokens.font, fontWeight: 800,
                  fontSize: "clamp(36px, 5vw, 52px)",
                  color: tokens.accent, letterSpacing: "-0.03em", marginBottom: 8,
                }}>{s.value}</div>
                <div style={{
                  fontFamily: tokens.fontBody, fontSize: 15,
                  color: tokens.gray, lineHeight: 1.4,
                }}>{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Values ────────────────────────────────── */}
      <section style={{
        padding: "0 clamp(20px,4vw,64px) 100px",
        maxWidth: tokens.maxW, margin: "0 auto",
      }}>
        <FadeUp>
          <h2 style={{
            fontFamily: tokens.font, fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: tokens.white, letterSpacing: "-0.03em",
            marginBottom: 12,
          }}>What We Stand For</h2>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p style={{
            fontFamily: tokens.fontBody, fontSize: 17, color: tokens.gray,
            lineHeight: 1.65, maxWidth: 500, marginBottom: 48,
          }}>
            Our core values drive every decision we make and every product we ship.
          </p>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}>
          {VALUES.map((v, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div
                style={{
                  background: tokens.card, borderRadius: tokens.radius,
                  padding: "36px 28px", border: `1px solid ${tokens.border}`,
                  transition: "border-color 0.4s, box-shadow 0.4s",
                  cursor: "default", position: "relative", overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = v.color + "55";
                  e.currentTarget.style.boxShadow = `0 8px 40px ${v.color}11`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = tokens.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  position: "absolute", top: 0, right: 0, width: 160, height: 160,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${v.color}08, transparent 70%)`,
                  filter: "blur(40px)", pointerEvents: "none",
                }} />
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `linear-gradient(135deg, ${v.color}20, ${v.color}08)`,
                  display: "grid", placeItems: "center",
                  fontSize: 20, color: v.color, marginBottom: 20,
                  border: `1px solid ${v.color}18`,
                }}>{v.icon}</div>
                <h3 style={{
                  fontFamily: tokens.font, fontWeight: 700, fontSize: 20,
                  color: tokens.white, marginBottom: 12, letterSpacing: "-0.01em",
                }}>{v.title}</h3>
                <p style={{
                  fontFamily: tokens.fontBody, fontSize: 15,
                  color: tokens.gray, lineHeight: 1.65,
                }}>{v.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Team ──────────────────────────────────── */}
      <section style={{
        padding: "0 clamp(20px,4vw,64px) 120px",
        maxWidth: tokens.maxW, margin: "0 auto",
      }}>
        <FadeUp>
          <h2 style={{
            fontFamily: tokens.font, fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: tokens.white, letterSpacing: "-0.03em", marginBottom: 12,
          }}>Meet the Team</h2>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p style={{
            fontFamily: tokens.fontBody, fontSize: 17, color: tokens.gray,
            lineHeight: 1.65, maxWidth: 500, marginBottom: 48,
          }}>
            A passionate group of builders, designers, and problem-solvers.
          </p>
        </FadeUp>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}>
          {TEAM.map((member, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div style={{
                background: tokens.card, borderRadius: tokens.radius,
                border: `1px solid ${tokens.border}`,
                overflow: "hidden",
                transition: "border-color 0.4s, transform 0.3s, box-shadow 0.4s",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = member.color + "44";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 20px 48px ${member.color}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = tokens.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Colored top bar */}
                <div style={{
                  height: 4,
                  background: `linear-gradient(90deg, ${member.color}, ${member.color}44)`,
                }} />

                {/* Photo area */}
                <div style={{
                  height: 200, position: "relative", overflow: "hidden",
                  background: `linear-gradient(160deg, ${member.color}12, ${tokens.bgAlt})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                    />
                  ) : (
                    <div style={{
                      width: 90, height: 90, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${member.color}30, ${member.color}10)`,
                      border: `2px solid ${member.color}44`,
                      display: "grid", placeItems: "center",
                      fontFamily: tokens.font, fontWeight: 700,
                      fontSize: 28, color: member.color,
                    }}>{member.initials}</div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: "20px 24px 24px" }}>
                  <h3 style={{
                    fontFamily: tokens.font, fontWeight: 700, fontSize: 18,
                    color: tokens.white, marginBottom: 6, letterSpacing: "-0.01em",
                  }}>{member.name}</h3>
                  <span style={{
                    display: "inline-block",
                    fontFamily: tokens.fontBody, fontSize: 12, fontWeight: 600,
                    color: member.color, textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    background: `${member.color}12`,
                    border: `1px solid ${member.color}22`,
                    borderRadius: 100, padding: "4px 12px",
                  }}>{member.role}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
