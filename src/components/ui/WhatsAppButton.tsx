import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

type Props = {
  message?: string;
  /** Identifica de onde veio o clique (ex.: "hero", "situacao-3"). Usado na medição. */
  source: string;
  children?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
  /** Linha pequena abaixo do botão. */
  note?: string;
};

/**
 * Botão principal de conversão. Abre o WhatsApp com a mensagem já preenchida.
 * O atributo data-wa é lido por <Analytics /> para registrar o clique.
 */
export function WhatsAppButton({ message, source, children = "Conversar com o advogado", size = "lg", className = "", note }: Props) {
  const sizing = size === "lg" ? "min-h-14 px-7 text-[1.0625rem]" : "min-h-12 px-5 text-[0.95rem]";
  const button = (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-wa={source}
      className={`group inline-flex items-center justify-center gap-3 rounded-[3px] bg-whatsapp font-semibold text-white shadow-[0_10px_30px_-12px_rgb(26_127_69/0.7)] transition-[background-color,transform,box-shadow] duration-300 ease-elegant hover:-translate-y-0.5 hover:bg-whatsapp-hover hover:shadow-[0_16px_34px_-14px_rgb(26_127_69/0.8)] active:translate-y-0 ${sizing} ${note ? "" : className}`}
    >
      <WhatsAppIcon className="size-[1.35em] shrink-0" />
      <span>{children}</span>
    </a>
  );
  if (!note) return button;
  return (
    <div className={`inline-flex flex-col items-start gap-2 ${className}`}>
      {button}
      <span className="text-[0.8rem] text-current opacity-70">{note}</span>
    </div>
  );
}
