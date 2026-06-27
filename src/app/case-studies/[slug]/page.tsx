import CaseStudyDetail from "../../../pages/CaseStudies/CaseStudyDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "global-logistics-modernization" },
    { slug: "zero-trust-banking-ledger" },
    { slug: "hipaa-compliant-clinical-portal" },
    { slug: "omnichannel-retail-checkout" }
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudyDetail slug={slug} />;
}
