/**
 * Modelo de dados de uma landing page.
 *
 * Convenção de ênfase: trechos entre *asteriscos* viram <em> (itálico dourado)
 * e trechos entre **dois asteriscos** viram <strong>. Ver src/lib/emphasis.tsx.
 */

export type LandingCategory = "trabalhista" | "previdenciario";

export type IconName =
  | "baby"
  | "receipt"
  | "clock"
  | "id-card"
  | "shield-alert"
  | "hard-hat"
  | "stethoscope"
  | "gavel"
  | "door-open"
  | "flame"
  | "piggy-bank"
  | "shuffle"
  | "wheat"
  | "landmark"
  | "hourglass"
  | "hand-heart";

export type Situation = {
  title: string;
  text: string;
  /** Mensagem do WhatsApp específica desta situação. */
  whatsapp: string;
};

export type Myth = { myth: string; fact: string; source?: string };

export type Faq = { q: string; a: string };

export type Landing = {
  slug: string;
  category: LandingCategory;
  icon: IconName;

  /** Nome curto do tema (menus, cards, marquee). */
  topic: string;
  /** Uma frase para os cards da home e dos relacionados. */
  summary: string;

  seo: { title: string; description: string };

  /** Mensagem padrão do WhatsApp desta landing. */
  whatsapp: string;

  hero: {
    eyebrow: string;
    /** Pergunta de dor (linha 1 do H1). */
    question: string;
    /** Resposta (linha 2 do H1, com *ênfase*). */
    answer: string;
    lead: string;
    /** Base legal curta exibida no selo sobre a foto. */
    legalBadge: string;
  };

  law: {
    title: string;
    paragraphs: string[];
    /** Três ideias centrais, em ordem lógica. */
    pillars: { title: string; text: string }[];
  };

  situations: {
    title: string;
    intro: string;
    items: Situation[];
  };

  /** Bloco "Em síntese" logo após o título das situações. */
  summaryBox?: string;

  documents: string[];
  mistakes: string[];

  myths: Myth[];

  faq: Faq[];

  related: string[];
};
