"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import ImagePlaceholder from "../../components/common/ImagePlaceholder";
import Link from "next/link";

const industriesList = [
  {
    name: "Healthcare & Life Sciences",
    tagline: "Clinical portals and HIPAA-compliant data storage.",
    desc: "We construct secure medical records portals, scheduling systems, and pharmaceutical inventory trackers utilizing end-to-end data encryption and strict Role-Based Access Controls.",
    iconType: "lock",
    aspect: "16/9",
    img: "/images/industries/healthcare.png"
  },
  {
    name: "Retail & Omnichannel Commerce",
    tagline: "Real-time POS checkout client and automated inventory sync.",
    desc: "Deploying our Smart Orion platform to unify brick-and-mortar cashier cash drawers, automated supplier reordering rules, and digital webstore stocks under a single ledger.",
    iconType: "analytics",
    aspect: "16/9",
    img: "/images/industries/retail.png"
  },
  {
    name: "Logistics & Supply Chain",
    tagline: "Fleet coordinates tracking and warehouse routing dashboards.",
    desc: "We build automated shipping calculators, barcode integration frameworks, and predictive dispatch engines that optimize transit routes and warehouse allocation efficiency.",
    iconType: "network",
    aspect: "16/9",
    img: "/images/industries/logistics.png"
  },
  {
    name: "Manufacturing & IoT Telemetry",
    tagline: "Industrial assembly lines and automated procurement rules.",
    desc: "We integrate MQTT/WebSocket listeners with physical machinery scanners, mapping real-time manufacturing telemetry data directly to automated raw material purchasing.",
    iconType: "cloud",
    aspect: "16/9",
    img: "/images/industries/manufacturing.png"
  },
  {
    name: "Government & Public Administration",
    tagline: "Secure portals and multi-framework audit logs.",
    desc: "We coordinate with public agencies to develop citizens' registry portals, automated licensing, and secure cybersecurity audit vaults (SmartGRC) meeting government mandates.",
    iconType: "globe",
    aspect: "16/9",
    img: "/images/industries/government.png"
  }
];

const faqs = [
  {
    q: "How does Xencorp Solutions tailor custom software for highly regulated industries?",
    a: "We incorporate regulatory controls directly into our system architectures. For example, in healthcare, we enforce strict audit trails and database encryption to ensure HIPAA compliance. In enterprise commerce, we implement double-entry cryptographic ledger reconciliation."
  },
  {
    q: "What compliance frameworks do your platforms support?",
    a: "Out of the box, our platforms (including SmartGRC) support SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS, NIST, and DORA configurations. During discovery, we map these frameworks to your specific software checkpoints."
  },
  {
    q: "Can your platforms integrate with legacy government or enterprise endpoints?",
    a: "Yes. We specialize in building secure API adapters and event-driven data pipelines (using Apache Kafka/RabbitMQ) to interface modern frontends with legacy AS400, SAP, or custom mainframe databases."
  },
  {
    q: "How do you manage data privacy and security in healthcare deployments?",
    a: "Healthcare portals are engineered with Role-Based Access Control (RBAC), automatic session termination, end-to-end TLS 1.3 transit encryption, and AES-256 database storage encryption."
  },
  {
    q: "How does Smart Orion support retail and logistics operations?",
    a: "Smart Orion unifies POS transaction processing with multi-warehouse inventory updates. When local internet connections fail, our offline-sync database logs transactions locally and cryptographically synchronizes with the main server once connectivity is restored."
  },
  {
    q: "Do you customize your systems for manufacturing and industrial IoT tracking?",
    a: "Yes. We construct specialized pipelines using MQTT and WebSockets to process real-time telemetry from industrial equipment, automating inventory adjustments and purchase orders in Smart Orion."
  }
];

export default function IndustriesPage() {
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
        {/* Background Image overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/secondary-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.20,
          pointerEvents: "none",
          zIndex: 1
        }} />
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
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 56, alignItems: "center" }} className="hero-grid-layout">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.navy }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                  Sector Specialties
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
                Tailored Solutions for <br />
                <span style={{ color: T.navyLight }}>Most Demanding Sectors</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: 16.5, fontWeight: 300, color: T.textOnDarkSecondary, lineHeight: 1.7, marginBottom: 40, maxWidth: 680 }}
              >
                We customize our systems and platforms for healthcare, retail, logistics, manufacturing, and public administrations globally, ensuring compliance, security, and scalability from day one.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: "flex", justifyContent: "center" }}
              className="hero-graphic"
            >
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: "112px 0", background: T.white }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {industriesList.map((ind, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={ind.name} delay={i * 0.05}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: isEven ? "1.1fr 0.9fr" : "0.9fr 1.1fr",
                    gap: 64,
                    alignItems: "center"
                  }} className="hero-grid-layout">
                    
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: T.navyDim, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 12 }}>
                        {ind.name}
                      </span>
                      <h3 style={{ fontFamily: T.sans, fontSize: 28, fontWeight: 700, color: T.textPrimaryLight, marginBottom: 16, letterSpacing: "-0.02em" }}>
                        {ind.tagline}
                      </h3>
                      <p style={{ fontFamily: T.sans, fontSize: 15.5, color: T.textSecondaryLight, lineHeight: 1.7, fontWeight: 300, marginBottom: 28 }}>
                        {ind.desc}
                      </p>
                      <Link href="/contact" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: T.navyDim,
                        fontFamily: T.sans,
                        fontSize: 13.5,
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "color 0.2s"
                      }}
                        onMouseEnter={(e) => e.currentTarget.style.color = T.navy}
                        onMouseLeave={(e) => e.currentTarget.style.color = T.navyDim}
                      >
                        <span>Request Industry Case Briefing</span>
                        <span>→</span>
                      </Link>
                    </div>

                    <div style={{ order: isEven ? 2 : 1 }}>
                      <div style={{ aspectRatio: "16/9", width: "100%", overflow: "hidden", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                        <img
                          src={ind.img}
                          alt={ind.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Dedicated FAQ Section */}
      <section style={{ background: T.inkMid, padding: "112px 0", color: T.white, borderTop: `1px solid ${T.line}` }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 36px" }}>
          
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: T.navyLight, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
                Compliance FAQs
              </span>
              <h2 style={{ fontFamily: T.display, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, marginBottom: 18, letterSpacing: "-0.02em" }}>
                Industry Compliance & Tailoring
              </h2>
              <p style={{ fontSize: 15.5, color: T.textOnDarkSecondary, fontWeight: 300, lineHeight: 1.6 }}>
                Frequently asked questions about our framework compliance controls, mainframe API integrations, and sector-specific database customisations.
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
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 700, color: T.white, marginBottom: 16 }}>Ready to Build Your System?</h2>
            <p style={{ fontSize: 15.5, color: T.textOnDarkSecondary, maxWidth: 580, margin: "0 auto 36px", fontWeight: 300, lineHeight: 1.66 }}>
              Contact our solutions architects for a detailed custom software scoping and integration workshop matching your industry standards.
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
