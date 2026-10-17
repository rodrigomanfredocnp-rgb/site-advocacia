import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ViewTransition } from "react";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd, pageGraph } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Photo } from "@/components/ui/Photo";
import { headline } from "@/lib/emphasis";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { lawyerBio } from "@/content/shared";
import { fullAddress, site } from "@/content/site";
import { sharedOpenGraph } from "@/lib/metadata";

const TITLE = "Sobre Jhonny Cardoso";
const DESCRIPTION =
  "Jhonny Henrique Guollo Cardoso, advogado (OAB/MT 33.424/O) em Campo Novo do Parecis/MT, com atuação cível, trabalhista e previdenciária e atendimento presencial e online.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/sobre/" },
  openGraph: { ...sharedOpenGraph, title: `${TITLE} | ${site.name}`, description: DESCRIPTION, url: "/sobre/" },
};

/**
 * Sobre: texto em primeira pessoa da revisão do titular, com a foto de corpo inteiro (em pé).
 * Cargos e passagens anteriores ficam fora até análise específica (ver CLAUDE.md).
 */
export default function SobrePage() {
  return (
    <>
      <JsonLd data={pageGraph("/sobre/", TITLE)} />
      <SiteHeader />
      <ViewTransition enter="page" exit="page" default="none">
        <div className="flex flex-1 flex-col">
          <main id="conteudo" className="flex-1">
            <PageHero
              title="Jhonny Henrique Guollo Cardoso"
              lead={`Advogado · ${site.lawyer.oab}`}
              actions={<WhatsAppButton source="topo-sobre" variant="gold" />}
              note="Campo Novo do Parecis/MT · Atendimento presencial e online"
            />

            <Section labelledBy="sobre-titulo" panel className="pt-16 md:pt-24">
              <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <figure data-reveal className="mx-auto w-full max-w-[22rem] md:mx-0 md:max-w-none">
                  <Photo
                    name="jhonny-corpo"
                    alt="Jhonny Henrique Guollo Cardoso, advogado, em pé, de terno escuro"
                    focus="50% 8%"
                    sizes="(min-width: 768px) 26rem, 85vw"
                    className="aspect-[3/4]"
                  />
                </figure>
                <div>
                  <h2 id="sobre-titulo" data-reveal className="accent text-display-lg">
                    {headline("Quem sou.")}
                  </h2>
                  <div className="mt-7 space-y-5">
                    {lawyerBio.map((p, i) => (
                      <p key={i} data-reveal className="max-w-[60ch] text-[1.12rem] text-text-muted first:text-text">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            <Section labelledBy="escritorio-titulo" panel className="pb-20 md:pb-28">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <h2 id="escritorio-titulo" data-reveal className="accent text-display-lg">
                    {headline("O escritório.")}
                  </h2>
                  <p data-reveal className="mt-6 flex max-w-[44ch] gap-3 text-lead text-text-muted">
                    <MapPin className="mt-1.5 size-5 shrink-0 text-gold-text" aria-hidden />
                    {fullAddress}
                  </p>
                </div>
                <a
                  href={site.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal
                  className="btn btn-plain btn-outline justify-self-start lg:justify-self-end"
                >
                  Como chegar
                  <ArrowUpRight className="size-5" aria-hidden />
                </a>
              </div>
            </Section>
          </main>
          <SiteFooter />
        </div>
      </ViewTransition>
      <MobileCtaBar />
    </>
  );
}
