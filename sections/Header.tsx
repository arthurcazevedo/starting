import HeaderIsland from "deco-sites/starting/islands/Header.tsx";

export interface Props {
  menuLinks: Array<{ label: string; href: string; targetBlank?: boolean }>;
  idiom?: { label: string; canShowIdiom?: boolean };
  pt: { label: string; url: string; selected?: boolean };
  eng: { label: string; url: string; selected?: boolean };
  login?: { label: string; url: string; canShowLogin?: boolean };
  sign: { label: string; url: string };
  pageInitial: string;
  mkt?: { label: string; url: string; selected?: boolean };
  dev?: { label: string; url: string; selected?: boolean };
  linkedinUrl?: string;
  gitUrl?: string;
  discordUrl?: string;
}

export default function Header({
  linkedinUrl = "https://www.linkedin.com/company/deco-cx/",
  gitUrl = "https://github.com/deco-cx",
  discordUrl = "https://discord.gg/YsGgt8EQCZ",
  ...rest
}: Props) {
  return (
    <HeaderIsland
      {...rest}
      linkedinUrl={linkedinUrl}
      gitUrl={gitUrl}
      discordUrl={discordUrl}
    />
  );
}
