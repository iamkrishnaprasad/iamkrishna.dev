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
import LogoRedux from "/public/assets/images/logos/icon-redux.svg";
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

import ProjectPortfolio from "public/assets/images/projects/project-portfolio.jpg";

import {
  ContactDetails,
  EducationDetails,
  ProjectDetails,
  TechnologyDetails,
  WorkDetails
} from "./types";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import { LuPhone as PhoneIcon, LuMail as MailIcon } from "react-icons/lu";
import { SlLocationPin as LocationDotIcon } from "react-icons/sl";
import React from "react";

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
    label: "Redux",
    logo: LogoRedux,
    url: "https://redux.js.org/"
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
    startDate: new Date(2022, 4, 2),
    summary: ["Working as Consulting Software Engineer for Telus."]
  },
  {
    type: "work",
    name: "Telus",
    logo: LogoTelus,
    url: "",
    position: "Software Engineer (Consultant)",
    isCurrentlyWorkHere: true,
    startDate: new Date(2021, 6, 12),
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
    startDate: new Date(2021, 4, 11),
    endDate: new Date(2022, 3, 30),
    summary: ["Worked as Consulting Software Engineer for Telus."]
  },
  {
    type: "work",
    name: "Renaissance Technologies Pvt. Ltd.",
    logo: LogoRenaissance,
    url: "",
    startDate: new Date(2019, 3, 1),
    endDate: new Date(2021, 3, 30),
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

export const PROJECTS: ProjectDetails[] = [
  {
    name: "My Portfolio Website",
    description:
      "A platform to showcase my skills, experience, and collections of projects. It provides visitors with a comprehensive view of my professional abilities and past work.",
    // url: "https://iamkrishna.dev",
    sourceCode: "https://github.com/iamkrishnaprasad/iamkrishna.dev",
    previewImage: ProjectPortfolio,
    technologies: [
      {
        label: "Next.js",
        logo: LogoNextJS,
        url: "https://nextjs.org/"
      },
      {
        label: "Typescript",
        logo: LogoTypescript,
        url: "https://www.typescriptlang.org/"
      },
      {
        label: "Tailwind CSS",
        logo: LogoTailwindcss,
        url: "https://tailwindcss.com/"
      }
    ]
  }
];

export const renderIcon = (type: string, size: number = 36) => {
  switch (type.toLowerCase()) {
    case "call":
      return React.createElement(PhoneIcon, { size });
    case "whatsapp":
      return React.createElement(WhatsappIcon, { size });
    case "email":
      return React.createElement(MailIcon, { size });
    case "map":
      return React.createElement(LocationDotIcon, { size });
    default:
      return null;
  }
};

export const CONTACT_DETAILS: ContactDetails[] = [
  {
    type: "Call",
    label: "+91 8848 333 943",
    value: "tel:+918848333943",
    isExternalLink: false
  },
  {
    type: "WhatsApp",
    label: "+91 8848 333 943",
    value: "http://wa.me/918848333943?text=Hi",
    isExternalLink: true
  },
  {
    type: "Email",
    label: "contactme@iamkrishna.dev",
    value: "mailto:contactme@iamkrishna.dev",
    isExternalLink: false
  },
  {
    type: "Map",
    label: "Malappuram, Kerala",
    value: "https://maps.app.goo.gl/7UpS5zqHLURNqXLq7",
    isExternalLink: true
  }
];
