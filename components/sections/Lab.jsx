"use client";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal } from "@/components/ui";

const LAB_PROJECTS = [
  {
    icon: "📦",
    iconBg: "#f97316",
    name: "APK Store",
    tagline: "Pakistan's Independent App Distribution Platform",
    desc: "We built and operate our own APK distribution platform — hosting our Flutter apps and third-party APKs. Real infrastructure, real traffic, real DevOps.",
    metrics: [
      { value: "Live", label: "Platform" },
      { value: "APK", label: "Distribution" },
      { value: "Flutter", label: "Powered" },
    ],
    status: "Live",
    statusColor: "#22c55e",
    accentColor: "#f97316",
  },
  {
    icon: "🎬",
    iconBg: "#8b5cf6",
    name: "TurkVerse",
    tagline: "High-Traffic Turkish Drama Portal — Live & Scaling",
    desc: "A Next.js-powered media portal dedicated to Turkish dramas — fully SEO-optimized with SSR/SSG, real-time content delivery, and optimized image loading. Scaled to 12+ active users within 24 hours of launch.",
    metrics: [
      { value: "12+", label: "Users Day 1" },
      { value: "SEO", label: "Optimized" },
      { value: "Live", label: "& Scaling" },
    ],
    status: "Live",
    statusColor: "#22c55e",
    link: "https://www.turkdrama.live",
    accentColor: "#8b5cf6",
  },
];

export default function Lab() {
  return (
    <section style={{ padding: tokens.sectionPadding, maxWidth: tokens.maxW, margin: "0 auto" }}>
      {/* Header */}
      <FadeUp>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#c8ff0010", border: "1px solid #c8ff0022",
          borderRadius: 100, padding: "6px 16px 6px 10px", marginBottom: 24,
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%", background: tokens.accent,
            animation: "pulse 2s infinite",
          }} />
          <span style={{
            fontFamily: tokens.fontBody, fontSize: 12, color: tokens.accent,
            textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600,
          }}>Internal Lab</span>
        </div>
      </FadeUp>

      <FadeUp delay={0.05}>
        <TextReveal text="The Ezysantz Lab" style={{
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
          We don't just build apps — we run platforms. Our internal lab handles real-world traffic daily, giving us the production experience to scale your business with confidence.
        </p>
      </FadeUp>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: 20,
      }}>
        {LAB_PROJECTS.map((proj, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div
              style={{
                background: tokens.card,
                border: `1px solid ${tokens.border}`,
                borderRadius: tokens.radius,
                padding: "36px 32px",
                display: "flex", flexDirection: "column", gap: 20,
                position: "relative", overflow: "hidden",
                transition: "border-color 0.3s, box-shadow 0.3s",
                height: "100%", boxSizing: "border-box",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = proj.accentColor + "44";
                e.currentTarget.style.boxShadow = `0 12px 40px ${proj.accentColor}12`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = tokens.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Glow bg */}
              <div style={{
                position: "absolute", top: -40, right: -40,
                width: 180, height: 180, borderRadius: "50%",
                background: `radial-gradient(circle, ${proj.accentColor}10, transparent 70%)`,
                filter: "blur(40px)", pointerEvents: "none",
              }} />

              {/* Top row: icon + status */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: proj.iconBg + "20",
                  border: `1px solid ${proj.iconBg}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24,
                }}>{proj.icon}</div>
                <span style={{
                  fontFamily: tokens.fontBody, fontSize: 12, fontWeight: 700,
                  color: proj.statusColor,
                  background: proj.statusColor + "18",
                  border: `1px solid ${proj.statusColor}30`,
                  borderRadius: 100, padding: "4px 12px",
                  letterSpacing: "0.06em",
                }}>{proj.status}</span>
              </div>

              {/* Name + tagline */}
              <div>
                <h3 style={{
                  fontFamily: tokens.font, fontWeight: 700, fontSize: 22,
                  color: tokens.white, letterSpacing: "-0.02em", marginBottom: 6,
                }}>{proj.name}</h3>
                <p style={{
                  fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 600,
                  color: proj.accentColor,
                }}>{proj.tagline}</p>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: tokens.fontBody, fontSize: 14,
                color: tokens.gray, lineHeight: 1.7,
              }}>{proj.desc}</p>

              {/* Divider */}
              <div style={{ height: 1, background: tokens.border }} />

              {/* Metrics */}
              <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
                {proj.metrics.map((m, mi) => (
                  <div key={mi} style={{ textAlign: "center", flex: 1 }}>
                    <div style={{
                      fontFamily: tokens.font, fontWeight: 700, fontSize: 15,
                      color: tokens.white,
                    }}>{m.value}</div>
                    <div style={{
                      fontFamily: tokens.fontBody, fontSize: 11,
                      color: tokens.gray, marginTop: 2,
                    }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Live link if available */}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: proj.accentColor,
                    color: "#fff",
                    fontFamily: tokens.fontBody, fontWeight: 700, fontSize: 13,
                    padding: "10px 20px", borderRadius: 10,
                    transition: "opacity 0.2s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >View Live Project ↗</a>
              )}
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Bottom pitch */}
      <FadeUp delay={0.3}>
        <div style={{
          marginTop: 40,
          background: `linear-gradient(135deg, ${tokens.accentGlow}, transparent)`,
          border: `1px solid ${tokens.accentDim}`,
          borderRadius: tokens.radius,
          padding: "32px 36px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}>
          <div>
            <p style={{
              fontFamily: tokens.font, fontWeight: 700, fontSize: 20,
              color: tokens.white, letterSpacing: "-0.02em", marginBottom: 6,
            }}>We run platforms, not just projects.</p>
            <p style={{
              fontFamily: tokens.fontBody, fontSize: 14,
              color: tokens.gray, lineHeight: 1.6, maxWidth: 480,
            }}>
              Every platform we operate gives us real-world experience in performance, scaling, and reliability — so when we build yours, we already know what breaks at scale.
            </p>
          </div>
          <a href="/contact-us" style={{
            textDecoration: "none",
            background: tokens.accent, color: "#000",
            fontFamily: tokens.fontBody, fontWeight: 700, fontSize: 14,
            padding: "13px 28px", borderRadius: 12,
            whiteSpace: "nowrap", flexShrink: 0,
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Work With Us →</a>
        </div>
      </FadeUp>
    </section>
  );
}
