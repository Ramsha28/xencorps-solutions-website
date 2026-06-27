// ─── Design Tokens ────────────────────────────────────────────────────────────
export const T = {
  // Primary brand — emerald green enterprise accent
  navy:           "#22C55E",
  navyLight:      "#6EE7A0",
  navyMid:        "#9AA7A0",
  navyDim:        "#15803D",
  navyGlow:       "rgba(34,197,94,0.18)",
  navyGlowStrong: "rgba(34,197,94,0.28)",
  navyFaint:      "rgba(34,197,94,0.08)",

  // Backgrounds — dark (primary dark background)
  ink:            "#0B0F14",
  inkMid:         "#11161D",
  inkSoft:        "#1A222B",

  // Backgrounds — light (mist surfaces)
  mist:           "#F7F9F8",
  mistDim:        "#EEF2F0",

  // Borders
  line:           "rgba(255,255,255,0.08)",

  // Glows
  glow:           "rgba(34,197,94,0.18)",

  // Text / Legacy Aliases
  white:          "#FFFFFF",
  textPrimary:    "#22C55E",      // Brand green for legacy accents/headers
  textSecondary:  "#F5F7F6",      // Legacy light text for dark sections
  textMuted:      "#15803D",      // Legacy kicker green

  // Explicit text tokens for WCAG AA contrast compliance
  textPrimaryLight: "#0B0F14",     // Primary dark text (on light)
  textSecondaryLight: "#5B6B63",   // Secondary dark text (on light)
  textOnDark:      "#F5F7F6",     // Primary light text (on dark)
  textOnDarkSecondary: "#9AA7A0", // Secondary light text (on dark)

  // Accent
  orange:         "#22C55E",

  // Aliases
  teal:           "#22C55E",
  tealLight:      "#6EE7A0",
  tealDim:        "#15803D",
  tealGlow:       "rgba(34,197,94,0.18)",
  tealGlowStrong: "rgba(34,197,94,0.28)",
  tealFaint:      "rgba(34,197,94,0.08)",

  // Typography
  display:        '"Playfair Display", Georgia, serif',
  sans:           '"DM Sans", system-ui, sans-serif',
} as const;

export const fontLink = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');`;