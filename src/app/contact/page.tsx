import { Metadata } from "next";
import Contact from "../../pages/Contact/contact";

export const metadata: Metadata = {
  title: "Contact Our Expert Team | Xencorp Solutions",
  description: "Connect with Xencorp Solutions solutions architects and strategic consultants. Submit your enterprise software, ERP, or GRC inquiry to schedule a workshop.",
  openGraph: {
    title: "Contact Our Expert Team | Xencorp Solutions",
    description: "Connect with Xencorp Solutions solutions architects and strategic consultants. Submit your enterprise software, ERP, or GRC inquiry to schedule a workshop.",
    url: "https://xencorpsolutions.com/contact",
    type: "website",
  }
};

export default function Page() {
  return <Contact />;
}
