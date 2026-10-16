import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { ViewTransition } from "react";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { faqGraph, JsonLd, organizationGraph } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/sections/FaqList";
import { HomeHeroPhoto } from "@/components/sections/HeroPhotos";
import { LawyerIntro } from "@/components/sections/LawyerIntro";
import { PageHero } from "@/components/sections/PageHero";
import { Reviews } from "@/components/sections/Reviews";
import { Steps } from "@/components/sections/Steps";
import { Topics } from "@/components/sections/Topics";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { generalFaq } from "@/content/shared";
import { site } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [...organizationGraph(), faqGraph(generalFaq)] }} />
      <SiteHeader />
      <ViewTransition enter="page" exit="page" default="none">
        <div className="flex flex-1 flex-col">
          <main id="conteudo" className="flex-1">
            <PageHero
              title="Seus direitos no trabalho e no INSS."
              lead="Demissão, horas extras, gravidez, acidente, aposentadoria. Converse com o advogado Jhonny Cardoso e entenda o que fazer."
              actions={
                <>
                  <WhatsAppButton source="topo-home" variant="gold">
                    Conversar no WhatsApp
                  </WhatsAppButton>
                  <Link href="/#assuntos" className="btn btn-plain btn-outline-light">
                    Ver os assuntos
                  </Link>
                </>
              }
              note={
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center gap-2.5 font-semibold text-text-inverse tabular-nums hover:text-gold-light"
                >
                  <Phone className="size-5 text-gold" aria-hidden />
                  Prefere ligar? {site.contact.whatsappDisplay}
                </a>
              }
              aside={<HomeHeroPhoto />}
            />
            <Topics />
            <LawyerIntro />
            <Steps />
            <Reviews />
            <FaqList items={generalFaq} />
          </main>
          <SiteFooter />
        </div>
      </ViewTransition>
      <MobileCtaBar />
    </>
  );
}
