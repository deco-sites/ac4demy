import type { HTMLWidget } from "apps/admin/widgets.ts";
import CourseSpot from "../CourseContent/CourseSpot.tsx";
import type { Course as CourseCard } from "../CourseContent/CourseSpot.tsx";

interface Tabs {
  title: string;
  content: HTMLWidget;
}

export interface VideoContent {
  videoUrl: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface Course {
  /** @description Course category */
  category: "Curso" | "Workshop" | "Live";
  /** @description Course title */
  title: string;
  /** @description Course video details */
  videoDetails: VideoContent;

  /** @description tabs */
  tabs?: Tabs[];
}

export interface Navigation {
  /** @description Navigation title */
  titleNav: string;

  /** @description Navigation items */
  items: {
    title: string;
    duration: string;
    url: string;
  }[];
}

export interface Props {
  course: Course;
  contentNavigation: Navigation;
  suggestionTitle: string;
  courseSuggestion: CourseCard;
}

export default function CoursePageContainer(props: Props) {
  const DEFAULT_PROPS = {
    course: {
      category: "Curso",
      title: "Aprendendo a configurar o setup com deco.cx",
      videoDetails: {
        videoUrl: {},
        width: 650,
        height: 402,
        alt: "Aprendendo a configurar o setup com deco.cx",
      },
    },
  };

  const {
    course: { category, title, videoDetails, tabs },
    contentNavigation: { titleNav, items },
    courseSuggestion: { CourseCard },
    suggestionTitle,
  } = { ...props };

  return (
    <div class="flex flex-col md:flex-row gap-16 p-10">
      <div class="w-3/5 mx-auto flex flex-col gap-4">
        <h3 class="text-xl font-semibold opacity-60 text-white  pb-3">
          {category}
        </h3>
        <h1 class="text-lg font-bold text-white">{title}</h1>
        <div class="w-[650px] h-[402px]">
          {
            /* <video
            class="max-w-full max-h-full object-cover"
            src={videoDetails.videoUrl}
            width={videoDetails.width}
            height={videoDetails.height}
            controls
            autoplay
          /> */
          }
        </div>
        {tabs && tabs.length > 0 && (
          <div role="tablist" class="tabs tabs-bordered">
            {tabs.map((tab, index) => (
              <>
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  class="tab text-lg font-bold text-white"
                  aria-label={tab.title}
                  defaultChecked={index === 0}
                />
                <div
                  role="tabpanel"
                  class="tab-content p-10"
                  dangerouslySetInnerHTML={{ __html: tab.content }}
                />
              </>
            ))}
          </div>
        )}
      </div>
      <div class="w-2/5 flex flex-col items-start gap-4 mt-16">
        <h2 class="text-lg font-bold text-white">{titleNav}</h2>
        {items &&
          (
            <ul class="flex flex-col gap-4 w-full mb-16">
              {items.map((item) => (
                <a href={item.url} title={item.title}>
                  <li class="flex flex-row justify-between bg-gray-600 rounded-lg p-4">
                    <h3 class="font-semibold">{item.title}</h3>
                    <p class="opacity-60 text-white font-bold">
                      {item.duration}
                    </p>
                  </li>
                </a>
              ))}
            </ul>
          )}
        <h2 class="text-lg font-bold text-white">{suggestionTitle}</h2>
        <CourseSpot course={CourseCard} />
      </div>
    </div>
  );
}
