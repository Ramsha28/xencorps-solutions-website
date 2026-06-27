"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  accentColor: string;
}

export default function FAQSection({ faqs, accentColor }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={{ background: T.ink, padding: "100px 0" }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.18em", display: "inline-block", marginBottom: 12 }}>
            Support & Resources
          </span>
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: T.white, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontFamily: T.sans, fontSize: 15, color: T.textSecondary, maxWidth: 620, margin: "14px auto 0", fontWeight: 300, lineHeight: 1.6 }}>
            Everything you need to know about implementation times, compliance readiness, security auditing, and SLAs.
          </p>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div style={{
                  background: T.inkMid,
                  border: `1px solid ${isOpen ? accentColor : "rgba(255, 255, 255, 0.04)"}`,
                  borderRadius: 8,
                  overflow: "hidden",
                  transition: "border-color 0.25s"
                }}>
                  {/* Trigger */}
                  <button
                    onClick={() => toggle(idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      textAlign: "left"
                    }}
                  >
                    <span style={{ fontFamily: T.sans, fontSize: 15, fontWeight: 600, color: T.white }}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ color: accentColor, flexShrink: 0, marginLeft: 16 }}
                    >
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Expandable Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{
                          padding: "0 24px 20px 24px",
                          fontFamily: T.sans,
                          fontSize: 13.5,
                          color: T.textSecondary,
                          lineHeight: 1.6,
                          fontWeight: 300,
                          borderTop: "1px solid rgba(255, 255, 255, 0.03)"
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
