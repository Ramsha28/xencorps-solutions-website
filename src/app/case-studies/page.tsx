import { Metadata } from "next";
import CaseStudiesOverviewPage from "../../pages/CaseStudies/CaseStudiesOverview";

export const metadata: Metadata = {
  title: "Case Studies Portfolio | Xencorp Solutions",
  description: "Read about verified business outcomes, custom system migrations, and database compliance integrations currently being audited and published soon.",
  openGraph: {
    title: "Case Studies Portfolio | Xencorp Solutions",
    description: "Read about verified business outcomes, custom system migrations, and database compliance integrations currently being audited and published soon.",
    url: "https://xencorpsolutions.com/case-studies",
    type: "website",
  }
};

export default function Page() {
  return <CaseStudiesOverviewPage />;
}
