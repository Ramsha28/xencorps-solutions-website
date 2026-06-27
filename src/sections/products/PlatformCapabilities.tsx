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
    <section style={{ background: T.inkMid, padding: "100px 0", position: "relative" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
            Platform Infrastructure
          </span>
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.white, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            Enterprise Capabilities
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: 15, color: T.textSecondary, maxWidth: 620, margin: "14px auto 0", fontWeight: 300, lineHeight: 1.6 }}>
            Engineered with resilience, high-performance security structures, and seamless API networks, prepared for complex high-availability operations.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {capabilities.map((cap, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02, background: "rgba(255, 255, 255, 0.02)" }}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                  borderRadius: 10,
                  padding: 28,
                  height: "100%",
                  transition: "all 0.25s"
                }}
              >
                <div style={{ color: accentColor, marginBottom: 16 }}>
                  {cap.icon}
                </div>
                
                <h3 style={{ fontFamily: T.sans, fontSize: 16.5, fontWeight: 700, color: T.white, marginBottom: 10 }}>
                  {cap.title}
                </h3>
                
                <p style={{ fontFamily: T.sans, fontSize: 13, color: T.textSecondary, lineHeight: 1.6, fontWeight: 300 }}>
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
