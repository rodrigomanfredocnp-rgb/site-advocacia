import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ViewTransition, type CSSProperties, type ReactNode } from "react";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd, organizationGraph } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/sections/FaqList";
import { PageHero } from "@/components/sections/PageHero";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { generalFaq } from "@/content/shared";
import { fullAddress, site } from "@/content/site";
import { sharedOpenGraph } from "@/lib/metadata";
import { whatsappUrl } from "@/lib/whatsapp";

const TITLE = "Contato";
const DESCRIPTION = `Fale com o Dr. Jhonny Cardoso pelo WhatsApp ${site.contact.whatsappDisplay}, por e-mail ou no escritório em Campo Novo do Parecis/MT.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contato/" },
  openGraph: { ...sharedOpenGraph, title: `${TITLE} | ${site.name}`, description: DESCRIPTION, url: "/contato/" },
};

type Channel = { icon: ReactNode; label: string; value: ReactNode; href: string; external?: boolean };

export default function ContatoPage() {
  const channels: Channel[] = [
    {
      icon: <WhatsAppIcon className="size-6" />,
      label: "WhatsApp",
      value: site.contact.whatsappDisplay,
      href: whatsappUrl(),
      external: true,
    },
    {
      icon: <Phone className="size-6" aria-hidden />,
      label: "Telefone",
      value: site.contact.whatsappDisplay,
      href: site.contact.phoneHref,
    },
    {
      icon: <Mail className="size-6" aria-hidden />,
      label: "E-mail",
      value: (
        <>
          {site.contact.email.split("@")[0]}@<wbr />
          {site.contact.email.split("@")[1]}
        </>
      ),
      href: `mailto:${site.contact.email}`,
    },
    {
      icon: <MapPin className="size-6" aria-hidden />,
      label: "Escritório",
      value: fullAddress,
      href: site.address.mapsUrl,
      external: true,
    },
    {
      icon: <InstagramIcon className="size-6" />,
      label: "Instagram",
      value: site.social.instagramHandle,
      href: site.social.instagram,
      external: true,
    },
    {
      icon: <FacebookIcon className="size-6" />,
      label: "Facebook",
      value: "Página no Facebook",
      href: site.social.facebook,
      external: true,
    },
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": organizationGraph() }} />
      <SiteHeader />
      <ViewTransition enter="page" exit="page" default="none">
        <div className="flex flex-1 flex-col">
          <main id="conteudo" className="flex-1">
            <PageHero
              title="Fale com o Dr. Jhonny."
              lead="O jeito mais rápido é pelo WhatsApp. Se preferir, ligue, mande um e-mail ou vá até o escritório."
              actions={
                <WhatsAppButton source="topo-contato" variant="gold">
                  Conversar no WhatsApp
                </WhatsAppButton>
              }
              note={
                site.hours ? (
                  <span className="inline-flex items-center gap-2.5">
                    <Clock className="size-5 text-gold" aria-hidden />
                    {site.hours}
                  </span>
                ) : undefined
              }
            />

            <Section labelledBy="canais-titulo" className="pt-16 md:pt-24">
              <h2 id="canais-titulo" className="sr-only">
                Formas de contato
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {channels.map((c, i) => (
                  <li key={c.label} data-reveal style={{ "--i": i % 3 } as CSSProperties}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      {...(c.label === "WhatsApp" ? { "data-wa": "contato" } : {})}
                      className="group flex h-full items-start gap-5 bg-white p-6 transition-shadow duration-500 hover:shadow-[0_24px_50px_-30px_rgb(14_13_11/0.35)] sm:p-8"
                    >
                      <span className="grid size-14 shrink-0 place-items-center rounded-full bg-champagne text-gold-text transition-colors duration-500 group-hover:bg-ink group-hover:text-gold">
                        {c.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[1.45rem] leading-tight">{c.label}</span>
                        <span className="mt-1.5 block text-[1.06rem] text-text-muted">{c.value}</span>
                      </span>
                      <ArrowUpRight
                        className="mt-1 size-5 shrink-0 text-text-muted transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Section>

            <FaqList items={generalFaq} />
            <div className="pb-10 md:pb-14" />
          </main>
          <SiteFooter />
        </div>
      </ViewTransition>
      <MobileCtaBar />
    </>
  );
}
