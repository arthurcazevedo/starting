import { Tab } from "site/islands/NRF/ShowcaseEditorTabbed.tsx";
import { ShowcaseEditorAccordion } from "../NRF/ShowcaseEditorAccordion.tsx";
import { Head } from "$fresh/runtime.ts";
import { AppContext } from "site/apps/site.ts";

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @format html
   */
  subtitle?: string;
  tabs?: Tab[];
  position?: "left" | "right";
}

export default function BuildShowCaseMobile({
  title,
  subtitle,
  tabs,
  position,
}: Props) {
  return (
    <div
      id="hero"
      class={`relative bg-black py-20 space-y-16 lg:space-y-20 px-6`}
    >
      <Head>
        <script>
          {`document.addEventListener('keydown', function(event) {
            const checkbox = document.getElementById('demo-modal');
              if (event.key === 'Escape' || event.keyCode === 27) {
              if (checkbox.checked) {
                checkbox.checked = false;
              }
            }
          });`}
        </script>
      </Head>
      <div class="mx-auto flex flex-col items-center gap-16 lg:gap-20 border-t border-[#16E47D]">
        <div class="flex flex-col items-center gap-4 border-t border-[#16E47D]">
          <div class="flex flex-col items-center gap-6 lg:gap-12 z-10">
            <div
              class="mx-6 lg:mx-0 inline-block text-[32px] lg:text-[48px] text-center leading-[115%] lg:tracking-[-1.44px] font-medium text-white max-w- lg:max-w-none"
              dangerouslySetInnerHTML={{
                __html: title ?? "",
              }}
            >
            </div>
            {subtitle && (
              <div
                class="mx-11 inline-block lg:text-[26px] text-center leading-[150%] text-gray-400 max-w-lg lg:max-w-none"
                dangerouslySetInnerHTML={{
                  __html: subtitle,
                }}
              >
              </div>
            )}
          </div>
        </div>
      </div>
      <div class="mx-auto flex flex-col items-center">
        <ShowcaseEditorAccordion tabs={tabs} position={position} />
      </div>
    </div>
  );
}
