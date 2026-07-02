"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

interface IndustryItem {
  name: string;
  desc: string;
  icon: React.ReactNode;
}

interface IndustriesServedProps {
  industries: IndustryItem[];
  accentColor: string;
}

export default function IndustriesServed({ industries, accentColor }: IndustriesServedProps) {
  return (
    <section style={{ background: T.inkMid, padding: "100px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
            Market Focus
          </span>
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.white, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            Industries Served
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: 15, color: T.textSecondary, maxWidth: 620, margin: "14px auto 0", fontWeight: 300, lineHeight: 1.6 }}>
            Tailored configurations designed to resolve industry-specific regulatory constraints and operational workflows.
          </p>
        </Reveal>

        <style>{`
          @media (max-width: 991px) {
            .industries-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
        `}</style>

        <div className="industries-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {industries.map((ind, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, borderColor: accentColor, background: "rgba(255, 255, 255, 0.01)" }}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                  borderRadius: 12,
                  padding: 32,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s"
                }}
              >
                <div>
                  <div style={{ color: accentColor, marginBottom: 20 }}>
                    {ind.icon}
                  </div>
                  
                  <h3 style={{ fontFamily: T.sans, fontSize: 18, fontWeight: 700, color: T.white, marginBottom: 12 }}>
                    {ind.name}
                  </h3>
                  
                  <p style={{ fontFamily: T.sans, fontSize: 13.5, color: T.textSecondary, lineHeight: 1.6, fontWeight: 300 }}>
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
