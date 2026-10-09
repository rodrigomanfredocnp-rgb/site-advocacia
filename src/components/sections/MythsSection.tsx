import { Section } from "@/components/ui/Section";
import type { Landing } from "@/content/types";

/** "O que muitos pensam × o que a lei diz", com a fonte de cada resposta. */
export function MythsSection({ landing }: { landing: Landing }) {
  return (
    <Section tone="mist" labelledBy="mitos">
      <div className="container-site">
        <p className="eyebrow">Mitos e verdades</p>
        <h2 id="mitos" className="accent mt-5 max-w-[22ch] text-display-lg">
          O que muita gente pensa, e <em>o que a lei diz.</em>
        </h2>

        <div className="mt-14">
          <div className="hidden grid-cols-2 gap-10 border-b border-ink pb-4 text-[0.72rem] font-semibold tracking-[0.2em] uppercase md:grid">
            <p className="text-text-muted">O que muitos pensam</p>
            <p className="text-gold-text">O que a lei diz</p>
          </div>
          <dl>
            {landing.myths.map((m) => (
              <div key={m.myth} className="grid gap-3 border-b border-line py-7 md:grid-cols-2 md:gap-10">
                <dt className="text-text-muted">
                  <span className="mr-2 text-[0.7rem] font-semibold tracking-[0.2em] uppercase md:hidden">Mito:</span>
                  {m.myth}
                </dt>
                <dd>
                  <span className="mr-2 text-[0.7rem] font-semibold tracking-[0.2em] text-gold-text uppercase md:hidden">
                    Verdade:
                  </span>
                  {m.fact}
                  {m.source && <span className="mt-2 block text-[0.82rem] text-gold-text">{m.source}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
