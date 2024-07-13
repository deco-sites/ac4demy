import { useEffect, useState } from "preact/hooks";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Post {
  image: string;
  caption: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  token?: string;
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

interface InstagramApiResponse {
  data: {
    id: string;
    caption: string;
    media_url: string;
  }[];
}

function PostSpot({ post }: { post: Post }) {
  return (
    <div class="post-spot">
      <img src={post.image} alt={post.caption} class="w-52 h-80 rounded-lg" />
    </div>
  );
}

async function fetchInstagramPosts(token: string): Promise<Post[]> {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Instagram posts");
  }
  const data: InstagramApiResponse = await response.json();
  return data.data.map((item) => ({
    image: item.media_url,
    caption: item.caption || "Instagram Post",
  }));
}

function InstagramPosts({
  title = "AC4DEMY é o braço de conteúdo da TEC4U Digital",
  subtitle = "Confira as nossas pílulas de conteúdo no Instagram @tec4udigital",
  token,
  posts = defaultPosts,
}: Props) {
  const id = useId();
  const [instagramPosts, setInstagramPosts] = useState<Post[]>(posts);

  useEffect(() => {
    if (token) {
      fetchInstagramPosts(token)
        .then((fetchedPosts) => setInstagramPosts(fetchedPosts))
        .catch((error) => console.error(error));
    }
  }, [token]);

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
        {instagramPosts.map((post, index) => (
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
        disabled={instagramPosts.length < 6}
      >
        <Icon id="chevron-right" />
      </Slider.NextButton>

      <Slider.JS rootId={id} />
    </div>
  );
}

export default InstagramPosts;
