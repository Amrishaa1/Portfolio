import React from "react";
import image from "../assets/image.png";
function Intro() {
  return (
    <div id="home" className="relative h-[calc(100vh-5rem)] w-screen max-w-[75rem] mx-auto overflow-hidden">
      <div className="h-screen w-screen p-8 text-[3rem] font-bold flex flex-col justify-center">
        <span className="text-[1.75 rem] font-thin">Hello,</span>
        <span>I'm <span className="text-yellow-400">Amrisha</span> <br /> Web Developer</span>
        <p className="mt-2 text-gray-300 font-extralight text-lg w-[40%]">
          I'm a MERN Stack Developer passionate about building scalable web applications. 
          I also explore Data Structures & Algorithms.
        </p>
      </div>
<img 
  src={image} 
  alt="" 
  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-[-1] h-[400px] w-[500px] object-cover"
/>

    </div>
  );
}

export default Intro;
