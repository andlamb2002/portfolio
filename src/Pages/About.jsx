import AboutSection from "../Components/AboutSection";
import { aboutSections } from "../data/data";

function About() {
    
    return (
        <section className="mx-auto py-8">
            <h2 className="text-4xl font-bold underline text-left">About Me</h2>
            <div className="flex flex-col gap-y-8 mt-8">
                {aboutSections.map((section, index) => (
                    <AboutSection key={index} img={section.img} alt={section.alt} text={section.text}/>
                ))}
            </div>
        </section>
    );
}

export default About