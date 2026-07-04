"use client";

import { motion } from "framer-motion";
import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import Link from "next/link";

const partnersList = [
  {
    logo: "/images/partners/3dex.png",
    website: "https://3dex.com",
    headquarters: "California, USA (with presence in Dubai, UK, China, Pakistan)",
    founded: "2008",
    name: "3DEX Inc.",
    about: "3DEX Inc. is a 20+ year veteran in software development and innovation, headquartered in Irvine, California. Originally founded to serve its own sister companies, 3DEX expanded into a global software solutions provider covering healthcare, e-commerce, logistics, finance, education, and more. With a team of 60+ professionals across the US, Europe, Dubai, China, and Pakistan, 3DEX delivers full-stack development, mobile and web applications, AI & machine learning, system and cloud engineering, and robotics solutions.",
    value: "Through our partnership with 3DEX, Xencorp clients gain access to specialized AI and machine learning capabilities, advanced robotics engineering, and a US-anchored software delivery track for clients requiring North American presence or compliance.",
    capabilities: [
      "Artificial Intelligence & Machine Learning",
      "Full-Stack & Mobile Development",
      "IoT & Robotics Engineering",
      "Cloud & System Architecture",
      "Presence across US, UAE, UK, China, Pakistan"
    ]
  },
  {
    logo: "/images/partners/hexalyze.png",
    website: "https://hexalyze.com",
    headquarters: "Pakistan (offices in UAE, KSA, Singapore, USA, Australia, Germany, Qatar)",
    founded: "2016",
    name: "Hexalyze",
    about: "Hexalyze is a global technology solutions firm with 300+ satisfied clients worldwide and a 96% successful delivery rate. A certified Microsoft and Odoo partner, Hexalyze specializes in ERP implementation (Odoo, Microsoft Dynamics 365, SAP), Modern Workplace (Microsoft 365, IceWarp, Axigen), Business Intelligence & Planning (SAP Analytics Cloud, Power BI), Robotics Process Automation (Power Automate, Nintex), AI solutions, Mobile App Development, Cloud Integration (Azure, Tencent Cloud), and ESG reporting. Their client base includes UNDP, AstraZeneca, Al-Futtaim, Dolphin Energy, Pakistan State Oil, Federal Board of Revenue, and 300+ other organizations globally.",
    value: "The Hexalyze partnership extends Xencorp's reach into Microsoft ecosystem implementations, Odoo ERP deployments, and Power BI analytics engagements — bringing a delivery track with proven enterprise clients across the GCC, South Asia, and global markets.",
    capabilities: [
      "Microsoft 365 & Modern Workplace",
      "Odoo, Dynamics 365 & SAP ERP Implementations",
      "Power BI & SAP Analytics Cloud",
      "Robotics Process Automation (RPA)",
      "ESG Reporting & Sustainability Tech",
      "7 global offices across UAE, KSA, Pakistan, Singapore, USA, Australia, Germany"
    ]
  },
  {
    logo: "/images/partners/indigo.png",
    website: "https://indigogulf.com",
    headquarters: "Abu Dhabi, UAE (Head Office) — with offices in Dubai, Pakistan, UK, Australia",
    founded: "IBM Gold Business Partner",
    name: "Indigo Computer Consultancy",
    about: "Indigo Computer Consultancy, an IBM Gold Business Partner headquartered in Abu Dhabi, UAE, is a specialist enterprise infrastructure and cybersecurity firm. Indigo delivers enterprise-grade security and infrastructure solutions including IBM QRadar SIEM, Fortinet & CrowdStrike EDR/Firewalls, BeyondTrust Privileged Access Management, SailPoint Identity Access Management, Forcepoint DLP, mobile device management via IBM MaaS360, WAN optimization, and enterprise servers (IBM & HP). Their client portfolio includes UAE government entities such as the Ministry of Economy, Ministry of Energy & Infrastructure, Abu Dhabi Executive Office, Dubai Civil Aviation Authority, Dubai Police, Federal Tax Authority, Abu Dhabi Pension Fund, UNDP, and UAE Space Agency, among others.",
    value: "The Indigo partnership brings IBM-certified cybersecurity and enterprise infrastructure capabilities to Xencorp engagements — critical for clients in banking, government, and healthcare who require SIEM, PAM, DLP, and compliance-grade network architecture alongside our software and GRC platforms.",
    capabilities: [
      "IBM QRadar SIEM & Cybersecurity Operations",
      "Fortinet & CrowdStrike EDR, Firewalls & WAF",
      "Privileged Access Management (BeyondTrust, Wallix)",
      "Identity Access Management (SailPoint)",
      "Data Loss Prevention (Forcepoint)",
      "Enterprise Servers (IBM & HP)",
      "IBM Gold Partner — UAE Government client roster"
    ]
  }
];

