"use client";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const insights = [
  { cat:"AI & Governance",        t:"Why Enterprises Are Moving from Reactive Compliance to AI-Driven Governance", e:"The shift from periodic audit cycles to continuous, AI-powered governance intelligence is redefining how enterprise risk leaders operate.", r:"6 min read" },
  { cat:"ERP Modernization",      t:"The Case for Unified ERP, POS, and AI Analytics in Multi-Branch Operations", e:"Disconnected systems create operational blind spots. How enterprise organisations are consolidating into a single intelligent platform.", r:"5 min read" },
  { cat:"Digital Transformation", t:"Building a Digital Transformation Roadmap That Executives Can Execute",      e:"Transformation fails when it stays in IT. The organisations succeeding are those embedding it into executive strategy from day one.", r:"7 min read" },
  { cat:"Infrastructure",         t:"Hybrid Cloud Architecture: The Strategy Enterprise Organisations Are Adopting", e:"Neither fully cloud nor fully on-premise, hybrid infrastructure gives enterprises the control, scalability, and resilience modern ops demand.", r:"5 min read" },
];

export default function InsightsSection() {
  return (
    <section style={{ background:T.mist, padding:"112px 0" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <Reveal>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:52, flexWrap:"wrap", gap:16 }}>
            <div>
              <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Insights</p>
              <h2 style={{ fontFamily:T.sans, fontSize:"clamp(26px,3.2vw,44px)", fontWeight:700, color:T.ink, letterSpacing:"-0.025em", lineHeight:1.1 }}>Thought Leadership from the<br/>Enterprise Technology Front</h2>
            </div>
            <a href="#" style={{ fontFamily:T.sans, fontSize:13.5, fontWeight:600, color:T.teal, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6 }}>
              All Insights <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:T.mistDim }}>
          {insights.map((ins,i) => (
            <Reveal key={ins.t} delay={i*0.07}>
              <motion.a href="#" whileHover={{ background:"#FFFFFF" }}
                style={{ display:"block", background:T.mist, padding:"34px 28px", textDecoration:"none", transition:"background 0.28s", height:"100%", boxSizing:"border-box" }}
              >
                <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.13em", marginBottom:13, display:"block" }}>{ins.cat}</span>
                <h3 style={{ fontFamily:T.sans, fontSize:15, fontWeight:600, color:T.ink, lineHeight:1.42, marginBottom:13, letterSpacing:"-0.01em" }}>{ins.t}</h3>
                <p style={{ fontFamily:T.sans, fontSize:13, color:"#3D5E5E", lineHeight:1.72, marginBottom:18, fontWeight:300 }}>{ins.e}</p>
                <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                  <span style={{ fontFamily:T.sans, fontSize:11.5, color:T.textMuted }}>{ins.r}</span>
                  <svg width="12" height="12" fill="none" stroke={T.teal} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}