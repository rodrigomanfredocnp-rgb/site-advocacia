import type { ReactNode } from "react";
import { headline } from "@/lib/emphasis";

/**
 * Seção da página. `panel` põe o conteúdo num painel branco sobre o fundo cinza-claro,
 * como no imk.ca; sem painel, o conteúdo fica direto no fundo.
 */
export function Section({
  id,
  labelledBy,
  panel = false,
  className = "",
  children,
}: {
  id?: string;
  labelledBy?: string;
  panel?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-10 md:py-14 ${className}`}>
      <div className="container-site">
        {panel ? <div className="bg-white px-5 py-12 sm:px-10 md:py-16 lg:px-16">{children}</div> : children}
      </div>
    </section>
  );
}

/** Título de seção (sem rótulo em cima) e, se houver, um texto curto ao lado. */
export function SectionTitle({
  id,
  title,
  text,
  className = "",
}: {
  id: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12 ${className}`}>
      <h2 id={id} data-reveal className="accent max-w-[18ch] text-display-lg">
        {headline(title)}
      </h2>
      {text && (
        <p data-reveal className="max-w-[40ch] text-lead text-text-muted lg:justify-self-end">
          {text}
        </p>
      )}
    </div>
  );
}
