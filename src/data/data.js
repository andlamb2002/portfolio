import headshot from "../assets/headshot.png";
import grad from "../assets/grad.jpg";
import tkd from "../assets/tkd.jpg";
import cube from "../assets/cube.jpg";

import trainer from "../assets/trainer.png";
import photo from "../assets/photo.png";
import budget from "../assets/budget.png";
import nwp from "../assets/nwp.png";
import api from "../assets/api.png";
import imgalg from "../assets/imgalg.png";
import eg from "../assets/eg.png";
import quiz from "../assets/quiz.png";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaUserCircle, FaFolderOpen, FaEnvelope } from "react-icons/fa";

export const siteInfo = {
    name: "Andreas Lambropoulos",
    resumeUrl: "https://drive.google.com/file/d/1DZgYVOcA3FBJTEnQZHOk-vfD24gebJgt/view?usp=sharing",
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
            My name is Andreas Lambropoulos and I am a Master of Science in Computer Science graduate with a passion for software engineering and a specialty in full-stack web development. 
            I am currently seeking entry-level roles in software engineering, full-stack development, web development, and other CS-related fields. 
            I have been working as a Taekwondo instructor for 7 years where I have developed strong skills in leadership, communication, and team management. 
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
        img: grad, 
        alt: "Graduation",
        text: `
            I recently earned my Master's degree in Computer Science from UNC Charlotte in May 2025, graduating with a 4.00 GPA.
            I also earned my bachelor's degree in May 2024 with a 3.96 GPA and was named to the Chancellor's List for five consecutive semesters from Fall 2021 to Fall 2023. 
            Through academic coursework and personal projects, I have built responsive, scalable web applications using React.js and Express.js, while working in Agile team environments. 
            I am open to internships and full-time job opportunities where I can contribute in a team towards building applications that aren’t just functional, but intuitive and maintainable.
        `,
    },
    {
        img: tkd,
        alt: "Taekwondo",
        text: `
            I have achieved a 4th degree black belt in Taekwondo after dedicating my life to it since I was 5 years old. 
            Taekwondo helped me develop not only my physical skills, but also mental qualities like respect, discipline, focus, and perseverance. 
            I've been working part-time as an instructor since I was 15 years old, leading classes of students, teaching proper Taekwondo technique, and serving as a role model. 
            Instructing Taekwondo has strengthened my leadership, responsibility, public speaking, and confidence, which are skills that apply to the real world. 
            Taekwondo has shaped who I am today, and I know the lessons I learned will continue to guide me in the future.
        `,
    },
    {
        img: cube,
        alt: "Rubik's Cube",
        text: `
                I've been a competitive speedcuber since 2017, a sport where twisty puzzles are solved as fast as possible. 
                My main event is solving the 3x3x3 Rubik's Cube one-handed where I am ranked top 100 globally with a 7.32-second single solve and 10.35-second average of 5 solves.
                I am the 4-time Southeast US Champion in this event, as well as a finalist at the 2025 World Championship, 2024 North American Championship, and 2023 US National Championship. 
                I am also passionate about giving back to the community by volunteering at over 50 competitions and co-organizing 3 competitions at UNC Charlotte. 
                My ultimate goal is to achieve an official sub-10 second one-handed average of 5 solves.        
            `,
    },
];

export const portfolio = [
    {
        title: "Rubik's Cube Algorithm Trainer",
        techStack: "React, TypeScript, Tailwind, LocalStorage",
        description: `
            Speedcubing training platform with an integrated timer, performance tracking, algorithm case selection, and recap mode for structured practice.
            Features responsive design, light/dark mode, and clear interaction feedback.
        `,
        img: trainer,
        demoLink: "https://trainer.andrelambro.com/",
        githubLink: "https://github.com/andlamb2002/lambro-trainer",
    },
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
        title: "Budget App",
        techStack: "Express, React, Node, Firebase, Chart.js, Bootstrap",
        description: `
            Full-stack budget tracking application with secure authentication and real-time data management. 
            Includes budget and expense management features complemented with data visualizations.
        `,
        img: budget,
        githubLink: "https://github.com/andlamb2002/budget-app",
    },
    {
        title: "Next Word Predictor",
        techStack: "PyTorch, NumPy, matplotlib, pandas, Pickle, Google Colab, Streamlit",
        description: `
            Bidirectional LSTM model trained on AMALGUM text data to predict the next word of a phrase.
            Built with PyTorch in Google Colab and deployed with Streamlit.
        `,
        img: nwp,
        demoLink: "https://andlamb2002-5154-ml-project-nwp-app-jykkoj.streamlit.app/",
        githubLink: "https://github.com/andlamb2002/5154-ml-project",
    },
    {
        title: "Azure OCR API Wrapper",
        techStack: "Azure Computer Vision, Express, Node, Swagger UI, Postman",
        description: `
            API Wrapper for Azure Optical Character Recognition API, allowing users to extract text from images.
            Thoroughly documented with Swagger UI for easy integration and testing.
        `,
        img: api,
        githubLink: "https://github.com/andlamb2002/ITIS-6177-API-Wrapper",
    },
    {
        title: "Alg to Img",
        techStack: "VisualCube API, TypeScript, React, Express, Node, JSZip, Pico CSS",
        description: `
            A web app that converts Rubik's Cube algorithms into visual cube images using the VisualCube API.
        `,
        img: imgalg,
        demoLink: "https://algtoimg.andrelambro.com/",
        githubLink: "https://github.com/andlamb2002/alg-to-img",
    },
    {
        title: "EG Trainer",
        techStack: "React, LocalStorage, VisualCube API, Tailwind",
        description: `
            2x2x2 Rubik's Cube training app for the EG method with interactive timer, performance tracking, and personalized training presets.
        `,
        img: eg,
        demoLink: "https://andlamb2002.github.io/eg-trainer/",
        githubLink: "https://github.com/andlamb2002/eg-trainer",
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
];