"use client";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const reasons = [
  { n:"01", t:"Consulting + Platforms, Not One or the Other",    b:"Most firms deliver strategy without product. We own three enterprise-grade platforms Smart Orion ERP, SmartGRC, and Smart Crypto Exchange giving clients a strategic advantage and a production-ready solution from day one, backed by our strategic consulting practices." },
  { n:"02", t:"Senior Engineers on Every Engagement",           b:"Every engagement is led by senior engineers and enterprise architects. No junior staffing. The people who designed the solution are the ones who deliver it." },
  { n:"03", t:"AI Embedded Across Every Layer",                  b:"From SmartGRC's risk prediction to Smart Orion's demand forecasting and Smart Crypto Exchange's fraud detection, intelligence is core architecture, not a feature add-on." },
  { n:"04", t:"Enterprise Scale & Compliance Readiness",         b:"Designed for high availability, transaction speed, and compliance rules (ISO 27001, GDPR, HIPAA, SOC 2). We grant 100% intellectual property ownership to our clients with zero lock-in." },
];

export default function WhyChooseUs() {
  return (
    <section style={{ background: T.white, padding: "112px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        <Reveal>
          <div style={{ marginBottom: 60 }}>
            <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Why Xencorpsolutions</p>
            <h2 style={{ fontFamily: T.sans, fontSize: "clamp(28px,3.4vw,46px)", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              What Separates Us From<br /><span style={{ color: "#16A34A" }}>Every Other Technology Firms</span>
            </h2>
          </div>
        </Reveal>
        <style>{`
          @media (max-width: 991px) {
            .why-us-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
            .why-us-image {
              min-height: 320px !important;
            }
          }
          .reason-item {
            display: flex;
            gap: 24px;
            align-items: flex-start;
            padding-bottom: 28px;
            border-bottom: 1px solid rgba(15, 23, 42, 0.06);
            transition: all 0.25s ease;
          }
          .reason-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        `}</style>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "stretch" }} className="why-us-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 28, justifyContent: "space-between" }}>
            {reasons.map((r, i) => (
              <Reveal key={r.n} delay={i * 0.06}>
                <div className="reason-item">
                  <div style={{ 
                    fontFamily: T.sans, 
                    fontSize: "24px", 
                    fontWeight: 700, 
                    color: "#16A34A", 
                    lineHeight: 1, 
                    opacity: 0.8 
                  }}>
                    {r.n}
                  </div>
                  <div>
                    <h3 style={{ 
                      fontFamily: T.sans, 
                      fontSize: "18px", 
                      fontWeight: 700, 
                      color: "#0F172A", 
                      lineHeight: 1.3, 
                      marginBottom: 8, 
                      letterSpacing: "-0.01em" 
                    }}>
                      {r.t}
                    </h3>
                    <p style={{ 
                      fontFamily: T.sans, 
                      fontSize: "14.5px", 
                      color: "#475569", 
                      lineHeight: 1.6, 
                      fontWeight: 300 
                    }}>
                      {r.b}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="why-us-image" style={{ borderRadius: 16, overflow: "hidden", height: "100%" }}>
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