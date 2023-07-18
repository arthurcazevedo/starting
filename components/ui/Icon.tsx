import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "ChevronDown"
  | "Post"
  | "BoldHeart"
  | "Chart"
  | "QuestionMarkCircle"
  | "User"
  | "ShoppingCart"
  | "Bars3"
  | "Heart"
  | "MagnifyingGlass"
  | "XMark"
  | "Plus"
  | "Minus"
  | "MapPin"
  | "Phone"
  | "Elo"
  | "Mastercard"
  | "Visa"
  | "Pix"
  | "Logo"
  | "Facebook"
  | "Instagram"
  | "Tiktok"
  | "Truck"
  | "Discount"
  | "Return"
  | "CreditCard"
  | "Deco"
  | "Discord"
  | "DiscordButton"
  | "Trash"
  | "FilterList"
  | "WhatsApp"
  | "logoVnda"
  | "IconCart"
  | "PigMoney"
  | "FastClock"
  | "FastPagespeed"
  | "Check"
  | "WhiteArrow"
  | "GreenArrow"
  | "Sale"
  | "Book"
  | "Bag"
  | "Cash"
  | "VndaLogo"
  | "VTEXLogo"
  | "ShopifyLogo"
  | "DecoLogo"
  | "OCCLogo"
  | "ArrowRight"
  | "Support"
  | "Share"
  | "FilterList"
  | "WhatsApp"
  | "Linkedin";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: AvailableIcons;
  size?: number;
}

function Icon({
  id,
  strokeWidth = 16,
  size,
  width,
  height,
  ...otherProps
}: Props) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      stroke-width={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
