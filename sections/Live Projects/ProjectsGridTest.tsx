import Image from "deco-sites/std/components/Image.tsx";
import { h, Component } from 'preact';
import { useEffect, useId, useState } from "preact/hooks";
import Header from "deco-sites/starting/components/ui/SectionHeader.tsx";
import PageSpeed from "deco-sites/starting/components/ui/PageSpeed.tsx";
import { Template } from "deco-sites/starting/components/ui/Types.tsx";

export interface TemplateInfo {
  label?: string;
  description?: string;
  slug: string;
  price: string;
  alignment?: "center" | "left";
  buttonText?: string;
}

export interface Props {
  lang?: string;
  header?: {
    title?: string;
    description?: string;
  };
  list?: Template[];
  layout?: {
    headerAlignment?: "center" | "left";
    categoryCard?: {
      textPosition?: "top" | "bottom";
      textAlignment?: "center" | "left";
    };
  };
}

function CardText(
  { label, description, alignment, price, slug }: TemplateInfo,
) {
  return (
    <div
      class={`w-full px-3 flex gap-3 items-center ${
        alignment === "center" ? "text-center" : "text-left"
      }`}
    >
      <div class="flex-auto flex flex-col">
        {label && (
          <h3 class="font-semibold">
            {label}
          </h3>
        )}
        {description && (
          <div class="text-sm text-neutral">
            {description}
          </div>
        )}
      </div>
      <div class="flex-none font-semibold text-right">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1666 4.16667C12.7064 4.16667 12.3333 3.79357 12.3333 3.33333C12.3333 2.8731 12.7064 2.5 13.1666 2.5H17.3333C17.7935 2.5 18.1666 2.8731 18.1666 3.33333V7.5C18.1666 7.96024 17.7935 8.33333 17.3333 8.33333C16.8731 8.33333 16.5 7.96024 16.5 7.5V5.34518L9.58921 12.2559C9.26378 12.5814 8.73614 12.5814 8.4107 12.2559C8.08527 11.9305 8.08527 11.4028 8.4107 11.0774L15.3214 4.16667H13.1666ZM3.89886 5.73223C4.3677 5.26339 5.00358 5 5.66663 5H9.83329C10.2935 5 10.6666 5.3731 10.6666 5.83333C10.6666 6.29357 10.2935 6.66667 9.83329 6.66667H5.66663C5.44561 6.66667 5.23365 6.75446 5.07737 6.91074C4.92109 7.06702 4.83329 7.27899 4.83329 7.5V15C4.83329 15.221 4.92109 15.433 5.07737 15.5893C5.23365 15.7455 5.44561 15.8333 5.66663 15.8333H13.1666C13.3876 15.8333 13.5996 15.7455 13.7559 15.5893C13.9122 15.433 14 15.221 14 15V10.8333C14 10.3731 14.3731 10 14.8333 10C15.2935 10 15.6666 10.3731 15.6666 10.8333V15C15.6666 15.663 15.4032 16.2989 14.9344 16.7678C14.4656 17.2366 13.8297 17.5 13.1666 17.5H5.66663C5.00358 17.5 4.3677 17.2366 3.89886 16.7678C3.43002 16.2989 3.16663 15.663 3.16663 15V7.5C3.16663 6.83696 3.43002 6.20107 3.89886 5.73223Z" fill="#0D1717"/>
      </svg>
      </div>
    </div>
  );
}

function TemplatesGrid(props: Props) {
  const id = `category-list-${useId()}`;
  const {
    lang = "pt",
    header = {
      title: "",
      description: "",
    },
    list = [
      {
        label: "Feminino",
        description: "Moda feminina direto de Milão",
        slug: "feminino",
        image: {
          img:
            "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
          color: "",
        },
        buttonText: "Ver produtos",
        pageSpeed: 10,
        price: "",
      },
    ],
    layout = {
      headerAlignment: "center",
      categoryCard: {
        textPosition: "top",
        textAlignment: "center",
      },
    },
  } = props;
  const [themes, setThemes] = useState(list.map(() => 0));

  const handleThemeChange = (cardIndex: number, themeIndex: number) => {
    setThemes((prevThemes) => {
      const newThemes = [...prevThemes];
      newThemes[cardIndex] = themeIndex;
      return newThemes;
    });
  };

  return (
    <div className="flex flex-col items-center mx-8 pb-10 md:mx-auto md:px-14 md:pb-16 lg:px-16 gap-y-10 lg:pb-20 lg:max-w-[1440px] xl:px-16">
      <div id="index" className="flex flex-start gap-x-12 h-[32px] w-full px-4">
        <div className="flex flex-start border-b-2 gap-x-8 h-[32px] w-full px-4">

        </div>
      </div>
      <div
        id={id}
        class="sm:container mx-4 flex flex-col text-base-content lg:grid-cols-4 relative"
      >
        <Header
          title={header.title}
          description={header.description || ""}
          alignment={layout.headerAlignment || "center"}
        />

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 p-4">
          {list.map((
            {
              label,
              description,
              slug,
              image,
              buttonText,
              pageSpeed,
              price,
            },
            index,
          ) => (
            <div class="flex flex-col gap-4 border border-[#C9CFCF] rounded-lg bg-white overflow-hidden pb-3 md:hover:scale-105 duration-200">
              {image &&
                (
                  <a
                    href={`/${lang}/hub/preview/${slug}`}
                    class="block relative overflow-hidden h-[200px] sm:h-[244px] border-[#C9CFCF] border-b"
                  >
                    <figure>
                      <Image
                        class="object-top object-cover"
                        src={Array.isArray(image)
                          ? image[themes[index]].img
                          : image.img}
                        alt={description || label}
                        width={398}
                        height={244}
                        loading="lazy"
                        style={{ width: "100%" }}
                      />
                    </figure>
                  </a>
                )}
              {/* <div class="flex flex-row gap-2 px-3 justify-center">
                {Array.isArray(image)
                  ? (
                    image.map((image, buttonIndex) => (
                      <div
                        key={buttonIndex}
                        className={`flex h-[20px] w-[20px] items-center justify-center rounded-full hover:scale-[0.95] cursor-pointer ${
                          themes[index] === buttonIndex
                            ? "ring ring-gray-300 ring-offset-[0.5px]"
                            : ""
                        }`}
                        onClick={() => handleThemeChange(index, buttonIndex)}
                        style={{ backgroundColor: (image.color) }}
                      >
                      </div>
                    ))
                  )
                  : (
                    <div
                      className={`flex h-[20px] w-[20px] items-center justify-center rounded-full bg-blue-400 hover:scale-[0.95] cursor-pointer ${
                        themes[index] === 0
                          ? "ring ring-gray-300 ring-offset-[0.5px]"
                          : ""
                      }`}
                      onClick={() => handleThemeChange(index, 0)}
                    >
                    </div>
                  )}
              </div> */}
              {layout.categoryCard?.textPosition === "bottom" &&
                (
                  <CardText
                    slug={slug || ""}
                    price={price}
                    label={label}
                    description={description}
                    alignment={layout?.categoryCard?.textAlignment}
                    buttonText={buttonText}
                  />
                )}
            </div>
          ))}
        </div>
      </div>
      <div id="pagination" className="flex items-center gap-1">

      </div>
    </div>
  );
}

export default TemplatesGrid;
