import React from "react";
import logo from "../../src/assets/logo.png";
import { Link } from "react-scroll";
import contact from "../../src/assets/contact.png";
function Navbar() {
  return (
    <nav className="h-20 w-9/10 mx-auto px-10 py-4 flex items-center justify-between sticky top-0 z-30">
      
      <div className="flex space-x-5 text-lg font-medium">
        <Link to="home" className="cursor-pointer hover:text-yellow-400 hover:underline decoration-yellow-400 active:scale-95 transition-all duration-300 ease-in-out">Home</Link>
        <Link to="about" className="cursor-pointer hover:text-yellow-400 hover:underline decoration-yellow-400 active:scale-95 transition-all duration-300 ease-in-out">About</Link>
        <Link to="projects" className="cursor-pointer hover:text-yellow-400 hover:underline decoration-yellow-400 active:scale-95 transition-all duration-300 ease-in-out">Projects</Link>
        <Link to="skills" className="cursor-pointer hover:text-yellow-400 hover:underline decoration-yellow-400 active:scale-95 transition-all duration-300 ease-in-out">Skills</Link>
      </div>
      <button
        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full border border-gray-400  hover:shadow-[0_6px_15px_rgba(255,255,255,0.3)] hover:scale-105 hover:bg-gray-200 transition-all duration-300 ease-in-out"
      >
        <img src={contact} alt="" className="object-cover h-4 w-4 " />
        <Link to="contact">Contact Me</Link>
      </button>
    </nav>
  );
}

export default Navbar;
