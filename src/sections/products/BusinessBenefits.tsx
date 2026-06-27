"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

interface BenefitItem {
  metricValue: string;
  metricLabel: string;
  title: string;
  desc: string;
}

interface BusinessBenefitsProps {
  benefits: BenefitItem[];
  accentColor: string;
}

export default function BusinessBenefits({ benefits, accentColor }: BusinessBenefitsProps) {
  return (
    <section style={{ background: T.mist, padding: "100px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
            Business Benefits
          </span>
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            Measurable Platform ROI
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: 15, color: T.tealDim, maxWidth: 620, margin: "14px auto 0", fontWeight: 300, lineHeight: 1.6 }}>
            Quantifiable optimizations that accelerate executive decision making, mitigate regulatory risks, and increase financial savings.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
          {benefits.map((b, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(0, 194, 160, 0.06)" }}
                style={{
                  background: T.white,
                  border: `1px solid ${T.mistDim}`,
                  borderRadius: 12,
                  padding: 32,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "box-shadow 0.3s, y 0.3s"
                }}
              >
                <div>
                  {/* Metric Display */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 18 }}>
                    <span style={{ fontFamily: T.sans, fontSize: 38, fontWeight: 800, color: accentColor, letterSpacing: "-0.04em" }}>
                      {b.metricValue}
                    </span>
                    <span style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {b.metricLabel}
                    </span>
                  </div>
                  
                  <h3 style={{ fontFamily: T.sans, fontSize: 17, fontWeight: 700, color: T.ink, marginBottom: 10, letterSpacing: "-0.01em" }}>
                    {b.title}
                  </h3>
                  
                  <p style={{ fontFamily: T.sans, fontSize: 13, color: "rgba(9, 43, 40, 0.72)", lineHeight: 1.6, fontWeight: 300 }}>
                    {b.desc}
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
