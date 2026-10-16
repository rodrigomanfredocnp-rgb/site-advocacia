import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { Section, SectionTitle } from "@/components/ui/Section";
import type { Situation } from "@/content/types";
import { whatsappUrl } from "@/lib/whatsapp";

/** "Qual é o seu caso?": cada linha é um botão grande que abre o WhatsApp já com o assunto escrito. */
export function Situations({ items }: { items: Situation[] }) {
  return (
    <Section id="seu-caso" labelledBy="seu-caso-titulo" className="pt-16 md:pt-24">
      <SectionTitle
        id="seu-caso-titulo"
        title="Qual é o seu caso?"
        text="Toque na frase mais parecida com a sua situação. A conversa já começa com o assunto certo."
      />
      <ul className="mt-12 grid gap-3 md:grid-cols-2 md:gap-4">
        {items.map((s, i) => (
          <li key={s.title} data-reveal style={{ "--i": i % 2 } as CSSProperties}>
            <a
              href={whatsappUrl(s.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              data-wa={`situacao-${i + 1}`}
              className="group flex min-h-[5.25rem] items-center gap-4 bg-white px-5 py-4 transition-[box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-30px_rgb(14_13_11/0.4)] sm:px-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-champagne text-gold-text transition-colors duration-500 group-hover:bg-ink group-hover:text-gold">
                <WhatsAppIcon className="size-5" />
              </span>
              <span className="flex-1 text-[1.12rem] leading-snug font-medium">{s.title}</span>
              <ArrowUpRight
                className="size-5 shrink-0 text-text-muted transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
