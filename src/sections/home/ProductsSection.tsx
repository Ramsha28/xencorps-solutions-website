"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const products = [
  { name:"SmartGRC",              badge:"GRC",     accent:T.teal,    tagline:"Enterprise Governance, Risk & Compliance Platform",    desc:"An AI-powered GRC ecosystem that centralises risk management, compliance monitoring, audit operations, cybersecurity governance, and executive reporting. Built for ISO 27001, GDPR, HIPAA, PCI DSS, NIST, DORA, and SOC 2 environments.", caps:["Risk Management","Audit Management","Compliance Monitoring","Policy Management","Vendor Risk","Cybersecurity Governance","Business Continuity","AI Governance"], stat:{v:"60%",l:"Compliance Workload Reduction"} },
  { name:"Smart Orion",           badge:"ERP",     accent:"#00A370", tagline:"Enterprise ERP, POS & Business Automation Platform",   desc:"A next-generation business platform combining ERP, POS, inventory, accounting, AI analytics, and multi-branch operations. Built for enterprises and retail organisations that need real-time visibility across every business unit and location.", caps:["ERP Core","Point of Sale","Inventory Management","Accounting & Finance","Procurement","Multi-Branch Ops","Business Reporting","AI Analytics"], stat:{v:"35%",l:"Procurement Cost Reduction"} },
  { name:"Smart Crypto Exchange", badge:"FINTECH", accent:"#7C3AED", tagline:"Enterprise Cryptocurrency Trading Platform",           desc:"Institutional-grade digital asset trading with sub-millisecond matching, full KYC/AML integration, and immutable compliance logging. Built for regulated operations and institutional-grade trading desks.", caps:["Sub-ms Trading Engine","Wallet Infrastructure","Market Data Streaming","KYC / AML Compliance","Administration Console","Institutional Trading","Developer APIs","Security & Audit Logs"], stat:{v:"<1ms",l:"Order Matching Latency"} },
];

export default function ProductsSection() {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section style={{ background: T.mist, padding: "112px 0" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px" }}>
        <Reveal>
          <div style={{ marginBottom: 52 }}>
            <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Proprietary Platforms</p>
            <h2 style={{ fontFamily:T.sans, fontSize:"clamp(28px, 3.4vw, 46px)", fontWeight:700, color:T.ink, letterSpacing:"-0.025em", lineHeight:1.1 }}>
              Enterprise Products Built<br/>by Xencorpsolutions
            </h2>
          </div>
        </Reveal>

        {/* Tabs */}
        <div style={{ display:"flex", gap:10, marginBottom:36, flexWrap:"wrap" }}>
          {products.map((pr, i) => (
            <button key={pr.name} onClick={() => setActive(i)} style={{
              padding:"10px 22px", borderRadius:100,
              fontFamily:T.sans, fontSize:13.5, fontWeight:600, cursor:"pointer",
              border:"1.5px solid",
              borderColor: active===i ? pr.accent : "rgba(0,128,128,0.18)",
              background: active===i ? pr.accent : "transparent",
              color: active===i ? T.white : T.tealDim,
              transition:"all 0.24s",
            }}>{pr.name}</button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.36}}
            style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", border:`1px solid ${T.mistDim}`, background:T.white, overflow:"hidden" }}
          >
            <div style={{ padding:"52px 56px", borderRight:`1px solid ${T.mistDim}` }}>
              <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, color:p.accent, background:`${p.accent}14`, padding:"4px 13px", borderRadius:100, letterSpacing:"0.13em", textTransform:"uppercase", display:"inline-block", marginBottom:22 }}>{p.badge}</span>
              <h3 style={{ fontFamily:T.sans, fontSize:32, fontWeight:700, color:T.ink, letterSpacing:"-0.025em", marginBottom:10 }}>{p.name}</h3>
              <p style={{ fontFamily:T.sans, fontSize:14, color:T.tealDim, fontWeight:500, marginBottom:18 }}>{p.tagline}</p>
              <p style={{ fontFamily:T.sans, fontSize:14.5, color:"#2E4A4A", lineHeight:1.78, marginBottom:34, fontWeight:300 }}>{p.desc}</p>
              <div style={{ display:"inline-flex", alignItems:"center", gap:18, padding:"16px 22px", background:T.mist, borderRadius:10, marginBottom:34 }}>
                <span style={{ fontFamily:T.sans, fontSize:36, fontWeight:700, color:p.accent, letterSpacing:"-0.04em" }}>{p.stat.v}</span>
                <span style={{ fontFamily:T.sans, fontSize:13, color:"#2E4A4A", lineHeight:1.4, maxWidth:110 }}>{p.stat.l}</span>
              </div>
              <div style={{ display:"flex", gap:12 }}>
                <a href="#" style={{ padding:"12px 26px", background:p.accent, color:T.white, fontFamily:T.sans, fontSize:13.5, fontWeight:600, borderRadius:100, textDecoration:"none" }}>View Platform</a>
                <a href="#" style={{ padding:"12px 26px", border:`1.5px solid ${T.mistDim}`, color:"#2E4A4A", fontFamily:T.sans, fontSize:13.5, fontWeight:500, borderRadius:100, textDecoration:"none" }}>Request Demo</a>
              </div>
            </div>
            <div style={{ padding:"52px 44px", background:T.mist }}>
              <p style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, color:T.textMuted, textTransform:"uppercase", letterSpacing:"0.14em", marginBottom:22 }}>Core Capabilities</p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0 }}>
                {p.caps.map((c, i) => (
                  <motion.div key={c} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:i*0.05}}
                    style={{ display:"flex", alignItems:"center", gap:10, padding:"11px 0", borderBottom:`1px solid ${T.mistDim}` }}
                  >
                    <div style={{ width:6, height:6, borderRadius:"50%", background:p.accent, flexShrink:0 }}/>
                    <span style={{ fontFamily:T.sans, fontSize:13, color:T.ink, fontWeight:500 }}>{c}</span>
                  </motion.div>
                ))}
              </div>
              <div style={{ marginTop:28, border:`1px solid ${T.mistDim}`, background:T.white, borderRadius:10, padding:"18px 20px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
                  <div style={{ width:7, height:7, borderRadius:"50%", background:p.accent }}/>
                  <span style={{ fontFamily:T.sans, fontSize:10, fontWeight:600, color:T.textMuted, textTransform:"uppercase", letterSpacing:"0.1em" }}>{p.name} Live Dashboard</span>
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
                  {[72,45,91].map((v,i) => (
                    <div key={i} style={{ background:T.mist, borderRadius:8, padding:"12px" }}>
                      <div style={{ fontFamily:T.sans, fontSize:20, fontWeight:700, color:T.ink, marginBottom:6 }}>{v}%</div>
                      <div style={{ height:4, background:T.mistDim, borderRadius:4, overflow:"hidden", marginBottom:6 }}>
                        <motion.div initial={{width:0}} animate={{width:`${v}%`}} transition={{duration:1.2, delay:0.2+i*0.15}} style={{ height:"100%", borderRadius:4, background:p.accent }}/>
                      </div>
                      <div style={{ fontFamily:T.sans, fontSize:10, color:T.textMuted }}>
                        {["Governance","Risk Score","Compliance"][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}