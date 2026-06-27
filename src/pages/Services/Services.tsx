"use client";

import { T, fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../sections/services/HeroSection";
import ServicesGrid from "../../sections/services/ServicesGrid";
import WhyChooseServices from "../../sections/services/WhyChooseServices";
import TechnologyCapabilities from "../../sections/services/TechnologyCapabilities";
import DeliveryApproach from "../../sections/services/DeliveryApproach";
import EngagementModels from "../../sections/services/EngagementModels";
import FAQSection from "../../sections/services/FAQSection";
import CTASection from "../../sections/home/CTASection";

export default function ServicesPage() {
  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", background: T.ink }}>
      <style>{fontLink}</style>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        a,button{cursor:pointer;}
        input,select,textarea{outline:none;font-family:inherit;}
      `}</style>
      
      <Navigation />
      
      <HeroSection />
      
      <ServicesGrid />
      
      <WhyChooseServices />
      
      <TechnologyCapabilities />
      
      <DeliveryApproach />
      
      <EngagementModels />
      
      <FAQSection />
      
      <CTASection />
      
      <Footer />
    </main>
  );
}
