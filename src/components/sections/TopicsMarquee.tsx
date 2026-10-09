import Link from "next/link";
import { landings } from "@/content/landings";

/** Faixa dourada com os temas atendidos, rolando devagar (para quando há preferência por menos movimento). */
export function TopicsMarquee() {
  const items = landings.map((l) => ({ slug: l.slug, topic: l.topic }));
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item.slug} className="flex items-center">
          <Link
            href={`/${item.slug}`}
            tabIndex={hidden ? -1 : undefined}
            className="px-7 font-caps text-[0.74rem] tracking-[0.2em] whitespace-nowrap text-ink transition-opacity hover:opacity-70"
          >
            {item.topic.toUpperCase()}
          </Link>
          <span className="size-1.5 rotate-45 bg-ink/70" aria-hidden />
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      aria-label="Temas atendidos"
      className="group overflow-hidden border-y border-[#a8812f] bg-[linear-gradient(180deg,#e9cc77_0%,#d4ad53_50%,#c39a43_100%)] py-4"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap">
        {row(false)}
        <div className="flex motion-reduce:hidden">{row(true)}</div>
      </div>
    </nav>
  );
}
