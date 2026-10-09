import { LogoSymbol } from "@/components/brand/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { emphasis } from "@/lib/emphasis";

/** Fechamento de página em faixa preta com o monograma: um único convite. */
export function FinalCta({
  title = "Seu caso merece *uma análise cuidadosa.*",
  text = "Conte o que aconteceu. O Dr. Jhonny analisa a sua situação e explica, com clareza, quais caminhos existem.",
  whatsapp,
}: {
  title?: string;
  text?: string;
  whatsapp?: string;
}) {
  return (
    <section aria-labelledby="cta-final" className="on-ink bg-ink py-20 text-text-inverse md:py-24">
      <div className="container-narrow flex flex-col items-center text-center">
        <LogoSymbol className="h-14 w-auto" />
        <h2 id="cta-final" className="accent mt-8 max-w-[22ch] text-display-lg">
          {emphasis(title)}
        </h2>
        <p className="mt-5 max-w-[50ch] text-text-inverse-muted">{text}</p>
        <WhatsAppButton source="cta-final" message={whatsapp} variant="gold" className="mt-10">
          Falar com o advogado
        </WhatsAppButton>
      </div>
    </section>
  );
}
