import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { TOPIC_ICONS } from "@/components/ui/icons";
import { CATEGORY_LABEL, landingsByCategory } from "@/content/landings";

/**
 * Áreas de atuação no formato de sumário de código: cada tema é um parágrafo (§)
 * que leva à página própria do assunto.
 */
export function PracticeAreas() {
  const groups = (["trabalhista", "previdenciario"] as const).map((c) => ({ category: c, items: landingsByCategory(c) }));
  // Numeração contínua (§ 1, § 2...) atravessando os dois grupos.
  const order = new Map(groups.flatMap((g) => g.items).map((l, i) => [l.slug, i + 1]));

  return (
    <Section id="atuacao" labelledBy="atuacao-titulo">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Sumário</p>
            <h2 id="atuacao-titulo" className="em-gold mt-5 max-w-[18ch] text-display-lg">
              Áreas de <em>atuação</em>
            </h2>
          </div>
          <p className="max-w-[46ch] text-text-muted lg:justify-self-end">
            Escolha o assunto mais próximo da sua situação. Cada página explica, em linguagem simples, o que a lei garante e como
            buscar os seus direitos.
          </p>
        </div>

        <div className="mt-14 grid gap-14">
          {groups.map(
            (group) =>
              group.items.length > 0 && (
                <div key={group.category}>
                  <h3 className="flex items-center gap-4 font-caps text-[0.78rem] tracking-[0.2em] text-gold-deep">
                    {CATEGORY_LABEL[group.category].toUpperCase()}
                    <span className="h-px flex-1 bg-paper-3" aria-hidden />
                  </h3>
                  <ul className="mt-2 grid lg:grid-cols-2 lg:gap-x-14">
                    {group.items.map((l) => {
                      const Icon = TOPIC_ICONS[l.icon];
                      return (
                        <li key={l.slug} className="border-b border-paper-3">
                          <Link href={`/${l.slug}`} className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 py-6">
                            <span className="pt-1 font-caps text-[0.75rem] tracking-[0.1em] text-gold-deep" aria-hidden>
                              § {order.get(l.slug)}
                            </span>
                            <span>
                              <span className="flex items-center gap-3">
                                <Icon className="size-5 shrink-0 text-gold-deep" strokeWidth={1.5} aria-hidden />
                                <span className="font-display text-[1.45rem] leading-tight font-semibold text-text transition-colors group-hover:text-gold-deep">
                                  {l.topic}
                                </span>
                              </span>
                              <span className="mt-1.5 block text-[0.95rem] text-text-muted">{l.summary}</span>
                            </span>
                            <ArrowRight
                              className="mt-1.5 size-5 text-gold-deep transition-transform duration-300 group-hover:translate-x-1"
                              aria-hidden
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ),
          )}
        </div>
      </div>
    </Section>
  );
}
