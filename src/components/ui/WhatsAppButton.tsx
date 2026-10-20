import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { InstagramIcon, WhatsAppIcon } from "./icons";

type Props = {
  message?: string;
  /** Identifica de onde veio o clique (ex.: "topo", "rodape"). Usado na medição. */
  source: string;
  children?: React.ReactNode;
  className?: string;
};

/**
 * Botão principal de conversão: abre o WhatsApp com a mensagem já escrita.
 * Verde da marca do WhatsApp (pedido do titular), grande e arredondado, com o ícone num círculo branco.
 * O atributo data-wa é lido por <Analytics />.
 */
export function WhatsAppButton({ message, source, children = "Analisar meu caso", className = "" }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-wa={source}
      className={`btn btn-whatsapp ${className}`}
    >
      <span className="btn-icon">
        <WhatsAppIcon className="size-[1.3rem]" />
      </span>
      <span>{children}</span>
    </a>
  );
}

/** Ícone redondo do Instagram, nas cores da marca. */
export function InstagramButton() {
  return (
    <a
      href={site.social.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Instagram ${site.social.instagramHandle}`}
      className="btn-instagram bg-instagram"
    >
      <InstagramIcon className="size-7" />
    </a>
  );
}

/** Topo das páginas: o botão do WhatsApp com o Instagram ao lado (ficam juntos ao quebrar a linha). */
export function ContactButtons({ source, message }: { source: string; message?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <WhatsAppButton source={source} message={message} />
      <InstagramButton />
    </div>
  );
}

/**
 * Botão flutuante do WhatsApp no canto inferior direito, em todas as telas (pedido do titular),
 * como o ícone do próprio WhatsApp. Tamanho em px: não cresce demais com o texto ampliado.
 */
export function WhatsAppFloat({ message }: { message?: string }) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-wa="flutuante"
      aria-label="Analisar meu caso pelo WhatsApp"
      className="fixed right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 grid size-[60px] place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_28px_-10px_rgb(0_0_0/0.55)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-whatsapp-hover print:hidden"
    >
      <WhatsAppIcon className="size-[32px]" />
    </a>
  );
}
