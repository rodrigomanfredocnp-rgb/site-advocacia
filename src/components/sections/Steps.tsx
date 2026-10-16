import type { CSSProperties } from "react";
import { Section, SectionTitle } from "@/components/ui/Section";
import { steps } from "@/content/shared";

/** Como funciona: três passos (sequência real, por isso numerada), cada um sob um fio que se desenha. */
export function Steps() {
  return (
    <Section id="como-funciona" labelledBy="como-funciona-titulo">
      <SectionTitle
        id="como-funciona-titulo"
        title="Como funciona."
        text="Simples como mandar uma mensagem. A primeira conversa não gera compromisso."
      />
      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span data-reveal="line" style={{ "--i": i } as CSSProperties} className="hairline !bg-ink/15" />
            <div data-reveal style={{ "--i": i } as CSSProperties} className="pt-7">
              <span className="font-display text-[3.2rem] leading-none text-gold-mid tabular-nums" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-display-sm">{step.title}</h3>
              <p className="mt-3 max-w-[34ch] text-[1.08rem] text-text-muted">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
