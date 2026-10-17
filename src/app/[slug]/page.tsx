import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd, landingGraph } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/sections/FaqList";
import { TopicHeroPhoto } from "@/components/sections/HeroPhotos";
import { Notes, Paths, TopicsAndDocuments } from "@/components/sections/LandingSections";
import { LawNote } from "@/components/sections/LawNote";
import { LawyerIntro } from "@/components/sections/LawyerIntro";
import { PageHero } from "@/components/sections/PageHero";
import { Steps } from "@/components/sections/Steps";
import { TopicGrid } from "@/components/sections/TopicCards";
import { Section, SectionTitle } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { childTopics, getLanding, landings, parentArea, siblingTopics } from "@/content/landings";
import { sharedOpenGraph } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return landings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) return {};
  return {
    title: landing.seo.title,
    description: landing.seo.description,
    alternates: { canonical: `/${landing.slug}/` },
    openGraph: { ...sharedOpenGraph, title: landing.seo.title, description: landing.seo.description, url: `/${landing.slug}/` },
  };
}

/**
 * Página de área ou de assunto. Estrutura da revisão do titular: título claro, apresentação curta,
 * assuntos atendidos, documentos que ajudam, perguntas frequentes e um único caminho de contato.
 * Páginas de área mostram também os assuntos da área em cards com foto.
 */
export default async function LandingPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) notFound();

  const parent = landing.kind === "assunto" ? parentArea(landing) : undefined;
  const children = childTopics(landing);
  const siblings = siblingTopics(landing);

  return (
    <>
      <JsonLd data={landingGraph(landing)} />
      <SiteHeader whatsappMessage={landing.whatsapp} />
      <ViewTransition enter="page" exit="page" default="none">
        <div className="flex flex-1 flex-col">
          <main id="conteudo" className="flex-1">
            <PageHero
              title={landing.hero.title}
              lead={landing.hero.lead}
              actions={
                <WhatsAppButton source="topo" variant="gold" message={landing.whatsapp}>
                  Informações pelo WhatsApp
                </WhatsAppButton>
              }
              note={
                parent && (
                  <Link href={`/${parent.slug}`} className="underline-offset-4 hover:text-gold-light hover:underline">
                    Área: {parent.name}
                  </Link>
                )
              }
              aside={landing.photo && <TopicHeroPhoto landing={landing} />}
            />

            {landing.paths && <Paths paths={landing.paths} />}

            {children.length > 0 && (
              <Section id="assuntos" labelledBy="assuntos-titulo" className="pt-16 md:pt-24">
                <SectionTitle
                  id="assuntos-titulo"
                  title={landing.area === "trabalho" ? "Assuntos para trabalhadores." : "Assuntos mais procurados."}
                  text="Toque no assunto para ver, em poucas linhas, como funciona."
                />
                <div className="mt-12">
                  <TopicGrid items={children} />
                </div>
              </Section>
            )}

            <TopicsAndDocuments landing={landing} />
            {landing.notes && <Notes notes={landing.notes} />}
            {landing.law && <LawNote law={landing.law} />}
            {landing.kind === "area" && <Steps />}
            <LawyerIntro />
            <FaqList items={landing.faq} />

            {parent && siblings.length > 0 && (
              <Section labelledBy="outros-titulo" className="pb-20 md:pb-28">
                <SectionTitle id="outros-titulo" title={`Outros assuntos de ${parent.name}.`} />
                <div className="mt-12">
                  <TopicGrid items={siblings} />
                </div>
              </Section>
            )}
          </main>
          <SiteFooter whatsappMessage={landing.whatsapp} />
        </div>
      </ViewTransition>
      <MobileCtaBar message={landing.whatsapp} />
    </>
  );
}
