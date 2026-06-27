import ServiceDetail from "../../../pages/Services/ServiceDetail";

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

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ServiceDetail id={id} />;
}
