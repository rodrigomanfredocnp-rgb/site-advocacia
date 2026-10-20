import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import type { CSSProperties } from "react";
import { LogoFull } from "@/components/brand/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { mainAreas, otherAreas, proPage } from "@/content/landings";
import { fullAddress, site } from "@/content/site";
import { headline } from "@/lib/emphasis";
import { CookiePreferences } from "./Analytics";

type Props = {
  /** Chamada final, específica de cada página. */
  title?: string;
  text?: string;
  whatsappMessage?: string;
};

/**
 * Rodapé escuro e compacto (pedido do titular: "diminui um pouco o footer"), que abre com a chamada
 * final para o WhatsApp. Links agrupados por área e, no fim, só o nome e o crédito de quem criou o site.
 */
export function SiteFooter({
  title = "Informações sobre atendimento.",
  text = "Entre em contato para informar o assunto e consultar a disponibilidade de atendimento presencial ou online.",
  whatsappMessage,
}: Props) {
  const areas = [...mainAreas(), ...otherAreas()];
  const office = [
    { href: "/areas-de-atuacao", label: "Áreas de atuação" },
    { href: "/sobre", label: "Sobre Jhonny" },
    { href: "/atendimento", label: "Atendimento" },
    { href: "/contato", label: "Contato" },
    { href: `/${proPage().slug}`, label: "Para advogados e escritórios" },
    { href: "/politica-de-privacidade", label: "Privacidade" },
    { href: "/termos-de-uso", label: "Termos de uso" },
  ];

  return (
    <footer className="bg-glow on-ink text-text-inverse-muted">
      <div className="container-site pt-14 pb-10 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <h2 data-reveal className="max-w-[18ch] text-display-md text-text-inverse">
            {headline(title)}
          </h2>
          <div data-reveal style={{ "--i": 1 } as CSSProperties} className="flex flex-col items-start gap-5 lg:items-end">
            <p className="max-w-[42ch] text-[1.06rem] lg:text-right">{text}</p>
            <WhatsAppButton source="rodape" message={whatsappMessage} />
          </div>
        </div>

        <span data-reveal="line" className="hairline mt-10 md:mt-12" />

        <div className="grid gap-10 pt-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col items-start gap-5">
            <Link href="/" prefetch={false} aria-label="Página inicial">
              <LogoFull className="h-auto w-44" />
            </Link>
            <ul className="space-y-3 text-[1rem]">
              <li>
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 transition-colors hover:text-gold-light"
                >
                  <MapPin className="mt-1 size-[18px] shrink-0 text-gold" aria-hidden />
                  {fullAddress}
                </a>
              </li>
              <li>
                <a href={site.contact.phoneHref} className="flex gap-3 tabular-nums transition-colors hover:text-gold-light">
                  <Phone className="mt-1 size-[18px] shrink-0 text-gold" aria-hidden />
                  {site.contact.whatsappDisplay}
                </a>
              </li>
              {site.contact.email && (
                <li>
                  <a href={`mailto:${site.contact.email}`} className="flex gap-3 transition-colors hover:text-gold-light">
                    <Mail className="mt-1 size-[18px] shrink-0 text-gold" aria-hidden />
                    {site.contact.email}
                  </a>
                </li>
              )}
            </ul>
            <div className="flex gap-3">
              <SocialLink href={site.social.instagram} label="Instagram">
                <InstagramIcon className="size-5" />
              </SocialLink>
              <SocialLink href={site.social.facebook} label="Facebook">
                <FacebookIcon className="size-5" />
              </SocialLink>
            </div>
          </div>

          <FooterNav title="Áreas de atuação" links={areas.map((a) => ({ href: `/${a.slug}`, label: a.name }))} />
          <FooterNav title="O escritório" links={office}>
            <CookiePreferences listItem />
          </FooterNav>
        </div>
      </div>

      <div className="border-t border-white/10">
        {/* Folga à direita: o botão flutuante do WhatsApp fica no canto inferior direito. */}
        <p className="container-site flex flex-col gap-x-3 gap-y-1 py-6 pr-24 text-[0.92rem] leading-relaxed sm:flex-row sm:flex-wrap">
          {/* A OAB fica aqui também: o Código de Ética (art. 44) pede nome e inscrição na publicidade. */}
          <span className="text-text-inverse">
            {site.lawyer.shortName} · Advogado · {site.lawyer.oab}
          </span>
          <span aria-hidden className="max-sm:hidden">
            ·
          </span>
          <a
            href={site.credit.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-gold-light"
          >
            Criado e desenvolvido por {site.credit.name}
          </a>
        </p>
      </div>
    </footer>
  );
}

function FooterNav({
  title,
  links,
  children,
}: {
  title: string;
  links: { href: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <nav aria-label={title}>
      <h2 className="font-display text-[1.25rem] text-text-inverse">{title}</h2>
      <ul className="mt-4 space-y-2 text-[1rem]">
        {links.map((l) => (
          <li key={l.href}>
            {/* Sem pré-carregamento: ao chegar no rodapé, ~15 links baixariam as páginas inteiras à toa (dados do celular). */}
            <Link href={l.href} prefetch={false} className="transition-colors hover:text-gold-light">
              {l.label}
            </Link>
          </li>
        ))}
        {children}
      </ul>
    </nav>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-12 place-items-center rounded-full border border-white/15 text-gold transition-colors hover:border-gold hover:text-gold-light"
    >
      {children}
    </a>
  );
}
