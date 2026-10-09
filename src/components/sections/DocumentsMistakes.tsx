import { Check, Minus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Landing } from "@/content/types";

/** O que separar para a conversa + erros comuns que fazem perder direitos. */
export function DocumentsMistakes({ landing }: { landing: Landing }) {
  return (
    <Section labelledBy="documentos">
      <div className="container-site grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Para a primeira conversa</p>
          <h2 id="documentos" className="accent mt-5 text-display-md">
            O que vale a pena <em>separar</em>
          </h2>
          <p className="mt-4 text-text-muted">Não precisa ter tudo. Comece com o que estiver ao seu alcance.</p>
          <ul className="mt-8 border-t border-line">
            {landing.documents.map((doc) => (
              <li key={doc} className="flex gap-4 border-b border-line py-4">
                <Check className="mt-1 size-4 shrink-0 text-gold-text" strokeWidth={2} aria-hidden />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Atenção</p>
          <h2 className="accent mt-5 text-display-md">
            Erros que podem <em>custar o seu direito</em>
          </h2>
          <p className="mt-4 text-text-muted">Situações comuns que fazem muita gente perder valores.</p>
          <ul className="mt-8 border-t border-line">
            {landing.mistakes.map((m) => (
              <li key={m} className="flex gap-4 border-b border-line py-4">
                <Minus className="mt-1 size-4 shrink-0 text-ink" strokeWidth={2} aria-hidden />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
