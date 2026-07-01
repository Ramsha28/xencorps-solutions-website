import ServiceDetail from "../../../pages/Services/ServiceDetail";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [
    { id: "custom-software-development" },
    { id: "web-development" },
    { id: "mobile-app-development" },
    { id: "ai-intelligent-systems" },
    { id: "erp-solutions" },
    { id: "e-commerce-solutions" },
    { id: "data-center-development" },
    { id: "it-consultancy" }
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  
  const titleMap: Record<string, string> = {
    "custom-software-development": "Custom Software Development Services",
    "web-development": "Enterprise Web Development Services",
    "mobile-app-development": "Mobile App Development Services",
    "ai-intelligent-systems": "AI & Intelligent Systems Integration",
    "erp-solutions": "ERP Solutions & Business Automation",
    "e-commerce-solutions": "E-Commerce Solutions & Platforms",
    "data-center-development": "Data Center & IT Infrastructure Development",
    "it-consultancy": "IT Consultancy & Strategic Technology Advisory"
  };

  const title = titleMap[id] || "Enterprise Technology Service";

  return {
    title: `${title} | Xencorp Solutions`,
    description: `Deploy custom systems, audit configurations, and scale frameworks tailored for ${title} under Xencorp Solutions' engineering mandate.`,
    openGraph: {
      title: `${title} | Xencorp Solutions`,
      description: `Deploy custom systems, audit configurations, and scale frameworks tailored for ${title} under Xencorp Solutions' engineering mandate.`,
      url: `https://xencorpsolutions.com/services/${id}`,
      type: "website",
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ServiceDetail id={id} />;
}
