"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Animações de rolagem: marca com .is-in cada elemento [data-reveal] quando ele entra na tela,
 * uma única vez. Sem rolagem presa nem efeito que dependa de ficar rolando: o conteúdo
 * aparece e pronto. Sem JavaScript (ou com movimento reduzido), tudo já fica visível.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
