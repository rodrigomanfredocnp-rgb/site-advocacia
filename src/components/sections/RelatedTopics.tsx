import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { TOPIC_ICONS } from "@/components/ui/icons";
import type { Landing } from "@/content/types";

export function RelatedTopics({ items }: { items: Landing[] }) {
  if (items.length === 0) return null;
  return (
    <Section tone="paper-2" labelledBy="relacionados" className="!py-16 md:!py-20">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="relacionados" className="em-gold text-display-md">
            Outros assuntos que <em>podem ajudar</em>
          </h2>
          <Link
            href="/#atuacao"
            className="inline-flex items-center gap-2 font-caps text-[0.7rem] tracking-[0.16em] text-gold-deep hover:text-text"
          >
            VER TODAS AS ÁREAS <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((l) => {
            const Icon = TOPIC_ICONS[l.icon];
            return (
              <li key={l.slug}>
                <Link
                  href={`/${l.slug}`}
                  className="group flex h-full flex-col gap-3 border border-paper-3 bg-paper p-6 transition-colors duration-300 hover:border-gold"
                >
                  <Icon className="size-6 text-gold-deep" strokeWidth={1.5} aria-hidden />
                  <h3 className="font-display text-[1.3rem] leading-tight font-semibold">{l.topic}</h3>
                  <p className="text-[0.92rem] text-text-muted">{l.summary}</p>
                  <ArrowRight
                    className="mt-auto size-4 text-gold-deep transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
