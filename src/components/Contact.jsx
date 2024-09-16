// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// import { Element } from "react-scroll";
// import "./Contact.css";
// function Contact() {
//   return (
//     <Element name="contact" className="Contact">
//       <h1>Contact</h1>
//       <div className="Contact__Container">
//         <p className="">
//           Email: <span>sekarsekar@5016@gmail.com</span>
//         </p>
//         <p>
//           github username: <span>@DHAYA9687</span>
//         </p>
//         <div className="Contact__icons flex justify-between gap-x-6">
//           <a
//             href="https://github.com/DHAYA9687"
//             target="_blank"
//             className="border-2 p-2  hover:bg-gray-200 hover:text-black"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.instagram.com/dhaya_sekar/"
//             target="_blank"
//             className="border-2 p-2  hover:bg-gray-200 hover:text-black"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://www.facebook.com/dhaya.sekar.9"
//             target="_blank"
//             className="border-2 p-2 hover:bg-gray-200 hover:text-black"
//           >
//             <SiLeetcode />
//           </a>
//         </div>
//       </div>
//     </Element>
//   );
// }

// export default Contact;
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Element } from "react-scroll";

function Contact() {
  return (
    <Element
      name="contact"
      className="flex flex-col items-center justify-center text-white py-20 px-4"
    >
      <h1 className="text-4xl font-semibold text-center mb-8 md:text-3xl sm:text-2xl">
        Contact
      </h1>
      <div className="border border-white w-full max-w-lg min-h-[200px] flex flex-col items-center justify-center p-8 mt-5 mx-auto">
        <p className="text-lg md:text-base sm:text-sm mb-6">
          Email:{" "}
          <span className="text-customcolor">sekarsekar@5016@gmail.com</span>
        </p>
        <p className="text-lg md:text-base sm:text-sm">
          Github username: <span className="text-customcolor">@DHAYA9687</span>
        </p>
        <div className="flex justify-between gap-6 mt-8 mb-2">
          <a
            href="https://github.com/DHAYA9687"
            target="_blank"
            className="border-2 rounded-md hover:rounded-none border-white p-2 hover:text-customcolor hover:text-black transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhaya-web/"
            target="_blank"
            className="border-2 hover:rounded-none rounded-md border-white p-2 hover:text-customcolor hover:text-black transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/u/Dhaya9687/"
            target="_blank"
            className="border-2 rounded-md hover:rounded-none border-white p-2 hover:text-customcolor  hover:text-black transition"
          >
            <SiLeetcode size={24} />
          </a>
        </div>
        <button className="bg-customcolor hover:bg-customCyanHover transition-colors duration-300 mt-3 p-2 rounded-md hover:rounded-none text-black">
          <a className="" href="mailto:sekarsekar5017.com" target="_blank">
            Reach out
          </a>
        </button>
      </div>
    </Element>
  );
}

export default Contact;
