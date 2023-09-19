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
import LogoJest from "/public/assets/images/logos/icon-jest.svg";
import LogoMUI from "/public/assets/images/logos/icon-mui.svg";
import LogoMongoDB from "/public/assets/images/logos/icon-mongodb.svg";
import LogoNest from "/public/assets/images/logos/icon-nest.svg";
import LogoNextJS from "/public/assets/images/logos/icon-next-js.svg";
import LogoNodeJS from "/public/assets/images/logos/icon-node-js.svg";
import LogoPostgreSQL from "/public/assets/images/logos/icon-postgresql.svg";
import LogoReact from "/public/assets/images/logos/icon-react.svg";
import LogoReactPDF from "/public/assets/images/logos/icon-react-pdf.png";
import LogoReactTestingLibrary from "/public/assets/images/logos/icon-react-testing-library.svg";
import LogoRedis from "/public/assets/images/logos/icon-redis.svg";
import LogoSass from "/public/assets/images/logos/icon-sass.svg";
import LogoSocket from "/public/assets/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/assets/images/logos/icon-socket-light.svg";
import LogoStorybook from "/public/assets/images/logos/icon-storybook.svg";
import LogoStyledComponents from "/public/assets/images/logos/icon-styled-components.png";
import LogoTailwindcss from "/public/assets/images/logos/icon-tailwindcss.svg";
import LogoTypescript from "/public/assets/images/logos/icon-typescript.svg";

import LogoBigon from "public/assets/images/organizations/logo-bigon.png";
import LogoTelus from "public/assets/images/organizations/logo-telus.svg";
import LogoFork from "public/assets/images/organizations/logo-fork.png";
import LogoRenaissance from "public/assets/images/organizations/logo-renaissance.jpg";
import LogoSMVIT from "public/assets/images/institutes/logo-smvit.png";

import { EducationDetails, TechnologyDetails, WorkDetails } from "./types";

export const SECTIONS_AND_NAV_LINKS = [
  { label: "Home", id: "hero", hideNav: true, isInActive: false },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experiences", id: "experiences" },
  { label: "Projects", id: "projects" },
  { label: "Contact Me", id: "contactMe" }
];

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/iamkrishnaprasad",
  LINKEDIN: "https://www.linkedin.com/in/iamkrishnaprasad"
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
    url: "https://www.w3.org/Style/CSS/"
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
    url: "https://nodejs.org/"
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
  {
    label: "Redis",
    logo: LogoRedis,
    url: "https://redis.io/"
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
    label: "Jest",
    logo: LogoJest,
    url: "https://jestjs.io/"
  },
  {
    label: "React Testing Library",
    logo: LogoReactTestingLibrary,
    url: "https://testing-library.com/docs/react-testing-library/intro/"
  }
];

export const EXPERIENCES: (WorkDetails | EducationDetails)[] = [
  {
    type: "work",
    name: "Bigon IT Consulting Pvt. Ltd.",
    logo: LogoBigon,
    url: "",
    position: "Software Engineer",
    isCurrentlyWorkHere: true,
    startDate: new Date(2022, 4),
    summary: ["Working as Consulting Software Engineer for Telus."]
  },
  {
    type: "work",
    name: "Telus",
    logo: LogoTelus,
    url: "",
    position: "Software Engineer (Consultant)",
    isCurrentlyWorkHere: true,
    startDate: new Date(2021, 6),
    summary: [
      "Worked on 'CASA Spring' - Project for Telus Digital.",
      "Worked on 'Multi Benefits Claim Management (MBCM)' - Project for Telus Health.",
      "Delivered performance-driven and user-centric websites that met all business requirements.",
      "Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements.",
      "Participated in requirements gathering to solidify prerequisites and determine best technical solution to meet business needs.",
      "Developed unit test cases for testing.",
      "Worked with a variety of technologies, including ReactJS, React Testing Library, Typescript, NodeJS, Express.js, styled components, Material UI, Redis, Redux, Figma, Storybook."
    ]
  },
  {
    type: "work",
    name: "Fork Technologies Pvt. Ltd.",
    logo: LogoFork,
    url: "",
    position: "Software Engineer",
    startDate: new Date(2021, 4),
    endDate: new Date(2022, 3),
    summary: ["Worked as Consulting Software Engineer for Telus."]
  },
  {
    type: "work",
    name: "Renaissance Technologies Pvt. Ltd.",
    logo: LogoRenaissance,
    url: "",
    startDate: new Date(2019, 3),
    endDate: new Date(2021, 3),
    position: "Associate Software Engineer",
    summary: [
      "Built graphical dashboard for Toyota to track their day-to-day web leads.",
      "Integrated Google maps API & Google analytics in Toyota website to render dealer's network & track website statistics.",
      "Adhered to SEO best practices while designing sites.",
      "Engaged with clients to plan and optimize site issues and queries.",
      "Built and styled new mobile-friendly websites, transitioning legacy presentations to simultaneous easy-to-use versions.",
      "Provided security maintenance and patching on website interface to maintain viability after launch.",
      "Worked with a variety of technologies, including HTML, CSS, Bootstrap, JavaScript, jQuery, ReactJS, HighCharts, MS SQL Server and Web API to develop web-application solutions."
    ]
  },
  {
    type: "education",
    name: "Sir M. Visvesvaraya Institute of Technology",
    logo: LogoSMVIT,
    url: "https://www.sirmvit.edu/",
    startDate: new Date(2014, 5),
    endDate: new Date(2017, 6),
    degree: "Masters in Computer Application (MCA)"
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
