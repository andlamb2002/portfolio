import PropTypes from "prop-types";

function ProjectCard({ title, techStack, description, img, demoLink, githubLink }) {
    return (
        <div className="flex flex-col md:flex-row w-full">
            <img
                src={img}
                alt={title}
                className="w-2/3 object-cover rounded-md"
            />

            <div className="w-1/3 ml-4 flex flex-col">
                <div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-sm italic mb-4">{techStack}</p>
                <p className="text-lg">{description}</p>
                </div>
                {(demoLink || githubLink) && (
                    <div className="mt-4 flex gap-4">
                        {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-button hover:bg-buttonHover text-lg font-bold py-2 px-4 rounded"
                        >
                            Demo
                        </a>
                        )}
                        {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-button hover:bg-buttonHover text-lg font-bold py-2 px-4 rounded"
                        >
                            GitHub
                        </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  demoLink: PropTypes.string,
  githubLink: PropTypes.string,
};

export default ProjectCard;
