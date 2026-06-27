"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";
import Link from "next/link";

const platforms = [
  { id: "grc",    slug: "smart-grc",    name: "SmartGRC",             badge: "GRC",     color: T.teal,    tagline: "Governance, Risk & Compliance",  desc: "AI-powered GRC ecosystem centralizing risk management, compliance monitoring, audit operations, cybersecurity governance, and executive reporting into one intelligent platform.", modules: ["Risk Management","Audit Management","Compliance Monitoring","Policy Management","Vendor Risk","AI Governance"] },
  { id: "orion",  slug: "smart-orion",  name: "Smart Orion",           badge: "ERP",     color: T.teal,    tagline: "ERP, POS & Business Automation", desc: "Next-generation ERP combining POS, inventory, accounting, AI analytics, and multi-branch operations. Real-time visibility across every business unit and location.", modules: ["ERP Core","Point of Sale","Inventory Management","Accounting","Procurement","Business Analytics"] },
  { id: "crypto", slug: "smart-crypto-exchange", name: "Smart Crypto Exchange", badge: "FINTECH", color: T.teal,    tagline: "Enterprise Digital Asset Trading", desc: "Institutional-grade cryptocurrency trading infrastructure with sub-millisecond matching engine, full KYC/AML integration, and immutable compliance logging.", modules: ["Trading Engine","Wallet Infrastructure","KYC / AML","Market Streaming","Admin Console","Developer APIs"] },
];

