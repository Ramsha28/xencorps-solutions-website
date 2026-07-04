"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";
import AnimCounter from "../../components/common/AnimCounter";

export default function BusinessImpact() {
  const metrics = [
    { v: 60,  s: "%",     label: "Compliance Workload Reduction", sub: "via SmartGRC deployment",      color: T.navyLight },
    { v: 35,  s: "%",     label: "Procurement Cost Savings",      sub: "Smart Orion multi-branch ERP", color: T.navyLight },
    { v: 1,   s: "ms",    label: "Order Matching Latency",        sub: "Smart Crypto Exchange engine",  p: "<", color: "orange" },
    { v: 90,  s: " days", label: "To Full Audit Readiness",       sub: "Financial services GRC impl.",  color: T.navyLight },
  ];

  return (
    <section style={{ background: T.ink, padding: "104px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        <style>{`
          @media (max-width: 991px) {
            .metrics-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 540px) {
            .metrics-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
        <Reveal>
          <div style={{ marginBottom: 60 }}>
            <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Business Impact</p>
            <h2 style={{ fontFamily: T.sans, fontSize: "clamp(28px, 3.6vw, 48px)", fontWeight: 700, color: T.white, letterSpacing: "-0.025em", lineHeight: 1.12 }}>
             Business Outcomes That <br/>
              <span style={{ color: T.navyLight }}>Matter</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255, 255, 255, 0.08)" }} className="metrics-grid">
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              whileHover={{ background: T.inkSoft }}
              style={{ background: T.ink, padding: "48px 36px", transition: "background 0.3s" }}
            >
              <div style={{ fontFamily: T.sans, fontSize: "clamp(48px, 4.8vw, 68px)", fontWeight: 700, color: m.color, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 18 }}>
                {m.p && <span style={{ fontSize: "0.52em", verticalAlign: "top", marginTop: "0.18em", display: "inline-block" }}>{m.p}</span>}
                <AnimCounter target={m.v} suffix={m.s}/>
              </div>
              <div style={{ fontFamily: T.sans, fontSize: 14.5, fontWeight: 600, color: T.white, lineHeight: 1.4, marginBottom: 6 }}>{m.label}</div>
              <div style={{ fontFamily: T.sans, fontSize: 12.5, color: "rgba(255, 255, 255, 0.7)", fontWeight: 400 }}>{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}