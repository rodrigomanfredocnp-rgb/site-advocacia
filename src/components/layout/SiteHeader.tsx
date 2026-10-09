import Link from "next/link";
import { LogoLockup } from "@/components/brand/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MobileMenu } from "./MobileMenu";

export const HOME_NAV = [
  { href: "/#atuacao", label: "Atuação" },
  { href: "/#advogado", label: "O advogado" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#duvidas", label: "Dúvidas" },
  { href: "/#contato", label: "Contato" },
];

type Props = {
  /** "home" mostra o menu completo; "landing" mantém o foco na conversão. */
  variant?: "home" | "landing";
  whatsappMessage?: string;
};

export function SiteHeader({ variant = "home", whatsappMessage }: Props) {
  return (
    <header className="on-ink sticky top-0 z-40 border-b border-ink-3/80 bg-ink text-text-inverse">
      <div className="container-site flex h-[4.75rem] items-center justify-between gap-4">
        <Link href="/" aria-label="Jhonny Cardoso Advogado, página inicial" className="shrink-0">
          <LogoLockup />
        </Link>

        {variant === "home" ? (
          <>
            <nav aria-label="Principal" className="hidden lg:block">
              <ul className="flex items-center gap-8 text-[0.92rem] text-text-inverse-muted">
                {HOME_NAV.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition-colors hover:text-gold-light">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden lg:block">
              <WhatsAppButton source="header" size="md" message={whatsappMessage}>
                WhatsApp
              </WhatsAppButton>
            </div>
            <MobileMenu items={HOME_NAV} whatsappMessage={whatsappMessage} />
          </>
        ) : (
          <div className="flex items-center gap-6">
            <Link
              href="/#advogado"
              className="hidden text-[0.92rem] text-text-inverse-muted transition-colors hover:text-gold-light md:block"
            >
              Conheça o advogado
            </Link>
            <WhatsAppButton source="header" size="md" message={whatsappMessage} className="max-sm:px-3.5">
              <span className="max-sm:sr-only">Falar no WhatsApp</span>
            </WhatsAppButton>
          </div>
        )}
      </div>
    </header>
  );
}
