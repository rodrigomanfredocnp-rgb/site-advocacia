import { Plus } from "lucide-react";
import type { CSSProperties } from "react";
import { Section, SectionTitle } from "@/components/ui/Section";
import type { Faq } from "@/content/types";

/** Perguntas frequentes: linhas grandes, fáceis de tocar, que abrem com a altura animada. */
export function FaqList({ items, title = "Dúvidas comuns." }: { items: Faq[]; title?: string }) {
  return (
    <Section id="duvidas" labelledBy="duvidas-titulo" panel>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionTitle id="duvidas-titulo" title={title} className="!block" />
        <div className="border-t border-line">
          {items.map((item, i) => (
            <details
              key={item.q}
              data-reveal
              style={{ "--i": i } as CSSProperties}
              className="faq-item group border-b border-line"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-[1.18rem] font-semibold transition-colors hover:text-gold-text">
                {item.q}
                <span className="faq-icon grid size-10 shrink-0 place-items-center rounded-full border border-line text-gold-text">
                  <Plus className="size-5" aria-hidden />
                </span>
              </summary>
              <p className="max-w-[60ch] pb-7 text-[1.08rem] text-text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
