"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const processStages = [
  {
    step: "01",
    title: "Discovery & Analysis",
    desc: "We run strategic workshops to map out your core business processes, document user journeys, isolate operational constraints, and align project goals with executive KPIs."
  },
  {
    step: "02",
    title: "Architecture & Planning",
    desc: "We design modular systems schemas, chart database entity diagrams, outline API structures, and define security boundaries, ensuring structural integrity before code is written."
  },
  {
    step: "03",
    title: "UI/UX Product Design",
    desc: "We build intuitive user interfaces and layouts, ensuring user flows are optimized for operational speed, readability, and data-density utility."
  },
  {
    step: "04",
    title: "Agile Development",
    desc: "Our engineers build using clean, object-oriented code, writing modular microservices, establishing transaction limits, and setting up automated build pipelines."
  },
  {
    step: "05",
    title: "Rigorous QA & Testing",
    desc: "We run integration checks, load tests, compliance verification reviews, and cross-platform checks, validating that the platform handles load without memory leaks."
  },
  {
    step: "06",
    title: "Deployment & Support",
    desc: "We orchestrate container launches to staging and production environments, set up virtual servers, and establish long-term monitoring grids with regular security upgrades."
  }
];

export default function DeliveryApproach() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section style={{ background: T.ink, padding: "112px 0", color: T.white }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
              Delivery Methodology
            </span>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em" }}>
              Our Structured Lifecycle Engineering
            </h2>
            <p style={{ fontSize: 15.5, color: T.textSecondary, fontWeight: 300, maxWidth: 640, margin: "0 auto", lineHeight: 1.68 }}>
              From initial technical diagnostic to production scaling, we follow a rigorous 6-stage framework designed for predictability.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="methodology-grid">
          
          {/* Left Column: Vertical Timeline Selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {processStages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                style={{
                  cursor: "pointer",
                  background: activeStep === idx ? T.inkSoft : "transparent",
                  border: `1px solid ${activeStep === idx ? "rgba(0,194,160,0.25)" : "transparent"}`,
                  borderRadius: 12,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  transition: "all 0.25s"
                }}
                whileHover={{ x: 6 }}
              >
                <div style={{
                  fontSize: 20,
                  fontFamily: T.sans,
                  fontWeight: 700,
                  color: activeStep === idx ? T.tealLight : "rgba(255,255,255,0.2)"
                }}>
                  {stage.step}
                </div>
                <div>
                  <h3 style={{
                    fontSize: 16.5,
                    fontWeight: 600,
                    color: activeStep === idx ? T.white : "rgba(255,255,255,0.55)",
                    transition: "color 0.2s"
                  }}>
                    {stage.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Detailed Stage Display Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              background: T.inkMid,
              border: "1px solid rgba(0, 194, 160, 0.12)",
              borderRadius: 16,
              padding: "48px 40px",
              minHeight: 320,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: `0 15px 40px rgba(0,0,0,0.2)`
            }}
          >
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              color: T.tealLight,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              display: "block",
              marginBottom: 12
            }}>
              Stage {processStages[activeStep].step} Details
            </span>
            
            <h3 style={{
              fontFamily: T.display,
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 20,
              color: T.white
            }}>
              {processStages[activeStep].title}
            </h3>

            <p style={{
              fontSize: 15,
              color: T.textSecondary,
              lineHeight: 1.76,
              fontWeight: 300
            }}>
              {processStages[activeStep].desc}
            </p>
          </motion.div>

        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .methodology-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
