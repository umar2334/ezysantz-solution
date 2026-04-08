"use client";
import { tokens } from "@/styles/tokens";
import { FadeUp, Marquee } from "@/components/ui";

const LOGOS = ["Google", "Microsoft", "Uber", "Spotify", "Airbnb", "Meta", "Amazon", "Tesla"];

export default function LogoSection() {
  return (
    <section style={{ padding: "80px 0", overflow: "hidden" }}>
      <FadeUp style={{ textAlign: "center", marginBottom: 8, padding: "0 24px" }}>
        <p style={{
          fontFamily: tokens.fontBody, fontSize: 14, color: tokens.gray,
        }}>
          Our design thinking is recognised by enterprises we cooperated with
        </p>
      </FadeUp>
      <Marquee items={LOGOS} speed={35} />
    </section>
  );
}
