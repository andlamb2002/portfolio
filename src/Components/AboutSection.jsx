import PropTypes from "prop-types";

const AboutSection = ({ img, alt, text }) => {
    return (
        <div className="flex flex-col md:flex-row items-start">
            <img src={img} alt={alt} className="w-48 h-64 flex-shrink-0 object-cover rounded-md"/>
            <article>
                <p className="mt-4 md:mt-0 md:ml-4 text-lg">{text}</p>
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
