"use client";
import { tokens } from "@/styles/tokens";
import { useInView, useCounter } from "@/hooks";

const STATS = [
  { num: 300, prefix: "$", suffix: "m", label: "In funding clients raised owing to our design work" },
  { num: 60, prefix: "", suffix: "+", label: "World's biggest international design awards won" },
  { num: 100, prefix: "", suffix: "M", label: "Active users experiencing our design every day" },
  { num: 24, prefix: "", suffix: "%", label: "Of marketing budgets converted into sales with our branding" },
];

function StatItem({ stat, index, visible }) {
  const count = useCounter(stat.num, 2200, visible);
  return (
    <div style={{
      background: tokens.card, padding: "48px 32px", textAlign: "center",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: `all 0.7s ${index * 0.12}s ${tokens.ease}`,
    }}>
      <div style={{
        fontFamily: tokens.font, fontWeight: 800,
        fontSize: "clamp(36px, 4.5vw, 56px)",
        color: tokens.accent, letterSpacing: "-0.03em",
        marginBottom: 14, lineHeight: 1,
      }}>
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div style={{
        fontFamily: tokens.fontBody, fontSize: 14, color: tokens.gray,
        lineHeight: 1.55, maxWidth: 220, margin: "0 auto",
      }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const [ref, visible] = useInView(0.2);

  return (
    <section ref={ref} style={{
      padding: "60px clamp(20px,4vw,64px) 100px",
      maxWidth: tokens.maxW, margin: "0 auto",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 1, background: tokens.border,
        borderRadius: tokens.radius, overflow: "hidden",
        boxShadow: `0 0 80px ${tokens.accent}06`,
      }}>
        {STATS.map((stat, i) => (
          <StatItem key={i} stat={stat} index={i} visible={visible} />
        ))}
      </div>
    </section>
  );
}
