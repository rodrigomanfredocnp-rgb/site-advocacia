import { site } from "@/content/site";

export const DEFAULT_WHATSAPP_MESSAGE = "Olá, Dr. Jhonny! Vim pelo site e gostaria de conversar sobre o meu caso.";

/** Link wa.me com a mensagem já preenchida. */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
