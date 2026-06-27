"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

interface JourneyStep {
  title: string;
  desc: string;
}

interface ImplementationJourneyProps {
  journeySteps: JourneyStep[];
  accentColor: string;
}

export default function ImplementationJourney({ journeySteps, accentColor }: ImplementationJourneyProps) {
  return (
    <section style={{ background: T.mist, padding: "100px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
            Deployment Roadmap
          </span>
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            The Implementation Journey
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: 15, color: T.tealDim, maxWidth: 620, margin: "14px auto 0", fontWeight: 300, lineHeight: 1.6 }}>
            A structured, risk-mitigated process from initial diagnostic discovery to live operations and 24/7 technical support.
          </p>
        </Reveal>

        {/* Timeline container */}
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          {/* Vertical Center Line */}
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 0, bottom: 0, width: 2, background: `${accentColor}25` }} className="timeline-center-line" />

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {journeySteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} style={{ display: "flex", width: "100%", justifyContent: isEven ? "flex-start" : "flex-end", position: "relative" }} className="timeline-row">
                  {/* Timeline point indicator */}
                  <div style={{
                    position: "absolute", left: "50%", top: 8, transform: "translateX(-50%)",
                    width: 14, height: 14, borderRadius: "50%", background: T.white, border: `3.5px solid ${accentColor}`,
                    zIndex: 3
                  }} className="timeline-point" />

                  {/* Card container */}
                  <div style={{ width: "45%", display: "flex", flexDirection: "column" }} className="timeline-card-container">
                    <Reveal direction={isEven ? "left" : "right"}>
                      <motion.div
                        whileHover={{ y: -2 }}
                        style={{
                          background: T.white,
                          border: `1px solid ${T.mistDim}`,
                          borderRadius: 10,
                          padding: 24,
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                          <span style={{ fontSize: 10, fontWeight: 700, color: accentColor, background: `${accentColor}12`, padding: "2px 8px", borderRadius: 4 }}>
                            Stage 0{idx + 1}
                          </span>
                          <h3 style={{ fontFamily: T.sans, fontSize: 16, fontWeight: 700, color: T.ink }}>
                            {step.title}
                          </h3>
                        </div>
                        <p style={{ fontFamily: T.sans, fontSize: 13, color: "rgba(9, 43, 40, 0.72)", lineHeight: 1.58, fontWeight: 300 }}>
                          {step.desc}
                        </p>
                      </motion.div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
