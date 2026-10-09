import type { Landing } from "../types";

export const acidenteDeTrabalho: Landing = {
  slug: "acidente-de-trabalho",
  category: "trabalhista",
  icon: "hard-hat",
  topic: "Acidente de trabalho",
  summary: "Se machucou no trabalho ou no trajeto? Você pode ter estabilidade, benefício do INSS e indenização.",
  seo: {
    title: "Acidente de trabalho: estabilidade, INSS e indenização",
    description:
      "Quem sofre acidente de trabalho pode ter 12 meses de estabilidade, auxílio do INSS e indenização da empresa. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Sofri um acidente de trabalho e quero entender meus direitos.",
  hero: {
    eyebrow: "Acidente de trabalho",
    question: "Sofreu um acidente no trabalho?",
    answer: "A lei garante *estabilidade, benefício e indenização*, conforme o caso.",
    lead: "Quedas, cortes, máquinas, acidentes com veículos da empresa ou no caminho entre casa e trabalho. Depois do acidente, existem direitos com o INSS e com o empregador, e alguns têm prazo curto.",
    legalBadge: "Lei 8.213/91, arts. 19, 21, 86 e 118",
  },
  law: {
    title: "Os seus direitos *depois do acidente*",
    paragraphs: [
      "Acidente do trabalho é o que acontece pelo exercício do trabalho e causa lesão ou perturbação funcional que reduz, temporária ou permanentemente, a capacidade de trabalhar (Lei 8.213/91, art. 19). A lei também equipara a ele o acidente no percurso entre a residência e o local de trabalho (art. 21, IV, “d”).",
      "A empresa deve comunicar o acidente ao INSS (CAT) até o primeiro dia útil seguinte. Se não fizer, o próprio trabalhador, o sindicato ou o médico podem emitir (art. 22). Quem fica afastado com auxílio acidentário tem estabilidade de pelo menos 12 meses após voltar ao trabalho (art. 118).",
    ],
    pillars: [
      { title: "Registro", text: "A CAT documenta o acidente e garante a natureza acidentária do afastamento." },
      { title: "Benefício", text: "Afastamento acima de 15 dias dá direito ao benefício do INSS, sem exigir carência." },
      { title: "Proteção", text: "Estabilidade de 12 meses após a alta, FGTS depositado no afastamento e possível indenização." },
    ],
  },
  summaryBox:
    "Além do INSS, a empresa pode ter de indenizar quando o acidente aconteceu por falta de equipamento, treinamento ou segurança, ou em atividades de risco. A indenização pode incluir danos morais, materiais (despesas, perda de renda) e estéticos.",
  situations: {
    title: "O que aconteceu *depois do acidente*?",
    intro: "Escolha a situação mais parecida com a sua.",
    items: [
      {
        title: "A empresa não emitiu a CAT",
        text: "Sem a CAT, o afastamento pode ser registrado como doença comum, e você perde a estabilidade e o FGTS do período.",
        whatsapp: "Olá, Dr. Jhonny! Sofri acidente de trabalho e a empresa não emitiu a CAT.",
      },
      {
        title: "Fui demitido depois de voltar do afastamento",
        text: "Quem recebeu auxílio acidentário tem 12 meses de estabilidade. A dispensa nesse período pode ser revertida.",
        whatsapp: "Olá, Dr. Jhonny! Fui demitido depois de voltar de afastamento por acidente de trabalho.",
      },
      {
        title: "Fiquei com sequela",
        text: "Sequela que reduz a capacidade para o trabalho pode dar direito ao auxílio-acidente do INSS, de 50% do salário de benefício.",
        whatsapp: "Olá, Dr. Jhonny! Fiquei com sequela depois de um acidente de trabalho.",
      },
      {
        title: "Faltava equipamento de segurança",
        text: "Falta de EPI, de treinamento ou de proteção nas máquinas pode gerar indenização da empresa.",
        whatsapp: "Olá, Dr. Jhonny! Me acidentei no trabalho e faltava equipamento de segurança.",
      },
      {
        title: "Acidente no caminho do trabalho",
        text: "O acidente de trajeto entre casa e trabalho é equiparado ao acidente do trabalho para o INSS.",
        whatsapp: "Olá, Dr. Jhonny! Sofri um acidente no caminho de casa para o trabalho.",
      },
      {
        title: "O INSS negou ou cortou meu benefício",
        text: "A decisão do INSS pode ser revista por recurso administrativo ou ação judicial.",
        whatsapp: "Olá, Dr. Jhonny! O INSS negou meu benefício depois de um acidente de trabalho.",
      },
    ],
  },
  documents: [
    "CAT (Comunicação de Acidente de Trabalho), se houver",
    "Atestados, laudos, exames e prontuário do atendimento",
    "Carta do INSS com a concessão ou negativa do benefício",
    "Fotos do local ou do equipamento envolvido",
    "Boletim de ocorrência, em acidente de trânsito",
    "Nome de colegas que presenciaram o acidente",
  ],
  mistakes: [
    "Aceitar que o afastamento seja registrado como doença comum",
    "Não guardar os documentos médicos desde o primeiro atendimento",
    "Assinar acordo com a empresa sem entender o valor da estabilidade",
    "Deixar passar o prazo de 2 anos após o fim do contrato",
  ],
  myths: [
    {
      myth: "Só a empresa pode emitir a CAT.",
      fact: "Se a empresa não emitir, o próprio acidentado, seus dependentes, o sindicato ou o médico podem fazer.",
      source: "Lei 8.213/91, art. 22, § 2º",
    },
    {
      myth: "Acidente no caminho de casa não conta.",
      fact: "O acidente no percurso entre a residência e o trabalho é equiparado ao acidente do trabalho.",
      source: "Lei 8.213/91, art. 21, IV, “d”",
    },
    {
      myth: "Recebendo INSS, a empresa não deve mais nada.",
      fact: "O benefício do INSS não impede a indenização pela empresa quando há culpa ou atividade de risco.",
      source: "CF, art. 7º, XXVIII",
    },
    {
      myth: "Afastado, eu perco o FGTS.",
      fact: "Durante a licença por acidente do trabalho, a empresa continua obrigada a depositar o FGTS.",
      source: "Lei 8.036/90, art. 15, § 5º",
    },
  ],
  faq: [
    {
      q: "Quem paga os primeiros dias de afastamento?",
      a: "Para o empregado, a empresa paga os primeiros 15 dias. A partir do 16º dia, o pagamento passa a ser do INSS, por meio do auxílio por incapacidade temporária.",
    },
    {
      q: "Como funciona a estabilidade de 12 meses?",
      a: "Ela começa quando o auxílio acidentário termina e você volta ao trabalho. Em regra, exige afastamento superior a 15 dias com benefício acidentário, salvo se depois se constatar doença ligada ao trabalho (Súmula 378 do TST).",
    },
    {
      q: "O que é o auxílio-acidente?",
      a: "É uma indenização mensal paga pelo INSS quando, depois de consolidadas as lesões, ficam sequelas que reduzem a capacidade para o trabalho habitual. Corresponde a 50% do salário de benefício e pode ser recebido junto com o salário (Lei 8.213/91, art. 86).",
    },
    {
      q: "Posso processar a empresa e pedir o benefício ao mesmo tempo?",
      a: "Sim. São caminhos diferentes: o benefício é pedido ao INSS, e a indenização é cobrada da empresa na Justiça do Trabalho.",
    },
    {
      q: "Fui demitido logo depois do acidente, sem afastamento. Tenho algum direito?",
      a: "Pode ter. A dispensa logo após o acidente, sem emissão da CAT, é situação que merece análise, porque pode ter impedido o afastamento e a estabilidade.",
    },
  ],
  related: ["doenca-ocupacional", "inss", "insalubridade-periculosidade", "trabalhador-rural"],
};
