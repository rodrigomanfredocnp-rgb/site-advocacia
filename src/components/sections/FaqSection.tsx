import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Faq } from "@/content/types";
import { emphasis } from "@/lib/emphasis";

/** Perguntas frequentes em <details>: funciona sem JavaScript e é acessível. */
export function FaqSection({
  items,
  title = "Respostas para as *dúvidas mais comuns*.",
  intro = "Se a sua dúvida não estiver aqui, pergunte pelo WhatsApp.",
  tone = "white",
}: {
  items: Faq[];
  title?: string;
  intro?: string;
  tone?: "white" | "mist";
}) {
  return (
    <Section id="duvidas" tone={tone} labelledBy="duvidas-titulo">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 id="duvidas-titulo" className="accent mt-5 text-display-lg">
            {emphasis(title)}
          </h2>
          <p className="mt-5 max-w-[34ch] text-text-muted">{intro}</p>
        </div>

        <div className="border-t border-line">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-left">
                <h3 className="text-[1.2rem] leading-snug md:text-[1.3rem]">{item.q}</h3>
                <Plus
                  className="mt-1 size-5 shrink-0 text-gold-text transition-transform duration-300 group-open:rotate-45"
                  strokeWidth={1.5}
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
