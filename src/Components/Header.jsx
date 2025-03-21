import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="sticky top-0 w-full bg-gray-200 py-6">
            <div className="px-6 flex justify-between items-center">
                <div className="text-left">
                    <Link to="/" className="font-bold">
                        Logo
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/portfolio">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header