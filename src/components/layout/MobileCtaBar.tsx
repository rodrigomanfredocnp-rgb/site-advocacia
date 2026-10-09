import { WhatsAppIcon } from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/whatsapp";

/** Barra fixa de WhatsApp no celular. No desktop vira um botão flutuante discreto. */
export function MobileCtaBar({ message }: { message?: string }) {
  return (
    <>
      <aside aria-label="Contato rápido">
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] backdrop-blur md:hidden">
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            data-wa="barra-mobile"
            className="btn btn-primary w-full"
          >
            <WhatsAppIcon className="size-5" />
            Falar com o advogado
          </a>
        </div>
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          data-wa="flutuante"
          aria-label="Falar no WhatsApp"
          className="fixed right-6 bottom-6 z-40 hidden size-14 place-items-center rounded-full border border-gold/60 bg-ink text-gold shadow-[0_12px_28px_-12px_rgb(15_15_15/0.6)] transition-transform duration-300 hover:scale-105 md:grid"
        >
          <WhatsAppIcon className="size-6" />
        </a>
      </aside>
      {/* Espaço para a barra não cobrir o fim do rodapé no celular. */}
      <div className="h-[calc(4.6rem+env(safe-area-inset-bottom,0px))] bg-ink md:hidden" aria-hidden />
    </>
  );
}
