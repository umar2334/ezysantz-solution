"use client";
import { useState, useEffect, useRef } from "react";
import { tokens } from "@/styles/tokens";

/* ═══════════════════════════════════════════════════════
   OUTCROWD NAV — Exact clone of outcrowd.io navigation
   
   Features:
   • Slide-up duplicate text hover on each nav link
   • Logo SVG star icon
   • "Book a call" + "Contact" buttons
   • Fullscreen mobile menu with staggered links + socials
   • Smooth backdrop blur on scroll
   ═══════════════════════════════════════════════════════ */

const NAV_ITEMS = [
  { label: "Cases", href: "/cases" },
  { label: "Service", href: "/services" },
  // { label: "Blog", href: "/blog" },
  { label: "About us", href: "/about-us" },
];

const SOCIALS = [
  { name: "Dribbble", icon: "Dr" },
  { name: "Behance", icon: "Be" },
  { name: "Instagram", icon: "Ig" },
  { name: "Twitter/X", icon: "X" },
  { name: "LinkedIn", icon: "Li" },
];

// ─── Slide-up text link (exact Outcrowd behavior) ─────
function NavLink({ label, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      data-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        overflow: "hidden",
        height: 20,
        textDecoration: "none",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Wrapper slides up on hover */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.35s cubic-bezier(0.76, 0, 0.24, 1)",
        transform: hovered ? "translateY(-20px)" : "translateY(0)",
      }}>
        {/* Top text (default) */}
        <span style={{
          fontFamily: tokens.fontBody,
          fontSize: 15,
          fontWeight: 500,
          color: tokens.grayLight,
          lineHeight: "20px",
          whiteSpace: "nowrap",
          transition: "color 0.35s ease",
        }}>{label}</span>
        {/* Bottom text (revealed on hover) */}
        <span style={{
          fontFamily: tokens.fontBody,
          fontSize: 15,
          fontWeight: 500,
          color: tokens.white,
          lineHeight: "20px",
          whiteSpace: "nowrap",
        }}>{label}</span>
      </div>
    </a>
  );
}

// ─── "Book a call" button with hover fill ─────────────
function BookCallBtn({ small = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="/contact-us"
      data-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: tokens.fontBody,
        fontSize: small ? 14 : 15,
        fontWeight: 600,
        color: tokens.bg,
        background: tokens.accent,
        border: "none",
        borderRadius: 100,
        padding: small ? "10px 24px" : "12px 28px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        transition: "transform 0.3s ease, box-shadow 0.4s ease",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        boxShadow: hovered
          ? `0 0 28px ${tokens.accent}44, 0 4px 20px ${tokens.accent}22`
          : "none",
      }}
    >
      {/* Shine sweep on hover */}
      <span style={{
        position: "absolute",
        top: 0, left: 0,
        width: "100%", height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        transform: hovered ? "translateX(100%)" : "translateX(-100%)",
        transition: "transform 0.5s ease",
        pointerEvents: "none",
      }} />
      <span style={{ position: "relative", zIndex: 1 }}>Book a call</span>
    </a>
  );
}

// ─── "Contact" outline button ─────────────────────────
function ContactBtn() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="/contact-us"
      data-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: tokens.fontBody,
        fontSize: 14,
        fontWeight: 600,
        color: hovered ? tokens.bg : tokens.white,
        background: hovered ? tokens.accent : "transparent",
        border: `1.5px solid ${hovered ? tokens.accent : tokens.grayDark}`,
        borderRadius: 100,
        padding: "10px 24px",
        cursor: "pointer",
        textDecoration: "none",
        transition: "all 0.35s ease",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Contact
    </a>
  );
}

// ─── Logo Image ───────────────────────────────────────
function LogoIcon() {
  return (
    <img src="/logo.png" alt="Ezysantz Logo" style={{ width: 42, height: 42, objectFit: "contain" }} />
  );
}

