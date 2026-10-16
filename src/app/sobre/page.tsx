import type { Metadata } from "next";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { ViewTransition, type CSSProperties } from "react";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd, organizationGraph } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Section, SectionTitle } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { lawyerBio, values } from "@/content/shared";
import { fullAddress, site } from "@/content/site";
import { sharedOpenGraph } from "@/lib/metadata";

const TITLE = "Sobre o Dr. Jhonny Cardoso";
const DESCRIPTION =
  "Conheça o advogado Jhonny Henrique Guollo Cardoso (OAB/MT 33424), que atua em Direito do Trabalho e benefícios do INSS em Campo Novo do Parecis/MT.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/sobre/" },
  openGraph: { ...sharedOpenGraph, title: `${TITLE} | ${site.name}`, description: DESCRIPTION, url: "/sobre/" },
};

export default function SobrePage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": organizationGraph() }} />
      <SiteHeader />
      <ViewTransition enter="page" exit="page" default="none">
        <div className="flex flex-1 flex-col">
          <main id="conteudo" className="flex-1">
            <PageHero
              title="Um advogado para quem trabalha."
              lead="Jhonny Henrique Guollo Cardoso atende trabalhadores e segurados do INSS em Campo Novo do Parecis/MT, com explicação simples e contato direto."
              actions={
                <WhatsAppButton source="topo-sobre" variant="gold">
                  Conversar no WhatsApp
                </WhatsAppButton>
              }
              note={`${site.lawyer.oab} · Campo Novo do Parecis/MT`}
              aside={
                <figure className="relative mx-auto w-full max-w-[26rem] lg:mr-0 lg:max-w-[30rem]">
                  <div className="photo-reveal melt">
                    <Photo
                      name="jhonny-lapela"
                      alt="Dr. Jhonny Cardoso sorrindo, com a mão na lapela do terno"
                      focus="50% 16%"
                      sizes="(min-width: 1024px) 30rem, 90vw"
                      priority
                      className="aspect-[4/5] bg-transparent"
                    />
                  </div>
                </figure>
              }
            />

            <Section labelledBy="historia-titulo" panel className="pt-16 md:pt-24">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <SectionTitle id="historia-titulo" title="Quem é o Dr. Jhonny." className="!block" />
                <div className="space-y-6">
                  {lawyerBio.map((p, i) => (
                    <p key={i} data-reveal className="max-w-[56ch] text-lead text-text-muted first:text-text">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Section>

            <Section labelledBy="jeito-titulo" className="py-16 md:py-24">
              <SectionTitle id="jeito-titulo" title="O jeito de atender." />
              <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((v, i) => (
                  <li key={v} data-reveal style={{ "--i": i } as CSSProperties} className="flex flex-col gap-6 bg-white p-7">
                    <span className="grid size-11 place-items-center rounded-full bg-champagne text-gold-text">
                      <Check className="size-5" strokeWidth={2.5} aria-hidden />
                    </span>
                    <span className="font-display text-[1.4rem] leading-snug">{v}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section labelledBy="escritorio-titulo" panel className="pb-20 md:pb-28">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <h2 id="escritorio-titulo" data-reveal className="accent text-display-lg">
                    O escritório<span className="dot">.</span>
                  </h2>
                  <p data-reveal className="mt-6 flex max-w-[44ch] gap-3 text-lead text-text-muted">
                    <MapPin className="mt-1.5 size-5 shrink-0 text-gold-text" aria-hidden />
                    {fullAddress}
                  </p>
                </div>
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal
                  className="btn btn-plain btn-outline justify-self-start lg:justify-self-end"
                >
                  Ver no Google Maps
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
