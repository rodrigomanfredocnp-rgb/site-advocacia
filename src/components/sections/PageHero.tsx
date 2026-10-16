import type { CSSProperties, ReactNode } from "react";
import { headline } from "@/lib/emphasis";

/**
 * Topo escuro das páginas (o cabeçalho transparente fica por cima).
 * O título é texto real e aparece na hora (sem animar letras); o resto entra rápido, em sequência.
 */
export function PageHero({
  title,
  lead,
  actions,
  aside,
  note,
  size = "lg",
}: {
  title: string;
  lead?: ReactNode;
  actions?: ReactNode;
  /** Coluna da direita (foto). */
  aside?: ReactNode;
  /** Linha discreta embaixo dos botões. */
  note?: ReactNode;
  /** sm = páginas de texto (privacidade, termos, 404). */
  size?: "lg" | "sm";
}) {
  return (
    <section aria-labelledby="titulo" className="bg-glow on-ink text-text-inverse" data-hero>
      <div
        className={`container-site grid items-center gap-10 pt-[calc(4.75rem+2.5rem)] lg:pt-[calc(5.5rem+3.5rem)] ${
          aside ? "lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" : ""
        } ${size === "lg" ? "pb-14 lg:pb-20" : "pb-12 lg:pb-16"}`}
      >
        <div className="flex min-w-0 flex-col items-start">
          <h1 id="titulo" className={`accent max-w-[18ch] ${size === "lg" ? "text-display-xl" : "text-display-lg"}`}>
            {headline(title)}
          </h1>
          {lead && (
            <div style={{ "--d": 0 } as CSSProperties} className="load-in mt-6 max-w-[48ch] text-lead text-text-inverse-muted">
              {lead}
            </div>
          )}
          {actions && (
            <div style={{ "--d": 1 } as CSSProperties} className="load-in mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              {actions}
            </div>
          )}
          {note && (
            <div style={{ "--d": 2 } as CSSProperties} className="load-in mt-7 text-[1rem] text-text-inverse-muted">
              {note}
            </div>
          )}
        </div>
        {aside}
      </div>
    </section>
  );
}
