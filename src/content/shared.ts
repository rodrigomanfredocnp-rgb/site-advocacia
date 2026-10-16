import { site } from "./site";
import type { Faq } from "./types";

/*
 * Textos institucionais da revisão do titular (16/10/2026).
 * Não publicar cargos, vínculos anteriores (Defensoria, sindicato, COJAD) nem títulos não confirmados:
 * a revisão pede que fiquem fora da versão pública até análise específica.
 */

/** Como funciona o atendimento. Sequência real, por isso numerada. */
export const steps = [
  {
    title: "Contato inicial",
    text: "Informe o assunto e a sua cidade para receber orientações sobre o atendimento.",
  },
  {
    title: "Documentos e consulta",
    text: "Os documentos necessários e as condições da consulta são informados conforme o caso.",
  },
  {
    title: "Definição das medidas",
    text: "Depois da análise e da contratação, são definidos os serviços, as responsabilidades e os próximos passos.",
  },
];

/** Apresentação resumida (home). */
export const lawyerSummary = `${site.lawyer.fullName} é advogado inscrito na ${site.lawyer.oab}, com mais de três anos de atuação e escritório em Campo Novo do Parecis. Atua nas áreas cível, trabalhista e previdenciária, além de demandas de família, sucessões, trânsito e criminal. O atendimento envolve a análise dos documentos, a explicação das alternativas jurídicas e o acompanhamento das medidas contratadas.`;

/** Texto da página Sobre, em primeira pessoa. */
export const lawyerBio = [
  "Sou advogado, com mais de três anos de atuação e escritório em Campo Novo do Parecis/MT. Minha atuação está concentrada no Direito Cível, Trabalhista e Previdenciário, com atendimento presencial e online.",
  "No Direito Cível, acompanho questões contratuais, obrigações, responsabilidade civil e demandas patrimoniais. Também atuo em assuntos de família, inventários e sucessões.",
  "Na área trabalhista, atuo em demandas de trabalhadores e empresas. No Previdenciário, acompanho pedidos no INSS e processos sobre benefícios, aposentadorias, incapacidade para o trabalho e BPC/LOAS. A aposentadoria de servidores públicos também faz parte dos assuntos atendidos, conforme as regras do regime aplicável.",
  "Faço atendimento online a pessoas de todo o Brasil, com atuação nacional especialmente em questões trabalhistas e previdenciárias. Também atendo demandas de trânsito e criminal, incluindo habeas corpus quando a medida for cabível.",
  "Em algumas demandas de execução de dívidas e de renegociação de obrigações do agronegócio, a atuação ocorre em conjunto com advogados parceiros, com definição das responsabilidades de cada profissional.",
  "No atendimento, explico as alternativas, os riscos e as etapas do procedimento para que o cliente possa tomar decisões informadas. As informações recebidas são tratadas com sigilo profissional.",
];

/** Atendimento presencial e online (home e página Atendimento). */
export const nationalService =
  "O escritório fica em Campo Novo do Parecis/MT e oferece atendimento online a pessoas de todo o Brasil, com atuação nacional especialmente nas áreas trabalhista e previdenciária. A necessidade de ir até o escritório, de perícia, de audiência ou de apoio local é avaliada conforme cada procedimento.";

/** Atuação em parceria. */
export const partnership =
  "Em demandas de cobrança, execução de dívidas e renegociação de obrigações do agronegócio, o escritório pode atuar em conjunto com advogados parceiros. A composição do atendimento e a responsabilidade de cada profissional são esclarecidas conforme o caso.";

/** Perguntas institucionais (valem para todos os públicos). */
export const generalFaq: Faq[] = [
  {
    q: "Preciso morar em Campo Novo do Parecis?",
    a: "Não. Há atendimento online a pessoas de outras cidades. A possibilidade de atuação e as necessidades de cada procedimento são avaliadas conforme o caso.",
  },
  {
    q: "Como sei quais documentos enviar?",
    a: "Informe primeiro o assunto. Os documentos necessários são indicados durante a organização do atendimento.",
  },
  {
    q: "Como funcionam a consulta e os honorários?",
    a: "As condições do atendimento e da contratação são informadas antes do início do serviço e formalizadas conforme o caso e as regras da profissão.",
  },
  {
    q: "O contato pelo WhatsApp já contrata o escritório?",
    a: "Não. O contato inicial serve para pedir informações. A aceitação do caso, o escopo do serviço e as condições de contratação precisam ser definidos.",
  },
  {
    q: "Meu assunto não está na lista. Posso perguntar se é atendido?",
    a: "Sim. Informe o assunto para verificar se ele está entre os atendidos e consultar a disponibilidade.",
  },
];
