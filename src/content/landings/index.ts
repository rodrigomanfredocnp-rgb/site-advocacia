import type { Landing } from "../types";
import {
  apoioAEscritorios,
  aposentadoriaDeServidores,
  criminal,
  direitoCivel,
  direitoDoTrabalho,
  direitoPrevidenciario,
  dividasEAgronegocio,
  familiaESucessoes,
  trabalhistaParaEmpresas,
  transito,
} from "./areas";
import { aposentadoria, aposentadoriaPorInvalidez, auxilioDoenca, bpcLoas, inss, pensaoPorMorte } from "./previdencia";
import {
  carteiraAssinada,
  doencaOcupacional,
  fgts,
  gestante,
  horasExtras,
  insalubridadePericulosidade,
  rescisaoIndireta,
  trabalhadorRural,
  verbasRescisorias,
} from "./trabalho";

/**
 * Todas as páginas de atuação. Para criar uma nova: escreva o objeto no arquivo da área,
 * adicione aqui e, se for um assunto, inclua o slug em `children` da página da área.
 * Cada página com foto precisa de identidade-visual/banco-de-imagens/<slug>.jpg (npm run images).
 */
export const landings: Landing[] = [
  direitoCivel,
  direitoDoTrabalho,
  trabalhistaParaEmpresas,
  verbasRescisorias,
  horasExtras,
  carteiraAssinada,
  fgts,
  gestante,
  rescisaoIndireta,
  doencaOcupacional,
  insalubridadePericulosidade,
  trabalhadorRural,
  direitoPrevidenciario,
  bpcLoas,
  auxilioDoenca,
  aposentadoriaPorInvalidez,
  pensaoPorMorte,
  aposentadoria,
  inss,
  familiaESucessoes,
  aposentadoriaDeServidores,
  transito,
  criminal,
  dividasEAgronegocio,
  apoioAEscritorios,
];

export function getLanding(slug: string) {
  return landings.find((l) => l.slug === slug);
}

function pick(slugs: string[]) {
  return slugs.map(getLanding).filter((l): l is Landing => Boolean(l));
}

/** As três áreas principais, na ordem da revisão: Cível primeiro. */
export const mainAreas = () => pick(["direito-civel", "direito-do-trabalho", "direito-previdenciario"]);

/** Áreas complementares (lista legível depois das principais). */
export const otherAreas = () =>
  pick(["familia-e-sucessoes", "aposentadoria-de-servidores", "transito", "criminal", "dividas-e-agronegocio"]);

/** Página profissional (rodapé e bloco discreto no fim da home). */
export const proPage = () => getLanding("apoio-a-escritorios")!;

/** Texto dos cartões das áreas principais na home (revisão do titular). */
export const MAIN_AREA_CARD: Record<string, { text: string; link: string }> = {
  "direito-civel": {
    text: "Orientação e atuação em contratos, obrigações, responsabilidade civil e questões patrimoniais, incluindo cobranças e cumprimento de decisões.",
    link: "Conheça a atuação cível",
  },
  "direito-do-trabalho": {
    text: "Atuação para trabalhadores e empresas em questões do contrato de trabalho, verbas trabalhistas, saúde ocupacional e processos judiciais.",
    link: "Conheça a atuação trabalhista",
  },
  "direito-previdenciario": {
    text: "Pedidos e processos sobre benefícios do INSS, aposentadorias e incapacidade para o trabalho, além do BPC/LOAS.",
    link: "Conheça a atuação previdenciária",
  },
};

/** Página da área a que um assunto pertence. */
export function parentArea(landing: Landing) {
  return landings.find((l) => l.kind === "area" && l.area === landing.area);
}

/** Assuntos de uma área, na ordem de `children`. */
export const childTopics = (landing: Landing) => pick(landing.children ?? []);

/** Até 3 assuntos vizinhos da mesma área, começando pelo seguinte na ordem da área. */
export function siblingTopics(landing: Landing) {
  const children = parentArea(landing)?.children ?? [];
  const i = children.indexOf(landing.slug);
  if (i < 0) return [];
  const ordered = [...children.slice(i + 1), ...children.slice(0, i)];
  return pick(ordered.slice(0, 3));
}
