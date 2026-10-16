import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

type Props = {
  message?: string;
  /** Identifica de onde veio o clique (ex.: "hero", "situacao-3"). Usado na medição. */
  source: string;
  children?: React.ReactNode;
  /** primary = preto (fundo claro); gold = dourado (fundo escuro). */
  variant?: "primary" | "gold";
  className?: string;
};

/**
 * Botão principal de conversão: abre o WhatsApp com a mensagem já escrita.
 * Grande e arredondado, com o ícone num círculo (fácil de reconhecer e de tocar).
 * O atributo data-wa é lido por <Analytics />.
 */
export function WhatsAppButton({
  message,
  source,
  children = "Conversar no WhatsApp",
  variant = "primary",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-wa={source}
      className={`btn ${variant === "gold" ? "btn-gold" : "btn-primary"} ${className}`}
    >
      <span className="btn-icon">
        <WhatsAppIcon className="size-[1.3rem]" />
      </span>
      <span>{children}</span>
    </a>
  );
}
