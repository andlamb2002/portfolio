import NavCard from "../Components/NavCard";
import { homeIntro, navLinks } from "../data/data";

function Home() {
    
    return (
        <div className="flex flex-col items-center justify-center py-8 gap-y-8">

            <section className="flex flex-col lg:flex-row items-center w-full">

                <div className="w-48 h-48 flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden shadow-xl">
                    <img src={homeIntro.img} alt={homeIntro.alt} className="w-full h-full object-cover"/>
                </div>

                <article className="lg:ml-8">
                    <h1 className="text-4xl font-bold mt-4 lg:mt-0 text-center lg:text-left">{homeIntro.greeting}</h1>
                    <p className="text-lg text-left mt-4">
                        {homeIntro.intro}
                    </p>
                </article>
            </section>

            <nav className="flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 sm:gap-x-8">
                {navLinks.map((nav, index) => (
                    <NavCard key={index} title={nav.title} link={nav.link} icon={nav.icon} external={nav.external} />
                ))}
            </nav>
        </div>
    );
}

export default Home