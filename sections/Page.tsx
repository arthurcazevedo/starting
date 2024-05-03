import { Section } from "deco/blocks/section.ts";

export interface SectionProps {
  SectionSidebar: Section;
  SectionContent: Section;
  SectionOnThisPage: Section;
}

export default function (props: SectionProps) {
  return (
    <section class="bg-base-700">
      <div
        class={`flex lg:flex-row px-10 gap-10 flex-col w-full mx-auto max-w-screen-2xl lg:pt-[140px]`}
      >
        {<props.SectionSidebar.Component {...props.SectionSidebar.props} />}
        {<props.SectionContent.Component {...props.SectionContent.props} />}
        {
          <props.SectionOnThisPage.Component
            {...props.SectionOnThisPage.props}
          />
        }
      </div>
    </section>
  );
}
