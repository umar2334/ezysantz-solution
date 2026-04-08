"use client";
import { useState } from "react";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal, TiltCard } from "@/components/ui";

const SERVICES = [
  {
    icon: "🌐", title: "Full Stack Development", color: "#c8ff00",
    desc: "End-to-end web solutions built with modern technologies. We architect, develop, and deploy scalable applications from database to UI.",
    detail: {
      about: "We build complete web applications from scratch — frontend, backend, database, and deployment. Whether it's a SaaS product, an admin dashboard, or a customer-facing platform, we handle the full cycle.",
      includes: ["React / Next.js Frontend", "Node.js / Express Backend", "REST & GraphQL APIs", "Database Design (SQL & NoSQL)", "Cloud Deployment (Vercel, AWS)", "Authentication & Security"],
      tech: ["Next.js", "React", "Node.js", "MongoDB", "PostgreSQL", "Tailwind CSS"],
    },
  },
  {
    icon: "📱", title: "Mobile App Development", color: "#f97316",
    desc: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    detail: {
      about: "We design and develop high-performance mobile applications for iOS and Android. From idea to App Store — we take care of UX, development, testing, and launch.",
      includes: ["Cross-platform with React Native", "iOS & Android Support", "Push Notifications", "Offline Mode", "App Store Submission", "Performance Optimization"],
      tech: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
    },
  },
  {
    icon: "☁️", title: "BaaS & Cloud Solutions", color: "#4cc9f0",
    desc: "Leverage the power of cloud infrastructure and backend-as-a-service platforms to scale your product efficiently and reliably.",
    detail: {
      about: "We set up and manage cloud backends so your product can scale without infrastructure headaches. From Firebase to AWS, we configure everything for reliability, speed, and cost-efficiency.",
      includes: ["Firebase / Supabase Setup", "Cloud Functions & Triggers", "Real-time Databases", "File Storage & CDN", "Auth & Security Rules", "Serverless Architecture"],
      tech: ["Firebase", "Supabase", "AWS", "Vercel", "Cloudflare", "Docker"],
    },
  },
  {
    icon: "🖥️", title: "Responsive Web Design", color: "#06d6a0",
    desc: "Pixel-perfect, device-agnostic interfaces that look and perform beautifully across all screen sizes and browsers.",
    detail: {
      about: "We craft responsive websites that look stunning on every device — from mobile phones to 4K monitors. Clean layouts, smooth interactions, and fast load times are our standard.",
      includes: ["Mobile-first Design", "Cross-browser Compatibility", "Smooth Animations", "Fast Load Times", "Accessibility (WCAG)", "SEO-friendly Structure"],
      tech: ["HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Next.js", "Figma"],
    },
  },
  {
    icon: "🛠️", title: "WordPress Development", color: "#ec4899",
    desc: "Custom WordPress websites built for speed, security, and ease of management — tailored to your brand and business goals.",
    detail: {
      about: "We build custom WordPress sites that go far beyond templates. Fully tailored to your brand, optimized for speed and SEO, and easy for you to manage without technical knowledge.",
      includes: ["Custom Theme Development", "WooCommerce Integration", "Speed & SEO Optimization", "Security Hardening", "CMS Training", "Ongoing Maintenance"],
      tech: ["WordPress", "WooCommerce", "PHP", "ACF", "Elementor", "WP Rocket"],
    },
  },
  {
    icon: "⚙️", title: "WP Plugin & Theme Customization", color: "#8b5cf6",
    desc: "Extend and tailor your WordPress site with bespoke plugin development and theme customization that fits your exact needs.",
    detail: {
      about: "Already have a WordPress site but need custom functionality? We build bespoke plugins and customize existing themes to add exactly the features you need — no bloat, no workarounds.",
      includes: ["Custom Plugin Development", "Theme Child Customization", "WooCommerce Extensions", "API Integrations", "Admin Dashboard Tweaks", "Bug Fixes & Optimization"],
      tech: ["PHP", "WordPress Hooks API", "JavaScript", "MySQL", "REST API", "ACF"],
    },
  },
];

