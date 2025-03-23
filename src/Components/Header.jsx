import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="w-full bg-secondary">
            <div className="flex flex-col md:flex-row justify-between items-center w-4/5 mx-auto p-8 text-center md:text-left">
                <Link to="/" className="text-4xl font-bold hover:underline hover:text-textHover md:pr-16"> Andreas Lambropoulos </Link>
                <nav>
                    <ul className="flex flex-col md:flex-row gap-x-8 text-xl mt-4 md:mt-0">
                        <li><Link to="/about" className="hover:underline hover:text-textHover"> About </Link></li>
                        <li><Link to="/portfolio" className="hover:underline hover:text-textHover"> Portfolio </Link></li>
                        <li><Link to="/contact" className="hover:underline hover:text-textHover"> Contact </Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header