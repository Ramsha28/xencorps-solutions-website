"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const faqs = [
  {
    q: "What core operational problems does Xencorp Solutions solve?",
    a: "We eliminate database sync delays, replace rigid legacy lock-ins, automate compliance auditing, and remove workflow friction. Our systems are engineered to reduce compliance workloads, slash inventory overhead, and optimize data throughput with zero down-time."
  },
  {
    q: "Who are your ideal clients?",
    a: "Our ideal clients are mid-market companies and large global enterprises requiring robust, high-performance digital systems. We specialize in serving highly regulated sectors such as banking, finance, healthcare, logistics, public services, and retail where data security and compliance are paramount."
  },
  {
    q: "Why should we choose Xencorp Solutions over other technology firms?",
    a: "We staff every project with senior architects and developers, ensuring executive-level engineering from day one. We grant 100% intellectual property ownership to our clients, deliver compliance-ready architectures, and offer modular proprietary platforms that accelerate rollout by up to 50% compared to pure custom builds."
  },
  {
    q: "How does a typical client engagement begin?",
    a: "Engagements start with a Discovery & Diagnostic Workshop. Our solutions architects audit your current codebase, design target database and API blueprints, evaluate compliance requirements, and deliver a complete project roadmap and fixed-cost estimation."
  }
];

export default function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={{ background: T.inkMid, padding: "112px 0", color: T.white, borderTop: `1px solid ${T.line}` }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
              Enterprise FAQs
            </span>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, marginBottom: 18, letterSpacing: "-0.02em" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: 15.5, color: T.textOnDarkSecondary, fontWeight: 300, lineHeight: 1.6 }}>
              Find quick answers regarding our practice areas, proprietary platforms, ideal clients, and delivery models.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx}>
                <div style={{
                  background: T.ink,
                  border: `1px solid ${isOpen ? "rgba(34,197,94,0.28)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "border-color 0.25s"
                }}>
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggle(idx)}
                    style={{
                      width: "100%",
                      padding: "24px 30px",
                      background: "none",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "left",
                      color: T.white,
                      outline: "none",
                      cursor: "pointer"
                    }}
                  >
                    <span style={{ fontSize: 15.5, fontWeight: 600, fontFamily: T.sans, letterSpacing: "-0.01em", paddingRight: 20 }}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ color: T.navyLight, flexShrink: 0 }}
                    >
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Collapsible Answer Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div style={{
                          padding: "0 30px 24px",
                          fontSize: 14,
                          color: T.textOnDarkSecondary,
                          lineHeight: 1.68,
                          fontWeight: 300,
                          borderTop: "1px solid rgba(255,255,255,0.04)"
                        }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
