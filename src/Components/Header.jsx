import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="sticky top-0 w-full bg-secondary">
            <div className="flex justify-between items-center w-4/5 mx-auto p-8">
                <Link to="/" className="text-4xl font-bold hover:underline hover:text-textHover pr-16"> Andreas Lambropoulos </Link>
                <nav>
                    <ul className="flex gap-x-8 text-xl">
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