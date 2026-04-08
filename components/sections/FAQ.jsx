"use client";
import { useState } from "react";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal } from "@/components/ui";

const FAQS = [
  { q: "How quickly can you get started on my project?", a: "Very quickly. Once we understand your requirements, we send a proposal within 24 hours. After approval we can kick off within 2–3 days." },
  { q: "What is your working process?", a: "We start with a discovery call to understand your goals. Then we plan, design, develop, and test — keeping you updated at every step. After delivery we provide support to make sure everything runs smoothly." },
  { q: "Do you work on fixed price or hourly basis?", a: "Both. For well-defined projects we prefer fixed price so you know the exact cost upfront. For ongoing or flexible projects, we work hourly. We'll suggest what fits your situation best." },
  { q: "How do we communicate during the project?", a: "We stay in touch via WhatsApp, email, or whatever you prefer. You'll get regular updates and can always reach us directly — no middlemen, no delays." },
  { q: "Do you work with small businesses and startups?", a: "Absolutely. We love working with startups and small businesses. Whether you have a big idea or a small fix, we're happy to help. No project is too small for us." },
  { q: "How long does it take to get an estimate?", a: "We get back with a detailed estimate within 24 hours. Just send us your requirements via the contact form or WhatsApp and we'll take it from there." },
  { q: "What technologies do you use?", a: "We work with Next.js, React, Node.js, React Native, WordPress, Firebase, Supabase, MongoDB, PostgreSQL, Tailwind CSS, and more. We choose the best stack for your specific project." },
  { q: "Do you provide support after the project is delivered?", a: "Yes. We offer post-launch support for bug fixes, updates, and new features. We don't disappear after delivery — we're here for the long term." },
  { q: "Can you work with an existing codebase?", a: "Yes, we can jump into an existing project, fix issues, add features, or refactor code. We take time to understand the existing work before making any changes." },
  { q: "How do I get started with Ezysantz Solution?", a: "Simply fill out the contact form on our website or reach out directly at umarfreelancerweb@gmail.com. We'll schedule a quick call and take it from there." },
];

export default function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <section style={{ padding: tokens.sectionPadding, maxWidth: tokens.maxW, margin: "0 auto" }}>
      <FadeUp>
        <TextReveal text="Questions and Answers" style={{
          fontFamily: tokens.font, fontWeight: 800,
          fontSize: "clamp(30px, 4.5vw, 52px)",
          color: tokens.white, letterSpacing: "-0.03em", marginBottom: 52,
        }} />
      </FadeUp>

      <div style={{ maxWidth: 820 }}>
        {FAQS.map((f, i) => (
          <FadeUp key={i} delay={i * 0.03}>
            <div
              data-hover
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{
                borderBottom: `1px solid ${tokens.border}`,
                cursor: "pointer", padding: "28px 0",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = tokens.borderLight)}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = tokens.border)}
            >
              {/* Question */}
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", gap: 16,
              }}>
                <h3 style={{
                  fontFamily: tokens.font, fontWeight: 600,
                  fontSize: "clamp(16px, 1.8vw, 19px)",
                  color: open === i ? tokens.accent : tokens.white,
                  transition: "color 0.3s", letterSpacing: "-0.01em",
                }}>{f.q}</h3>

                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  border: `1px solid ${open === i ? tokens.accent + "44" : tokens.border}`,
                  display: "grid", placeItems: "center", flexShrink: 0,
                  transition: "all 0.4s ease",
                  background: open === i ? tokens.accentGlow : "transparent",
                }}>
                  <span style={{
                    fontSize: 20, color: tokens.accent, fontWeight: 300,
                    lineHeight: 1,
                    transition: `transform 0.4s ${tokens.ease}`,
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    display: "inline-block",
                  }}>+</span>
                </div>
              </div>

              {/* Answer */}
              <div style={{
                maxHeight: open === i ? 300 : 0, overflow: "hidden",
                transition: `max-height 0.5s ${tokens.ease}`,
              }}>
                <p style={{
                  fontFamily: tokens.fontBody, fontSize: 15, color: tokens.gray,
                  lineHeight: 1.7, paddingTop: 16, paddingRight: 52,
                }}>{f.a}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
