import type { Landing } from "../types";

export const fgts: Landing = {
  slug: "fgts",
  category: "trabalhista",
  topic: "FGTS não depositado",
  summary: "Faltam depósitos no seu FGTS? Esse dinheiro pode ser cobrado.",
  photoAlt: "Homem sentado no sofá conferindo o celular",
  photoFocus: "45% 35%",
  seo: {
    title: "FGTS não depositado: o que fazer e como cobrar",
    description:
      "A empresa deve depositar 8% do salário no FGTS todo mês. Depósitos faltando podem ser cobrados e até justificar a rescisão indireta. Fale com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Meu FGTS não está sendo depositado corretamente.",
  hero: {
    title: "Seu FGTS está com depósitos faltando?",
    lead: "Todo mês, a empresa deve depositar 8% do seu salário no FGTS. Meses em branco, valores menores ou a multa de 40% não paga podem ser cobrados.",
  },
  situations: [
    {
      title: "Meu extrato tem meses sem depósito",
      whatsapp: "Olá, Dr. Jhonny! Meu extrato do FGTS tem vários meses sem depósito.",
    },
    {
      title: "Os depósitos estão menores que o devido",
      whatsapp: "Olá, Dr. Jhonny! Os depósitos do FGTS estão menores do que deveriam.",
    },
    {
      title: "Fui demitido e a multa de 40% não caiu",
      whatsapp: "Olá, Dr. Jhonny! Fui demitido e a multa de 40% do FGTS não foi depositada.",
    },
    {
      title: "Ainda trabalho e o FGTS não é depositado",
      whatsapp: "Olá, Dr. Jhonny! Ainda trabalho na empresa e o FGTS não está sendo depositado.",
    },
    {
      title: "Fiquei afastado por acidente e não depositaram",
      whatsapp: "Olá, Dr. Jhonny! Fiquei afastado por acidente de trabalho e o FGTS não foi depositado.",
    },
    {
      title: "Não consigo sacar depois da demissão",
      whatsapp: "Olá, Dr. Jhonny! Fui demitido e não consigo sacar meu FGTS.",
    },
  ],
  law: {
    text: "A empresa deve depositar 8% do seu salário até o dia 20 do mês seguinte, contando também horas extras, adicionais e 13º. Na demissão sem justa causa, ela também deve depositar uma multa de 40% sobre o total. O depósito continua obrigatório no afastamento por acidente de trabalho.",
    source: "Lei 8.036/90, arts. 15 e 18",
  },
  faq: [
    {
      q: "Como confiro meu FGTS?",
      a: "Pelo aplicativo FGTS, da Caixa, ou numa agência da Caixa. O extrato mostra, mês a mês, o que cada empresa depositou.",
    },
    {
      q: "Qual é o prazo para cobrar?",
      a: "Em regra, dá para cobrar os últimos 5 anos de depósitos, com ação em até 2 anos depois do fim do contrato. Para depósitos muito antigos, existe uma regra de transição que precisa ser analisada.",
    },
    {
      q: "Posso sair da empresa por causa disso?",
      a: "Pode existir esse direito, pela rescisão indireta: você sai recebendo como se tivesse sido demitido sem justa causa. Mas não pare de trabalhar por conta própria. O pedido é feito na Justiça.",
    },
    {
      q: "O dinheiro vai para mim ou para a conta do FGTS?",
      a: "Depende do caso. Em geral, o valor é depositado na conta do FGTS e liberado quando houver direito ao saque, como na demissão sem justa causa.",
    },
  ],
  related: ["rescisao-indireta", "verbas-rescisorias", "carteira-assinada"],
};
