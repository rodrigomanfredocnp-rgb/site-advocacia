import type { Landing } from "../types";

export const carteiraAssinada: Landing = {
  slug: "carteira-assinada",
  category: "trabalhista",
  icon: "id-card",
  topic: "Trabalho sem carteira",
  summary: "Trabalhou sem registro, como “freelancer” ou “ajudante”? O vínculo pode ser reconhecido, com todos os direitos.",
  seo: {
    title: "Trabalhei sem carteira assinada: quais são os meus direitos?",
    description:
      "Quem trabalha com horário, ordens e salário é empregado, com ou sem registro. Peça o reconhecimento do vínculo com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Trabalhei sem carteira assinada e quero entender meus direitos.",
  hero: {
    eyebrow: "Reconhecimento de vínculo",
    question: "Trabalhou sem carteira assinada?",
    answer: "Você pode ter *todos os direitos* de um empregado registrado.",
    lead:
      "Se havia horário, chefe dando ordens, salário e trabalho frequente, existia uma relação de emprego, mesmo sem papel assinado. A Justiça pode reconhecer o vínculo e mandar pagar o que ficou para trás.",
    legalBadge: "CLT, arts. 2º, 3º e 9º",
  },
  law: {
    title: "Quando existe *relação de emprego*",
    paragraphs: [
      "Para a CLT, empregado é a pessoa física que presta serviço de forma não eventual, sob dependência do empregador e mediante salário (art. 3º). Quando esses elementos estão presentes, o vínculo existe, independentemente do nome dado ao contrato.",
      "A lei considera nulos os atos feitos para fraudar os direitos trabalhistas (CLT, art. 9º). O empregador tem 5 dias úteis para anotar a carteira de quem admite (art. 29). Sem o registro, o trabalhador fica sem FGTS, sem contribuição ao INSS e sem seguro-desemprego.",
    ],
    pillars: [
      { title: "Pessoalidade", text: "Era você quem tinha que trabalhar. Não podia mandar outra pessoa no seu lugar." },
      { title: "Subordinação", text: "Havia alguém que dava ordens, definia horários e cobrava resultados." },
      { title: "Salário e frequência", text: "Você recebia pelo trabalho e trabalhava de forma contínua, não só de vez em quando." },
    ],
  },
  summaryBox:
    "Com o reconhecimento do vínculo, podem ser cobrados: anotação na carteira, FGTS de todo o período com a multa de 40% se a dispensa foi sem justa causa, férias com um terço, 13º, aviso prévio, horas extras e o recolhimento ao INSS, que conta para a sua aposentadoria.",
  situations: {
    title: "Qual era *a sua situação*?",
    intro: "Escolha a que mais se aproxima do que você viveu.",
    items: [
      {
        title: "Trabalhei meses ou anos sem registro",
        text: "Todo o período pode ser reconhecido, com anotação na carteira e pagamento dos direitos.",
        whatsapp: "Olá, Dr. Jhonny! Trabalhei sem registro na carteira por muito tempo.",
      },
      {
        title: "Fui contratado como MEI ou PJ",
        text: "Quando há ordens, horário e salário fixo, o rótulo de “prestador” pode esconder um emprego. Cada caso exige análise cuidadosa.",
        whatsapp: "Olá, Dr. Jhonny! Fui contratado como MEI/PJ, mas trabalhava como empregado.",
      },
      {
        title: "Diziam que era “período de teste”",
        text: "O período de experiência também precisa ser anotado na carteira desde o primeiro dia.",
        whatsapp: "Olá, Dr. Jhonny! A empresa disse que eu estava em teste e não assinou a carteira.",
      },
      {
        title: "A carteira foi assinada só depois",
        text: "A data de início pode ser corrigida, com os direitos do período que ficou de fora.",
        whatsapp: "Olá, Dr. Jhonny! A empresa assinou minha carteira com data posterior à real.",
      },
      {
        title: "Trabalhei como doméstica ou caseiro",
        text: "Quem trabalha mais de 2 dias por semana na mesma casa é empregado doméstico, com direitos garantidos (LC 150/2015).",
        whatsapp: "Olá, Dr. Jhonny! Trabalhei em casa de família sem carteira assinada.",
      },
      {
        title: "O salário “por fora” era maior que o registrado",
        text: "Valores pagos por fora integram o salário e refletem em férias, 13º, FGTS e INSS.",
        whatsapp: "Olá, Dr. Jhonny! Parte do meu salário era paga por fora.",
      },
    ],
  },
  documents: [
    "Comprovantes de pagamento: Pix, transferências, recibos",
    "Mensagens com ordens, escalas e horários",
    "Fotos no local de trabalho, crachá ou uniforme",
    "Nome e contato de colegas que trabalharam com você",
    "Carteira de trabalho, mesmo que sem a anotação",
    "Qualquer contrato de “prestação de serviço” que tenha assinado",
  ],
  mistakes: [
    "Achar que sem carteira não existe direito nenhum",
    "Apagar conversas e comprovantes de Pix",
    "Aceitar acordo informal sem saber quanto vale o período",
    "Esperar mais de 2 anos após sair e perder o prazo",
  ],
  myths: [
    {
      myth: "Se eu não assinei nada, não sou empregado.",
      fact: "O vínculo depende de como o trabalho acontecia, não de papel assinado.",
      source: "CLT, art. 3º",
    },
    {
      myth: "Recebia por Pix, então não tem prova.",
      fact: "Transferências frequentes ajudam a provar o salário e a continuidade do trabalho.",
    },
    {
      myth: "Doméstica que vai três vezes por semana é diarista.",
      fact: "Mais de 2 dias por semana na mesma residência caracteriza emprego doméstico.",
      source: "Lei Complementar 150/2015, art. 1º",
    },
    {
      myth: "O tempo sem carteira não conta para a aposentadoria.",
      fact: "Com o reconhecimento do vínculo, as contribuições ao INSS do período também podem ser cobradas.",
    },
  ],
  faq: [
    {
      q: "Como provar que eu trabalhava lá?",
      a: "Testemunhas, mensagens, áudios, fotos, comprovantes de pagamento e até postagens em redes sociais podem ser usados. Quanto mais elementos, melhor.",
    },
    {
      q: "Posso pedir o reconhecimento do vínculo se ainda trabalho lá?",
      a: "Pode. Em alguns casos, a falta de registro também permite pedir o fim do contrato por culpa do empregador (rescisão indireta). Isso deve ser avaliado antes de qualquer passo.",
    },
    {
      q: "Fui contratado como PJ. Tenho chance?",
      a: "Depende de como o trabalho era feito na prática. A validade desses contratos vem sendo discutida nos tribunais, inclusive no Supremo Tribunal Federal, por isso cada caso exige uma análise individual e cuidadosa.",
    },
    {
      q: "Qual é o prazo?",
      a: "A ação deve ser proposta em até 2 anos após o fim do trabalho. O pedido de anotação na carteira para fins de prova junto à Previdência não prescreve (CLT, art. 11, § 1º).",
    },
  ],
  related: ["verbas-rescisorias", "fgts", "horas-extras", "aposentadoria"],
};
