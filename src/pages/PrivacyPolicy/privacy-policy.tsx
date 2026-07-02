"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
              Privacy Policy
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
              At Xencorp Solutions, we are committed to protecting the privacy, security, and integrity of your corporate and personal data. This Privacy Policy details how we collect, process, and safeguard information across our enterprise software, platform services, and consulting channels.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ background: T.white, padding: "100px 0", color: T.ink }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 36px" }}>
          
          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>1. Information We Collect</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                Xencorp Solutions collects information necessary to deliver enterprise IT services, build custom platforms, and handle direct client relationships. This includes:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, fontSize: 15 }}>
                <li style={{ marginBottom: 8 }}><strong>Client Contact Data</strong>: Names, business email addresses, phone numbers, and physical corporate addresses provided during service onboarding or inquiries.</li>
                <li style={{ marginBottom: 8 }}><strong>Operational Telemetry</strong>: System usage metrics, server log access summaries, and API request statistics generated from our SaaS platforms like Smart Orion and SmartGRC.</li>
                <li style={{ marginBottom: 8 }}><strong>Secure Authentication Identifiers</strong>: Client security tokens, Role-Based Access Control (RBAC) scopes, and system certificates required for authorized API gateways.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>2. How We Use Your Information</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                All collected data is processed strictly to maintain systems security and operational excellence. We utilize information to:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, fontSize: 15 }}>
                <li style={{ marginBottom: 8 }}>Provision, monitor, and scale enterprise databases and software platforms.</li>
                <li style={{ marginBottom: 8 }}>Maintain system health, run compliance audits, and identify server latency bottlenecks.</li>
                <li style={{ marginBottom: 8 }}>Handle executive billing requests, support tickets, and service level agreement (SLA) reviews.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>3. Data Protection & Security</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                Security is core to our operational philosophy. Xencorp Solutions deploys defense-in-depth protection mechanisms, including:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, fontSize: 15 }}>
                <li style={{ marginBottom: 8 }}><strong>Encryption Standards</strong>: All customer data is encrypted in transit using TLS 1.3 and at rest using AES-256 GCM configurations.</li>
                <li style={{ marginBottom: 8 }}><strong>Strict RBAC Controls</strong>: Internal access to developer systems is restricted using role-based configurations linked directly to audited directory services.</li>
                <li style={{ marginBottom: 8 }}><strong>Continuous Auditing</strong>: Active monitoring for access anomalies and configuration deviations via GRC security mapping structures.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>4. Cookies & Analytics</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                We use secure, localized session tokens and basic analytics tools to monitor website performance and authenticate registered administrators. We do not engage in cross-site tracking or compile advertising profiles. Users can configure their browsers to decline session cookies, although this may limit administrative portal capabilities.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>5. Third-Party Sharing Policies</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                Xencorp Solutions does not sell, lease, or monetize customer database details to third-party brokers. We share operational metrics solely with cloud infrastructure partners (e.g., AWS, Azure) directly involved in hosting and scaling our system microservices, subject to strict confidentiality agreements.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>6. Your Rights & Control</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                Depending on your jurisdiction, you have specific rights regarding your corporate database records, including the right to request:
              </p>
              <ul style={{ paddingLeft: 20, marginBottom: 16, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, fontSize: 15 }}>
                <li style={{ marginBottom: 8 }}>Access to the personal data files we hold.</li>
                <li style={{ marginBottom: 8 }}>Correction of outdated or incomplete information.</li>
                <li style={{ marginBottom: 8 }}>Complete deletion of records, subject to legal compliance or billing requirements.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 16, letterSpacing: "-0.015em" }}>7. Contact Our Compliance Office</h2>
              <p style={{ fontSize: 15, color: "#2E4A4A", lineHeight: 1.76, fontWeight: 300, marginBottom: 16 }}>
                If you have questions, compliance audits, or requests regarding this Privacy Policy, please contact our data Protection officer at:
              </p>
              <div style={{ fontFamily: T.sans, fontSize: 14, color: T.ink, lineHeight: 1.7, fontWeight: 600 }}>
                <div>Xencorp Solutions</div>
                <div>Lahore, Pakistan</div>
                <div>Email: compliance@xencorpsolutions.com</div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      <Footer />
    </main>
  );
}
