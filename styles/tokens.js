/* ═══════════════════════════════════════════
   DESIGN TOKENS — Central Theme Configuration
   ═══════════════════════════════════════════ */

export const tokens = {
  // Colors
  bg: "#08080a",
  bgAlt: "#111114",
  card: "#131316",
  cardHover: "#1a1a1f",
  accent: "#c8ff00",
  accentDim: "#c8ff0033",
  accentGlow: "#c8ff0018",
  white: "#f5f5f7",
  offWhite: "#e0e0e4",
  gray: "#8a8a8f",
  grayLight: "#b0b0b5",
  grayDark: "#3a3a3f",
  border: "#1f1f24",
  borderLight: "#2a2a30",

  // Typography
  font: "'Syne', sans-serif",
  fontBody: "'DM Sans', sans-serif",

  // Spacing & Layout
  maxW: 1360,
  radius: 20,
  radiusSm: 12,
  sectionPadding: "120px clamp(20px, 4vw, 64px)",
  contentPadding: "0 clamp(20px, 4vw, 64px)",

  // Animation
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeBounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

// Reusable style helpers
export const sectionStyle = {
  padding: tokens.sectionPadding,
  maxWidth: tokens.maxW,
  margin: "0 auto",
};

export const headingStyle = {
  fontFamily: tokens.font,
  fontWeight: 800,
  fontSize: "clamp(30px, 4.5vw, 52px)",
  color: tokens.white,
  letterSpacing: "-0.03em",
  marginBottom: 14,
};

export const bodyTextStyle = {
  fontFamily: tokens.fontBody,
  fontSize: 17,
  color: tokens.gray,
  lineHeight: 1.65,
};

export const cardStyle = {
  background: tokens.card,
  borderRadius: tokens.radius,
  border: `1px solid ${tokens.border}`,
  transition: "border-color 0.4s, box-shadow 0.4s, transform 0.3s",
};
