import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LogoFull } from "@/components/brand/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { landingGroups } from "@/content/landings";
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
 * Rodapé escuro e limpo, que abre com a chamada final para o WhatsApp.
 * Fica em cada página (não no layout) para a chamada poder falar do assunto da página.
 */
export function SiteFooter({
  title = "Conte o que aconteceu.",
  text = "O advogado explica o caminho. A primeira conversa é pelo WhatsApp, sigilosa e sem compromisso.",
  whatsappMessage,
}: Props) {
  return (
    <footer className="bg-glow on-ink text-text-inverse-muted">
      <div className="container-site pt-20 pb-12 md:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <h2 data-reveal className="max-w-[18ch] text-display-lg text-text-inverse">
            {headline(title)}
          </h2>
          <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="flex flex-col items-start gap-6 lg:items-end">
            <p className="max-w-[40ch] text-[1.1rem] lg:text-right">{text}</p>
            <WhatsAppButton source="rodape" variant="gold" message={whatsappMessage}>
              Conversar no WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        <span data-reveal="line" className="hairline mt-16 md:mt-20" />

        <div className="grid gap-12 pt-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_0.9fr]">
          <div className="flex flex-col items-start gap-6">
            <Link href="/" aria-label="Página inicial">
              <LogoFull className="h-auto w-52" />
            </Link>
            <ul className="space-y-3.5 text-[1rem]">
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
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex gap-3 [overflow-wrap:anywhere] transition-colors hover:text-gold-light"
                >
                  <Mail className="mt-1 size-[18px] shrink-0 text-gold" aria-hidden />
                  {site.contact.email}
                </a>
              </li>
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

          {landingGroups().map((group) => (
            <nav key={group.category} aria-label={group.label}>
              <h2 className="font-display text-[1.3rem] text-text-inverse">{group.label}</h2>
              <ul className="mt-5 space-y-2.5 text-[1rem]">
                {group.items.map((l) => (
                  <li key={l.slug}>
                    <Link href={`/${l.slug}`} className="transition-colors hover:text-gold-light">
                      {l.topic}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="O escritório">
            <h2 className="font-display text-[1.3rem] text-text-inverse">O escritório</h2>
            <ul className="mt-5 space-y-2.5 text-[1rem]">
              <li>
                <Link href="/sobre" className="transition-colors hover:text-gold-light">
                  Sobre o advogado
                </Link>
              </li>
              <li>
                <Link href="/contato" className="transition-colors hover:text-gold-light">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="transition-colors hover:text-gold-light">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="transition-colors hover:text-gold-light">
                  Termos de uso
                </Link>
              </li>
              <CookiePreferences listItem />
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-site py-7 text-[0.9rem] leading-relaxed">
          {site.lawyer.fullName} · Advogado · {site.lawyer.oab}. Este site é meramente informativo, conforme o Código de Ética e
          Disciplina da OAB e o Provimento 205/2021, e não substitui a análise individual de cada caso.
        </p>
      </div>
    </footer>
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