export default function Partnerships() {
  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", background: T.white }}>
      <style>{fontLink}</style>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a, button { cursor: pointer; }
        @media (max-width: 991px) {
          .two-col-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .partner-logo-container {
            min-height: 240px !important;
          }
        }
        @media (max-width: 600px) {
          .caps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      
      <Navigation />

      {/* Hero Section */}
      <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "center", overflow: "hidden", background: T.ink }}>
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
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 140, paddingBottom: 80, width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 840 }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 24 }}
            >
              <div style={{ width: 30, height: 1.5, background: T.teal, borderRadius: 2 }}/>
              <span style={{ fontSize: 11, fontWeight: 600, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                Strategic Ecosystem
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: T.display,
                fontSize: "clamp(34px, 4.5vw, 56px)",
                fontWeight: 800,
                color: T.white,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 24
              }}
            >
              Our Technology Partners
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 16.5,
                fontWeight: 300,
                color: T.textSecondary,
                lineHeight: 1.76,
                letterSpacing: "0.005em"
              }}
            >
              Xencorp Solutions collaborates with a focused network of complementary technology firms to extend our delivery capabilities, bring specialist expertise to client engagements, and build integrated enterprise solutions across global markets.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partners List */}
      {partnersList.map((partner, index) => {
        const isEven = index % 2 === 0;
        const bg = isEven ? T.white : T.mist;
        return (
          <section key={partner.name} style={{ background: bg, padding: "100px 0", borderBottom: `1px solid ${T.mistDim}` }}>
            <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
              <div style={{ display: "grid", gridTemplateColumns: isEven ? "0.95fr 1.05fr" : "1.05fr 0.95fr", gap: 64, alignItems: "center" }} className="two-col-grid">
                
                {/* Logo Column */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <Reveal direction={isEven ? "left" : "right"}>
                    <div className="partner-logo-container" style={{
                      background: isEven ? T.mist : T.white,
                      border: `1px solid ${T.mistDim}`,
                      borderRadius: 20,
                      height: 380,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 48,
                      boxShadow: "0 8px 30px rgba(0,0,0,0.015)"
                    }}>
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        style={{
                          maxHeight: "130px",
                          maxWidth: "100%",
                          objectFit: "contain",
                          display: "block"
                        }}
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Details Column */}
                <div style={{ order: isEven ? 2 : 1 }}>
                  <Reveal>
                    <div>
                      {/* Name & metadata */}
                      <h2 style={{ fontFamily: T.sans, fontSize: 32, fontWeight: 700, color: "#0F172A", marginBottom: 18, letterSpacing: "-0.02em" }}>
                        {partner.name}
                      </h2>
                      
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                        <div style={{ fontFamily: T.sans, fontSize: 13.5, color: "#5B6B63" }}>
                          <strong style={{ color: "#0F172A", fontWeight: 600 }}>Headquarters: </strong> {partner.headquarters}
                        </div>
                        <div style={{ fontFamily: T.sans, fontSize: 13.5, color: "#5B6B63" }}>
                          <strong style={{ color: "#0F172A", fontWeight: 600 }}>Founded / Status: </strong> {partner.founded}
                        </div>
                        <div style={{ fontFamily: T.sans, fontSize: 13.5, color: "#5B6B63" }}>
                          <strong style={{ color: "#0F172A", fontWeight: 600 }}>Website: </strong>
                          <a href={partner.website} target="_blank" rel="noopener noreferrer" style={{ color: T.navyDim, textDecoration: "none", fontWeight: 500 }}>
                            {partner.website.replace("https://", "")} ↗
                          </a>
                        </div>
                      </div>

                      {/* About */}
                      <p style={{ fontFamily: T.sans, fontSize: 15, color: "#475569", lineHeight: 1.7, fontWeight: 300, marginBottom: 24 }}>
                        {partner.about}
                      </p>

                      {/* Partnership Value highlight */}
                      <div style={{
                        borderLeft: `4px solid ${T.navy}`,
                        background: "rgba(34,197,94,0.05)",
                        padding: "20px 24px",
                        borderRadius: "0 12px 12px 0",
                        marginBottom: 30
                      }}>
                        <p style={{ fontFamily: T.sans, fontSize: 14.5, color: "#15803D", lineHeight: 1.6, fontWeight: 400, fontStyle: "italic" }}>
                          "{partner.value}"
                        </p>
                      </div>

                      {/* Capabilities */}
                      <div>
                        <h4 style={{ fontFamily: T.sans, fontSize: 14, fontWeight: 700, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                          Key Collaboration Practices
                        </h4>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px 20px" }} className="caps-grid">
                          {partner.capabilities.map(cap => (
                            <div key={cap} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                              <svg width="18" height="18" fill="none" stroke={T.navy} viewBox="0 0 24 24" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 1 }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span style={{ fontFamily: T.sans, fontSize: 14, color: "#475569", lineHeight: 1.4, fontWeight: 300 }}>
                                {cap}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </Reveal>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* Footer CTA Section */}
      <section style={{ background: T.ink, padding: "120px 0", textAlign: "center", position: "relative" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/secondary-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.10,
          pointerEvents: "none",
          zIndex: 1
        }} />
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div>
              <h2 style={{ fontFamily: T.sans, fontSize: "clamp(26px, 3.8vw, 42px)", fontWeight: 700, color: T.white, letterSpacing: "-0.02em", marginBottom: 20 }}>
                Interested in Partnering with Xencorp?
              </h2>
              <p style={{ fontFamily: T.sans, fontSize: 16, color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.7, fontWeight: 300, marginBottom: 40 }}>
                If your organization delivers complementary enterprise technology capabilities and serves similar markets, we'd welcome a conversation about strategic alignment.
              </p>
              
              <Link href="/contact" style={{
                display: "inline-block",
                padding: "16px 36px",
                background: "#16A34A",
                color: T.white,
                fontFamily: T.sans,
                fontSize: 14.5,
                fontWeight: 600,
                borderRadius: 100,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(22, 163, 74, 0.25)",
                letterSpacing: "0.01em",
                transition: "all 0.25s ease"
              }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.background = "#15803D";
                  target.style.boxShadow = "0 6px 24px rgba(22, 163, 74, 0.4)";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.background = "#16A34A";
                  target.style.boxShadow = "0 4px 20px rgba(22, 163, 74, 0.25)";
                }}
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
