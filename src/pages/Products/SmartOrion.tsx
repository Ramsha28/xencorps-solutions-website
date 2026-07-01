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

const accent = "#00A370"; // Emerald Green for Orion

const challenges = [
  {
    title: "Siloed Operations & Ledgers",
    desc: "Maintaining separate warehouse logs, cashier records, and financial books leads to operational errors, data duplication, and month-end closing delays."
  },
  {
    title: "Inefficient Stock & Storage",
    desc: "Relying on manual stock counts leads to frequent store deficits or capital tied up in slow-moving overstock products."
  },
  {
    title: "Procurement Coordination Gaps",
    desc: "Relying on manual supplier purchase orders results in delivery blockages and supply delays."
  }
];

const outcomes = [
  "Reduce inventory carrying overhead by up to 25%.",
  "Centralize multi-branch financial accounting into real-time reporting ledgers.",
  "Automate supply chain procurement with predictive logic."
];

const capabilities = [
  "Multi-Location Inventory Sync",
  "Point of Sale Checkout Engine",
  "Central General Ledger",
  "Automated Supplier Reordering",
  "Predictive Sales Analytics",
  "SaaS Integration Adapters"
];

const modules = [
  {
    title: "ERP Core Ledger",
    desc: "Unify multi-branch books, tax rules, and currency adjustments in one real-time ledger.",
    benefit: "Closes financial books in hours instead of days.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    )
  },
  {
    title: "Warehouse Inventory",
    desc: "Track stock routes, product batches, and shelf locations with barcode support.",
    benefit: "Reduces inventory write-offs by up to 30%.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: "Automated Procurement",
    desc: "Set min-max levels that automatically generate supplier purchase orders when breached.",
    benefit: "Eliminates warehouse stock deficits.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
      </svg>
    )
  },
  {
    title: "Point of Sale (POS)",
    desc: "Omnichannel checkout client with offline transaction caching and custom pricing rules.",
    benefit: "Ensures checkouts continue during network outages.",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <rect x="2" y="3" width="20" height="12" rx="2" />
        <path d="M2 19h20M6 19v-4M10 19v-4M14 19v-4M18 19v-4" />
      </svg>
    )
  }
];

const capabilitiesGrid = [
  {
    title: "Instant Multi-Branch Sync",
    desc: "Propagates inventory adjustments and sales registry data across every store location in seconds.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4-4m-4 4l4 4"/></svg>
  },
  {
    title: "Predictive Demand Engine",
    desc: "Leverages machine learning sales diagnostics to model seasonal stock needs.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
  },
  {
    title: "Supplier Portal APIs",
    desc: "Gives suppliers dashboard access to check inventory deficits and schedule shipping.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
  },
  {
    title: "Granular Controls (RBAC)",
    desc: "Define distinct access rules for POS cashiers, inventory managers, and central accountants.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z"/></svg>
  }
];

const benefits = [
  {
    metricValue: "35%",
    metricLabel: "Cost Reduction",
    title: "Reduced Inventory Cost",
    desc: "Eliminates capital tied up in slow-moving items by using real-time demand signals."
  },
  {
    metricValue: "99.9%",
    metricLabel: "Accuracy",
    title: "Ledger Reconciliation",
    desc: "Ditch manual accounting errors between localized registers and central ledgers."
  },
  {
    metricValue: "10x",
    metricLabel: "Closer Speed",
    title: "Accelerated Closing",
    desc: "Complete month-end audits in hours by automating data transfer pipelines."
  }
];

const integrations = [
  {
    name: "SAP Core",
    category: "ERP Link",
    desc: "Sync logistics and warehouse pipelines directly into global SAP systems.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/></svg>
  },
  {
    name: "Stripe Payment",
    category: "Gateway",
    desc: "Process transactions, local bank links, and mobile payment wallets securely.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h.01M11 15h.01"/></svg>
  },
  {
    name: "Odoo Connector",
    category: "ERP Link",
    desc: "Coordinate stock adjustments and custom assembly pipelines.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="9"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
  },
  {
    name: "Developer APIs",
    category: "REST",
    desc: "Fully open endpoint system allowing custom CRM or legacy webstore links.",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
  }
];

