"use client";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const reasons = [
  { n:"01", t:"Consulting + Products, Not One or the Other",    b:"Most firms deliver strategy without product. We own three enterprise-grade platforms — giving clients a strategic advantage and a production-ready solution from day one." },
  { n:"02", t:"Senior Engineers on Every Engagement",           b:"Every engagement is led by senior engineers and enterprise architects. No junior staffing. The people who designed the solution are the ones who deliver it." },
  { n:"03", t:"AI Embedded Across Every Layer",                  b:"From SmartGRC's risk prediction to Smart Orion's demand forecasting and Smart Crypto Exchange's fraud detection — intelligence is core architecture, not a feature add-on." },
  { n:"04", t:"Enterprise Focus. No Exceptions.",               b:"Our platforms and services are built for the scale, governance, and security requirements of large organisations. Enterprise is not a tier — it is our baseline." },
  { n:"05", t:"Long-Term Technology Partnership",               b:"We operate as embedded partners through the full transformation lifecycle — from strategy through deployment, optimisation, and continuous platform evolution." },
  { n:"06", t:"Multi-Framework Compliance Readiness",           b:"ISO 27001, GDPR, HIPAA, PCI DSS, NIST, DORA, SOC 2 — our platforms arrive compliance-ready, so enterprise clients start ahead of the curve." },
];

export default function WhyChooseUs() {
  return (
    <section style={{ background: T.white, padding: "112px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        <Reveal>
          <div style={{ marginBottom: 60 }}>
            <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Why Xencorpsolutions</p>
            <h2 style={{ fontFamily: T.sans, fontSize: "clamp(28px,3.4vw,46px)", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              What Separates Us From<br /><span style={{ color: "#16A34A" }}>Every Other Technology Firm</span>
            </h2>
          </div>
        </Reveal>
        <style>{`
          @media (max-width: 991px) {
            .why-us-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .reasons-cards-grid {
              grid-template-columns: 1fr !important;
            }
            .why-us-image {
              min-height: 320px !important;
            }
          }
        `}</style>
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 40, alignItems: "stretch" }} className="why-us-grid">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="reasons-cards-grid">
            {reasons.map((r, i) => (
              <Reveal key={r.n} delay={i * 0.07}>
                <motion.div whileHover={{ background: T.mistDim }}
                  style={{ background: T.mist, border: "1px solid rgba(15, 23, 42, 0.05)", borderRadius: 12, padding: "32px 28px", transition: "background 0.3s", position: "relative", overflow: "hidden", height: "100%" }}
                >
                  <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "#16A34A", transformOrigin: "left", transition: "transform 0.3s ease" }}/>
                  <div style={{ fontFamily: T.sans, fontSize: 12, fontWeight: 600, color: "rgba(22, 163, 74, 0.4)", marginBottom: 14, letterSpacing: "0.05em" }}>{r.n}</div>
                  <h3 style={{ fontFamily: T.sans, fontSize: 16, fontWeight: 600, color: "#0F172A", lineHeight: 1.35, marginBottom: 10, letterSpacing: "-0.015em" }}>{r.t}</h3>
                  <p style={{ fontFamily: T.sans, fontSize: 13, color: "#475569", lineHeight: 1.65, fontWeight: 300 }}>{r.b}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="why-us-image" style={{ borderRadius: 16, overflow: "hidden", height: "100%", minHeight: 480 }}>
              <img
                src="/images/why%20choose%20us.png"
                alt="Strategic Advisory & Engineering Lifecycle"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}