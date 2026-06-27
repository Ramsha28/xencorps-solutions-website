"use client";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";

export default function MarqueeStrip() {
  const caps = [
    "Enterprise Architecture","AI & Machine Learning","GRC Automation",
    "ERP Implementation","Cloud-Native Infrastructure","Digital Transformation",
    "Cybersecurity Governance","Data Engineering","DevSecOps",
    "Crypto Exchange Platforms","Business Intelligence","Risk & Compliance",
  ];
  return (
    <div style={{ background: T.inkMid, borderTop: "1px solid rgba(0,128,128,0.1)", borderBottom: "1px solid rgba(0,128,128,0.1)", padding: "13px 0", overflow: "hidden" }}>
      <motion.div
        animate={{ x: [0, -1680] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 52, whiteSpace: "nowrap" }}
      >
        {[...caps, ...caps].map((c, i) => (
          <span key={i} style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: T.textMuted, display: "inline-flex", alignItems: "center", gap: 11, flexShrink: 0 }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: T.teal, display: "inline-block" }}/>
            {c}
          </span>
        ))}
      </motion.div>
    </div>
  );
}