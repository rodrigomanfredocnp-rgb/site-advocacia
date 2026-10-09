import { Section } from "@/components/ui/Section";
import type { Landing } from "@/content/types";

/** Tabela "o que muitos pensam × o que a lei diz", com a fonte de cada resposta. */
export function MythsSection({ landing }: { landing: Landing }) {
  return (
    <Section tone="paper-2" labelledBy="mitos">
      <div className="container-site">
        <p className="eyebrow">Mitos e verdades</p>
        <h2 id="mitos" className="em-gold mt-5 max-w-[22ch] text-display-lg">
          O que muita gente pensa, e <em>o que a lei diz</em>
        </h2>

        <div className="mt-12 border border-paper-3 bg-paper">
          <div className="hidden grid-cols-2 border-b border-paper-3 font-caps text-[0.68rem] tracking-[0.18em] md:grid">
            <p className="px-8 py-4 text-text-muted">O QUE MUITOS PENSAM</p>
            <p className="border-l border-paper-3 px-8 py-4 text-gold-deep">O QUE A LEI DIZ</p>
          </div>
          <dl className="divide-y divide-paper-3">
            {landing.myths.map((m) => (
              <div key={m.myth} className="grid md:grid-cols-2">
                <dt className="px-6 pt-6 text-text-muted md:px-8 md:py-7">
                  <span className="font-caps text-[0.62rem] tracking-[0.18em] md:hidden">MITO · </span>
                  <span className="line-through decoration-wine/40 decoration-1">{m.myth}</span>
                </dt>
                <dd className="px-6 pt-2 pb-6 md:border-l md:border-paper-3 md:px-8 md:py-7">
                  <span className="font-caps text-[0.62rem] tracking-[0.18em] text-gold-deep md:hidden">VERDADE · </span>
                  <span className="text-text">{m.fact}</span>
                  {m.source && (
                    <span className="mt-2 block font-caps text-[0.62rem] tracking-[0.16em] text-gold-deep">
                      § {m.source.toUpperCase()}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
