"use client";
import { motion } from "framer-motion";
import { T } from "../../styles/theme";
import Reveal from "../../components/common/Reveal";

export default function CTASection() {
  return (
    <section style={{ background:T.ink, padding:"96px 0", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, opacity:0.02, backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)", backgroundSize:"26px 26px" }}/>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px", position:"relative" }}>
        <style>{`
          @media (max-width: 991px) {
            .cta-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:56, alignItems:"center" }} className="cta-grid">
          <Reveal>
            <div>
              <p style={{ fontFamily:T.sans, fontSize:11, fontWeight:600, color:T.tealLight, textTransform:"uppercase", letterSpacing:"0.16em", marginBottom:18 }}>Ready to Begin</p>
              <h2 style={{ fontFamily:T.sans, fontSize:"clamp(28px,3.4vw,46px)", fontWeight:700, color:T.white, letterSpacing:"-0.025em", lineHeight:1.1, marginBottom:20 }}>
                Let's Build Your Enterprise Transformation Strategy
              </h2>
              <p style={{ fontFamily:T.sans, fontSize:16, color:"rgba(255,255,255,0.72)", lineHeight:1.76, fontWeight:300 }}>
                Whether you need to modernise operations, deploy AI, implement ERP, or build a multi-year digital transformation roadmap — Xencorpsolutions is ready to engage at the executive level.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
              {[
                { label:"Schedule a Consultation", primary:true, href:"/contact" },
                { label:"Explore Our Platforms",   primary:false, href:"/products" },
              ].map(btn => (
                <motion.a key={btn.label} href={btn.href} whileHover={{ scale:1.02 }}
                  style={{
                    padding:"14px 30px", borderRadius:100,
                    fontFamily:T.sans, fontSize:14, fontWeight: btn.primary ? 700 : 600,
                    background: btn.primary ? T.teal : "transparent",
                    color: T.white,
                    border: btn.primary ? "none" : "1.5px solid rgba(255,255,255,0.42)",
                    textDecoration:"none", display:"inline-block",
                    textAlign:"center",
                    boxShadow: btn.primary ? `0 4px 18px ${T.tealGlowStrong}` : "none",
                    transition:"all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (btn.primary) {
                      e.currentTarget.style.background = T.tealLight;
                    } else {
                      e.currentTarget.style.borderColor = T.white;
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (btn.primary) {
                      e.currentTarget.style.background = T.teal;
                    } else {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.42)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >{btn.label}</motion.a>
              ))}
              <p style={{ fontFamily:T.sans, fontSize:12, color:"rgba(255,255,255,0.46)", marginTop:6 }}>Global engagements · Lahore, Pakistan</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}