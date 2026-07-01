"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

interface CapabilityItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface PlatformCapabilitiesProps {
  capabilities: CapabilityItem[];
  accentColor: string;
}

export default function PlatformCapabilities({ capabilities, accentColor }: PlatformCapabilitiesProps) {
  return (
    <section style={{ background: T.white, padding: "100px 0", position: "relative" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
            Platform Infrastructure
          </span>
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            Enterprise Capabilities
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: 15, color: T.tealDim, maxWidth: 620, margin: "14px auto 0", fontWeight: 300, lineHeight: 1.6 }}>
            Engineered with resilience, high-performance security structures, and seamless API networks, prepared for complex high-availability operations.
          </p>
        </Reveal>

        <style>{`
          @media (max-width: 1024px) {
            .capabilities-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 24px !important;
            }
          }
          @media (max-width: 640px) {
            .capabilities-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
        `}</style>

        <div className="capabilities-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
          {capabilities.map((cap, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 45px rgba(0,0,0,0.03)" }}
                style={{
                  background: T.mist,
                  border: `1.5px solid ${T.mistDim}`,
                  borderRadius: 12,
                  padding: 28,
                  height: "100%",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ color: accentColor, marginBottom: 20 }}>
                  {cap.icon}
                </div>
                
                <h3 style={{ fontFamily: T.sans, fontSize: 18, fontWeight: 700, color: T.ink, marginBottom: 10, letterSpacing: "-0.012em" }}>
                  {cap.title}
                </h3>
                
                <p style={{ fontFamily: T.sans, fontSize: 13.5, color: "rgba(9, 43, 40, 0.72)", lineHeight: 1.6, fontWeight: 300 }}>
                  {cap.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
