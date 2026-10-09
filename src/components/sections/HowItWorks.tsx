import { Section, SectionHeader } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { steps } from "@/content/shared";

/** Os três passos do atendimento (sequência real, por isso numerada). */
export function HowItWorks({ whatsapp, tone = "white" }: { whatsapp?: string; tone?: "white" | "mist" }) {
  return (
    <Section id="como-funciona" tone={tone} labelledBy="como-funciona-titulo">
      <div className="container-site">
        <SectionHeader
          id="como-funciona-titulo"
          eyebrow="Como funciona"
          title="Do primeiro contato à *orientação completa*."
          intro="Três passos, sem burocracia e sem sair de casa. Você fala com o advogado, não com um robô."
        />

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-line pt-8">
              <span className="font-display text-[2.2rem] leading-none text-gold-mid" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-display-sm">{step.title}</h3>
              <p className="mt-3 text-text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <WhatsAppButton source="como-funciona" message={whatsapp}>
            Começar pelo WhatsApp
          </WhatsAppButton>
          <p className="text-[0.92rem] text-text-muted">A primeira conversa serve para entender o seu caso.</p>
        </div>
      </div>
    </Section>
  );
}
