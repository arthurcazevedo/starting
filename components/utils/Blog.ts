import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type SupportedLocales = "en" | "pt";

export interface PostBody {
  data: string;
}

/** @title {{{path}}} */
export interface Post {
  path: string;
  img: LiveImage;
  date: string;
  tags?: string[];
  author: string;
  authorAvatar?: string;
  authorRole?: string;
  readTime?: string;
  body: {
    pt?: PostData;
    en?: PostData;
  };
}

export interface PostData {
  title: string;
  descr: string;
  /**
   * @format textarea
   */
  content?: string;
  seo?: {
    title?: string;
    description?: string;
    image?: LiveImage;
    canonical?: string;
  };
}

export interface PostList {
  posts: Array<Post>;
}

const BLOG_DEFAULT_LOCALE = "pt";

export function getBlogPath(fname: string, locale?: string) {
  console.log(`/${locale || BLOG_DEFAULT_LOCALE}/blog/${fname}`);
  return `/${locale || BLOG_DEFAULT_LOCALE}/blog/${fname}`;
}
