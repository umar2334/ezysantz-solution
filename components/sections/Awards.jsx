"use client";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal } from "@/components/ui";

const AWARDS = [
  { org: "Awwwards", project: "Fitonist", award: "Site of the Day", date: "Aug 2024", color: "#c8ff00" },
  { org: "TheFWA", project: "Fitonist", award: "FWA of the Day", date: "Jul 2024", color: "#4cc9f0" },
  { org: "Awwwards", project: "FinanceAble", award: "Honorable Mention", date: "Mar 2024", color: "#c8ff00" },
  { org: "TheFWA", project: "Deed Delivery", award: "FWA of the Day", date: "Dec 2023", color: "#4cc9f0" },
  { org: "CssDA", project: "EventBeds", award: "Website of the Day", date: "Dec 2023", color: "#f97316" },
  { org: "Awwwards", project: "Mota", award: "Honorable Mention", date: "Nov 2023", color: "#c8ff00" },
  { org: "CssDA", project: "Dstafin", award: "Website of the Day", date: "Aug 2023", color: "#f97316" },
  { org: "CssDA", project: "KMBCH", award: "Website of the Day", date: "Feb 2023", color: "#f97316" },
];

export default function Awards() {
  return (
    <section style={{ padding: tokens.sectionPadding, maxWidth: tokens.maxW, margin: "0 auto" }}>
      <FadeUp>
        <TextReveal text="Awards for digital innovation" style={{
          fontFamily: tokens.font, fontWeight: 800,
          fontSize: "clamp(30px, 4.5vw, 52px)",
          color: tokens.white, letterSpacing: "-0.03em", marginBottom: 52,
        }} />
      </FadeUp>

      <div>
        {AWARDS.map((a, i) => (
          <FadeUp key={i} delay={i * 0.04}>
            <div className="awards-row" data-hover style={{
              display: "grid",
              gridTemplateColumns: "120px 1.5fr 1.2fr auto",
              gap: 20, padding: "22px 16px",
              borderBottom: `1px solid ${tokens.border}`,
              alignItems: "center", cursor: "pointer",
              transition: "background 0.3s, padding-left 0.3s",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = tokens.card;
                e.currentTarget.style.paddingLeft = "24px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.paddingLeft = "16px";
              }}
            >
              <span style={{
                fontFamily: tokens.fontBody, fontSize: 13, fontWeight: 700,
                color: a.color, letterSpacing: "0.02em",
              }}>{a.org}</span>
              <span style={{
                fontFamily: tokens.font, fontWeight: 600, fontSize: 17,
                color: tokens.white, letterSpacing: "-0.01em",
              }}>{a.project}</span>
              <span style={{
                fontFamily: tokens.fontBody, fontSize: 14, color: tokens.gray,
              }}>{a.award}</span>
              <span style={{
                fontFamily: tokens.fontBody, fontSize: 13, color: tokens.grayDark,
                fontVariantNumeric: "tabular-nums",
              }}>{a.date}</span>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
