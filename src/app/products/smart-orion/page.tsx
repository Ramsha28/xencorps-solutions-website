import { Metadata } from "next";
import SmartOrion from "../../../pages/Products/SmartOrion";

export const metadata: Metadata = {
  title: "Smart Orion ERP | Multi-Branch POS & Business Automation",
  description: "Deploy Smart Orion ERP platform to unify multi-branch resource planning, warehouse logistics, point of sale terminals, and automated procurement pipelines.",
  openGraph: {
    title: "Smart Orion ERP | Multi-Branch POS & Business Automation",
    description: "Deploy Smart Orion ERP platform to unify multi-branch resource planning, warehouse logistics, point of sale terminals, and automated procurement pipelines.",
    url: "https://xencorpsolutions.com/products/smart-orion",
    type: "website",
  }
};

export default function Page() {
  return <SmartOrion />;
}
