import type { Landing } from "../types";

export const bpcLoas: Landing = {
  slug: "bpc-loas",
  category: "previdenciario",
  topic: "BPC/LOAS",
  summary: "Idoso ou pessoa com deficiência de baixa renda? Pode ter direito ao BPC.",
  photoAlt: "Casal de idosos em cadeiras de rodas, sorrindo e batendo palmas",
  photoFocus: "50% 35%",
  seo: {
    title: "BPC/LOAS: quem tem direito e o que fazer se foi negado",
    description:
      "O BPC paga um salário mínimo por mês ao idoso com 65 anos ou mais e à pessoa com deficiência de baixa renda, sem exigir contribuição. Fale com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Quero saber sobre o BPC/LOAS.",
  hero: {
    title: "Nunca pagou o INSS e precisa de ajuda?",
    lead: "O BPC é um salário mínimo por mês para idosos com 65 anos ou mais e pessoas com deficiência de baixa renda. Você pode ter direito mesmo sem nunca ter pago o INSS.",
  },
  situations: [
    {
      title: "Quero pedir o BPC para um idoso",
      whatsapp: "Olá, Dr. Jhonny! Quero pedir o BPC para uma pessoa idosa.",
    },
    {
      title: "Quero pedir o BPC por deficiência",
      whatsapp: "Olá, Dr. Jhonny! Quero pedir o BPC para uma pessoa com deficiência.",
    },
    {
      title: "O INSS negou por causa da renda",
      whatsapp: "Olá, Dr. Jhonny! O INSS negou o BPC por causa da renda da família.",
    },
    {
      title: "Negaram dizendo que não há deficiência",
      whatsapp: "Olá, Dr. Jhonny! O INSS negou o BPC dizendo que não há deficiência.",
    },
    {
      title: "Meu BPC foi suspenso ou cortado",
      whatsapp: "Olá, Dr. Jhonny! O BPC foi suspenso ou cortado.",
    },
    {
      title: "Alguém da minha casa já recebe benefício",
      whatsapp: "Olá, Dr. Jhonny! Já tem alguém na família que recebe benefício. Ainda posso pedir o BPC?",
    },
  ],
  law: {
    text: "O BPC é para o idoso com 65 anos ou mais e para a pessoa com deficiência de longo prazo, quando a família não tem como sustentá-los. A lei usa como base a renda de até 1/4 do salário mínimo por pessoa da família, que pode subir para até 1/2 em alguns casos. É obrigatório estar inscrito no CadÚnico.",
    source: "Lei 8.742/93 (LOAS), art. 20",
  },
  faq: [
    {
      q: "A renda da família passa do limite. Não tenho direito?",
      a: "Pode ter. A renda não é o único critério: gastos com saúde, remédios e fraldas também podem contar. E o benefício de até um salário mínimo de outro idoso ou pessoa com deficiência da família não entra na conta.",
    },
    {
      q: "Criança com deficiência pode receber?",
      a: "Pode. Para a pessoa com deficiência, não existe idade mínima. É preciso ter um impedimento de longo prazo e que a família se encaixe no critério de renda.",
    },
    {
      q: "O BPC é aposentadoria?",
      a: "Não. O BPC não exige contribuição, mas não paga 13º e não deixa pensão para a família. Ele também não pode ser recebido junto com aposentadoria ou outro benefício do INSS.",
    },
    {
      q: "Preciso ir até o escritório?",
      a: "Não. Dá para conversar e enviar os documentos pelo WhatsApp. Se preferir, o atendimento presencial é em Campo Novo do Parecis/MT.",
    },
  ],
  related: ["inss", "aposentadoria", "doenca-ocupacional"],
};
