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
    <section style={{ background: T.white, padding: "100px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
            Platform Modules
          </span>
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            Modular Architecture
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: 15, color: T.tealDim, maxWidth: 620, margin: "14px auto 0", fontWeight: 300, lineHeight: 1.6 }}>
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

        <div className="core-modules-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {modules.map((mod, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, boxShadow: `0 20px 45px ${accentColor}0a` }}
                style={{
                  background: T.mist,
                  border: `1px solid ${T.mistDim}`,
                  borderRadius: 12,
                  padding: 28,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "box-shadow 0.3s, y 0.3s"
                }}
              >
                <div>
                  {/* Icon */}
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: T.white, border: `1px solid ${T.mistDim}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, color: accentColor }}>
                    {mod.icon}
                  </div>
                  
                  <h3 style={{ fontFamily: T.sans, fontSize: 20, fontWeight: 700, color: T.ink, marginBottom: 12, letterSpacing: "-0.01em" }}>
                    {mod.title}
                  </h3>
                  
                  <p style={{ fontFamily: T.sans, fontSize: 13.5, color: "rgba(9, 43, 40, 0.72)", lineHeight: 1.65, fontWeight: 300, marginBottom: 28 }}>
                    {mod.desc}
                  </p>
                </div>
                
                {/* Benefit Indicator */}
                <div style={{ paddingLeft: 16, borderLeft: `2px solid ${accentColor}` }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 4 }}>
                    Operational Benefit
                  </span>
                  <span style={{ fontFamily: T.sans, fontSize: 12.5, color: T.ink, fontWeight: 600 }}>
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
