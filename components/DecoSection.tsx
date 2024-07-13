import { useId } from "../sdk/useId.ts";
import type { Course } from "../sections/CourseContent/CourseSpot.tsx";
import CourseSpot from "../sections/CourseContent/CourseSpot.tsx";

export interface Props {
  title?: {
    text?: string;
    textHighlight?: string;
  };
  subtitle?: string;
  cards?: Course[];
}

function CarouselSpot({ title, subtitle, cards = [] }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="relative p-12 rounded-2xl mx-10 my-8 overflow-hidden max-w-[1240px] 2xl:mx-auto bg-[#02F67C14]"
    >
      <div class="flex w-full mb-6">
        <div class="flex flex-col flex-1 mb-6">
          <h2 class="text-4xl font-semibold  text-white pb-2 w-full">
            {title?.text}{" "}
            <span class="text-[#02F67C]">{title?.textHighlight}</span>
          </h2>
          <p class="text-lg text-white opacity-60">{subtitle}</p>
        </div>
        <div class="deco-logo w-1/6 flex justify-end">
          <svg
            width="179"
            height="76"
            viewBox="0 0 179 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_821)">
              <path
                d="M110.282 74.8484C101.741 74.8484 96.2306 72.1189 92.3735 69.1164C91.5469 69.6622 90.9959 70.2083 89.8938 70.7541C82.4548 74.5755 74.1892 74.8484 71.1585 74.8484C59.0358 74.8484 52.699 69.6622 49.6683 65.2952C49.3928 65.0221 49.1174 64.4763 48.8417 64.2034C43.3315 70.7541 36.168 74.8484 25.4229 74.8484C16.0552 74.8484 8.34072 71.3001 3.93247 65.0221C-0.751333 58.1984 -1.30237 48.9179 2.55486 39.0918C7.78971 25.9901 19.6369 18.0745 34.2394 18.0745C34.5149 18.0745 34.5149 18.0745 34.7904 18.0745C34.7904 17.8015 34.7904 17.2556 34.7904 16.9827C34.5149 12.3425 37.5456 8.2482 41.9539 6.88345L54.903 1.97031C56.2806 1.42441 57.6582 1.15146 59.0358 1.15146C63.1686 1.15146 67.026 3.33508 68.9545 7.1564L74.4649 18.3474C76.118 18.0745 77.7711 18.0745 79.4242 18.0745C87.4141 18.0745 93.7511 20.804 97.8837 25.7172C104.221 20.804 112.211 18.0745 121.027 18.0745C125.711 18.0745 130.119 18.8933 133.425 20.531C134.528 21.0769 135.63 21.6228 136.456 22.4417C141.416 19.7122 147.201 18.0745 153.538 18.0745C162.63 18.0745 170.345 21.6228 174.753 27.9007C179.437 34.4517 180.263 43.459 177.233 52.4664C172.273 66.114 159.6 74.8484 144.722 74.8484C138.385 74.8484 132.599 73.2107 128.191 69.9354C127.364 70.7541 126.262 71.5731 125.16 71.846C121.027 73.7566 115.792 74.5755 110.558 74.8484H110.282Z"
                fill="#02F67C"
              />
              <path
                d="M146.375 56.8336C140.313 56.8336 139.487 51.1016 141.14 45.3696C142.518 40.7295 146.099 36.0893 151.334 36.0893C157.671 36.0893 158.222 42.3672 156.293 47.8263C155.191 52.4664 151.61 56.8336 146.375 56.8336ZM144.722 65.2952C155.191 65.2952 164.284 59.5632 168.141 49.191C171.998 38.2731 167.59 27.6278 153.538 27.6278C142.242 27.6278 133.426 34.7245 130.12 44.0051C126.538 54.3772 130.395 65.2952 144.722 65.2952ZM110.282 65.2952C114.415 65.2952 118.548 64.4762 121.578 63.1115C122.681 60.3821 122.681 57.6526 121.854 54.923C119.925 55.742 116.895 56.5607 114.139 56.5607C106.149 56.5607 105.598 50.8287 107.251 45.9157C109.18 40.7295 113.864 36.3622 121.303 36.3622C123.231 36.3622 125.16 36.6354 126.262 37.4541C128.191 34.7245 129.568 31.995 129.844 29.2657C128.191 28.4467 125.16 27.9009 121.303 27.9009C108.905 27.9009 99.2615 34.9975 95.9554 44.8238C92.3735 53.8312 94.8533 65.2952 110.282 65.2952ZM67.8526 42.9132C70.0566 38.2731 73.3628 35.5435 77.4956 35.5435C81.3529 35.5435 81.9039 37.727 81.3529 39.3647C80.5263 41.5484 77.4956 42.9132 67.8526 42.9132ZM71.4342 65.2952C75.567 65.2952 81.0775 64.4762 85.7612 62.2927C86.5876 59.8361 86.5876 57.1065 85.4857 54.3772C82.4551 55.7418 78.3223 56.8336 74.4649 56.8336C68.9547 56.8336 65.9238 54.923 65.9238 50.5558C81.0775 50.8287 89.0674 48.0992 91.8226 41.5484C94.3023 34.7245 89.894 27.9009 79.4244 27.9009C68.1281 27.9009 59.8625 35.8164 56.5563 44.5509C53.5256 53.5583 55.4542 65.2952 71.4342 65.2952ZM25.6983 65.2952C36.168 65.2952 42.2296 60.6551 49.1174 45.9157C52.9747 37.9999 56.0054 30.0844 59.8625 22.1688L64.2708 23.5337C65.3729 23.8066 66.1995 23.2605 65.6484 22.1688L60.4137 11.2507C59.587 10.7048 58.7606 10.7048 58.2094 10.7048L44.9846 15.618C43.8827 15.8909 43.8827 16.9827 44.9846 17.2557L49.1174 18.8934C45.8112 26.263 41.9539 37.1812 38.6477 44.0051C35.0661 51.6477 33.1373 57.1065 27.0759 57.1065C21.0147 57.1065 19.9126 52.4664 22.3922 45.6427C25.4229 37.727 30.3823 35.5435 36.168 37.1812C37.8213 34.9975 38.9232 31.7221 39.4744 28.7196C37.8213 28.1738 35.8925 28.1738 34.2394 28.1738C24.8719 28.1738 15.7798 32.814 11.9226 42.9132C6.96328 55.196 11.6471 65.2952 25.6983 65.2952Z"
                fill="#113032"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_821">
                <rect width="179" height="76" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div class="w-full flex flex-col items-center gap-6 md:flex-row justify-between">
        {cards.map((card) => <CourseSpot course={card} />)}
      </div>
    </div>
  );
}

export default CarouselSpot;
