import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import type { Course } from "../sections/CourseContent/CourseSpot.tsx";
import CourseSpot from "../sections/CourseContent/CourseSpot.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  title?: string;
  cards?: Course[];
}

function CarouselSpot({ title, cards = [] }: Props) {
  const id = useId();

  return (
    <div id={id} class="relative p-10 overflow-hidden">
      <h2 class="text-xl font-semibold opacity-60 text-white border-b pb-3 w-full mb-6 border-opacity-10 border-white">
        {title}
      </h2>
      <Slider class="carousel carousel-center w-screen gap-6 text-secondary-content text-sm/4">
        {cards.map((card, index) => (
          <Slider.Item index={index} class="carousel-item">
            <CourseSpot course={card} />
          </Slider.Item>
        ))}
      </Slider>

      <Slider.PrevButton
        class="no-animation absolute left-2 top-1/2 btn btn-circle btn-outline disabled:invisible"
        disabled
      >
        <Icon id="chevron-right" class="rotate-180" />
      </Slider.PrevButton>

      <Slider.NextButton
        class="no-animation absolute right-2 top-1/2 btn btn-circle btn-outline disabled:invisible"
        disabled={cards.length < 6}
      >
        <Icon id="chevron-right" />
      </Slider.NextButton>

      <Slider.JS rootId={id} />
    </div>
  );
}

export default CarouselSpot;
