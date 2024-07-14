import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { ComponentChildren, Fragment } from "preact";
import { useId } from "../../sdk/useId.ts";

/** @titleBy title */
export interface Course {
  url?: string;
  title?: string;
  instructor?: string;
  excerpt?: string;
  image?: ImageWidget;
  imageInstructor?: ImageWidget;
  date?: string;
  duration?: string;
  price?: string;
  difficulty?: "Iniciante" | "Intermediário" | "Avançado";
  /** @format color */
  priceBackgroundColor?: string;
  category?: "Desenvolvimento" | "Social Media" | "UI/UX Design" | "Marketing" | "Operações"
}
/** @titleBy title */
export interface Props {
  course?: Course;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

const DEFAULT_IMAGE_INSTRUCTOR = "https://i.imgur.com/guCK40i.png";

function Container({ children }: { children: ComponentChildren }) {
  return (
    <div class="container lg:mx-auto lg:py-14 mx-2 py-12 text-sm">
      <div class="space-y-8">{children}</div>
    </div>
  );
}

export default function CourseSpot({ course }: Props) {
  const {
    url = "/",
    title = "Montando um blog CMS completo em Webflow",
    instructor = "Por: João Rocha",
    excerpt = "Configurar o seu primeiro setup em deco.cx",
    image = DEFAULT_IMAGE,
    imageInstructor = DEFAULT_IMAGE_INSTRUCTOR,
    date = "01 Apr 2024",
    duration = "2 hours",
    price = "R$49,90",
    difficulty = "Iniciante",
    priceBackgroundColor = "#02CAF6",
  } = course || {};

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante":
        return "text-[#01D859]"; // Verde
      case "Intermediário":
        return "text-[#AB89F9]"; // Lilás
      case "Avançado":
        return "text-[#E61755]"; // Vermelho
      default:
        return "text-[#A4A4A4]"; // Cinza padrão
    }
  };

  const difficultyColor = getDifficultyColor(difficulty);

  const ContainerComponent = course ? Container : Fragment;

  return (
    <div class="gap-8 grid grid-cols-[repeat(auto-fill,_minmax(200px,_240px))] ">
      <a
        href={`${url}`}
        class="border-0 overflow-hidden rounded-2xl p-3 flex-shrink-0 w-full bg-[#FFFFFF14] min-h-[340px] "
      >
        <Image
          width={380}
          height={200}
          class="w-fill h-36 object-cover rounded-xl"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={image}
          alt={title}
          decoding="async"
          loading="lazy"
        />
        <div class="space-y-2">
          <div class={`font-bold mt-3 text-sm ${difficultyColor}`}>
            {difficulty}
          </div>
          <h3 class="text-lg font-bold text-white min-h-[84px]">{title}</h3>
          <div class="flex items-center">
            <Image
              width={32}
              height={32}
              class="w-fill object-cover rounded-2xl mr-2"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={imageInstructor}
              alt={instructor}
              decoding="async"
              loading="lazy"
            />
            <p class="text-sm text-[#A4A4A4]">{instructor}</p>
          </div>
          <div class="flex items-center justify-between !mt-4">
            <div
              class="text-black font-bold py-2 px-4 rounded-xl text-sm flex items-center gap-2 lg:hover:bg-blue-600"
              style={{ backgroundColor: priceBackgroundColor }}
            >
              <svg
                class="w-4 h-4 "
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 17"
              >
                <path
                  d="M11.25 3.03125L10.4062 4.28125C10.6562 4.4375 10.9375 4.65625 11.2812 4.875C13.1875 6.3125 16 9.09375 16 13.5V15V16.5H14.5H1.5H0V15V13.5C0 9.09375 2.78125 6.3125 4.6875 4.875C5.03125 4.65625 5.3125 4.4375 5.59375 4.28125L4.71875 3.03125L4.03125 2L3 0.5H4.8125H11.1562H13L11.9375 2L11.25 3.03125ZM14.5 15V13.5C14.5 9.15625 11.2812 6.625 9.59375 5.53125L9.15625 5.25H6.8125L6.375 5.53125C4.6875 6.625 1.5 9.15625 1.5 13.5V15H14.5ZM9.15625 3.4375L10.125 2H5.84375L6.8125 3.4375L7.0625 3.75H8.9375L9.15625 3.4375ZM8.625 7.5H8.59375V7.71875C8.8125 7.75 9.125 7.8125 9.28125 7.84375L9.875 8L9.5625 9.21875L8.9375 9.0625C8.8125 9.03125 8.40625 8.9375 8.28125 8.9375C7.875 8.875 7.5625 8.90625 7.375 9C7.1875 9.09375 7.125 9.1875 7.125 9.25C7.09375 9.375 7.125 9.40625 7.125 9.40625C7.125 9.4375 7.15625 9.46875 7.21875 9.53125C7.4375 9.65625 7.71875 9.75 8.15625 9.875H8.1875C8.5625 10 9.0625 10.1562 9.46875 10.4375C9.65625 10.5938 9.875 10.7812 9.96875 11.0625C10.0938 11.3438 10.125 11.6562 10.0625 12C9.96875 12.5938 9.59375 13 9.09375 13.1875C8.9375 13.25 8.78125 13.3125 8.59375 13.3438V13.5V14.125H7.34375V13.5V13.3125C7.0625 13.25 6.65625 13.125 6.4375 13.0312C6.375 13 6.3125 13 6.28125 13L5.6875 12.7812L6.09375 11.5938L6.6875 11.8125C6.75 11.8125 6.8125 11.8438 6.875 11.875C7.1875 11.9688 7.5 12.0938 7.6875 12.125C8.09375 12.1875 8.40625 12.125 8.59375 12.0625C8.78125 11.9688 8.84375 11.875 8.84375 11.7812C8.875 11.6562 8.84375 11.5938 8.84375 11.5625C8.84375 11.5312 8.8125 11.5 8.71875 11.4375C8.53125 11.3125 8.25 11.2188 7.8125 11.0625H7.75C7.375 10.9375 6.90625 10.8125 6.53125 10.5625C6.34375 10.4062 6.125 10.2188 6 9.9375C5.875 9.65625 5.84375 9.34375 5.875 9.03125C6 8.46875 6.40625 8.0625 6.875 7.875C7.03125 7.78125 7.1875 7.75 7.375 7.6875V7.5V6.875H8.625V7.5Z"
                  fill="currentColor"
                />
              </svg>
              {price}
            </div>
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.25 0.5H11V1.25V8.75V9.5H9.5V8.75V3.0625L2.53125 10.0312L2 10.5625L0.9375 9.5L1.46875 8.96875L8.4375 2H2.75H2V0.5H2.75H10.25Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}
