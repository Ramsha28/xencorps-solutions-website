"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";

const processPhases = [
  {
    num: "01",
    name: "Discovery & Requirements",
    desc: "A structured phase where we analyze workflows, define user personas, and determine the technical landscape.",
    deliverables: ["Product Requirement Document (PRD)", "Initial Scope & Feasibility Report", "Security & Regulatory Compliance Assessment", "Non-Disclosure Agreement Execution"],
    collaboration: "Weekly syncs with business owners, IT Directors, and compliance leads."
  },
  {
    num: "02",
    name: "Planning & Architecture",
    desc: "Designing the systems backbone: data structures, API endpoints, microservices coordination, and infrastructure topologies.",
    deliverables: ["High-Level System Architecture Design (SAD)", "Database Schema & Entity Models", "REST / WebSocket API Specifications", "Cloud Topology & Container Strategy (Docker/K8s)"],
    collaboration: "Architecture review meetings with client CTOs and engineering directors."
  },
  {
    num: "03",
    name: "UI/UX Design & Prototyping",
    desc: "Iterative visual engineering focused on corporate branding, interactive data dashboards, and user journey optimizations.",
    deliverables: ["High-Fidelity Interactive Prototypes", "Visual Component Style Guides", "Responsive Web & Mobile Layout Wireframes", "UX Usability Review Sessions"],
    collaboration: "Design sign-offs from product managers and business stakeholders."
  },
  {
    num: "04",
    name: "Secure Development",
    desc: "Our engineers build using clean code, strict design patterns, type-safety, and built-in security features.",
    deliverables: ["Secure Git Repositories access", "Documented Codebase (typed and refactored)", "Continuous Integration (CI) execution", "Static code vulnerability reports"],
    collaboration: "Bi-weekly sprint reviews, demo videos, and staging environment updates."
  },
  {
    num: "05",
    name: "Testing & Quality Assurance",
    desc: "Verify that all systems are stable, scalable, conform to security standards, and align with original business logic.",
    deliverables: ["QA Manual & Automated Test Suite reports", "User Acceptance Testing (UAT) documentation", "Load & Latency stress testing analytics", "Security vulnerability scans (DAST/SAST)"],
    collaboration: "Coordinated UAT sessions with business end-users and client testers."
  },
  {
    num: "06",
    name: "Deployment & Maintenance",
    desc: "Smooth production rollouts supported by automated pipelines, hybrid cloud strategies, and ongoing SLA-driven updates.",
    deliverables: ["Production-ready automated deployment scripts", "Disaster Recovery & Backup configuration", "90-day post-launch warranty support", "Continuous monitoring & monthly SLAs"],
    collaboration: "Launch coordinator syncs, operations handover, and maintenance reviews."
  }
];

