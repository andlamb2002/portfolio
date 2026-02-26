import { socialLinks } from "../data/data";

function Footer() {
    return (
        <footer className="bg-secondary">
            <div className="flex flex-col items-center p-4">
                <p className="font-semibold">Connect with me</p>
                <ul className="flex text-4xl gap-x-6 mt-2">
                {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isMail = link.url.startsWith("mailto:");
                    return (
                    <li key={index}>
                        <a
                            href={link.url}
                            {...(!isMail
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
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
        </footer>
    );
}

export default Footer;