import ProjectCard from "../Components/ProjectCard";
import { portfolio } from "../data/data";

function Portfolio() {

    return (
        <section className="container mx-auto px-6 py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Portfolio</h2>
            <div className="grid gap-6">
                {portfolio.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio