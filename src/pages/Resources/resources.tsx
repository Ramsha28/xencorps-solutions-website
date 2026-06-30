"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import ImagePlaceholder from "../../components/common/ImagePlaceholder";
import Link from "next/link";

const resourcesList = [
  {
    title: "Enterprise ERP Offline-Sync Models",
    category: "Technical Whitepaper",
    desc: "A deep-dive technical paper outlining SQLite local encryption, transaction caching mechanics, and background synchronization reconciliation algorithms.",
    aspect: "4/3",
    placeLabel: "ERP Whitepaper Placeholder"
  },
  {
    title: "SOC 2 & HIPAA Security Compliance Checklist",
    category: "Compliance Guide",
    desc: "An itemized technical audit checklist outlining required Role-Based Access Controls, audit trail database schemes, and network encryption configurations.",
    aspect: "4/3",
    placeLabel: "Compliance Guide Placeholder"
  },
  {
    title: "Low-Latency FinTech Order Matching Engines",
    category: "System Blueprint",
    desc: "Architectural blueprint detailing in-memory transaction order-books, sub-millisecond matching socket structures, and secure multi-party computation (MPC) wallet custody.",
    aspect: "4/3",
    placeLabel: "FinTech Blueprint Placeholder"
  }
];

const faqs = [
  {
    q: "What does Xencorp's Discovery & Diagnostic Workshop involve?",
    a: "It is a structured 3-to-5 day consulting engagement where our senior solutions architects and systems analysts audit your existing database structures, code dependencies, and compliance gaps. We deliver an itemized System Architecture Design (SAD) and project roadmap."
  },
  {
    q: "How can we request custom platform documentation for SmartGRC or Smart Orion?",
    a: "You can submit an inquiry through our Contact page or download our high-level Company Profile directly from the resources section. Detailed API documentations and platform module catalogs are provided under NDA during our initial scoping sessions."
  },
  {
    q: "Do you publish enterprise whitepapers and compliance checklists?",
    a: "Yes, our technical writing and advisory team is currently preparing whitepapers covering multi-branch ERP sync models, low-latency Fintech trading configurations, and SOC 2 / HIPAA security checklists. These will be published here in the coming months."
  },
  {
    q: "How does Xencorp Solutions handle software version upgrades and security patching?",
    a: "Under our Service Level Agreements (SLAs), we schedule monthly security updates, database index optimizations, and package patches. We coordinate upgrades in staging builds to ensure zero disruption to live operations."
  },
  {
    q: "Do you offer technology advisory retainers for corporate executives?",
    a: "Yes. We construct strategic IT advisory retainers for executive boards, providing ad-hoc systems review, cybersecurity consulting, disaster recovery auditing, and digital roadmap planning."
  },
  {
    q: "What compliance checklists are recommended for a scaling startup?",
    a: "We recommend starting with a foundational SOC 2 Type I audit preparation, followed by GDPR/HIPAA compliance mapping depending on data storage types. Our SmartGRC platform is designed to automate these audits in real-time."
  }
];

