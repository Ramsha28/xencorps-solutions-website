"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";
import Link from "next/link";

const services = [
  { title: "Software Engineering",         href: "/services/custom-software-development", desc: "Custom enterprise applications, platform architecture, cloud-native development, microservices, and system modernization at scale.", caps: ["Enterprise Applications","Cloud-Native Dev","System Modernization","API Integration"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { title: "AI & Intelligent Systems",     href: "/services/ai-intelligent-systems",     desc: "Automation, predictive analytics, AI assistants, computer vision, machine learning, and NLP systems embedded into enterprise operations.", caps: ["Predictive Analytics","AI Automation","Computer Vision","ML Engineering"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> },
  { title: "ERP Solutions",                href: "/services/erp-solutions",                desc: "SAP, Odoo, and custom ERP implementation, POS deployment, procurement automation, inventory management, and finance operations.", caps: ["SAP & Odoo","Custom ERP Build","POS Deployment","Finance Integration"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { title: "Digital Transformation",       href: "/services/e-commerce-solutions",       desc: "Business modernization, legacy migration, workflow re-engineering, change management, and multi-year transformation roadmap execution.", caps: ["Modernization Roadmap","Legacy Migration","Process Re-engineering","Agile Transformation"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: "Data Center & Infrastructure", href: "/services/data-center-development", desc: "Infrastructure design, network architecture, cloud migration, disaster recovery, cybersecurity, and high-availability hybrid infrastructure.", caps: ["Infrastructure Design","Cloud Migration","Disaster Recovery","Cybersecurity"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg> },
  { title: "IT Consulting",                href: "/services/it-consultancy",                desc: "Technology strategy, enterprise architecture, IT governance, digital roadmap planning, security advisory, and cloud readiness assessments.", caps: ["Technology Strategy","Enterprise Architecture","IT Governance","Security Advisory"], icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> },
];

export default function ServicesSection() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section style={{ background: T.mist, padding: "112px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 60, flexWrap: "wrap", gap: 20 }}>
            <div>
              <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: T.navy, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Services</p>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(28px, 3.4vw, 46px)", fontWeight: 700, color: T.ink, letterSpacing: "-0.025em", lineHeight: 1.12 }}>Enterprise Practice Areas</h2>
            </div>
            <Link href="/services" style={{ fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, color: T.navy, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
              View All Services <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${T.mistDim}` }}>
          {services.map((s, i) => (
            <Link href={s.href} key={s.title} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <motion.div
                onHoverStart={() => setHov(i)}
                onHoverEnd={() => setHov(null)}
                animate={{ backgroundColor: hov === i ? "#FFFFFF" : T.mist }}
                style={{ padding: "40px 34px", borderRight: `1px solid ${T.mistDim}`, borderBottom: `1px solid ${T.mistDim}`, position: "relative", overflow: "hidden", height: "100%" }}
              >
                <motion.div
                  animate={{ scaleX: hov === i ? 1 : 0 }}
                  style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: T.navy, transformOrigin: "left", transition: "transform 0.3s ease" }}
                />
                <div style={{ color: hov === i ? T.navy : T.textMuted, marginBottom: 18, transition: "color 0.25s" }}>{s.icon}</div>
                <h3 style={{ fontFamily: T.sans, fontSize: 17, fontWeight: 600, color: T.ink, marginBottom: 11, letterSpacing: "-0.015em" }}>{s.title}</h3>
                <p style={{ fontFamily: T.sans, fontSize: 13.5, color: "#3D4A6E", lineHeight: 1.72, marginBottom: 22, fontWeight: 300 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.caps.map(c => (
                    <span key={c} style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 500, color: T.navyDim, background: "rgba(61,82,160,0.08)", padding: "4px 11px", borderRadius: 100 }}>{c}</span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}