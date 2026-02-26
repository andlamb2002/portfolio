import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function NavCard({ title, link, icon: Icon, external = false }) {

    const className =
        "w-40 h-40 bg-button rounded-lg flex flex-col items-center justify-center " +
        "hover:bg-buttonHover transition-colors";

    const content = (
        <>
            <div className="flex items-center justify-center text-8xl">
                <Icon aria-hidden="true" />
            </div>
            <p className="text-xl font-semibold mt-2">{title}</p>
        </>
    );

    if (external) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                aria-label={title}
            >
                {content}
            </a>
        );
    }

    return (
        <Link to={link} className={className} aria-label={title}>
            {content}
        </Link>
    );
}

NavCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.elementType, 
    external: PropTypes.bool,
};

export default NavCard;