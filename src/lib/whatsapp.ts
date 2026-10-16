import { site } from "@/content/site";

/**
 * Mensagem neutra (revisão do titular): nada de saúde, situação criminal ou dados do caso na URL.
 * A conversa sobre o assunto acontece depois, no próprio WhatsApp.
 */
export const DEFAULT_WHATSAPP_MESSAGE = "Olá, gostaria de informações sobre atendimento. Vim pelo site.";

/** Link wa.me com a mensagem já preenchida. */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
