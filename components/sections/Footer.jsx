"use client";
import { tokens } from "@/styles/tokens";

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573226697539&sk=directory_personal_details",
    color: "#1877f2",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877f2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ezsynatz.dev?utm_source=qr&igsh=bmdsMXNid3lheGhh",
    color: "#e1306c",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433"/>
            <stop offset="25%" stopColor="#e6683c"/>
            <stop offset="50%" stopColor="#dc2743"/>
            <stop offset="75%" stopColor="#cc2366"/>
            <stop offset="100%" stopColor="#bc1888"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" fill="none"/>
        <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)" fill="none"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#dc2743" stroke="none"/>
      </svg>
    ),
  },
];

const COLUMNS = [
  { title: "Cases", items: ["AppNACV", "Finance Visualizer"], hrefs: ["https://apnnacv.vercel.app/", "https://personal-finance-visualizer-ochre-psi.vercel.app/login"] },
  { title: "Services", items: ["Full Stack Development", "Mobile App Development", "BaaS & Cloud Solutions", "Responsive Web Design", "WordPress Development"], hrefs: ["#", "#", "#", "#", "#"] },
  { title: "About us", items: ["Our Story", "Values", "Team", "Contact"], hrefs: ["/about-us", "/about-us", "/about-us", "/contact-us"] },
];

export default function Footer() {
  return (
    <footer style={{
      padding: "72px clamp(20px,4vw,64px) 36px",
      maxWidth: tokens.maxW, margin: "0 auto",
      borderTop: `1px solid ${tokens.border}`,
    }}>
      <div className="footer-grid" style={{
        display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr)",
        gap: "clamp(24px, 4vw, 48px)", marginBottom: 56,
      }}>
        {/* Brand column */}
        <div>
          <a href="/" style={{
            display: "flex", alignItems: "center", gap: 10,
            textDecoration: "none", marginBottom: 24,
          }}>
            <img src="/logo.png" alt="Ezysantz Logo" style={{ width: 42, height: 42, objectFit: "contain" }} />
            <span style={{
              fontFamily: tokens.font, fontWeight: 700, fontSize: 19,
              color: tokens.white, letterSpacing: "-0.02em",
            }}>Ezysantz Solution</span>
          </a>

          <a href="mailto:hello@ezysantz.com" style={{
            fontFamily: tokens.fontBody, fontSize: 15, color: tokens.gray,
            textDecoration: "none", transition: "color 0.3s",
          }}
            onMouseEnter={(e) => (e.target.style.color = tokens.accent)}
            onMouseLeave={(e) => (e.target.style.color = tokens.gray)}
          >
          hello@ezysantz.com
          </a>

          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" data-hover aria-label={s.name} style={{
                width: 36, height: 36, borderRadius: 10,
                border: `1px solid ${tokens.border}`,
                display: "grid", placeItems: "center",
                color: tokens.gray,
                textDecoration: "none",
                transition: "border-color 0.3s, color 0.3s, background 0.3s",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = s.color + "88";
                  e.currentTarget.style.background = s.color + "18";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = tokens.border;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 style={{
              fontFamily: tokens.font, fontWeight: 600, fontSize: 15,
              color: tokens.white, marginBottom: 20,
              letterSpacing: "-0.01em",
            }}>{col.title}</h4>
            {col.items.map((item, j) => (
              <a key={item} href={col.hrefs[j]} data-hover style={{
                display: "block", fontFamily: tokens.fontBody, fontSize: 14,
                color: tokens.gray, textDecoration: "none",
                marginBottom: 12,
                transition: "color 0.3s, padding-left 0.3s",
              }}
                onMouseEnter={(e) => {
                  e.target.style.color = tokens.white;
                  e.target.style.paddingLeft = "6px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = tokens.gray;
                  e.target.style.paddingLeft = "0";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Ventures by Zysantz */}
      <div style={{
        marginBottom: 32,
        padding: "24px 28px",
        background: tokens.bgAlt,
        border: `1px solid ${tokens.border}`,
        borderRadius: 16,
      }}>
        <p style={{
          fontFamily: tokens.fontBody, fontSize: 11, fontWeight: 700,
          color: tokens.grayDark, textTransform: "uppercase",
          letterSpacing: "0.1em", marginBottom: 16,
        }}>Ventures by Zysantz</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="https://www.turkdrama.live"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#8b5cf618",
              border: "1px solid #8b5cf630",
              borderRadius: 10, padding: "8px 16px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#8b5cf666"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#8b5cf630"}
          >
            <span style={{ fontSize: 16 }}>🎬</span>
            <div>
              <div style={{ fontFamily: tokens.fontBody, fontWeight: 700, fontSize: 13, color: tokens.white }}>TurkVerse</div>
              <div style={{ fontFamily: tokens.fontBody, fontSize: 11, color: tokens.gray }}>Turkish Drama Portal</div>
            </div>
          </a>
          <a
            href="https://apnnacv.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#6366f118",
              border: "1px solid #6366f130",
              borderRadius: 10, padding: "8px 16px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#6366f166"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#6366f130"}
          >
            <span style={{ fontSize: 16 }}>📄</span>
            <div>
              <div style={{ fontFamily: tokens.fontBody, fontWeight: 700, fontSize: 13, color: tokens.white }}>APNNCV</div>
              <div style={{ fontFamily: tokens.fontBody, fontSize: 11, color: tokens.gray }}>Resume Builder SaaS</div>
            </div>
          </a>
          <a
            href="https://leadhunter-pro-pied.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#6366f118",
              border: "1px solid #6366f130",
              borderRadius: 10, padding: "8px 16px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#6366f166"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#6366f130"}
          >
            <span style={{ fontSize: 16 }}>🎯</span>
            <div>
              <div style={{ fontFamily: tokens.fontBody, fontWeight: 700, fontSize: 13, color: tokens.white }}>LeadHunter Pro</div>
              <div style={{ fontFamily: tokens.fontBody, fontSize: 11, color: tokens.gray }}>AI Lead Gen SaaS</div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        paddingTop: 24, borderTop: `1px solid ${tokens.border}`,
        flexWrap: "wrap", gap: 12,
      }}>
        <span style={{
          fontFamily: tokens.fontBody, fontSize: 13, color: tokens.grayDark,
        }}>
          Copyright © 2026 Ezysantz Solution. All rights reserved.
        </span>
        <span style={{
          fontFamily: tokens.fontBody, fontSize: 13, color: tokens.grayDark,
        }}>
          Islamabad — PAKISTAN
        </span>
      </div>
    </footer>
  );
}
