import { socialLinks } from "../data/data";

function Footer() {
    return (
        <div className="bg-secondary">
            <div className="flex flex-col items-center p-4">
                <div>Built with React by Andreas Lambropoulos</div>
                <ul className="flex text-4xl gap-x-6 mt-2">
                {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                    <li key={index}>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-textHover"
                            aria-label={link.label}
                        >
                        <Icon />
                        </a>
                    </li>
                    );
                })}
                </ul>
            </div>
        </div>
    );
}

export default Footer;