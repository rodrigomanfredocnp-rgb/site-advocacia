import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { LogoFull } from "@/components/brand/Logo";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { CATEGORY_LABEL, landingsByCategory } from "@/content/landings";
import { fullAddress, site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  const columns = (["trabalhista", "previdenciario"] as const).map((category) => ({
    title: CATEGORY_LABEL[category],
    items: landingsByCategory(category),
  }));

  return (
    <footer className="on-ink ink-texture text-text-inverse-muted">
      <div className="container-site grid gap-12 py-16 md:py-20 lg:grid-cols-[0.9fr_2.1fr]">
        <div className="flex flex-col items-start gap-6">
          <Link href="/" aria-label="Página inicial">
            <LogoFull className="h-auto w-56" />
          </Link>
          <p className="max-w-xs text-[0.95rem] leading-relaxed">
            Advocacia trabalhista e previdenciária com atendimento direto, linguagem clara e sigilo em cada etapa.
          </p>
          <div className="flex gap-3">
            <SocialLink href={site.social.instagram} label="Instagram">
              <InstagramIcon className="size-[18px]" />
            </SocialLink>
            <SocialLink href={site.social.facebook} label="Facebook">
              <FacebookIcon className="size-[18px]" />
            </SocialLink>
            <SocialLink href={whatsappUrl()} label="WhatsApp">
              <WhatsAppIcon className="size-[18px]" />
            </SocialLink>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[1fr_0.9fr_1.25fr]">
          {columns.map(
            (col) =>
              col.items.length > 0 && (
                <nav key={col.title} aria-label={col.title}>
                  <h2 className="font-caps text-[0.72rem] tracking-[0.18em] text-gold">{col.title.toUpperCase()}</h2>
                  <ul className="mt-5 space-y-2.5 text-[0.95rem]">
                    {col.items.map((l) => (
                      <li key={l.slug}>
                        <Link href={`/${l.slug}`} className="transition-colors hover:text-gold-light">
                          {l.topic}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ),
          )}

          <div className="sm:col-span-2 xl:col-span-1">
            <h2 className="font-caps text-[0.72rem] tracking-[0.18em] text-gold">ESCRITÓRIO</h2>
            <ul className="mt-5 space-y-4 text-[0.95rem]">
              <li className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  {fullAddress}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
                <a href={site.contact.phoneHref} className="transition-colors hover:text-gold-light">
                  {site.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="[overflow-wrap:anywhere] transition-colors hover:text-gold-light"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-3">
        <div className="container-site flex flex-col gap-4 py-7 text-[0.8rem] leading-relaxed md:flex-row md:items-center md:justify-between">
          <p>
            {site.lawyer.fullName} · {site.lawyer.oab}
            <br />
            Conteúdo meramente informativo, em conformidade com o Código de Ética e Disciplina da OAB e o Provimento 205/2021.
          </p>
          <div className="flex shrink-0 flex-wrap gap-x-6 gap-y-2">
            <Link href="/politica-de-privacidade" className="transition-colors hover:text-gold-light">
              Política de privacidade
            </Link>
            <Link href="/termos-de-uso" className="transition-colors hover:text-gold-light">
              Termos de uso
            </Link>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
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
      className="grid size-10 place-items-center rounded-full border border-ink-3 text-gold transition-colors hover:border-gold hover:text-gold-light"
    >
      {children}
    </a>
  );
}
