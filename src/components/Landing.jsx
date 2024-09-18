import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import Typed from "typed.js";
import img1 from "../assets/dhaya.jpg";
import "./Landing.css";

const Landing = () => {
  // Create a ref to target the typing element
  const typingRef = useRef(null);

  // Initialize Typed.js inside useEffect to ensure the element exists
  useEffect(() => {
    const options = {
      strings: ["Front-end Developer", "Back-end Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
      showCursor: true,
    };

    // Check if the ref exists before initializing Typed.js
    if (typingRef.current) {
      const typed = new Typed(typingRef.current, options);
      return () => {
        typed.destroy(); // Clean up to prevent memory leaks
      };
    }
  }, []);

  return (
    <Element
      name="About"
      className="relative landing bg-cover bg-no-repeat bg-center h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-10 lg:px-24 md:px-16 sm:px-8 lg:max-w-[80%] mx-auto"
    >
      {/* Right Side Profile Picture */}
      <div className="mt-10 w-64 h-64 lg:w-80 lg:h-80 md:w-56 md:h-56 sm:w-48 sm:h-48 order-1 lg:order-2">
        <img
          src={img1}
          alt="Profile"
          className="w-full h-full sm:m-4 rounded-full  hover:rounded-md hover:scale-110 hover:bg-customcolor object-cover border-4 border-customcolor shadow-lg transition-all duration-500 linear"
        />
      </div>
      {/* Left Side Content */}
      <div className="flex flex-col justify-center items-center lg:items-start content lg:border-l-4 p-7  order-2 lg:order-1 text-center lg:text-left sm:mt-10">
        <div className="sm:pt-10 text-white font-bold text-3xl sm:text-xl md:text-2xl lg:text-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-2 font-poppins">
            Hello, <span className="box-sha">I'm DHAYA S</span>
          </h1>
        </div>
        <div className="text-white font-semibold pb-2 font-poppins text-xl sm:text-lg md:text-2xl lg:text-3xl">
          <h1>
            I'm a <span ref={typingRef}></span> {/* Ref used for Typed.js */}
          </h1>
        </div>
        <div className="text-white italic text-lg sm:text-base md:text-xl lg:text-2xl">
          <h1>I turn my ideas into interactive experiences on the web.</h1>
        </div>
        <div className="text-white italic text-lg sm:text-base md:text-xl lg:text-2xl">
          <h1>My mission is to develop a web that</h1>
          <h4>you and your audience love</h4>
        </div>
        <div>
          <button className="bg-customcolor text-black font-bold px-6 py-2 rounded-lg mt-4 hover:bg-customcolor2 text-sm sm:text-base md:text-lg lg:text-lg">
            <a
              href="../../Dhaya_Resume.pdf" // Path to your PDF
              download="Dhaya_Resume.pdf" // Custom name for the file when downloading
              className="text-white font-bold py-2 px-4 rounded"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </Element>
  );
};

export default Landing;
