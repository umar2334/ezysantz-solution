"use client";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal } from "@/components/ui";

const CASES = [
  {
    icon: "📄",
    iconBg: "#6366f1",
    name: "APNNCV",
    desc: "Resume Builder — for job seekers & professionals.",
    tags: [
      { label: "React", color: "#6366f1", bg: "#6366f118" },
      { label: "Web", color: "#0ea5e9", bg: "#0ea5e918" },
      { label: "Firebase", color: "#f97316", bg: "#f9731618" },
    ],
    stats: [
      { value: "ATS", label: "Optimised" },
      { value: "3+", label: "Templates" },
      { value: "PDF", label: "Export" },
    ],
    btnLabel: "View Demo",
    demoLink: "https://apnnacv.vercel.app/",
    liveLink: "https://apnnacv.vercel.app/",
    accentColor: "#6366f1",
  },
  {
    icon: "💹",
    iconBg: "#22c55e",
    name: "Finance App",
    desc: "Expense Tracker — budget visualization & insights.",
    tags: [
      { label: "Flutter", color: "#06b6d4", bg: "#06b6d418" },
      { label: "Android", color: "#22c55e", bg: "#22c55e18" },
      { label: "Web", color: "#8b5cf6", bg: "#8b5cf618" },
    ],
    stats: [
      { value: "4+", label: "Chart Types" },
      { value: "Live", label: "Sync" },
      { value: "100%", label: "Privacy" },
    ],
    btnLabel: "View Demo",
    demoLink: "https://personal-finance-visualizer-ochre-psi.vercel.app/",
    liveLink: "https://personal-finance-visualizer-ochre-psi.vercel.app/",
    accentColor: "#22c55e",
  },
  {
    icon: "🛍️",
    iconBg: "#0ea5e9",
    name: "E-Commerce UI",
    desc: "Responsive Storefront — clean product layout.",
    tags: [
      { label: "HTML", color: "#f97316", bg: "#f9731618" },
      { label: "CSS", color: "#0ea5e9", bg: "#0ea5e918" },
      { label: "Web", color: "#6366f1", bg: "#6366f118" },
    ],
    stats: [
      { value: "20+", label: "Products" },
      { value: "Fast", label: "Load" },
      { value: "100%", label: "Responsive" },
    ],
    btnLabel: "View Demo",
    demoLink: "https://umar2334.github.io/project-1-umar-store/",
    liveLink: "https://umar2334.github.io/project-1-umar-store/",
    accentColor: "#0ea5e9",
  },
  {
    icon: "🗺️",
    iconBg: "#f59e0b",
    name: "Ghumo",
    desc: "Pakistan Travel Explorer — maps, trails & expeditions.",
    tags: [
      { label: "Flutter", color: "#06b6d4", bg: "#06b6d418" },
      { label: "Android", color: "#22c55e", bg: "#22c55e18" },
      { label: "APK", color: "#f59e0b", bg: "#f59e0b18" },
    ],
    stats: [
      { value: "Live", label: "Weather" },
      { value: "Maps", label: "Interactive" },
      { value: "APK", label: "Ready" },
    ],
    btnLabel: "Download APK",
    demoLink: "https://github.com/umar2334/Ghumo/releases/download/v1.0.0/Ghumo-v1.0.0.apk",
    liveLink: "https://github.com/umar2334/Ghumo",
    accentColor: "#f59e0b",
  },
  {
    icon: "🏢",
    iconBg: "#3b82f6",
    name: "Society Management",
    desc: "Resident & Admin Portal — Karim Nagar Colony.",
    tags: [
      { label: "Flutter", color: "#06b6d4", bg: "#06b6d418" },
      { label: "Dart", color: "#3b82f6", bg: "#3b82f618" },
      { label: "Firebase", color: "#f97316", bg: "#f9731618" },
    ],
    stats: [
      { value: "v1.0.27", label: "Version" },
      { value: "34 MB", label: "APK Size" },
      { value: "Live", label: "Release" },
    ],
    btnLabel: "Download APK",
    demoLink: "https://github.com/umar2334/society-managment-app/releases/download/v1.0.27/society-management-v1.0.27.apk",
    liveLink: "https://github.com/umar2334/society-managment-app",
    accentColor: "#3b82f6",
  },
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
          Production-ready apps built with cutting-edge and modern web technologies.
        </p>
      </FadeUp>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: 20,
      }}>
        {CASES.map((c, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div
              style={{
                background: tokens.card,
                border: `1px solid ${tokens.border}`,
                borderRadius: tokens.radius,
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                transition: "border-color 0.3s, box-shadow 0.3s",
                height: "100%",
                boxSizing: "border-box",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = c.accentColor + "44";
                e.currentTarget.style.boxShadow = `0 8px 32px ${c.accentColor}14`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = tokens.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Header: icon + name + desc */}
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: c.iconBg + "22",
                  border: `1px solid ${c.iconBg}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: tokens.font, fontWeight: 700, fontSize: 18,
                    color: tokens.white, letterSpacing: "-0.02em",
                    marginBottom: 4,
                  }}>{c.name}</h3>
                  <p style={{
                    fontFamily: tokens.fontBody, fontSize: 13,
                    color: tokens.gray, lineHeight: 1.5,
                  }}>{c.desc}</p>
                </div>
              </div>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {c.tags.map((tag, ti) => (
                  <span key={ti} style={{
                    fontFamily: tokens.fontBody, fontSize: 12, fontWeight: 600,
                    color: tag.color, background: tag.bg,
                    border: `1px solid ${tag.color}30`,
                    borderRadius: 6, padding: "4px 10px",
                    letterSpacing: "0.04em",
                  }}>{tag.label}</span>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: tokens.border }} />

              {/* Stats row */}
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                {c.stats.map((stat, si) => (
                  <div key={si} style={{ textAlign: "center", flex: 1 }}>
                    <div style={{
                      fontFamily: tokens.font, fontWeight: 700, fontSize: 15,
                      color: tokens.white, letterSpacing: "-0.01em",
                    }}>{stat.value}</div>
                    <div style={{
                      fontFamily: tokens.fontBody, fontSize: 11,
                      color: tokens.gray, marginTop: 2,
                    }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: tokens.border }} />

              {/* Action buttons */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <a href={c.demoLink} target="_blank" rel="noopener noreferrer" style={{
                    textDecoration: "none",
                    background: c.accentColor,
                    color: "#000",
                    fontFamily: tokens.fontBody,
                    fontWeight: 700,
                    fontSize: 13,
                    padding: "10px 22px",
                    borderRadius: 10,
                    letterSpacing: "0.01em",
                    transition: "opacity 0.2s",
                    flex: 1,
                    textAlign: "center",
                    display: "block",
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >{c.btnLabel}</a>

                {c.liveLink !== "#" ? (
                  <a href={c.liveLink} target="_blank" rel="noopener noreferrer" style={{
                    textDecoration: "none",
                    fontFamily: tokens.fontBody, fontWeight: 600, fontSize: 13,
                    color: tokens.white,
                    border: `1px solid ${tokens.borderLight}`,
                    padding: "10px 18px",
                    borderRadius: 10,
                    display: "inline-flex", alignItems: "center", gap: 6,
                    transition: "border-color 0.2s, color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = c.accentColor + "66";
                      e.currentTarget.style.color = c.accentColor;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = tokens.borderLight;
                      e.currentTarget.style.color = tokens.white;
                    }}
                  >Open <span style={{ fontSize: 14 }}>↗</span></a>
                ) : (
                  <span style={{
                    fontFamily: tokens.fontBody, fontWeight: 600, fontSize: 13,
                    color: tokens.gray,
                    border: `1px solid ${tokens.border}`,
                    padding: "10px 18px",
                    borderRadius: 10,
                    display: "inline-flex", alignItems: "center", gap: 6,
                    whiteSpace: "nowrap",
                  }}>Open <span style={{ fontSize: 14 }}>↗</span></span>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
