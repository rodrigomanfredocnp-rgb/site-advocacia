import type { ReactNode } from "react";
import { emphasis } from "@/lib/emphasis";

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

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`flex flex-col gap-5 ${centered ? "items-center text-center" : "items-start"} ${className}`}>
      {eyebrow && <p className={`eyebrow ${centered ? "eyebrow-center" : ""}`}>{eyebrow}</p>}
      <h2 id={id} className="em-gold max-w-[22ch] text-display-lg">
        {emphasis(title)}
      </h2>
      {intro && <p className="max-w-[58ch] text-[1.0625rem] text-text-muted [.on-ink_&]:text-text-inverse-muted">{intro}</p>}
    </div>
  );
}
