import type { ReactNode } from "react";
import { emphasis } from "@/lib/emphasis";

type Tone = "white" | "mist" | "ink";

const TONES: Record<Tone, string> = {
  white: "bg-white text-text",
  mist: "bg-mist text-text",
  ink: "on-ink bg-ink text-text-inverse",
};

export function Section({
  id,
  tone = "white",
  className = "",
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${TONES[tone]} py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

/** Cabeçalho de seção: rótulo dourado, título e texto de apoio opcional à direita. */
export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end ${className}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="accent mt-5 max-w-[20ch] text-display-lg">
          {emphasis(title)}
        </h2>
      </div>
      {intro && <p className="max-w-[48ch] text-text-muted lg:justify-self-end [.on-ink_&]:text-text-inverse-muted">{intro}</p>}
    </div>
  );
}
