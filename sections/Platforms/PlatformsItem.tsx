import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/** @title Item Plataform */
export interface Platform {
  url?: string;
  title?: string;
  image?: ImageWidget;
  }

export interface Props {
  platform?: Platform;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function PlatformsItem({ platform }: Props) {
  const {
    url = "/",
    title = "Deco",
    image = DEFAULT_IMAGE,
  } = platform || {};


  return (
      <a href={`${url}`} class="border-0 overflow-hidden rounded-2xl flex-shrink-0 w-full" >
        <Image
          width={300}
          height={182}
          class="w-fill h-44 object-cover rounded-2xl"
          sizes="(max-width: 300px) 100vw, 30vw"
          src={image}
          alt={title}
          decoding="async"
          loading="lazy"
        />
      </a>
  );
}
