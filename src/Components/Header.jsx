import { Link } from 'react-router-dom';
import { siteInfo } from '../data/data';
import { FaExternalLinkAlt } from "react-icons/fa";

function Header() {
    return (
        <header className="w-full bg-secondary">
            <div className="flex flex-col md:flex-row justify-between items-center w-4/5 mx-auto p-8 text-center md:text-left">
                <Link to="/" className="text-4xl font-bold hover:underline hover:text-textHover md:pr-16">{siteInfo.name}</Link>
                <nav>
                    <ul className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 gap-x-8 text-xl mt-4 md:mt-0">
                        <li><Link to="/about" className="hover:underline hover:text-textHover"> About </Link></li>
                        <li><Link to="/portfolio" className="hover:underline hover:text-textHover"> Portfolio </Link></li>
                        <li>
                            <a
                                href={siteInfo.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:underline hover:text-textHover"
                            >
                                Resume <FaExternalLinkAlt className="inline-block text-sm" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header