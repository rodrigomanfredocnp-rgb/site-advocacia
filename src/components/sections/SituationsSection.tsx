import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Landing } from "@/content/types";
import { whatsappUrl } from "@/lib/whatsapp";

/** Cartões "Você se identifica?": cada um abre o WhatsApp com a situação já escrita. */
export function SituationsSection({ landing }: { landing: Landing }) {
  const { situations } = landing;
  return (
    <Section tone="mist" labelledBy="situacoes">
      <div className="container-site">
        <SectionHeader id="situacoes" eyebrow="Situações comuns" title={situations.title} intro={situations.intro} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {situations.items.map((item, i) => (
            <li key={item.title}>
              <a
                href={whatsappUrl(item.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                data-wa={`situacao-${i + 1}`}
                className="group flex h-full flex-col gap-4 border border-transparent bg-white p-8 transition-colors duration-300 hover:border-gold"
              >
                <h3 className="text-display-sm">{item.title}</h3>
                <p className="text-[0.97rem] text-text-muted">{item.text}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[0.9rem] font-semibold text-gold-text">
                  Falar sobre isso
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
