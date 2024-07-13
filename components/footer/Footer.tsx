import { ImageWidget } from "apps/admin/widgets.ts";
import { AvailableIcons } from "site/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface Links {
  title: string;
  href: string;
}

interface SocialLinks {
  label?: string;
  href?: string;
  icon: AvailableIcons;
}
export interface Props {
  logo: ImageWidget;
  textEnterprise?: string;
  logoEnterprise: ImageWidget;
  menuLinks?: Links[];
  socialLinks?: SocialLinks[];
  copyright?: string;
}

export default function Footer(
  { logo, textEnterprise, logoEnterprise, menuLinks, socialLinks, copyright }:
    Props,
) {
  return (
    <footer class={`p-10 pb-0 w-full flex justify-between gap-8`}>
      <div class={`flex flex-col justify-between pb-10`}>
        <div class={`flex flex-col gap-5`}>
          <Image
            className="object-cover w-[335px]"
            alt={"Logo AC4DEMY"}
            src={logo}
            width={335}
            height={49}
            loading={"lazy"}
            decoding={"async"}
          />
          <div class={`flex gap-2 items-center`}>
            <p class={`text-sm font-medium text-white text-opacity-60`}>
              {textEnterprise}
            </p>
            <Image
              className="object-cover w-[85px]"
              alt={"Logo TEC4U"}
              src={logoEnterprise}
              width={85}
              height={18}
              loading={"lazy"}
              decoding={"async"}
            />
          </div>
        </div>
        <div class={`flex flex-col gap-4`}>
          <ul class={`flex items-center gap-4`}>
            {socialLinks?.map(({ label, href, icon }) => (
              <li>
                <a href={href} title={label}>
                  <Icon id={icon} size={56} stroke-width={1} />
                </a>
              </li>
            ))}
          </ul>
          <div>
            <span class={`text-sm font-normal text-white text-opacity-60`}>
              {copyright}
            </span>
          </div>
        </div>
      </div>
      <div>
        <ul class={`flex flex-col gap-2 min-w-[136px]`}>
          {menuLinks?.map(({ title, href }) => (
            <li>
              <a
                class={`text-sm font-light text-white text-opacity-60 hover:underline`}
                href={href}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Icon
          id="ac4demy-four"
          width={376}
          height={418}
          stroke-width={1}
          class={`w-full`}
        />
      </div>
    </footer>
  );
}
