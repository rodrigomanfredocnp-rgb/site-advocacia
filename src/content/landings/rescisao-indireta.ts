import type { Landing } from "../types";

export const rescisaoIndireta: Landing = {
  slug: "rescisao-indireta",
  category: "trabalhista",
  topic: "Rescisão indireta",
  summary: "Salário atrasado ou FGTS sem depósito? Você pode sair sem perder direitos.",
  photoAlt: "Mulher preocupada com as mãos no rosto, em frente ao notebook",
  photoFocus: "45% 35%",
  seo: {
    title: "Rescisão indireta: como sair do emprego sem perder direitos",
    description:
      "Quando a empresa descumpre o contrato, o trabalhador pode encerrar o vínculo e receber como se fosse demitido. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Quero sair da empresa por culpa dela sem perder meus direitos.",
  hero: {
    title: "Quer sair, mas a culpa é da empresa?",
    lead: "Salário atrasado, FGTS sem depósito ou humilhações? Em vez de pedir demissão, você pode ter direito a sair recebendo como se tivesse sido demitido.",
  },
  situations: [
    {
      title: "Meu salário atrasa com frequência",
      whatsapp: "Olá, Dr. Jhonny! A empresa atrasa meu salário com frequência.",
    },
    {
      title: "Meu FGTS não está sendo depositado",
      whatsapp: "Olá, Dr. Jhonny! A empresa não está depositando meu FGTS.",
    },
    {
      title: "Sou humilhado ou perseguido",
      whatsapp: "Olá, Dr. Jhonny! Sou humilhado no trabalho e quero sair sem perder direitos.",
    },
    {
      title: "Me mandam fazer o que não é minha função",
      whatsapp: "Olá, Dr. Jhonny! A empresa exige que eu faça funções que não são minhas.",
    },
    {
      title: "Trabalho sem segurança",
      whatsapp: "Olá, Dr. Jhonny! Trabalho sem condições de segurança.",
    },
    {
      title: "Reduziram meu salário ou minhas comissões",
      whatsapp: "Olá, Dr. Jhonny! A empresa reduziu meu salário ou minhas comissões.",
    },
  ],
  law: {
    text: "Quando a empresa comete uma falta grave, você pode encerrar o contrato por culpa dela. Por exemplo: atrasar salário, não depositar o FGTS, humilhar, expor a perigo ou exigir serviço fora da função. O pedido é feito na Justiça, e você pode receber como se tivesse sido demitido sem justa causa.",
    source: "CLT, art. 483",
  },
  faq: [
    {
      q: "Preciso parar de trabalhar?",
      a: "Não por conta própria, porque isso pode virar abandono de emprego. Se o problema é salário ou FGTS atrasado, a lei permite continuar trabalhando até a decisão. Em casos de humilhação ou risco, pode ser melhor se afastar, com orientação.",
    },
    {
      q: "O que eu posso receber?",
      a: "O mesmo que recebe quem é demitido sem justa causa: aviso prévio, 13º e férias proporcionais com um terço, saque do FGTS com multa de 40% e as guias do seguro-desemprego.",
    },
    {
      q: "E se o juiz não reconhecer?",
      a: "O contrato pode ser tratado como pedido de demissão. Por isso, as provas são analisadas com cuidado antes de qualquer passo.",
    },
    {
      q: "Preciso ir até o escritório?",
      a: "Não. Dá para conversar e enviar os documentos pelo WhatsApp. Se preferir, o atendimento presencial é em Campo Novo do Parecis/MT.",
    },
  ],
  related: ["fgts", "assedio-moral", "verbas-rescisorias"],
};
