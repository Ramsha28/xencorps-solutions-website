import { Metadata } from "next";
import ProcessPage from "../../pages/Process/process";

export const metadata: Metadata = {
  title: "Our Development Process | Agile Software Delivery",
  description: "Explore Xencorp Solutions' structured software development life cycle, from discovery and requirements gathering to deployment pipelines and maintenance SLAs.",
  openGraph: {
    title: "Our Development Process | Agile Software Delivery",
    description: "Explore Xencorp Solutions' structured software development life cycle, from discovery and requirements gathering to deployment pipelines and maintenance SLAs.",
    url: "https://xencorpsolutions.com/development-process",
    type: "website",
  }
};

export default function Page() {
  return <ProcessPage />;
}
