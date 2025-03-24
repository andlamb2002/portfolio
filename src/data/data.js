import headshot from "../assets/headshot.png";
import tkd from "../assets/tkd.jpg";
import cube from "../assets/cube.jpg";

import photo from "../assets/photo.png";
import eg from "../assets/eg.png";
import budget from "../assets/budget.png";
import quiz from "../assets/quiz.png";
import weather from "../assets/weather.png";
import poke from "../assets/poke.png";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaUserCircle, FaFolderOpen, FaEnvelope } from "react-icons/fa";

export const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/andlamb2002",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/andreas-k-lambropoulos/",
      label: "LinkedIn",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/@andrelambro",
      label: "YouTube",
    },
  ];

export const homeIntro = {
    greeting: "Welcome to My Personal Website!",
    intro: `I am a graduate student in Computer Science with a passion for software engineering and specializing in web application development. Through academic and personal projects, I have gained hands-on experience building scalable web applications and working in an Agile environment. My ultimate goal is to become a software engineer and contribute to innovative solutions as part of a collaborative team. Currently, I am seeking internship opportunities to gain experience in working on real-world projects. I have worked part-time as a Taekwondo instructor for over 6 years through which I have developed strong leadership and teamwork skills.`,
    img: headshot, 
  };

export const navLinks = [
    {
        title: "About",
        link: "/about",
        icon: FaUserCircle,
    },
    {
        title: "Portfolio",
        link: "/portfolio",
        icon: FaFolderOpen,
    },
    {
        title: "Contact",
        link: "/contact",
        icon: FaEnvelope,
    },
];

export const aboutSections = [
    {
        img: headshot, 
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        img: tkd,
        text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
        img: cube,
        text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
];

export const portfolio = [
    {
        title: "Photo Share App",
        techStack: "MongoDB, Express, React, Node, Material UI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: photo,
        demoLink: "https://drive.google.com/file/d/1g2qKqMux974YYkJSqXbhW8Oftaf5IzTy/view",
        githubLink: "https://github.com/andlamb2002/p5-group11",
    },
    {
        title: "EG Trainer",
        techStack: "React, LocalStorage, Tailwind",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: eg,
        demoLink: "https://andlamb2002.github.io/eg-trainer/",
        githubLink: "https://github.com/andlamb2002/eg-trainer",
    },
    {
        title: "Budget App",
        techStack: "MongoDB, Express, React, Node, Firebase, Bootstrap",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: budget,
        githubLink: "https://github.com/andlamb2002/budget-app",
    },
    {
        title: "Quiz App",
        techStack: "MongoDB, Express, React, Node, OpenAI API, Tailwind",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: quiz,
        githubLink: "https://github.com/andlamb2002/quiz-app",
    },
    {
        title: "Weather App",
        techStack: "React, Node, OpenWeatherMap API, Google Places API, Tailwind",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: weather,
        githubLink: "https://github.com/andlamb2002/weather-app",
    },
    {
        title: "Pokemon App",
        techStack: "React, PokeAPI, Tailwind",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: poke,
        githubLink: "https://github.com/andlamb2002/pokemon-app",
    },
];