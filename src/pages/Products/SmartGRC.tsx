"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import CTASection from "../../sections/home/CTASection";

// Sections
import ProductHero from "../../sections/products/ProductHero";
import BusinessChallenges from "../../sections/products/BusinessChallenges";
import PlatformOverview from "../../sections/products/PlatformOverview";
import CoreModules from "../../sections/products/CoreModules";
import PlatformCapabilities from "../../sections/products/PlatformCapabilities";
import BusinessBenefits from "../../sections/products/BusinessBenefits";
import IntegrationEcosystem from "../../sections/products/IntegrationEcosystem";
import SecurityArchitecture from "../../sections/products/SecurityArchitecture";
import IndustriesServed from "../../sections/products/IndustriesServed";
import ImplementationJourney from "../../sections/products/ImplementationJourney";
import FAQSection from "../../sections/products/FAQSection";

const challenges = [
  {
    title: "Overwhelming Compliance Overhead",
    desc: "Keeping pace with shifting frameworks like ISO 27001, GDPR, and DORA creates huge administration workloads and constant risk of human error."
  },
  {
    title: "Fragmented Risk Visibility",
    desc: "Maintaining risks in siloed spreadsheets blocks executive decision makers from seeing real-time vulnerabilities across corporate operations."
  },
  {
    title: "Manual Evidence Gathering",
    desc: "Relying on staff to screenshot directories and copy database logs for annual audits creates major delays and audit cycle costs."
  }
];

const outcomes = [
  "Accelerate audit preparation times by up to 60%.",
  "Consolidate multiple compliance frameworks into a single controls database.",
  "Guarantee continuous compliance evidence for external auditors."
];

const capabilities = [
  "Continuous Control Scanning",
  "Centralized Risk Registry",
  "Dynamic Audit Workflows",
  "Security Framework Mapping",
  "Automated Evidence Vault",
  "Executive GRC Dashboard"
];

const modules = [
  {
    title: "Risk Assessment & Mitigation",
    desc: "Calculate corporate risk scores using customizable risk matrices. Smart GRC uses predictive models to highlight vulnerabilities.",
    benefit: "Predicts vulnerability vectors before audit cycles.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path d="M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 16v-6m0-4v-2m6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: "Continuous Audit Automation",
    desc: "Connect directly to directories and cloud services to harvest configuration and access logs automatically.",
    benefit: "Eliminates months of manual snapshot gathering.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
      </svg>
    )
  },
  {
    title: "Regulatory Framework Mapper",
    desc: "Cross-map single security controls across SOC 2, HIPAA, and ISO standards so you audit once and comply everywhere.",
    benefit: "Saves up to 40% in external auditor verification fees.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: "Vendor & Third-Party Risk",
    desc: "Dispatch secure vendor audits. Smart GRC calculates third-party compliance risk profiles automatically.",
    benefit: "Mitigates security breaches in supply chain APIs.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
      </svg>
    )
  }
];

const capabilitiesGrid = [
  {
    title: "Continuous Scanning Engine",
    desc: "Automates daily audits of system settings, database access logs, and network configs to confirm compliance controls.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1"/><path d="M12 3v3m0 12v3m-9-9h3m12 0h3"/></svg>
  },
  {
    title: "Dynamic GRC Registry",
    desc: "Centralizes all risks, policies, audit files, and internal control mappings into one cohesive database.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6M9 13h6M9 17h6"/></svg>
  },
  {
    title: "Automated Workflows",
    desc: "Automatically route policy updates for employee approval and assign compliance tasks based on timelines.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 1 1 21.27 8H18"/></svg>
  },
  {
    title: "Immutable Evidence Log",
    desc: "Provides cryptographically signed, timestamped compliance evidence ready for audit validation.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z"/></svg>
  }
];

const benefits = [
  {
    metricValue: "60%",
    metricLabel: "Time Saved",
    title: "Reduced Audit Load",
    desc: "By continuous control scanning and gathering evidence automatically, you eliminate the audit crunch."
  },
  {
    metricValue: "0",
    metricLabel: "Failed Audits",
    title: "Bulletproof Readiness",
    desc: "Daily compliance testing ensures security gaps are identified and patched months before external audits."
  },
  {
    metricValue: "100%",
    metricLabel: "Visibility",
    title: "Executive Dashboards",
    desc: "Provides compliance and threat posture metrics in a clean visual layout to present directly to boards."
  }
];

const integrations = [
  {
    name: "Okta / Azure AD",
    category: "IAM",
    desc: "Sync user directories, confirm permissions, and enforce secure employee controls.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
  },
  {
    name: "AWS / Google Cloud",
    category: "Infrastructure",
    desc: "Run automated security group checks and scan system configurations.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M3 15a9 9 0 0 1 15-7.14M21 15a9 9 0 0 0-15-7.14M12 15v6m-3-3h6"/></svg>
  },
  {
    name: "Jira / ServiceNow",
    category: "Ticketing",
    desc: "Raise system repair tickets automatically for failed compliance controls.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
  },
  {
    name: "Slack / Teams",
    category: "Alerts",
    desc: "Send real-time alerts to dev channels when policy thresholds are breached.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
  }
];

