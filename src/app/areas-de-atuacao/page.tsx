import type { Metadata } from "next";
import { ViewTransition } from "react";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd, pageGraph } from "@/components/seo/JsonLd";
import { ForLawyers, MainAreaCards } from "@/components/sections/HomeSections";
import { PageHero } from "@/components/sections/PageHero";
import { PageList } from "@/components/sections/TopicCards";
import { Section, SectionTitle } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { otherAreas } from "@/content/landings";
import { sharedOpenGraph } from "@/lib/metadata";

const TITLE = "Áreas de atuação";
const DESCRIPTION =
  "Direito Cível, Trabalhista e Previdenciário, além de família e sucessões, aposentadoria de servidores, trânsito, criminal e dívidas do agronegócio em parceria.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/areas-de-atuacao/" },
  openGraph: { ...sharedOpenGraph, title: TITLE, description: DESCRIPTION, url: "/areas-de-atuacao/" },
};

export default function AreasPage() {
  return (
    <>
      <JsonLd data={pageGraph("/areas-de-atuacao/", TITLE)} />
      <SiteHeader />
      <ViewTransition enter="page" exit="page" default="none">
        <div className="flex flex-1 flex-col">
          <main id="conteudo" className="flex-1">
            <PageHero
              title="Áreas de atuação"
              lead="Conheça os assuntos atendidos pelo escritório. As áreas principais são Cível, Trabalhista e Previdenciário, com atuação nacional nas áreas trabalhista e previdenciária."
              actions={<WhatsAppButton source="topo-areas" variant="gold" />}
            />

            <Section labelledBy="principais-titulo" className="pt-16 md:pt-24">
              <SectionTitle id="principais-titulo" title="Áreas principais." />
              <MainAreaCards />
            </Section>

            <Section labelledBy="outras-titulo" panel>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <SectionTitle id="outras-titulo" title="Outras áreas atendidas." className="!block" />
                <PageList items={otherAreas()} />
              </div>
            </Section>

            <ForLawyers />
          </main>
          <SiteFooter />
        </div>
      </ViewTransition>
      <MobileCtaBar />
    </>
  );
}
