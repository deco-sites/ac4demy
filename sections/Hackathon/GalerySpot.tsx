import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";
import type { Course } from "site/sections/CourseContent/CourseSpot.tsx";
import CourseSpot from "site/sections/CourseContent/CourseSpot.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { useSection } from "deco/hooks/useSection.ts";

interface Category {
  label: string;
  category: "Ver tudo" | "Desenvolvimento" | "Social Media" | "UI/UX Design" | "Marketing" | "Operações";
}

export interface Props {
  title?: string;
  cards?: Course[];
  categoriesMenu?: Category[];
  /**@hidden true */
  activeCategory?: string;
}

function CarouselSpot({ title, cards = [], activeCategory = "Ver tudo", categoriesMenu }: Props) {
  const id = useId();

  const filteredCards = activeCategory === "Ver tudo" ? cards : cards.filter(card => card.category === activeCategory);

  console.log(activeCategory)
  return (
    <div id={id} class="relative p-10 overflow-hidden">
      <h2 class="text-xl font-semibold opacity-60 text-white border-b pb-3 w-full mb-6 border-opacity-10 border-white">
        {title}
      </h2>
      <ul class={`flex items-center gap-10 mb-6`}>
        {categoriesMenu?.map(({ label, category }) => (
          <li>
            <button
              class={`text-base text-white duration-300 ${activeCategory === category ? "border-b border-primary font-semibold text-opacity-100" : "font-normal text-opacity-60"}`}
              hx-get={useSection({props: {activeCategory: category}})}
              hx-swap="outerHTML"
              hx-target="closest section"
            >
              {label}
            </button>
          </li>
        ))}
        <li></li>
      </ul>
      <div class="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 max-w-[1075px] 2xl:max-w-[1400px]">
          {filteredCards.map((card) => (
              <CourseSpot course={card} />
          ))}
      </div>
    </div>
  );
}

export default CarouselSpot;
