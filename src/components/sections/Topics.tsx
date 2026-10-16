import { Section, SectionTitle } from "@/components/ui/Section";
import { getLanding, landings } from "@/content/landings";
import type { Landing } from "@/content/types";
import { TopicCard, TopicList } from "./TopicCards";

/** Os assuntos mais procurados ganham card com foto; os demais ficam na lista logo abaixo. */
const FEATURED = [
  "verbas-rescisorias",
  "gestante",
  "acidente-de-trabalho",
  "inss",
  "aposentadoria",
  "horas-extras",
  "carteira-assinada",
  "trabalhador-rural",
];

export function Topics() {
  const featured = FEATURED.map(getLanding).filter((l): l is Landing => Boolean(l));
  const others = landings.filter((l) => !FEATURED.includes(l.slug));

  return (
    <Section id="assuntos" labelledBy="assuntos-titulo" className="pt-16 md:pt-24">
      <SectionTitle
        id="assuntos-titulo"
        title="Qual é o seu caso?"
        text="Toque no assunto para ver, em poucas linhas, quais direitos podem existir."
      />
      <ul className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {featured.map((l, i) => (
          <li key={l.slug}>
            <TopicCard landing={l} index={i} />
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:gap-12">
        <h3 data-reveal className="font-display text-display-sm">
          Outros assuntos
        </h3>
        <TopicList items={others} />
      </div>
    </Section>
  );
}
