import { WhatsAppIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * WhatsApp sempre à mão. No celular, uma barra fixa embaixo com um botão grande;
 * no computador, um botão redondo flutuante com um anel dourado que pulsa poucas vezes.
 */
export function MobileCtaBar({ message }: { message?: string }) {
  return (
    <>
      <aside aria-label="Contato rápido">
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] backdrop-blur md:hidden">
          <WhatsAppButton source="barra-celular" message={message} className="w-full">
            Conversar no WhatsApp
          </WhatsAppButton>
        </div>
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          data-wa="flutuante"
          aria-label="Conversar no WhatsApp"
          className="wa-ring fixed right-[max(1.5rem,env(safe-area-inset-right,0px))] bottom-6 z-40 hidden size-16 place-items-center rounded-full bg-ink text-gold shadow-[0_16px_36px_-14px_rgb(14_13_11/0.7)] transition-transform duration-300 hover:scale-105 md:grid"
        >
          <WhatsAppIcon className="size-7" />
        </a>
      </aside>
      {/* Espaço para a barra não cobrir o fim do rodapé no celular. */}
      <div className="h-[calc(5.1rem+env(safe-area-inset-bottom,0px))] bg-ink md:hidden" aria-hidden />
    </>
  );
}
