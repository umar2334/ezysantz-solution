"use client";
import { useState, useEffect } from "react";
import { tokens } from "@/styles/tokens";
import { Nav, Footer, CustomCursor, ScrollProgress } from "@/components/sections";
import { FadeUp, TextReveal, ScaleIn, MagneticBtn } from "@/components/ui";

const CONTACT_INFO = [
  { icon: "✉", label: "Email", value: "umarfreelancerweb@gmail.com", href: "mailto:hello@ezysantz.com", color: "#c8ff00" },
  { icon: "📞", label: "Phone", value: "+92 3248103611", href: "tel:+923248103611", color: "#4cc9f0" },
  { icon: "📍", label: "Location", value: "Pakistan", href: "#", color: "#f97316" },
];

const SERVICES = [
  "Full Stack Development",
  "Mobile App Development",
  "BaaS & Cloud Solutions",
  "Responsive Web Design",
  "WordPress Development",
  "WP Plugin & Theme Customization",
];

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%", background: tokens.bgAlt,
    border: `1px solid ${tokens.border}`,
    borderRadius: tokens.radiusSm, padding: "14px 18px",
    fontFamily: tokens.fontBody, fontSize: 15, color: tokens.white,
    outline: "none", transition: "border-color 0.3s",
    boxSizing: "border-box",
  };

  return (
    <div style={{
      background: tokens.bg, minHeight: "100vh",
      color: tokens.white, overflowX: "hidden",
      cursor: !isMobile ? "none" : "auto",
      fontFamily: tokens.fontBody,
    }}>
      {!isMobile && <CustomCursor />}
      <ScrollProgress />
      <Nav />

      {/* ── Hero ── */}
      <section style={{
        padding: "160px clamp(20px,4vw,64px) 80px",
        maxWidth: tokens.maxW, margin: "0 auto",
        textAlign: "center", position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 80, left: "50%", transform: "translateX(-50%)",
          width: 500, height: 260, borderRadius: "50%",
          background: `radial-gradient(ellipse, ${tokens.accent}08, transparent 70%)`,
          filter: "blur(80px)", pointerEvents: "none",
        }} />
        <FadeUp>
          <span style={{
            fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 600,
            color: tokens.accent, textTransform: "uppercase",
            letterSpacing: "0.14em", display: "block", marginBottom: 20,
          }}>Get In Touch</span>
        </FadeUp>
        <FadeUp delay={0.08}>
          <TextReveal text="Let's Build Something" style={{
            fontFamily: tokens.font, fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 72px)",
            color: tokens.white, letterSpacing: "-0.03em",
            lineHeight: 1.1, display: "block",
          }} />
        </FadeUp>
        <FadeUp delay={0.12}>
          <TextReveal text="Great Together" style={{
            fontFamily: tokens.font, fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 72px)",
            color: tokens.accent, letterSpacing: "-0.03em",
            lineHeight: 1.1, display: "block", marginBottom: 24,
          }} />
        </FadeUp>
        <FadeUp delay={0.18}>
          <p style={{
            fontFamily: tokens.fontBody, fontSize: 18, color: tokens.gray,
            lineHeight: 1.7, maxWidth: 520, margin: "0 auto",
          }}>
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </FadeUp>
      </section>

      {/* ── Main content ── */}
      <section style={{
        padding: "0 clamp(20px,4vw,64px) 120px",
        maxWidth: tokens.maxW, margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 40, alignItems: "start",
        }}>

          {/* Left — contact info */}
          <div>
            <FadeUp>
              <h2 style={{
                fontFamily: tokens.font, fontWeight: 700,
                fontSize: "clamp(22px, 3vw, 32px)",
                color: tokens.white, letterSpacing: "-0.02em", marginBottom: 12,
              }}>Contact Information</h2>
              <p style={{
                fontFamily: tokens.fontBody, fontSize: 16, color: tokens.gray,
                lineHeight: 1.7, marginBottom: 36,
              }}>
                Reach out directly or fill in the form and we'll respond promptly.
              </p>
            </FadeUp>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
              {CONTACT_INFO.map((info, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <a href={info.href} style={{ textDecoration: "none" }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 18,
                      background: tokens.card, border: `1px solid ${tokens.border}`,
                      borderRadius: tokens.radiusSm, padding: "18px 22px",
                      transition: "border-color 0.3s",
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = info.color + "55"}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = tokens.border}
                    >
                      <div style={{
                        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                        background: `${info.color}15`, border: `1px solid ${info.color}22`,
                        display: "grid", placeItems: "center", fontSize: 18,
                      }}>{info.icon}</div>
                      <div>
                        <div style={{
                          fontFamily: tokens.fontBody, fontSize: 12, fontWeight: 600,
                          color: info.color, textTransform: "uppercase",
                          letterSpacing: "0.08em", marginBottom: 4,
                        }}>{info.label}</div>
                        <div style={{
                          fontFamily: tokens.fontBody, fontSize: 15, color: tokens.white,
                        }}>{info.value}</div>
                      </div>
                    </div>
                  </a>
                </FadeUp>
              ))}
            </div>

            {/* Services list */}
            <FadeUp delay={0.3}>
              <div style={{
                background: tokens.card, border: `1px solid ${tokens.border}`,
                borderRadius: tokens.radiusSm, padding: "24px 26px",
              }}>
                <h4 style={{
                  fontFamily: tokens.font, fontWeight: 600, fontSize: 15,
                  color: tokens.white, marginBottom: 16,
                }}>What we can help with</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {SERVICES.map((s, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      fontFamily: tokens.fontBody, fontSize: 14, color: tokens.gray,
                    }}>
                      <span style={{ color: tokens.accent, fontSize: 10 }}>◆</span> {s}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — form */}
          <ScaleIn>
            <div style={{
              background: tokens.card, border: `1px solid ${tokens.border}`,
              borderRadius: 24, padding: "clamp(28px,4vw,48px)",
              position: "relative", overflow: "hidden",
            }}>
              {/* Glow */}
              <div style={{
                position: "absolute", top: -60, right: -60, width: 240, height: 240,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${tokens.accent}08, transparent 65%)`,
                filter: "blur(50px)", pointerEvents: "none",
              }} />

              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
                  <h3 style={{
                    fontFamily: tokens.font, fontWeight: 700, fontSize: 24,
                    color: tokens.white, marginBottom: 12,
                  }}>Message Sent!</h3>
                  <p style={{
                    fontFamily: tokens.fontBody, fontSize: 16, color: tokens.gray,
                    lineHeight: 1.6,
                  }}>
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative" }}>
                  <h3 style={{
                    fontFamily: tokens.font, fontWeight: 700, fontSize: 22,
                    color: tokens.white, marginBottom: 4,
                  }}>Send us a message</h3>

                  {/* Name */}
                  <div>
                    <label style={{
                      fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 600,
                      color: tokens.grayLight, display: "block", marginBottom: 8,
                      textTransform: "uppercase", letterSpacing: "0.06em",
                    }}>Your Name</label>
                    <input
                      name="name" type="text" required
                      placeholder="John Doe"
                      value={form.name} onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = tokens.accent + "66"}
                      onBlur={(e) => e.target.style.borderColor = tokens.border}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{
                      fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 600,
                      color: tokens.grayLight, display: "block", marginBottom: 8,
                      textTransform: "uppercase", letterSpacing: "0.06em",
                    }}>Email Address</label>
                    <input
                      name="email" type="email" required
                      placeholder="john@example.com"
                      value={form.email} onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = tokens.accent + "66"}
                      onBlur={(e) => e.target.style.borderColor = tokens.border}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label style={{
                      fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 600,
                      color: tokens.grayLight, display: "block", marginBottom: 8,
                      textTransform: "uppercase", letterSpacing: "0.06em",
                    }}>Service Needed</label>
                    <select
                      name="service"
                      value={form.service} onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => e.target.style.borderColor = tokens.accent + "66"}
                      onBlur={(e) => e.target.style.borderColor = tokens.border}
                    >
                      <option value="" style={{ background: tokens.bgAlt }}>Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} style={{ background: tokens.bgAlt }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{
                      fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 600,
                      color: tokens.grayLight, display: "block", marginBottom: 8,
                      textTransform: "uppercase", letterSpacing: "0.06em",
                    }}>Your Message</label>
                    <textarea
                      name="message" required rows={5}
                      placeholder="Tell us about your project…"
                      value={form.message} onChange={handleChange}
                      style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                      onFocus={(e) => e.target.style.borderColor = tokens.accent + "66"}
                      onBlur={(e) => e.target.style.borderColor = tokens.border}
                    />
                  </div>

                  {error && (
                    <p style={{ fontFamily: tokens.fontBody, fontSize: 14, color: "#f97316", marginTop: -8 }}>{error}</p>
                  )}
                  <MagneticBtn type="submit" style={{ width: "100%", padding: "16px", fontSize: 16, justifyContent: "center", opacity: loading ? 0.6 : 1 }}>
                    {loading ? "Sending…" : "Send Message →"}
                  </MagneticBtn>
                </form>
              )}
            </div>
          </ScaleIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
