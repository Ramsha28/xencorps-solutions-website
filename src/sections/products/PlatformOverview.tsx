"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";
import ImagePlaceholder from "../../components/common/ImagePlaceholder";

interface PlatformOverviewProps {
  id: string;
  name: string;
  solution: string;
  audience: string;
  outcomes: string[];
  capabilities: string[];
  accentColor: string;
}

export default function PlatformOverview({
  id,
  name,
  solution,
  audience,
  outcomes,
  capabilities,
  accentColor,
}: PlatformOverviewProps) {
  return (
    <section id="platform-overview" style={{ background: T.ink, padding: "100px 0", position: "relative" }}>
      {/* Glow backdrop */}
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 350, height: 350, borderRadius: "50%", background: accentColor, opacity: 0.035, filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "start" }} className="hero-grid-layout">
          
          <div>
            <Reveal>
              <span style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
                Platform Architecture
              </span>
              <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.white, letterSpacing: "-0.015em", lineHeight: 1.15, marginBottom: 28 }}>
                The Enterprise Engine for {name}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <p style={{ fontFamily: T.sans, fontSize: 15.5, color: T.textSecondary, lineHeight: 1.7, fontWeight: 300 }}>
                  {solution}
                </p>
                <div style={{ padding: "18px 24px", background: T.inkMid, borderLeft: `3px solid ${accentColor}`, borderRadius: "0 8px 8px 0" }}>
                  <span style={{ fontFamily: T.sans, fontSize: 10, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>
                    Target Audience & Industry Profile
                  </span>
                  <p style={{ fontFamily: T.sans, fontSize: 13, color: T.textSecondary, fontWeight: 300, lineHeight: 1.5 }}>
                    {audience}
                  </p>
                </div>
                <div style={{ marginTop: 8 }}>
                  <ImagePlaceholder
                    aspectRatio="16/9"
                    label={`${name} Platform Architecture Blueprint`}
                    sublabel={`Target: 16:9 technical flowchart showing database replica configuration, API caching layers, and web application clients for ${name}`}
                    iconType="network"
                    style={{ borderColor: `${accentColor}44` }}
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div style={{ background: T.inkMid, border: `1px solid rgba(255, 255, 255, 0.04)`, borderRadius: 12, padding: 36 }}>
            <Reveal>
              <h3 style={{ fontFamily: T.sans, fontSize: 16, fontWeight: 700, color: T.white, marginBottom: 24, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Target Business Outcomes
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                {outcomes.map((o, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 12, alignItems: "start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: accentColor, marginTop: 7, flexShrink: 0 }} />
                    <p style={{ fontFamily: T.sans, fontSize: 13.5, color: T.textSecondary, lineHeight: 1.5, fontWeight: 300 }}>
                      {o}
                    </p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontFamily: T.sans, fontSize: 16, fontWeight: 700, color: T.white, marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.05em", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                Core Capabilities
              </h3>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {capabilities.map((cap, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <svg width="14" height="14" fill="none" stroke={accentColor} viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ fontFamily: T.sans, fontSize: 13, color: T.white, fontWeight: 500 }}>
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
