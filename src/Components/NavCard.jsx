import PropTypes from "prop-types";

function NavCard({ title, link, img }) {
    return (
        <a
            href={link}
            className="w-40 h-32 bg-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-700"
        >
        <div className="w-16 h-16 bg-gray-400 rounded-md flex items-center justify-center">
            {img ? <img src={img} alt={title} className="w-full h-full rounded-md" /> : "IMG"}
        </div>
        <p className="mt-2 font-medium">{title}</p>
      </a>
    );
}

NavCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    img: PropTypes.string,
};
  
export default NavCard;