import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Fragment } from "preact";
import Image from "apps/website/components/Image.tsx";
import type { Course } from "../../sections/CourseContent/CourseSpot.tsx";
import CourseSpot from "../../sections/CourseContent/CourseSpot.tsx";
import { SectionProps } from "deco/types.ts";
import Breadcrumb from "../../components/MyBreadcrumb.tsx";

interface CourseDetails {
  title: string;
  text: string;
  difficulty: string;
}

interface CourseSection {
  title: string;
  duration: string;
}

interface CourseTabs {
  title: string;
  content: HTMLWidget;
}

interface CourseIncludes {
  item: string;
}

interface CourseContentProps {
  sections: CourseSection[];
}

interface CourseDetailsProps {
  details: CourseDetails[];
}

interface CourseIncludesProps {
  includes: CourseIncludes[];
}

interface CourseTabsProps {
  tabsCourse: CourseTabs[];
}

interface MainCourse {
  url?: string;
  title?: string;
  instructor?: string;
  excerpt?: string;
  description?: HTMLWidget;
  image?: ImageWidget;
  imageInstructor?: ImageWidget;
  date?: string;
  duration?: string;
  price?: string;
  difficulty?: string;
  sections?: CourseSection[];
  details?: CourseDetails[];
  courseIncludes?: CourseIncludes[];
  individualCourse?: Course;
  tabsCourse?: CourseTabs[];
}

interface Props {
  courses?: MainCourse[];
}

const DEFAULT_PROPS = {
  courses: [
    {
      url: "/course-1",
      title: "Aprendendo a configurar o setup com deco.cx",
      instructor: "Por: Rafael Oliveira",
      description:
        "<h2>O que você aprenderá:</h2><p>Configurar o seu primeiro setup em deco.cx</p>",
      excerpt: "Configurar o seu primeiro setup em deco.cx",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
      imageInstructor: "https://i.imgur.com/guCK40i.png",
      date: "01 Apr 2024",
      duration: "2 hours",
      price: "R$49,90",
      difficulty: "Iniciante",
      sections: [
        { title: "Introdução", duration: "05:45" },
        // Mais seções...
      ],
      details: [
        {
          title: "Detalhe 1",
          text: "Texto do detalhe 1",
          difficulty: "Iniciante",
        },
        // Mais detalhes...
      ],
      courseIncludes: [
        { item: "1,5 horas de conteúdo validado" },
        // Mais includes...
      ],
      individualCourse: {},
      tabsCourse: [
        {
          title: "Sobre o curso",
          content:
            "<h2>O que você aprenderá:</h2><p>Configurar o seu primeiro setup em deco.cx</p>",
        },
      ],
    },
  ],
};

export const loader = (props: Props, req: Request) => {
  const { courses } = { ...DEFAULT_PROPS, ...props };

  const courseItem = courses.find(({ url }) =>
    url && new URL(req.url).pathname.includes(url)
  );

  return { courseItem };
};

