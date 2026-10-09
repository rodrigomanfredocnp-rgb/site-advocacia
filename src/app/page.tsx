import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutLawyer } from "@/components/sections/AboutLawyer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Deadlines } from "@/components/sections/Deadlines";
import { FaqSection } from "@/components/sections/FaqSection";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { HomeHero } from "@/components/sections/HomeHero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Reviews } from "@/components/sections/Reviews";
import { JsonLd, faqGraph, organizationGraph } from "@/components/seo/JsonLd";
import { generalFaq } from "@/content/shared";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [...organizationGraph(), faqGraph(generalFaq)] }} />
      <SiteHeader variant="home" />
      <main id="conteudo" className="flex-1">
        <HomeHero />
        <AboutLawyer variant="full" />
        <PracticeAreas />
        <HowItWorks tone="mist" />
        <Deadlines />
        <Reviews />
        <FaqSection items={generalFaq} tone="mist" />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
