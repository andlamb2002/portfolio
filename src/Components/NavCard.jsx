import PropTypes from "prop-types";

function NavCard({ title, link, icon: Icon }) {
    return (
        <a
            href={link}
            className="w-40 h-40 bg-button rounded-lg flex flex-col items-center justify-center hover:bg-buttonHover"
        >
            <div className="flex items-center justify-center text-8xl">
                <Icon aria-hidden="true"/>
            </div>
            <p className="text-xl font-semibold mt-2">{title}</p>
        </a>
    );
}

NavCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.elementType, 
};

export default NavCard;