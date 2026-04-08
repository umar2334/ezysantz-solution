"use client";
import { tokens } from "@/styles/tokens";
import { FadeUp, Marquee } from "@/components/ui";

const LOGOS = ["Next.js", "React", "Node.js", "WordPress", "Firebase", "React Native", "Tailwind CSS", "MongoDB", "PostgreSQL", "AWS", "Vercel", "TypeScript"];

export default function LogoSection() {
  return (
    <section style={{ padding: "80px 0", overflow: "hidden" }}>
      <FadeUp style={{ textAlign: "center", marginBottom: 8, padding: "0 24px" }}>
        <p style={{
          fontFamily: tokens.fontBody, fontSize: 14, color: tokens.gray,
        }}>
          Technologies & tools we use to build your product
        </p>
      </FadeUp>
      <Marquee items={LOGOS} speed={35} />
    </section>
  );
}
