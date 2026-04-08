"use client";
import { useInView } from "@/hooks";
import { tokens } from "@/styles/tokens";

export default function FadeUp({ children, delay = 0, style = {}, className = "" }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(50px)",
      transition: `opacity 0.8s ${delay}s ${tokens.ease}, transform 0.8s ${delay}s ${tokens.ease}`,
      willChange: "opacity, transform",
      ...style,
    }}>
      {children}
    </div>
  );
}
