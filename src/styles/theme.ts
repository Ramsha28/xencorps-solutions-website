// ─── Design Tokens ────────────────────────────────────────────────────────────
export const T = {
  // Primary brand — brighter teal/emerald family (ServiceNow / Stripe-like feel)
  navy:           "#00C2A0",
  navyLight:      "#5EEAD4",
  navyMid:        "#99F6E4",
  navyDim:        "#0F766E",
  navyGlow:       "rgba(0,194,160,0.20)",
  navyGlowStrong: "rgba(0,194,160,0.38)",
  navyFaint:      "rgba(0,194,160,0.07)",

  // Backgrounds — dark (Pine/Teal black)
  ink:            "#051C1A",
  inkMid:         "#092B28",
  inkSoft:        "#0E3D38",

  // Backgrounds — light (Mint mist)
  mist:           "#F0FDFA",
  mistDim:        "#CCFBF1",

  // Text
  white:          "#FFFFFF",
  textPrimary:    "#F2FDFB",
  textSecondary:  "#99EAD8",
  textMuted:      "#14B8A6",

  // Accent — bright amber/orange highlight for CTAs
  orange:         "#FF6D00",

  // Aliases — these replace T.teal throughout all components
  teal:           "#00C2A0",
  tealLight:      "#5EEAD4",
  tealDim:        "#0F766E",
  tealGlow:       "rgba(0,194,160,0.20)",
  tealGlowStrong: "rgba(0,194,160,0.38)",
  tealFaint:      "rgba(0,194,160,0.07)",

  // Typography
  display:        '"Playfair Display", Georgia, serif',
  sans:           '"DM Sans", system-ui, sans-serif',
} as const;

export const fontLink = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');`;