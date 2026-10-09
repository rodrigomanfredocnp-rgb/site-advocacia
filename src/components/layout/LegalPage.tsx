import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Estrutura das páginas institucionais de texto (privacidade, termos). */
export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader variant="home" />
      <main id="conteudo" className="flex-1 bg-paper py-16 md:py-24">
        <article className="container-narrow">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-display-lg">{title}</h1>
          <p className="mt-4 text-[0.92rem] text-text-muted">Última atualização: {updated}</p>
          <div className="legal-prose mt-12">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
