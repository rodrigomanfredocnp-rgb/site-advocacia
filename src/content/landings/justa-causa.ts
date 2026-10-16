import type { Landing } from "../types";

export const justaCausa: Landing = {
  slug: "justa-causa",
  category: "trabalhista",
  topic: "Justa causa",
  summary: "Foi demitido por justa causa? A decisão pode ser revertida.",
  photoAlt: "Homem de cabelos grisalhos lendo um papel com preocupação, em frente ao notebook",
  photoFocus: "35% 40%",
  seo: {
    title: "Demitido por justa causa? Saiba como reverter",
    description:
      "A justa causa precisa ser provada pela empresa. Se for revertida, você recebe aviso prévio, multa do FGTS e seguro-desemprego. Fale com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Fui demitido por justa causa e não concordo.",
  hero: {
    title: "Foi demitido por justa causa?",
    lead: "A empresa precisa provar o motivo. Se não provar, a Justiça pode mudar para demissão sem justa causa, e você pode receber os direitos que perdeu.",
  },
  situations: [
    {
      title: "Fui acusado de algo que não fiz",
      whatsapp: "Olá, Dr. Jhonny! Fui demitido por justa causa por algo que não fiz.",
    },
    {
      title: "Fui demitido por faltas ou atrasos",
      whatsapp: "Olá, Dr. Jhonny! Fui demitido por justa causa por faltas ou atrasos.",
    },
    {
      title: "Disseram que abandonei o emprego",
      whatsapp: "Olá, Dr. Jhonny! A empresa alegou abandono de emprego na minha demissão.",
    },
    {
      title: "Fui punido muito tempo depois do fato",
      whatsapp: "Olá, Dr. Jhonny! Fui demitido por justa causa muito tempo depois do ocorrido.",
    },
    {
      title: "Já tinha sido advertido pelo mesmo motivo",
      whatsapp: "Olá, Dr. Jhonny! Fui punido duas vezes pelo mesmo motivo e depois demitido por justa causa.",
    },
    {
      title: "Me obrigaram a assinar a justa causa",
      whatsapp: "Olá, Dr. Jhonny! Assinei o comunicado de justa causa, mas não concordo.",
    },
  ],
  law: {
    text: "A justa causa só vale para os motivos graves que a lei lista, como desonestidade, indisciplina ou abandono de emprego. Quem precisa provar o motivo é a empresa, não você. A empresa também precisa punir logo após o fato, na medida certa, e não pode punir duas vezes pela mesma falta.",
    source: "CLT, arts. 482 e 818, II",
  },
  faq: [
    {
      q: "Se a justa causa for revertida, o que recebo?",
      a: "Você pode receber o que recebe quem é demitido sem justa causa: aviso prévio, 13º e férias proporcionais com um terço, FGTS com multa de 40% e seguro-desemprego. E, mesmo com a justa causa, o saldo de salário e as férias vencidas com um terço continuam devidos.",
    },
    {
      q: "Assinei o papel. Ainda posso contestar?",
      a: "Pode. A assinatura só mostra que você recebeu o comunicado. Não quer dizer que você concordou com o motivo.",
    },
    {
      q: "Posso pedir danos morais?",
      a: "Pode existir esse direito. Quando a empresa acusa o trabalhador de algo grave, como furto, e não consegue provar, pode haver indenização por danos morais.",
    },
    {
      q: "Quanto tempo tenho para contestar?",
      a: "Até 2 anos depois da demissão. Mas quanto antes, melhor: isso ajuda no seguro-desemprego e a guardar as provas.",
    },
  ],
  related: ["verbas-rescisorias", "fgts", "rescisao-indireta"],
};
