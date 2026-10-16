/**
 * Modelo de dados de uma landing page.
 *
 * Os textos são curtos de propósito: o público inclui muitas pessoas mais velhas,
 * então cada bloco diz uma coisa só, com frases simples e sem juridiquês.
 *
 * Ênfase: trechos entre *asteriscos* ficam em dourado (sem itálico) e entre
 * **dois asteriscos** viram <strong>. Ver src/lib/emphasis.tsx.
 */

export type LandingCategory = "trabalhista" | "previdenciario";

export type Faq = { q: string; a: string };

export type Situation = {
  /** Frase curta, na voz de quem procura ajuda ("Fui demitida grávida"). */
  title: string;
  /** Mensagem do WhatsApp específica desta situação. */
  whatsapp: string;
};

export type Landing = {
  slug: string;
  category: LandingCategory;

  /** Nome curto do tema (menus, cards, rodapé). */
  topic: string;
  /** Uma frase curta para os cards (até ~80 caracteres). */
  summary: string;
  /** Descrição da foto do tema (texto alternativo). A foto é public/img/tema-<slug>. */
  photoAlt: string;
  /** Ponto de foco da foto no recorte, em CSS object-position (ex.: "50% 40%"). */
  photoFocus?: string;

  seo: { title: string; description: string };

  /** Mensagem padrão do WhatsApp desta landing. */
  whatsapp: string;

  hero: {
    /** Pergunta de dor, curta. Vira o H1. */
    title: string;
    /** Uma ou duas frases simples (até ~170 caracteres). */
    lead: string;
  };

  /** "Qual é o seu caso?": cada item abre o WhatsApp já com o assunto. De 4 a 6 itens. */
  situations: Situation[];

  /** "O que diz a lei": explicação curta, com a fonte conferida. */
  law: {
    /** No máximo três frases. */
    text: string;
    /** Base legal citada (conferida no texto oficial). */
    source: string;
  };

  /** De 3 a 4 perguntas. */
  faq: Faq[];

  /** Três slugs de temas relacionados. */
  related: string[];
};
