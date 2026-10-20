import type { Metadata } from "next";
import { ViewTransition } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd, pageGraph } from "@/components/seo/JsonLd";
import { PageHeroPhoto } from "@/components/sections/HeroPhotos";
import { OfficeLocation } from "@/components/sections/OfficeLocation";
import { PageHero } from "@/components/sections/PageHero";
import { Photo } from "@/components/ui/Photo";
import { headline } from "@/lib/emphasis";
import { Section } from "@/components/ui/Section";
import { ContactButtons, WhatsAppFloat } from "@/components/ui/WhatsAppButton";
import { lawyerBio } from "@/content/shared";
import { site } from "@/content/site";
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
 * Sobre: retrato no topo, texto em primeira pessoa da revisão do titular com a foto em pé e o escritório com mapa.
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
              actions={<ContactButtons source="topo-sobre" />}
              aside={
                <PageHeroPhoto
                  name="jhonny-lapela"
                  alt="Jhonny Henrique Guollo Cardoso, advogado, sorrindo, de terno escuro e gravata vermelha"
                  focus="50% 18%"
                  portrait
                />
              }
              note="Campo Novo do Parecis/MT · Atendimento presencial e online"
            />

            <Section labelledBy="sobre-titulo" panel className="pt-16 md:pt-24">
              <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                {/* No celular, o retrato do topo basta: esta foto só aparece a partir do tablet. */}
                <figure data-reveal className="w-full max-md:hidden">
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
                    {headline("Quem sou eu.")}
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

            <OfficeLocation id="escritorio" />
          </main>
          <SiteFooter />
        </div>
      </ViewTransition>
      <WhatsAppFloat />
    </>
  );
}
