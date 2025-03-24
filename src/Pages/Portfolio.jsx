import ProjectCard from "../Components/ProjectCard";
import { portfolio } from "../data/data";

function Portfolio() {

    return (
        <section className="mx-auto py-8">
            <h2 className="text-4xl font-bold underline text-left">Portfolio</h2>
            <div className="flex flex-col gap-y-8 mt-8">
                {portfolio.map((project, index) => (
                    <ProjectCard key={index} {...project}/>
                ))}
            </div>
        </section>
    );
}

export default Portfolio