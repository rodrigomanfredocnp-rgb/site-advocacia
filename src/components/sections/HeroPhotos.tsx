import { ViewTransition } from "react";
import { Photo, topicPhoto } from "@/components/ui/Photo";
import type { Landing } from "@/content/types";

/** Foto do assunto no topo da página (a mesma do card, que "voa" até aqui na troca de página). */
export function TopicHeroPhoto({ landing }: { landing: Landing }) {
  if (!landing.photo) return null;
  return (
    <figure className="photo-in mx-auto w-full max-w-[34rem] lg:mr-0">
      <ViewTransition name={`foto-${landing.slug}`} share="morph" default="none">
        <Photo
          name={topicPhoto(landing.slug)}
          alt={landing.photo.alt}
          focus={landing.photo.focus}
          sizes="(min-width: 1024px) 34rem, 92vw"
          priority
          className="aspect-[16/10] lg:aspect-[4/3.4]"
        />
      </ViewTransition>
    </figure>
  );
}

/** Foto do topo das páginas institucionais (Sobre, Atendimento). `portrait` = retrato do advogado. */
export function PageHeroPhoto({
  name,
  alt,
  focus,
  portrait = false,
}: {
  name: string;
  alt: string;
  focus?: string;
  portrait?: boolean;
}) {
  return (
    <figure className={`photo-in mx-auto w-full lg:mr-0 ${portrait ? "max-w-[20rem] lg:max-w-[26rem]" : "max-w-[34rem]"}`}>
      <Photo
        name={name}
        alt={alt}
        focus={focus}
        sizes={portrait ? "(min-width: 1024px) 26rem, 20rem" : "(min-width: 1024px) 34rem, 92vw"}
        priority
        className={portrait ? "aspect-[4/5]" : "aspect-[16/10] lg:aspect-[4/3.4]"}
      />
    </figure>
  );
}
