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
          <h2 id="lei" className="accent mt-5 max-w-[20ch] text-display-lg">
            {emphasis(law.title)}
          </h2>
          <div className="mt-8 space-y-5 text-[1.0625rem] text-text-muted">
            {law.paragraphs.map((p, i) => (
              <p key={i}>{emphasis(p)}</p>
            ))}
          </div>

          {summaryBox && (
            <aside className="mt-10 border-l-2 border-gold bg-mist px-7 py-6">
              <p className="eyebrow">Em síntese</p>
              <p className="mt-3 leading-relaxed">{summaryBox}</p>
            </aside>
          )}
        </div>

        <ol className="self-start border-t border-line">
          {law.pillars.map((pillar, i) => (
            <li key={pillar.title} className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-b border-line py-8">
              <span className="font-display text-[2rem] leading-none text-gold-mid" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-display-sm">{pillar.title}</h3>
                <p className="mt-2 max-w-[42ch] text-text-muted">{pillar.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
