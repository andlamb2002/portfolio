import PropTypes from "prop-types";

const AboutSection = ({ img, alt, text }) => {
    return (
        <div className="flex flex-col lg:flex-row items-start">
            <img src={img} alt={alt} className="lg:mt-2 w-48 h-64 flex-shrink-0 object-cover rounded-md shadow-md"/>
            <article>
                <p className="mt-4 lg:mt-2 lg:ml-4 text-lg">{text}</p>
            </article>
        </div>
    );
};

AboutSection.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default AboutSection;
