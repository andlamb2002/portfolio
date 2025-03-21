import ProjectCard from "../Components/ProjectCard";

function Portfolio() {

    const projects = [
        {
          title: "EG Trainer",
          techStack: "React, Tailwind, LocalStorage",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          imgSrc: "/images/eg-trainer.png",
        },
        {
          title: "Photo Share App",
          techStack: "MERN, Material UI",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          imgSrc: "/images/photo-share.png",
        },
      ];

    return (
        <section className="container mx-auto px-6 py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Portfolio</h2>
            <div className="grid gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio