import { Metadata } from "next";
import SmartGRC from "../../../pages/Products/SmartGRC";

export const metadata: Metadata = {
  title: "Smart GRC Platform | AI Governance, Risk & Compliance",
  description: "Automate policy enforcement, monitor vendor risks, and streamline compliance audits for SOC 2, ISO 27001, GDPR, and HIPAA with Smart GRC.",
  openGraph: {
    title: "Smart GRC Platform | AI Governance, Risk & Compliance",
    description: "Automate policy enforcement, monitor vendor risks, and streamline compliance audits for SOC 2, ISO 27001, GDPR, and HIPAA with Smart GRC.",
    url: "https://xencorpsolutions.com/products/smart-grc",
    type: "website",
  }
};

export default function Page() {
  return <SmartGRC />;
}
