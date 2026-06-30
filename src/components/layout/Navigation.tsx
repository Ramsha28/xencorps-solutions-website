// ─── Navigation ───────────────────────────────────────────────────────────────
"use client";
import { T } from "../../styles/theme";
import { motion, AnimatePresence } from "framer-motion";
import xencorpsLogo from "../../assets/logos/xencorps logo.png";
import { useEffect, useState } from "react";
import Link from "next/link";

const practiceAreas = [
  {
    title: "Software Engineering",
    links: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "Enterprise Web Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" }
    ]
  },
  {
    title: "Enterprise Solutions",
    links: [
      { name: "ERP Solutions & Business Automation", href: "/services/erp-solutions" },
      { name: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" }
    ]
  },
  {
    title: "Commerce & Digital",
    links: [
      { name: "E-Commerce Solutions", href: "/services/e-commerce-solutions" }
    ]
  },
  {
    title: "Infrastructure & Consulting",
    links: [
      { name: "Data Center Development & IT Infrastructure", href: "/services/data-center-development" },
      { name: "IT Consultancy", href: "/services/it-consultancy" }
    ]
  }
];

const productsList = [
  {
    name: "Smart Orion",
    slug: "smart-orion",
    badge: "ERP",
    accent: T.teal,
    desc: "Unify multi-branch resource planning, warehouse logistics, POS, and finance ledgers.",
    icon: (
      <svg width="20" height="20" fill="none" stroke={T.teal} viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    name: "Smart GRC",
    slug: "smart-grc",
    badge: "GRC",
    accent: T.teal,
    desc: "Automate continuous compliance audits, enforce policies, and monitor vendor risk.",
    icon: (
      <svg width="20" height="20" fill="none" stroke={T.teal} viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
      </svg>
    )
  },
  {
    name: "Smart Crypto Exchange",
    slug: "smart-crypto-exchange",
    badge: "FinTech",
    accent: T.teal,
    desc: "Institutional digital asset trading with sub-millisecond matching and MPC custody.",
    icon: (
      <svg width="20" height="20" fill="none" stroke={T.teal} viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];


function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<"services" | "products" | null>(null);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "products" | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (hoveredLink) {
      setActiveMenu(hoveredLink);
    } else if (!isMenuHovered) {
      const t = setTimeout(() => {
        setActiveMenu(null);
      }, 150);
      return () => clearTimeout(t);
    }
  }, [hoveredLink, isMenuHovered]);

  const links = [
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
  ];

  const isNavLight = scrolled || activeMenu;
  const textColor = isNavLight ? "#0F172A" : T.white;
  const secondaryTextColor = isNavLight ? "#4a6947" : T.textOnDarkSecondary;
  const hoverColor = "#16A34A";
  const logoSubColor = isNavLight ? "#000000" : "white";

  return (
    <motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 66,
        background: isNavLight ? "rgba(255, 255, 255, 0.98)" : "transparent",
        backdropFilter: isNavLight ? "blur(18px)" : "none",
        borderBottom: isNavLight ? `1px solid ${T.mistDim}` : "1px solid transparent",
        boxShadow: isNavLight ? "0 2px 24px rgba(0,0,0,0.05)" : "none",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 102 }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
              onMouseEnter={() => setHoveredLink(null)}
        >
          <img
            src={xencorpsLogo.src}
            alt="Xencorp Solutions logo"
            style={{
              height: 54,
              width: "auto",
              objectFit: "contain",
              flexShrink: 0,
              display: "block",
              background: "transparent",
            }}
          />
          <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: 16.5, color: "green", letterSpacing: "-0.01em", transition: "color 0.3s" }}>
            Xencorp<span style={{ color: logoSubColor, transition: "color 0.3s" }}>Solutions</span>
          </span>
        </Link>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {links.map(l => {
            const isTrigger = l.name === "Services" || l.name === "Products";
            const triggerType = l.name === "Services" ? "services" : l.name === "Products" ? "products" : null;
            const isCurrentActive = activeMenu === triggerType;
            return (
              <Link
                key={l.name}
                href={l.href}
                style={{ fontFamily: T.sans, fontSize: 13.5, fontWeight: 500, color: isTrigger && isCurrentActive ? hoverColor : textColor, textDecoration: "none", letterSpacing: "0.005em", transition: "color 0.2s" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = hoverColor;
                  if (isTrigger && triggerType) {
                    setHoveredLink(triggerType);
                  } else {
                    setHoveredLink(null);
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isTrigger || !isCurrentActive) {
                    (e.currentTarget as HTMLAnchorElement).style.color = textColor;
                  }
                  setHoveredLink(null);
                }}
                onClick={() => {
                  setHoveredLink(null);
                  setIsMenuHovered(false);
                }}
              >
                {l.name}
              </Link>
            );
          })}
          <Link href="/contact" style={{
            padding: "9px 20px",
            background: "#16A34A", color: T.white,
            fontFamily: T.sans, fontSize: 13, fontWeight: 600,
            borderRadius: 100, textDecoration: "none",
            boxShadow: "0 4px 12px rgba(22, 163, 74, 0.2)",
            letterSpacing: "0.01em",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.background = "#15803D";
              target.style.boxShadow = "0 4px 18px rgba(22, 163, 74, 0.35)";
              setHoveredLink(null);
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.background = "#16A34A";
              target.style.boxShadow = "0 4px 12px rgba(22, 163, 74, 0.2)";
            }}
          >
            Schedule Consultation
          </Link>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
            style={{
              position: "absolute",
              top: 66,
              left: 0,
              right: 0,
              background: "rgba(255, 255, 255, 0.99)",
              backdropFilter: "blur(20px)",
              borderBottom: `1px solid ${T.mistDim}`,
              boxShadow: "0 20px 48px rgba(0, 0, 0, 0.08)",
              padding: "40px 0 48px",
              zIndex: 100,
            }}
          >
            {activeMenu === "services" && (
              <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", display: "grid", gridTemplateColumns: "1fr 3fr", gap: 56 }}>
                {/* Left Column */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: `1px solid ${T.mistDim}`, paddingRight: 40 }}>
                  <div>
                    <h3 style={{ fontFamily: T.sans, fontSize: 18, fontWeight: 700, color: "#30ad55", marginBottom: 12, letterSpacing: "-0.015em" }}>Engineering & Consulting</h3>
                    <p style={{ fontFamily: T.sans, fontSize: 13, color: "#475569", lineHeight: 1.6, fontWeight: 300, marginBottom: 24 }}>
                      We design, build, and scale custom digital products, modular AI systems, and robust enterprise platforms that drive operational ROI.
                    </p>
                  </div>
                  <Link
                    href="/services"
                    onClick={() => {
                      setHoveredLink(null);
                      setIsMenuHovered(true);
                    }}
                    style={{
                      alignSelf: "flex-start",
                      padding: "9px 20px",
                      background: "#0F172A",
                      color: T.white,
                      fontFamily: T.sans,
                      fontSize: 12.5,
                      fontWeight: 600,
                      borderRadius: 100,
                      textDecoration: "none",
                      boxShadow: "0 4px 12px rgba(54, 190, 93, 0.12)",
                      transition: "background 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#6ec687"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#0f2a12"}
                  >
                    View All Services
                  </Link>
                </div>

                {/* Right Grid Practice Areas */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                  {practiceAreas.map((col) => (
                    <div key={col.title}>
                      <h4 style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", color: "#16A34A", letterSpacing: "0.15em", marginBottom: 16 }}>
                        {col.title}
                      </h4>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                        {col.links.map((link) => (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              onClick={() => {
                                setHoveredLink(null);
                                setIsMenuHovered(false);
                              }}
                              style={{
                                fontFamily: T.sans,
                                fontSize: 13,
                                color: "#475569",
                                textDecoration: "none",
                                fontWeight: 300,
                                lineHeight: 1.3,
                                display: "block",
                                transition: "color 0.2s, transform 0.2s"
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#16A34A";
                                e.currentTarget.style.transform = "translateX(3px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#475569";
                                e.currentTarget.style.transform = "translateX(0)";
                              }}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeMenu === "products" && (
              <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 36px", display: "grid", gridTemplateColumns: "1fr 3fr", gap: 56 }}>
                {/* Left Column */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: `1px solid ${T.mistDim}`, paddingRight: 40 }}>
                  <div>
                    <h3 style={{ fontFamily: T.sans, fontSize: 18, fontWeight: 700, color: "#209c49", marginBottom: 12, letterSpacing: "-0.015em" }}>Enterprise Platforms</h3>
                    <p style={{ fontFamily: T.sans, fontSize: 13, color: "#475569", lineHeight: 1.6, fontWeight: 300, marginBottom: 24 }}>
                      Deploy proprietary software systems engineered to unify branch operations, automate compliance standards, and power high-frequency asset trading.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => {
                      setHoveredLink(null);
                      setIsMenuHovered(false);
                    }}
                    style={{
                      alignSelf: "flex-start",
                      padding: "9px 20px",
                      background: "#0F172A",
                      color: T.white,
                      fontFamily: T.sans,
                      fontSize: 12.5,
                      fontWeight: 600,
                      borderRadius: 100,
                      textDecoration: "none",
                      boxShadow: "0 4px 12px rgba(15, 23, 42, 0.12)",
                      transition: "background 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#5fd372"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "#0F172A"}
                  >
                    Request Consultation
                  </Link>
                </div>

                {/* Right Grid Products */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                  {productsList.map((prod) => (
                    <motion.div
                      key={prod.name}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        background: T.mistDim,
                        border: "1px solid rgba(0, 0, 0, 0.04)",
                        borderRadius: 12,
                        padding: 24,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${prod.accent}55`;
                        e.currentTarget.style.boxShadow = `0 10px 24px ${prod.accent}14`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.04)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <Link
                        href={`/products/${prod.slug}`}
                        onClick={() => {
                          setHoveredLink(null);
                          setIsMenuHovered(false);
                        }}
                        style={{ textDecoration: "none", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}
                      >
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                            <div style={{
                              width: 40, height: 40,
                              borderRadius: 8,
                              background: `${prod.accent}10`,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              border: `1px solid ${prod.accent}20`
                            }}>
                              {prod.icon}
                            </div>
                            <span style={{
                              fontFamily: T.sans,
                              fontSize: 9,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              color: prod.accent,
                              background: `${prod.accent}18`,
                              padding: "4px 10px",
                              borderRadius: 100,
                              letterSpacing: "0.08em"
                            }}>
                              {prod.badge}
                            </span>
                          </div>

                          <h4 style={{ fontFamily: T.sans, fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 8, letterSpacing: "-0.01em" }}>
                            {prod.name}
                          </h4>

                          <p style={{ fontFamily: T.sans, fontSize: 12.5, color: "#475569", lineHeight: 1.5, fontWeight: 300, marginBottom: 16 }}>
                            {prod.desc}
                          </p>
                        </div>

                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontFamily: T.sans,
                          fontSize: 12,
                          fontWeight: 600,
                          color: prod.accent,
                          transition: "gap 0.2s"
                        }}
                          className="prod-card-arrow"
                        >
                          <span>Explore Platform</span>
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navigation;