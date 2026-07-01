"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

interface ModuleItem {
  title: string;
  desc: string;
  benefit: string;
  icon: React.ReactNode;
}

interface CoreModulesProps {
  modules: ModuleItem[];
  accentColor: string;
}

export default function CoreModules({ modules, accentColor }: CoreModulesProps) {
  return (
    <section style={{ background: T.inkMid, padding: "100px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
            Platform Modules
          </span>
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.white, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            Modular Architecture
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: 15, color: T.textOnDarkSecondary, maxWidth: 620, margin: "14px auto 0", fontWeight: 300, lineHeight: 1.6 }}>
            Deploy as an all-in-one suite or pick individual modules to integrate seamlessly with your existing enterprise systems.
          </p>
        </Reveal>

        <style>{`
          @media (max-width: 1024px) {
            .core-modules-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 24px !important;
            }
          }
          @media (max-width: 640px) {
            .core-modules-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
        `}</style>

        <div className="core-modules-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
          {modules.map((mod, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02, background: "rgba(255, 255, 255, 0.04)" }}
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: `1px solid rgba(255, 255, 255, 0.06)`,
                  borderRadius: 12,
                  padding: 28,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease"
                }}
              >
                <div>
                  {/* Icon */}
                  <div style={{ 
                    width: 44, 
                    height: 44, 
                    borderRadius: 10, 
                    background: "rgba(255, 255, 255, 0.03)", 
                    alignItems: "center", 
                    display: "inline-flex", 
                    
                    justifyContent: "center", 
                    marginBottom: 24, color: accentColor }}>
                    {mod.icon}
                  </div>
                  
                  <h3 style={{ fontFamily: T.sans, fontSize: 18, fontWeight: 700, color: T.white, marginBottom: 12, letterSpacing: "-0.01em" }}>
                    {mod.title}
                  </h3>
                  
                  <p style={{ fontFamily: T.sans, fontSize: 13, color: T.textOnDarkSecondary, lineHeight: 1.6, fontWeight: 300, marginBottom: 24 }}>
                    {mod.desc}
                  </p>
                </div>
                
                {/* Benefit Indicator */}
                <div style={{ paddingLeft: 14, borderLeft: `2.5px solid ${accentColor}`, paddingTop: 2, paddingBottom: 2 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: T.textOnDarkSecondary, opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 4 }}>
                    Operational Benefit
                  </span>
                  <span style={{ fontFamily: T.sans, fontSize: 12, color: T.white, fontWeight: 600, lineHeight: 1.3 }}>
                    {mod.benefit}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
