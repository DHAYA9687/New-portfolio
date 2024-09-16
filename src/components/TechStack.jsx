import React from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa"; // Example icons
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
    { name: "React", icon: <FaReact size={50} className="text-react" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} className="text-node" /> },
    {
      name: "MongoDB",
      icon: <FaDatabase size={50} className="text-green-600" />,
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
    { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <FaJs size={50} className="text-yellow-400" />,
    },
    { name: "Git", icon: <FaGit size={50} className="text-red-500" /> },
  ];

  return (
    <Element name="techStack" className="bg-gray-900 py-10 mt-[100px]">
      <h2 className="text-4xl font-bold text-center text-white mb-20">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 border-2 m-3 p-5 sm:border-none lg:border-none max-w-4xl sm:mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{tech.icon}</div>
            <h3 className="text-xl font-semibold">{tech.name}</h3>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default TechStack;
