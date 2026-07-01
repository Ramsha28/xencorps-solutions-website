import { Metadata } from "next";
import About from "../../pages/About/about";

export const metadata: Metadata = {
  title: "About Us | Xencorp Solutions | Systems Engineering & Consulting",
  description: "Learn about Xencorp Solutions, our strategic engineering center, corporate history, core principles, and our engineering mandate for global enterprises.",
  openGraph: {
    title: "About Us | Xencorp Solutions | Systems Engineering & Consulting",
    description: "Learn about Xencorp Solutions, our strategic engineering center, corporate history, core principles, and our engineering mandate for global enterprises.",
    url: "https://xencorpsolutions.com/about",
    type: "website",
  }
};

export default function Page() {
  return <About />;
}
