import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd, landingGraph } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/sections/FaqList";
import { TopicHeroPhoto } from "@/components/sections/HeroPhotos";
import { LawNote } from "@/components/sections/LawNote";
import { LawyerIntro } from "@/components/sections/LawyerIntro";
import { PageHero } from "@/components/sections/PageHero";
import { Reviews } from "@/components/sections/Reviews";
import { Situations } from "@/components/sections/Situations";
import { Steps } from "@/components/sections/Steps";
import { TopicCard } from "@/components/sections/TopicCards";
import { Section, SectionTitle } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getLanding, landings, relatedLandings } from "@/content/landings";
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
 * Landing de um assunto. Ordem pensada para quem tem pressa e pouca intimidade com a internet:
 * a pergunta e o botão logo no topo, as situações como botões de WhatsApp, a lei em poucas linhas,
 * como funciona, quem atende, dúvidas e outros assuntos.
 */
export default async function LandingPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) notFound();
  const related = relatedLandings(landing);

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
                <>
                  <WhatsAppButton source="topo" variant="gold" message={landing.whatsapp}>
                    Conversar no WhatsApp
                  </WhatsAppButton>
                  <a href="#seu-caso" className="btn btn-plain btn-outline-light">
                    Ver as situações
                  </a>
                </>
              }
              note="Atendimento sigiloso, feito pelo próprio advogado."
              aside={<TopicHeroPhoto landing={landing} />}
            />
            <Situations items={landing.situations} />
            <LawNote law={landing.law} />
            <Steps />
            <LawyerIntro />
            <Reviews />
            <FaqList items={landing.faq} />
            {related.length > 0 && (
              <Section labelledBy="outros-titulo" className="pb-20 md:pb-28">
                <SectionTitle id="outros-titulo" title="Outros assuntos." />
                <ul className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                  {related.map((l, i) => (
                    <li key={l.slug}>
                      <TopicCard landing={l} index={i} />
                    </li>
                  ))}
                </ul>
              </Section>
            )}
          </main>
          <SiteFooter
            title="Vamos conversar sobre o seu caso."
            text="Conte o que aconteceu pelo WhatsApp. O próprio advogado responde, com sigilo e sem compromisso."
            whatsappMessage={landing.whatsapp}
          />
        </div>
      </ViewTransition>
      <MobileCtaBar message={landing.whatsapp} />
    </>
  );
}
