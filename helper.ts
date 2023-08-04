import { Github, Twitter, Figma } from "lucide-react";

import LogoCSS from "/public/assets/images/logos/icon-css.svg";
import LogoCSSLight from "/public/assets/images/logos/icon-css-light.svg";
import LogoCypress from "/public/assets/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/assets/images/logos/icon-cypress-light.svg";
import LogoExpressJS from "/public/assets/images/logos/icon-express-js.svg";
import LogoExpressJSLight from "/public/assets/images/logos/icon-express-js-light.svg";
import LogoHTML from "/public/assets/images/logos/icon-html.svg";
import LogoHTMLLight from "/public/assets/images/logos/icon-html-light.svg";
import LogoFigma from "/public/assets/images/logos/icon-figma.svg";
import LogoGit from "/public/assets/images/logos/icon-git.svg";
import LogoJavascript from "/public/assets/images/logos/icon-javascript.svg";
import LogoMUI from "/public/assets/images/logos/icon-mui.svg";
import LogoMongoDB from "/public/assets/images/logos/icon-mongodb.svg";
import LogoNest from "/public/assets/images/logos/icon-nest.svg";
import LogoNextJS from "/public/assets/images/logos/icon-next-js.svg";
import LogoNodeJS from "/public/assets/images/logos/icon-node-js.svg";
import LogoPostgreSQL from "/public/assets/images/logos/icon-postgresql.svg";
import LogoReact from "/public/assets/images/logos/icon-react.svg";
import LogoReactPDF from "/public/assets/images/logos/icon-react-pdf.png";
import LogoReactTestingLibrary from "/public/assets/images/logos/icon-react-testing-library.svg";
import LogoSass from "/public/assets/images/logos/icon-sass.svg";
import LogoSocket from "/public/assets/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/assets/images/logos/icon-socket-light.svg";
import LogoStorybook from "/public/assets/images/logos/icon-storybook.svg";
import LogoStyledComponents from "/public/assets/images/logos/icon-styled-components.png";
import LogoTailwindcss from "/public/assets/images/logos/icon-tailwindcss.svg";
import LogoTypescript from "/public/assets/images/logos/icon-typescript.svg";

import { TechnologyDetails } from "./types";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiences", href: "#experiences" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const EXTERNAL_LINKS = {
  GITHUB: "",
  LINKEDIN: ""
};

export const TECHNOLOGIES: TechnologyDetails[] = [
  {
    label: "HTML",
    logo: LogoHTML,
    darkModeLogo: LogoHTMLLight,
    url: "https://html.spec.whatwg.org/"
  },
  {
    label: "CSS",
    logo: LogoCSS,
    darkModeLogo: LogoCSSLight,
    url: "https://www.w3.org/Style/CSS/Overview.en.html"
  },
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/"
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/"
  },
  {
    label: "Next.js",
    logo: LogoNextJS,
    url: "https://nextjs.org/"
  },
  {
    label: "Node.js",
    logo: LogoNodeJS,
    url: "https://nodejs.org/en"
  },
  {
    label: "Express.js",
    logo: LogoExpressJS,
    darkModeLogo: LogoExpressJSLight,
    url: "https://expressjs.com/"
  },
  // {
  //   label: "Nest.js",
  //   logo: LogoNest,
  //   url: "https://nestjs.com/"
  // },
  // {
  //   label: "Socket.io",
  //   logo: LogoSocket,
  //   darkModeLogo: LogoSocketLight,
  //   url: "https://socket.io/"
  // },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/"
  },
  // {
  //   label: "MongoDB",
  //   logo: LogoMongoDB,
  //   url: "https://www.mongodb.com/"
  // },
  // {
  //   label: "Sass/Scss",
  //   logo: LogoSass,
  //   url: "https://sass-lang.com/"
  // },
  {
    label: "Tailwind CSS",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/"
  },
  {
    label: "styled components",
    logo: LogoStyledComponents,
    url: "https://styled-components.com/"
  },
  {
    label: "Material UI",
    logo: LogoMUI,
    url: "https://mui.com/"
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/"
  },
  // {
  //   label: "Cypress",
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: "https://www.cypress.io/"
  // },
  // {
  //   label: "Storybook",
  //   logo: LogoStorybook,
  //   url: "https://storybook.js.org/"
  // },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/"
  },
  {
    label: "React PDF",
    logo: LogoReactPDF,
    url: "https://react-pdf.org/"
  },
  {
    label: "React Testing Library",
    logo: LogoReactTestingLibrary,
    url: "https://testing-library.com/docs/react-testing-library/intro/"
  }
];

// export const EXPERIENCES: ExperienceDetails[] = [
//   {
//     logo: LogoUpwork,
//     logoAlt: "Upwork logo",
//     position: "Independent Freelancer",
//     startDate: new Date(2021, 10),
//     currentlyWorkHere: true,
//     summary: [
//       "Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.",
//       "Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others."
//     ]
//   },
//   {
//     logo: LogoGreenApex,
//     darkModeLogo: LogoGreenApexLight,
//     logoAlt: "Greenapex logo",
//     position: "Team Lead",
//     startDate: new Date(2017, 6),
//     endDate: new Date(2021, 9),
//     summary: [
//       "Acted as team lead in different projects.",
//       "Brainstormed new ideas & gathered requirements for internal projects.",
//       "Designed architecture of different projects (frontend + backend).",
//       "Worked on enterprise-level projects for a variety of clients.",
//       "Handled sprint planning & task distribution."
//     ]
//   },
//   {
//     logo: LogoDotnpixel,
//     darkModeLogo: LogoDotnpixelLight,
//     logoAlt: "Dotnpixel logo",
//     position: "Full Stack Developer",
//     startDate: new Date(2015, 11),
//     endDate: new Date(2017, 4),
//     summary: ["Worked as a full stack developer (React / Laravel)."]
//   }
// ];

// export const PROJECTS: ProjectDetails[] = [
//   {
//     name: "Wingie",
//     description:
//       "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
//     url: "https://www.wingie.com",
//     previewImage: ProjectWingie,
//     technologies: [
//       "React",
//       "Typescript",
//       "React Bootstrap",
//       "Firebase",
//       "Express.js",
//       "PostgreSQL",
//       "Styled Components",
//       "Redux"
//     ]
//   },
//   {
//     name: "Fiskil",
//     description:
//       "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
//     url: "https://fiskil.com.au",
//     previewImage: ProjectFiskil,
//     technologies: [
//       "React",
//       "Next.js",
//       "Typescript",
//       "Tailwindcss",
//       "Material UI",
//       "Redux Toolkit",
//       "React Query",
//       "Express.js",
//       "PostgreSQL",
//       "Firebase",
//       "AWS Amplify",
//       "Cypress",
//       "Storybook"
//     ]
//   },
//   {
//     name: "Pepehousing",
//     description:
//       "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
//     url: "https://pepehousing.com",
//     previewImage: ProjectPepehousing,
//     technologies: [
//       "React",
//       "Next.js",
//       "Typescript",
//       "Tailwindcss",
//       "Redux Toolkit",
//       "React Query",
//       "Storybook"
//     ]
//   }
// ];
