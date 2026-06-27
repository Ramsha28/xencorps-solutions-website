// ─── Design Tokens ────────────────────────────────────────────────────────────
export const T = {
  // Primary brand — navy/indigo family (from reference)
  navy:           "#3D52A0",
  navyLight:      "#7091E6",
  navyMid:        "#8697C4",
  navyDim:        "#2A3A70",
  navyGlow:       "rgba(61,82,160,0.20)",
  navyGlowStrong: "rgba(61,82,160,0.38)",
  navyFaint:      "rgba(61,82,160,0.07)",

  // Backgrounds — dark
  ink:            "#0D1B3E",
  inkMid:         "#112254",
  inkSoft:        "#1A2F6B",

  // Backgrounds — light
  mist:           "#EDE8F5",
  mistDim:        "#D8D0EC",

  // Text
  white:          "#FFFFFF",
  textPrimary:    "#F5F6FC",
  textSecondary:  "#ADBBDA",
  textMuted:      "#7091E6",

  // Accent — kept as one warm highlight for CTAs
  orange:         "#F06830",

  // Aliases — these replace T.teal throughout all components
  teal:           "#3D52A0",
  tealLight:      "#7091E6",
  tealDim:        "#2A3A70",
  tealGlow:       "rgba(61,82,160,0.20)",
  tealGlowStrong: "rgba(61,82,160,0.38)",
  tealFaint:      "rgba(61,82,160,0.07)",

  // Typography
  display:        '"Playfair Display", Georgia, serif',
  sans:           '"DM Sans", system-ui, sans-serif',
} as const;

export const fontLink = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');`;