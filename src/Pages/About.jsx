import AboutSection from "../Components/AboutSection";

function About() {
    
    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-6">
                <AboutSection 
                    img={null} 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <AboutSection 
                    img={null} 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."                />
                <AboutSection 
                    img={null} 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."                />
            </div>
        </div>
    );
}

export default About