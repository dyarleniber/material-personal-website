import defaultprofilepic from "../assets/images/defaultprofilepic.jfif";
import * as portfolioTypes from "../components/Cards/constants";

export const personalData = {
  name: "Dyarlen Iber",
  description:
    "Full-Stack Developer | PHP | Laravel | MySQL | JavaScript | Node.js | MongoDB | React | Go",
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
    icon: "home",
  },
  {
    to: "/portfolio",
    primary: "Portfolio",
    icon: "project-diagram",
  },
];

const frontEndPortfolio = [
  {
    id: 101,
    name: "New York Times movie reviews",
    description:
      "Application for search New York Times movie reviews and get movie critics using Javascript, React, Redux, React hooks, redux-saga and styled-components.",
    type: portfolioTypes.FRONTEND_TYPE,
    homepage: null,
    github: "https://github.com/dyarleniber/nyt-movie-reviews",
  },
  {
    id: 102,
    name: "Habit tracker front-end",
    description:
      "Habit tracker front-end system using Javascript, React, Redux, React hooks, redux-saga and styled-components.",
    type: portfolioTypes.FRONTEND_TYPE,
    homepage: null,
    github: "https://github.com/dyarleniber/habit-tracker-front-end",
  },
  {
    id: 103,
    name: "Smart brain",
    description: "Udemy Final Project.",
    type: portfolioTypes.FRONTEND_TYPE,
    homepage: null,
    github: "https://github.com/dyarleniber/smart-brain",
  },
  {
    id: 104,
    name: "To-do list",
    description: "Simple To-do list with React, Redux and Hooks.",
    type: portfolioTypes.FRONTEND_TYPE,
    homepage: null,
    github: "https://github.com/dyarleniber/react-to-do-list",
  },
  {
    id: 105,
    name: "Personal website",
    description: "My personal website.",
    type: portfolioTypes.FRONTEND_TYPE,
    homepage: "https://dyarleniber.github.io/personal-website/",
    github: "https://github.com/dyarleniber/personal-website",
  },
];

const backEndPortfolio = [
  {
    id: 201,
    name: "Habit tracker back-end",
    description:
      "Habit tracker back-end system using Javascript, Node.js, Express, JWT, MongoDB, Mongoose, Nodemailer, Handlebars, Redis, Winston and Jest with 100% code coverage in tests.",
    type: portfolioTypes.BACKEND_TYPE,
    homepage: null,
    github: "https://github.com/dyarleniber/habit-tracker-back-end",
  },
  {
    id: 202,
    name: "Payment API",
    description: "Payment gateway API.",
    type: portfolioTypes.BACKEND_TYPE,
    homepage: null,
    github: "https://github.com/dyarleniber/php-payment-api",
  },
  {
    id: 203,
    name: "Smart brain API",
    description: "Final project for Udemy course.",
    type: portfolioTypes.BACKEND_TYPE,
    homepage: null,
    github: "https://github.com/dyarleniber/smart-brain-api",
  },
  {
    id: 204,
    name: "PHP Docker environment",
    description: "PHP and MySQL environment with Docker and Docker Compose.",
    type: portfolioTypes.BACKEND_TYPE,
    homepage: null,
    github: "https://github.com/dyarleniber/docker-php",
  },
  {
    id: 205,
    name: "Awesome Fizzbuzz",
    description:
      "This project was developed applying the Chain of Responsibility Pattern and the Builder Pattern to develop FizzBuzz.",
    type: portfolioTypes.BACKEND_TYPE,
    homepage: null,
    github: "https://github.com/dyarleniber/awesome-fizzbuzz",
  },
];

export const portfolio = [...backEndPortfolio, ...frontEndPortfolio];
