import React from 'react'
import WebDesign from '../../src/assets/website-design.png'
import DSA from '../assets/DSA.png'

function About() {
  return (
    <div id="about" className="w-full max-w-[90rem] px-8 py-16 mx-auto text-white text-center">
      <span className="text-4xl font-bold">What I Do</span>
      <p className="mt-4 text-lg text-gray-300 max-w-[800px] mx-auto">
        I'm a full-stack developer specializing in the MERN stack — MongoDB, Express.js, React.js, and Node.js.
        I love building robust, scalable, and real-world web applications from scratch. From designing pixel-perfect UIs 
        to writing clean backend APIs and securing them with JWT, I enjoy every part of the development cycle. 
        I also solve DSA problems regularly to sharpen my logic and problem-solving skills.
      </p>

      <div className="mt-12 flex flex-col gap-10 items-center">
        
        {/* Website Design Card */}
        <div className="bg-[#2a2a2a]/60 backdrop-blur-sm border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-3xl p-8 max-w-[700px] w-full shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left group">
          <div className="flex items-center gap-4 mb-5">
            <img src={WebDesign} alt="Web Design" className="w-20 h-20" />
            <h2 className="text-3xl font-bold text-yellow-400 group-hover:scale-105 transition-transform">Website Design</h2>
          </div>
          <p className="text-gray-300 text-[1.05rem] leading-relaxed">
            I create visually appealing and responsive websites using HTML, CSS, Tailwind, and React. My focus lies in building user-friendly interfaces that not only look great but also deliver smooth UX. Whether it's landing pages, dashboards, I ensure every component is scalable and reusable.
          </p>
        </div>

        {/* DSA Card */}
        <div className="bg-[#2a2a2a]/60 backdrop-blur-sm border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-3xl p-8 max-w-[700px] w-full shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left group">
          <div className="flex items-center gap-4 mb-5">
            <img src={DSA} alt="DSA" className="w-20 h-20" />
            <h2 className="text-3xl font-bold text-yellow-400 group-hover:scale-105 transition-transform">Data Structures & Algorithms</h2>
          </div>
          <p className="text-gray-300 text-[1.05rem] leading-relaxed">
            I consistently practice DSA to improve my problem-solving and analytical thinking. With problems solved on LeetCode, I focus on writing optimal and clean code. It helps me stay sharp for coding rounds, and competitive programming challenges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
