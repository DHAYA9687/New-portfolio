import React, { useState } from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiGreensock,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Element } from "react-scroll";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: <FaReact size={40} className="text-react" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-node" /> },
    {
      name: "MongoDB",
      icon: <FaDatabase size={40} className="text-green-600" />,
    },
    { name: "Docker", icon: <FaDocker size={40} className="text-blue-500" /> },
    {
      name: "Kubernetes",
      icon: <SiKubernetes size={40} className="text-blue-400" />,
    },
    {
      name: "Redis",
      icon: <SiRedis size={40} className="text-red-500" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={40} className="text-blue-600" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} className="text-teal-400" />,
    },
    {
      name: "Express",
      icon: <SiExpress size={40} className="text-white" />,
    },
    { name: "SQL", icon: <SiPostgresql size={40} className="text-blue-300" /> },
    { name: "Vercel", icon: <SiVercel size={40} className="text-white" /> },
    {
      name: "GSAP",
      icon: <SiGreensock size={40} className="text-green-500" />,
    },
    { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <FaJs size={40} className="text-yellow-400" />,
    },
    { name: "Git", icon: <FaGit size={40} className="text-red-500" /> },
  ];

  const [activeSection, setActiveSection] = useState("skills");

  // Skills content
  const skillsContent = (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 border-2 m-3 p-5 sm:border-none lg:border-none max-w-4xl sm:mx-auto">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-white hover:scale-105 transition-transform duration-300"
        >
          <div className="mb-4">{tech.icon}</div>
          <h3 className="text-lg sm:text-xl font-semibold">{tech.name}</h3>
        </div>
      ))}
    </div>
  );

  // Education content
  const educationContent = (
    <div className="text-center">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Education</h3>
      <ul className="list-none text-lg sm:text-xl">
        <li>Bachelor of Information Technology</li>
        <li>in Rajalakshmi Engineering College</li>
        <li>Thandalam,chennai</li>
      </ul>
    </div>
  );

  return (
    <Element name="techStack" className="bg-gray-900 py-10 mt-[100px]">
      <div className="flex flex-col sm:flex-row justify-center items-center text-2xl sm:text-4xl font-bold text-center text-white mb-10 sm:mb-20 transition-all duration-200 ease-linear">
        <button
          className={`px-4 py-2 m-2 sm:m-4 ${
            activeSection === "skills"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg sm:px-6 sm:py-3 transition-transform duration-300 ease-in-out hover:scale-105`}
          onClick={() => setActiveSection("skills")}
        >
          Skills
        </button>

        <button
          className={`px-4 py-2 m-2 sm:m-4 ${
            activeSection === "education"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-lg sm:px-6 sm:py-3 transition-transform duration-300 ease-in-out hover:scale-105`}
          onClick={() => setActiveSection("education")}
        >
          Education
        </button>
      </div>
      <div className="text-white transition-all duration-300 ease-linear">
        {activeSection === "skills" ? skillsContent : educationContent}
      </div>
    </Element>
  );
};

export default TechStack;
