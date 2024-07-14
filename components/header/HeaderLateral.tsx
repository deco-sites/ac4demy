import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import { AppContext } from "site/apps/site.ts";
import type { SectionProps } from "deco/types.ts";

interface Links {
  label: string;
  href: string;
  icon: AvailableIcons;
}

interface MenuItems {
  title?: string;
  links?: Links[];
}

export interface Props {
  logo: ImageWidget;
  menu?: MenuItems[];
  inviteFriend?: {
    image: ImageWidget;
    text?: string;
    labelCta?: string;
    hrefCta?: string;
  };
}

export default function HeaderLateral(
  { logo, menu, inviteFriend, url }: SectionProps<typeof loader>,
) {
  const newUrl = new URL(url);

  return (
    <div
      class={`scrollbar-header fixed w-[272px] overflow-y-scroll z-50 flex flex-col h-screen ml-0 p-8 pt-10 bg-menu border-r border-white border-opacity-10`}
    >
      <a href="/">
        <Image
          className="object-cover pb-10 w-[130px]"
          alt={"Logo AC4DEMY"}
          src={logo}
          width={130}
          height={19}
          loading={"eager"}
        />
      </a>
      <div class={`flex flex-col flex-1`}>
        {menu?.map(({ title, links }) => {
          return (
            <div class={`flex flex-col gap-2 py-4`}>
              <h2 class={`text-sm font-semibold text-opacity-60`}>{title}</h2>
              {links?.map(({ label, href, icon }) => {
                return (
                  <div
                    class={`flex items-center gap-2.5 w-full p-4 ${
                      newUrl.pathname === href &&
                      "bg-primary rounded-lg text-base-200"
                    }`}
                  >
                    <Icon
                      id={icon}
                      size={18}
                      stroke-width={1}
                      class={`${
                        newUrl.pathname === href
                          ? "text-black opacity-100"
                          : "text-white opacity-60"
                      }`}
                    />
                    <a
                      href={href}
                      class={`text-sm font-semibold text-opacity-60`}
                    >
                      {label}
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {inviteFriend &&
        (
          <div
            class={`relative gap-2 min-h-[142px] mt-[70px] w-full flex flex-col rounded-xl bg-white bg-opacity-5 items-center justify-center h-[142px]`}
          >
            <Image
              className="absolute -top-[30px] object-cover overflow-visible w-[130px] h-[19px]"
              alt={"Pilha de cadernos empilhados"}
              src={inviteFriend?.image}
              width={109}
              height={98}
              loading={"lazy"}
            />
            <p class={`font-semibold text-sm`}>{inviteFriend.text}</p>
            <a
              href={inviteFriend.hrefCta}
              class={`bg-primary rounded-lg text-base-200 font-semibold text-xs py-2 px-3`}
            >
              {inviteFriend.labelCta}
            </a>
          </div>
        )}
    </div>
  );
}

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device, url: _req.url };
};
