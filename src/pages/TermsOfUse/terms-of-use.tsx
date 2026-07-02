"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import { motion } from "framer-motion";

export default function TermsOfUse() {
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
      <section style={{ position: "relative", minHeight: "50vh", display: "flex", alignItems: "center", overflow: "hidden", background: T.ink }}>
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

        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", paddingTop: 144, paddingBottom: 64, width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 800 }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 20 }}
            >
              <div style={{ width: 30, height: 1.5, background: T.teal, borderRadius: 2 }}/>
              <span style={{ fontSize: 11, fontWeight: 600, color: T.tealLight, textTransform: "uppercase", letterSpacing: "0.18em" }}>
                Legal & Compliance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: T.display,
                fontSize: "clamp(34px, 4.5vw, 52px)",
                fontWeight: 800,
                color: T.white,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                marginBottom: 20
              }}
            >
              Terms of Use
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: T.textOnDarkSecondary,
                marginBottom: 16,
                letterSpacing: "0.05em"
              }}
            >
              Last Updated: July 2, 2026
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: 16.5,
                fontWeight: 300,
                color: T.textOnDarkSecondary,
                lineHeight: 1.7,
                letterSpacing: "0.005em"
              }}
            >
              Welcome to the digital channels, custom software products, and technology consulting portals operated by Xencorp Solutions. By accessing or using our websites, software APIs, and proprietary platforms, you agree to comply with these Terms of Use.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ background: T.white, padding: "100px 0", color: T.ink }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 36px" }}>
          
          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>1. Acceptance of Terms</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                These Terms of Use govern all access to the systems, digital portals, and technological services of Xencorp Solutions. By engaging our platforms (including Smart Orion, SmartGRC, and Smart Crypto Exchange) or retaining our strategic consulting engineers, you agree to these legal conditions. If you are entering into these terms on behalf of a corporate entity, you warrant that you possess the necessary administrative authority.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>2. Intellectual Property Rights</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                All proprietary materials, software templates, layout algorithms, SVG graphics, and documentation displayed across our platforms are owned by Xencorp Solutions or licensed partners. 
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, fontSize: 15 }}>
                <li style={{ marginBottom: 8 }}><strong>Proprietary Platforms</strong>: We grant corporate subscribers a limited, non-exclusive, non-transferable license to access our platform dashboards (e.g. GRC registries, ERP ledgers) during the subscription term.</li>
                <li style={{ marginBottom: 8 }}><strong>Custom Deliverables</strong>: Intellectual property ownership for custom software engineered under a direct Statement of Work (SOW) is transferred to the respective client upon payment fulfillment, as governed by their specific services agreement.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>3. Acceptable System Usage</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                Users must engage our software interfaces and API gateways solely for lawful business operations. You agree not to:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, fontSize: 15 }}>
                <li style={{ marginBottom: 8 }}>Decompile, reverse-engineer, or attempt to extract source codes from our compiled binaries or cloud-hosted platforms.</li>
                <li style={{ marginBottom: 8 }}>Initiate automated denial-of-service (DoS) attempts, SQL injections, or security group bypasses targeting our API boundaries.</li>
                <li style={{ marginBottom: 8 }}>Utilize our networks or POS databases to store or transmit fraudulent transactional records or malicious payloads.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>4. Limitation of Liability</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                Xencorp Solutions provides software platforms and technical consulting on an "as-is" and "as-available" basis. Except as explicitly detailed in a signed Service Level Agreement (SLA), we make no warranties regarding continuous uptime or zero-latency integration. In no event shall Xencorp Solutions be liable for indirect, incidental, or consequential damages (including loss of corporate revenue, data corruption, or system downtime) arising from platform use.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>5. Indemnification</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                You agree to defend, indemnify, and hold harmless Xencorp Solutions, its executive directors, software developers, and system architects from and against any third-party claims, liabilities, or expenses (including legal fees) arising from your breach of these acceptable usage terms or unauthorized client access configurations.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>6. Service Modifications & Termination</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                We reserve the right to modify, restrict, or suspend access to our consulting portals or SaaS API registries to perform critical security patches, version updates, or database maintenance. Xencorp Solutions may terminate platform access for clients found to be violating acceptable usage standards, subject to notice terms defined in their corporate services agreements.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>7. Governing Law & Dispute Resolution</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                These Terms of Use are governed by and construed in accordance with the laws of Pakistan. Any legal disputes or claims arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts in Lahore, Pakistan.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      <Footer />
    </main>
  );
}
