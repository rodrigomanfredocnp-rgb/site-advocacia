import { ArrowUpRight, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

/**
 * Avaliações reais do Google, cadastradas em src/content/site.ts.
 * Sem avaliações cadastradas, a seção não é exibida.
 */
export function Reviews() {
  const { items, googleRating, googleCount, googleUrl } = site.reviews;
  if (items.length === 0) return null;

  return (
    <Section labelledBy="avaliacoes">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Depoimentos</p>
            <h2 id="avaliacoes" className="accent mt-5 text-display-lg">
              A confiança de <em>quem foi atendido.</em>
            </h2>
          </div>
          {googleRating && googleCount && (
            <p className="flex items-center gap-3 text-text-muted">
              <span className="flex gap-0.5 text-gold" aria-hidden>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span className="text-[0.92rem]">
                {googleRating.toFixed(1).replace(".", ",")} · {googleCount} avaliações no Google
              </span>
            </p>
          )}
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((review) => (
            <li key={review.author + review.text.slice(0, 20)} className="flex flex-col gap-6 border border-line p-8">
              <span className="font-display text-[2.5rem] leading-none text-gold" aria-hidden>
                “
              </span>
              <blockquote className="-mt-4 text-[1.02rem] leading-relaxed">{review.text}</blockquote>
              <p className="mt-auto text-[0.9rem] font-semibold">{review.author}</p>
            </li>
          ))}
        </ul>

        {googleUrl && (
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-gold-text hover:text-ink"
          >
            Ver avaliações no Google <ArrowUpRight className="size-4" aria-hidden />
          </a>
        )}
      </div>
    </Section>
  );
}
