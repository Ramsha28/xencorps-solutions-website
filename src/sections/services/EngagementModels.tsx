"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const models = [
  {
    name: "Dedicated Team",
    sub: "Continuous Scaling & Multi-Year Roadmaps",
    desc: "A fully staffed engineering, QA, and architect team aligned directly with your tech leadership. Operates as a seamless extension of your organization.",
    bestFor: "Complex software products, scaling enterprise platforms, and ongoing digital modernization cycles.",
    metrics: "Direct control, monthly resource predictability, and deep domain knowledge retention."
  },
  {
    name: "Fixed Cost Projects",
    sub: "Defined Scope & Phased Milestones",
    desc: "A milestone-based engagement model where pricing, deliverables, and timelines are fully specified before engineering begins.",
    bestFor: "MVP prototypes, custom CRM/HRM integrations, and projects with strict scope documentation.",
    metrics: "Clear budget predictability, zero scope-creep, and project delivery guarantees."
  },
  {
    name: "Hourly / T&M",
    sub: "Flexible Ad-Hoc Engineering Assets",
    desc: "Time and Materials engagement providing flexible access to senior developers, database tuners, or infrastructure leads on demand.",
    bestFor: "System maintenance, legacy code troubleshooting, cloud migrations, and agile product scaling.",
    metrics: "Complete scaling flexibility, weekly timesheet auditability, and immediate asset allocation."
  },
  {
    name: "Strategic IT Consulting",
    sub: "Executive Advisory & Architecture Audits",
    desc: "High-level technology consulting, IT governance (GRC) audits, cloud readiness diagnostics, and modernization roadmap planning.",
    bestFor: "Boardrooms aligning budgets with technical plans, security architects planning ISO 27001, and CIOs audits.",
    metrics: "Consulting-grade reports, architectural blueprints, and compliance audits."
  }
];

export default function EngagementModels() {
  const [hov, setHov] = useState<string | null>(null);

  return (
    <section style={{ background: T.white, padding: "112px 0", color: T.ink }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
              Collaboration Models
            </span>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em" }}>
              Tailored Engagement Frameworks
            </h2>
            <p style={{ fontSize: 15, color: "#3B5C5A", fontWeight: 300, maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
              We offer structured engagement structures designed to match your budget flexibility, project scope maturity, and team collaboration styles.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {models.map((model) => (
            <Reveal key={model.name}>
              <motion.div
                onHoverStart={() => setHov(model.name)}
                onHoverEnd={() => setHov(null)}
                style={{
                  background: T.mist,
                  border: `1.5px solid ${hov === model.name ? T.teal : T.mistDim}`,
                  borderRadius: 10,
                  padding: "40px 32px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 0.25s, background 0.25s",
                  boxShadow: hov === model.name ? "0 10px 30px rgba(0,194,160,0.03)" : "none"
                }}
              >
                <div>
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: T.ink,
                    marginBottom: 4,
                    letterSpacing: "-0.015em"
                  }}>
                    {model.name}
                  </h3>
                  
                  <span style={{
                    fontSize: 10.5,
                    fontWeight: 600,
                    color: T.tealDim,
                    display: "block",
                    marginBottom: 18,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em"
                  }}>
                    {model.sub}
                  </span>

                  <p style={{
                    fontSize: 13.5,
                    color: "#2D4C49",
                    lineHeight: 1.6,
                    fontWeight: 300,
                    marginBottom: 20
                  }}>
                    {model.desc}
                  </p>
                </div>

                <div style={{ borderTop: `1.5px dashed rgba(15,118,110,0.15)`, paddingTop: 18, marginTop: 10 }}>
                  <div style={{ marginBottom: 14 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: T.tealDim, textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: 3 }}>
                      Best For
                    </span>
                    <p style={{ fontSize: 12.5, color: "#3B5F5C", lineHeight: 1.45, fontWeight: 300 }}>
                      {model.bestFor}
                    </p>
                  </div>

                  <div>
                    <span style={{ fontSize: 10, fontWeight: 700, color: T.tealDim, textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: 3 }}>
                      Operational Value
                    </span>
                    <p style={{ fontSize: 12.5, color: "#3B5F5C", lineHeight: 1.45, fontWeight: 300 }}>
                      {model.metrics}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
