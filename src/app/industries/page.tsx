import { Metadata } from "next";
import Industries from "../../pages/Industries/industries";

export const metadata: Metadata = {
  title: "Industries Served | Xencorp Solutions",
  description: "Explore how Xencorp Solutions designs and deploys custom software, ERP platforms, and compliance systems tailored to banking, healthcare, retail, manufacturing, logistics, and government sectors.",
  openGraph: {
    title: "Industries Served | Xencorp Solutions",
    description: "Explore how Xencorp Solutions designs and deploys custom software, ERP platforms, and compliance systems tailored to banking, healthcare, retail, manufacturing, logistics, and government sectors.",
    url: "https://xencorpsolutions.com/industries",
    type: "website",
  }
};

export default function Page() {
  return <Industries />;
}
