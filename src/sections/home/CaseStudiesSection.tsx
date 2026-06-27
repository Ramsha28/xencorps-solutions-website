
"use client";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const caseStudies = [
  { industry:"Financial Services",   challenge:"A regional financial institution needed to unify risk, compliance, and audit operations across 14 business units while meeting ISO 27001 and GDPR obligations.", solution:"Deployed SmartGRC with custom framework mapping, automated controls testing, and real-time executive dashboards providing governance-wide visibility.", metric:"60%",  ml:"Compliance Workload Reduction", tag:"SmartGRC",              color:T.teal },
  { industry:"Retail & Distribution",challenge:"A multi-branch retail chain operating 80+ locations lacked centralised inventory visibility, causing stock discrepancies and inefficient procurement.", solution:"Implemented Smart Orion ERP and POS across all branches with real-time inventory sync, automated reordering, and unified financial reporting.", metric:"35%",  ml:"Procurement Cost Reduction",    tag:"Smart Orion",            color:"#00A370" },
  { industry:"Enterprise Technology",challenge:"A government-affiliated technology organisation required scalable, audit-ready cryptocurrency infrastructure for regulated digital asset operations.", solution:"Deployed Smart Crypto Exchange with full KYC/AML integration, institutional trading console, and immutable compliance logging.", metric:"<1ms", ml:"Order Matching Latency",         tag:"Smart Crypto Exchange", color:"#7C3AED" },
];

export default function CaseStudiesSection() {
  return (
    <section style={{ background:T.ink, padding:"112px 0" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <Reveal>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:60, flexWrap:"wrap", gap:16 }}>
            <div>
              <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Case Studies</p>
              <h2 style={{ fontFamily:T.sans, fontSize:"clamp(28px,3.4vw,46px)", fontWeight:700, color:T.textPrimary, letterSpacing:"-0.025em", lineHeight:1.1 }}>Measurable Impact for<br/>Enterprise Clients</h2>
            </div>
            <a href="#" style={{ fontFamily:T.sans, fontSize:13.5, fontWeight:600, color:T.teal, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6 }}>
              All Case Studies <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"rgba(0,128,128,0.08)" }}>
          {caseStudies.map((cs,i) => (
            <Reveal key={cs.industry} delay={i*0.1}>
              <motion.div whileHover={{ background:T.inkSoft }}
                style={{ background:T.ink, padding:"44px 38px", transition:"background 0.3s", display:"flex", flexDirection:"column", height:"100%" }}
              >
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:26 }}>
                  <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:600, color:cs.color, textTransform:"uppercase", letterSpacing:"0.14em" }}>{cs.industry}</span>
                  <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:600, color:cs.color, background:`${cs.color}18`, padding:"3px 10px", borderRadius:100 }}>{cs.tag}</span>
                </div>
                <div style={{ marginBottom:18 }}>
                  <div style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, color:T.textMuted, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:7 }}>Challenge</div>
                  <p style={{ fontFamily:T.sans, fontSize:13.5, color:T.textSecondary, lineHeight:1.72, fontWeight:300 }}>{cs.challenge}</p>
                </div>
                <div style={{ marginBottom:26 }}>
                  <div style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, color:T.textMuted, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:7 }}>Solution</div>
                  <p style={{ fontFamily:T.sans, fontSize:13.5, color:T.textSecondary, lineHeight:1.72, fontWeight:300 }}>{cs.solution}</p>
                </div>
                <div style={{ marginTop:"auto", paddingTop:22, borderTop:"1px solid rgba(0,128,128,0.13)" }}>
                  <div style={{ fontFamily:T.sans, fontSize:44, fontWeight:700, color:cs.color, letterSpacing:"-0.04em", lineHeight:1 }}>{cs.metric}</div>
                  <div style={{ fontFamily:T.sans, fontSize:12, color:T.textMuted, marginTop:4, fontWeight:400 }}>{cs.ml}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}