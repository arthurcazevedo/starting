// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/Carousel.tsx";
import * as $$1 from "./islands/Cms.tsx";
import * as $$2 from "./islands/Header.tsx";
import * as $$3 from "./islands/LiveControls.tsx";
import * as $$$0 from "./sections/About.tsx";
import * as $$$1 from "./sections/Carousel.tsx";
import * as $$$2 from "./sections/Cms.tsx";
import * as $$$3 from "./sections/Community.tsx";
import * as $$$4 from "./sections/Delight.tsx";
import * as $$$5 from "./sections/Divider.tsx";
import * as $$$6 from "./sections/Faq.tsx";
import * as $$$7 from "./sections/Features.tsx";
import * as $$$8 from "./sections/Footer.tsx";
import * as $$$9 from "./sections/Head.tsx";
import * as $$$10 from "./sections/Header.tsx";
import * as $$$11 from "./sections/Integration.tsx";
import * as $$$12 from "./sections/Markdown.tsx";
import * as $$$13 from "./sections/Partner.tsx";
import * as $$$14 from "./sections/QuillText.tsx";
import * as $$$$0 from "./functions/LoadGitHubRaw.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/Carousel.tsx": $$0,
    "./islands/Cms.tsx": $$1,
    "./islands/Header.tsx": $$2,
    "./islands/LiveControls.tsx": $$3,
  },
  sections: {
    "./sections/About.tsx": $$$0,
    "./sections/Carousel.tsx": $$$1,
    "./sections/Cms.tsx": $$$2,
    "./sections/Community.tsx": $$$3,
    "./sections/Delight.tsx": $$$4,
    "./sections/Divider.tsx": $$$5,
    "./sections/Faq.tsx": $$$6,
    "./sections/Features.tsx": $$$7,
    "./sections/Footer.tsx": $$$8,
    "./sections/Head.tsx": $$$9,
    "./sections/Header.tsx": $$$10,
    "./sections/Integration.tsx": $$$11,
    "./sections/Markdown.tsx": $$$12,
    "./sections/Partner.tsx": $$$13,
    "./sections/QuillText.tsx": $$$14,
  },
  functions: { "./functions/LoadGitHubRaw.ts": $$$$0 },
  schemas: {
    "./sections/About.tsx": {
      "inputSchema": {
        "title": " About",
        "type": "object",
        "properties": {
          "mainText": {
            "type": "string",
            "title": "Main Text",
          },
          "secondText": {
            "type": "string",
            "title": "Second Text",
          },
          "button": {
            "type": "string",
            "title": "Button",
          },
          "blackBlock": {
            "format": "html",
            "type": "string",
            "title": "Black Block",
          },
          "greenBlock": {
            "type": "string",
            "title": "Green Block",
          },
        },
        "required": [
          "mainText",
          "secondText",
          "button",
          "blackBlock",
          "greenBlock",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Carousel.tsx": {
      "inputSchema": {
        "title": " Carousel",
        "type": "object",
        "properties": {
          "images": {
            "title": "Images",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "text": {
                  "type": "string",
                  "title": "Text",
                },
                "image": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Image",
                },
                "author": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Author",
                },
              },
              "required": [
                "title",
                "text",
                "image",
                "author",
              ],
            },
          },
        },
        "required": [
          "images",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Cms.tsx": {
      "inputSchema": {
        "title": " Cms",
        "type": "object",
        "properties": {
          "leftHeader": {
            "type": "string",
            "title": "Left Header",
          },
          "rightHeader": {
            "type": "string",
            "title": "Right Header",
          },
          "leftTitle": {
            "type": "string",
            "title": "Left Title",
          },
          "rightTitle": {
            "type": "string",
            "title": "Right Title",
          },
          "leftContent": {
            "type": "string",
            "title": "Left Content",
          },
          "rightContent": {
            "type": "string",
            "title": "Right Content",
          },
          "leftImage": {
            "format": "image-uri",
            "type": "string",
            "title": "Left Image",
          },
          "rightImage": {
            "format": "image-uri",
            "type": "string",
            "title": "Right Image",
          },
        },
        "required": [
          "leftHeader",
          "rightHeader",
          "leftTitle",
          "rightTitle",
          "leftContent",
          "rightContent",
          "leftImage",
          "rightImage",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Community.tsx": {
      "inputSchema": {
        "title": " Community",
        "type": "object",
        "properties": {
          "mainTextPt1": {
            "type": "string",
            "title": "Main Text Pt1",
          },
          "mainTextPt2": {
            "type": "string",
            "title": "Main Text Pt2",
          },
          "subText": {
            "type": "string",
            "title": "Sub Text",
          },
          "col1Title": {
            "type": "string",
            "title": "Col1 Title",
          },
          "col1Text": {
            "type": "string",
            "title": "Col1 Text",
          },
          "col2Title": {
            "type": "string",
            "title": "Col2 Title",
          },
          "col2Text": {
            "type": "string",
            "title": "Col2 Text",
          },
          "col3Title": {
            "type": "string",
            "title": "Col3 Title",
          },
          "col3Text": {
            "type": "string",
            "title": "Col3 Text",
          },
          "col4Title": {
            "type": "string",
            "title": "Col4 Title",
          },
          "col4Text": {
            "type": "string",
            "title": "Col4 Text",
          },
        },
        "required": [
          "mainTextPt1",
          "mainTextPt2",
          "subText",
          "col1Title",
          "col1Text",
          "col2Title",
          "col2Text",
          "col3Title",
          "col3Text",
          "col4Title",
          "col4Text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Delight.tsx": {
      "inputSchema": {
        "title": " Delight",
        "type": "object",
        "properties": {
          "mainText": {
            "type": "string",
            "title": "Main Text",
          },
          "name": {
            "type": "string",
            "title": "Name",
          },
          "email": {
            "type": "string",
            "title": "Email",
          },
          "position": {
            "type": "string",
            "title": "Position",
          },
          "linkedin": {
            "type": "string",
            "title": "Linkedin",
          },
          "button": {
            "type": "string",
            "title": "Button",
          },
          "form": {
            "title": "Form",
            "type": "object",
            "properties": {
              "method": {
                "type": "string",
                "anyOf": [
                  {
                    "type": "string",
                    "const": "get",
                  },
                  {
                    "type": "string",
                    "const": "post",
                  },
                ],
                "title": "Method",
              },
              "action": {
                "type": "string",
                "title": "Action",
              },
            },
            "required": [
              "method",
              "action",
            ],
          },
        },
        "required": [
          "mainText",
          "name",
          "email",
          "position",
          "linkedin",
          "button",
          "form",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Divider.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Faq.tsx": {
      "inputSchema": {
        "title": " Faq",
        "type": "object",
        "properties": {
          "questions": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "question": {
                  "type": "string",
                  "title": "Question",
                },
                "answer": {
                  "type": "string",
                  "title": "Answer",
                },
              },
              "required": [
                "question",
                "answer",
              ],
            },
            "title": "Questions",
          },
        },
        "required": [
          "questions",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Features.tsx": {
      "inputSchema": {
        "title": " Features",
        "type": "object",
        "properties": {
          "col1Ttitle": {
            "type": "string",
            "title": "Col1 Ttitle",
          },
          "col1Text": {
            "type": "string",
            "title": "Col1 Text",
          },
          "col2Title": {
            "type": "string",
            "title": "Col2 Title",
          },
          "col2Text": {
            "type": "string",
            "title": "Col2 Text",
          },
          "col3Title": {
            "type": "string",
            "title": "Col3 Title",
          },
          "col3Text": {
            "type": "string",
            "title": "Col3 Text",
          },
        },
        "required": [
          "col1Ttitle",
          "col1Text",
          "col2Title",
          "col2Text",
          "col3Title",
          "col3Text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Footer.tsx": {
      "inputSchema": {
        "title": " Footer",
        "type": "object",
        "properties": {
          "linkedinUrl": {
            "type": "string",
            "title": "Linkedin Url",
          },
          "gitUrl": {
            "type": "string",
            "title": "Git Url",
          },
          "discordUrl": {
            "type": "string",
            "title": "Discord Url",
          },
          "built": {
            "type": "string",
            "title": "Built",
          },
        },
        "required": [
          "linkedinUrl",
          "gitUrl",
          "discordUrl",
          "built",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": "string",
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": "string",
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": "string",
            "title": "Theme Color",
          },
        },
        "required": [
          "title",
          "description",
          "url",
          "imageUrl",
          "faviconUrl",
          "styleUrls",
          "themeColor",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "menuLinks": {
            "title": "Menu Links",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "label": {
                  "type": "string",
                  "title": "Label",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "targetBlank": {
                  "type": [
                    "boolean",
                    "null",
                  ],
                  "title": "Target Blank",
                },
              },
              "required": [
                "label",
                "href",
              ],
            },
          },
          "idiom": {
            "type": "string",
            "title": "Idiom",
          },
          "pt": {
            "title": "Pt",
            "type": "object",
            "properties": {
              "label": {
                "type": "string",
                "title": "Label",
              },
              "url": {
                "type": "string",
                "title": "Url",
              },
              "selected": {
                "type": [
                  "boolean",
                  "null",
                ],
                "title": "Selected",
              },
            },
            "required": [
              "label",
              "url",
            ],
          },
          "eng": {
            "title": "Eng",
            "type": "object",
            "properties": {
              "label": {
                "type": "string",
                "title": "Label",
              },
              "url": {
                "type": "string",
                "title": "Url",
              },
              "selected": {
                "type": [
                  "boolean",
                  "null",
                ],
                "title": "Selected",
              },
            },
            "required": [
              "label",
              "url",
            ],
          },
          "login": {
            "title": "Login",
            "type": "object",
            "properties": {
              "label": {
                "type": "string",
                "title": "Label",
              },
              "url": {
                "type": "string",
                "title": "Url",
              },
            },
            "required": [
              "label",
              "url",
            ],
          },
          "linkedinUrl": {
            "type": "string",
            "title": "Linkedin Url",
          },
          "gitUrl": {
            "type": "string",
            "title": "Git Url",
          },
          "discordUrl": {
            "type": "string",
            "title": "Discord Url",
          },
        },
        "required": [
          "menuLinks",
          "idiom",
          "pt",
          "eng",
          "login",
          "linkedinUrl",
          "gitUrl",
          "discordUrl",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Integration.tsx": {
      "inputSchema": {
        "title": " Integration",
        "type": "object",
        "properties": {
          "mainText": {
            "type": "string",
            "title": "Main Text",
          },
          "secondText": {
            "type": "string",
            "title": "Second Text",
          },
        },
        "required": [
          "mainText",
          "secondText",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Markdown.tsx": {
      "inputSchema": {
        "title": " Markdown",
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "title": "Text",
          },
        },
        "required": [
          "text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Partner.tsx": {
      "inputSchema": {
        "title": " Partner",
        "type": "object",
        "properties": {
          "mainText": {
            "type": "string",
            "title": "Main Text",
          },
          "imgFirstLine": {
            "type": "array",
            "items": {
              "format": "image-uri",
              "type": "string",
              "title": "Image",
            },
            "title": "Img First Line",
          },
          "imgSecondLine": {
            "type": "array",
            "items": {
              "format": "image-uri",
              "type": "string",
              "title": "Image",
            },
            "title": "Img Second Line",
          },
          "imgThirdLine": {
            "type": "array",
            "items": {
              "format": "image-uri",
              "type": "string",
              "title": "Image",
            },
            "title": "Img Third Line",
          },
          "col1": {
            "type": "string",
            "title": "Col1",
          },
          "col2": {
            "type": "string",
            "title": "Col2",
          },
          "col3": {
            "type": "string",
            "title": "Col3",
          },
          "col4": {
            "type": "string",
            "title": "Col4",
          },
          "button": {
            "type": "string",
            "title": "Button",
          },
        },
        "required": [
          "mainText",
          "imgFirstLine",
          "imgSecondLine",
          "imgThirdLine",
          "col1",
          "col2",
          "col3",
          "col4",
          "button",
        ],
      },
      "outputSchema": null,
    },
    "./sections/QuillText.tsx": {
      "inputSchema": {
        "title": " Quill Text",
        "type": "object",
        "properties": {
          "html": {
            "format": "html",
            "type": "string",
            "title": "Html",
          },
        },
        "required": [
          "html",
        ],
      },
      "outputSchema": null,
    },
    "./functions/LoadGitHubRaw.ts": {
      "inputSchema": {
        "title": " Load Git Hub Raw",
        "type": "object",
        "properties": {
          "repo": {
            "type": "string",
            "title": "Repo",
            "description": "Complete user/repo format",
          },
          "branch": {
            "type": "string",
            "title": "Branch",
            "description": "Branch",
          },
          "path": {
            "type": "string",
            "title": "Path",
            "description":
              "Path to fetch, or leave blank and add :path route param.",
          },
        },
        "required": [
          "repo",
          "branch",
          "path",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
