import PropTypes from "prop-types";

function ProjectCard({ title, techStack, description, img, demoLink, githubLink }) {
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-[66%] max-w-[900px]">
                <div className="relative aspect-[16/9] rounded-md overflow-hidden">
                    <img
                        src={img}
                        alt={title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="flex-[1] flex flex-col mt-4 lg:mt-0 lg:ml-4">
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
