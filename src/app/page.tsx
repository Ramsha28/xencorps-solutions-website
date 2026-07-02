import { Metadata } from "next";
import Home from "../pages/Home/home";

export const metadata: Metadata = {
  title: "Xencorp Solutions | Enterprise Software Development & IT Consulting",
  description: "Xencorp Solutions fuses management consulting with custom systems engineering, AI automation, cloud infrastructure, and proprietary platform accelerators like SmartGRC.",
  openGraph: {
    title: "Xencorp Solutions | Enterprise Software Development & IT Consulting",
    description: "Xencorp Solutions fuses management consulting with custom systems engineering, AI automation, cloud infrastructure, and proprietary platform accelerators like SmartGRC.",
    url: "https://xencorpsolutions.com",
    type: "website",
  }
};

export default function Page() {
  return <Home />;
}