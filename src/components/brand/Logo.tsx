import { site } from "@/content/site";
import {
  FULL_LOGO_VIEWBOX,
  NAME_PATH,
  NAME_VIEWBOX,
  SUBLINE_PATH,
  SUBLINE_RULES_PATH,
  SYMBOL_PATHS,
  SYMBOL_VIEWBOX,
} from "./paths";

/**
 * `gold` usa o degradê da marca (definido uma vez em <BrandDefs />).
 * `current` herda a cor do texto, para versões brancas ou pretas.
 */
type Tone = "gold" | "current";

const fillFor = (tone: Tone) => (tone === "gold" ? "url(#jc-gold)" : "currentColor");

type Props = { tone?: Tone; className?: string; title?: string };

/** Degradê dourado compartilhado. Renderizar uma vez no layout raiz. */
export function BrandDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="jc-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3dc86" />
          <stop offset="0.38" stopColor="#d8b257" />
          <stop offset="0.62" stopColor="#b38a35" />
          <stop offset="1" stopColor="#e9c96a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Monograma J+C na moldura dupla. */
export function LogoSymbol({ tone = "gold", className, title }: Props) {
  return (
    <svg
      viewBox={SYMBOL_VIEWBOX}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g fill={fillFor(tone)} fillRule="evenodd">
        {SYMBOL_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}

/** "JHONNY CARDOSO" nas capitais da marca. */
export function LogoName({ tone = "gold", className }: Props) {
  return (
    <svg viewBox={NAME_VIEWBOX} className={className} aria-hidden="true">
      <path d={NAME_PATH} fill={fillFor(tone)} fillRule="evenodd" />
    </svg>
  );
}

/** Logo completa (símbolo + nome + subtítulo), igual ao arquivo original. */
export function LogoFull({ tone = "gold", className, title = `Jhonny Cardoso, Advogado, ${site.lawyer.oab}` }: Props) {
  return (
    <svg viewBox={FULL_LOGO_VIEWBOX} className={className} role="img" aria-label={title}>
      <g fill={fillFor(tone)} fillRule="evenodd">
        {SYMBOL_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
        <path d={NAME_PATH} />
        <path d={SUBLINE_PATH} />
        <path d={SUBLINE_RULES_PATH} />
      </g>
    </svg>
  );
}

/** Assinatura horizontal do cabeçalho (fundo escuro): símbolo, nome e OAB em dourado. */
export function LogoLockup({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className ?? ""}`}>
      <LogoSymbol className="h-10 w-auto shrink-0 sm:h-12" />
      <span className="flex flex-col gap-[6px]">
        <LogoName className="h-[13px] w-auto sm:h-[17px]" />
        <span className="text-[0.54rem] leading-none font-semibold tracking-[0.2em] text-gold sm:text-[0.64rem]">
          ADVOGADO · {site.lawyer.oab}
        </span>
      </span>
    </span>
  );
}
