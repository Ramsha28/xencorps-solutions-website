import { Metadata } from "next";
import Partnerships from "../../pages/Partnerships/partnerships";

export const metadata: Metadata = {
  title: "Strategic Partnerships | Xencorp Solutions",
  description: "Xencorp Solutions collaborates with a focused network of complementary technology partners to extend our delivery capabilities, bring specialist expertise to client engagements, and build integrated enterprise solutions.",
  openGraph: {
    title: "Strategic Partnerships | Xencorp Solutions",
    description: "Xencorp Solutions collaborates with a focused network of complementary technology partners to extend our delivery capabilities, bring specialist expertise to client engagements, and build integrated enterprise solutions.",
    url: "https://xencorpsolutions.com/partnerships",
    type: "website",
  }
};

export default function Page() {
  return <Partnerships />;
}
