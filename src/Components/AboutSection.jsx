import PropTypes from "prop-types";

const AboutSection = ({ img, text }) => {
    return (
        <div className="flex flex-col md:flex-row items-start">
            <img src={img} alt="about" className="w-48 h-64 flex-shrink-0 object-cover rounded-md" />
            <div>
                <p className="mt-4 md:mt-0 md:ml-4 text-lg">{text}</p>
            </div>
        </div>
    );
};

AboutSection.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default AboutSection;
