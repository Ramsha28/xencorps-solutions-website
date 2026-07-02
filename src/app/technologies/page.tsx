import { Metadata } from "next";
import TechnologiesPage from "../../pages/Technologies/technologies";

export const metadata: Metadata = {
  title: "Technology Stack & Frameworks | Xencorp Solutions",
  description: "Learn about the banking-grade and enterprise-ready technology stack behind our systems, including React, Next.js, Node.js, Spring Boot, and Python AI libraries.",
  openGraph: {
    title: "Technology Stack & Frameworks | Xencorp Solutions",
    description: "Learn about the banking-grade and enterprise-ready technology stack behind our systems, including React, Next.js, Node.js, Spring Boot, and Python AI libraries.",
    url: "https://xencorpsolutions.com/technologies",
    type: "website",
  }
};

export default function Page() {
  return <TechnologiesPage />;
}
