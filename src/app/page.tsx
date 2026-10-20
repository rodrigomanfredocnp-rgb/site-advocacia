import type { Metadata } from "next";
import { ViewTransition } from "react";
import { WhatsAppFloat } from "@/components/ui/WhatsAppButton";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd, organizationGraph } from "@/components/seo/JsonLd";
import { AreasSection, ForLawyers, ServiceBlocks } from "@/components/sections/HomeSections";
import { HomeHero } from "@/components/sections/HomeHero";
import { LawyerIntro } from "@/components/sections/LawyerIntro";
import { Steps } from "@/components/sections/Steps";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Home institucional, na ordem da revisão do titular: abertura com identificação e foto,
 * as três áreas principais (Cível primeiro), "Quem sou eu", atendimento presencial e online,
 * parceria, como funciona, apoio a escritórios e o fechamento no rodapé.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": organizationGraph() }} />
      <SiteHeader />
      <ViewTransition enter="page" exit="page" default="none">
        <div className="flex flex-1 flex-col">
          <main id="conteudo" className="flex-1">
            <HomeHero />
            <AreasSection />
            <LawyerIntro />
            <ServiceBlocks />
            <Steps />
            <ForLawyers />
          </main>
          <SiteFooter />
        </div>
      </ViewTransition>
      <WhatsAppFloat />
    </>
  );
}
