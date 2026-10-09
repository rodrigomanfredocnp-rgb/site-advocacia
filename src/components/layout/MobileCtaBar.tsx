import { WhatsAppIcon } from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/whatsapp";

/** Barra fixa de WhatsApp no celular (landings). No desktop vira um botão flutuante. */
export function MobileCtaBar({ message }: { message?: string }) {
  return (
    <>
      <aside aria-label="Contato rápido">
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-3 bg-ink/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] backdrop-blur md:hidden">
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            data-wa="barra-mobile"
            className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[3px] bg-whatsapp font-semibold text-white"
          >
            <WhatsAppIcon className="size-5" />
            Conversar com o advogado
          </a>
        </div>
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          data-wa="flutuante"
          aria-label="Conversar no WhatsApp"
          className="fixed right-6 bottom-6 z-40 hidden size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_14px_30px_-10px_rgb(16_15_13/0.55)] ring-4 ring-paper/70 transition-transform duration-300 hover:scale-105 md:grid"
        >
          <WhatsAppIcon className="size-7" />
        </a>
      </aside>
      {/* Espaço para a barra não cobrir o fim do rodapé no celular. */}
      <div className="h-[calc(4.5rem+env(safe-area-inset-bottom,0px))] bg-ink md:hidden" aria-hidden />
    </>
  );
}
