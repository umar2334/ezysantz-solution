"use client";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal, TiltCard, MagneticBtn } from "@/components/ui";

/* ─────────────────────────────────────────────────────
   ADD YOUR PROJECTS HERE
   Each project:
     title   — project name
     tag     — category label (e.g. "Web App", "Mobile")
     desc    — short one-line description
     link    — URL to live site or case study (use "#" if none)
     color   — accent color for the card
   ───────────────────────────────────────────────────── */
const PROJECTS = [
  {
    title: "Project One",
    tag: "Full Stack",
    desc: "A brief description of what this project does and the problem it solves.",
    link: "#",
    color: "#c8ff00",
  },
  {
    title: "Project Two",
    tag: "Mobile App",
    desc: "A brief description of what this project does and the problem it solves.",
    link: "#",
    color: "#4cc9f0",
  },
  {
    title: "Project Three",
    tag: "WordPress",
    desc: "A brief description of what this project does and the problem it solves.",
    link: "#",
    color: "#f97316",
  },
];

export default function Blog() {
  return (
    <section style={{ padding: tokens.sectionPadding, maxWidth: tokens.maxW, margin: "0 auto" }}>
      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 48,
      }}>
        <div>
          <FadeUp>
            <TextReveal text="Our Projects" style={{
              fontFamily: tokens.font, fontWeight: 800,
              fontSize: "clamp(30px, 4.5vw, 52px)",
              color: tokens.white, letterSpacing: "-0.03em",
            }} />
          </FadeUp>
          <FadeUp delay={0.08}>
            <p style={{
              fontFamily: tokens.fontBody, fontSize: 17, color: tokens.gray,
              maxWidth: 420, lineHeight: 1.65, marginTop: 12,
            }}>
              A selection of work we're proud of — built with care, shipped with confidence.
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.1}>
          <MagneticBtn accent={false} style={{ fontSize: 14 }}>View all →</MagneticBtn>
        </FadeUp>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 20,
      }}>
        {PROJECTS.map((p, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <TiltCard style={{ height: "100%" }}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                style={{ textDecoration: "none", display: "block", height: "100%" }}
              >
                <div style={{
                  background: tokens.card, borderRadius: tokens.radius,
                  overflow: "hidden", border: `1px solid ${tokens.border}`,
                  cursor: "pointer", transition: "border-color 0.4s, transform 0.3s",
                  height: "100%",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = p.color + "44";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = tokens.border;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Thumbnail area */}
                  <div style={{
                    height: 200, position: "relative",
                    background: `linear-gradient(160deg, ${p.color}14, ${tokens.bgAlt})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden",
                  }}>
                    {/* Grid pattern */}
                    <div style={{
                      position: "absolute", inset: 0, opacity: 0.04,
                      backgroundImage: `linear-gradient(${tokens.white} 1px, transparent 1px), linear-gradient(90deg, ${tokens.white} 1px, transparent 1px)`,
                      backgroundSize: "32px 32px",
                    }} />
                    <div style={{
                      width: 64, height: 64, borderRadius: 18,
                      border: `1.5px solid ${p.color}44`,
                      display: "grid", placeItems: "center",
                      fontSize: 28, color: p.color,
                      background: `${p.color}10`,
                      position: "relative",
                    }}>✦</div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px 28px 32px" }}>
                    <span style={{
                      fontFamily: tokens.fontBody, fontSize: 12, fontWeight: 600,
                      color: p.color, textTransform: "uppercase",
                      letterSpacing: "0.08em", marginBottom: 10,
                      display: "inline-block",
                    }}>{p.tag}</span>
                    <h3 style={{
                      fontFamily: tokens.font, fontWeight: 700, fontSize: 20,
                      color: tokens.white, lineHeight: 1.3,
                      letterSpacing: "-0.02em", marginBottom: 10,
                    }}>{p.title}</h3>
                    <p style={{
                      fontFamily: tokens.fontBody, fontSize: 14,
                      color: tokens.gray, lineHeight: 1.6,
                    }}>{p.desc}</p>

                    <div style={{
                      marginTop: 20, display: "inline-flex", alignItems: "center",
                      gap: 6, fontFamily: tokens.fontBody, fontSize: 13,
                      fontWeight: 600, color: p.color,
                    }}>
                      View project →
                    </div>
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
