import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
    console.log("button clicked");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen(false); // Close menu on large screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex font-bold bg-black items-center p-4 font-poppins sticky top-0 z-10 transition duration-200 ease-linear">
        <div className="flex-1 text-4xl">
          <a
            className="text-white pl-10 text-3xl"
            href="https://github.com/DHAYA9687"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web <span className="text-customcolor">Dev</span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="flex-1 hidden md:flex justify-evenly text-white">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="hover hover:cursor-pointer"
          >
            <h4 className="text-white">About</h4>
          </Link>
          <Link
            to="techStack"
            smooth={true}
            duration={1000}
            className="hover hover:cursor-pointer"
          >
            <h4 className="text-white">Techstack</h4>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="hover hover:cursor-pointer"
          >
            <h4 className="text-white">Projects</h4>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="hover hover:cursor-pointer"
          >
            <h4 className="text-white">Contact</h4>
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={1000}
            className="hover hover:cursor-pointer"
          >
            <h4 className="text-white">Blog</h4>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="text-white md:hidden" onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl px-4" />
        </button>
      </div>

      {/* Mobile menu */}
      {isNavOpen && (
        <div className=" z-10 absolute top-16 right-0 bg-black w-[200px] rounded-md m-3 lg:hidden border-2 border-white p-4">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                className="text-white hover:border-b-2 border-customcolor hover:cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="techStack"
                smooth={true}
                duration={1000}
                className="text-white hover:border-b-2 border-customcolor hover:cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                Techstack
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                className="text-white hover:border-b-2 border-customcolor hover:cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                className="text-white hover:border-b-2 border-customcolor hover:cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                smooth={true}
                duration={1000}
                className="text-white hover:border-b-2 border-customcolor hover:cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
