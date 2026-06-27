"use client";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

const list = [
  {n:"Banking",icon:"🏦"},{n:"Financial Services",icon:"📈"},{n:"Healthcare",icon:"⚕️"},
  {n:"Government",icon:"🏛️"},{n:"Education",icon:"🎓"},{n:"Manufacturing",icon:"⚙️"},
  {n:"Retail",icon:"🛍️"},{n:"Telecom",icon:"📡"},{n:"Logistics",icon:"🚚"},
];

export default function IndustriesSection() {
  return (
    <section style={{ background:T.ink, padding:"104px 0" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <Reveal>
          <div style={{ marginBottom:52 }}>
            <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.teal, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:14 }}>Industries</p>
            <h2 style={{ fontFamily:T.sans, fontSize:"clamp(26px,3.2vw,44px)", fontWeight:700, color:T.textPrimary, letterSpacing:"-0.025em", lineHeight:1.1 }}>Serving the World's<br/>Most Demanding Sectors</h2>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(9,1fr)", gap:1, background:"rgba(0,128,128,0.08)" }}>
          {list.map((ind,i) => (
            <Reveal key={ind.n} delay={i*0.05}>
              <motion.div whileHover={{ background:T.inkSoft }}
                style={{ background:T.ink, padding:"28px 10px", display:"flex", flexDirection:"column", alignItems:"center", gap:9, cursor:"pointer", transition:"background 0.25s" }}
              >
                <span style={{ fontSize:24 }}>{ind.icon}</span>
                <span style={{ fontFamily:T.sans, fontSize:11, fontWeight:500, color:T.textMuted, textAlign:"center", lineHeight:1.3 }}>{ind.n}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div style={{ marginTop:1, background:"rgba(0,128,128,0.04)", border:"1px solid rgba(0,128,128,0.09)", borderTop:"none", padding:"26px 30px" }}>
            <p style={{ fontFamily:T.sans, fontSize:13.5, color:T.textSecondary, lineHeight:1.72, fontWeight:300 }}>
              Our consulting engagements and platform deployments are tailored to industry-specific compliance frameworks, operational requirements, and digital transformation maturity — whether you're a regulated bank, a government agency, or a global retailer.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}