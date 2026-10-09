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
    <Section tone="paper-2" labelledBy="avaliacoes">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Avaliações</p>
            <h2 id="avaliacoes" className="em-gold mt-5 text-display-lg">
              O que dizem <em>os clientes</em>
            </h2>
          </div>
          {googleRating && googleCount && (
            <p className="flex items-center gap-3 text-text-muted">
              <span className="nums-lining font-display text-[2.4rem] leading-none text-text">
                {googleRating.toFixed(1).replace(".", ",")}
              </span>
              <span>
                <span className="flex gap-0.5 text-gold-mid" aria-hidden>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <span className="text-[0.9rem]">{googleCount} avaliações no Google</span>
              </span>
            </p>
          )}
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((review) => (
            <li key={review.author + review.text.slice(0, 20)} className="flex flex-col gap-5 border border-paper-3 bg-paper p-7">
              <blockquote className="font-display text-[1.25rem] leading-snug text-text">“{review.text}”</blockquote>
              <p className="mt-auto font-caps text-[0.68rem] tracking-[0.16em] text-gold-deep">{review.author.toUpperCase()}</p>
            </li>
          ))}
        </ul>

        {googleUrl && (
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-caps text-[0.7rem] tracking-[0.16em] text-gold-deep hover:text-text"
          >
            VER TODAS NO GOOGLE <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        )}
      </div>
    </Section>
  );
}