function ServiceModal({ service, onClose }) {
  if (!service) return null;
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 1100,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(8px)",
          animation: "fadeIn 0.2s ease",
        }}
      />

      {/* Modal */}
      <div style={{
        position: "fixed", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1101, width: "min(640px, 92vw)",
        maxHeight: "85vh", overflowY: "auto",
        background: tokens.card,
        border: `1px solid ${service.color}33`,
        borderRadius: 24,
        boxShadow: `0 32px 80px ${service.color}18, 0 0 0 1px ${service.color}11`,
        animation: "slideUp 0.3s ease",
      }}>
        {/* Glow */}
        <div style={{
          position: "absolute", top: -40, right: -40, width: 220, height: 220,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${service.color}12, transparent 65%)`,
          filter: "blur(50px)", pointerEvents: "none",
        }} />

        {/* Header */}
        <div style={{
          padding: "32px 32px 24px",
          borderBottom: `1px solid ${tokens.border}`,
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between", gap: 16,
          position: "relative",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16, flexShrink: 0,
              background: `linear-gradient(135deg, ${service.color}20, ${service.color}08)`,
              border: `1px solid ${service.color}22`,
              display: "grid", placeItems: "center", fontSize: 24,
            }}>{service.icon}</div>
            <div>
              <span style={{
                fontFamily: tokens.fontBody, fontSize: 11, fontWeight: 600,
                color: service.color, textTransform: "uppercase",
                letterSpacing: "0.1em", display: "block", marginBottom: 4,
              }}>Our Service</span>
              <h2 style={{
                fontFamily: tokens.font, fontWeight: 800, fontSize: 22,
                color: tokens.white, letterSpacing: "-0.02em",
              }}>{service.title}</h2>
            </div>
          </div>
          {/* Close btn */}
          <button onClick={onClose} style={{
            width: 36, height: 36, borderRadius: 10, flexShrink: 0,
            background: tokens.bgAlt, border: `1px solid ${tokens.border}`,
            color: tokens.gray, cursor: "pointer", fontSize: 18,
            display: "grid", placeItems: "center",
            transition: "color 0.2s, border-color 0.2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.color = tokens.white; e.currentTarget.style.borderColor = tokens.grayDark; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = tokens.gray; e.currentTarget.style.borderColor = tokens.border; }}
          >×</button>
        </div>

        {/* Body */}
        <div style={{ padding: "28px 32px 32px", position: "relative" }}>
          {/* About */}
          <p style={{
            fontFamily: tokens.fontBody, fontSize: 15, color: tokens.gray,
            lineHeight: 1.75, marginBottom: 28,
          }}>{service.detail.about}</p>

          {/* What's included */}
          <h4 style={{
            fontFamily: tokens.font, fontWeight: 700, fontSize: 14,
            color: tokens.white, textTransform: "uppercase",
            letterSpacing: "0.08em", marginBottom: 16,
          }}>What's Included</h4>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 10, marginBottom: 28,
          }}>
            {service.detail.includes.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                fontFamily: tokens.fontBody, fontSize: 14, color: tokens.grayLight,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                  background: service.color,
                }} />
                {item}
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <h4 style={{
            fontFamily: tokens.font, fontWeight: 700, fontSize: 14,
            color: tokens.white, textTransform: "uppercase",
            letterSpacing: "0.08em", marginBottom: 14,
          }}>Technologies</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {service.detail.tech.map((t, i) => (
              <span key={i} style={{
                fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 500,
                color: service.color,
                background: `${service.color}12`,
                border: `1px solid ${service.color}22`,
                borderRadius: 100, padding: "5px 14px",
              }}>{t}</span>
            ))}
          </div>

          {/* CTA */}
          <a href="/contact-us" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            marginTop: 32, padding: "14px 32px",
            background: service.color, color: tokens.bg,
            fontFamily: tokens.fontBody, fontWeight: 700, fontSize: 15,
            borderRadius: 100, textDecoration: "none",
            transition: "opacity 0.2s",
          }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            Get Started →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translate(-50%, calc(-50% + 20px)) } to { opacity: 1; transform: translate(-50%, -50%) } }
      `}</style>
    </>
  );
}

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section style={{ padding: tokens.sectionPadding, maxWidth: tokens.maxW, margin: "0 auto" }}>
      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        flexWrap: "wrap", gap: 20, marginBottom: 56,
      }}>
        <div>
          <FadeUp>
            <TextReveal text="Services" style={{
              fontFamily: tokens.font, fontWeight: 800,
              fontSize: "clamp(30px, 4.5vw, 52px)",
              color: tokens.white, letterSpacing: "-0.03em", marginBottom: 14,
            }} />
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{
              fontFamily: tokens.fontBody, fontSize: 17, color: tokens.gray,
              maxWidth: 500, lineHeight: 1.65,
            }}>
              Whether you need a full-scale IT partner or a vendor for particular tasks, we got you
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <span style={{
            fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 600,
            color: tokens.accent, textTransform: "uppercase", letterSpacing: "0.12em",
          }}>Complex solution</span>
        </FadeUp>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 18,
      }}>
        {SERVICES.map((s, i) => (
          <FadeUp key={i} delay={i * 0.07}>
            <TiltCard style={{ height: "100%" }}>
              <div data-hover style={{
                background: tokens.card, borderRadius: tokens.radius,
                padding: "40px 30px", border: `1px solid ${tokens.border}`,
                cursor: "pointer", transition: "border-color 0.4s, box-shadow 0.4s",
                height: "100%", position: "relative", overflow: "hidden",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = s.color + "55";
                  e.currentTarget.style.boxShadow = `0 8px 40px ${s.color}11`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = tokens.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Background glow */}
                <div style={{
                  position: "absolute", top: 0, right: 0, width: 200, height: 200,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${s.color}08, transparent 70%)`,
                  filter: "blur(40px)", pointerEvents: "none",
                }} />

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `linear-gradient(135deg, ${s.color}20, ${s.color}08)`,
                  display: "grid", placeItems: "center",
                  fontSize: 22, color: s.color, marginBottom: 24,
                  border: `1px solid ${s.color}18`,
                }}>{s.icon}</div>

                <h3 style={{
                  fontFamily: tokens.font, fontWeight: 700, fontSize: 22,
                  color: tokens.white, marginBottom: 14, letterSpacing: "-0.01em",
                }}>{s.title}</h3>

                <p style={{
                  fontFamily: tokens.fontBody, fontSize: 15, color: tokens.gray,
                  lineHeight: 1.65,
                }}>{s.desc}</p>

                <button
                  onClick={() => setSelected(s)}
                  style={{
                    marginTop: 24, display: "inline-flex", alignItems: "center",
                    gap: 6, fontFamily: tokens.fontBody, fontSize: 13,
                    fontWeight: 600, color: s.color,
                    background: "none", border: "none", cursor: "pointer",
                    padding: 0, transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.gap = "10px"}
                  onMouseLeave={(e) => e.currentTarget.style.gap = "6px"}
                >
                  Learn more →
                </button>
              </div>
            </TiltCard>
          </FadeUp>
        ))}
      </div>

      {/* Modal */}
      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
