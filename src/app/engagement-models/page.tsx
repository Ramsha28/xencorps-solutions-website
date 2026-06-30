import { Metadata } from "next";
import ModelsPage from "../../pages/Models/models";

export const metadata: Metadata = {
  title: "Collaboration & Engagement Models | Xencorp Solutions",
  description: "Choose from our flexible client engagement models, including Dedicated Development Teams, Fixed Cost Projects, Hourly Engagements, and IT Advisory.",
  openGraph: {
    title: "Collaboration & Engagement Models | Xencorp Solutions",
    description: "Choose from our flexible client engagement models, including Dedicated Development Teams, Fixed Cost Projects, Hourly Engagements, and IT Advisory.",
    url: "https://xencorpsolutions.com/engagement-models",
    type: "website",
  }
};

export default function Page() {
  return <ModelsPage />;
}
