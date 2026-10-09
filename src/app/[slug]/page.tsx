import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutLawyer } from "@/components/sections/AboutLawyer";
import { DocumentsMistakes } from "@/components/sections/DocumentsMistakes";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LandingHero } from "@/components/sections/LandingHero";
import { LawSection } from "@/components/sections/LawSection";
import { MythsSection } from "@/components/sections/MythsSection";
import { RelatedTopics } from "@/components/sections/RelatedTopics";
import { Reviews } from "@/components/sections/Reviews";
import { SituationsSection } from "@/components/sections/SituationsSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { JsonLd, landingGraph } from "@/components/seo/JsonLd";
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

export default async function LandingPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) notFound();

  return (
    <>
      <JsonLd data={landingGraph(landing)} />
      <SiteHeader variant="landing" whatsappMessage={landing.whatsapp} />
      <main id="conteudo" className="flex-1">
        <LandingHero landing={landing} />
        <TrustStrip />
        <LawSection landing={landing} />
        <SituationsSection landing={landing} />
        <DocumentsMistakes landing={landing} />
        <MythsSection landing={landing} />
        <HowItWorks whatsapp={landing.whatsapp} />
        <AboutLawyer variant="short" whatsapp={landing.whatsapp} />
        <Reviews />
        <FaqSection items={landing.faq} />
        <RelatedTopics items={relatedLandings(landing)} />
        <FinalCta whatsapp={landing.whatsapp} />
      </main>
      <SiteFooter />
      <MobileCtaBar message={landing.whatsapp} />
    </>
  );
}
