import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, Phone } from "lucide-react";
import { ViewTransition, type CSSProperties, type ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd, pageGraph } from "@/components/seo/JsonLd";
import { OfficeLocation } from "@/components/sections/OfficeLocation";
import { PageHero } from "@/components/sections/PageHero";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { ContactButtons, WhatsAppFloat } from "@/components/ui/WhatsAppButton";
import { site } from "@/content/site";
import { sharedOpenGraph } from "@/lib/metadata";
import { whatsappUrl } from "@/lib/whatsapp";

const TITLE = "Contato";
const DESCRIPTION = `Telefone e WhatsApp ${site.contact.whatsappDisplay}, redes sociais e endereço do escritório em Campo Novo do Parecis/MT, com mapa.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contato/" },
  openGraph: { ...sharedOpenGraph, title: `${TITLE} | ${site.name}`, description: DESCRIPTION, url: "/contato/" },
};

/** `brand` = círculo nas cores da marca (pedido do titular); sem ele, o círculo claro do site. */
type Channel = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  href: string;
  external?: boolean;
  wa?: boolean;
  brand?: string;
};

/** E-mail com ponto de quebra depois do "@" (telas estreitas). */
function EmailText({ email }: { email: string }) {
  const [user, domain] = email.split("@");
  return (
    <>
      {user}@<wbr />
      {domain}
    </>
  );
}

export default function ContatoPage() {
  const email = site.contact.email;
  const channels: Channel[] = [
    {
      icon: <WhatsAppIcon className="size-7" />,
      label: "WhatsApp",
      value: site.contact.whatsappDisplay,
      href: whatsappUrl(),
      external: true,
      wa: true,
      brand: "bg-whatsapp text-white",
    },
    {
      icon: <Phone className="size-6" aria-hidden />,
      label: "Telefone",
      value: site.contact.whatsappDisplay,
      href: site.contact.phoneHref,
    },
    ...(email
      ? [
          {
            icon: <Mail className="size-6" aria-hidden />,
            label: "E-mail",
            value: <EmailText email={email} />,
            href: `mailto:${email}`,
          },
        ]
      : []),
    {
      icon: <InstagramIcon className="size-7" />,
      label: "Instagram",
      value: site.social.instagramHandle,
      href: site.social.instagram,
      external: true,
      brand: "bg-instagram text-white",
    },
    {
      icon: <FacebookIcon className="size-7" />,
      label: "Facebook",
      value: "Página no Facebook",
      href: site.social.facebook,
      external: true,
      brand: "bg-facebook text-white",
    },
  ];

  return (
    <>
      <JsonLd data={pageGraph("/contato/", TITLE)} />
      <SiteHeader />
      <ViewTransition enter="page" exit="page" default="none">
        <div className="flex flex-1 flex-col">
          <main id="conteudo" className="flex-1">
            <PageHero
              title="Contato"
              lead="Informe o assunto e consulte a disponibilidade de atendimento presencial ou online."
              actions={<ContactButtons source="topo-contato" />}
              note={
                <span className="inline-flex items-center gap-2.5">
                  <Clock className="size-5 text-gold" aria-hidden />
                  {site.hours ?? "Consulte a disponibilidade de agendamento."}
                </span>
              }
            />

            <Section labelledBy="canais-titulo" className="pt-16 md:pt-24">
              <h2 id="canais-titulo" className="sr-only">
                Formas de contato
              </h2>
              <ul className={`grid gap-3 sm:grid-cols-2 sm:gap-5 ${channels.length <= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                {channels.map((c, i) => (
                  <li key={c.label} data-reveal style={{ "--i": i % 3 } as CSSProperties}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      {...(c.wa ? { "data-wa": "contato" } : {})}
                      className="group flex h-full flex-wrap items-start gap-x-5 gap-y-4 bg-white p-6 transition-shadow duration-500 hover:shadow-[0_24px_50px_-30px_rgb(14_13_11/0.35)] sm:p-8"
                    >
                      <span
                        className={`grid size-14 shrink-0 place-items-center rounded-full transition-colors duration-500 ${
                          c.brand ?? "bg-champagne text-gold-text group-hover:bg-ink group-hover:text-gold"
                        }`}
                      >
                        {c.icon}
                      </span>
                      {/* Com texto ampliado, o texto desce para baixo do ícone em vez de espremer. */}
                      <span className="min-w-0 flex-[1_1_10rem]">
                        <span className="flex items-start justify-between gap-3 font-display text-[1.45rem] leading-tight">
                          {c.label}
                          <ArrowUpRight
                            className="mt-1 size-5 shrink-0 text-text-muted transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden
                          />
                        </span>
                        <span className="mt-1.5 block text-[1.06rem] text-text-muted">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Section>

            <OfficeLocation id="endereco" title="Endereço do escritório." />
          </main>
          <SiteFooter />
        </div>
      </ViewTransition>
      <WhatsAppFloat />
    </>
  );
}
