import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Landing } from "@/content/types";

/** O que separar para a conversa + erros comuns que fazem perder direitos. */
export function DocumentsMistakes({ landing }: { landing: Landing }) {
  return (
    <Section labelledBy="documentos">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="frame-double bg-paper">
          <div className="relative z-[2] p-7 md:p-10">
            <p className="eyebrow">Para a primeira conversa</p>
            <h2 id="documentos" className="em-gold mt-5 text-display-md">
              O que vale a pena <em>separar</em>
            </h2>
            <p className="mt-4 text-text-muted">Não precisa ter tudo. Comece com o que estiver ao seu alcance.</p>
            <ul className="mt-7 space-y-3.5">
              {landing.documents.map((doc) => (
                <li key={doc} className="flex gap-3.5">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center border border-gold/70 text-gold-deep">
                    <Check className="size-3.5" strokeWidth={2.4} aria-hidden />
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:pt-10">
          <p className="eyebrow">Atenção</p>
          <h2 className="em-gold mt-5 text-display-md">
            Erros que podem <em>custar o seu direito</em>
          </h2>
          <ul className="mt-8 divide-y divide-paper-3 border-y border-paper-3">
            {landing.mistakes.map((m) => (
              <li key={m} className="flex gap-4 py-4">
                <X className="mt-1 size-4 shrink-0 text-wine" strokeWidth={2.4} aria-hidden />
                <span className="text-text">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