// ═══════════════════════════════════════════════════════
// MAIN NAV COMPONENT
// ═══════════════════════════════════════════════════════
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 999,
          background: scrolled ? "rgba(8,8,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? `1px solid ${tokens.border}` : "1px solid transparent",
          transition: "background 0.5s ease, border-bottom 0.5s ease, backdrop-filter 0.5s ease",
        }}
      >
        <div style={{
          maxWidth: tokens.maxW,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
          padding: "0 clamp(20px, 4vw, 64px)",
        }}>
          {/* ── Logo ────────────────────────── */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              zIndex: 1001,
            }}
            data-hover
          >
            <LogoIcon />
            <span style={{
              fontFamily: tokens.font,
              fontWeight: 700,
              fontSize: 20,
              color: tokens.white,
              letterSpacing: "-0.03em",
            }}>
              Ezsyantz Solution
            </span>
          </a>

          {/* ── Desktop Nav Links ───────────── */}
          <div className="desktop-nav" style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}>
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} label={item.label} href={item.href} />
            ))}

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 8 }}>
              <BookCallBtn small />
              <ContactBtn />
            </div>
          </div>

          {/* ── Mobile Hamburger ────────────── */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              width: 44,
              height: 44,
              position: "relative",
              zIndex: 1001,
            }}
            data-hover
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: 10,
                  width: 24,
                  height: 2,
                  background: tokens.white,
                  borderRadius: 2,
                  transition: "all 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
                  top: i === 0
                    ? (menuOpen ? 21 : 14)
                    : i === 1
                      ? 21
                      : (menuOpen ? 21 : 28),
                  transform: i === 0
                    ? (menuOpen ? "rotate(45deg)" : "none")
                    : i === 2
                      ? (menuOpen ? "rotate(-45deg)" : "none")
                      : "none",
                  opacity: i === 1 ? (menuOpen ? 0 : 1) : 1,
                  width: i === 2 && !menuOpen ? 16 : 24,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          FULLSCREEN MOBILE MENU
          ═══════════════════════════════════════════ */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: tokens.bg,
        zIndex: 998,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "100px clamp(24px, 6vw, 64px) 40px",
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "all" : "none",
        transition: "opacity 0.4s ease",
      }}>
        {/* Nav links — staggered entrance */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: tokens.font,
                fontSize: "clamp(32px, 8vw, 48px)",
                fontWeight: 700,
                color: tokens.white,
                textDecoration: "none",
                letterSpacing: "-0.03em",
                lineHeight: 1.3,
                transform: menuOpen ? "translateY(0)" : "translateY(40px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.6s ${0.1 + i * 0.07}s ${tokens.ease}, opacity 0.5s ${0.1 + i * 0.07}s ease`,
                borderBottom: `1px solid ${tokens.border}`,
                paddingBottom: 16,
                paddingTop: 8,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Bottom section — email + socials + contact */}
        <div style={{
          transform: menuOpen ? "translateY(0)" : "translateY(30px)",
          opacity: menuOpen ? 1 : 0,
          transition: `all 0.6s 0.45s ${tokens.ease}`,
        }}>
          {/* Email */}
          <a
            href="mailto:hello@outcrowd.io"
            style={{
              fontFamily: tokens.fontBody,
              fontSize: 16,
              color: tokens.grayLight,
              textDecoration: "none",
              display: "block",
              marginBottom: 24,
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = tokens.accent)}
            onMouseLeave={(e) => (e.target.style.color = tokens.grayLight)}
          >
            hello@outcrowd.io
          </a>

          {/* Social icons row */}
          <div style={{
            display: "flex",
            gap: 12,
            marginBottom: 28,
          }}>
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href="#"
                data-hover
                aria-label={s.name}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: `1px solid ${tokens.border}`,
                  display: "grid",
                  placeItems: "center",
                  fontFamily: tokens.fontBody,
                  fontSize: 12,
                  fontWeight: 600,
                  color: tokens.gray,
                  textDecoration: "none",
                  transition: "border-color 0.3s, color 0.3s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tokens.accent + "55";
                  e.currentTarget.style.color = tokens.accent;
                  e.currentTarget.style.background = tokens.accentGlow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = tokens.border;
                  e.currentTarget.style.color = tokens.gray;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Contact button */}
          <a
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: tokens.fontBody,
              fontSize: 15,
              fontWeight: 600,
              color: tokens.bg,
              background: tokens.accent,
              border: "none",
              borderRadius: 100,
              padding: "14px 32px",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 28px ${tokens.accent}44`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* ── Responsive CSS ─────────────────── */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