const industries = [
  {
    name: "Banking & Capital Markets",
    desc: "Resolve strict audits, secure capital compliance, and compile detailed regulatory risk filings.",
    icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M3 21h18M3 10h18M3 6l9-4 9 4M4 10v11m4-11v11m4-11v11m4-11v11m4-11v11"/></svg>
  },
  {
    name: "Healthcare & MedTech",
    desc: "Secure health records to meet HIPAA requirements, managing data authorization logs seamlessly.",
    icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M4.5 12h15M12 4.5v15"/></svg>
  },
  {
    name: "Government & Defense",
    desc: "Adhere to NIST guidelines and federal compliance structures with isolated private cloud topologies.",
    icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M9 12l2 2 4-4m5 .5c0 7.142-7.5 11.25-8 11.5-.5-.25-8-4.358-8-11.5V5l8-3 8 3v7.5z"/></svg>
  }
];

const journeySteps = [
  {
    title: "Diagnostic Discovery",
    desc: "We analyze your risk registry, identify current frameworks, and document target security controls."
  },
  {
    title: "Platform Provisioning",
    desc: "Deploy GRC instances and customize administrative controls to align with organization groups."
  },
  {
    title: "Controls Configuration",
    desc: "Construct mapping rules linking controls to target standards like SOC 2, HIPAA, or ISO 27001."
  },
  {
    title: "Ecosystem Integrations",
    desc: "Connect AWS API pipelines, user directory databases, and tracking software for automated evidence retrieval."
  },
  {
    title: "Mock Audit Diagnostics",
    desc: "Execute a simulated regulatory audit run to verify dashboard visualizations and evidence export layers."
  },
  {
    title: "Go-Live & Onboarding",
    desc: "Onboard risk management departments, system admins, and executive directors with targeted training."
  }
];

const faqs = [
  {
    q: "How does Smart GRC reduce audit overhead?",
    a: "By continuously scanning server logs and API endpoints to verify controls, Smart GRC removes the need for manual evidence collection and spreadsheet updates."
  },
  {
    q: "What frameworks are supported?",
    a: "Out of the box, we support SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS, NIST, and DORA configurations."
  },
  {
    q: "Can we run this on a private cloud?",
    a: "Yes. Smart GRC can be deployed on our secure managed cloud or inside your company's own AWS/Azure/on-premise environments for total data control."
  }
];

export default function SmartGRC() {
  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", background: T.ink }}>
      <style>{fontLink}</style>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        a,button{cursor:pointer;}
      `}</style>
      
      <Navigation />
      
      <ProductHero
        id="smart-grc"
        badge="GRC"
        name="Smart GRC"
        headline="AI-Powered Governance, Risk & Compliance"
        description="Centralize corporate policy enforcement, automate continuous security audits, monitor vendor risk profiles, and streamline reporting for frameworks including SOC 2, ISO 27001, GDPR, and HIPAA."
        primaryCTA="Request Consultation"
        secondaryCTA="Explore Capabilities"
        accentColor={T.teal}
      />
      
      <BusinessChallenges
        challenges={challenges}
        accentColor={T.teal}
      />

      <PlatformOverview
        id="smart-grc"
        name="Smart GRC"
        solution="Smart GRC replaces manual spreadsheets with real-time audit logs and automated control checking. It helps risk managers identify vulnerability vectors, document mitigation strategies, and automatically compile board-ready evidence logs."
        audience="Ideal for Banking, Insurance, Healthcare, FinTech, and Fortune 500 Enterprises facing complex regulatory audits and strict security frameworks."
        outcomes={outcomes}
        capabilities={capabilities}
        accentColor={T.teal}
      />

      <CoreModules
        modules={modules}
        accentColor={T.teal}
      />

      <PlatformCapabilities
        capabilities={capabilitiesGrid}
        accentColor={T.teal}
      />

      <BusinessBenefits
        benefits={benefits}
        accentColor={T.teal}
      />

      <IntegrationEcosystem
        integrations={integrations}
        accentColor={T.teal}
      />

      <SecurityArchitecture
        accentColor={T.teal}
      />

      <IndustriesServed
        industries={industries}
        accentColor={T.teal}
      />

      <ImplementationJourney
        journeySteps={journeySteps}
        accentColor={T.teal}
      />

      <FAQSection
        faqs={faqs}
        accentColor={T.teal}
      />

      <CTASection />
      
      <Footer />
    </main>
  );
}
