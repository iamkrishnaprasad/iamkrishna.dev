import { ImageProps, StaticImageData } from "next/image";

type childrenReactNode = { children: React.ReactNode };

export type RootLayoutProps = childrenReactNode;
export type ProvidersProps = childrenReactNode;

export type ImageWrapperProps = ImageProps & {
  srcForDarkMode?: string | StaticImageData;
};

export type TechnologyDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};
