"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Reveal from "../../components/common/Reveal";
import ImagePlaceholder from "../../components/common/ImagePlaceholder";

const faq = [
  { 
    q: "How soon can we initiate our discovery phase?", 
    a: "Typically, we can kick off discovery workshops within 3 to 5 business days of signing an NDA. This initial phase involves senior analysts and solutions architects mapping out workflows and target infrastructure." 
  },
  { 
    q: "What is your approach to NDAs and intellectual property?", 
    a: "We maintain standard enterprise NDA protocols. Upon execution of our engagement agreements, all custom source code, databases, design artifacts, and deployment files remain 100% proprietary to the client." 
  },
  { 
    q: "Do you offer post-deployment support and operations maintenance?", 
    a: "Yes. Every enterprise project includes a standard 90-day warranty window. Following this, clients can choose from our structured SLA support plans, which cover security auditing, software patching, database backup systems, and cloud scaling." 
  },
  { 
    q: "Can you integrate with existing legacy ERPs and compliance platforms?", 
    a: "Absolutely. Our engineering teams specialize in building robust API wrappers, event pipelines (via Kafka/RabbitMQ), and custom modules to interface with systems like SAP, Oracle, and Odoo." 
  },
  {
    q: "What size budgets do you typically work with for custom systems?",
    a: "Our standard corporate development contracts typically range from $25,000 to $100,000+, depending on project scale, database integration complexity, and timeline requirements. For ongoing strategic advisory and maintenance, we offer retainer agreements starting at $3,500/month."
  },
  {
    q: "What information is required to receive a formal proposal?",
    a: "We request high-level project goals, target user counts, database integration endpoints, compliance frameworks, and existing visual wireframes if available. Following our initial Discovery call, we will provide a comprehensive, itemized proposal within 3-5 business days."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Custom Software Development",
    budget: "$25,000 – $50,000",
    message: ""
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "Custom Software Development",
        budget: "$25,000 – $50,000",
        message: ""
      });
    }, 1800);
  };

  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", background: T.ink }}>
      <style>{fontLink}</style>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        a,button{cursor:pointer;}
        input,textarea,select{outline:none;font-family:inherit;}
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
                Connect With Us
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
              Initiate Your Digital<br />
              <em style={{ fontStyle: "italic", color: T.tealLight }}>Transformation</em> Journey.
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
              Our senior consultants and systems engineers are ready to analyze your enterprise requirements, provide architecture roadmaps, and propose scalable solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form and Contact Info */}
      <section style={{ background: T.white, padding: "112px 0", color: T.ink }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 76, alignItems: "start" }} className="hero-grid-layout">
            
            {/* Left Column: Office info & Inquiry guidelines */}
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              <Reveal>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: T.navy, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Inquiries</p>
                  <h2 style={{ fontSize: 32, fontWeight: 700, color: T.ink, letterSpacing: "-0.025em", marginBottom: 18, lineHeight: 1.15 }}>Office Headquarters</h2>
                  <p style={{ fontSize: 14.5, color: "#2E4A4A", lineHeight: 1.72, fontWeight: 300, marginBottom: 24 }}>
                    Xencorpsolutions is headquartered in Lahore, Pakistan. We coordinate global engagements and direct-client delivery pipelines from our central technology hub.
                  </p>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 28 }}>
                    <div style={{ border: `1px solid ${T.mistDim}`, background: T.mist, padding: 24, borderRadius: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: 8 }}>Primary Hub</span>
                      <h4 style={{ fontSize: 15, fontWeight: 600, color: T.ink, marginBottom: 6 }}>Lahore, Pakistan</h4>
                      <p style={{ fontSize: 13, color: T.textSecondaryLight, fontWeight: 300 }}>Enterprise software house & consultancy delivery core.</p>
                    </div>

                    <div style={{ border: `1px solid ${T.mistDim}`, background: T.mist, padding: 24, borderRadius: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: 8 }}>Operational Hours</span>
                      <h4 style={{ fontSize: 15, fontWeight: 600, color: T.ink, marginBottom: 6 }}>Mon – Sat</h4>
                      <p style={{ fontSize: 13, color: T.textSecondaryLight, fontWeight: 300 }}>9:00 AM – 7:00 PM PKT<br />(4:00 AM – 2:00 PM GMT)</p>
                    </div>
                  </div>

                  <div>
                    <ImagePlaceholder
                      aspectRatio="16/9"
                      label="Lahore HQ Office & Map Blueprint"
                      sublabel="Target: 16:9 illustration mapping the physical location, secure networking gateways, and server rack coordinates of our strategic hub"
                      iconType="globe"
                      mode="light"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: T.ink, marginBottom: 18, borderBottom: `1px solid ${T.mistDim}`, paddingBottom: 10 }}>Strategic Channels</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                      <span style={{ fontWeight: 600, color: T.textSecondaryLight }}>Client Relations:</span>
                      <span style={{ fontFamily: T.sans, color: T.teal, fontWeight: 500 }}>info@xencorpsolutions.com</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                      <span style={{ fontWeight: 600, color: T.textSecondaryLight }}>Enterprise RFP / Sales:</span>
                      <span style={{ fontFamily: T.sans, color: T.teal, fontWeight: 500 }}>sales@xencorpsolutions.com</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                      <span style={{ fontWeight: 600, color: T.textSecondaryLight }}>Careers & Talent:</span>
                      <span style={{ fontFamily: T.sans, color: T.teal, fontWeight: 500 }}>careers@xencorpsolutions.com</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              
            </div>

            {/* Right Column: Inquiry Form */}
            <Reveal delay={0.15}>
              <div style={{ border: `1px solid ${T.mistDim}`, background: T.white, padding: "48px 44px", borderRadius: 10, boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: T.ink, marginBottom: 6, letterSpacing: "-0.015em" }}>Enterprise Intake Form</h3>
                <p style={{ fontSize: 13.5, color: T.textSecondaryLight, marginBottom: 32, fontWeight: 300 }}>Submit your details and an advisor will contact you shortly.</p>

                {formStatus === "success" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ padding: "36px 0", textAlign: "center" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(0,163,112,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                      <svg width="28" height="28" fill="none" stroke="#00A370" viewBox="0 0 24 24" strokeWidth={2}><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h4 style={{ fontSize: 18, fontWeight: 600, color: T.ink, marginBottom: 8 }}>Inquiry Submitted</h4>
                    <p style={{ fontSize: 13.5, color: T.textSecondaryLight, lineHeight: 1.6, fontWeight: 300 }}>Thank you for reaching out. A systems engineer or partner advisor will contact you within 24 business hours.</p>
                    <button onClick={() => setFormStatus("idle")} style={{ marginTop: 24, padding: "9px 20px", border: `1.5px solid ${T.mistDim}`, borderRadius: 100, background: "transparent", color: T.tealDim, fontSize: 12.5, fontWeight: 600 }}>Send Another Message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>Full Name</label>
                        <input
                          type="text" required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{ padding: "11px 16px", border: `1.5px solid ${T.mistDim}`, borderRadius: 6, fontSize: 13.5, color: T.ink, background: T.mist }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>Company Name</label>
                        <input
                          type="text" required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          style={{ padding: "11px 16px", border: `1.5px solid ${T.mistDim}`, borderRadius: 6, fontSize: 13.5, color: T.ink, background: T.mist }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>Email Address</label>
                        <input
                          type="email" required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{ padding: "11px 16px", border: `1.5px solid ${T.mistDim}`, borderRadius: 6, fontSize: 13.5, color: T.ink, background: T.mist }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>Phone Number</label>
                        <input
                          type="tel" required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{ padding: "11px 16px", border: `1.5px solid ${T.mistDim}`, borderRadius: 6, fontSize: 13.5, color: T.ink, background: T.mist }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>Project Type</label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          style={{ padding: "11px 12px", border: `1.5px solid ${T.mistDim}`, borderRadius: 6, fontSize: 13, color: T.ink, background: T.mist }}
                        >
                          <option>Custom Software Development</option>
                          <option>Enterprise Web Development</option>
                          <option>Mobile App Development</option>
                          <option>AI & Intelligent Systems</option>
                          <option>ERP Solutions</option>
                          <option>Data Center Consultancy</option>
                          <option>IT Consultancy</option>
                        </select>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <label style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>Target Budget</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          style={{ padding: "11px 12px", border: `1.5px solid ${T.mistDim}`, borderRadius: 6, fontSize: 13, color: T.ink, background: T.mist }}
                        >
                          <option>$10,000 – $25,000</option>
                          <option>$25,000 – $50,000</option>
                          <option>$50,000 – $100,000</option>
                          <option>$100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>Message / Requirements Brief</label>
                      <textarea
                        rows={4} required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ padding: "12px 16px", border: `1.5px solid ${T.mistDim}`, borderRadius: 6, fontSize: 13.5, color: T.ink, background: T.mist, resize: "none" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      style={{
                        padding: "13px 24px",
                        background: "#16A34A", color: T.white,
                        border: "none", borderRadius: 100,
                        fontSize: 13.5, fontWeight: 600,
                        cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                        boxShadow: `0 4px 18px rgba(22,163,74,0.25)`, marginTop: 10,
                        transition: "background 0.2s"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#15803D"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "#16A34A"; }}
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <svg style={{ animation: "spin 1s linear infinite" }} width="16" height="16" fill="none" viewBox="0 0 24 24"><circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                          Processing Inquiry...
                        </>
                      ) : (
                        <>
                          Submit Inquiry Brief
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section style={{ background: T.mist, padding: "112px 0", color: T.ink }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
          <Reveal style={{ marginBottom: 60 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, color: T.navy, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 14 }}>Clarification</p>
              <h2 style={{ fontSize: "clamp(26px, 3.2vw, 42px)", fontWeight: 700, color: T.ink, letterSpacing: "-0.025em", lineHeight: 1.15 }}>Consultation FAQs</h2>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faq.map((item, idx) => (
              <Reveal key={item.q} delay={idx * 0.05}>
                <div style={{ background: T.white, border: `1px solid ${T.mistDim}`, borderRadius: 8, overflow: "hidden" }}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    style={{
                      width: "100%", padding: "24px 30px", border: "none", background: "transparent",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      textAlign: "left", cursor: "pointer"
                    }}
                  >
                    <span style={{ fontSize: 15, fontWeight: 600, color: T.ink }}>{item.q}</span>
                    <span style={{ fontSize: 20, fontWeight: 300, color: T.teal, transition: "transform 0.2s", transform: activeFaq === idx ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: "hidden" }}
                      >
                        <p style={{ padding: "0 30px 24px", fontSize: 14, color: T.textSecondaryLight, lineHeight: 1.7, fontWeight: 300 }}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
