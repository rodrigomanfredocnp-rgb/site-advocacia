import type { Landing } from "../types";

export const fgts: Landing = {
  slug: "fgts",
  category: "trabalhista",
  icon: "piggy-bank",
  topic: "FGTS não depositado",
  summary: "Abriu o app do FGTS e faltam depósitos? A empresa é obrigada a depositar 8% todo mês, e isso pode ser cobrado.",
  seo: {
    title: "FGTS não depositado: o que fazer e como cobrar",
    description:
      "A empresa deve depositar 8% do salário no FGTS todo mês. Depósitos faltando podem ser cobrados e até justificar a rescisão indireta. Fale com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Meu FGTS não está sendo depositado corretamente.",
  hero: {
    eyebrow: "Fundo de Garantia",
    question: "Seu FGTS está com depósitos faltando?",
    answer: "Esse dinheiro *é seu*, e a empresa é obrigada a depositar.",
    lead:
      "Todo mês, a empresa deve depositar 8% da sua remuneração na conta do FGTS. Meses em branco, valores menores que o devido ou a multa de 40% não paga na demissão podem ser cobrados.",
    legalBadge: "Lei 8.036/90, arts. 15 e 18",
  },
  law: {
    title: "O que a lei *obriga a empresa* a fazer",
    paragraphs: [
      "O empregador deve depositar, até o dia 20 de cada mês, 8% da remuneração paga ou devida no mês anterior, incluindo horas extras, adicionais, comissões e 13º (Lei 8.036/90, art. 15). Para aprendizes, o percentual é de 2%.",
      "Na dispensa sem justa causa, a empresa deve depositar também 40% sobre todos os depósitos feitos durante o contrato, atualizados (art. 18, § 1º). Os depósitos continuam obrigatórios durante a licença por acidente do trabalho (art. 15, § 5º).",
    ],
    pillars: [
      { title: "Depósito mensal", text: "8% de tudo o que tem natureza salarial, até o dia 20 do mês seguinte." },
      { title: "Multa rescisória", text: "40% sobre o total depositado, na dispensa sem justa causa." },
      { title: "Cobrança", text: "Depósitos faltantes podem ser cobrados na Justiça do Trabalho, com correção." },
    ],
  },
  summaryBox:
    "Você pode conferir os depósitos pelo aplicativo oficial do FGTS. Se houver meses faltando, guarde o extrato. Além da cobrança, a falta de depósitos é considerada falta grave da empresa e pode permitir a rescisão indireta.",
  situations: {
    title: "O que você *encontrou no extrato*?",
    intro: "Escolha a situação mais parecida com a sua.",
    items: [
      {
        title: "Vários meses sem depósito",
        text: "Todos os meses faltantes podem ser cobrados, com correção, dentro do prazo legal.",
        whatsapp: "Olá, Dr. Jhonny! Meu extrato do FGTS tem vários meses sem depósito.",
      },
      {
        title: "Depósitos menores que o devido",
        text: "Horas extras, adicionais e comissões também entram na base do FGTS. É comum ficarem de fora.",
        whatsapp: "Olá, Dr. Jhonny! Os depósitos do FGTS estão menores do que deveriam.",
      },
      {
        title: "Fui demitido e não caiu a multa de 40%",
        text: "Na dispensa sem justa causa, a multa de 40% deve ser depositada junto com as verbas rescisórias.",
        whatsapp: "Olá, Dr. Jhonny! Fui demitido e a multa de 40% do FGTS não foi depositada.",
      },
      {
        title: "Ainda trabalho e o FGTS não é depositado",
        text: "A irregularidade nos depósitos pode justificar a rescisão indireta, com todas as verbas da demissão.",
        whatsapp: "Olá, Dr. Jhonny! Ainda trabalho na empresa e o FGTS não está sendo depositado.",
      },
      {
        title: "Fiquei afastado por acidente e não depositaram",
        text: "Na licença por acidente do trabalho, o depósito do FGTS continua obrigatório.",
        whatsapp: "Olá, Dr. Jhonny! Fiquei afastado por acidente de trabalho e o FGTS não foi depositado.",
      },
      {
        title: "Não consigo sacar depois da demissão",
        text: "Sem a comunicação correta da dispensa, o saque fica travado. A empresa pode ser obrigada a regularizar.",
        whatsapp: "Olá, Dr. Jhonny! Fui demitido e não consigo sacar meu FGTS.",
      },
    ],
  },
  documents: [
    "Extrato completo do FGTS (aplicativo FGTS)",
    "Contracheques do período",
    "Carteira de trabalho",
    "Termo de rescisão, se já saiu da empresa",
    "Mensagens com a empresa sobre o FGTS",
  ],
  mistakes: [
    "Nunca conferir o extrato do FGTS",
    "Acreditar na promessa de que “vai ser depositado tudo junto”",
    "Pedir demissão sem saber que a falta de depósitos permite a rescisão indireta",
    "Deixar passar o prazo de 2 anos após o fim do contrato",
  ],
  myths: [
    {
      myth: "A empresa pode depositar tudo de uma vez quando eu sair.",
      fact: "O depósito é mensal, até o dia 20 do mês seguinte. O atraso já é descumprimento da lei.",
      source: "Lei 8.036/90, art. 15",
    },
    {
      myth: "FGTS atrasado só se resolve na demissão.",
      fact: "É possível cobrar os depósitos e até pedir a rescisão indireta enquanto o contrato está em vigor.",
      source: "CLT, art. 483, “d”",
    },
    {
      myth: "Hora extra não entra no FGTS.",
      fact: "Todas as parcelas de natureza salarial entram na base, inclusive horas extras, adicionais e 13º.",
      source: "Lei 8.036/90, art. 15",
    },
    {
      myth: "O FGTS de mais de 5 anos atrás está perdido para sempre.",
      fact: "A regra atual é de 5 anos, mas há situações de transição para depósitos antigos que merecem análise.",
      source: "Súmula 362 do TST",
    },
  ],
  faq: [
    {
      q: "Como consulto meu FGTS?",
      a: "Pelo aplicativo oficial do FGTS, da Caixa, com login gov.br. O extrato mostra mês a mês o que foi depositado por cada empregador.",
    },
    {
      q: "Qual é o prazo para cobrar o FGTS?",
      a: "Em regra, os últimos 5 anos de depósitos, com ação proposta em até 2 anos após o fim do contrato (Súmula 362 do TST). Para depósitos muito antigos existe regra de transição, que deve ser analisada caso a caso.",
    },
    {
      q: "Posso sair da empresa por causa do FGTS atrasado?",
      a: "Pode, por meio da rescisão indireta, que garante as verbas como se você tivesse sido demitido sem justa causa. O caminho é a ação judicial, não simplesmente parar de trabalhar.",
    },
    {
      q: "O dinheiro cobrado vai para mim ou para a conta do FGTS?",
      a: "Depende da situação. Em geral, os valores são depositados na conta vinculada e liberados quando houver hipótese de saque, como a dispensa sem justa causa.",
    },
  ],
  related: ["rescisao-indireta", "verbas-rescisorias", "carteira-assinada", "horas-extras"],
};
