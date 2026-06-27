"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

interface IntegrationItem {
  name: string;
  category: string;
  desc: string;
  icon: React.ReactNode;
}

interface IntegrationEcosystemProps {
  integrations: IntegrationItem[];
  accentColor: string;
}

export default function IntegrationEcosystem({ integrations, accentColor }: IntegrationEcosystemProps) {
  return (
    <section style={{ background: T.ink, padding: "100px 0", position: "relative" }}>
      {/* Background radial accent */}
      <div style={{ position: "absolute", top: "20%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: accentColor, opacity: 0.02, filter: "blur(90px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2 }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 56, alignItems: "center" }} className="hero-grid-layout">
          <div>
            <Reveal>
              <span style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
                Integration Network
              </span>
              <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.white, letterSpacing: "-0.015em", lineHeight: 1.15, marginBottom: 20 }}>
                Connected to Your Digital Core
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 15, color: T.textSecondary, fontWeight: 300, lineHeight: 1.7, marginBottom: 28 }}>
                Our platforms are designed to avoid vendor lock-in. With pre-built API connectors, sync database layers to existing systems, ERP platforms, or public cloud infrastructures seamlessly.
              </p>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 16px", background: "rgba(255,255,255,0.02)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00D2A0" }} />
                <span style={{ fontSize: 12, color: T.white, fontFamily: T.sans, fontWeight: 600 }}>Pre-Built REST APIs & Webhooks Included</span>
              </div>
            </Reveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {integrations.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <motion.div
                  whileHover={{ x: 4, background: "rgba(255, 255, 255, 0.025)" }}
                  style={{
                    background: "rgba(255,255,255,0.01)",
                    border: "1px solid rgba(255, 255, 255, 0.03)",
                    borderRadius: 8,
                    padding: 20,
                    display: "flex",
                    gap: 16,
                    alignItems: "start",
                    transition: "all 0.2s"
                  }}
                >
                  <div style={{ color: accentColor, marginTop: 2, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontFamily: T.sans, fontSize: 14, fontWeight: 700, color: T.white }}>{item.name}</span>
                      <span style={{ fontSize: 8.5, color: accentColor, background: `${accentColor}15`, padding: "2px 6px", borderRadius: 4, textTransform: "uppercase", fontWeight: 700 }}>{item.category}</span>
                    </div>
                    <p style={{ fontFamily: T.sans, fontSize: 12.5, color: T.textSecondary, lineHeight: 1.5, fontWeight: 300 }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
