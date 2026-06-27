export interface IndustryData {
  slug: string;
  title: string;
  badge: string;
  headline: string;
  overviewDescription: string;
  imageFolder: string;
  challenges: { title: string; desc: string }[];
  helps: { title: string; desc: string }[];
  recommendedServices: { name: string; href: string }[];
  recommendedProducts: { name: string; href: string }[];
  technologies: string[];
  solutionsWeBuild: string[];
  whyChooseUs: string;
  icon: string;
  shortDesc: string;
}

export const industriesList: IndustryData[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    badge: "HEALTHCARE",
    headline: "Deliver patient-first digital systems and secure clinical compliance.",
    overviewDescription: "The healthcare sector is undergoing a rapid transition toward distributed patient care, unified medical records, and automated clinical diagnostics. Meeting strict security guidelines (such as HIPAA and smart audit compliance) requires high-integrity software layers. XencorpSolutions engineers compliant platforms to modernize hospital clinical workflows, enable tele-health capabilities, and secure patient data pipelines.",
    imageFolder: "healthcare",
    challenges: [
      { title: "Clinical Workflow Bottlenecks", desc: "Monolithic administration software blocks instant access to patient records, causing delays in triage and outpatient care." },
      { title: "Data Security & Compliance", desc: "Rigorous healthcare regulations (HIPAA, GDPR) demand strict access logging, data encryption, and regular auditing." },
      { title: "Siloed Health Systems", desc: "Disconnected laboratory, pharmacy, and billing software prevents automated resource coordination and clinical insights." }
    ],
    helps: [
      { title: "Unified Hospital ERP", desc: "Deploy unified core systems linking pharmacy, laboratory, ward management, and patient billing under a single secure ledger." },
      { title: "Patient Care Portals", desc: "Build secure, mobile-friendly telehealth modules, scheduling grids, and real-time medical dashboard interfaces." },
      { title: "AI-Powered Diagnostics", desc: "Deploy private machine learning workloads for imaging analysis and real-time patient risk indicators." }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" },
      { name: "ERP Solutions & Business Automation", href: "/services/erp-solutions" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "IT Consultancy", href: "/services/it-consultancy" }
    ],
    recommendedProducts: [
      { name: "Smart Orion", href: "/products/smart-orion" },
      { name: "Smart GRC", href: "/products/smart-grc" }
    ],
    technologies: ["React", "Node.js", "Flutter", "Python", "PostgreSQL", "Odoo ERP", "Docker"],
    solutionsWeBuild: ["Patient Management", "Hospital ERP", "Appointment Systems", "Medical Dashboards", "Healthcare Analytics", "AI Diagnostics"],
    whyChooseUs: "XencorpSolutions combines deep knowledge of health data protocols with pre-audited compliance patterns, accelerating clinical software deployments while guaranteeing audit readiness.",
    icon: "⚕️",
    shortDesc: "Deliver next-gen patient care, secure hospital ERPs, and automated AI diagnostics."
  },
  {
    slug: "banking-financial-services",
    title: "Banking & Financial Services",
    badge: "FINANCE",
    headline: "Power institutional fintech systems with absolute security and sub-millisecond execution.",
    overviewDescription: "Modern finance demands bulletproof ledger integrity, automated risk assessments, and zero-trust security. Financial institutions must adapt to decentralized ledger technologies, open banking APIs, and continuous regulatory supervision (DORA, SEC, central bank compliance). XencorpSolutions deploys high-availability fintech infrastructures, digital banking networks, and automated risk control portals.",
    imageFolder: "banking",
    challenges: [
      { title: "Evolving Compliance Pressures", desc: "Meeting changing capital requirements, AML guidelines, and vendor risk auditing demands massive administrative overhead." },
      { title: "Legacy System Deadlocks", desc: "Monolithic core banking systems block the integration of real-time trading terminals and open banking APIs." },
      { title: "Sophisticated Fraud Vectors", desc: "Traditional rule-based fraud detection fails against modern automated spoofing and identity theft attacks." }
    ],
    helps: [
      { title: "Zero-Trust Banking Platforms", desc: "Deploy high-throughput core databases, user wallets, and digital account management consoles with bank-grade encryption." },
      { title: "Automated GRC & AML Audits", desc: "Integrate automated compliance checks and continuous evidence collection engines matching international financial standards." },
      { title: "Real-Time Risk Analytics", desc: "Deploy real-time transaction scanners, behavior profiling systems, and transaction verification ledgers." }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" },
      { name: "IT Consultancy", href: "/services/it-consultancy" },
      { name: "ERP Solutions & Business Automation", href: "/services/erp-solutions" }
    ],
    recommendedProducts: [
      { name: "Smart GRC", href: "/products/smart-grc" },
      { name: "Smart Crypto Exchange", href: "/products/smart-crypto-exchange" }
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Go"],
    solutionsWeBuild: ["Compliance Systems", "Digital Banking Portals", "Risk Management Suites", "Fraud Detection Engines", "Financial Analytics", "Secure Ledgers"],
    whyChooseUs: "We build secure systems with sub-millisecond matching capabilities, integrated MPC wallet custody, and multi-jurisdictional compliance architectures.",
    icon: "🏦",
    shortDesc: "Next-generation digital banking portals, automated compliance audits, and security systems."
  },
  {
    slug: "education",
    title: "Education",
    badge: "EDUCATION",
    headline: "Scale online classrooms, student administration, and digital campus resources.",
    overviewDescription: "Universities, corporate learning academies, and schools require unified digital environments. Modern educational institutions demand real-time virtual classrooms, comprehensive student information databases, and automated grading and examination pipelines. XencorpSolutions builds secure, cloud-scale learning networks and enterprise student administration portals.",
    imageFolder: "education",
    challenges: [
      { title: "Unreliable Learning Systems", desc: "Traditional LMS applications crash under peak exam loads, causing student frustration and data loss." },
      { title: "Disconnected Student Records", desc: "Managing admissions, transcripts, course scheduling, and billing across separate systems creates high administrative costs." },
      { title: "Lack of Virtual Integration", desc: "Siloed video streams and offline grading workflows block interactive and remote educational initiatives." }
    ],
    helps: [
      { title: "Scalable Student Portals", desc: "Create interactive, mobile-optimized portals for admissions, course registrations, and transcript tracking." },
      { title: "Modular LMS & Virtual Classes", desc: "Develop customizable course engines, interactive video classrooms, and automated online examination portals." },
      { title: "Campus Resource ERP", desc: "Unify institutional finance, asset management, and teacher schedules into a single dashboard." }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "Enterprise Web Development", href: "/services/web-development" }
    ],
    recommendedProducts: [
      { name: "Smart Orion", href: "/products/smart-orion" }
    ],
    technologies: ["React", "Node.js", "Flutter", "PostgreSQL", "AWS", "WebRTC", "Odoo ERP"],
    solutionsWeBuild: ["Learning Management Systems (LMS)", "Student Portals", "Online Examination Engines", "Campus ERP Databases", "Resource Allocation Consoles"],
    whyChooseUs: "Our education portals are built to support millions of concurrent connections, ensuring seamless live streaming, secure grading, and easy billing integrations.",
    icon: "🎓",
    shortDesc: "Modern Learning Management Systems, student portal networks, and campus-wide ERP solutions."
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    badge: "MANUFACTURING",
    headline: "Optimize production planning, automate warehouses, and track logistics.",
    overviewDescription: "Industrial operations require real-time resource visibility, automated procurement, and strict quality controls. Smart factories rely on sensor telemetry, automated inventory checks, and multi-branch supply chains. XencorpSolutions designs and deploys custom industrial planning software, IoT telemetry layers, and integrated multi-branch warehouse ERP systems.",
    imageFolder: "manufacturing",
    challenges: [
      { title: "Blind Spot Logistics", desc: "Lack of real-time inventory updates leads to material shortages, assembly line shutdowns, and missed deadlines." },
      { title: "Manual Quality Checking", desc: "Relying on physical inspection logs results in high defect escape rates and slow quality audits." },
      { title: "Uncoordinated Production Planning", desc: "Siloed communications between sales, procurement, and the factory floor cause material waste and overproduction." }
    ],
    helps: [
      { title: "Integrated Production ERP", desc: "Deploy centralized ERP platforms that track raw material orders, assembly status, and shipping logs." },
      { title: "Predictive Warehouse Controls", desc: "Integrate real-time inventory tracking, automatic barcode logging, and predictive reordering scripts." },
      { title: "Factory IoT Telemetry", desc: "Connect factory floor machinery logs to live dashboards, predicting maintenance intervals before failures occur." }
    ],
    recommendedServices: [
      { name: "ERP Solutions & Business Automation", href: "/services/erp-solutions" },
      { name: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" },
      { name: "IT Consultancy", href: "/services/it-consultancy" }
    ],
    recommendedProducts: [
      { name: "Smart Orion", href: "/products/smart-orion" }
    ],
    technologies: ["React", "Node.js", "Python", "Odoo ERP", "PostgreSQL", "Docker", "Kubernetes", "MQTT"],
    solutionsWeBuild: ["Production Planning Systems", "Inventory Trackers", "Factory Automation Telemetry", "Procurement Ledgers", "Supply Chain Control Rooms"],
    whyChooseUs: "XencorpSolutions simplifies complex industrial workflows, integrating multi-site material logistics under unified cloud ledgers to optimize factory operational efficiency.",
    icon: "⚙️",
    shortDesc: "Smart factory automation, resource planning, and integrated procurement systems."
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & E-commerce",
    badge: "RETAIL & E-COMMERCE",
    headline: "Scale omnichannel shopping, real-time inventory, and secure loyalty programs.",
    overviewDescription: "Modern retail spans physical storefronts, web checkouts, and mobile shopping apps. Synchronizing inventory logs, processing millions of secure transactions, and managing customer data across channels requires robust infrastructure. XencorpSolutions builds high-capacity e-commerce backends, responsive mobile applications, and integrated multi-site POS systems.",
    imageFolder: "retail",
    challenges: [
      { title: "Inventory Desynchronization", desc: "Selling items online that are out-of-stock in physical stores causes order cancellations and client dissatisfaction." },
      { title: "High-Volume Checkout Crashes", desc: "Monolithic e-commerce backends freeze during seasonal shopping spikes, resulting in lost sales and cart abandonment." },
      { title: "Disconnected Loyalty Channels", desc: "Failing to sync loyalty points and discount offers between online checkouts and physical cash registers." }
    ],
    helps: [
      { title: "Omnichannel POS & Cart Sync", desc: "Deploy unified databases syncing physical checkouts, web stores, and mobile apps in real-time." },
      { title: "High-Performance Checkout", desc: "Build modular checkout microservices, caching product listings, and routing orders securely under peak loads." },
      { title: "Customer Loyalty Ledgers", desc: "Implement secure CRM and loyalty databases that calculate and update reward points instantly." }
    ],
    recommendedServices: [
      { name: "E-Commerce Solutions", href: "/services/e-commerce-solutions" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "Enterprise Web Development", href: "/services/web-development" }
    ],
    recommendedProducts: [
      { name: "Smart Orion", href: "/products/smart-orion" }
    ],
    technologies: ["React", "Node.js", "Flutter", "PostgreSQL", "Docker", "AWS", "Redis"],
    solutionsWeBuild: ["Online Storefronts", "Omnichannel POS", "Inventory Sync Engines", "Customer CRM Portal", "Loyalty Program Managers"],
    whyChooseUs: "We build retail architectures that scale to handle massive transaction volumes, ensuring zero downtime during sales and immediate stock updates.",
    icon: "🛍️",
    shortDesc: "Omnichannel store experiences, scalable point-of-sale systems, and loyalty engines."
  },
  {
    slug: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    badge: "LOGISTICS",
    headline: "Optimize route telemetry, warehouse tracking, and multi-hub logistics.",
    overviewDescription: "Global supply chains rely on precision tracking, route planning, and fleet efficiency. Distributing items across cities and continents requires coordinated tracking, automated warehouse updates, and instant shipping status reporting. XencorpSolutions implements fleet management solutions, real-time telemetry systems, and automated warehouse routing platforms.",
    imageFolder: "logistics",
    challenges: [
      { title: "Inefficient Route Planning", desc: "Uncoordinated routing leads to high fuel costs, shipping delays, and underutilized cargo capacity." },
      { title: "Warehouse Bottlenecks", desc: "Manual scanning and slow placement logs slow down shipping containers, clogging distribution centers." },
      { title: "Lack of Shipment Visibility", desc: "Failing to provide clients and operators with real-time transit locations and temperature-control alerts." }
    ],
    helps: [
      { title: "Dynamic Fleet Telemetry", desc: "Deploy real-time vehicle GPS dashboards, engine diagnostics, and route optimization planning grids." },
      { title: "Smart Warehouse Managers", desc: "Integrate automatic inventory scanners, shelf organization consoles, and container loading maps." },
      { title: "End-to-End Tracking Portals", desc: "Build customer shipment portals with live tracking widgets, auto-generated ETA forecasts, and proof-of-delivery receipts." }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "ERP Solutions & Business Automation", href: "/services/erp-solutions" },
      { name: "IT Consultancy", href: "/services/it-consultancy" }
    ],
    recommendedProducts: [
      { name: "Smart Orion", href: "/products/smart-orion" }
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Google Maps API"],
    solutionsWeBuild: ["Fleet Telemetry Dashboards", "Warehouse Management Software", "Shipment Tracking Consoles", "Route Optimization Planners", "Logistics Analytics"],
    whyChooseUs: "Our logistics software connects hardware sensors, map interfaces, and ERP databases into a single, low-latency operating console.",
    icon: "🚚",
    shortDesc: "Real-time fleet telemetry, warehouse operations, and dynamic route planning."
  },
  {
    slug: "government-public-sector",
    title: "Government & Public Sector",
    badge: "GOVERNMENT",
    headline: "Build secure citizen portals, automated workflows, and audited infrastructure.",
    overviewDescription: "Public sector digital transformation requires strict security audits, high availability, and easy accessibility. Citizens expect fast online services, while administrators demand transparent records and automated case processing. XencorpSolutions constructs compliant portals, workflow engines, and secure government database connections.",
    imageFolder: "government",
    challenges: [
      { title: "Slow Citizen Services", desc: "In-person appointments and paper applications slow down business registration, permit issues, and tax filing." },
      { title: "Legacy Security Risks", desc: "Outdated databases hold citizen details without modern encryption, risking records leakage." },
      { title: "Manual Case Auditing", desc: "Reviewing permit records and regulatory files manually creates long backlogs and blocks transparency." }
    ],
    helps: [
      { title: "Secure Citizen Portals", desc: "Build accessible web platforms for online applications, utility payments, and digital document delivery." },
      { title: "Automated Case Managers", desc: "Implement department workflow software that routes cases, checks document signatures, and updates applications." },
      { title: "Compliance Audit Registries", desc: "Deploy immutable data logging systems, ensuring every data access event is cryptographically audited." }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "Enterprise Web Development", href: "/services/web-development" },
      { name: "IT Consultancy", href: "/services/it-consultancy" }
    ],
    recommendedProducts: [
      { name: "Smart GRC", href: "/products/smart-grc" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "Linux", "OpenSSL"],
    solutionsWeBuild: ["Citizen Identity Portals", "Department Case Managers", "Permit & License Engines", "Compliance Registry Ledgers", "Public Infrastructure Dashboards"],
    whyChooseUs: "XencorpSolutions designs public sector software with zero-trust accessibility, meeting national data residency laws and strict security requirements.",
    icon: "🏛️",
    shortDesc: "Secure citizen portal infrastructure, compliance audits, and workflow platforms."
  },
  {
    slug: "enterprise-organizations",
    title: "Enterprise Organizations",
    badge: "ENTERPRISE",
    headline: "Modernize legacy application stacks, integrate AI, and unify ERP operations.",
    overviewDescription: "Large-scale companies face the challenge of managing multiple office branches, disconnected databases, and legacy codebases. Unifying global financial ledgers, deploying private AI tools, and automating backend work requires custom engineering. XencorpSolutions provides core application modernization, central ERP deployments, and secure AI workloads.",
    imageFolder: "enterprise",
    challenges: [
      { title: "Fragmented Branch Operations", desc: "Siloed data repositories across branches prevent real-time resource coordination and financial updates." },
      { title: "Monolithic Application Debt", desc: "Legacy desktop software blocks development of API connections and cloud scaling initiatives." },
      { title: "Manual Workflow Bottlenecks", desc: "Staff wasting hours copying numbers between billing, inventory, and management systems." }
    ],
    helps: [
      { title: "Core Application Modernization", desc: "Rebuild legacy systems into modular cloud architectures without disrupting ongoing business operations." },
      { title: "Centralized ERP Deployment", desc: "Deploy global multi-branch resource dashboards, tracking assets, sales ledgers, and staff records." },
      { title: "Private AI Integrations", desc: "Deploy secure local language models for automated document search, support sorting, and data categorization." }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" },
      { name: "ERP Solutions & Business Automation", href: "/services/erp-solutions" },
      { name: "IT Consultancy", href: "/services/it-consultancy" }
    ],
    recommendedProducts: [
      { name: "Smart Orion", href: "/products/smart-orion" },
      { name: "Smart GRC", href: "/products/smart-grc" }
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Odoo ERP", "Docker", "Kubernetes", "AWS"],
    solutionsWeBuild: ["Global ERP Suites", "Workflow Automation Routers", "Private Enterprise Chatbots", "Core API Gateways", "Department Management Dashboards"],
    whyChooseUs: "We specialize in zero-downtime database migrations, safely connecting legacy corporate records to modern, automated web applications.",
    icon: "🏢",
    shortDesc: "Enterprise-grade core application modernization, AI integrations, and ERP software."
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    badge: "REAL ESTATE",
    headline: "Unify property leasing, transaction databases, and client communication.",
    overviewDescription: "Property management firms, real estate agencies, and development boards require clean, real-time listings, leasing pipelines, and financial tracking. Scaling transaction processing and documenting leases requires automated cloud networks. XencorpSolutions creates secure real estate management software, leasing pipelines, and customer booking systems.",
    imageFolder: "real-estate",
    challenges: [
      { title: "Scattered Leasing Logs", desc: "Tracking leases, repair tickets, and rent updates across spreadsheets leads to missed payments and double-bookings." },
      { title: "Complex Property Onboarding", desc: "Manual entry of listings, unit images, and compliance documents slows down agent sales." },
      { title: "Delayed Financial Reporting", desc: "Slow calculation of multi-property maintenance costs, taxes, and agent commission payouts." }
    ],
    helps: [
      { title: "Property Operations ERP", desc: "Deploy unified property management software tracking lease dates, maintenance tickets, and utility charges." },
      { title: "Smart Customer Portals", desc: "Build agent platforms, tenant portals, and booking systems with digital contract signing widgets." },
      { title: "Real Estate Analytics", desc: "Implement financial dashboards tracking rental yields, building expenses, and commission payouts." }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "Enterprise Web Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" }
    ],
    recommendedProducts: [
      { name: "Smart Orion", href: "/products/smart-orion" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Firebase"],
    solutionsWeBuild: ["Property Management Portals", "Agent CRM Suites", "Tenant Booking Interfaces", "Document Management systems", "Rental Yield Analytics"],
    whyChooseUs: "Our real estate solutions simplify multi-site asset operations, enabling real-time tenant communications and instant billing automation.",
    icon: "🏠",
    shortDesc: "End-to-end property administration, real-time booking engines, and document systems."
  },
  {
    slug: "startups",
    title: "Startups & Scaleups",
    badge: "STARTUPS & SCALEUPS",
    headline: "Accelerate MVP development, design scalable architectures, and deploy cloud infrastructure.",
    overviewDescription: "Growing startups must ship fast without sacrificing software design quality or scalability. Launching MVPs, choosing cloud hosting partners, and preparing codebases for high user numbers requires experienced support. XencorpSolutions partners with founders as an enterprise technology consulting group to build robust MVPs, design SaaS architectures, and configure cloud setups.",
    imageFolder: "startups",
    challenges: [
      { title: "Slow Time-to-Market", desc: "Complex development processes delay product launches, causing startups to miss market windows." },
      { title: "Unscalable Architectures", desc: "Building software that crashes during initial user spikes requires expensive, slow rewrites." },
      { title: "Security & Cloud Debt", desc: "Poor initial hosting configs open safety vulnerabilities and lead to high server bills." }
    ],
    helps: [
      { title: "Rapid MVP Execution", desc: "Develop clean, user-ready product iterations within tight schedules, using robust frameworks." },
      { title: "Modular SaaS Architectures", desc: "Design multi-tenant databases, API layers, and secure payment integrations ready to scale." },
      { title: "Automated Cloud Setup", desc: "Configure automated deploy pipelines, container hosting, and cost-efficient database scale rules." }
    ],
    recommendedServices: [
      { name: "Custom Software Development", href: "/services/custom-software-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "IT Consultancy", href: "/services/it-consultancy" },
      { name: "Enterprise Web Development", href: "/services/web-development" }
    ],
    recommendedProducts: [
      { name: "Smart Orion", href: "/products/smart-orion" },
      { name: "Smart GRC", href: "/products/smart-grc" }
    ],
    technologies: ["React", "Node.js", "Flutter", "PostgreSQL", "Docker", "AWS", "Firebase", "TypeScript"],
    solutionsWeBuild: ["SaaS Multi-tenant Platforms", "Mobile Applications", "Cloud Deploy Pipelines", "Product Consultation Roadmaps", "API Integration Systems"],
    whyChooseUs: "XencorpSolutions combines quick startup execution speed with enterprise code quality, building setups ready to scale from day one.",
    icon: "🚀",
    shortDesc: "Rapid MVP development, cloud architecture scaling, and strategic product consulting."
  }
];
