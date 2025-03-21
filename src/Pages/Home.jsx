import NavCard from "../Components/NavCard";

function Home() {
    
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800">

            <div className="flex flex-row items-center w-full p-6">

                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-lg font-bold">
                    IMG
                </div>

                <div className="mt-0 ml-6 text-left">
                    <h1 className="text-3xl font-semibold">Hi, I&apos;m Andreas</h1>
                    <p className="mt-2 text-gray-600">
                        Welcome to my portfolio. Explore my work and get in touch!
                    </p>
                </div>
                
            </div>

            <div className="mt-8 flex flex-row gap-6 pb-6">
                <NavCard title="About" link="/about" img={null} />
                <NavCard title="Portfolio" link="/portfolio" img={null} />
                <NavCard title="Contact" link="/contact" img={null} />
            </div>
        </div>
    );
}

export default Home