export default function EcosystemSection() {
  const [active, setActive] = useState<string | null>(null);
  const ap = platforms.find(p => p.id === active);

  return (
    <section style={{ background: T.ink, padding: "112px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 68 }}>
          <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Ecosystem</p>
          <h2 style={{ fontFamily: T.sans, fontSize: "clamp(28px, 3.6vw, 50px)", fontWeight: 700, color: T.white, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16 }}>Enterprise Intelligence Ecosystem</h2>
          <p style={{ fontFamily: T.sans, fontSize: 16, color: "rgba(255, 255, 255, 0.72)", maxWidth: 560, margin: "0 auto", fontWeight: 300, lineHeight: 1.75 }}>
            Three proprietary platforms, six consulting practices, and a unified AI backbone — engineered to work independently or as an integrated enterprise intelligence layer.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center" }}>
          <Reveal direction="left">
            <div style={{ position: "relative", height: 440 }}>
              {/* Static connector lines only — no animated packets */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 420 440" preserveAspectRatio="xMidYMid meet">
                <line x1="210" y1="220" x2="210" y2="60"  stroke={T.navyLight} strokeWidth="1"   strokeDasharray="5 5" opacity="0.38"/>
                <line x1="210" y1="220" x2="72"  y2="318" stroke={T.teal}        strokeWidth="1"   strokeDasharray="5 5" opacity="0.38"/>
                <line x1="210" y1="220" x2="348" y2="318" stroke={T.teal}        strokeWidth="1"   strokeDasharray="5 5" opacity="0.38"/>
                <line x1="210" y1="60"  x2="72"  y2="318" stroke={T.navyLight} strokeWidth="0.7" strokeDasharray="2 7" opacity="0.18"/>
                <line x1="210" y1="60"  x2="348" y2="318" stroke={T.navyLight} strokeWidth="0.7" strokeDasharray="2 7" opacity="0.18"/>
                <line x1="72"  y1="318" x2="348" y2="318" stroke={T.teal}        strokeWidth="0.7" strokeDasharray="2 7" opacity="0.18"/>
              </svg>

              {/* AI Core node — pulse kept, it's the focal point */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", left: "50%", top: "46%", transform: "translate(-50%,-50%)", width: 76, height: 76, borderRadius: "50%", border: `1.5px solid ${T.navyLight}`, background: `radial-gradient(circle, ${T.tealGlowStrong}, transparent)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 3 }}
              >
                <svg width="20" height="20" fill="none" stroke={T.navyLight} viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                <span style={{ fontFamily: T.sans, fontSize: 9, fontWeight: 700, color: T.navyLight, marginTop: 3, textTransform: "uppercase", letterSpacing: "0.08em" }}>AI Core</span>
              </motion.div>

              {/* Platform nodes */}
              {platforms.map((p, i) => {
                const pos: React.CSSProperties[] = [
                  { left: "50%", top: "6%",  transform: "translate(-50%,0)" },
                  { left: "3%",  top: "64%", transform: "translate(0,0)" },
                  { right: "3%", top: "64%", transform: "translate(0,0)" },
                ];
                return (
                  <motion.div
                    key={p.id}
                    onClick={() => setActive(active === p.id ? null : p.id)}
                    whileHover={{ scale: 1.04 }}
                    style={{
                      position: "absolute", ...pos[i],
                      background: active === p.id ? `${p.color}1E` : T.inkMid,
                      border: `1.5px solid ${active === p.id ? p.color : "rgba(255, 255, 255, 0.12)"}`,
                      borderRadius: 10, padding: "12px 18px", cursor: "pointer", zIndex: 2, minWidth: 115,
                      textAlign: "center", transition: "all 0.28s",
                      boxShadow: active === p.id ? `0 0 22px ${p.color}44` : "none",
                    }}
                  >
                    <span style={{ fontFamily: T.sans, fontSize: 9, fontWeight: 700, color: p.color, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 3 }}>{p.badge}</span>
                    <span style={{ fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.white }}>{p.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          <Reveal direction="right">
            <AnimatePresence mode="wait">
              {ap ? (
                <motion.div key={ap.id} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.32 }}>
                  <span style={{ fontFamily: T.sans, fontSize: 10, fontWeight: 700, color: ap.color, textTransform: "uppercase", letterSpacing: "0.14em", background: `${ap.color}18`, padding: "4px 13px", borderRadius: 100, display: "inline-block", marginBottom: 18 }}>{ap.badge}</span>
                  <h3 style={{ fontFamily: T.sans, fontSize: 30, fontWeight: 700, color: T.white, letterSpacing: "-0.025em", marginBottom: 8 }}>{ap.name}</h3>
                  <p style={{ fontFamily: T.sans, fontSize: 13.5, color: ap.color, fontWeight: 500, marginBottom: 16 }}>{ap.tagline}</p>
                  <p style={{ fontFamily: T.sans, fontSize: 14, color: "rgba(255, 255, 255, 0.72)", lineHeight: 1.76, marginBottom: 28, fontWeight: 300 }}>{ap.desc}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginBottom: 28 }}>
                    {ap.modules.map(m => (
                      <div key={m} style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 0", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: ap.color, flexShrink: 0 }}/>
                        <span style={{ fontFamily: T.sans, fontSize: 13, color: T.white, fontWeight: 500 }}>{m}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Link href={`/products/${ap.slug}`} style={{ padding: "11px 24px", background: ap.color, color: T.white, fontFamily: T.sans, fontSize: 13, fontWeight: 600, borderRadius: 100, textDecoration: "none" }}>View Platform</Link>
                    <Link href="/contact" style={{ padding: "11px 24px", border: "1.5px solid rgba(255, 255, 255, 0.22)", color: "rgba(255,255,255,0.8)", fontFamily: T.sans, fontSize: 13, fontWeight: 500, borderRadius: 100, textDecoration: "none" }}>Request Demo</Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  style={{ padding: "44px 40px", border: "1px dashed rgba(255, 255, 255, 0.15)", borderRadius: 12, textAlign: "center" }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: T.navyGlow, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                    <svg width="20" height="20" fill="none" stroke={T.navyLight} viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  </div>
                  <p style={{ fontFamily: T.sans, fontSize: 14, color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.65, fontWeight: 300 }}>Select a platform node to explore its capabilities.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}