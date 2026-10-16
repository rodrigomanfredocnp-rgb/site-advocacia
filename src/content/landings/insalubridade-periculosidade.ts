import type { Landing } from "../types";

export const insalubridadePericulosidade: Landing = {
  slug: "insalubridade-periculosidade",
  category: "trabalhista",
  topic: "Insalubridade e periculosidade",
  summary: "Trabalha com calor, barulho, agrotóxico ou perigo? Pode ter adicional a receber.",
  photoAlt: "Soldador com máscara de proteção trabalhando no alto, ao entardecer",
  photoFocus: "50% 35%",
  seo: {
    title: "Adicional de insalubridade e periculosidade: quem tem direito",
    description:
      "Calor, ruído, agrotóxicos, inflamáveis, eletricidade e motocicleta podem gerar adicional de 10% a 40%. Converse com o Dr. Jhonny Cardoso.",
  },
  whatsapp: "Olá, Dr. Jhonny! Vim pelo site. Acho que tenho direito a adicional de insalubridade ou periculosidade.",
  hero: {
    title: "Seu trabalho põe a sua saúde em risco?",
    lead: "Calor forte, barulho, agrotóxico, combustível, eletricidade ou trabalho de moto? Você pode ter direito a um valor a mais no salário.",
  },
  situations: [
    {
      title: "Trabalho na lavoura, sob sol forte",
      whatsapp: "Olá, Dr. Jhonny! Trabalho no campo, exposto ao calor, e não recebo insalubridade.",
    },
    {
      title: "Aplico ou tenho contato com agrotóxicos",
      whatsapp: "Olá, Dr. Jhonny! Tenho contato com agrotóxicos no trabalho.",
    },
    {
      title: "Trabalho com barulho, poeira ou química",
      whatsapp: "Olá, Dr. Jhonny! Trabalho exposto a ruído, poeira ou produtos químicos.",
    },
    {
      title: "Trabalho com combustível ou inflamáveis",
      whatsapp: "Olá, Dr. Jhonny! Trabalho com combustível ou inflamáveis.",
    },
    {
      title: "Trabalho com eletricidade",
      whatsapp: "Olá, Dr. Jhonny! Trabalho com eletricidade e não recebo periculosidade.",
    },
    {
      title: "Uso a moto para trabalhar",
      whatsapp: "Olá, Dr. Jhonny! Uso moto para trabalhar e não recebo periculosidade.",
    },
  ],
  law: {
    text: "Quem trabalha exposto a calor, barulho ou produtos químicos acima do limite permitido pode ter direito a um adicional de 10%, 20% ou 40%, em regra sobre o salário mínimo. Quem trabalha com combustível, eletricidade ou de moto pode ter direito a 30% sobre o salário-base. Na Justiça, um perito confere o local de trabalho.",
    source: "CLT, arts. 192, 193 e 195",
  },
  faq: [
    {
      q: "Usar equipamento de proteção tira o direito?",
      a: "Não necessariamente. O adicional de insalubridade só deixa de ser devido se o equipamento eliminar de fato o risco à saúde. Só entregar o equipamento não basta.",
    },
    {
      q: "Posso receber os dois adicionais juntos?",
      a: "Não. Os dois não se somam. Quem tem direito aos dois escolhe o que for mais vantajoso.",
    },
    {
      q: "Preciso de um laudo antes?",
      a: "Não. Na Justiça, o juiz nomeia um perito para avaliar o local de trabalho. Seus relatos, fotos e documentos ajudam nessa avaliação.",
    },
    {
      q: "Isso ajuda na aposentadoria?",
      a: "Pode ajudar. O tempo trabalhado exposto a agentes que fazem mal à saúde pode contar como tempo especial no INSS, se for comprovado, em geral pelo PPP, um documento que você pode pedir à empresa ao sair.",
    },
  ],
  related: ["trabalhador-rural", "aposentadoria", "doenca-ocupacional"],
};
