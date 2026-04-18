"use client";
import { useState, useEffect } from "react";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal } from "@/components/ui";

const CASES = [
  {
    icon: "📄",
    iconBg: "#6366f1",
    name: "APNNCV",
    desc: "ATS-optimized resume SaaS that increased interview callback rates for job seekers.",
    fullDesc: "Challenge: Job seekers were failing ATS filters with poorly formatted CVs. Solution: We built a SaaS platform with ATS-optimized templates and one-click PDF/DOCX export. Impact: Users report measurably higher callback rates and a 70% reduction in time-to-apply.",
    features: ["ATS Score Optimization", "3+ Professional Templates", "PDF & DOCX Export", "Secure Firebase Auth"],
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
    githubLink: null,
    image: "/projects/apnacv-mockup.webp",
    accentColor: "#6366f1",
  },
  {
    icon: "💹",
    iconBg: "#22c55e",
    name: "Finance App",
    desc: "Real-time expense tracker that helped users cut overspending by visualizing where money goes.",
    fullDesc: "Challenge: Users had no clear picture of their monthly spending patterns. Solution: Built a real-time finance dashboard with 4+ interactive chart types and live data sync. Impact: Users can identify and eliminate budget leaks within their first session.",
    features: ["4+ Interactive Chart Types", "Real-Time Budget Sync", "Spending Pattern Analysis", "100% Private Data"],
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
    githubLink: null,
    image: "/projects/finance-mockup.webp",
    accentColor: "#22c55e",
  },
  {
    icon: "🛍️",
    iconBg: "#0ea5e9",
    name: "E-Commerce UI",
    desc: "High-converting responsive storefront with 20+ products, sub-2s load time on all devices.",
    fullDesc: "Challenge: The client needed a storefront that converted on mobile without a heavy framework. Solution: Built a pure HTML/CSS/JS responsive storefront optimized for speed and UX. Impact: Sub-2-second load time, 100% responsive across all screen sizes.",
    features: ["20+ Product Listings", "Sub-2s Page Load", "Mobile-First Design", "Zero Framework Bloat"],
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
    githubLink: "https://github.com/umar2334/project-1-umar-store",
    image: "/projects/ecommerce-mockup.webp",
    accentColor: "#0ea5e9",
  },
  {
    icon: "🗺️",
    iconBg: "#f59e0b",
    name: "Ghumo",
    desc: "Flutter travel app for Pakistan — live maps, offline routes & weather for every expedition.",
    fullDesc: "Challenge: Pakistani travelers had no dedicated app for local trails and expeditions with offline capability. Solution: Built a Flutter app with Google Maps integration, offline route downloads, and live weather. Impact: Live on Android with a growing community of Pakistan explorers.",
    features: ["Google Maps Integration", "Offline Route Download", "Live Weather API", "APK Live on Android"],
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
    githubLink: "https://github.com/umar2334/Ghumo",
    image: "/projects/ghumo-mockup.webp",
    accentColor: "#f59e0b",
  },
  {
    icon: "🏢",
    iconBg: "#3b82f6",
    name: "Society Management",
    desc: "Automated admin portal that eliminated manual overhead for a 500+ resident community.",
    fullDesc: "Challenge: A 500+ resident colony was managing billing, announcements, and records via WhatsApp and spreadsheets — costing hours of admin work weekly. Solution: Built a Flutter + Firebase portal with role-based access for residents and admins. Impact: ~90% reduction in manual administrative tasks, v1.0.27 live in production.",
    features: ["Role-Based Access Control", "Real-Time Announcements", "Admin Dashboard", "90% Less Manual Work"],
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
    githubLink: "https://github.com/umar2334/society-managment-app",
    image: "/projects/society-mockup.webp",
    accentColor: "#3b82f6",
  },
  {
    icon: "🎯",
    iconBg: "#6366f1",
    name: "LeadHunter Pro",
    desc: "AI Lead Generation SaaS — Google Maps to outreach pipeline.",
    fullDesc: "Challenge: Sales teams were manually copy-pasting leads from Google Maps — wasting hours daily. Solution: Built a Chrome Extension + Next.js SaaS that auto-scans Google Maps and generates AI-powered outreach messages via Gemini AI. Impact: 50+ qualified leads per scan, live in production.",
    features: ["Chrome Extension + SaaS Dashboard", "Google Maps Auto-Scanner", "Gemini AI Outreach Generator", "50+ Leads Per Scan"],
    tags: [
      { label: "Next.js", color: "#3b82f6", bg: "#3b82f618" },
      { label: "SaaS", color: "#8b5cf6", bg: "#8b5cf618" },
      { label: "AI", color: "#22c55e", bg: "#22c55e18" },
      { label: "Chrome Ext", color: "#f97316", bg: "#f9731618" },
    ],
    stats: [
      { value: "50+", label: "Leads per scan" },
      { value: "AI", label: "Outreach" },
      { value: "Live", label: "Production" },
    ],
    btnLabel: "View Demo",
    demoLink: "https://leadhunter-pro-pied.vercel.app",
    githubLink: "https://github.com/umar2334/leadhunter-pro",
    image: null,
    accentColor: "#6366f1",
  },
  {
    icon: "🎬",
    iconBg: "#8b5cf6",
    name: "TurkVerse",
    desc: "High-traffic Turkish drama portal — scaled to 12+ active users within 24 hours of launch.",
    fullDesc: "Challenge: Turkish drama fans had no dedicated high-performance platform for news and episode updates. Solution: Built a Next.js media portal with SSR/SSG, real-time SEO strategies, and optimized image delivery. Impact: Scaled to 12+ real-time active users within 24 hours of launch — proving our content-driven engineering model.",
    features: ["Next.js SSR/SSG Architecture", "Real-Time SEO Optimization", "Optimized Image Loading", "Scaled to 12+ Users in 24hrs"],
    tags: [
      { label: "Next.js", color: "#8b5cf6", bg: "#8b5cf618" },
      { label: "SEO", color: "#22c55e", bg: "#22c55e18" },
      { label: "Media", color: "#f97316", bg: "#f9731618" },
    ],
    stats: [
      { value: "12+", label: "Users Day 1" },
      { value: "SEO", label: "Optimized" },
      { value: "Live", label: "Platform" },
    ],
    btnLabel: "View Live Project",
    demoLink: "https://www.turkdrama.live",
    githubLink: null,
    image: null,
    accentColor: "#8b5cf6",
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#131316",
          border: `1px solid ${project.accentColor}33`,
          borderRadius: 20,
          width: "100%", maxWidth: 480,
          maxHeight: "90vh", overflowY: "auto",
          boxShadow: `0 32px 80px ${project.accentColor}22, 0 0 0 1px ${project.accentColor}22`,
        }}
      >
        {/* Image / Header */}
        <div style={{
          position: "relative", height: 260, overflow: "hidden",
          borderRadius: "20px 20px 0 0",
          background: `linear-gradient(160deg, ${project.accentColor}15, #0a0a0d)`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: "100%", height: "100%",
                objectFit: "contain", display: "block", padding: "16px",
              }}
            />
          ) : (
            <div style={{
              width: "100%", height: "100%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 64,
            }}>
              {project.icon}
            </div>
          )}
          {/* Gradient overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75) 100%)",
          }} />
          {/* Back button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 16, left: 16,
              background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 10, color: "#f5f5f7",
              fontFamily: tokens.fontBody, fontWeight: 600, fontSize: 13,
              padding: "7px 14px", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 6,
            }}
          >← Back</button>
          {/* Title on image */}
          <span style={{
            position: "absolute", bottom: 16, left: 20,
            fontFamily: tokens.font, fontWeight: 700, fontSize: 22,
            color: "#fff", letterSpacing: "-0.02em",
          }}>{project.name}</span>
        </div>

        {/* Content */}
        <div style={{ padding: "24px 28px 28px" }}>
          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
            {project.tags.map((tag, i) => (
              <span key={i} style={{
                fontFamily: tokens.fontBody, fontSize: 12, fontWeight: 600,
                color: tag.color, background: tag.bg,
                border: `1px solid ${tag.color}30`,
                borderRadius: 6, padding: "4px 10px",
                letterSpacing: "0.04em",
              }}>{tag.label}</span>
            ))}
          </div>

          {/* Description */}
          <p style={{
            fontFamily: tokens.fontBody, fontSize: 14,
            color: tokens.gray, lineHeight: 1.75, marginBottom: 22,
          }}>{project.fullDesc}</p>

          {/* Features */}
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
            {project.features.map((f, i) => (
              <li key={i} style={{
                fontFamily: tokens.fontBody, fontSize: 13,
                color: tokens.gray, marginBottom: 8,
                display: "flex", gap: 10, alignItems: "flex-start",
              }}>
                <span style={{ color: project.accentColor, fontWeight: 800, flexShrink: 0 }}>→</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10 }}>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: project.accentColor,
                color: "#000",
                fontFamily: tokens.fontBody, fontWeight: 700, fontSize: 14,
                padding: "12px 24px", borderRadius: 12,
                flex: 1, textAlign: "center", display: "block",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              {project.btnLabel === "Download APK" ? "Download APK ↓" : "View Live Demo →"}
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  border: `1px solid ${tokens.borderLight}`,
                  color: tokens.white,
                  fontFamily: tokens.fontBody, fontWeight: 600, fontSize: 14,
                  padding: "12px 20px", borderRadius: 12,
                  display: "inline-flex", alignItems: "center", gap: 8,
                  transition: "border-color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = project.accentColor + "66"}
                onMouseLeave={e => e.currentTarget.style.borderColor = tokens.borderLight}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cases() {
  const [activeProject, setActiveProject] = useState(null);

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
              {/* Header */}
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
                    color: tokens.white, letterSpacing: "-0.02em", marginBottom: 4,
                  }}>{c.name}</h3>
                  <p style={{
                    fontFamily: tokens.fontBody, fontSize: 13,
                    color: tokens.gray, lineHeight: 1.5,
                  }}>{c.desc}</p>
                </div>
              </div>

              {/* Tags */}
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

              <div style={{ height: 1, background: tokens.border }} />

              {/* Stats */}
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

              <div style={{ height: 1, background: tokens.border }} />

              {/* Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <a
                  href={c.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    background: c.accentColor,
                    color: "#000",
                    fontFamily: tokens.fontBody, fontWeight: 700, fontSize: 13,
                    padding: "10px 22px", borderRadius: 10,
                    letterSpacing: "0.01em",
                    transition: "opacity 0.2s",
                    flex: 1, textAlign: "center", display: "block",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >{c.btnLabel}</a>

                <button
                  onClick={() => setActiveProject(c)}
                  style={{
                    background: "transparent",
                    fontFamily: tokens.fontBody, fontWeight: 600, fontSize: 13,
                    color: tokens.white,
                    border: `1px solid ${tokens.borderLight}`,
                    padding: "10px 18px", borderRadius: 10,
                    cursor: "pointer",
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
                >Open <span style={{ fontSize: 14 }}>↗</span></button>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
