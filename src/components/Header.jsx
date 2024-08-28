import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleclick = () => {
    setIsNavOpen(!isNavOpen);
    console.log("buttonclick");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="flex  font-bold  bg-black items-center p-4 font-poppins sticky top-0 z-1 transition duration-200 ease-linear">
        <div className="flex-1 text-4xl">
          <h1 className="text-white pl-10">
            Web <span className="text-customcolor">Dev</span>
          </h1>
        </div>
        <div className="flex-1 hidden md:flex justify-evenly text-white pl-10">
          <Link to="home" smooth={true} duration={1000} className="hover">
            <h4 className="text-white">Home</h4>
          </Link>
          <Link to="techstack" smooth={true} duration={1000} className="hover">
            <h4 className="text-white">Techstack</h4>
          </Link>
          <Link to="projects" smooth={true} duration={1000} className="hover">
            <h4 className="text-white">Projects</h4>
          </Link>
          <Link to="contact" smooth={true} duration={1000} className="hover">
            <h4 className="text-white">Contact</h4>
          </Link>
          <Link to="Blog" smooth={true} duration={1000} className="hover">
            <h4 className="text-white">Blog</h4>
          </Link>
        </div>
        <button className="text-white md:hidden" onClick={handleclick}>
          <FontAwesomeIcon
            icon={faBars}
            className="text-white text-2xl border-none px-4"
          />
        </button>
      </div>
      {isNavOpen && (
        <div
          className={`absolute top-16 z-50 bg-black right-10 md:hidden border-2 mt-6 p-4  rounded-lg shadow-lg`}
        >
          <ul className="">
            <li className="p-4 main">
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li className="p-4 main">
              <a href="/create" className="text-white">
                TechStack
              </a>
            </li>
            <li className="p-4 main">
              <a href="/Explore" className="text-white">
                Projects
              </a>
            </li>
            <li className="p-4 main">
              <a href="/Explore" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
