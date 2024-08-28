import React from "react";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="relative landing bg-cover bg-no-repeat bg-center h-screen w-full -z-10">
      <div className="content border-l-4 p-7 absolute top-1/4 left-24">
        <div className="text-white font-bold">
          <h1 className="text-6xl pb-2 font-poppins">
            Hello, <span className="box-sha">I'm DHAYA S</span>
          </h1>
        </div>
        <div className="text-white font-semibold pb-2 font-poppins">
          <h1 className="text-4xl">I'm a Full Stack Developer</h1>
        </div>
        <div className="text-white italic">
          <h1 className="text-2xl">
            I turn my ideas into interactive experiences on the web.
          </h1>
        </div>
        <div className="text-white italic">
          <h1 className="text-2xl">My mission is to develop a web that</h1>
          <h4 className="text-2xl">you and your audience love</h4>
        </div>
        <div>
          <button className="bg-customcolor text-black font-bold px-6 py-2 rounded-lg mt-4 hover:bg-customcolor2 hover">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
