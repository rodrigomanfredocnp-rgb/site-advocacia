import type { Metadata } from "next";
import { ViewTransition } from "react";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { faqGraph, JsonLd, pageGraph } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { Steps } from "@/components/sections/Steps";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { generalFaq } from "@/content/shared";
import { sharedOpenGraph } from "@/lib/metadata";

const TITLE = "Atendimento presencial e online";
const DESCRIPTION =
  "Atendimento presencial em Campo Novo do Parecis/MT e online em todo o Brasil, com atuação nacional especialmente nas áreas trabalhista e previdenciária.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/atendimento/" },
  openGraph: { ...sharedOpenGraph, title: TITLE, description: DESCRIPTION, url: "/atendimento/" },
};

export default function AtendimentoPage() {
  return (
    <>
      <JsonLd data={pageGraph("/atendimento/", TITLE, [faqGraph(generalFaq)])} />
      <SiteHeader />
      <ViewTransition enter="page" exit="page" default="none">
        <div className="flex flex-1 flex-col">
          <main id="conteudo" className="flex-1">
            <PageHero
              title="Atendimento presencial e online"
              lead="O atendimento presencial é realizado em Campo Novo do Parecis/MT. Também há atendimento online a pessoas de todo o Brasil, com atuação nacional especialmente nas áreas trabalhista e previdenciária. Entre em contato para informar o assunto e consultar as condições de agendamento."
              actions={<WhatsAppButton source="topo-atendimento" variant="gold" />}
            />
            <div className="pt-6 md:pt-10" />
            <Steps note="A necessidade de atos presenciais, como perícias e audiências, depende de cada procedimento." />
            <FaqList items={generalFaq} title="Perguntas frequentes." />
            <div className="pb-10 md:pb-14" />
          </main>
          <SiteFooter />
        </div>
      </ViewTransition>
      <MobileCtaBar />
    </>
  );
}
