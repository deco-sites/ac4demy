import Slider from "./ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  image: ImageWidget;
  caption: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  posts?: Post[];
}

const defaultPosts: Post[] = [
  { image: "https://via.placeholder.com/350/8454F4/8454F4", caption: "Post 1" },
  { image: "https://via.placeholder.com/350/8454F4/8454F4", caption: "Post 2" },
  { image: "https://via.placeholder.com/350/8454F4/8454F4", caption: "Post 3" },
  { image: "https://via.placeholder.com/350/8454F4/8454F4", caption: "Post 4" },
  { image: "https://via.placeholder.com/350/8454F4/8454F4", caption: "Post 5" },
  { image: "https://via.placeholder.com/350/8454F4/8454F4", caption: "Post 6" },
];

function PostSpot({ post }: { post: Post }) {
  return (
    <div class="post-spot">
      <Image
        width={380}
        height={200}
        class="w-52 h-80 rounded-lg"
        sizes="(max-width: 640px) 100vw, 30vw"
        src={post.image}
        alt={post.caption}
        decoding="async"
        loading="lazy"
      />
    </div>
  );
}

function InstagramPosts({
  title = "AC4DEMY é o braço de conteúdo da TEC4U Digital",
  subtitle = "Confira as nossas pílulas de conteúdo no Instagram @tec4udigital",
  posts = defaultPosts,
}: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="relative p-6 rounded-2xl mx-10 my-8 overflow-hidden bg-[#FFFFFF14]"
    >
      <h2 class="text-3xl font-semibold opacity-90 pb-3 w-full">
        {title}
      </h2>
      <p class="mb-6 opacity-60">{subtitle}</p>
      <Slider class="carousel carousel-center w-screen gap-6 text-secondary-content text-sm/4">
        {posts.map((post, index) => (
          <Slider.Item index={index} class="carousel-item">
            <PostSpot post={post} />
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
        disabled={posts.length < 6}
      >
        <Icon id="chevron-right" />
      </Slider.NextButton>

      <Slider.JS rootId={id} />
    </div>
  );
}

export default InstagramPosts;
