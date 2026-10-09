import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

type Props = {
  message?: string;
  /** Identifica de onde veio o clique (ex.: "hero", "situacao-3"). Usado na medição. */
  source: string;
  children?: React.ReactNode;
  /** primary = preto (fundo claro); gold = dourado (fundo preto). */
  variant?: "primary" | "gold";
  size?: "md" | "sm";
  className?: string;
};

/**
 * Botão principal de conversão: abre o WhatsApp com a mensagem já escrita.
 * Nas cores da marca (preto e dourado). O atributo data-wa é lido por <Analytics />.
 */
export function WhatsAppButton({
  message,
  source,
  children = "Falar com o advogado",
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-wa={source}
      className={`btn ${variant === "gold" ? "btn-gold" : "btn-primary"} ${size === "sm" ? "min-h-11 px-5 text-[0.9rem]" : ""} ${className}`}
    >
      <WhatsAppIcon className="size-[1.15em] shrink-0" />
      <span>{children}</span>
    </a>
  );
}
