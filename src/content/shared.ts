import type { Faq } from "./types";

/** Como funciona o atendimento. É uma sequência real, por isso numerada. */
export const steps = [
  {
    title: "Chame no WhatsApp",
    text: "Conte com as suas palavras o que aconteceu. Não precisa saber termos jurídicos.",
  },
  {
    title: "Envie o que tiver",
    text: "Carteira de trabalho, contracheques, cartas do INSS, mensagens. Se faltar algo, tudo bem.",
  },
  {
    title: "Entenda o caminho",
    text: "O advogado explica os seus direitos, os prazos e os próximos passos. A decisão é sempre sua.",
  },
];

/** Diferenciais verdadeiros do atendimento. Não incluir números sem fonte. */
export const values = [
  "Você fala direto com o advogado",
  "Explicação simples, sem juridiquês",
  "No escritório ou pelo WhatsApp",
  "Sigilo profissional em tudo o que você contar",
];

/** Apresentação curta (home e landings). */
export const lawyerIntro =
  "O Dr. Jhonny Henrique Guollo Cardoso é advogado em Campo Novo do Parecis/MT. Ele atende quem trabalha e quem depende do INSS, do primeiro contato até o fim do caso.";

/** Texto completo da página Sobre. */
export const lawyerBio = [
  "Jhonny Henrique Guollo Cardoso é advogado inscrito na Ordem dos Advogados do Brasil, seccional de Mato Grosso, sob o nº 33424, com escritório no centro de Campo Novo do Parecis.",
  "O trabalho dele é dedicado a quem trabalha: rescisões não pagas, horas extras, estabilidade da gestante, acidentes e doenças do trabalho, assédio, trabalho rural e benefícios do INSS.",
  "O atendimento é próximo e transparente. Cada cliente entende o próprio caso, os prazos e as possibilidades antes de qualquer decisão.",
];

export const generalFaq: Faq[] = [
  {
    q: "Ainda trabalho na empresa. Posso pedir orientação?",
    a: "Pode. A conversa é sigilosa e a empresa não fica sabendo. Em alguns casos, como salário atrasado ou FGTS não depositado, dá até para encerrar o contrato por culpa da empresa.",
  },
  {
    q: "Qual é o prazo para entrar com uma ação trabalhista?",
    a: "Até 2 anos depois do fim do contrato, cobrando os direitos dos últimos 5 anos (Constituição Federal, art. 7º, XXIX). Por isso, quanto antes, melhor.",
  },
  {
    q: "Preciso ir até o escritório?",
    a: "Não. Dá para conversar e enviar os documentos pelo WhatsApp. Se preferir, o escritório fica no centro de Campo Novo do Parecis/MT.",
  },
  {
    q: "Como funcionam os honorários?",
    a: "A forma de cobrança é explicada com clareza na primeira conversa e fica num contrato antes de qualquer providência, conforme as regras da OAB/MT.",
  },
];