export default function ProcessPage() {
  const [activePhase, setActivePhase] = useState(0);

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
      <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "center", overflow: "hidden", background: T.ink }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 128, paddingBottom: 64, width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 760 }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 24 }}
            >
              <div style={{ width: 30, height: 1.5, background: T.teal, borderRadius: 2 }}/>
              <span style={{ fontSize: 11, fontWeight: 600, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                Delivery Methodology
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: T.display,
                fontSize: "clamp(38px, 5vw, 60px)",
                fontWeight: 800,
                color: T.white,
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                marginBottom: 24
              }}
            >
              How We Deliver<br />
              Enterprise <em style={{ fontStyle: "italic", color: T.tealLight }}>Transformation</em>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 16.5,
                fontWeight: 300,
                color: T.textSecondary,
                lineHeight: 1.72,
                letterSpacing: "0.005em"
              }}
            >
              From direct business discovery and infrastructure planning to automated quality engineering and long-term maintenance. We operate with strict checkpoints at every phase.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Dynamic Process Timeline */}
      <section style={{ background: T.white, padding: "112px 0", color: T.ink }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 64, alignItems: "start" }}>
            
            {/* Phase Selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 10 }}>Development Stages</p>
              {processPhases.map((phase, idx) => (
                <button
                  key={phase.num}
                  onClick={() => setActivePhase(idx)}
                  style={{
                    display: "flex", alignItems: "center", gap: 18,
                    padding: "16px 20px", borderRadius: 8,
                    border: "1.5px solid",
                    borderColor: activePhase === idx ? T.teal : "rgba(0,128,128,0.12)",
                    background: activePhase === idx ? `${T.teal}09` : "transparent",
                    textAlign: "left", cursor: "pointer", transition: "all 0.2s"
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700, color: activePhase === idx ? T.teal : T.navyMid }}>{phase.num}</span>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: T.ink }}>{phase.name}</span>
                </button>
              ))}
            </div>

            {/* Phase Details Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  border: `1px solid ${T.mistDim}`, background: T.mist,
                  padding: 44, borderRadius: 10, minHeight: 380,
                  display: "flex", flexDirection: "column", justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.12em" }}>Phase {processPhases[activePhase].num}</span>
                    <span style={{ fontSize: 24, fontWeight: 800, color: `${T.teal}22`, fontFamily: T.sans }}>STAGE {processPhases[activePhase].num}</span>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: T.ink, marginBottom: 12, letterSpacing: "-0.015em" }}>{processPhases[activePhase].name}</h3>
                  <p style={{ fontSize: 14.5, color: "#2E4A4A", lineHeight: 1.66, fontWeight: 300, marginBottom: 28 }}>{processPhases[activePhase].desc}</p>
                  
                  <div style={{ marginBottom: 28 }}>
                    <h4 style={{ fontSize: 10, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Key Deliverables</h4>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      {processPhases[activePhase].deliverables.map((del) => (
                        <div key={del} style={{ display: "flex", gap: 10, alignItems: "start" }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.teal, marginTop: 7, flexShrink: 0 }} />
                          <span style={{ fontSize: 12.5, color: "#2E4A4A", fontWeight: 300, lineHeight: 1.4 }}>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: `1px solid ${T.mistDim}`, paddingTop: 18, fontSize: 13, color: T.textSecondaryLight }}>
                  <span style={{ fontWeight: 600, color: T.ink }}>Client Checkpoint:</span> {processPhases[activePhase].collaboration}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* SLA Support Section */}
      <section style={{ background: T.mist, padding: "112px 0", color: T.ink }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: T.navy, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Post-Deployment</p>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: T.ink, letterSpacing: "-0.02em" }}>Ongoing Support & SLAs</h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[
              { title: "90-Day Warranty", desc: "Every project goes live with a standard 90-day warranty window covering debugging, security patches, compliance audits, and configuration scaling." },
              { title: "Structured SLAs", desc: "For continuous evolution, we establish structured Service Level Agreements providing dedicated development hours, 24/7 server monitoring, and backup scheduling." },
              { title: "Continuous Optimizations", desc: "We review operational performance data monthly, recommending cloud resource optimizations, cache adjustments, and database refactoring to cut costs." }
            ].map(card => (
              <Reveal key={card.title}>
                <div style={{ background: T.white, padding: 36, border: `1px solid ${T.mistDim}`, borderRadius: 8, height: "100%" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: T.ink, marginBottom: 12 }}>{card.title}</h3>
                  <p style={{ fontSize: 13, color: T.textSecondaryLight, lineHeight: 1.66, fontWeight: 300 }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: T.ink, padding: "96px 0", color: T.white, textAlign: "center" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 700, color: T.white, marginBottom: 16 }}>Ready to Begin Discovery?</h2>
            <p style={{ fontSize: 15.5, color: T.textSecondary, maxWidth: 580, margin: "0 auto 36px", fontWeight: 300, lineHeight: 1.66 }}>
              Submit your project brief through our secure intake form and speak to a technology consultant.
            </p>
            <a href="/contact" style={{
              padding: "14px 34px",
              background: T.orange, color: T.white,
              fontFamily: T.sans, fontSize: 14, fontWeight: 600,
              borderRadius: 100, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: "0 0 24px rgba(240,104,48,0.22)",
              letterSpacing: "0.01em"
            }}>
              Connect With Us
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
