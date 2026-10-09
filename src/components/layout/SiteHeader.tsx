import Link from "next/link";
import { LogoLockup } from "@/components/brand/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MobileMenu } from "./MobileMenu";

export const HOME_NAV = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#atuacao", label: "Áreas de atuação" },
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
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-site flex h-20 items-center justify-between gap-4">
        <Link href="/" aria-label="Jhonny Cardoso Advogado, página inicial" className="shrink-0">
          <LogoLockup onLight />
        </Link>

        {variant === "home" ? (
          <>
            <nav aria-label="Principal" className="hidden lg:block">
              <ul className="flex items-center gap-8 text-[0.92rem] text-text-muted">
                {HOME_NAV.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition-colors hover:text-ink">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden lg:block">
              <WhatsAppButton source="header" size="sm" message={whatsappMessage}>
                Fale no WhatsApp
              </WhatsAppButton>
            </div>
            <MobileMenu items={HOME_NAV} whatsappMessage={whatsappMessage} />
          </>
        ) : (
          <div className="flex items-center gap-6">
            <Link href="/#sobre" className="hidden text-[0.92rem] text-text-muted transition-colors hover:text-ink md:block">
              Conheça o advogado
            </Link>
            <WhatsAppButton source="header" size="sm" message={whatsappMessage} className="max-sm:px-3.5">
              <span className="max-sm:sr-only">Fale no WhatsApp</span>
            </WhatsAppButton>
          </div>
        )}
      </div>
    </header>
  );
}
