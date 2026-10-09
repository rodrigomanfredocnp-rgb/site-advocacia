import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Landing } from "@/content/types";
import { emphasis } from "@/lib/emphasis";
import { whatsappUrl } from "@/lib/whatsapp";

/** Cartões "Você se identifica?": cada um abre o WhatsApp com a situação já escrita. */
export function SituationsSection({ landing }: { landing: Landing }) {
  const { situations } = landing;
  return (
    <Section tone="paper-2" labelledBy="situacoes">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Situações comuns</p>
            <h2 id="situacoes" className="em-gold mt-5 max-w-[20ch] text-display-lg">
              {emphasis(situations.title)}
            </h2>
          </div>
          <p className="max-w-[46ch] text-text-muted lg:justify-self-end">{situations.intro}</p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden border border-paper-3 bg-paper-3 sm:grid-cols-2 lg:grid-cols-3">
          {situations.items.map((item, i) => (
            <li key={item.title} className="bg-paper">
              <a
                href={whatsappUrl(item.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                data-wa={`situacao-${i + 1}`}
                className="group flex h-full flex-col gap-4 p-7 transition-colors duration-300 hover:bg-[#fffdf8] md:p-8"
              >
                <h3 className="font-display text-display-sm text-text">{item.title}</h3>
                <p className="text-[0.98rem] text-text-muted">{item.text}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-caps text-[0.68rem] tracking-[0.16em] text-gold-deep">
                  FALAR SOBRE ISSO
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
