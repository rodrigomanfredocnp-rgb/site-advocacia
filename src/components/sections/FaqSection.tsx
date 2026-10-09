import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Faq } from "@/content/types";
import { emphasis } from "@/lib/emphasis";

/** Perguntas frequentes em <details>: funciona sem JavaScript e é acessível. */
export function FaqSection({
  items,
  title = "Perguntas *frequentes*",
  intro = "Se a sua dúvida não estiver aqui, pergunte pelo WhatsApp.",
  id = "duvidas",
  tone = "paper",
}: {
  items: Faq[];
  title?: string;
  intro?: string;
  id?: string;
  tone?: "paper" | "paper-2";
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-titulo`}>
      <div className="container-site grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Dúvidas</p>
          <h2 id={`${id}-titulo`} className="em-gold mt-5 text-display-lg">
            {emphasis(title)}
          </h2>
          <p className="mt-5 max-w-[34ch] text-text-muted">{intro}</p>
        </div>

        <div className="border-t border-paper-3">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-paper-3">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-left">
                <h3 className="font-display text-[1.35rem] leading-snug font-medium text-text md:text-[1.5rem]">{item.q}</h3>
                <Plus
                  className="mt-1.5 size-5 shrink-0 text-gold-deep transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="max-w-[62ch] pb-7 text-text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
