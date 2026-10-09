import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { steps } from "@/content/shared";
import { toRoman } from "./LawSection";

/** Os três passos do atendimento. Numerais romanos, como na coluna da marca. */
export function HowItWorks({ whatsapp, id = "como-funciona" }: { whatsapp?: string; id?: string }) {
  return (
    <Section id={id} labelledBy={`${id}-titulo`}>
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Como funciona</p>
            <h2 id={`${id}-titulo`} className="em-gold mt-5 max-w-[18ch] text-display-lg">
              Do primeiro contato à <em>orientação completa</em>
            </h2>
          </div>
          <p className="max-w-[44ch] text-text-muted lg:justify-self-end">
            Três passos, sem burocracia e sem precisar sair de casa. Você fala com o advogado, não com um robô.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
          {steps.map((step, i) => (
            <li key={step.title} className="relative md:border-l md:border-paper-3 md:px-8 md:first:border-l-0 md:first:pl-0">
              <span className="font-caps text-[2.4rem] leading-none text-gold-mid" aria-hidden>
                {toRoman(i + 1)}
              </span>
              <h3 className="mt-5 font-display text-display-sm">{step.title}</h3>
              <p className="mt-3 text-text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-start gap-3 border-t border-paper-3 pt-10 sm:flex-row sm:items-center sm:gap-6">
          <WhatsAppButton source="como-funciona" message={whatsapp}>
            Começar pelo WhatsApp
          </WhatsAppButton>
          <p className="text-[0.92rem] text-text-muted">A primeira conversa serve para entender o seu caso.</p>
        </div>
      </div>
    </Section>
  );
}
