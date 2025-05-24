import React from "react";
import viteLogo from "../assets/vite.svg"; // add vite.svg in assets
import postmanLogo from "../assets/postman.png";

const skills = [
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "Next.js", icon: "devicon-nextjs-original" },
  { name: "Redux", icon: "devicon-redux-original" },
  
];

function Skills() {
  return (
    <div
      id="skills"
      className="w-full max-w-[90rem] px-8 py-16 mx-auto text-white text-center"
    >
      <span className="text-4xl font-bold">Skills</span>
      <p className="mt-4 text-lg text-gray-300 max-w-[800px] mx-auto">
        Here's a quick overview of the tools and technologies I work with:
      </p>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full h-48 bg-[#1f1f1f]/60 backdrop-blur-md rounded-xl p-6 transition-transform duration-300 transform-gpu shadow-md hover:shadow-yellow-400/30 hover:-rotate-x-6 hover:scale-105 text-center flex flex-col items-center justify-center"
          >
            
              <i className={`${skill.icon} colored text-5xl mb-4`}></i>
            
            <p className="text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
