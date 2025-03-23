import NavCard from "../Components/NavCard";
import { homeIntro, navLinks } from "../data/data";

function Home() {
    
    return (
        <div className="flex flex-col items-center justify-center py-8 gap-y-8">

            <div className="flex flex-col md:flex-row items-center w-full">

                <div className="w-48 h-48 flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={homeIntro.img} alt="Headshot" className="w-full h-full object-cover" />
                </div>

                <div className="text-left md:ml-8">
                    <h1 className="text-4xl font-bold mt-4 md:mt-0">{homeIntro.greeting}</h1>
                    <p className="text-lg mt-4">
                        {homeIntro.intro}
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-8">
                {navLinks.map((nav, index) => (
                    <NavCard key={index} title={nav.title} link={nav.link} icon={nav.icon} />
                ))}
            </div>
        </div>
    );
}

export default Home