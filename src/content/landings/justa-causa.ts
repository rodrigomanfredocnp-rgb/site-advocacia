import type { Landing } from "../types";

export const justaCausa: Landing = {
  slug: "justa-causa",
  category: "trabalhista",
  icon: "gavel",
  topic: "Justa causa",
  summary: "Foi demitido por justa causa e não concorda? A empresa precisa provar, e a demissão pode ser revertida.",
  seo: {
    title: "Demitido por justa causa? Saiba como reverter",
    description:
      "A justa causa precisa ser provada pela empresa. Se for revertida, você recebe aviso prévio, multa do FGTS e seguro-desemprego. Fale com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Fui demitido por justa causa e não concordo.",
  hero: {
    eyebrow: "Reversão de justa causa",
    question: "Foi demitido por justa causa?",
    answer: "A empresa *precisa provar* o motivo, e a decisão pode ser revertida.",
    lead: "A justa causa é a punição mais grave da relação de trabalho e tira quase todas as verbas da rescisão. Por isso, a lei exige motivo grave, previsto em lei, e prova firme. Quando isso falta, a Justiça pode transformar a dispensa em sem justa causa.",
    legalBadge: "CLT, arts. 482 e 818, II",
  },
  law: {
    title: "O que a lei *exige da empresa*",
    paragraphs: [
      "Os motivos de justa causa estão listados no art. 482 da CLT, como improbidade, desídia, embriaguez em serviço, indisciplina, insubordinação e abandono de emprego. Fora dessa lista, não há justa causa.",
      "Como a justa causa é um fato que impede o pagamento das verbas, quem precisa provar é o empregador (CLT, art. 818, II). Além disso, a punição deve ser imediata, proporcional à falta e não pode punir duas vezes o mesmo fato.",
    ],
    pillars: [
      { title: "Motivo legal", text: "A conduta precisa se encaixar em uma das hipóteses do art. 482 da CLT." },
      { title: "Prova", text: "A empresa precisa demonstrar o fato com documentos, testemunhas ou registros." },
      { title: "Proporção", text: "Falta leve, punida tarde ou já punida antes, em regra, não justifica a dispensa." },
    ],
  },
  summaryBox:
    "Se a justa causa for revertida, você passa a ter direito a aviso prévio, 13º e férias proporcionais com um terço, saque do FGTS com a multa de 40% e guias do seguro-desemprego. Uma acusação grave sem prova, como furto, pode ainda gerar indenização por danos morais.",
  situations: {
    title: "Como foi *a sua demissão*?",
    intro: "Escolha a situação mais parecida com a sua.",
    items: [
      {
        title: "Fui acusado de algo que não fiz",
        text: "Sem prova do fato, a justa causa não se sustenta. Acusações graves sem prova podem gerar danos morais.",
        whatsapp: "Olá, Dr. Jhonny! Fui demitido por justa causa por algo que não fiz.",
      },
      {
        title: "Foi por faltas ou atrasos",
        text: "Faltas e atrasos costumam exigir advertências e suspensões antes, numa escala proporcional.",
        whatsapp: "Olá, Dr. Jhonny! Fui demitido por justa causa por faltas ou atrasos.",
      },
      {
        title: "Disseram que abandonei o emprego",
        text: "Abandono exige ausência prolongada e intenção de não voltar. Faltas por doença não são abandono.",
        whatsapp: "Olá, Dr. Jhonny! A empresa alegou abandono de emprego na minha demissão.",
      },
      {
        title: "Fui punido muito tempo depois do fato",
        text: "A falta de imediatidade indica que a empresa perdoou a conduta, o que enfraquece a justa causa.",
        whatsapp: "Olá, Dr. Jhonny! Fui demitido por justa causa muito tempo depois do ocorrido.",
      },
      {
        title: "Já tinha sido advertido pelo mesmo motivo",
        text: "A mesma falta não pode ser punida duas vezes, com advertência e depois com justa causa.",
        whatsapp: "Olá, Dr. Jhonny! Fui punido duas vezes pelo mesmo motivo e depois demitido por justa causa.",
      },
      {
        title: "Me obrigaram a assinar a justa causa",
        text: "Assinar o comunicado apenas confirma que você recebeu. Não significa concordar com o motivo.",
        whatsapp: "Olá, Dr. Jhonny! Assinei o comunicado de justa causa, mas não concordo.",
      },
    ],
  },
  documents: [
    "Carta ou comunicado de dispensa por justa causa",
    "Advertências e suspensões anteriores, se houver",
    "Termo de rescisão e contracheques",
    "Atestados médicos do período, se as faltas foram por saúde",
    "Mensagens trocadas com a empresa sobre o fato",
    "Nome de colegas que conhecem o ocorrido",
  ],
  mistakes: [
    "Achar que assinar o comunicado significa concordar com ele",
    "Não pedir por escrito o motivo da justa causa",
    "Desistir por vergonha da acusação",
    "Perder o prazo de 2 anos após a dispensa",
  ],
  myths: [
    {
      myth: "Assinei, então aceitei a justa causa.",
      fact: "A assinatura comprova apenas o recebimento do comunicado. A justa causa ainda pode ser contestada.",
    },
    {
      myth: "Quem tem que provar que é inocente sou eu.",
      fact: "O ônus da prova da justa causa é do empregador, por ser fato que impede o pagamento das verbas.",
      source: "CLT, art. 818, II",
    },
    {
      myth: "Qualquer falta pode virar justa causa.",
      fact: "Só as condutas previstas em lei, graves e proporcionais justificam a dispensa por justa causa.",
      source: "CLT, art. 482",
    },
    {
      myth: "Com justa causa, eu não recebo nada.",
      fact: "Mesmo na justa causa, são devidos o saldo de salário e as férias vencidas com um terço.",
    },
  ],
  faq: [
    {
      q: "O que eu recebo se a justa causa for revertida?",
      a: "As verbas da dispensa sem justa causa: aviso prévio, 13º e férias proporcionais com um terço, liberação do FGTS com multa de 40% e guias do seguro-desemprego, além de outros direitos que existirem no seu caso.",
    },
    {
      q: "Quanto tempo tenho para contestar?",
      a: "Até 2 anos após a dispensa. Mas, para o seguro-desemprego e para preservar provas, quanto antes, melhor.",
    },
    {
      q: "Posso pedir danos morais?",
      a: "Quando a empresa imputa ao trabalhador uma conduta grave, como furto ou fraude, e não consegue provar, pode haver indenização por danos morais.",
    },
    {
      q: "A empresa precisava ter me dado advertência antes?",
      a: "Não existe uma regra única, mas para faltas mais leves a jurisprudência costuma exigir punições graduais antes da justa causa. Faltas gravíssimas podem justificar a dispensa imediata.",
    },
  ],
  related: ["verbas-rescisorias", "assedio-moral", "rescisao-indireta", "fgts"],
};
