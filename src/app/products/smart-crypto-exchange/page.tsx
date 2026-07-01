import { Metadata } from "next";
import SmartCryptoExchange from "../../../pages/Products/SmartCryptoExchange";

export const metadata: Metadata = {
  title: "Smart Crypto Exchange | Institutional Digital Asset Trading",
  description: "Deploy a high-performance cryptocurrency trading platform featuring a sub-millisecond matching engine, MPC custody, and automated KYC/AML hooks.",
  openGraph: {
    title: "Smart Crypto Exchange | Institutional Digital Asset Trading",
    description: "Deploy a high-performance cryptocurrency trading platform featuring a sub-millisecond matching engine, MPC custody, and automated KYC/AML hooks.",
    url: "https://xencorpsolutions.com/products/smart-crypto-exchange",
    type: "website",
  }
};

export default function Page() {
  return <SmartCryptoExchange />;
}
