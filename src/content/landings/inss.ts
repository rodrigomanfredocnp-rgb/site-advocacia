import type { Landing } from "../types";

export const inss: Landing = {
  slug: "inss",
  category: "previdenciario",
  topic: "Benefício do INSS negado",
  summary: "O INSS negou ou cortou seu auxílio-doença? A decisão pode ser revista.",
  photoAlt: "Casal conversando com um médico que mostra um documento",
  photoFocus: "60% 35%",
  seo: {
    title: "INSS negou ou cortou meu benefício: o que fazer",
    description:
      "Auxílio-doença negado, alta antes da hora ou benefício cortado? A decisão do INSS pode ser revista. Converse com o Dr. Jhonny Cardoso pelo WhatsApp.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. O INSS negou ou cortou meu benefício.",
  hero: {
    title: "O INSS negou ou cortou seu benefício?",
    lead: "A decisão da perícia não é a palavra final. Você pode pedir uma nova análise, por recurso ou na Justiça. Mas existe prazo.",
  },
  situations: [
    {
      title: "A perícia disse que posso trabalhar",
      whatsapp: "Olá, Dr. Jhonny! A perícia do INSS disse que estou apto, mas não consigo trabalhar.",
    },
    {
      title: "O INSS cortou meu auxílio",
      whatsapp: "Olá, Dr. Jhonny! O INSS cortou meu auxílio-doença.",
    },
    {
      title: "Negaram por falta de contribuições",
      whatsapp: "Olá, Dr. Jhonny! O INSS negou meu benefício dizendo que faltam contribuições.",
    },
    {
      title: "Tive alta, mas a empresa não me aceita de volta",
      whatsapp: "Olá, Dr. Jhonny! O INSS me deu alta, mas a empresa não aceita que eu volte a trabalhar.",
    },
    {
      title: "Acho que não vou mais poder trabalhar",
      whatsapp:
        "Olá, Dr. Jhonny! Acho que não vou mais conseguir trabalhar e quero saber sobre a aposentadoria por incapacidade.",
    },
    {
      title: "Meu afastamento foi por causa do trabalho",
      whatsapp: "Olá, Dr. Jhonny! Meu benefício foi concedido como comum, mas a causa foi o trabalho.",
    },
  ],
  law: {
    text: "Quem não consegue trabalhar por mais de 15 dias seguidos pode ter direito ao auxílio por incapacidade, o antigo auxílio-doença. Para o empregado, a empresa paga os primeiros 15 dias e o INSS paga o restante. Em regra, são exigidas 12 contribuições, mas não em caso de acidente, doença do trabalho ou doença grave da lista oficial.",
    source: "Lei 8.213/91, arts. 25, 26, 59 e 60",
  },
  faq: [
    {
      q: "Qual é o prazo para recorrer?",
      a: "O recurso ao INSS deve ser feito em até 30 dias, contados do dia em que você ficou sabendo da decisão. Depois disso, ainda é possível fazer um novo pedido ou buscar a Justiça.",
    },
    {
      q: "Parei de contribuir. Ainda tenho direito?",
      a: "Pode ter. Em regra, você continua segurado por 12 meses depois da última contribuição. Esse tempo pode chegar a 24 ou 36 meses, conforme o tempo de contribuição e a situação de desemprego.",
    },
    {
      q: "Preciso recorrer no INSS antes de ir à Justiça?",
      a: "Não. Basta ter feito o pedido e recebido a negativa. Na Justiça, um médico nomeado pelo juiz faz uma nova perícia.",
    },
    {
      q: "Preciso ir até o escritório?",
      a: "Não. Dá para conversar e enviar os documentos pelo WhatsApp. Se preferir, o atendimento presencial é em Campo Novo do Parecis/MT.",
    },
  ],
  related: ["acidente-de-trabalho", "aposentadoria", "bpc-loas"],
};
