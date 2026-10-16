import type { CSSProperties, ReactNode } from "react";
import { AnimatedHeadline, plain } from "@/lib/emphasis";

/**
 * Topo escuro de todas as páginas (o cabeçalho transparente fica por cima).
 * O título entra palavra por palavra; texto e botões vêm logo depois; a foto abre de baixo para cima.
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
    <section aria-labelledby="titulo" className="bg-glow on-ink overflow-hidden text-text-inverse">
      <div
        className={`container-site grid items-center gap-12 pt-[calc(4.75rem+2.75rem)] lg:pt-[calc(5.5rem+4rem)] ${
          aside ? "lg:grid-cols-[1.08fr_0.92fr] lg:gap-16" : ""
        } ${size === "lg" ? "pb-16 lg:pb-24" : "pb-14 lg:pb-20"}`}
      >
        <div className="flex flex-col items-start">
          <h1
            id="titulo"
            aria-label={plain(title)}
            className={`accent max-w-[16ch] ${size === "lg" ? "text-display-xl" : "text-display-lg"}`}
          >
            <AnimatedHeadline text={title} />
          </h1>
          {lead && (
            <div style={{ "--d": 0 } as CSSProperties} className="load-in mt-7 max-w-[44ch] text-lead text-text-inverse-muted">
              {lead}
            </div>
          )}
          {actions && (
            <div style={{ "--d": 1 } as CSSProperties} className="load-in mt-10 flex flex-wrap items-center gap-4">
              {actions}
            </div>
          )}
          {note && (
            <div style={{ "--d": 2 } as CSSProperties} className="load-in mt-8 text-[1rem] text-text-inverse-muted">
              {note}
            </div>
          )}
        </div>
        {aside}
      </div>
    </section>
  );
}
