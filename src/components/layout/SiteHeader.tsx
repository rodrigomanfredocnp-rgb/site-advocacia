"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore, type CSSProperties } from "react";
import { LogoLockup } from "@/components/brand/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site } from "@/content/site";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/#assuntos", label: "Assuntos" },
  { href: "/sobre", label: "Sobre o advogado" },
  { href: "/contato", label: "Contato" },
];

/* Rolagem como fonte externa: transparente sobre o topo, fundo preto depois. */
function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}
const isScrolled = () => window.scrollY > 24;

/**
 * Cabeçalho escuro e limpo: logo, poucos links, telefone e WhatsApp.
 * Nasce transparente sobre o topo escuro e ganha fundo preto ao rolar ou com o menu aberto.
 * Fica em cada página (não no layout) para o WhatsApp levar a mensagem do assunto da página.
 * No celular, um botão "Menu" com texto, mais fácil de reconhecer.
 */
export function SiteHeader({ whatsappMessage }: { whatsappMessage?: string }) {
  const scrolled = useSyncExternalStore(subscribeScroll, isScrolled, () => false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={`fixed inset-x-0 top-0 z-50 text-text-inverse transition-[background-color,box-shadow] duration-500 ease-out-quint ${
        solid ? "bg-ink/95 shadow-[0_14px_34px_-24px_rgb(0_0_0/0.8)] backdrop-blur" : ""
      }`}
    >
      <div className="container-site flex h-[4.75rem] items-center justify-between gap-6 lg:h-[5.5rem]">
        <Link href="/" aria-label="Jhonny Cardoso Advogado, página inicial" className="shrink-0" onClick={() => setOpen(false)}>
          <LogoLockup />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[1rem] font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-text-inverse/80 transition-colors duration-300 hover:text-gold-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={site.contact.phoneHref}
            className="flex items-center gap-2 text-[1rem] font-semibold tabular-nums transition-colors hover:text-gold-light"
          >
            <Phone className="size-4 text-gold" aria-hidden />
            {site.contact.whatsappDisplay}
          </a>
          <WhatsAppButton
            source="cabecalho"
            variant="gold"
            message={whatsappMessage}
            className="!min-h-[3.1rem] !py-1.5 !text-[0.98rem]"
          >
            WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-celular"
          className="flex min-h-12 shrink-0 items-center gap-2 rounded-full border border-white/25 px-3.5 text-[1rem] font-semibold transition-colors hover:border-gold lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      <div
        id="menu-celular"
        hidden={!open}
        className="bg-glow on-ink fixed inset-x-0 top-[4.75rem] bottom-0 overflow-y-auto lg:hidden"
      >
        <nav aria-label="Menu" className="container-site flex flex-col pt-4 pb-10">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ "--d": i } as CSSProperties}
              className="load-in border-b border-white/10 py-5 font-display text-[1.9rem] leading-tight text-text-inverse transition-colors hover:text-gold-light"
            >
              {item.label}
            </Link>
          ))}
          <WhatsAppButton source="menu-celular" variant="gold" message={whatsappMessage} className="mt-9 w-full">
            Conversar no WhatsApp
          </WhatsAppButton>
          <a
            href={site.contact.phoneHref}
            className="mt-5 flex items-center justify-center gap-2 text-[1.1rem] font-semibold text-text-inverse tabular-nums"
          >
            <Phone className="size-5 text-gold" aria-hidden />
            Ligar: {site.contact.whatsappDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
