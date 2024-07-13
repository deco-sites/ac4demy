interface BreadcrumbItem {
  name: string;
  item: string;
}

interface Props {
  items: BreadcrumbItem[];
}

function Breadcrumb({ items = [] }: Props) {
  return (
    <nav class="p-6" aria-label="breadcrumb">
      <ol class="breadcrumb flex text-xs font-bold">
        {items.map((item, index) => (
          <li
            key={index}
            class={`breadcrumb-item ${
              index < items.length - 1 ? 'after:content-["·"] after:px-1' : ""
            }`}
          >
            <a
              href={item.item}
              class={index === items.length - 1
                ? "text-[#02CAF6]"
                : "text-[#FFFFFF99]"}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
