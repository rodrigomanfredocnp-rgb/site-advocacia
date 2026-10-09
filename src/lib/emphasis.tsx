import { Fragment, type ReactNode } from "react";

/**
 * Converte a marcação leve dos textos de conteúdo em elementos:
 *   **texto** → <strong>   *texto* → <em>
 * Mantém o conteúdo como dados simples, sem HTML nos arquivos de landing.
 */
export function emphasis(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Remove a marcação para usos em texto puro (meta tags, JSON-LD, aria-label). */
export function plain(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1");
}