const industries = [
  {
    name: "Manufacturing & Assembly",
    desc: "Track raw material purchases, schedule assembly cycles, and map warehouse inventory routes.",
    icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0V11m0 0h4m0 0v10m-4-10V7m4 0v4m-4-4h4"/></svg>
  },
  {
    name: "Logistics & Transport",
    desc: "Coordinate warehouse dispatches, track fleet delivery steps, and manage stock replenishments.",
    icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM5 17h2m4 0h4m2 0h2m-13-4h15v-6H5v6z"/></svg>
  },
  {
    name: "Retail & E-Commerce",
    desc: "Sync local POS registers, customer order files, and shipping logistics into a unified core.",
    icon: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
  }
];

const journeySteps = [
  {
    title: "Diagnostic Discovery",
    desc: "We review your ledger structures, analyze supplier pipelines, and map inventory warehouse layouts."
  },
  {
    title: "Platform Provisioning",
    desc: "Deploy Orion server instances and register cashier branches, registers, and warehouse zones."
  },
  {
    title: "Catalog Mapping",
    desc: "Upload catalog data, assign barcode categories, and set min-max automated reorder points."
  },
  {
    title: "Gateway Integrations",
    desc: "Hook up card readers, bank APIs, shipping platforms, and supplier databases."
  },
  {
    title: "Reconciliation Test Close",
    desc: "Run a simulated monthly close cycle to verify automated accounting and tax calculation pipelines."
  },
  {
    title: "Onboarding & Go-Live",
    desc: "Conduct cashier training workshops, install barcode tablets, and launch live operations."
  }
];

const faqs = [
  {
    q: "How does the offline POS mode function?",
    a: "Cashiers execute checkouts, issue discounts, and print invoices locally. As soon as the network connection is restored, cache files automatically sync to the central ERP."
  },
  {
    q: "Can we sync third-party webstores?",
    a: "Yes. Smart Orion provides REST APIs and pre-built integration modules to sync inventories and customer orders with shop platforms like Shopify."
  },
  {
    q: "Is multi-currency supported?",
    a: "Yes. The ERP ledger calculates real-time conversion rates matching tax and administrative records."
  },
  {
    q: "How long does a typical Smart Orion implementation take?",
    a: "The implementation timeline ranges from 12 to 24 weeks depending on the number of branches, size of warehouses, and complexity of legacy database migrations. We execute deployments in phases, beginning with inventory centralization."
  },
  {
    q: "Can Smart Orion integrate with hardware barcode scanners and card readers?",
    a: "Yes. Smart Orion POS supports standard serial, USB, and network-based barcode scanners, label printers, cash drawers, and major card reader terminals via local network sync drivers."
  },
  {
    q: "What measures ensure the safety of our offline transactions?",
    a: "Offline sales are cached in a secure client-side SQLite database utilizing local device encryption. A background worker periodically attempts to handshake with the primary ERP gateway, performing automated cryptographic reconciliation upon connection."
  }
];

export default function SmartOrion() {
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
        id="smart-orion"
        badge="ERP"
        name="Smart Orion"
        headline="Enterprise ERP, POS & Business Automation"
        description="Unify multi-branch resource planning, warehouse logistics, point of sale transactions, automated procurement pipelines, and finance ledgers in one secure cloud environment."
        primaryCTA="Request Consultation"
        secondaryCTA="Explore Modules"
        accentColor={accent}
      />
      
      <BusinessChallenges
        challenges={challenges}
        accentColor={accent}
      />

      <PlatformOverview
        id="smart-orion"
        name="Smart Orion"
        solution="Smart Orion provides a unified backend linking POS registers directly to centralized warehouse inventories and ledger books. Real-time sales telemetry triggers automated procurement logic, reducing storage overhead while ensuring zero stock-outs."
        audience="Ideal for Multi-Branch Retailers, Logistics Networks, Manufacturers, and Enterprise Corporations requiring instant data synchronization across locations."
        outcomes={outcomes}
        capabilities={capabilities}
        accentColor={accent}
      />

      <CoreModules
        modules={modules}
        accentColor={accent}
      />

      <PlatformCapabilities
        capabilities={capabilitiesGrid}
        accentColor={accent}
      />



      <IntegrationEcosystem
        integrations={integrations}
        accentColor={accent}
      />

      <SecurityArchitecture
        accentColor={accent}
      />

      <IndustriesServed
        industries={industries}
        accentColor={accent}
      />

      <ImplementationJourney
        journeySteps={journeySteps}
        accentColor={accent}
      />

      <FAQSection
        faqs={faqs}
        accentColor={accent}
      />

      <CTASection />
      
      <Footer />
    </main>
  );
}
