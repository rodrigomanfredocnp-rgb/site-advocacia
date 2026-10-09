import type { Landing } from "../types";

export const bpcLoas: Landing = {
  slug: "bpc-loas",
  category: "previdenciario",
  icon: "hand-heart",
  topic: "BPC/LOAS",
  summary:
    "Idoso com 65 anos ou mais, ou pessoa com deficiência, em família de baixa renda? Pode ter direito a um salário mínimo por mês.",
  seo: {
    title: "BPC/LOAS: quem tem direito e o que fazer se foi negado",
    description:
      "O BPC paga um salário mínimo por mês ao idoso com 65 anos ou mais e à pessoa com deficiência de baixa renda, sem exigir contribuição. Fale com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Quero saber sobre o BPC/LOAS.",
  hero: {
    eyebrow: "Benefício assistencial",
    question: "Precisa de ajuda e nunca contribuiu para o INSS?",
    answer: "O BPC garante *um salário mínimo por mês* a quem tem direito.",
    lead: "O Benefício de Prestação Continuada é pago ao idoso com 65 anos ou mais e à pessoa com deficiência que não têm como se manter, nem de ter o sustento garantido pela família. Não exige contribuição ao INSS.",
    legalBadge: "Lei 8.742/93 (LOAS), art. 20",
  },
  law: {
    title: "Quem tem *direito ao BPC*",
    paragraphs: [
      "A Lei Orgânica da Assistência Social garante um salário mínimo mensal à pessoa com deficiência e ao idoso com 65 anos ou mais que comprovem não ter meios de prover a própria manutenção nem de tê-la provida pela família (Lei 8.742/93, art. 20).",
      "A lei usa como referência a renda familiar por pessoa de até 1/4 do salário mínimo (art. 20, § 3º), mas permite considerar outros elementos que provem a vulnerabilidade da família (§ 11) e a ampliação do limite para até 1/2 salário mínimo, conforme regulamento (§ 11-A). A inscrição no Cadastro Único é obrigatória (§ 12).",
    ],
    pillars: [
      { title: "Quem", text: "Idoso com 65 anos ou mais, ou pessoa com deficiência de longo prazo (2 anos ou mais)." },
      {
        title: "Renda",
        text: "Família de baixa renda, analisada pela renda por pessoa e pela situação real de vulnerabilidade.",
      },
      { title: "Cadastro", text: "Inscrição atualizada no CadÚnico e CPF de todos da família." },
    ],
  },
  summaryBox:
    "O BPC não exige contribuição, mas também não paga 13º nem gera pensão por morte. Ele não pode ser acumulado com aposentadoria ou outro benefício previdenciário. Um BPC ou benefício de até um salário mínimo de outro idoso ou pessoa com deficiência da família não entra no cálculo da renda (art. 20, § 14).",
  situations: {
    title: "Qual é *a sua situação*?",
    intro: "Escolha a mais próxima e conte com calma o que aconteceu.",
    items: [
      {
        title: "Quero pedir o BPC para um idoso",
        text: "Com 65 anos ou mais e baixa renda familiar, o idoso pode ter direito, mesmo sem nunca ter contribuído.",
        whatsapp: "Olá, Dr. Jhonny! Quero pedir o BPC para uma pessoa idosa.",
      },
      {
        title: "Quero pedir o BPC por deficiência",
        text: "Impedimento físico, mental, intelectual ou sensorial de longo prazo, inclusive em crianças, pode dar direito ao benefício.",
        whatsapp: "Olá, Dr. Jhonny! Quero pedir o BPC para uma pessoa com deficiência.",
      },
      {
        title: "O INSS negou por causa da renda",
        text: "A renda por pessoa não é o único critério. Gastos com saúde e a vulnerabilidade real da família também contam.",
        whatsapp: "Olá, Dr. Jhonny! O INSS negou o BPC por causa da renda da família.",
      },
      {
        title: "Negaram dizendo que não há deficiência",
        text: "A avaliação médica e social pode ser contestada, inclusive com nova perícia na Justiça.",
        whatsapp: "Olá, Dr. Jhonny! O INSS negou o BPC dizendo que não há deficiência.",
      },
      {
        title: "O benefício foi suspenso ou cortado",
        text: "Falta de atualização do CadÚnico e revisões podem suspender o BPC. Há caminhos para restabelecer.",
        whatsapp: "Olá, Dr. Jhonny! O BPC foi suspenso ou cortado.",
      },
      {
        title: "Já tem alguém na família com benefício",
        text: "O BPC ou benefício de até um salário mínimo de outro idoso ou pessoa com deficiência não entra no cálculo da renda.",
        whatsapp: "Olá, Dr. Jhonny! Já tem alguém na família que recebe benefício. Ainda posso pedir o BPC?",
      },
    ],
  },
  documents: [
    "Documentos pessoais e CPF de todos que moram na casa",
    "Comprovante de inscrição no CadÚnico atualizado",
    "Laudos, exames e relatórios médicos (no caso de deficiência)",
    "Comprovantes de renda da família",
    "Comprovantes de gastos com saúde, remédios e fraldas",
    "Carta do INSS com a negativa, se houver",
  ],
  mistakes: [
    "Pedir sem atualizar o CadÚnico antes",
    "Informar uma composição familiar diferente da real",
    "Desistir após a primeira negativa por renda",
    "Não guardar comprovantes de gastos com saúde",
  ],
  myths: [
    {
      myth: "BPC é aposentadoria.",
      fact: "BPC é benefício assistencial: não exige contribuição, mas não paga 13º nem gera pensão.",
      source: "Lei 8.742/93, art. 20",
    },
    {
      myth: "Se a renda passar de 1/4 do salário mínimo, não tem jeito.",
      fact: "A lei permite usar outros elementos para provar a vulnerabilidade e prevê ampliação do limite em certos casos.",
      source: "Lei 8.742/93, art. 20, §§ 11 e 11-A",
    },
    {
      myth: "Só pessoa com deficiência grave recebe.",
      fact: "O critério é o impedimento de longo prazo que dificulta a participação na sociedade em igualdade de condições.",
      source: "Lei 8.742/93, art. 20, §§ 2º e 10",
    },
    {
      myth: "Se outro idoso da casa já recebe, eu não posso receber.",
      fact: "O benefício de até um salário mínimo de outro idoso ou pessoa com deficiência não entra no cálculo da renda.",
      source: "Lei 8.742/93, art. 20, § 14",
    },
  ],
  faq: [
    {
      q: "Quem nunca contribuiu pode receber o BPC?",
      a: "Sim. O BPC é assistencial e não exige contribuições ao INSS. Os requisitos são a idade (65 anos ou mais) ou a deficiência, somados à baixa renda familiar.",
    },
    {
      q: "Criança com deficiência pode receber?",
      a: "Pode. O BPC não tem idade mínima para a pessoa com deficiência, desde que haja impedimento de longo prazo e a família se enquadre no critério de renda.",
    },
    {
      q: "O BPC paga 13º salário?",
      a: "Não. O BPC paga 12 parcelas por ano e não gera pensão por morte para a família.",
    },
    {
      q: "Quem está no BPC pode trabalhar?",
      a: "A renda do trabalho entra no cálculo familiar e pode afetar o benefício. Existem regras específicas para a pessoa com deficiência que passa a trabalhar, que devem ser avaliadas antes.",
    },
  ],
  related: ["inss", "aposentadoria", "doenca-ocupacional", "acidente-de-trabalho"],
};
