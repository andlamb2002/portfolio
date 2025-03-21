import PropTypes from "prop-types";

function ProjectCard({ title, techStack, description, imgSrc }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex">
            <img
                src={imgSrc}
                alt={title}
                className="w-1/3 h-auto object-cover rounded-lg"
            />
            <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{techStack}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
};

export default ProjectCard