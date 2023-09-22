import { ImageProps, StaticImageData } from "next/image";

type childrenReactNode = { children: React.ReactNode };

export type RootLayoutProps = childrenReactNode;
export type ProvidersProps = childrenReactNode;

export type ImageWrapperProps = ImageProps & {
  srcForDarkMode?: string | StaticImageData;
};

export type Section = { label: string; id: string; hideNav?: boolean; isInActive?: boolean };

export type TechnologyDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceType = "work" | "education";

type ExperienceDetails = {
  type: ExperienceType;
  name: string;
  logo: string | StaticImageData;
  url?: string;
  startDate: Date;
  endDate?: Date;
  summary?: string[];
};

export type WorkDetails = ExperienceDetails & {
  type: "work";
  position: string;
  isCurrentlyWorkHere?: boolean;
};

export type EducationDetails = ExperienceDetails & {
  type: "education";
  degree: string;
  areaOfStudy?: string;
  grade?: string;
  isCurrentlyStudyingHere?: boolean;
};

export type ContactDetails = {
  type: string;
  label: string;
  value: string;
  icon?: string | StaticImageData | React.ReactElement;
  isExternalLink?: boolean;
};
