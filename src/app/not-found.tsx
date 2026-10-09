import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ColumnGlyph } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function NotFound() {
  return (
    <>
      <SiteHeader variant="home" />
      <main id="conteudo" className="flex flex-1 items-center bg-paper py-24">
        <div className="container-narrow flex flex-col items-center text-center">
          <ColumnGlyph className="h-14 w-auto text-gold" />
          <p className="mt-6 font-caps text-[0.72rem] tracking-[0.2em] text-gold-deep">ERRO 404</p>
          <h1 className="em-gold mt-4 text-display-lg">
            Esta página <em>não foi encontrada</em>
          </h1>
          <p className="mt-5 max-w-[46ch] text-text-muted">
            O endereço pode ter mudado. Volte para o início para ver todas as áreas de atuação, ou fale direto com o advogado.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex min-h-14 items-center rounded-[3px] border border-text/25 px-6 font-semibold transition-colors hover:border-gold-deep hover:text-gold-deep"
            >
              Ir para o início
            </Link>
            <WhatsAppButton source="404">Falar no WhatsApp</WhatsAppButton>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
