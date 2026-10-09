import { Section } from "@/components/ui/Section";
import type { Landing } from "@/content/types";
import { emphasis } from "@/lib/emphasis";

/** "O que a lei diz": base legal explicada + três ideias centrais em sequência. */
export function LawSection({ landing }: { landing: Landing }) {
  const { law, summaryBox } = landing;
  return (
    <Section labelledBy="lei">
      <div className="container-site grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <p className="eyebrow">O que a lei diz</p>
          <h2 id="lei" className="em-gold mt-5 max-w-[20ch] text-display-lg">
            {emphasis(law.title)}
          </h2>
          <div className="mt-8 space-y-5 text-[1.0625rem] text-text-muted">
            {law.paragraphs.map((p, i) => (
              <p key={i}>{emphasis(p)}</p>
            ))}
          </div>

          {summaryBox && (
            <aside className="mt-10 border border-paper-3 bg-paper-2 p-6 md:p-7">
              <p className="font-caps text-[0.68rem] tracking-[0.18em] text-gold-deep">EM SÍNTESE</p>
              <p className="mt-3 text-[1rem] leading-relaxed text-text">{summaryBox}</p>
            </aside>
          )}
        </div>

        <ol className="relative self-start border-l border-paper-3 pl-8 md:pl-10">
          {law.pillars.map((pillar, i) => (
            <li key={pillar.title} className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute top-1.5 -left-[calc(2rem+5px)] size-2.5 rotate-45 border border-gold bg-paper md:-left-[calc(2.5rem+5px)]"
              />
              <p className="font-display text-[2.6rem] leading-none text-gold italic" aria-hidden>{toRoman(i + 1)}</p>
              <h3 className="mt-3 font-caps text-[0.82rem] tracking-[0.16em] text-text">{pillar.title.toUpperCase()}</h3>
              <p className="mt-2.5 max-w-[42ch] text-text-muted">{pillar.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function toRoman(n: number) {
  return ["I", "II", "III", "IV", "V", "VI"][n - 1] ?? String(n);
}
