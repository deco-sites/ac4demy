import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Slider from "../../components/ui/Slider.tsx";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;

  /** @description mobile otimized image */
  mobile: ImageWidget;

  /** @description Image's alt text */
  alt: string;

  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: string;
    /** @description labels */
    labels: {
      /** @description Price of course */
      price: string;
      /** @description Course level */
      classification: "Iniciante" | "Intermediário" | "Avançado";
      highlight?: string;
    };
  };

  instructor?: {
    /** @description Instructor name */
    name: string;
    /** @description Instructor image, recommended 32x32*/
    image: ImageWidget;
    alt?: string;
  };
}

export interface Props {
  images?: Banner[];

  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;

  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;

  /**
   * @title Show dots
   * @description Show dots to navigate between images
   */
  dots?: boolean;

  /**
   * @title Show arrows
   * @description Show arrows to navigate between images
   */
  arrows?: boolean;
}

function BannerItem(
  { image, lcp }: { image: Banner; lcp?: boolean },
) {
  const DEFAULT_PROPS = {
    desktop: {
      src: "",
      alt: "alt",
    },
    mobile: {
      src: "",
      alt: "alt",
    },
    action: {
      href: "#",
      title: "Title",
      labels: {
        price: "Price",
        classification: "Iniciante",
        highlight: "Highlight",
      },
    },
    instructor: {
      name: "Instructor",
      image: "",
      alt: "Instructor",
    },
  };

  const {
    alt,
    mobile,
    desktop,
    action,
    instructor,
  } = image ?? DEFAULT_PROPS;

  return (
    <a
      href={action?.href ?? "#"}
      aria-label={action?.title ?? ""}
      class="relative block overflow-y-hidden w-full"
    >
      {action && (
        <div
          class={clx(
            "absolute h-full w-full top-0 left-0 z-10",
            "flex flex-col justify-between items-center",
            "py-6 sm:px-0",
            "sm:left-10 sm:items-start sm:max-w-lg",
          )}
        >
          <div>
            {action.labels.highlight && (
              <span class="flex flex-row items-center text-sm text-primary font-semibold bg-black px-4 py-1.5 rounded-xl">
                {action.labels.highlight}
              </span>
            )}
          </div>
          <div class="flex flex-col items-start gap-2">
            <div class="flex flex-row justify-center gap-3">
              <span class="flex flex-row justify-center items-center gap-x-2.5 text-sm text-black font-semibold px-4 py-1.5 bg-primary rounded-xl">
                <Icon id="sack_dollar" width={18} height={18} />
                {action.labels.price}
              </span>
              <span class="flex flex-row items-center text-sm text-black font-semibold bg-white px-4 py-1.5 rounded-xl">
                {action.labels.classification}
              </span>
            </div>
            <h1 class="text-3xl font-semibold base-content">
              {action.title}
            </h1>
          </div>
        </div>
      )}

      {instructor && (
        <div
          class={clx(
            "absolute bottom-0 right-0 z-10",
            "flex items-center gap-2 p-4",
            "font-medium ",
            "sm:bottom-10 sm:right-10 sm:max-w-lg",
          )}
        >
          <Image
            width={32}
            height={32}
            class="w-fill object-cover rounded-2xl mr-2"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={instructor.image}
            alt={instructor.alt || ""}
          />
          <span class="text-gray-300 font-semibold text-sm">
            {instructor.name}
          </span>
        </div>
      )}

      <Picture preload={lcp}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={412}
          height={660}
        />
        <Source
          media="(min-width: 768px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={1169}
          height={418}
        />
        <img
          class="object-cover w-full brightness-50 h-[calc((80vw-280px)*(418/1169))] min-h-[300px]"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>
    </a>
  );
}

function CarrouselMainBanners(
  { images = [], preload, interval, dots, arrows }: Props,
) {
  const id = useId();

  return (
    <div
      id={id}
      class={clx(
        "grid",
        "grid-rows-[1fr_32px_1fr_64px]",
        "grid-cols-[32px_1fr_32px] min-h-[660px]",
        "sm:grid-cols-[112px_1fr_112px] sm:min-h-min",
      )}
    >
      <div class="col-span-full row-span-full">
        <Slider class="carousel carousel-center w-full gap-6">
          {images.map((image, index) => (
            <Slider.Item index={index} class="carousel-item w-full">
              <BannerItem image={image} lcp={index === 0 && preload} />
            </Slider.Item>
          ))}
        </Slider>
      </div>

      {arrows && (
        <div class="hidden sm:flex items-center justify-center z-10 col-start-1 row-start-2">
          <Slider.PrevButton
            class="btn btn-neutral btn-outline btn-circle no-animation btn-sm bg-base-200"
            disabled={false}
          >
            <Icon id="chevron-right" class="rotate-180" />
          </Slider.PrevButton>
        </div>
      )}
      {arrows && (
        <div class="hidden sm:flex items-center justify-center z-10 col-start-3 row-start-2">
          <Slider.NextButton
            class="btn btn-neutral btn-outline btn-circle no-animation btn-sm bg-base-200"
            disabled={false}
          >
            <Icon id="chevron-right" />
          </Slider.NextButton>
        </div>
      )}

      {dots && (
        <ul
          class={clx(
            "col-span-full row-start-4 z-10",
            "carousel justify-center gap-3",
          )}
        >
          {images.map((_, index) => (
            <li class="carousel-item">
              <Slider.Dot
                index={index}
                class={clx(
                  "bg-black opacity-20 h-3 w-3 no-animation rounded-full",
                  "disabled:w-8 disabled:bg-base-100 disabled:opacity-100 transition-[width]",
                )}
              >
              </Slider.Dot>
            </li>
          ))}
        </ul>
      )}

      <Slider.JS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default CarrouselMainBanners;
