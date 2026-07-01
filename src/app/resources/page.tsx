import { Metadata } from "next";
import Resources from "../../pages/Resources/resources";

export const metadata: Metadata = {
  title: "Resources & Advisory | Xencorp Solutions",
  description: "Explore enterprise tech whitepapers, GRC compliance checklists, and system implementation roadmaps. Download custom platform catalogs from Xencorp Solutions.",
  openGraph: {
    title: "Resources & Advisory | Xencorp Solutions",
    description: "Explore enterprise tech whitepapers, GRC compliance checklists, and system implementation roadmaps. Download custom platform catalogs from Xencorp Solutions.",
    url: "https://xencorpsolutions.com/resources",
    type: "website",
  }
};

export default function Page() {
  return <Resources />;
}
