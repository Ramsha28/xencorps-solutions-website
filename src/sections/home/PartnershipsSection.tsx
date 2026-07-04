"use client";

import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";
import Link from "next/link";

const partners = [
  {
    logo: "/images/partners/3dex.png",
    name: "3DEX Inc.",
    descriptor: "AI & software engineering partner California, USA"
  },
  {
    logo: "/images/partners/hexalyze.png",
    name: "Hexalyze",
    descriptor: "Microsoft & Odoo solutions partner Global delivery"
  },
  {
    logo: "/images/partners/indigo.png",
    name: "Indigo Computer Consultancy",
    descriptor: "IBM Gold Partner Cybersecurity & enterprise infrastructure"
  }
];

export default function PartnershipsSection() {
  return (
    <section style={{ background: T.white, padding: "112px 0", borderTop: `1px solid ${T.mistDim}` }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        
        {/* Header containing title & subtext + button */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
            <div style={{ maxWidth: 720 }}>
              <p style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 600, color: T.navyDim, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>
                Ecosystem
              </p>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(28px, 3.4vw, 46px)", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16 }}>
                Strategic Partnerships
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 15.5, color: "#475569", lineHeight: 1.6, fontWeight: 300 }}>
                We operate alongside a select network of technology partners to extend our capabilities and deliver integrated enterprise solutions at global scale.
              </p>
            </div>
            
            <Link href="/partnerships" style={{
              fontFamily: T.sans,
              fontSize: 13.5,
              fontWeight: 600,
              color: T.navyDim,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: `1.5px solid ${T.navyDim}`,
              padding: "10px 22px",
              borderRadius: 100,
              transition: "all 0.25s ease",
            }}
              className="partnerships-btn"
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.background = T.navyDim;
                target.style.color = T.white;
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.background = "transparent";
                target.style.color = T.navyDim;
              }}
            >
              View All Partnerships <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </Reveal>

        <style>{`
          @media (max-width: 991px) {
            .partners-grid {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }
          }
        `}</style>

        {/* 3 Cards in a Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="partners-grid">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  background: T.mist,
                  border: `1px solid ${T.mistDim}`,
                  borderRadius: 16,
                  padding: 32,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.01)",
                }}
              >
                {/* Logo Frame */}
                <div style={{
                  height: 80,
                  background: T.white,
                  border: "1px solid rgba(15, 23, 42, 0.04)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 24px",
                  overflow: "hidden",
                }}>
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    style={{
                      maxHeight: "46px",
                      maxWidth: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 style={{
                    fontFamily: T.sans,
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#0F172A",
                    marginBottom: 8,
                    letterSpacing: "-0.01em"
                  }}>
                    {p.name}
                  </h3>
                  <p style={{
                    fontFamily: T.sans,
                    fontSize: 14,
                    color: "#475569",
                    lineHeight: 1.5,
                    fontWeight: 300
                  }}>
                    {p.descriptor}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
