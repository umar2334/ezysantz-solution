"use client";
import { useInView } from "@/hooks";
import { tokens } from "@/styles/tokens";

export default function ScaleIn({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "scale(1)" : "scale(0.9)",
      transition: `opacity 0.7s ${delay}s ${tokens.ease}, transform 0.7s ${delay}s ${tokens.ease}`,
      ...style,
    }}>
      {children}
    </div>
  );
}
