import { useState } from "react";
import { FaLink } from "react-icons/fa";
const ProjectCard = ({ image, video, title, liveLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-800 text-white p-4 rounded-lg hover:rounded-none shadow-lg transition-all duration-200 transform hover:scale-105 max-w-sm sm:my-4 lg:my-8 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image/Video */}
      <div className="relative w-full h-56 rounded-lg overflow-hidden">
        {!isHovered ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition duration-500"
          />
        ) : (
          <video
            src={video}
            className="w-full h-full object-cover "
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-bold mt-4">{title}</h3>

      {/* Live Demo Button */}
      <div>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-customcolor text-black mt-4 py-2 px-4 rounded-lg font-semibold hover:bg-customcolor2 transition"
        >
          <FaLink className="mr-2" /> Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
