import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {

    return (
        <div className="bg-secondary">
            <div className="flex flex-col items-center p-4">

                <div>Built with React by Andreas Lambropoulos</div>

                <ul className="flex text-4xl gap-x-6 mt-2">
                    <li><a href="https://github.com/andlamb2002" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-textHover">
                        <FaGithub />
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/andreas-k-lambropoulos/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-textHover">
                        <FaLinkedin />
                    </a></li>
                    <li><a href="https://www.youtube.com/@andrelambro" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-textHover">
                        <FaYoutube />
                    </a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer