"use client";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal } from "@/components/ui";

const PACKAGES = [
  {
    badge: "For Startups & Founders",
    name: "MVP Launchpad",
    tagline: "From idea to live product in 6 weeks.",
    price: "Fixed Rate",
    accentColor: "#c8ff00",
    icon: "🚀",
    description:
      "Stop burning months on discovery phases. We take your idea, validate the architecture, and ship a production-ready React or Flutter app with Firebase backend — all in a predictable, flat-rate engagement.",
    includes: [
      "Full product scoping & architecture",
      "React / Next.js or Flutter frontend",
      "Firebase / Supabase backend",
      "Authentication & user management",
      "Deployed & live in 6 weeks",
      "30-day post-launch support",
    ],
    cta: "Launch Your MVP",
    ctaHref: "/contact-us",
    highlight: true,
  },
  {
    badge: "For Organizations & Enterprises",
    name: "Enterprise Portal",
    tagline: "Automate operations. Eliminate manual work.",
    price: "Custom Scope",
    accentColor: "#6366f1",
    icon: "🏢",
    description:
      "Spreadsheets and WhatsApp groups are costing you hours every week. We build custom admin portals, ERP dashboards, and management systems that automate your workflows and give you real-time control.",
    includes: [
      "Custom admin dashboard & ERP",
      "Role-based access control",
      "Real-time data & reporting",
      "Mobile app (Android / iOS)",
      "API integrations & automation",
      "Ongoing maintenance retainer",
    ],
    cta: "Get a Proposal",
    ctaHref: "/contact-us",
    highlight: false,
  },
  {
    badge: "For Media & Content Platforms",
    name: "AI-Content Engine",
    tagline: "High-traffic platforms built to scale.",
    price: "Fixed Rate",
    accentColor: "#f97316",
    icon: "⚡",
    description:
      "We architect SEO-optimized, high-concurrency media platforms — blogs, series directories, and content hubs — that rank on Google and handle thousands of daily users from day one.",
    includes: [
      "Next.js with SSR/SSG for SEO",
      "CMS integration (Sanity / WordPress)",
      "WebP/AVIF image optimization",
      "100/100 Lighthouse score target",
      "Ad monetization setup",
      "CDN & edge caching config",
    ],
    cta: "Build My Platform",
    ctaHref: "/contact-us",
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section style={{ padding: tokens.sectionPadding, maxWidth: tokens.maxW, margin: "0 auto" }}>
      <FadeUp>
        <TextReveal text="Packages" style={{
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
          No hourly rates. No vague quotes. Three clear solutions — pick the one that fits your business and let's ship.
        </p>
      </FadeUp>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 20,
        alignItems: "stretch",
      }}>
        {PACKAGES.map((pkg, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div style={{
              background: pkg.highlight
                ? `linear-gradient(160deg, ${pkg.accentColor}12, ${tokens.card} 60%)`
                : tokens.card,
              border: `1px solid ${pkg.highlight ? pkg.accentColor + "44" : tokens.border}`,
              borderRadius: tokens.radius,
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
              height: "100%",
              boxSizing: "border-box",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = pkg.accentColor + "66";
                e.currentTarget.style.boxShadow = `0 16px 48px ${pkg.accentColor}14`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = pkg.highlight ? pkg.accentColor + "44" : tokens.border;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Glow */}
              <div style={{
                position: "absolute", top: -60, right: -60,
                width: 200, height: 200, borderRadius: "50%",
                background: `radial-gradient(circle, ${pkg.accentColor}10, transparent 70%)`,
                filter: "blur(40px)", pointerEvents: "none",
              }} />

              {/* Badge */}
              <span style={{
                fontFamily: tokens.fontBody, fontSize: 11, fontWeight: 700,
                color: pkg.accentColor, textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: 20, display: "block",
              }}>{pkg.badge}</span>

              {/* Icon + Name */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  background: pkg.accentColor + "18",
                  border: `1px solid ${pkg.accentColor}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24,
                }}>{pkg.icon}</div>
                <div>
                  <h3 style={{
                    fontFamily: tokens.font, fontWeight: 800, fontSize: 22,
                    color: tokens.white, letterSpacing: "-0.02em", marginBottom: 2,
                  }}>{pkg.name}</h3>
                  <span style={{
                    fontFamily: tokens.fontBody, fontSize: 13,
                    color: pkg.accentColor, fontWeight: 600,
                  }}>{pkg.price}</span>
                </div>
              </div>

              {/* Tagline */}
              <p style={{
                fontFamily: tokens.font, fontWeight: 600, fontSize: 16,
                color: tokens.white, marginBottom: 12, marginTop: 8,
                letterSpacing: "-0.01em",
              }}>{pkg.tagline}</p>

              {/* Description */}
              <p style={{
                fontFamily: tokens.fontBody, fontSize: 14,
                color: tokens.gray, lineHeight: 1.7, marginBottom: 28,
              }}>{pkg.description}</p>

              {/* Divider */}
              <div style={{ height: 1, background: tokens.border, marginBottom: 24 }} />

              {/* What's included */}
              <p style={{
                fontFamily: tokens.fontBody, fontSize: 11, fontWeight: 700,
                color: tokens.grayDark, textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: 14,
              }}>WHAT'S INCLUDED</p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", flex: 1 }}>
                {pkg.includes.map((item, j) => (
                  <li key={j} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    fontFamily: tokens.fontBody, fontSize: 14,
                    color: tokens.grayLight, marginBottom: 10, lineHeight: 1.5,
                  }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                      background: pkg.accentColor + "18",
                      border: `1px solid ${pkg.accentColor}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginTop: 1,
                    }}>
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path d="M1 3.5L3.5 6L8 1" stroke={pkg.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={pkg.ctaHref}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "14px 28px", borderRadius: 12,
                  background: pkg.highlight ? pkg.accentColor : "transparent",
                  color: pkg.highlight ? "#000" : pkg.accentColor,
                  border: `1.5px solid ${pkg.accentColor}`,
                  fontFamily: tokens.fontBody, fontWeight: 700, fontSize: 14,
                  textDecoration: "none", letterSpacing: "0.01em",
                  transition: "background 0.25s, color 0.25s, box-shadow 0.25s",
                  marginTop: "auto",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = pkg.accentColor;
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.boxShadow = `0 8px 24px ${pkg.accentColor}33`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = pkg.highlight ? pkg.accentColor : "transparent";
                  e.currentTarget.style.color = pkg.highlight ? "#000" : pkg.accentColor;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >{pkg.cta} →</a>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Bottom note */}
      <FadeUp delay={0.4}>
        <p style={{
          fontFamily: tokens.fontBody, fontSize: 14, color: tokens.grayDark,
          textAlign: "center", marginTop: 36, lineHeight: 1.6,
        }}>
          Not sure which package fits? <a href="/contact-us" style={{ color: tokens.accent, textDecoration: "none", fontWeight: 600 }}>Book a free 30-min call</a> — we'll figure it out together.
        </p>
      </FadeUp>
    </section>
  );
}
