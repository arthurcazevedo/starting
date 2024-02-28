export interface Props {
  label: string;
  details?: string;
  href: string;
}

const THEME = {
  "dark": "bg-bgImage text-[#113032]",
  "ligth": "bg-[#113032] text-[#02F67C]",
};

export default function Button(
  { label, details, href, theme }: Omit<Props, "@Page"> & { theme: "dark" | "ligth" },
) {
  return (
    <a
      class={`mt-auto rounded-full font-medium text-xl px-6 py-4 ${THEME[theme ?? "dark"]}`}
      href={href}
    >
      {label} <span class="text-sm">{details}</span>
    </a>
  );
}