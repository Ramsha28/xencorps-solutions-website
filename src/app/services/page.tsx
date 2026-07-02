import { Metadata } from "next";
import ServicesPage from "../../pages/Services/Services";

export const metadata: Metadata = {
  title: "Enterprise Technology Services | Xencorp Solutions",
  description: "Explore our software engineering, AI systems integration, custom ERP deployment, cloud infrastructure, and IT consultancy practice areas.",
  openGraph: {
    title: "Enterprise Technology Services | Xencorp Solutions",
    description: "Explore our software engineering, AI systems integration, custom ERP deployment, cloud infrastructure, and IT consultancy practice areas.",
    url: "https://xencorpsolutions.com/services",
    type: "website",
  }
};

export default function Page() {
  return <ServicesPage />;
}
