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
    <section style={{ background:T.inkMid, padding:"112px 0" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <Reveal>
          <div style={{ marginBottom:60 }}>
            <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Why Xencorpsolutions</p>
            <h2 style={{ fontFamily:T.sans, fontSize:"clamp(28px,3.4vw,46px)", fontWeight:700, color:T.textPrimary, letterSpacing:"-0.025em", lineHeight:1.1 }}>
              What Separates Us From<br/><span style={{ color:T.teal }}>Every Other Technology Firm</span>
            </h2>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"rgba(0,128,128,0.08)" }}>
          {reasons.map((r,i) => (
            <Reveal key={r.n} delay={i*0.07}>
              <motion.div whileHover={{ background:T.inkSoft }}
                style={{ background:T.inkMid, padding:"40px 34px", transition:"background 0.3s", position:"relative", overflow:"hidden" }}
              >
                <motion.div initial={{scaleX:0}} whileHover={{scaleX:1}} style={{ position:"absolute", top:0, left:0, right:0, height:2, background:T.teal, transformOrigin:"left", transition:"transform 0.3s ease" }}/>
                <div style={{ fontFamily:T.sans, fontSize:12, fontWeight:600, color:"rgba(0,128,128,0.32)", marginBottom:16, letterSpacing:"0.05em" }}>{r.n}</div>
                <h3 style={{ fontFamily:T.sans, fontSize:16.5, fontWeight:600, color:T.textPrimary, lineHeight:1.38, marginBottom:12, letterSpacing:"-0.015em" }}>{r.t}</h3>
                <p style={{ fontFamily:T.sans, fontSize:13.5, color:T.textSecondary, lineHeight:1.72, fontWeight:300 }}>{r.b}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}