import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Condições de uso do site do escritório Jhonny Cardoso Advogado.",
  alternates: { canonical: "/termos-de-uso/" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Termos de uso" updated="outubro de 2026">
      <h2>1. Finalidade do site</h2>
      <p>
        Este site apresenta a atuação profissional de {site.lawyer.fullName}, advogado inscrito na {site.lawyer.oab}, e reúne
        informações gerais sobre as áreas atendidas pelo escritório. O conteúdo tem caráter exclusivamente informativo, em
        conformidade com o Código de Ética e Disciplina da OAB e o Provimento 205/2021 do Conselho Federal da OAB.
      </p>

      <h2>2. O conteúdo não substitui uma consulta</h2>
      <p>
        As informações publicadas são gerais e podem não se aplicar ao seu caso. Cada situação depende de fatos, documentos, datas
        e da interpretação dos tribunais, que pode mudar com o tempo. Nenhum texto deste site constitui parecer jurídico nem
        promessa de resultado.
      </p>

      <h2>3. Contato não cria relação de cliente</h2>
      <p>
        Enviar uma mensagem pelo WhatsApp, e-mail ou telefone não estabelece, por si só, contrato de prestação de serviços nem
        confirma a aceitação do caso ou a adoção de medida urgente. A contratação depende de acordo entre as partes, formalizado
        por escrito, com as condições definidas de forma clara.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Textos, marca, logotipo, fotografias e demais elementos do site pertencem ao escritório ou são usados com autorização. A
        reprodução depende de autorização prévia, exceto citações curtas com indicação da fonte.
      </p>

      <h2>5. Links externos</h2>
      <p>
        O site contém links para serviços de terceiros, como WhatsApp, Google Maps e redes sociais, que têm as suas próprias
        regras de uso e de privacidade.
      </p>

      <h2>6. Privacidade</h2>
      <p>
        O tratamento de dados pessoais está descrito na <Link href="/politica-de-privacidade/">Política de privacidade</Link>.
      </p>

      <h2>7. Legislação e foro</h2>
      <p>
        Estes termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de {site.address.city}/
        {site.address.state}, ressalvadas as regras de competência que protegem o consumidor.
      </p>
    </LegalPage>
  );
}
