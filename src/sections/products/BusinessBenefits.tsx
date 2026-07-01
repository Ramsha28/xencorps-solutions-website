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
    <section style={{ background: T.ink, padding: "80px 0", color: T.white }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <style>{`
          @media (max-width: 768px) {
            .benefits-stats-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              text-align: center !important;
            }
          }
        `}</style>

        <div className="benefits-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, textAlign: "center" }}>
          {benefits.map((b, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Metric value (large accent color) */}
                <span style={{ 
                  fontFamily: T.sans, 
                  fontSize: 54, 
                  fontWeight: 800, 
                  color: accentColor, 
                  letterSpacing: "-0.03em", 
                  lineHeight: 1,
                  marginBottom: 8
                }}>
                  {b.metricValue}
                </span>

                {/* Metric label */}
                <span style={{ 
                  fontFamily: T.sans, 
                  fontSize: 14, 
                  fontWeight: 700, 
                  color: T.white, 
                  textTransform: "uppercase", 
                  letterSpacing: "0.08em",
                  marginBottom: 12
                }}>
                  {b.metricLabel}
                </span>
                
                {/* Description */}
                <p style={{ 
                  fontFamily: T.sans, 
                  fontSize: 13.5, 
                  color: T.textOnDarkSecondary, 
                  lineHeight: 1.6, 
                  fontWeight: 300,
                  maxWidth: 320
                }}>
                  {b.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
