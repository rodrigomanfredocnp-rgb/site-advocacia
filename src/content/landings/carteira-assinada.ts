import type { Landing } from "../types";

export const carteiraAssinada: Landing = {
  slug: "carteira-assinada",
  category: "trabalhista",
  topic: "Trabalho sem carteira",
  summary: "Trabalhou sem registro? Você pode ter os direitos de um empregado.",
  photoAlt: "Funcionária de um café trabalhando no balcão",
  photoFocus: "40% 35%",
  seo: {
    title: "Trabalhei sem carteira assinada: quais são os meus direitos?",
    description:
      "Quem trabalha com horário, ordens e salário é empregado, com ou sem registro. Peça o reconhecimento do vínculo com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Trabalhei sem carteira assinada e quero entender meus direitos.",
  hero: {
    title: "Trabalhou sem carteira assinada?",
    lead: "Se você trabalhava sempre, com horário, chefe e salário, pode existir emprego mesmo sem registro. A Justiça pode mandar anotar a carteira e pagar o que ficou para trás.",
  },
  situations: [
    {
      title: "Trabalhei meses ou anos sem registro",
      whatsapp: "Olá, Dr. Jhonny! Trabalhei sem registro na carteira por muito tempo.",
    },
    {
      title: "Fui contratado como MEI ou PJ",
      whatsapp: "Olá, Dr. Jhonny! Fui contratado como MEI/PJ, mas trabalhava como empregado.",
    },
    {
      title: "Diziam que eu estava em “período de teste”",
      whatsapp: "Olá, Dr. Jhonny! A empresa disse que eu estava em teste e não assinou a carteira.",
    },
    {
      title: "Assinaram minha carteira só depois",
      whatsapp: "Olá, Dr. Jhonny! A empresa assinou minha carteira com data posterior à real.",
    },
    {
      title: "Trabalhei como doméstica ou caseiro",
      whatsapp: "Olá, Dr. Jhonny! Trabalhei em casa de família sem carteira assinada.",
    },
    {
      title: "Recebia parte do salário “por fora”",
      whatsapp: "Olá, Dr. Jhonny! Parte do meu salário era paga por fora.",
    },
  ],
  law: {
    text: "Quem trabalha sempre, recebe salário e cumpre ordens de um chefe é empregado, mesmo sem nada assinado. O que conta é como o trabalho acontecia, e não o papel. Em casa de família, quem trabalha mais de 2 dias por semana para a mesma família é empregado doméstico.",
    source: "CLT, arts. 3º e 11, § 1º · Lei Complementar 150/2015, art. 1º",
  },
  faq: [
    {
      q: "Como provo que trabalhava lá?",
      a: "Testemunhas, mensagens, áudios, fotos, comprovantes de Pix e até postagens em redes sociais podem ajudar. Quanto mais provas, melhor.",
    },
    {
      q: "Fui contratado como MEI ou PJ. Tenho direito?",
      a: "Depende de como era o trabalho no dia a dia. Esse tipo de contrato está sendo discutido nos tribunais, inclusive no Supremo Tribunal Federal, por isso cada caso precisa de uma análise cuidadosa.",
    },
    {
      q: "O tempo sem carteira conta para a aposentadoria?",
      a: "Pode contar. Quando o vínculo é reconhecido, as contribuições ao INSS daquele período também podem ser cobradas.",
    },
    {
      q: "Qual é o prazo para buscar meus direitos?",
      a: "Até 2 anos depois de sair do trabalho. Já o pedido só para anotar a carteira e provar o tempo no INSS não tem prazo.",
    },
  ],
  related: ["fgts", "aposentadoria", "verbas-rescisorias"],
};
