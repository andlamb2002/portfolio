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

export const siteInfo = {
    name: "Andreas Lambropoulos",
    resumeUrl: "https://drive.google.com/file/d/1u_JTdNohnX34XSf-Km9_u-dn3NeH6lqv/view?usp=sharing",
  };

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
    intro: `
            My name is Andreas Lambropoulos and I am a graduate student in Computer Science with a passion for software engineering and a specialty in full-stack development. 
            I am open to internships and full-time job opportunities in software engineering, full-stack development, and other CS-related fields. 
            I have been working part-time as a Taekwondo instructor for over 6 years where I have developed strong leadership and teamwork skills. 
        `,
    img: headshot, 
    alt: "Headshot of Andreas Lambropoulos",
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
        alt: "Headshot",
        text: `
            I am currently pursuing my master’s degree in Computer Science in my fourth year at UNC Charlotte, expected to graduate in May 2025 with a current GPA of 4.00. 
            I previously earned my bachelor’s degree in May 2024 with a 3.96 GPA and was named to the Chancellor’s List for five consecutive semesters from Fall 2021 to Fall 2023. 
            Through academic coursework and personal projects, I have gained hands-on experience building scalable web applications and working in Agile team environments. 
            I am open to internships and full-time job opportunities as I am ready to apply my technical skills to solve real-world problems in a team-oriented environment.
        `,
    },
    {
        img: tkd,
        alt: "Taekwondo",
        text: `
            I have achieved a 4th degree black belt in Taekwondo after dedicating my life to it since I was 5 years old. 
            Taekwondo helped me develop not only my physical skills, but also mental qualities like respect, discipline, focus, and perseverance. 
            I’ve been working part-time as an instructor since I was 15 years old, leading classes of students, teaching proper Taekwondo technique, and serving as a role model. 
            Instructing Taekwondo has strengthened my leadership, responsibility, public speaking, and confidence, which are skills that apply to the real world. 
            Taekwondo has shaped who I am today, and I know the lessons I learned will continue to guide me in the future.
        `,
    },
    {
        img: cube,
        alt: "Rubik's Cube",
        text: `
                I’ve been a competitive speedcuber since 2017, a sport where twisty puzzles are solved as fast as possible. 
                My main event is solving the 3x3x3 Rubik’s Cube one-handed where I am ranked top 100 globally with a 7.32-second single solve and 10.49-second average of 5 solves. 
                I am the 3-time Southeast US Champion in this event, as well as a finalist at the 2024 North American Championship and 2023 US National Championship. 
                I am also passionate about giving back to the community by volunteering at over 50 competitions and co-organizing 3 competitions at UNC Charlotte. 
                My ultimate goal is to achieve an official sub-10 second one-handed average of 5 solves.        
            `,
    },
];

export const portfolio = [
    {
        title: "Photo Share App",
        techStack: "MongoDB, Express, React, Node, Material UI",
        description: `
            Responsive photo-sharing web application for graduate-level capstone project. 
            Led a team of five as Scrum Master, ensuring adherence to Agile Scrum practices.
        `,
        img: photo,
        demoLink: "https://drive.google.com/file/d/1g2qKqMux974YYkJSqXbhW8Oftaf5IzTy/view",
        githubLink: "https://github.com/andlamb2002/p5-group11",
    },
    {
        title: "EG Trainer",
        techStack: "React, LocalStorage, Tailwind",
        description: `
            2x2x2 Rubik’s Cube training app for the EG method with interactive timer, performance tracking, and personalized training presets.
        `,
        img: eg,
        demoLink: "https://andlamb2002.github.io/eg-trainer/",
        githubLink: "https://github.com/andlamb2002/eg-trainer",
    },
    {
        title: "Budget App",
        techStack: "MongoDB, Express, React, Node, Firebase, Chart.js, Bootstrap",
        description: `
            Full-stack budget tracking application with secure authentication and real-time data management. 
            Includes budget and expense management features complemented with data visualizations.
        `,
        img: budget,
        githubLink: "https://github.com/andlamb2002/budget-app",
    },
    {
        title: "Quiz App",
        techStack: "MongoDB, Express, React, Node, OpenAI API, Tailwind",
        description: `
            Quizlet clone with core flashcard-based functionalities and an additional AI-powered multiple choice quiz mode.
        `,
        img: quiz,
        githubLink: "https://github.com/andlamb2002/quiz-app",
    },
    {
        title: "Weather App",
        techStack: "React, Node, OpenWeatherMap API, Google Places API, Tailwind",
        description: `
            Weather app with an auto-suggest search bar, allowing the user to look up forecasts for any city in the world.
        `,
        img: weather,
        githubLink: "https://github.com/andlamb2002/weather-app",
    },
    {
        title: "Pokemon App",
        techStack: "React, PokeAPI, Tailwind",
        description: `
            Interactive Pokemon search application with sorting and filtering, as well as detailed Pokemon stats lookup.
        `,
        img: poke,
        githubLink: "https://github.com/andlamb2002/pokemon-app",
    },
];