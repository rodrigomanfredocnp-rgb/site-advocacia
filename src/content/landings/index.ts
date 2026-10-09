import type { Landing, LandingCategory } from "../types";
import { acidenteDeTrabalho } from "./acidente-de-trabalho";
import { aposentadoria } from "./aposentadoria";
import { assedioMoral } from "./assedio-moral";
import { bpcLoas } from "./bpc-loas";
import { carteiraAssinada } from "./carteira-assinada";
import { desvioDeFuncao } from "./desvio-de-funcao";
import { doencaOcupacional } from "./doenca-ocupacional";
import { fgts } from "./fgts";
import { gestante } from "./gestante";
import { horasExtras } from "./horas-extras";
import { inss } from "./inss";
import { insalubridadePericulosidade } from "./insalubridade-periculosidade";
import { justaCausa } from "./justa-causa";
import { rescisaoIndireta } from "./rescisao-indireta";
import { trabalhadorRural } from "./trabalhador-rural";
import { verbasRescisorias } from "./verbas-rescisorias";

/**
 * Todas as landings, na ordem em que aparecem na home, no rodapé e na faixa de temas.
 * Para criar uma landing nova: crie o arquivo nesta pasta (copie um existente) e adicione aqui.
 */
export const landings: Landing[] = [
  verbasRescisorias,
  horasExtras,
  gestante,
  carteiraAssinada,
  acidenteDeTrabalho,
  doencaOcupacional,
  assedioMoral,
  justaCausa,
  rescisaoIndireta,
  fgts,
  insalubridadePericulosidade,
  desvioDeFuncao,
  trabalhadorRural,
  inss,
  aposentadoria,
  bpcLoas,
];

export const CATEGORY_LABEL: Record<LandingCategory, string> = {
  trabalhista: "Direito do Trabalho",
  previdenciario: "INSS e Previdência",
};

export function getLanding(slug: string) {
  return landings.find((l) => l.slug === slug);
}

/** Landings agrupadas por área, na ordem de CATEGORY_LABEL, sem grupos vazios. */
export function landingGroups() {
  return (Object.keys(CATEGORY_LABEL) as LandingCategory[])
    .map((category) => ({ category, label: CATEGORY_LABEL[category], items: landings.filter((l) => l.category === category) }))
    .filter((group) => group.items.length > 0);
}

/** Relacionados declarados na landing, ignorando slugs inexistentes. */
export function relatedLandings(landing: Landing) {
  return landing.related.map(getLanding).filter((l): l is Landing => Boolean(l));
}
