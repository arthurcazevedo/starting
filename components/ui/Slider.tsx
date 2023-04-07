import { Children } from "preact/compat";
import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["ul"] & {
  snap?: string;
};

function Slider({
  children,
  snap = "snap-center",
  class: _class = "gap-6 scrollbar-none",
  ...props
}: Props) {
  return (
    <ul
      data-slider
      class={`grid grid-flow-col items-center overflow-x-auto overscroll-x-contain snap-x snap-mandatory ${_class}`}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <li class="min-w-[270px] max-w-[270px] min-h-[325px] max-h-[325px] w-full overflow-hidden">
          <button data-slider-item={index} data-dot={index} class={snap}>
            {child}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Slider;