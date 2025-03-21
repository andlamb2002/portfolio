import NavCard from "../Components/NavCard";
import { homeIntro, navLinks } from "../data/data";

function Home() {
    
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800">

            <div className="flex flex-row items-center w-full p-6">

                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-lg font-bold overflow-hidden">
                {homeIntro.img ? (
                    <img src={homeIntro.img} alt={homeIntro.name} className="w-full h-full object-cover" />
                ) : (
                    "IMG"
                )}
                </div>

                <div className="mt-0 ml-6 text-left">
                    <h1 className="text-3xl font-semibold">{homeIntro.greeting}</h1>
                    <p className="mt-2 text-gray-600">
                        {homeIntro.message}
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-row gap-6 pb-6">
                {navLinks.map((nav, index) => (
                    <NavCard key={index} title={nav.title} link={nav.link} img={nav.img} />
                ))}
            </div>
        </div>
    );
}

export default Home