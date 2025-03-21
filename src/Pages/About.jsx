import AboutSection from "../Components/AboutSection";
import { aboutSections } from "../data/data";

function About() {
    
    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-6">
                {aboutSections.map((section, index) => (
                    <AboutSection key={index} img={section.img} text={section.text} />
                ))}
            </div>
        </div>
    );
}

export default About