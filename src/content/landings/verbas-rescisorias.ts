import type { Landing } from "../types";

export const verbasRescisorias: Landing = {
  slug: "verbas-rescisorias",
  category: "trabalhista",
  topic: "Rescisão não paga",
  summary: "Foi demitido? Confira se o seu acerto veio completo e no prazo.",
  photoAlt: "Funcionário saindo do escritório carregando uma caixa com seus pertences",
  photoFocus: "55% 45%",
  seo: {
    title: "Rescisão atrasada ou paga errado: o que fazer",
    description:
      "A empresa tem 10 dias para pagar a rescisão. Atraso gera multa de um salário. Entenda suas verbas rescisórias e converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Minha rescisão não foi paga corretamente.",
  hero: {
    title: "Sua rescisão atrasou ou veio errada?",
    lead: "A empresa tem 10 dias para pagar o acerto. Se atrasou, a lei prevê multa de um salário, e o que veio faltando pode ser cobrado.",
  },
  situations: [
    {
      title: "Passaram 10 dias e não recebi nada",
      whatsapp: "Olá, Dr. Jhonny! Fui demitido e já passaram mais de 10 dias sem pagamento da rescisão.",
    },
    {
      title: "Recebi, mas o valor parece menor",
      whatsapp: "Olá, Dr. Jhonny! Recebi a rescisão, mas acho que o valor veio menor.",
    },
    {
      title: "A empresa quer parcelar meu acerto",
      whatsapp: "Olá, Dr. Jhonny! A empresa quer parcelar minha rescisão.",
    },
    {
      title: "Não liberaram meu FGTS nem o seguro-desemprego",
      whatsapp: "Olá, Dr. Jhonny! A empresa não liberou meu FGTS nem o seguro-desemprego.",
    },
    {
      title: "Saí por acordo e quero conferir",
      whatsapp: "Olá, Dr. Jhonny! Saí por acordo com a empresa e quero conferir se recebi certo.",
    },
    {
      title: "A empresa fechou e não me pagou",
      whatsapp: "Olá, Dr. Jhonny! A empresa fechou e não pagou minha rescisão.",
    },
  ],
  law: {
    text: "Quando o contrato acaba, a empresa tem 10 dias para pagar o acerto e entregar os documentos. Se atrasar, deve pagar ao trabalhador uma multa igual ao salário dele. Na demissão sem justa causa, há ainda a multa de 40% sobre o FGTS.",
    source: "CLT, art. 477, §§ 6º e 8º · Lei 8.036/90, art. 18, § 1º",
  },
  faq: [
    {
      q: "O que entra no acerto de quem é demitido?",
      a: "Na demissão sem justa causa, em geral: saldo de salário, aviso prévio, férias com um terço, 13º proporcional, multa de 40% do FGTS e as guias do seguro-desemprego. Depende de como foi a saída.",
    },
    {
      q: "Assinei o termo de rescisão. Ainda posso reclamar?",
      a: "Pode. A assinatura só vale para as verbas e os valores que estão escritos no termo. O que ficou de fora ainda pode ser conferido e cobrado.",
    },
    {
      q: "Qual é o prazo para buscar meus direitos?",
      a: "Até 2 anos depois do fim do contrato. Dá para cobrar o que não foi pago nos últimos 5 anos de trabalho.",
    },
    {
      q: "Preciso ir até o escritório?",
      a: "Não. Dá para conversar e enviar os documentos pelo WhatsApp. Se preferir, o atendimento presencial é em Campo Novo do Parecis/MT.",
    },
  ],
  related: ["fgts", "justa-causa", "horas-extras"],
};
