import {
  Baby,
  Clock,
  DoorOpen,
  Flame,
  Gavel,
  HandHeart,
  HardHat,
  Hourglass,
  IdCard,
  Landmark,
  PiggyBank,
  Receipt,
  ShieldAlert,
  Shuffle,
  Stethoscope,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/types";

export const TOPIC_ICONS: Record<IconName, LucideIcon> = {
  baby: Baby,
  receipt: Receipt,
  clock: Clock,
  "id-card": IdCard,
  "shield-alert": ShieldAlert,
  "hard-hat": HardHat,
  stethoscope: Stethoscope,
  gavel: Gavel,
  "door-open": DoorOpen,
  flame: Flame,
  "piggy-bank": PiggyBank,
  shuffle: Shuffle,
  wheat: Wheat,
  landmark: Landmark,
  hourglass: Hourglass,
  "hand-heart": HandHeart,
};

type SvgProps = { className?: string };

/* Ícones de marcas (o lucide não inclui logotipos). */

export function WhatsAppIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.24-.7.24-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.4h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.87.98 6.65 2.76a9.34 9.34 0 0 1 2.75 6.65c0 5.19-4.22 9.4-9.4 9.4m8-17.41A11.24 11.24 0 0 0 12.05.68C5.82.68.74 5.75.74 11.99c0 2 .52 3.94 1.51 5.65L.65 23.5l6-1.57a11.3 11.3 0 0 0 5.4 1.38h.01c6.23 0 11.31-5.07 11.31-11.31 0-3.02-1.18-5.86-3.32-8" />
    </svg>
  );
}

export function InstagramIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M13.5 21v-7.6h2.56l.38-2.97H13.5V8.53c0-.86.24-1.45 1.47-1.45h1.57V4.43a21 21 0 0 0-2.29-.12c-2.27 0-3.82 1.38-3.82 3.93v2.19H7.86v2.97h2.57V21h3.07Z" />
    </svg>
  );
}

/** Coluna jônica estilizada, tirada do monograma, usada como separador. */
export function ColumnGlyph({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 40" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1">
      <path d="M4 6.5h16M5.5 9.5c0-1.6 1.2-2.4 2.6-2.4M18.5 9.5c0-1.6-1.2-2.4-2.6-2.4" />
      <circle cx="5.6" cy="10" r="1.6" />
      <circle cx="18.4" cy="10" r="1.6" />
      <path d="M8 10.5v23M10.7 10.5v23M13.3 10.5v23M16 10.5v23M6 34h12M5 37h14" />
      <path d="M12 1.2c1.2 1.3 1.6 2.3 1.2 3.1-.3.6-.9.9-1.2.9s-.9-.3-1.2-.9c-.4-.8 0-1.8 1.2-3.1Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
