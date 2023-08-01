import { Github, Twitter, Figma } from "lucide-react";

import LogoCypress from "/public/assets/svg/logos/icon-cypress.svg";
import LogoCypressLight from "/public/assets/svg/logos/icon-cypress-light.svg";
import LogoExpress from "/public/assets/svg/logos/icon-express.svg";
import LogoExpressLight from "/public/assets/svg/logos/icon-express-light.svg";
import LogoFigma from "/public/assets/svg/logos/icon-figma.svg";
import LogoGit from "/public/assets/svg/logos/icon-git.svg";
import LogoJavascript from "/public/assets/svg/logos/icon-javascript.svg";
import LogoMongoDB from "/public/assets/svg/logos/icon-mongodb.svg";
import LogoNest from "/public/assets/svg/logos/icon-nest.svg";
import LogoNextjs from "/public/assets/svg/logos/icon-nextjs.svg";
import LogoNodejs from "/public/assets/svg/logos/icon-nodejs.svg";
import LogoPostgreSQL from "/public/assets/svg/logos/icon-postgresql.svg";
import LogoReact from "/public/assets/svg/logos/icon-react.svg";
import LogoSass from "/public/assets/svg/logos/icon-sass.svg";
import LogoSocket from "/public/assets/svg/logos/icon-socket.svg";
import LogoSocketLight from "/public/assets/svg/logos/icon-socket-light.svg";
import LogoStorybook from "/public/assets/svg/logos/icon-storybook.svg";
import LogoTailwindcss from "/public/assets/svg/logos/icon-tailwindcss.svg";
import LogoTypescript from "/public/assets/svg/logos/icon-typescript.svg";

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

// export const TECHNOLOGIES: TechDetails[] = [
//   {
//     label: "Javascript",
//     logo: LogoJavascript,
//     url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
//   },
//   {
//     label: "Typescript",
//     logo: LogoTypescript,
//     url: "https://www.typescriptlang.org/"
//   },
//   {
//     label: "React",
//     logo: LogoReact,
//     url: "https://react.dev/"
//   },
//   {
//     label: "Next.js",
//     logo: LogoNextjs,
//     url: "https://nextjs.org/"
//   },
//   {
//     label: "Node.js",
//     logo: LogoNodejs,
//     url: "https://nodejs.org/en"
//   },
//   {
//     label: "Express.js",
//     logo: LogoExpress,
//     darkModeLogo: LogoExpressLight,
//     url: "https://expressjs.com/"
//   },
//   // {
//   //   label: "Nest.js",
//   //   logo: LogoNest,
//   //   url: "https://nestjs.com/"
//   // },
//   // {
//   //   label: "Socket.io",
//   //   logo: LogoSocket,
//   //   darkModeLogo: LogoSocketLight,
//   //   url: "https://socket.io/"
//   // },
//   {
//     label: "PostgreSQL",
//     logo: LogoPostgreSQL,
//     url: "https://www.postgresql.org/"
//   },
//   // {
//   //   label: "MongoDB",
//   //   logo: LogoMongoDB,
//   //   url: "https://www.mongodb.com/"
//   // },
//   {
//     label: "Sass/Scss",
//     logo: LogoSass,
//     url: "https://sass-lang.com/"
//   },
//   {
//     label: "Tailwindcss",
//     logo: LogoTailwindcss,
//     url: "https://tailwindcss.com/"
//   },
//   {
//     label: "Figma",
//     logo: LogoFigma,
//     url: "https://www.figma.com/"
//   },
//   // {
//   //   label: "Cypress",
//   //   logo: LogoCypress,
//   //   darkModeLogo: LogoCypressLight,
//   //   url: "https://www.cypress.io/"
//   // },
//   {
//     label: "Storybook",
//     logo: LogoStorybook,
//     url: "https://storybook.js.org/"
//   },
//   {
//     label: "Git",
//     logo: LogoGit,
//     url: "https://git-scm.com/"
//   },
//   {
//     label: "React PDF",
//     logo: "",
//     url: "https://react-pdf.org/"
//   },
//   {
//     label: "React Testing Library",
//     logo: "",
//     url: "https://testing-library.com/"
//   }
// ];

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
