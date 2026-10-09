import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { landingGroups } from "@/content/landings";

/** Áreas de atuação em lista numerada com fios finos; cada linha leva à página do tema. */
export function PracticeAreas() {
  const groups = landingGroups();
  const order = new Map(groups.flatMap((g) => g.items).map((l, i) => [l.slug, String(i + 1).padStart(2, "0")]));

  return (
    <Section id="atuacao" labelledBy="atuacao-titulo">
      <div className="container-site">
        <SectionHeader
          id="atuacao-titulo"
          eyebrow="Áreas de atuação"
          title="Caminhos claros para *cada situação*."
          intro="Escolha o assunto mais próximo do seu caso. Cada página explica, em linguagem simples, o que a lei garante e como buscar os seus direitos."
        />

        <div className="mt-16 grid gap-16">
          {groups.map((group) => (
            <div key={group.category}>
              <h3 className="eyebrow">{group.label}</h3>
              <ul className="mt-4 border-t border-line">
                {group.items.map((l) => (
                  <li key={l.slug} className="border-b border-line">
                    <Link
                      href={`/${l.slug}`}
                      className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-x-4 py-7 md:grid-cols-[5rem_1.1fr_1.4fr_auto] md:gap-x-8"
                    >
                      <span className="font-display text-[1.6rem] leading-none text-gold-mid md:text-[2.2rem]" aria-hidden>
                        {order.get(l.slug)}
                      </span>
                      <span className="font-display text-[1.35rem] leading-snug transition-colors group-hover:text-gold-text md:text-[1.5rem]">
                        {l.topic}
                      </span>
                      <span className="col-start-2 row-start-2 mt-2 text-[0.95rem] text-text-muted md:col-start-3 md:row-start-1 md:mt-0">
                        {l.summary}
                      </span>
                      <ArrowRight
                        className="col-start-3 row-start-1 size-5 text-text-muted transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-gold-text md:col-start-4"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
