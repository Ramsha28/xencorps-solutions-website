"use client";
import { fontLink } from "../../styles/theme";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Hero from "../../sections/home/Hero";
import MarqueeStrip from "../../sections/home/MarqueeStrip";
import BusinessImpact from "../../sections/home/BusinessImpact";
import ServicesSection from "../../sections/home/ServicesSection";
import EcosystemSection from "../../sections/home/EcosystemSection";
import ProductsSection from "../../sections/home/ProductsSection";
import WhyChooseUs from "../../sections/home/WhyChooseUs";
import IndustriesSection from "../../sections/home/IndustriesSection";
import DeliveryProcess from "../../sections/home/DeliveryProcess";
import CTASection from "../../sections/home/CTASection";
import { T } from "../../styles/theme";

export default function XencorpHomepage() {
  return (
    <main style={{ fontFamily: T.sans, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>
      <style>{fontLink}</style>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        a,button{cursor:pointer;}
      `}</style>
      <Navigation />
      <Hero />
      <MarqueeStrip />
      <BusinessImpact />
      <ServicesSection />
      <EcosystemSection />
      <ProductsSection />
      <WhyChooseUs />
      <IndustriesSection />
      <DeliveryProcess />
      <CTASection />
      <Footer />
    </main>
  );
}