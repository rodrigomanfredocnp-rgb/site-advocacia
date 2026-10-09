import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { fullAddress, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como o escritório Jhonny Cardoso Advogado trata dados pessoais, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="LGPD" title="Política de privacidade" updated="outubro de 2026">
      <p>
        Esta política explica como {site.lawyer.fullName}, advogado inscrito na {site.lawyer.oab} (“escritório”), trata os dados
        pessoais de quem visita este site ou entra em contato, em conformidade com a Lei Geral de Proteção de Dados (Lei
        13.709/2018).
      </p>

      <h2>1. Quem é o controlador</h2>
      <p>
        O controlador dos dados é {site.lawyer.fullName}, com escritório em {fullAddress}. Para qualquer assunto sobre os seus
        dados, escreva para <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
      </p>

      <h2>2. Quais dados são tratados</h2>
      <ul>
        <li>
          <strong>Dados que você envia</strong> ao iniciar uma conversa pelo WhatsApp, por e-mail ou telefone: nome, contato e as
          informações sobre o seu caso que decidir compartilhar.
        </li>
        <li>
          <strong>Dados de navegação</strong>, apenas se você aceitar os cookies de medição: páginas visitadas, tipo de
          dispositivo, cidade aproximada e cliques nos botões de contato.
        </li>
      </ul>
      <p>Este site não possui formulários e não coleta dados de cadastro.</p>

      <h2>3. Para que os dados são usados</h2>
      <ul>
        <li>Responder ao seu contato e analisar a sua situação jurídica (procedimentos preliminares a um contrato, art. 7º, V, da LGPD).</li>
        <li>Prestar os serviços advocatícios contratados e cumprir obrigações legais e regulatórias (art. 7º, II, V e VI).</li>
        <li>Medir o uso do site para melhorá-lo, somente com o seu consentimento (art. 7º, I).</li>
      </ul>

      <h2>4. Sigilo profissional</h2>
      <p>
        Tudo o que você relatar sobre o seu caso é protegido pelo sigilo profissional previsto no Estatuto da Advocacia (Lei
        8.906/1994) e no Código de Ética e Disciplina da OAB, além da LGPD.
      </p>

      <h2>5. Compartilhamento</h2>
      <p>
        Os dados não são vendidos nem cedidos. Podem ser compartilhados apenas com o Poder Judiciário e órgãos públicos quando
        necessário à defesa dos seus interesses, e com fornecedores de tecnologia que viabilizam a comunicação (como o WhatsApp) e,
        se você aceitar, a medição do site (Google Analytics e Meta).
      </p>

      <h2>6. Cookies</h2>
      <p>
        O site só usa cookies de medição se você aceitar no aviso exibido na primeira visita. Você pode mudar de ideia a qualquer
        momento apagando os dados do site no seu navegador.
      </p>

      <h2>7. Por quanto tempo os dados são guardados</h2>
      <p>
        Pelo tempo necessário para atender ao seu contato e, havendo contratação, pelo prazo exigido para a prestação dos serviços,
        o cumprimento de obrigações legais e o exercício de direitos em processos.
      </p>

      <h2>8. Seus direitos</h2>
      <p>
        Você pode pedir a confirmação do tratamento, o acesso, a correção, a anonimização, a portabilidade ou a eliminação dos seus
        dados, além de informações sobre o compartilhamento e a revogação do consentimento (art. 18 da LGPD), pelo e-mail{" "}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>. Você também pode reclamar à Autoridade Nacional de
        Proteção de Dados (ANPD).
      </p>

      <h2>9. Alterações</h2>
      <p>Esta política pode ser atualizada. A data da última atualização fica sempre indicada no topo da página.</p>
    </LegalPage>
  );
}
