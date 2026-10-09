import type { Landing } from "../types";

export const doencaOcupacional: Landing = {
  slug: "doenca-ocupacional",
  category: "trabalhista",
  icon: "stethoscope",
  topic: "Doença do trabalho",
  summary: "LER, problemas de coluna, perda auditiva, depressão ou burnout causados pelo trabalho têm proteção própria.",
  seo: {
    title: "Doença ocupacional: LER, coluna, burnout e seus direitos",
    description:
      "Doença causada ou agravada pelo trabalho é equiparada a acidente de trabalho, com estabilidade e possível indenização. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Adoeci por causa do trabalho e quero entender meus direitos.",
  hero: {
    eyebrow: "Doença ocupacional",
    question: "O trabalho te deixou doente?",
    answer: "Doença do trabalho tem *os mesmos direitos* de um acidente.",
    lead: "Dores na coluna, tendinite, LER/DORT, perda auditiva, problemas respiratórios, ansiedade, depressão e burnout. Quando o trabalho causa ou piora a doença, a lei garante estabilidade e pode gerar indenização.",
    legalBadge: "Lei 8.213/91, arts. 20, 21 e 21-A",
  },
  law: {
    title: "Quando a doença é *ligada ao trabalho*",
    paragraphs: [
      "A lei considera acidente do trabalho a doença profissional, típica de certas atividades, e a doença do trabalho, causada pelas condições em que o trabalho é realizado (Lei 8.213/91, art. 20). Também conta a doença em que o trabalho não foi a única causa, mas contribuiu diretamente para ela (art. 21, I).",
      "O INSS deve reconhecer a natureza acidentária quando há relação estatística entre a atividade da empresa e a doença, o chamado nexo técnico epidemiológico (art. 21-A). Desde 2023, a síndrome de burnout consta da lista de doenças relacionadas ao trabalho do Ministério da Saúde.",
    ],
    pillars: [
      { title: "Nexo", text: "O trabalho causou a doença ou contribuiu para que ela surgisse ou piorasse." },
      { title: "Afastamento", text: "Com o benefício acidentário, há estabilidade de 12 meses e FGTS durante o afastamento." },
      { title: "Indenização", text: "Se a empresa falhou na prevenção, pode haver danos morais e materiais." },
    ],
  },
  summaryBox:
    "Doença degenerativa ou própria da idade, em regra, não é considerada doença do trabalho. Mas, se o trabalho agravou o quadro, a proteção pode existir. A perícia médica é decisiva, e os seus documentos de saúde são a base dela.",
  situations: {
    title: "Qual é *o seu caso*?",
    intro: "Escolha a situação mais próxima e conte com calma o que está acontecendo.",
    items: [
      {
        title: "Dores na coluna ou nos braços pelo esforço",
        text: "Movimentos repetitivos, peso e postura inadequada estão entre as principais causas de afastamento.",
        whatsapp: "Olá, Dr. Jhonny! Tenho problema na coluna ou nos braços por causa do trabalho.",
      },
      {
        title: "Ansiedade, depressão ou burnout",
        text: "Pressão excessiva, assédio e jornadas exaustivas podem causar adoecimento mental ligado ao trabalho.",
        whatsapp: "Olá, Dr. Jhonny! Desenvolvi ansiedade/depressão/burnout por causa do trabalho.",
      },
      {
        title: "Perda auditiva ou problema respiratório",
        text: "Ruído, poeira, produtos químicos e agrotóxicos sem proteção adequada podem causar doença profissional.",
        whatsapp: "Olá, Dr. Jhonny! Tive perda auditiva ou problema respiratório por causa do trabalho.",
      },
      {
        title: "O INSS registrou como doença comum",
        text: "A espécie do benefício faz diferença: só o acidentário garante estabilidade e FGTS no afastamento.",
        whatsapp: "Olá, Dr. Jhonny! O INSS registrou minha doença do trabalho como doença comum.",
      },
      {
        title: "Fui demitido doente",
        text: "Dispensar quem está doente por causa do trabalho pode ser ilegal e gerar reintegração ou indenização.",
        whatsapp: "Olá, Dr. Jhonny! Fui demitido estando doente por causa do trabalho.",
      },
      {
        title: "Não consigo mais fazer o mesmo trabalho",
        text: "Sequelas que reduzem a capacidade podem gerar auxílio-acidente e indenização por perda de renda.",
        whatsapp: "Olá, Dr. Jhonny! Não consigo mais exercer minha função por causa de uma doença do trabalho.",
      },
    ],
  },
  documents: [
    "Atestados, laudos e exames, de preferência em ordem de data",
    "Receitas e comprovantes de tratamento",
    "Exames admissional, periódicos e demissional (ASO)",
    "Cartas do INSS e resultado das perícias",
    "Descrição da sua função e da rotina de trabalho",
    "Mensagens ou registros que mostrem pressão, metas ou esforço",
  ],
  mistakes: [
    "Esconder a doença por medo de perder o emprego",
    "Não pedir ao médico que registre a relação com o trabalho",
    "Aceitar o registro como doença comum sem questionar",
    "Fazer o exame demissional sem relatar os sintomas",
  ],
  myths: [
    {
      myth: "Doença do trabalho só vale se estiver na lista oficial.",
      fact: "Doença fora da lista também pode ser reconhecida, se ficar provado que resultou das condições do trabalho.",
      source: "Lei 8.213/91, art. 20, § 2º",
    },
    {
      myth: "Se eu já tinha o problema, não tenho direito.",
      fact: "Quando o trabalho agravou ou contribuiu para a doença, a proteção pode existir (concausa).",
      source: "Lei 8.213/91, art. 21, I",
    },
    {
      myth: "Burnout é “frescura” e não dá direito a nada.",
      fact: "O burnout está na lista de doenças relacionadas ao trabalho do Ministério da Saúde e pode ser reconhecido como doença ocupacional.",
    },
    {
      myth: "Doença do trabalho exige carência no INSS.",
      fact: "O benefício por doença profissional ou do trabalho não exige número mínimo de contribuições.",
      source: "Lei 8.213/91, art. 26, II",
    },
  ],
  faq: [
    {
      q: "Como se prova que a doença veio do trabalho?",
      a: "Pela perícia médica, que analisa a sua função, o ambiente de trabalho e os documentos de saúde. Laudos que relacionem a doença às atividades e o histórico de atestados ajudam muito.",
    },
    {
      q: "Tenho estabilidade se não fui afastado pelo INSS?",
      a: "Em regra, a estabilidade exige afastamento acima de 15 dias com benefício acidentário. Mas, se a doença ligada ao trabalho for constatada depois da dispensa, a estabilidade pode ser reconhecida (Súmula 378, II, do TST).",
    },
    {
      q: "Depressão pode ser doença do trabalho?",
      a: "Pode, quando há relação com o ambiente ou a organização do trabalho, como assédio, metas abusivas ou jornadas exaustivas. É preciso demonstrar essa relação.",
    },
    {
      q: "Quais indenizações são possíveis?",
      a: "Danos morais, despesas com tratamento e, se houver redução da capacidade de trabalho, pensão proporcional à perda. Tudo depende das provas e da perícia.",
    },
  ],
  related: ["acidente-de-trabalho", "assedio-moral", "inss", "insalubridade-periculosidade"],
};