export default function ResourcesPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", background: T.ink }}>
      <style>{fontLink}</style>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        a,button{cursor:pointer;}
      `}</style>
      <Navigation />

      {/* Hero Section */}
      <section style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "center", overflow: "hidden", background: T.ink }}>
        {/* Subtle radial green glow in upper right */}
        <div style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          maxHeight: 600,
          maxWidth: 600,
          background: T.glow,
          filter: "blur(120px)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1
        }} />
        
        <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 136, paddingBottom: 64, width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 56, alignItems: "center" }} className="hero-grid-layout">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.navy }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                  Advisory Assets
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(38px, 4.8vw, 58px)",
                  fontWeight: 800,
                  color: T.white,
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                  marginBottom: 24
                }}
              >
                Technical Resources & <br />
                <span style={{ color: T.navyLight }}>Advisory Whitepapers</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: 16.5, fontWeight: 300, color: T.textOnDarkSecondary, lineHeight: 1.7, marginBottom: 40, maxWidth: 680 }}
              >
                Explore our upcoming technical briefs, systems engineering guides, and compliance checklists curated by our senior solutions architects and advisory partners.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: "flex", justifyContent: "center" }}
              className="hero-graphic"
            >
              <ImagePlaceholder
                aspectRatio="4/3"
                label="Advisory Resources Catalog"
                sublabel="Target: 4:3 graphic displaying abstract documentation nodes, system architectural graphs, and compliance checklists"
                iconType="analytics"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Coming Soon Grid */}
      <section style={{ padding: "112px 0", background: T.white }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          
          <Reveal>
            <div style={{ marginBottom: 64, textAlign: "center" }}>
              <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.navyDim, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Enterprise Publications</p>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 700, color: T.textPrimaryLight, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                Technical Whitepapers & Guides
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="hero-grid-layout">
            {resourcesList.map((res, i) => (
              <Reveal key={res.title} delay={i * 0.06}>
                <div style={{
                  background: T.white,
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                  borderRadius: 10,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  <div>
                    <ImagePlaceholder
                      aspectRatio={res.aspect}
                      label={res.placeLabel}
                      sublabel={`Target: ${res.aspect} cover graphic for whitepaper: ${res.title}`}
                      iconType="code"
                      mode="light"
                    />
                    
                    <div style={{ padding: 28 }}>
                      <span style={{ fontSize: 9.5, fontWeight: 700, background: "rgba(34, 197, 94, 0.1)", color: T.navyDim, padding: "3px 8px", borderRadius: 100, border: "1px solid rgba(34, 197, 94, 0.2)", letterSpacing: "0.08em", display: "inline-block", marginBottom: 12 }}>
                        {res.category}
                      </span>
                      <h4 style={{ fontFamily: T.sans, fontSize: 16.5, fontWeight: 700, color: T.textPrimaryLight, marginBottom: 10, letterSpacing: "-0.015em", lineHeight: 1.35 }}>
                        {res.title}
                      </h4>
                      <p style={{ fontFamily: T.sans, fontSize: 13.5, color: T.textSecondaryLight, lineHeight: 1.6, fontWeight: 300 }}>
                        {res.desc}
                      </p>
                    </div>
                  </div>

                  <div style={{ padding: "0 28px 28px" }}>
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "rgba(0,0,0,0.4)",
                      fontFamily: T.sans,
                      fontSize: 12.5,
                      fontWeight: 600
                    }}>
                      <span>Coming Soon</span>
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div style={{ border: `1px solid ${T.mistDim}`, background: T.mist, padding: "40px 44px", borderRadius: 10, marginTop: 56, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 700, color: T.ink, marginBottom: 6 }}>Download Company Profile (PDF)</h4>
                <p style={{ fontSize: 13.5, color: T.textSecondaryLight, fontWeight: 300 }}>Get an instant overview of our practice capabilities, platform architectures, and GRC frameworks.</p>
              </div>
              <a href="#" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 26px",
                background: "#0F172A",
                color: T.white,
                fontFamily: T.sans,
                fontSize: 13,
                fontWeight: 600,
                borderRadius: 100,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(15,23,42,0.1)",
                transition: "background 0.2s"
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#16A34A"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#0F172A"}
              >
                <span>Download Profile</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Dedicated FAQ Section */}
      <section style={{ background: T.inkMid, padding: "112px 0", color: T.white, borderTop: `1px solid ${T.line}` }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 36px" }}>
          
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
                Advisory FAQs
              </span>
              <h2 style={{ fontFamily: T.display, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, marginBottom: 18, letterSpacing: "-0.02em" }}>
                Discovery & Advisory
              </h2>
              <p style={{ fontSize: 15.5, color: T.textOnDarkSecondary, fontWeight: 300, lineHeight: 1.6 }}>
                Frequently asked questions about our technology advisory workshops, discovery diagnostics, security patching, and execution roadmaps.
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

      {/* CTA Section */}
      <section style={{ background: T.ink, padding: "96px 0", color: T.white, textAlign: "center" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 700, color: T.white, marginBottom: 16 }}>Need Strategic Advisory?</h2>
            <p style={{ fontSize: 15.5, color: T.textOnDarkSecondary, maxWidth: 580, margin: "0 auto 36px", fontWeight: 300, lineHeight: 1.66 }}>
              Discuss your enterprise roadmaps, hybrid-cloud topologies, or security audit scopes with our senior advisory partners.
            </p>
            <Link href="/contact" style={{
              padding: "14px 34px",
              background: "#16A34A", color: T.white,
              fontFamily: T.sans, fontSize: 14, fontWeight: 600,
              borderRadius: 100, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: "0 4px 14px rgba(22, 163, 74, 0.25)",
              letterSpacing: "0.01em"
            }}>
              Schedule Consultation
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
