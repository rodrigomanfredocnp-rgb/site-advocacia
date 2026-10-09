import type { Landing } from "../types";

export const gestante: Landing = {
  slug: "gestante",
  category: "trabalhista",
  icon: "baby",
  topic: "Gestante demitida",
  summary: "Demitida durante a gravidez, ou descobriu a gestação depois da demissão? A estabilidade pode valer para você.",
  seo: {
    title: "Fui demitida grávida: quais são os meus direitos?",
    description:
      "A gestante demitida sem justa causa pode ter direito à estabilidade, mesmo se descobriu a gravidez depois. Converse com o Dr. Jhonny Cardoso pelo WhatsApp.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Fui demitida grávida e quero entender meus direitos.",
  hero: {
    eyebrow: "Direitos da gestante",
    question: "Você foi demitida grávida?",
    answer: "A lei pode *garantir o seu emprego* ou a indenização do período.",
    lead:
      "A estabilidade da gestante vale desde a confirmação da gravidez até cinco meses após o parto. Ela pode existir mesmo quando a empresa não sabia, quando você só descobriu a gestação depois da demissão ou quando estava em contrato de experiência.",
    legalBadge: "ADCT, art. 10, II, “b” · Súmula 244 do TST",
  },
  law: {
    title: "O que a lei diz sobre a *gestante demitida*",
    paragraphs: [
      "A Constituição proíbe a dispensa arbitrária ou sem justa causa da empregada gestante, desde a confirmação da gravidez até cinco meses após o parto (ADCT, art. 10, II, “b”). A CLT reforça que a proteção vale mesmo se a gravidez for confirmada durante o aviso prévio, trabalhado ou indenizado (art. 391-A).",
      "O Supremo Tribunal Federal definiu que basta a gravidez ser anterior à dispensa (Tema 497). O fato de a empresa, ou a própria trabalhadora, não saber da gestação no momento da demissão não afasta o direito, como também afirma a Súmula 244 do TST.",
    ],
    pillars: [
      {
        title: "Concepção",
        text: "O que importa é se a gestação começou durante o contrato de trabalho, inclusive no aviso prévio.",
      },
      {
        title: "Demissão",
        text: "Se a dispensa foi sem justa causa nesse período, ela pode ser questionada, mesmo que ninguém soubesse da gravidez.",
      },
      {
        title: "Estabilidade",
        text: "Conforme o caso, cabe a volta ao emprego ou a indenização dos salários e direitos do período de estabilidade.",
      },
    ],
  },
  summaryBox:
    "A gestante tem estabilidade desde a confirmação da gravidez até cinco meses após o parto. A proteção não depende de a empresa saber da gestação e vale também no aviso prévio e no contrato de experiência. Cada caso precisa ser analisado com as datas e os documentos.",
  situations: {
    title: "Você se identifica com *alguma dessas situações*?",
    intro: "Toque na que mais se parece com o seu caso para começar a conversa já com o assunto certo.",
    items: [
      {
        title: "Fui demitida sem justa causa durante a gravidez",
        text: "A dispensa durante a estabilidade pode ser revertida, com reintegração ou indenização do período.",
        whatsapp: "Olá, Dr. Jhonny! Fui demitida sem justa causa durante a gravidez.",
      },
      {
        title: "Descobri a gravidez depois da demissão",
        text: "Se a gestação já tinha começado durante o contrato ou o aviso prévio, o direito pode existir mesmo assim.",
        whatsapp: "Olá, Dr. Jhonny! Descobri que estava grávida depois de ser demitida.",
      },
      {
        title: "Pedi demissão sem saber que estava grávida",
        text: "O pedido de demissão de quem tem estabilidade só vale com assistência do sindicato (CLT, art. 500). Sem isso, ele pode ser anulado.",
        whatsapp: "Olá, Dr. Jhonny! Pedi demissão e depois descobri que estava grávida.",
      },
      {
        title: "Fui dispensada no contrato de experiência",
        text: "A Súmula 244, III, do TST reconhece a estabilidade também nos contratos por prazo determinado, como o de experiência.",
        whatsapp: "Olá, Dr. Jhonny! Fui dispensada grávida no contrato de experiência.",
      },
      {
        title: "Trabalhava sem carteira assinada",
        text: "É possível pedir o reconhecimento do vínculo de emprego e, a partir dele, a estabilidade da gestante.",
        whatsapp: "Olá, Dr. Jhonny! Trabalhava sem carteira assinada e fui dispensada grávida.",
      },
      {
        title: "Quero entender os valores envolvidos",
        text: "A indenização pode incluir salários do período, 13º, férias com um terço e FGTS com a multa de 40%.",
        whatsapp: "Olá, Dr. Jhonny! Fui demitida grávida e quero entender quais valores posso receber.",
      },
    ],
  },
  documents: [
    "Carteira de trabalho (física ou digital)",
    "Exame ou ultrassom com a data provável da concepção",
    "Termo de rescisão ou aviso de demissão",
    "Contracheques e extrato do FGTS",
    "Mensagens, e-mails ou áudios da empresa sobre a dispensa",
    "Certidão de nascimento, se o bebê já nasceu",
  ],
  mistakes: [
    "Achar que perdeu o direito porque a empresa não sabia da gravidez",
    "Assinar pedido de demissão sem orientação",
    "Deixar o tempo passar: o prazo para entrar na Justiça é de até 2 anos após o fim do contrato",
    "Aceitar acordo sem entender quanto vale o período de estabilidade",
  ],
  myths: [
    {
      myth: "Preciso ter avisado a empresa da gravidez antes da demissão.",
      fact: "Basta que a gravidez seja anterior à dispensa. O desconhecimento da empresa não afasta o direito.",
      source: "STF, Tema 497 · Súmula 244, I, do TST",
    },
    {
      myth: "Se eu pedi demissão, perdi tudo.",
      fact: "Sem a assistência do sindicato, o pedido de demissão de quem tem estabilidade pode ser considerado inválido.",
      source: "CLT, art. 500",
    },
    {
      myth: "Contrato de experiência não tem estabilidade.",
      fact: "O TST reconhece a estabilidade também nos contratos por prazo determinado.",
      source: "Súmula 244, III, do TST",
    },
    {
      myth: "Se o bebê já nasceu, não dá mais tempo.",
      fact: "Mesmo depois do parto ainda pode caber a indenização do período, respeitado o prazo de 2 anos após o fim do contrato.",
      source: "CF, art. 7º, XXIX",
    },
  ],
  faq: [
    {
      q: "Tenho direito mesmo se descobri a gravidez depois da demissão?",
      a: "Pode ter. O ponto principal é se a gestação já tinha começado durante o contrato de trabalho, incluindo o período de aviso prévio. A data provável da concepção, indicada no ultrassom, costuma ser a prova mais importante.",
    },
    {
      q: "Vou ser obrigada a voltar a trabalhar na empresa?",
      a: "A lei prevê a reintegração enquanto o período de estabilidade estiver em curso. Quando ela não é possível ou não é recomendável, ou quando o período já terminou, o caminho é a indenização dos salários e direitos correspondentes. Isso é avaliado com você.",
    },
    {
      q: "Até quando vai a estabilidade?",
      a: "Desde a confirmação da gravidez até cinco meses após o parto (ADCT, art. 10, II, “b”).",
    },
    {
      q: "E se eu estava no aviso prévio quando engravidei?",
      a: "A CLT garante a estabilidade também quando a gravidez é confirmada durante o aviso prévio, trabalhado ou indenizado (art. 391-A).",
    },
    {
      q: "Qual é o prazo para buscar meus direitos?",
      a: "A ação trabalhista deve ser proposta em até 2 anos após o fim do contrato. Quanto antes você buscar orientação, mais opções existem, inclusive a de voltar ao emprego.",
    },
    {
      q: "Preciso ir até o escritório?",
      a: "Não necessariamente. O primeiro contato e o envio de documentos podem ser feitos pelo WhatsApp. Se preferir, o atendimento presencial é em Campo Novo do Parecis/MT.",
    },
  ],
  related: ["carteira-assinada", "verbas-rescisorias", "fgts", "assedio-moral"],
};
