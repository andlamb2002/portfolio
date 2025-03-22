import PropTypes from "prop-types";

const AboutSection = ({ img, text }) => {
    return (
        <div className="flex items-start">
            <img src={img} alt="about" className="w-48 h-64 flex-shrink-0 object-cover rounded-md" />
            <div>
                <p className="ml-4 text-lg">{text}</p>
            </div>
        </div>
    );
};

AboutSection.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default AboutSection;
