import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Landing } from "@/content/types";

export function RelatedTopics({ items }: { items: Landing[] }) {
  if (items.length === 0) return null;
  return (
    <Section tone="mist" labelledBy="relacionados" className="!py-16 md:!py-20">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="relacionados" className="text-display-md">
            Outros assuntos que podem ajudar
          </h2>
          <Link
            href="/#atuacao"
            className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-gold-text hover:text-ink"
          >
            Ver todas as áreas <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/${l.slug}`}
                className="group flex h-full flex-col gap-3 border border-transparent bg-white p-7 transition-colors duration-300 hover:border-gold"
              >
                <h3 className="text-[1.25rem] leading-snug">{l.topic}</h3>
                <p className="text-[0.92rem] text-text-muted">{l.summary}</p>
                <ArrowRight
                  className="mt-auto size-4 text-gold-text transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
