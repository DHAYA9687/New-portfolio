import React from "react";
import { Element } from "react-scroll";

import video5 from "../assets/Book.mp4";
import img5 from "../assets/Book.png";
import { default as img1 } from "../assets/Disney.jpg";
import video1 from "../assets/Disney.mp4";
import img4 from "../assets/Event.jpg";
import video4 from "../assets/Event.mp4";
import video2 from "../assets/GitFinder.mp4";
import img2 from "../assets/GitFinder.png";
import video3 from "../assets/Todo.mp4";
import img3 from "../assets/Todo.png";
import ProjectCard from "./ProjectsCard";
const Projects = () => {
  const Project = [
    {
      id: "1",
      image: img1,
      video: video1,
      topic: "Disney+ Clone",
      link: "https://disney-clone-seven-xi.vercel.app/",
    },
    {
      id: "2",
      image: img2,
      video: video2,
      topic: "Git Finder",
      link: "https://github-finder-six-weld.vercel.app/",
    },
    {
      id: "3",
      image: img3,
      video: video3,
      topic: "Todo List (REDUX)",
      link: "https://todolist-ten-lac.vercel.app/",
    },
    {
      id: "4",
      image: img4,
      video: video4,
      topic: "Event Management",
      link: "https://github.com/DHAYA9687/Event-mgmt",
    },
    {
      id: "5",
      image: img5,
      video: video5,
      topic: "Book Management",
      link: "https://github.com/DHAYA9687/Book_mgmt",
    },
  ];

  return (
    <Element name="projects">
      <div className="text-white text-3xl text-center my-[30px">
        My Projects
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Project.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image} // Project image URL
            video={item.video} // Project demo video URL
            title={item.topic} // Set the title to `topic`
            liveLink={item.link} // Link to live demo
          />
        ))}
      </div>
    </Element>
  );
};

export default Projects;
