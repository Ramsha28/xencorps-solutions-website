"use client";

import React from "react";
import { T } from "../../styles/theme";
import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9" | string;
  label: string;
  sublabel?: string;
  iconType?: "analytics" | "cloud" | "database" | "network" | "lock" | "code" | "team" | "globe";
  mode?: "dark" | "light";
  style?: React.CSSProperties;
}

const icons = {
  analytics: (color: string) => (
    <svg width="36" height="36" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={1.5} style={{ opacity: 0.85 }}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  cloud: (color: string) => (
    <svg width="36" height="36" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={1.5} style={{ opacity: 0.85 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  database: (color: string) => (
    <svg width="36" height="36" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={1.5} style={{ opacity: 0.85 }}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  network: (color: string) => (
    <svg width="36" height="36" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={1.5} style={{ opacity: 0.85 }}>
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M12 8v8M5 16v-4h14v4" />
    </svg>
  ),
  lock: (color: string) => (
    <svg width="36" height="36" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={1.5} style={{ opacity: 0.85 }}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  code: (color: string) => (
    <svg width="36" height="36" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={1.5} style={{ opacity: 0.85 }}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  team: (color: string) => (
    <svg width="36" height="36" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={1.5} style={{ opacity: 0.85 }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 20M3 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M3 19.128v-.003c0-1.113.285-2.16.786-3.07M3 19.128v.109A11.386 11.386 0 008.91 20M12 9a3 3 0 100-6 3 3 0 000 6zM18 9.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM4.75 9.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
    </svg>
  ),
  globe: (color: string) => (
    <svg width="36" height="36" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={1.5} style={{ opacity: 0.85 }}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
};

export default function ImagePlaceholder({
  aspectRatio = "16/9",
  label,
  sublabel = "System integration diagram placeholder",
  iconType = "network",
  mode = "dark",
  style = {},
}: ImagePlaceholderProps) {
  const isDark = mode === "dark";
  const bgColor = isDark ? T.inkMid : T.mistDim;
  const borderColor = isDark ? "rgba(34, 197, 94, 0.22)" : "rgba(34, 197, 94, 0.4)";
  const textColor = isDark ? T.white : "#0B0F14";
  const mutedColor = isDark ? T.textOnDarkSecondary : "#5B6B63";
  const gridColor = isDark ? "rgba(34, 197, 94, 0.05)" : "rgba(34, 197, 94, 0.06)";
  const specText = `[TARGET GRAPHIC: ${aspectRatio} ASPECT RATIO]`;
  
  // Calculate aspect ratio string for CSS style
  const ratioStyles: React.CSSProperties = {
    position: "relative",
    width: "100%",
    backgroundColor: bgColor,
    border: `1.5px dashed ${borderColor}`,
    borderRadius: 14,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "36px 24px",
    aspectRatio: aspectRatio.replace("/", " / "),
    boxSizing: "border-box",
    backgroundImage: `radial-gradient(${gridColor} 1px, transparent 1px)`,
    backgroundSize: "24px 24px",
    userSelect: "none",
    ...style,
  };

  const currentIcon = icons[iconType] ? icons[iconType]("#16A34A") : icons.network("#16A34A");

  return (
    <div style={ratioStyles}>
      {/* Corner Tech Glow Indicators */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: 12, left: 12, width: 6, height: 6, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 8px #22C55E" }}
      />
      <div style={{ position: "absolute", top: 12, right: 12, width: 4, height: 4, borderRadius: "50%", background: "rgba(34,197,94,0.3)" }} />
      <div style={{ position: "absolute", bottom: 12, left: 12, width: 4, height: 4, borderRadius: "50%", background: "rgba(34,197,94,0.3)" }} />
      <motion.div
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: 12, right: 12, width: 6, height: 6, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 8px #22C55E" }}
      />

      {/* Grid Coordinates (technical aesthetic) */}
      <div style={{ position: "absolute", top: 12, left: 28, fontFamily: "monospace", fontSize: 8, color: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.25)", letterSpacing: "0.05em" }}>
        X: 280.9 // Y: 14.5
      </div>
      <div style={{ position: "absolute", bottom: 12, left: 28, fontFamily: "monospace", fontSize: 8, color: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.25)", letterSpacing: "0.05em" }}>
        SYS_STATUS: READY // REV: 0.16.2
      </div>

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, textAlign: "center", maxWidth: "88%", zIndex: 2 }}>
        <div style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          background: isDark ? "rgba(34, 197, 94, 0.08)" : "rgba(34, 197, 94, 0.08)",
          border: `1px solid ${borderColor}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isDark ? "0 8px 24px rgba(0,0,0,0.2)" : "none",
        }}>
          {currentIcon}
        </div>
        
        <div>
          <div style={{ fontFamily: "monospace", fontSize: 9, fontWeight: 700, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 6 }}>
            {specText}
          </div>
          <h4 style={{ fontFamily: T.sans, fontSize: 15, fontWeight: 600, color: textColor, marginBottom: 6, letterSpacing: "-0.01em" }}>
            {label}
          </h4>
          <p style={{ fontFamily: T.sans, fontSize: 12, color: mutedColor, lineHeight: 1.45, fontWeight: 300 }}>
            {sublabel}
          </p>
        </div>
      </div>

      {/* Watermark Diagonal Lines / Technical Accent */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity: isDark ? 0.02 : 0.03,
        backgroundImage: "repeating-linear-gradient(45deg, #16A34A 0, #16A34A 1px, transparent 0, transparent 50%)",
        backgroundSize: "16px 16px"
      }} />
    </div>
  );
}
