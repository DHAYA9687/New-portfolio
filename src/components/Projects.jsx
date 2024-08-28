import React from "react";

const Projects = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="../../public/video1.p4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="text-white font-bold text-4xl">My Projects</h1>
        <p className="text-white mt-4">
          Here is a showcase of my work and accomplishments.
        </p>
      </div>
    </div>
  );
};

export default Projects;
