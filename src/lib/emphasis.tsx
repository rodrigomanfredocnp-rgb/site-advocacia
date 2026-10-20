import { Fragment, type ReactNode } from "react";

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
