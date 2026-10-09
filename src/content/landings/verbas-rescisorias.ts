import type { Landing } from "../types";

export const verbasRescisorias: Landing = {
  slug: "verbas-rescisorias",
  category: "trabalhista",
  icon: "receipt",
  topic: "Rescisão não paga",
  summary: "Foi demitido e o acerto não veio, veio incompleto ou atrasado? Confira o que deveria ter recebido.",
  seo: {
    title: "Rescisão atrasada ou paga errado: o que fazer",
    description:
      "A empresa tem 10 dias para pagar a rescisão. Atraso gera multa de um salário. Entenda suas verbas rescisórias e converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Minha rescisão não foi paga corretamente.",
  hero: {
    eyebrow: "Verbas rescisórias",
    question: "Sua rescisão atrasou ou veio errada?",
    answer: "A empresa tem *10 dias* para pagar tudo o que você tem direito.",
    lead:
      "Saldo de salário, aviso prévio, férias com um terço, 13º proporcional, FGTS e a multa de 40%. Quando o pagamento atrasa ou vem a menor, a lei prevê multa a favor do trabalhador.",
    legalBadge: "CLT, art. 477, §§ 6º e 8º · art. 467",
  },
  law: {
    title: "O prazo e as *multas* da rescisão",
    paragraphs: [
      "Ao fim do contrato, a empresa deve pagar as verbas rescisórias e entregar os documentos que comprovam a comunicação da dispensa em até dez dias contados do término do contrato (CLT, art. 477, § 6º). Se não cumprir o prazo, deve pagar ao empregado uma multa equivalente ao seu salário (art. 477, § 8º).",
      "Se a empresa reconhece que deve parte dos valores e mesmo assim não paga na primeira audiência, essa parte incontroversa é acrescida de 50% (CLT, art. 467). Na dispensa sem justa causa, há ainda a multa de 40% sobre todo o FGTS depositado (Lei 8.036/90, art. 18, § 1º).",
    ],
    pillars: [
      { title: "Prazo", text: "Dez dias, contados do fim do contrato, para pagar e entregar os documentos." },
      { title: "Conferência", text: "Cada verba precisa estar discriminada com o valor no termo de rescisão (art. 477, § 2º)." },
      { title: "Multas", text: "Atraso gera multa de um salário. Valor incontroverso não pago em audiência sobe 50%." },
    ],
  },
  summaryBox:
    "Na dispensa sem justa causa, normalmente são devidos: saldo de salário, aviso prévio (trabalhado ou indenizado, com 3 dias a mais por ano de casa), férias vencidas e proporcionais com um terço, 13º proporcional, multa de 40% do FGTS e as guias do seguro-desemprego. O que se aplica ao seu caso depende do tipo de desligamento.",
  situations: {
    title: "O que aconteceu *com o seu acerto*?",
    intro: "Escolha a situação mais parecida com a sua e envie a mensagem já com o assunto certo.",
    items: [
      {
        title: "Passaram 10 dias e não recebi nada",
        text: "O atraso gera a multa do art. 477, § 8º, da CLT, no valor de um salário, além das próprias verbas.",
        whatsapp: "Olá, Dr. Jhonny! Fui demitido e já passaram mais de 10 dias sem pagamento da rescisão.",
      },
      {
        title: "Recebi, mas o valor parece menor",
        text: "Médias de horas extras, comissões e adicionais costumam ficar de fora do cálculo. Vale conferir verba por verba.",
        whatsapp: "Olá, Dr. Jhonny! Recebi a rescisão, mas acho que o valor veio menor.",
      },
      {
        title: "A empresa disse que vai pagar parcelado",
        text: "A lei não prevê parcelamento das verbas rescisórias por decisão da empresa. O prazo legal continua valendo.",
        whatsapp: "Olá, Dr. Jhonny! A empresa quer parcelar minha rescisão.",
      },
      {
        title: "Não liberaram o FGTS nem o seguro-desemprego",
        text: "Sem a comunicação da dispensa, o trabalhador fica sem sacar o FGTS e sem pedir o seguro. Isso pode gerar indenização.",
        whatsapp: "Olá, Dr. Jhonny! A empresa não liberou meu FGTS nem o seguro-desemprego.",
      },
      {
        title: "Fiz acordo para sair e quero conferir",
        text: "No acordo do art. 484-A, metade do aviso e da multa do FGTS, e o restante integral. Dá para checar se foi respeitado.",
        whatsapp: "Olá, Dr. Jhonny! Saí por acordo com a empresa e quero conferir se recebi certo.",
      },
      {
        title: "A empresa fechou ou sumiu",
        text: "Mesmo com a empresa fechada, há caminhos para cobrar, inclusive contra sócios ou empresas do mesmo grupo.",
        whatsapp: "Olá, Dr. Jhonny! A empresa fechou e não pagou minha rescisão.",
      },
    ],
  },
  documents: [
    "Termo de rescisão do contrato (TRCT), se houver",
    "Carteira de trabalho",
    "Últimos contracheques",
    "Extrato do FGTS (aplicativo FGTS)",
    "Aviso prévio ou comunicado de dispensa",
    "Comprovantes de depósito recebidos",
  ],
  mistakes: [
    "Assinar o termo de rescisão sem conferir cada verba",
    "Achar que o atraso “é normal” e esperar meses",
    "Não guardar mensagens em que a empresa promete pagar depois",
    "Perder o prazo de 2 anos após a saída para entrar com a ação",
  ],
  myths: [
    {
      myth: "Se eu assinei o termo de rescisão, não posso reclamar mais nada.",
      fact: "A quitação vale apenas para as parcelas e os valores que estão discriminados no termo.",
      source: "CLT, art. 477, § 2º",
    },
    {
      myth: "A empresa pode pagar quando puder.",
      fact: "O prazo é de dez dias a partir do fim do contrato. Depois disso, cabe multa de um salário.",
      source: "CLT, art. 477, §§ 6º e 8º",
    },
    {
      myth: "Quem pede demissão não recebe nada.",
      fact: "Quem pede demissão recebe saldo de salário, férias com um terço e 13º proporcional. Só não saca o FGTS nem recebe a multa de 40%.",
    },
    {
      myth: "Processo trabalhista demora anos e não vale a pena.",
      fact: "Muitos casos de rescisão são resolvidos por acordo logo no início do processo. Cada caso tem seu ritmo.",
    },
  ],
  faq: [
    {
      q: "Quanto é a multa por atraso na rescisão?",
      a: "Um valor igual ao seu salário, pago ao trabalhador (CLT, art. 477, § 8º), além das próprias verbas devidas. A multa não se aplica se o atraso foi causado pelo próprio trabalhador.",
    },
    {
      q: "O aviso prévio é sempre de 30 dias?",
      a: "O mínimo é de 30 dias, com 3 dias a mais para cada ano completo de trabalho na mesma empresa, até o limite de 90 dias (Lei 12.506/2011).",
    },
    {
      q: "Horas extras e comissões entram no cálculo da rescisão?",
      a: "Quando são habituais, entram nas médias que refletem em férias, 13º, aviso prévio e FGTS. É comum esse reflexo ficar de fora.",
    },
    {
      q: "Qual o prazo para cobrar na Justiça?",
      a: "Até 2 anos após o fim do contrato, podendo cobrar os últimos 5 anos de direitos (CF, art. 7º, XXIX, e CLT, art. 11).",
    },
    {
      q: "Preciso pagar algo para tirar dúvidas?",
      a: "O primeiro contato pelo WhatsApp serve para entender o seu caso. Se houver contratação, os honorários são combinados com você de forma clara, antes de qualquer providência.",
    },
  ],
  related: ["fgts", "horas-extras", "justa-causa", "rescisao-indireta"],
};