function addClassesToTitles(html: string) {
  return html.replace(/<(h[1-6])(.*?)>/g, '<$1$2 class="font-bold text-xl">');
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";
const DEFAULT_IMAGE_INSTRUCTOR = "https://i.imgur.com/guCK40i.png";

const CourseContent = ({ sections }: CourseContentProps) => (
  <div class="bg-[#1E1E1E] rounded-lg py-6 mb-4">
    <h3 class="text-xl font-bold text-white mb-4">Conteúdo do curso</h3>
    <div class="space-y-4">
      {sections.map((section) => (
        <div class="flex justify-between items-center bg-[#2E2E2E] rounded-xl p-4">
          <h4 class="text-lg font-bold text-white">{section.title}</h4>
          <span class="text-sm text-[#A4A4A4]">{section.duration}</span>
        </div>
      ))}
    </div>
  </div>
);

const CourseDetailsContent = ({ details }: CourseDetailsProps) => (
  <div class="bg-[#1E1E1E] rounded-lg py-6 mb-4">
    <h3 class="text-xl font-bold text-white mb-4">Detalhes do curso</h3>
    <div class="space-y-4">
      {details.map((detail) => (
        <div class="bg-[#2E2E2E] rounded-lg p-4">
          <h4 class="text-lg font-bold text-white">{detail.title}</h4>
          <p class="text-sm text-[#A4A4A4]">{detail.text}</p>
          <span class="text-sm font-bold text-white">{detail.difficulty}</span>
        </div>
      ))}
    </div>
  </div>
);

const CourseIncludesContent = ({ includes }: CourseIncludesProps) => (
  <div class="">
    {includes.map((include) => (
      <li class="flex items-center mb-4">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H4.5L7.1875 4.0625C5.875 4.21875 4.65625 4.78125 3.71875 5.625L0 0ZM16 0L12.25 5.625C11.3125 4.78125 10.0938 4.21875 8.78125 4.0625L11.5 0H16ZM2.5 10.5C2.5 8.5625 3.53125 6.75 5.25 5.75C6.9375 4.78125 9.03125 4.78125 10.75 5.75C12.4375 6.75 13.5 8.5625 13.5 10.5C13.5 12.4688 12.4375 14.2812 10.75 15.2812C9.03125 16.25 6.9375 16.25 5.25 15.2812C3.53125 14.2812 2.5 12.4688 2.5 10.5ZM8 7.5L7.0625 9.3125L5 9.59375L6.5 10.9688L6.125 12.9375L8 12L9.84375 12.9375L9.5 10.9688L11 9.59375L8.90625 9.3125L8 7.5Z"
            fill="white"
          />
        </svg>
        <p class="text-base ml-2">{include.item}</p>
      </li>
    ))}
  </div>
);

const CourseTabs = ({ tabsCourse }: CourseTabsProps) => (
  <>
    {tabsCourse.map((tab, index) => (
      <>
        <input
          type="radio"
          name="my_tabs"
          role="tab"
          className="tab after:whitespace-nowrap after:text-lg after:font-bold border-[#02CAF6] checked:border-[#02CAF6] checked:border-b-2"
          aria-label={tab.title}
          defaultChecked={index === 0}
        />
        <div
          role="tabpanel"
          className="tab-content py-6"
          dangerouslySetInnerHTML={{ __html: addClassesToTitles(tab.content) }}
        >
        </div>
      </>
    ))}
  </>
);

export default function CoursePage(
  { courseItem }: SectionProps<ReturnType<typeof loader>>,
) {
  if (!courseItem) {
    return <div>No course found for this URL.</div>;
  }

  const {
    url = "/cursos/montando-blog",
    title = "Aprendendo a configurar o setup com deco.cx",
    instructor = "Por: Rafael Oliveira",
    description =
      "<h2>O que você aprenderá:</h2><p><br></p><p>Configurar o seu primeiro setup em deco.cx</p>",
    excerpt = "Configurar o seu primeiro setup em deco.cx",
    image = DEFAULT_IMAGE,
    imageInstructor = DEFAULT_IMAGE_INSTRUCTOR,
    date = "01 Apr 2024",
    duration = "2 hours",
    price = "R$49,90",
    difficulty = "Iniciante",
    sections = [],
    details = [],
    courseIncludes = [],
    individualCourse = {},
    tabsCourse = [],
  } = courseItem;

  const processedDescription = addClassesToTitles(description);

  const breadcrumbItems = [
    { name: "Página inicial", item: "/" },
    { name: "Desenvolvimento", item: "/desenvolvimento" },
    { name: title, item: url },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      <div class="p-6 flex flex-col md:flex-row gap-10">
        {/* SEÇÃO PRINCIPAL */}
        <div class="w-3/4 mx-auto flex flex-col gap-4">
          <div class="flex flex-col items-start mb-4">
            <span class="px-4 py-2 bg-white text-black font-bold text-sm rounded-2xl mb-4">
              {difficulty}
            </span>
            <h2 class="text-3xl font-bold text-white">{title}</h2>
          </div>

          <div class="flex items-center justify-between py-4">
            <div class="flex items-center">
              <div class="flex items-center text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.875 0.25L10.2266 4.73438L15.2305 5.60938L11.7031 9.24609L12.4141 14.25L7.875 12.0352L3.30859 14.25L4.04688 9.24609L0.492188 5.60938L5.49609 4.73438L7.875 0.25Z"
                      fill="#EBBA6B"
                    />
                  </svg>
                ))}
              </div>
              <span class="text-white ml-2">124 avaliações</span>
              <span class="text-white mx-2">•</span>
              <span class="text-white">238 alunos</span>
            </div>
            <div class="flex items-center">
              <img
                src={imageInstructor}
                alt="Instructor"
                class="w-6 h-6 rounded-2xl mr-4"
              />
              <span class="text-[#A4A4A4]">{instructor}</span>
            </div>
          </div>

          <div class="mt-4 p-4 bg-[#02F67C14] rounded-2xl flex items-start justify-between">
            <div class="flex flex-col items-start mr-4">
              <div class="flex items-center text-white text-sm font-bold px-4 py-3 rounded-2xl-lg">
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H4.5L7.1875 4.0625C5.875 4.21875 4.65625 4.78125 3.71875 5.625L0 0ZM16 0L12.25 5.625C11.3125 4.78125 10.0938 4.21875 8.78125 4.0625L11.5 0H16ZM2.5 10.5C2.5 8.5625 3.53125 6.75 5.25 5.75C6.9375 4.78125 9.03125 4.78125 10.75 5.75C12.4375 6.75 13.5 8.5625 13.5 10.5C13.5 12.4688 12.4375 14.2812 10.75 15.2812C9.03125 16.25 6.9375 16.25 5.25 15.2812C3.53125 14.2812 2.5 12.4688 2.5 10.5ZM8 7.5L7.0625 9.3125L5 9.59375L6.5 10.9688L6.125 12.9375L8 12L9.84375 12.9375L9.5 10.9688L11 9.59375L8.90625 9.3125L8 7.5Z"
                    fill="#02F67C"
                  />
                </svg>
                <span class="ml-2">Este curso é licenciado pela deco.cx</span>
              </div>
              <div class="flex-grow p-4 rounded-2xl-lg">
                <span class="text-white opacity-60">
                  Isso significa que os especialistas da plataforma validam o
                  nosso sistema de ensino!
                </span>
              </div>
            </div>
            <div class="ml-4">
              <svg
                width="87"
                height="36"
                viewBox="0 0 87 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_31_811)">
                  <path
                    d="M53.6008 35.4545C49.4496 35.4545 46.7713 34.1616 44.8966 32.7393C44.4949 32.9979 44.2271 33.2565 43.6914 33.5151C40.0758 35.3252 36.0584 35.4545 34.5854 35.4545C28.6934 35.4545 25.6135 32.9979 24.1405 30.9293C24.0066 30.7999 23.8727 30.5414 23.7387 30.4121C21.0606 33.5151 17.5789 35.4545 12.3564 35.4545C7.80337 35.4545 4.05387 33.7737 1.91131 30.7999C-0.365173 27.5677 -0.632994 23.1716 1.24175 18.5172C3.78606 12.3111 9.54421 8.56157 16.6415 8.56157C16.7754 8.56157 16.7754 8.56157 16.9093 8.56157C16.9093 8.43228 16.9093 8.17369 16.9093 8.0444C16.7754 5.84642 18.2484 3.90702 20.391 3.26056L26.6847 0.933289C27.3543 0.674704 28.0238 0.54541 28.6934 0.54541C30.7021 0.54541 32.5769 1.57976 33.5142 3.38986L36.1925 8.69087C36.9959 8.56157 37.7994 8.56157 38.6028 8.56157C42.4862 8.56157 45.5662 9.8545 47.5748 12.1818C50.6548 9.8545 54.5382 8.56157 58.8233 8.56157C61.0998 8.56157 63.2423 8.94945 64.8492 9.7252C65.3849 9.98379 65.9206 10.2424 66.3223 10.6303C68.7327 9.33733 71.5447 8.56157 74.6248 8.56157C79.0438 8.56157 82.7933 10.2424 84.9358 13.2161C87.2123 16.3192 87.6141 20.5858 86.1411 24.8525C83.7306 31.3171 77.5708 35.4545 70.3396 35.4545C67.2597 35.4545 64.4476 34.6788 62.305 33.1273C61.9032 33.5151 61.3675 33.903 60.832 34.0323C58.8233 34.9373 56.2789 35.3252 53.7347 35.4545H53.6008Z"
                    fill="#02F67C"
                  />
                  <path
                    d="M71.1432 26.9212C68.1971 26.9212 67.7954 24.206 68.5988 21.4908C69.2684 19.2929 71.0092 17.0949 73.5535 17.0949C76.6335 17.0949 76.9012 20.0686 75.9639 22.6545C75.4282 24.8525 73.6874 26.9212 71.1432 26.9212ZM70.3396 30.9293C75.4282 30.9293 79.8474 28.2141 81.7221 23.301C83.5968 18.1293 81.4543 13.0868 74.6248 13.0868C69.1345 13.0868 64.8494 16.4484 63.2425 20.8445C61.5016 25.7576 63.3764 30.9293 70.3396 30.9293ZM53.6008 30.9293C55.6095 30.9293 57.6182 30.5413 59.0912 29.8949C59.6269 28.602 59.6269 27.3091 59.2251 26.0161C58.2878 26.4041 56.8147 26.7919 55.4756 26.7919C51.5921 26.7919 51.3244 24.0767 52.1278 21.7495C53.0653 19.2929 55.3417 17.2242 58.9573 17.2242C59.8947 17.2242 60.832 17.3536 61.3677 17.7414C62.305 16.4484 62.9746 15.1555 63.1085 13.8627C62.305 13.4747 60.832 13.2162 58.9573 13.2162C52.9313 13.2162 48.2445 16.5777 46.6376 21.2323C44.8967 25.4989 46.1019 30.9293 53.6008 30.9293ZM32.9787 20.3273C34.0499 18.1293 35.6568 16.8364 37.6655 16.8364C39.5403 16.8364 39.8081 17.8707 39.5403 18.6464C39.1385 19.6808 37.6655 20.3273 32.9787 20.3273ZM34.7195 30.9293C36.7281 30.9293 39.4064 30.5413 41.6828 29.5071C42.0845 28.3434 42.0845 27.0504 41.549 25.7576C40.0759 26.404 38.0673 26.9212 36.1925 26.9212C33.5143 26.9212 32.0412 26.0161 32.0412 23.9475C39.4064 24.0767 43.2897 22.7838 44.6289 19.6808C45.8341 16.4484 43.6915 13.2162 38.6029 13.2162C33.1126 13.2162 29.0952 16.9656 27.4883 21.103C26.0153 25.3697 26.9526 30.9293 34.7195 30.9293ZM12.4903 30.9293C17.5789 30.9293 20.525 28.7313 23.8727 21.7495C25.7475 17.9999 27.2205 14.2505 29.0952 10.501L31.2378 11.1475C31.7734 11.2768 32.1752 11.0181 31.9073 10.501L29.3631 5.32927C28.9613 5.07068 28.5596 5.07068 28.2917 5.07068L21.864 7.39796C21.3285 7.52725 21.3285 8.04442 21.864 8.17372L23.8727 8.94947C22.2658 12.4403 20.391 17.6121 18.7841 20.8445C17.0433 24.4647 16.1059 27.0504 13.1598 27.0504C10.2139 27.0504 9.67821 24.8525 10.8834 21.6202C12.3564 17.8707 14.7669 16.8364 17.5789 17.6121C18.3824 16.5777 18.918 15.0262 19.1859 13.604C18.3824 13.3455 17.445 13.3455 16.6415 13.3455C12.0886 13.3455 7.66956 15.5434 5.79481 20.3273C3.38441 26.1454 5.6609 30.9293 12.4903 30.9293Z"
                    fill="#113032"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_31_811">
                    <rect width="87" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div class="bg-[#2E2E2E] rounded-2xl p-8 mb-4">
            {description && (
              <div
                class="text-white"
                dangerouslySetInnerHTML={{ __html: processedDescription }}
              />
            )}
          </div>
          <div class="mb-4">
            <CourseContent sections={sections} />
          </div>

          <div role="tablist" className="tabs tabs-bordered">
            <CourseTabs tabsCourse={tabsCourse} />
          </div>
        </div>

        {/* SEÇÃO LATERAL */}
        <div class="w-1/4 flex flex-col items-start mb-4">
          <div class="flex items-center w-full">
            <img
              src={image}
              alt={title}
              class="w-full h-44 object-cover rounded-2xl"
            />
          </div>
          <div class="flex justify-start items-center my-6 ">
            <span class="text-3xl font-bold text-white">{price}</span>
          </div>
          <button class="w-full bg-[#01D859] text-black font-bold py-4 px-4 rounded-lg mb-4 text-sm">
            Adicionar ao carrinho
          </button>
          <button class="w-full bg-[#FFFFFF14] text-white font-bold py-4 px-4 rounded-lg mb-6 text-sm">
            Comprar agora
          </button>

          <div class="py-2 mb-4 flex flex-col">
            <h4 class="font-bold text-lg mb-4">Este curso inclui:</h4>
            <ul class="space-y-2 flex flex-col">
              <CourseIncludesContent includes={courseIncludes} />
            </ul>
          </div>
          <div class="py-2 mb-4 flex flex-col">
            <h4 class="font-bold text-lg mb-4 text-white">
              Quem fez este curso também comprou:
            </h4>
            <CourseSpot course={individualCourse} />
          </div>
        </div>
      </div>
    </>
  );
}
