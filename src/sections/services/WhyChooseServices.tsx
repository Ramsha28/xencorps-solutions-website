"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const pillars = [
  {
    title: "Engineering Excellence",
    desc: "We enforce strict domain separation, layered designs, and rigorous code reviews to eliminate technical debt from day one."
  },
  {
    title: "Scalable Architecture",
    desc: "Our microservices and event-driven patterns utilize Kafka, Docker, and Kubernetes to handle variable enterprise workloads."
  },
  {
    title: "Business-First Outcomes",
    desc: "We align all architectural decisions directly to business metrics, ensuring operational savings and measurable ROI."
  },
  {
    title: "Security by Design",
    desc: "Built-in cryptography, secure authentication (OAuth2/OIDC), role-based permissions, and continuous log audits."
  },
  {
    title: "Modern Tech Stack",
    desc: "We work with top-tier tools including React, Next.js, Java Spring Boot, and Flutter to build fast and maintainable products."
  },
  {
    title: "Dedicated Support",
    desc: "We provide long-term consulting advisory, technical performance checks, version scaling, and security patches."
  }
];

export default function WhyChooseServices() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section style={{ background: T.ink, padding: "112px 0", color: T.white }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 12 }}>
              Engineering Mandate
            </span>
            <h2 style={{ fontFamily: T.display, fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em" }}>
              Why Leading Enterprises Choose Xencorp
            </h2>
            <p style={{ fontSize: 15.5, color: T.textSecondary, fontWeight: 300, maxWidth: 640, margin: "0 auto", lineHeight: 1.68 }}>
              We merge corporate consulting discipline with agile product engineering to deliver solutions that secure your operational future.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 32 }}>
          {pillars.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.05}>
              <motion.div
                onHoverStart={() => setHov(idx)}
                onHoverEnd={() => setHov(null)}
                style={{
                  background: hov === idx ? T.inkSoft : T.inkMid,
                  border: `1px solid ${hov === idx ? "rgba(0,194,160,0.25)" : "rgba(0,194,160,0.08)"}`,
                  borderRadius: 10,
                  padding: "40px 36px",
                  height: "100%",
                  transition: "background 0.25s, border-color 0.25s",
                  boxShadow: hov === idx ? `0 10px 30px ${T.navyGlow}` : "none"
                }}
              >
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: hov === idx ? T.tealLight : T.white,
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                  transition: "color 0.2s"
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: 14,
                  color: T.textSecondary,
                  lineHeight: 1.65,
                  fontWeight: 300
                }}>
                  {p.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
