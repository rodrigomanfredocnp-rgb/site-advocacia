"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * Um único botão fixo de WhatsApp, no celular e no tablet (a partir de 1024px o cabeçalho já tem o botão).
 * Aparece depois que o topo da página sai da tela e some um pouco antes do rodapé, para não cobrir o
 * fim do conteúdo, o rodapé ou o aviso de cookies. Sem JavaScript, fica sempre visível (ver .js .cta-bar).
 */
export function MobileCtaBar({ message }: { message?: string }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    const footer = document.querySelector("footer");
    if (!hero || !footer || !("IntersectionObserver" in window)) return;
    const visible = new Map<Element, boolean>();
    const update = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((e) => visible.set(e.target, e.isIntersecting));
      setShow(!visible.get(hero) && !visible.get(footer));
    };
    const heroObserver = new IntersectionObserver(update);
    // Some ~8rem antes do rodapé: o fim da última seção não fica escondido atrás da barra.
    const footerObserver = new IntersectionObserver(update, { rootMargin: "0px 0px 128px 0px" });
    heroObserver.observe(hero);
    footerObserver.observe(footer);
    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [pathname]);

  return (
    <aside aria-label="Contato rápido" aria-hidden={!show} inert={!show} className="lg:hidden">
      <div
        data-show={show ? "" : undefined}
        className="cta-bar fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] backdrop-blur"
      >
        <WhatsAppButton source="barra-celular" message={message} className="w-full sm:mx-auto sm:flex sm:max-w-md">
          Informações pelo WhatsApp
        </WhatsAppButton>
      </div>
    </aside>
  );
}
