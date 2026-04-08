"use client";
import { useInView } from "@/hooks";
import { tokens } from "@/styles/tokens";

export default function TextReveal({ text, tag: Tag = "h2", style = {}, delay = 0 }) {
  const [ref, visible] = useInView(0.1);
  return (
    <Tag ref={ref} style={{ overflow: "hidden", ...style }}>
      <span style={{
        display: "inline-block",
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: `transform 0.9s ${delay}s ${tokens.ease}`,
      }}>
        {text}
      </span>
    </Tag>
  );
}
