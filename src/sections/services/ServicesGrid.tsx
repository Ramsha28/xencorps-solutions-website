"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Link from "next/link";
import Reveal from "../../components/common/Reveal";

const servicesList = [
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    desc: "Tailored software systems engineered to map exactly to your unique organizational workflows, operational rules, and scale profiles.",
    outcome: "Eliminates legacy licensing costs, bridges processing gaps, and delivers high-performance SaaS models.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    id: "web-development",
    title: "Enterprise Web Development",
    desc: "High-performance, secure, responsive web architectures utilizing React, Next.js, and Java Spring Boot for frictionless data layers.",
    outcome: "Drives customer acquisition, scales dynamic portal interfaces, and ensures 99.99% system availability.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    desc: "Native-grade cross-platform Android and iOS applications built on Flutter, designed for responsive user experience and off-line utility.",
    outcome: "Boosts user retention, enables tracking capabilities, and syncs remote data to central registers.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={3} />
      </svg>
    )
  },
  {
    id: "ai-intelligent-systems",
    title: "AI & Intelligent Systems",
    desc: "Seamless integration of custom machine learning, predictive analytics, natural language processing, and automated computer vision.",
    outcome: "Automates repetitive manual verification tasks, unlocks data insight, and predicts market trends.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    )
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions & Business Automation",
    desc: "Deployment, module customization, and API integration for leading enterprise platforms like SAP and Odoo ERP configurations.",
    outcome: "Centralizes accounting ledgers, manages warehouses, and optimizes multi-branch cash flows.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    id: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    desc: "Robust digital marketplaces, custom shopping cart logic, secure payment integrations, and automated order fulfillment systems.",
    outcome: "Expands transaction throughput, syncs warehouse inventory, and provides customer checkout.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    )
  },
  {
    id: "data-center-development",
    title: "Data Center Development & IT Infrastructure",
    desc: "Architectural consultation for hybrid-cloud topologies, virtualization planning, secure network pipelines, and disaster recovery.",
    outcome: "Ensures local data sovereignty compliance, reduces hardware waste, and achieves zero downtime.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth={2} />
        <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth={2} />
      </svg>
    )
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy",
    desc: "Strategic technical assessments, IT governance review, legacy system audits, and comprehensive technology roadmapping.",
    outcome: "Mitigates project execution risks, guides modernizations, and aligns tech budgets with executive KPIs.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    )
  }
];

export default function ServicesGrid() {
  const [hov, setHov] = useState<string | null>(null);

  return (
    <section id="services-grid" style={{ background: T.white, padding: "112px 0", color: T.ink }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.teal, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
              Practice Portfolio
            </span>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em" }}>
              Our Strategic Core Capabilities
            </h2>
            <p style={{ fontSize: 15, color: "#3B5C5A", fontWeight: 300, maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
              Explore how our specialized practices apply modern engineering, structural frameworks, and advisory workflows to secure your digital growth.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 32 }}>
          {servicesList.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.05}>
              <motion.div
                onHoverStart={() => setHov(service.id)}
                onHoverEnd={() => setHov(null)}
                style={{
                  background: T.mist,
                  border: `1.5px solid ${T.mistDim}`,
                  borderRadius: 10,
                  padding: "44px 36px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,128,128,0.01)"
                }}
              >
                {/* Top border bar on hover */}
                <motion.div
                  animate={{ scaleX: hov === service.id ? 1 : 0 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: T.teal,
                    transformOrigin: "left",
                    transition: "transform 0.3s ease"
                  }}
                />

                <div>
                  <div style={{
                    color: hov === service.id ? T.teal : T.tealDim,
                    marginBottom: 20,
                    transition: "color 0.25s"
                  }}>
                    {service.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: 19,
                    fontWeight: 700,
                    color: T.ink,
                    marginBottom: 14,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.3
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    fontSize: 14.5,
                    color: "#2C4C4A",
                    lineHeight: 1.68,
                    fontWeight: 300,
                    marginBottom: 20
                  }}>
                    {service.desc}
                  </p>
                </div>

                <div style={{ borderTop: `1px solid rgba(0,194,160,0.1)`, paddingTop: 20, marginTop: 10 }}>
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: T.tealDim, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 4 }}>
                      Business Outcome
                    </span>
                    <p style={{ fontSize: 13, color: "#476C69", lineHeight: 1.5, fontWeight: 300 }}>
                      {service.outcome}
                    </p>
                  </div>

                  <Link href={`/services/${service.id}`} style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: T.teal,
                    textDecoration: "none",
                    transition: "gap 0.2s"
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = T.navyDim}
                    onMouseLeave={(e) => e.currentTarget.style.color = T.teal}
                  >
                    Read Practice Details 
                    <span style={{ transition: "transform 0.2s" }} className="arrow">→</span>
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
