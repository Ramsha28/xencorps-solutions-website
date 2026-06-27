"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const faqs = [
  {
    q: "How long does system development typically take?",
    a: "Timelines depend directly on product complexity and integration requirements. A specialized MVP prototype generally takes 8 to 12 weeks. Expansive, multi-branch ERP deployments, custom AI pipelines, or hybrid cloud infrastructures can span 6 to 12 months, executed in phased monthly releases."
  },
  {
    q: "Do you work with international clients and different time zones?",
    a: "Yes, we operate a global delivery model. Our engineering and project teams align schedules, stand-ups, and sprint reviews with international time zones (including EST, PST, GMT, and CET) to ensure real-time collaboration."
  },
  {
    q: "Can you modernize and scale our existing legacy software?",
    a: "Yes. We perform technical diagnostics to audit legacy codebases, isolate dependencies, and bridge integration gaps. We systematically modernize the system by refactoring databases, containerizing code, and implementing modern REST APIs, ensuring zero operational downtime."
  },
  {
    q: "Do you provide long-term software maintenance and SLA agreements?",
    a: "Yes. We offer dedicated support models and SLA agreements. This covers continuous system health checks, database optimizations, security audits, framework upgrades, and continuous feature scaling."
  },
  {
    q: "How do new project engagements begin?",
    a: "Engagements start with a Discovery & Diagnostic Workshop. Our architects map your workflows, design initial database structures, evaluate compliance needs, and deliver a complete project blueprint and roadmap."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={{ background: T.ink, padding: "112px 0", color: T.white }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
              Practice FAQs
            </span>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, marginBottom: 18, letterSpacing: "-0.02em" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: 15.5, color: T.textSecondary, fontWeight: 300, lineHeight: 1.6 }}>
              Find quick answers regarding our engagement processes, development timelines, and software modernization practices.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx}>
                <div style={{
                  background: T.inkMid,
                  border: `1px solid ${isOpen ? "rgba(0,194,160,0.25)" : "rgba(0,194,160,0.08)"}`,
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
                      outline: "none"
                    }}
                  >
                    <span style={{ fontSize: 15.5, fontWeight: 600, fontFamily: T.sans, letterSpacing: "-0.01em", paddingRight: 20 }}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ color: T.tealLight, flexShrink: 0 }}
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
                          color: T.textSecondary,
                          lineHeight: 1.68,
                          fontWeight: 300,
                          borderTop: "1px solid rgba(0,194,160,0.05)"
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
