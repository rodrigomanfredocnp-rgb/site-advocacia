import type { ReactNode } from "react";

type Tone = "paper" | "paper-2" | "ink";

const TONES: Record<Tone, string> = {
  paper: "bg-paper text-text",
  "paper-2": "bg-paper-2 text-text",
  ink: "on-ink ink-texture text-text-inverse",
};

export function Section({
  id,
  tone = "paper",
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
