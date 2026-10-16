import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ViewTransition, type CSSProperties } from "react";
import { Photo, topicPhoto } from "@/components/ui/Photo";
import type { Landing } from "@/content/types";

/**
 * Card de página com foto. No celular vira uma linha (foto pequena + texto), fácil de rolar e tocar;
 * a partir do tablet, card com a foto em cima. Com texto ampliado, o texto desce para baixo da foto. A foto tem o mesmo nome de transição da foto do topo
 * da página de destino: ao clicar, ela "voa" até lá.
 */
export function TopicCard({
  landing,
  index = 0,
  text,
  linkLabel,
}: {
  landing: Landing;
  index?: number;
  /** Texto do card (padrão: o resumo da página). */
  text?: string;
  /** Texto do link no pé do card (cards das áreas principais). */
  linkLabel?: string;
}) {
  return (
    <Link
      href={`/${landing.slug}`}
      data-reveal
      style={{ "--i": index % 4 } as CSSProperties}
      className="group flex h-full flex-wrap items-center gap-4 bg-white p-3 pr-4 transition-shadow duration-500 hover:shadow-[0_24px_50px_-30px_rgb(14_13_11/0.35)] sm:flex-col sm:flex-nowrap sm:items-stretch sm:gap-0 sm:p-0"
    >
      {landing.photo && (
        <div className="relative shrink-0">
          <ViewTransition name={`foto-${landing.slug}`} share="morph" default="none">
            <Photo
              name={topicPhoto(landing.slug)}
              alt=""
              focus={landing.photo.focus}
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 6rem"
              className="zoom-img aspect-square w-[5.5rem] sm:aspect-[4/3] sm:w-full"
            />
          </ViewTransition>
          <span className="arrow-circle arrow-circle-photo absolute right-4 bottom-4 max-sm:hidden">
            <ArrowRight className="size-5" aria-hidden />
          </span>
        </div>
      )}
      <div className="flex min-w-0 flex-[1_1_8rem] flex-col sm:flex-1 sm:p-6">
        <h3 className="font-display text-[1.3rem] leading-tight text-text sm:text-[1.5rem]">{landing.name}</h3>
        <p className="mt-1.5 text-[1rem] leading-snug text-text-muted sm:mt-2.5">{text ?? landing.summary}</p>
        {linkLabel && (
          <span className="mt-auto hidden items-center gap-2 pt-5 font-semibold text-gold-text sm:inline-flex">
            {linkLabel}
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
          </span>
        )}
      </div>
    </Link>
  );
}

/** Lista legível de páginas (áreas complementares): nome, uma linha de descrição e seta. */
export function PageList({ items }: { items: Landing[] }) {
  return (
    <ul className="border-t border-line">
      {items.map((l, i) => (
        <li key={l.slug} data-reveal style={{ "--i": i % 3 } as CSSProperties}>
          <Link
            href={`/${l.slug}`}
            className="group flex min-h-[4.5rem] items-center gap-5 border-b border-line py-4 transition-colors hover:text-gold-text"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[1.15rem] font-semibold">{l.name}</span>
              <span className="mt-0.5 block text-[1rem] text-text-muted">{l.summary}</span>
            </span>
            <ArrowRight
              className="size-5 shrink-0 text-gold-text transition-transform duration-500 group-hover:translate-x-1.5"
              aria-hidden
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Grade de cards de assuntos (usada nas páginas das áreas e no fim das páginas de assunto). */
export function TopicGrid({ items }: { items: Landing[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {items.map((l, i) => (
        <li key={l.slug}>
          <TopicCard landing={l} index={i} />
        </li>
      ))}
    </ul>
  );
}
