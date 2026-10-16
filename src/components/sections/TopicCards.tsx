import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ViewTransition, type CSSProperties } from "react";
import { Photo, topicPhoto } from "@/components/ui/Photo";
import type { Landing } from "@/content/types";

/**
 * Card de assunto com foto. No celular vira uma linha (foto pequena + título), mais fácil
 * de rolar e de tocar; a partir do tablet, card com a foto em cima.
 * A foto tem o mesmo nome de transição da foto do topo da landing: ao clicar, ela "voa" até lá.
 */
export function TopicCard({ landing, index = 0 }: { landing: Landing; index?: number }) {
  return (
    <Link
      href={`/${landing.slug}`}
      data-reveal
      style={{ "--i": index % 4 } as CSSProperties}
      className="group flex h-full items-center gap-4 bg-white p-3 pr-4 transition-shadow duration-500 hover:shadow-[0_24px_50px_-30px_rgb(14_13_11/0.35)] sm:flex-col sm:items-stretch sm:gap-0 sm:p-0"
    >
      <div className="relative shrink-0">
        <ViewTransition name={`foto-${landing.slug}`} share="morph" default="none">
          <Photo
            name={topicPhoto(landing.slug)}
            alt=""
            focus={landing.photoFocus}
            sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 6rem"
            className="zoom-img aspect-square w-[5.5rem] sm:aspect-[4/3] sm:w-full"
          />
        </ViewTransition>
        <span className="arrow-circle arrow-circle-photo absolute right-4 bottom-4 max-sm:hidden">
          <ArrowRight className="size-5" aria-hidden />
        </span>
      </div>
      <div className="min-w-0 flex-1 sm:p-6">
        <h3 className="font-display text-[1.3rem] leading-tight text-text sm:text-[1.45rem]">{landing.topic}</h3>
        <p className="mt-1.5 text-[1rem] leading-snug text-text-muted sm:mt-2.5">{landing.summary}</p>
      </div>
    </Link>
  );
}

/** Lista enxuta no estilo imk.ca: seta, nome do assunto e um fio fino embaixo. */
export function TopicList({ items }: { items: Landing[] }) {
  return (
    <ul className="grid gap-x-12 sm:grid-cols-2">
      {items.map((l, i) => (
        <li key={l.slug} data-reveal style={{ "--i": i % 2 } as CSSProperties}>
          <Link
            href={`/${l.slug}`}
            className="group flex min-h-[4.25rem] items-center gap-5 border-b border-line py-3 text-[1.15rem] font-medium transition-colors hover:text-gold-text"
          >
            <ArrowRight
              className="size-5 shrink-0 text-gold-text transition-transform duration-500 group-hover:translate-x-1.5"
              aria-hidden
            />
            {l.topic}
          </Link>
        </li>
      ))}
    </ul>
  );
}
