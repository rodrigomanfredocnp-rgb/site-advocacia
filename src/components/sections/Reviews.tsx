import { ArrowUpRight, Star } from "lucide-react";
import type { CSSProperties } from "react";
import { Section, SectionTitle } from "@/components/ui/Section";
import { site } from "@/content/site";

/**
 * Avaliações reais do Google, cadastradas em src/content/site.ts.
 * Sem avaliações cadastradas, a seção não é exibida.
 */
export function Reviews() {
  const { items, googleRating, googleCount, googleUrl } = site.reviews;
  if (items.length === 0) return null;

  return (
    <Section labelledBy="avaliacoes-titulo">
      <SectionTitle
        id="avaliacoes-titulo"
        title="O que dizem os clientes."
        text={
          googleRating && googleCount
            ? `Nota ${googleRating.toFixed(1).replace(".", ",")} em ${googleCount} avaliações no Google.`
            : undefined
        }
      />
      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((review, i) => (
          <li
            key={review.author + review.text.slice(0, 20)}
            data-reveal
            style={{ "--i": i % 3 } as CSSProperties}
            className="flex flex-col gap-5 bg-white p-8"
          >
            <span className="flex gap-0.5 text-gold" aria-hidden>
              {Array.from({ length: 5 }, (_, s) => (
                <Star key={s} className="size-4 fill-current" />
              ))}
            </span>
            <blockquote className="text-[1.08rem] leading-relaxed">{review.text}</blockquote>
            <p className="mt-auto font-semibold">{review.author}</p>
          </li>
        ))}
      </ul>
      {googleUrl && (
        <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="link-arrow mt-10 text-gold-text">
          Ver avaliações no Google
          <ArrowUpRight className="size-5" aria-hidden />
        </a>
      )}
    </Section>
  );
}
