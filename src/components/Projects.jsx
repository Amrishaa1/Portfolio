import React, { useState } from 'react';

const projectData = [
  {
    title: 'To-do Application',
    tech: 'HTML, CSS, JavaScript',
    description: `This project enables User to add tasks with optional countdown timers. Each task can be marked as complete, edited, or deleted. When a timer is set for a task and started, it counts down in real time, and a buzzer sound plays when the time is up, alerting the user. The app also tracks task progress visually with a progress bar and displays completion stats. All data is stored locally in the browser using localStorage.`,
    link: 'https://github.com/Amrishaa1/To-do-Application',
  },
  {
    title: 'Gym fitness website ',
    tech: 'HTML, CSS, JavaScript, React, Material UI',
    description: `This project is a fitness web application built using React and Material UI. It allows users to explore exercises based on different body parts. Upon selecting a body part, users are taken to a page that displays related exercises along with demo and additional videos for better understanding. The application uses React Router for navigation and is responsive across devices. It serves as a frontend platform to learn and discover various fitness exercises.`,
    link: 'https://github.com/Amrishaa1/Gym-fitness-website',
  },
  {
    title: 'Disease prediction based on air pollutants',
    tech: 'Python, Pandas, Tkinter, Scikit-learn, Jupyter Notebook',
    description: `This project is a desktop-based machine learning application developed using Python. It predicts potential diseases based on city-specific air pollutant levels such as PM2.5, PM10, NO, and SO using a trained Random Forest model. The application features a user-friendly GUI built with Tkinter, allowing users to input pollutant data and receive real-time disease predictions, making it a useful tool for public health awareness.`,
    link: 'https://github.com/Amrishaa1/Disease-prediction-based-on-air-pollutants',
  },
];

function Projects() {
  const [showMore, setShowMore] = useState(false);

  const displayedProjects = showMore ? projectData : projectData.slice(0, 4);

  return (
    <div id="projects" className="w-full max-w-[90rem] px-8 py-16 mx-auto text-white text-center">
      <span className="text-4xl font-bold">My Projects</span>
      <p className="mt-4 text-lg text-gray-300 max-w-[800px] mx-auto">
      Here are some of the projects I've worked on that reflect my skills in full-stack development, artificial intelligence, and creative problem solving.Each project showcases a different aspect of my technical journey. Whether it's crafting clean UI/UX, writing scalable backend APIs, or implementing smart algorithms, I love turning ideas into functional and impactful solutions.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="w-full bg-[#2a2a2a]/60 backdrop-blur-md border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-2xl p-8 shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left"
          >
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">{project.title}</h2>
            <p className="text-sm text-gray-400 italic mb-2">Tech: {project.tech}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              GitHub - {project.title}
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-10 bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
      >
        {showMore ? 'View Less' : 'View More'}
      </button>
    </div>
  );
}

export default Projects;
