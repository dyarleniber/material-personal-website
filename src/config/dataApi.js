import defaultprofilepic from "../assets/images/defaultprofilepic.jfif";
import * as portfolioTypes from "../components/Cards/constants";

export const personalData = {
  greeting: "Hi, I'm",
  name: "Dyarlen Iber",
  description:
    "I'm a Full-Stack developer with professional experience working with PHP, Laravel, JavaScript, Node.js, SQL, React and Go. Take a look at my work or get in touch!",
  email: "dyarlen1@gmail.com",
  profilePicture: defaultprofilepic,
  socialMedias: [
    {
      name: "github",
      url: "https://github.com/dyarleniber",
    },
    {
      name: "linkedin",
      url: "https://ie.linkedin.com/in/dyarleniber",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/dyarleniber/",
    },
    {
      name: "dev",
      url: "https://dev.to/dyarleniber",
    },
  ],
};

export const menuItems = [
  {
    to: "/",
    primary: "Home",
  },
  {
    to: "/portfolio",
    primary: "Portfolio",
  },
];

export const portfolioData = {
  title: "Portfolio",
  description:
    "All my projects are covered by automated tests and deployed on platforms such as GitHub Pages or Netlify. For more details about the source code, automated tests, CI/CD workflow and technologies used, please visit the github page of each project.",
};

const frontEndPortfolio = [
  {
    id: 101,
    name: "Material-UI Personal website",
    description:
      "💻 Personal website using JavaScript, React, Hooks, Material-UI, Jest and Enzyme.",
    type: portfolioTypes.FRONTEND_TYPE,
    technologies: ["JavaScript", "React", "Hooks", "Material-UI", "Jest", "Enzyme"],
    homepage: "https://dyarleniber.github.io/material-personal-website/",
    github: "https://github.com/dyarleniber/material-personal-website",
  },
  {
    id: 102,
    name: "New York Times movie reviews",
    description:
      "🎥 Application for search New York Times movie reviews and get movie critics using JavaScript, React, Redux, Hooks, redux-saga, styled-components and Jest.",
    type: portfolioTypes.FRONTEND_TYPE,
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Hooks",
      "redux-saga",
      "styled-components",
      "Jest",
    ],
    homepage: "https://dyarleniber.github.io/nyt-movie-reviews/",
    github: "https://github.com/dyarleniber/nyt-movie-reviews",
  },
  {
    id: 104,
    name: "React to-do list",
    description:
      "📋 to-do list using JavaScript, React, Redux, Hooks, Bootstrap and Jest.",
    type: portfolioTypes.FRONTEND_TYPE,
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Hooks",
      "Bootstrap",
      "Jest",
    ],
    homepage: "https://dyarleniber.github.io/react-to-do-list/",
    github: "https://github.com/dyarleniber/react-to-do-list",
  },
];

const backEndPortfolio = [
  {
    id: 203,
    name: "Laravel Docker environment",
    description: "PHP development environment with PHP-FPM, Nginx and MySQL to run Laravel applications using Docker and Docker Compose.",
    type: portfolioTypes.BACKEND_TYPE,
    technologies: ["PHP", "PHP-FPM", "Nginx", "MySQL", "Laravel", "Docker", "Docker Compose"],
    homepage: null,
    github: "https://github.com/dyarleniber/laravel-docker",
  },
  {
    id: 206,
    name: "Laravel 7 to-do list",
    description:
      "📋 to-do list with authentication using Laravel 7 framework applying feature tests.",
    type: portfolioTypes.BACKEND_TYPE,
    technologies: ["PHP", "Laravel", "MySQL", "PHPUnit", "Docker", "Docker Compose"],
    homepage: null,
    github: "https://github.com/dyarleniber/laravel7-to-do-list",
  },
];

export const portfolio = [...backEndPortfolio, ...frontEndPortfolio];
