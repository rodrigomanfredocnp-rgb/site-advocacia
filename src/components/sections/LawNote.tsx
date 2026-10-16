import { Scale } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Landing } from "@/content/types";
import { headline } from "@/lib/emphasis";

/** "O que diz a lei": a regra em poucas linhas, com a fonte conferida e o aviso de análise individual. */
export function LawNote({ law }: { law: NonNullable<Landing["law"]> }) {
  return (
    <Section id="lei" labelledBy="lei-titulo" panel>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div data-reveal className="flex flex-col items-start gap-6">
          <span className="grid size-14 place-items-center rounded-full bg-champagne text-gold-text">
            <Scale className="size-6" strokeWidth={1.6} aria-hidden />
          </span>
          <h2 id="lei-titulo" className="accent text-display-lg">
            {headline("O que diz a lei.")}
          </h2>
        </div>
        <div data-reveal>
          <p className="max-w-[52ch] text-[1.28rem] leading-relaxed">{law.text}</p>
          <span data-reveal="line" className="hairline mt-9" />
          <p className="mt-5 text-[1rem] text-text-muted">
            <span className="font-semibold text-text">Base legal:</span> {law.source}
          </p>
          <p className="mt-2 text-[1rem] text-text-muted">Cada caso é analisado individualmente, com as datas e os documentos.</p>
        </div>
      </div>
    </Section>
  );
}
