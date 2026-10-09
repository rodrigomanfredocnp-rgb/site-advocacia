import { ColumnGlyph } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { emphasis } from "@/lib/emphasis";

/** Fechamento de página: um único convite, dentro da moldura dupla. */
export function FinalCta({
  title = "Seu caso merece *uma análise cuidadosa*.",
  text = "Conte o que aconteceu. O Dr. Jhonny analisa a sua situação e explica, com clareza, quais caminhos existem.",
  whatsapp,
}: {
  title?: string;
  text?: string;
  whatsapp?: string;
}) {
  return (
    <section aria-labelledby="cta-final" className="bg-paper py-20 md:py-28">
      <div className="container-site">
        <div className="frame-double mx-auto max-w-4xl bg-paper">
          <div className="relative z-[2] flex flex-col items-center px-6 py-14 text-center md:px-16 md:py-20">
            <ColumnGlyph className="h-12 w-auto text-gold" />
            <h2 id="cta-final" className="em-gold mt-6 max-w-[20ch] text-display-lg">
              {emphasis(title)}
            </h2>
            <p className="mt-5 max-w-[52ch] text-text-muted">{text}</p>
            <WhatsAppButton source="cta-final" message={whatsapp} className="mt-9" />
          </div>
        </div>
      </div>
    </section>
  );
}
