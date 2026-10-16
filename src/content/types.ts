/**
 * Modelo de dados das páginas de atuação.
 *
 * Duas espécies de página usam o mesmo template (src/app/[slug]/page.tsx):
 * - "area": página de uma área de atuação (Cível, Trabalho, Previdenciário, Família...).
 * - "assunto": página de um assunto específico dentro de uma área (gestante, pensão por morte...),
 *   pensada também para receber tráfego pago.
 *
 * Os textos são curtos e simples de propósito (público com muitas pessoas mais velhas) e seguem
 * a revisão do titular: sem promessa de resultado, sem juridiquês, leis só quando conferidas.
 * Ênfase: *trecho* fica em dourado (sem itálico) e **trecho** vira <strong>. Ver src/lib/emphasis.tsx.
 */

export type AreaId =
  "civel" | "trabalho" | "previdenciario" | "familia" | "servidores" | "transito" | "criminal" | "dividas" | "escritorios";

export type Faq = { q: string; a: string };

/** Caminho destacado dentro de uma área (ex.: Trabalhadores | Empresas). */
export type AudiencePath = { title: string; text: string; href: string; cta: string };

export type Landing = {
  slug: string;
  area: AreaId;
  kind: "area" | "assunto";

  /** Nome curto (menus, cards, rodapé). */
  name: string;
  /** Uma frase curta para os cards. */
  summary: string;
  /** Foto do banco de imagens (public/img/tema-<slug>). Sem foto, o topo fica só com texto. */
  photo?: { alt: string; focus?: string };

  seo: { title: string; description: string };

  hero: {
    title: string;
    /** Uma ou duas frases simples. */
    lead: string;
  };

  /** Assuntos atendidos: lista simples, sem botão de WhatsApp em cada item (dispensável quando há `children`). */
  topics?: { title?: string; items: string[] };

  /** Explicações curtas (ex.: o que é o BPC, como funciona a parceria). */
  notes?: { title: string; text: string }[];

  /** Caminhos destacados da área (ex.: Trabalhadores e Empresas). */
  paths?: AudiencePath[];

  /** Assuntos desta área exibidos como cards com foto, na ordem desejada. */
  children?: string[];

  /** "O que diz a lei": só em páginas de assunto e só com fonte conferida. */
  law?: { text: string; source: string };

  /** Documentos inicialmente úteis (o envio é combinado no atendimento). */
  documents: string[];
  /** Título da lista de documentos, quando não for "Documentos que ajudam". */
  documentsTitle?: string;

  /** De 2 a 3 perguntas. */
  faq: Faq[];

  /** Mensagem do WhatsApp. Padrão: neutra (sem detalhes do caso na URL). */
  whatsapp?: string;
};
