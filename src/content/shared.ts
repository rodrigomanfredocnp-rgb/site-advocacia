import type { Faq } from "./types";

/** Como funciona o atendimento. É uma sequência real, por isso numerada. */
export const steps = [
  {
    title: "Você conta o que aconteceu",
    text: "Pelo WhatsApp, em poucas mensagens. Envie o que tiver em mãos: carteira de trabalho, contracheques, mensagens da empresa. Se não tiver tudo, tudo bem.",
  },
  {
    title: "O advogado analisa o seu caso",
    text: "Com base na lei, nas datas e nos documentos, o Dr. Jhonny avalia quais direitos podem existir e se ainda há prazo para buscá-los.",
  },
  {
    title: "Você recebe a orientação e decide",
    text: "Você entende os caminhos possíveis, os riscos e como funcionam os honorários. A decisão de seguir é sempre sua.",
  },
];

/** Diferenciais verdadeiros do atendimento. Não incluir números sem fonte. */
export const values = [
  {
    title: "Atendimento direto",
    text: "Você conversa com o próprio advogado, do primeiro contato ao fim do processo.",
  },
  {
    title: "Linguagem clara",
    text: "Sem juridiquês. Cada etapa é explicada para você saber exatamente o que está acontecendo.",
  },
  {
    title: "Sigilo profissional",
    text: "O que você conta fica entre você e o advogado, como garante o Estatuto da Advocacia.",
  },
  {
    title: "Presencial ou online",
    text: "Escritório no centro de Campo Novo do Parecis/MT e atendimento online, com processo eletrônico.",
  },
];

export const lawyerBio = [
  "Jhonny Henrique Guollo Cardoso é advogado inscrito na Ordem dos Advogados do Brasil, seccional de Mato Grosso, sob o nº 33424, com escritório no centro de Campo Novo do Parecis.",
  "Sua atuação é dedicada a quem trabalha: rescisões não pagas, horas extras, estabilidade da gestante, acidentes e doenças do trabalho, assédio, trabalho rural e benefícios do INSS.",
  "O atendimento é próximo e transparente. Cada cliente entende o próprio caso, os prazos e as possibilidades antes de qualquer decisão.",
];

export const generalFaq: Faq[] = [
  {
    q: "Ainda trabalho na empresa. Posso buscar orientação?",
    a: "Pode. A conversa é sigilosa e a empresa não fica sabendo. Em alguns casos, como atraso de salário ou FGTS não depositado, existe até a possibilidade de encerrar o contrato por culpa do empregador (rescisão indireta).",
  },
  {
    q: "Qual é o prazo para entrar com uma ação trabalhista?",
    a: "Até 2 anos depois do fim do contrato, podendo cobrar os direitos dos últimos 5 anos (Constituição Federal, art. 7º, XXIX). Por isso, quanto antes você buscar orientação, melhor.",
  },
  {
    q: "O atendimento é só em Campo Novo do Parecis?",
    a: "O escritório fica em Campo Novo do Parecis/MT, mas o atendimento também é feito online. Os processos trabalhistas e previdenciários tramitam de forma eletrônica, o que permite acompanhar casos de outras cidades.",
  },
  {
    q: "Como funcionam os honorários?",
    a: "A forma de cobrança é explicada na primeira conversa, com clareza, e formalizada em contrato antes de qualquer providência, conforme as regras da OAB/MT.",
  },
  {
    q: "Preciso ter documentos ou testemunhas?",
    a: "Ajuda muito, mas não é preciso ter tudo para começar. Mensagens, áudios, fotos, contracheques e extratos do FGTS costumam ser suficientes para uma primeira análise.",
  },
  {
    q: "Minhas informações ficam em sigilo?",
    a: "Sim. O sigilo profissional é um dever do advogado, previsto no Estatuto da Advocacia e no Código de Ética da OAB.",
  },
];
