import PropTypes from "prop-types";

const AboutSection = ({ img, text }) => {
    return (
        <div className="flex gap-4 items-start">
            <img src={img} className="w-24 h-24 object-cover rounded-md" />
            <div>
                <p className="text-gray-700">{text}</p>
            </div>
        </div>
    );
};

AboutSection.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default AboutSection;
