import type { Landing } from "../types";

export const inss: Landing = {
  slug: "inss",
  category: "previdenciario",
  icon: "landmark",
  topic: "Benefício do INSS negado",
  summary: "O INSS negou ou cortou o seu auxílio por incapacidade? A decisão pode ser revista por recurso ou na Justiça.",
  seo: {
    title: "INSS negou ou cortou meu benefício: o que fazer",
    description:
      "Auxílio-doença negado, alta antes da hora ou benefício cortado? A decisão do INSS pode ser revista. Converse com o Dr. Jhonny Cardoso pelo WhatsApp.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. O INSS negou ou cortou meu benefício.",
  hero: {
    eyebrow: "Benefícios por incapacidade",
    question: "O INSS negou ou cortou o seu benefício?",
    answer: "A decisão da perícia *não é a palavra final*.",
    lead:
      "Auxílio por incapacidade temporária (o antigo auxílio-doença) negado, alta dada antes da recuperação, benefício cortado ou aposentadoria por incapacidade recusada. Existem caminhos para rever a decisão, e eles têm prazo.",
    legalBadge: "Lei 8.213/91, arts. 42, 59 e 60",
  },
  law: {
    title: "Quando o INSS *deve pagar*",
    paragraphs: [
      "O auxílio por incapacidade temporária é devido ao segurado que fica incapaz para o seu trabalho por mais de 15 dias consecutivos, cumprida a carência quando exigida (Lei 8.213/91, art. 59). Para o empregado, a empresa paga os 15 primeiros dias, e o INSS paga a partir do 16º (art. 60).",
      "A carência, em regra, é de 12 contribuições (art. 25, I). Ela é dispensada em casos de acidente de qualquer natureza, doença profissional ou do trabalho e doenças graves previstas em lista oficial (art. 26, II). Quando a incapacidade é permanente, o benefício pode ser a aposentadoria por incapacidade permanente (art. 42).",
    ],
    pillars: [
      { title: "Qualidade de segurado", text: "Estar contribuindo, ou dentro do período de graça, na data em que a incapacidade começou." },
      { title: "Carência", text: "Em regra, 12 contribuições, com dispensa em acidentes e doenças graves." },
      { title: "Incapacidade", text: "Comprovada por documentos médicos e pela perícia, administrativa ou judicial." },
    ],
  },
  summaryBox:
    "Se a perícia do INSS negou o benefício, é possível recorrer administrativamente em 30 dias ou entrar com ação judicial, na qual um perito nomeado pelo juiz faz nova avaliação. Se a incapacidade decorre de acidente ou doença do trabalho, a ação é na Justiça Estadual; nos demais casos, na Justiça Federal.",
  situations: {
    title: "O que o INSS *decidiu no seu caso*?",
    intro: "Escolha a situação e envie a mensagem já com o assunto certo.",
    items: [
      {
        title: "A perícia disse que posso trabalhar",
        text: "Se seus médicos dizem o contrário, a decisão pode ser contestada com laudos e nova perícia judicial.",
        whatsapp: "Olá, Dr. Jhonny! A perícia do INSS disse que estou apto, mas não consigo trabalhar.",
      },
      {
        title: "Meu benefício foi cortado (alta programada)",
        text: "É possível pedir a prorrogação antes do fim do benefício e, se negada, discutir a cessação.",
        whatsapp: "Olá, Dr. Jhonny! O INSS cortou meu auxílio por incapacidade.",
      },
      {
        title: "Negaram por falta de carência ou de qualidade de segurado",
        text: "O período de graça e as dispensas de carência costumam ser mal aplicados. Vale conferir o cálculo.",
        whatsapp: "Olá, Dr. Jhonny! O INSS negou meu benefício por falta de carência ou qualidade de segurado.",
      },
      {
        title: "Recebi alta, mas a empresa não me aceita de volta",
        text: "No chamado “limbo previdenciário”, sem salário e sem benefício, a empresa pode ser responsabilizada.",
        whatsapp: "Olá, Dr. Jhonny! O INSS me deu alta, mas a empresa não aceita que eu volte a trabalhar.",
      },
      {
        title: "Minha incapacidade é permanente",
        text: "Quando não há possibilidade de reabilitação, pode caber a aposentadoria por incapacidade permanente.",
        whatsapp: "Olá, Dr. Jhonny! Acredito que minha incapacidade é permanente e quero me aposentar.",
      },
      {
        title: "O benefício deveria ser acidentário",
        text: "A espécie do benefício muda direitos como a estabilidade no emprego e o FGTS no afastamento.",
        whatsapp: "Olá, Dr. Jhonny! Meu benefício foi concedido como comum, mas a causa foi o trabalho.",
      },
    ],
  },
  documents: [
    "Carta de indeferimento ou de cessação do INSS",
    "Laudos, exames e atestados com CID e data de início",
    "Receitas e comprovantes de tratamento",
    "Extrato do CNIS (Meu INSS), com as contribuições",
    "Carteira de trabalho",
    "Documento de identidade e comprovante de endereço",
  ],
  mistakes: [
    "Ir à perícia sem laudos atualizados e detalhados",
    "Perder o prazo de 30 dias do recurso administrativo",
    "Deixar de contribuir e perder a qualidade de segurado",
    "Não pedir a prorrogação antes da data de cessação",
  ],
  myths: [
    {
      myth: "Se a perícia negou, não tem mais o que fazer.",
      fact: "Cabe recurso administrativo e ação judicial, com nova perícia feita por médico nomeado pelo juiz.",
    },
    {
      myth: "Sem 12 contribuições, nunca tenho direito.",
      fact: "Acidentes, doenças do trabalho e doenças graves da lista oficial dispensam a carência.",
      source: "Lei 8.213/91, art. 26, II",
    },
    {
      myth: "Parei de contribuir, perdi a qualidade de segurado na hora.",
      fact: "Existe o período de graça, de 12 meses em regra, que pode chegar a 36 meses em algumas situações.",
      source: "Lei 8.213/91, art. 15",
    },
    {
      myth: "Preciso esgotar todos os recursos no INSS antes de ir à Justiça.",
      fact: "Basta ter feito o pedido e recebido a negativa. Não é obrigatório recorrer administrativamente antes.",
      source: "STF, RE 631.240",
    },
  ],
  faq: [
    {
      q: "Qual é o prazo para recorrer ao INSS?",
      a: "O recurso administrativo deve ser apresentado em 30 dias, contados da ciência da decisão. Fora desse prazo, ainda é possível fazer novo pedido ou buscar a Justiça.",
    },
    {
      q: "O que é o período de graça?",
      a: "É o tempo em que você continua segurado mesmo sem contribuir: em regra, 12 meses após a última contribuição, podendo ser estendido para 24 ou 36 meses conforme o tempo de contribuição e a situação de desemprego (Lei 8.213/91, art. 15).",
    },
    {
      q: "Recebo os atrasados se ganhar na Justiça?",
      a: "Em regra, sim. Se o juiz reconhecer o direito desde o pedido ou a cessação, os valores do período são pagos com correção.",
    },
    {
      q: "Preciso ir a Cuiabá para a perícia judicial?",
      a: "Normalmente a perícia é marcada na cidade ou região onde corre o processo. O endereço e a data são informados no próprio processo.",
    },
  ],
  related: ["acidente-de-trabalho", "doenca-ocupacional", "aposentadoria", "bpc-loas"],
};
