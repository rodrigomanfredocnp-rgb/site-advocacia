import { Fragment, type CSSProperties, type ReactNode } from "react";

/**
 * Marcação leve dos textos de conteúdo:
 *   **texto** → <strong>   *texto* → <em> (dourado, sem itálico)
 * Mantém o conteúdo como dados simples, sem HTML nos arquivos de landing.
 */
export function emphasis(text: string): ReactNode {
  return segments(text).map((s, i) =>
    s.kind === "strong" ? (
      <strong key={i}>{s.text}</strong>
    ) : s.kind === "em" ? (
      <em key={i}>{s.text}</em>
    ) : (
      <Fragment key={i}>{s.text}</Fragment>
    ),
  );
}

/** Título com a pontuação final em dourado (o "ponto" da marca, como no imk.ca). */
export function headline(text: string): ReactNode {
  const { body, mark } = splitFinalMark(text);
  return (
    <>
      {emphasis(body)}
      {mark && <span className="dot">{mark}</span>}
    </>
  );
}

/**
 * Título de abertura animado: cada palavra sobe de dentro de uma máscara, em sequência.
 * O texto inteiro vai no aria-label do título; as palavras animadas ficam ocultas para leitores de tela.
 */
export function AnimatedHeadline({ text }: { text: string }) {
  const { body, mark } = splitFinalMark(text);
  // Palavras com a marcação de cada trecho; `space` diz se havia espaço antes (preserva "*INSS*," sem espaço extra).
  const words: { word: string; kind: Segment["kind"]; space: boolean }[] = [];
  let pendingSpace = false;
  for (const s of segments(body)) {
    for (const piece of s.text.split(/(\s+)/)) {
      if (!piece) continue;
      if (/^\s+$/.test(piece)) {
        pendingSpace = true;
        continue;
      }
      words.push({ word: piece, kind: s.kind, space: pendingSpace && words.length > 0 });
      pendingSpace = false;
    }
  }

  return (
    <span aria-hidden="true">
      {words.map(({ word, kind, space }, i) => {
        const last = i === words.length - 1;
        const content = kind === "em" ? <em>{word}</em> : kind === "strong" ? <strong>{word}</strong> : word;
        return (
          <Fragment key={i}>
            {space && " "}
            <span className="word-mask">
              <span style={{ "--w": i } as CSSProperties}>
                {content}
                {last && mark && <span className="dot">{mark}</span>}
              </span>
            </span>
          </Fragment>
        );
      })}
    </span>
  );
}

/** Texto puro, sem a marcação, para aria-label e metadados. */
export function plain(text: string) {
  return text.replace(/\*\*([^*]+)\*\*|\*([^*]+)\*/g, "$1$2");
}

type Segment = { text: string; kind: "text" | "em" | "strong" };

function segments(text: string): Segment[] {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("**") && part.endsWith("**")
        ? { text: part.slice(2, -2), kind: "strong" }
        : part.startsWith("*") && part.endsWith("*")
          ? { text: part.slice(1, -1), kind: "em" }
          : { text: part, kind: "text" },
    );
}

function splitFinalMark(text: string) {
  const match = text.match(/^([\s\S]*?)([.?!])$/);
  return match ? { body: match[1], mark: match[2] } : { body: text, mark: "" };
}
