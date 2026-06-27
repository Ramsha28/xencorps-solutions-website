"use client";

import { motion } from "framer-motion";
import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";

const models = [
  {
    title: "Dedicated Development Team",
    tagline: "Long-term scalability, talent continuity, and operational integration.",
    desc: "We build a dedicated team of software engineers, solutions architects, QA engineers, and project coordinators who integrate directly with your company's workflows, tools, and Slack channels.",
    ideal: ["Multi-year enterprise product engineering", "Continuous infrastructure scaling", "Establishing an offshore development core"],
    benefit: "Guarantees resource availability and ensures team members acquire deep domain knowledge of your systems."
  },
  {
    title: "Fixed Cost Projects",
    tagline: "Budget predictability, structured scopes, and clear deliverables.",
    desc: "Best suited for projects with a clearly defined scope, complete designs, and structured requirements. We estimate cost and timeline upfront, committing to deliver within these boundaries.",
    ideal: ["Startup MVPs with defined features", "Legacy software migration projects", "ERP integrations with set endpoints"],
    benefit: "Eliminates budget risk. The scope, timelines, milestones, and deliverables are locked before code development begins."
  },
  {
    title: "Hourly Engagement",
    tagline: "Dynamic scope, complete flexibility, and on-demand resource scaling.",
    desc: "For projects with evolving roadmaps, research-driven prototypes, or ongoing infrastructure maintenance. You pay only for the actual engineering hours logged on your project.",
    ideal: ["Continuous operational maintenance", "Exploratory AI & machine learning prototyping", "Ad-hoc database tuning and cloud optimization"],
    benefit: "Maximum flexibility. Adjust team sizes, change feature directions, and throttle resources as your budget dictates."
  },
  {
    title: "IT Advisory & Consulting",
    tagline: "Strategic governance, technology roadmaps, and architecture reviews.",
    desc: "Direct advisory services from our senior architects, partners, and GRC compliance experts. We evaluate your current systems, draft roadmaps, audit cybersecurity setups, and coordinate compliance.",
    ideal: ["Regulatory audit preparation (ISO 27001, GDPR)", "Legacy system modernization assessments", "Digital transformation feasibility studies"],
    benefit: "Immediate access to executive-level technical wisdom without the overhead of full-time C-suite hires."
  }
];

export default function ModelsPage() {
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
      <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "center", overflow: "hidden", background: `radial-gradient(circle at 70% 30%, ${T.navyDim} 0%, ${T.ink} 70%)` }}>
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
                Collaboration Models
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
              Strategic Partnerships.<br />
              Tailored for <em style={{ fontStyle: "italic", color: T.tealLight }}>Alignment</em>.
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
              Every enterprise has different procurement constraints and product cycles. We offer four flexible engagement models designed to align technical delivery with financial parameters.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Models Grid Section */}
      <section style={{ background: T.white, padding: "112px 0", color: T.ink }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            {models.map((model, idx) => (
              <Reveal key={model.title} delay={idx * 0.08}>
                <div style={{ border: `1px solid ${T.mistDim}`, background: T.mist, padding: 44, borderRadius: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: T.teal }} />
                      <h3 style={{ fontSize: 20, fontWeight: 700, color: T.ink, letterSpacing: "-0.01em" }}>{model.title}</h3>
                    </div>
                    
                    <p style={{ fontSize: 13.5, fontWeight: 600, color: T.teal, marginBottom: 14 }}>{model.tagline}</p>
                    <p style={{ fontSize: 14, color: "#2E4A4A", lineHeight: 1.66, fontWeight: 300, marginBottom: 24 }}>{model.desc}</p>
                    
                    <div style={{ marginBottom: 24 }}>
                      <h4 style={{ fontSize: 10, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Ideal For</h4>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        {model.ideal.map((useCase) => (
                          <li key={useCase} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#2E4A4A", fontWeight: 300, marginBottom: 6 }}>
                            <svg width="12" height="12" fill="none" stroke={T.teal} viewBox="0 0 24 24" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ borderTop: `1px solid ${T.mistDim}`, paddingTop: 18, fontSize: 13, color: "#3D5E5E", fontWeight: 300 }}>
                    <span style={{ fontWeight: 600, color: T.ink }}>Core Business ROI:</span> {model.benefit}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: `linear-gradient(135deg, ${T.ink} 0%, ${T.navyDim} 100%)`, padding: "96px 0", color: T.white, textAlign: "center" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 700, color: T.white, marginBottom: 16 }}>Which Model Fits Your Project?</h2>
            <p style={{ fontSize: 15.5, color: T.textSecondary, maxWidth: 580, margin: "0 auto 36px", fontWeight: 300, lineHeight: 1.66 }}>
              Our senior consultants are available to review your roadmap and draft a custom proposal with detailed pricing and milestone breakdowns.
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
              Discuss Proposal
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
