import { Section } from "deco/blocks/section.ts";

interface Sections {
  section: Section;
}

export interface Props {
  sections: Sections[];
}

export default function ContainerContent({ sections }: Props) {
  return (
    <main class={`flex flex-col w-[calc(100vw-288px)] mx-auto mr-0`}>
      {sections.map((sections) => {
        return <sections.section.Component {...sections.section.props} />;
      })}
    </main>
  );
}
