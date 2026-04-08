"use client";
import { useState } from "react";
import { tokens } from "@/styles/tokens";
import { FadeUp, TextReveal } from "@/components/ui";

const FAQS = [
  { q: "How long does it take to get started?", a: "Our turnaround is lightning-fast. Just one week from signing off and we're there with the kick-off meeting to get it rolling." },
  { q: "What is your typical working process?", a: "We always start a project with analysis, learning the requirements, and making estimates that will be shared in the price proposal. Then it's off to signing off, kicking off, and getting your business to the next level with a pinch of our design magic." },
  { q: "Do you work on a fixed-price basis or time and material?", a: "Flexibility is the key of success. We try to suggest an appropriate solution for each specific case. The more clear and detailed the requirements are, the more accurate our estimates will be." },
  { q: "How do you usually start new collaborations?", a: "Each new engagement starts with an introduction call and filling out the design/branding brief. If you have a cool project in mind, feel free to get in touch!" },
  { q: "Do you work with big companies only?", a: "We're all for building a borderless world, so we are open to working with any project we come across. We believe in startups and one of those we helped develop from scratch has been successfully acquired." },
  { q: "How long it will take to get an estimate?", a: "We hate to keep you waiting. Setting up a team, making preliminary research and analysis, and getting back with the contract will take up to 24 hours. Efficiency is one of our key values." },
  { q: "Do you have a minimum engagement?", a: "We set no entry thresholds. But we believe a product can't be designed within a couple of days. We need time to research, analyze and strategize. Our minimum project duration is 30 hours." },
  { q: "What's the average project duration?", a: "Our team works full-time on every project, so the overall duration depends on the initial estimate. On average, our projects last from 2 weeks to 5 months." },
  { q: "Can we start design without wireframes?", a: "Wireframes help build UX without distractions. It's an essential part of the design process. Having everything polished at the wireframing stage saves both time and money." },
  { q: "What templates does Outcrowd use?", a: "We don't use pre-built templates or kits because there's no soul in them. We're committed to building fully customized, product-based solutions. Each pixel is designed with love and passion." },
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
