import { T } from "../../styles/theme";
import Link from "next/link";

const cols = [
  {
    h: "Services",
    links: [
      { name: "Software Engineering", href: "/services/custom-software-development" },
      { name: "AI & Intelligent Systems", href: "/services/artificial-intelligence" },
      { name: "ERP Solutions", href: "/services/erp-solutions" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Data Center & Infrastructure", href: "/services/data-center-consulting" },
      { name: "IT Consulting", href: "/services/it-consulting" },
    ]
  },
  {
    h: "Products",
    links: [
      { name: "SmartGRC", href: "/products/smart-grc" },
      { name: "Smart Orion", href: "/products/smart-orion" },
      { name: "Smart Crypto Exchange", href: "/products/smart-crypto-exchange" }
    ]
  },
  {
    h: "Industries",
    links: [
      { name: "Banking & Finance", href: "/industries/finance" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Government", href: "/industries/government" },
      { name: "Education", href: "/industries/education" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Retail & E-commerce", href: "/industries/retail" },
      { name: "Logistics", href: "/industries/logistics" }
    ]
  },
  {
    h: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" }
    ]
  }
];

export default function Footer() {
  return (
    <footer style={{ background:T.ink, borderTop:"1px solid rgba(0,128,128,0.09)", padding:"76px 0 28px" }}>
      <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 36px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr 1fr 1fr", gap:44, marginBottom:60 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
              <div style={{ width:32, height:32, background:T.teal, borderRadius:7, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg viewBox="0 0 24 24" fill="none" width="17" height="17"><path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="white" strokeWidth="1.6" fill="none"/><circle cx="12" cy="12" r="2.8" fill="white" opacity="0.92"/></svg>
              </div>
              <span style={{ fontFamily:T.sans, fontWeight:700, fontSize:15, color:T.white }}>Xencorp<span style={{ color:T.tealLight }}>solutions</span></span>
            </div>
            <p style={{ fontFamily:T.sans, fontSize:13, color:T.textMuted, lineHeight:1.72, marginBottom:16, fontWeight:300 }}>Enterprise Technology Consulting & Digital Transformation.<br/>Lahore, Pakistan.</p>
            <div style={{ fontFamily:T.sans, fontSize:12.5, color:T.textMuted, lineHeight:1.9, fontWeight:300 }}>
              <div>info@xencorpsolutions.com</div>
              <div>Mon – Sat, 9:00 AM – 7:00 PM PKT</div>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.h}>
              <h4 style={{ fontFamily:T.sans, fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.15em", color:T.textMuted, marginBottom:16 }}>{col.h}</h4>
              <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                {col.links.map(l => (
                  <li key={l.name} style={{ marginBottom:9 }}>
                    <Link href={l.href} style={{ fontFamily:T.sans, fontSize:13, color:"rgba(122,172,172,0.52)", textDecoration:"none", fontWeight:300, transition:"color 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = T.textPrimary; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(122,172,172,0.52)"; }}
                    >{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:22, borderTop:"1px solid rgba(0,128,128,0.09)" }}>
          <p style={{ fontFamily:T.sans, fontSize:12, color:"rgba(74,122,122,0.65)", fontWeight:300 }}>© 2026 Xencorpsolutions. All Rights Reserved.</p>
          <div style={{ display:"flex", gap:22 }}>
            {["Privacy Policy","Terms of Use","Security"].map(l => (
              <a key={l} href="#" style={{ fontFamily:T.sans, fontSize:12, color:"rgba(74,122,122,0.65)", textDecoration:"none", fontWeight:300 }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}