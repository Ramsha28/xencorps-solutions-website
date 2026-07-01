"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

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
    <section id="platform-overview" style={{ background: T.mist, padding: "100px 0", position: "relative" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2 }}>
        
        <style>{`
          @media (max-width: 768px) {
            .outcomes-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
          }
        `}</style>

        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Reveal>
            <span style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
              Platform Architecture
            </span>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.15, marginBottom: 24 }}>
              The Enterprise Engine for {name}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p style={{ fontFamily: T.sans, fontSize: 16, color: "rgba(9, 43, 40, 0.72)", lineHeight: 1.76, fontWeight: 300 }}>
                {solution}
              </p>

              {/* Target Business Outcomes List in a 3-column grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 12 }} className="outcomes-grid">
                {outcomes.map((o, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 12, alignItems: "start" }}>
                    <div style={{ 
                      width: 18, 
                      height: 18, 
                      borderRadius: "50%", 
                      background: "#22C55E", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2
                    }}>
                      <svg width="10" height="10" fill="none" stroke={T.white} viewBox="0 0 24 24" strokeWidth="3.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p style={{ fontFamily: T.sans, fontSize: 14, color: T.ink, lineHeight: 1.5, fontWeight: 600 }}>
                      {o}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
