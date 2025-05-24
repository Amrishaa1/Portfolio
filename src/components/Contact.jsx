import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validDomains = ['@gmail.com', '@outlook.com', '@yahoo.com', '@protonmail.com'];
    const isValidDomain = validDomains.some((domain) => email.endsWith(domain));

    if (!isValidDomain) {
      setError("Please enter a valid email domain (e.g. @gmail.com)");
      return;
    }

    setError("");
    alert("Form submitted!");
  };

  return (
    <div
      id="contact"
      className="w-full max-w-[90rem] px-8 py-16 mx-auto text-white text-center"
    >
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <p className="mt-4 text-lg text-gray-300">
        Fill out the form below to contact me
      </p>

      <form onSubmit={handleSubmit} className="mt-10 max-w-3xl mx-auto text-left space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-500"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-500"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <textarea
          rows="5"
          placeholder="Message"
          className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:border-yellow-500"
          required
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full border border-gray-400 hover:shadow-[0_6px_15px_rgba(255,255,255,0.3)] hover:scale-105 hover:bg-gray-200 transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Social Links */}
      <div className="mt-12 flex justify-center gap-8 text-3xl">
        <a
          href="https://github.com/Amrishaa1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/amrisha-singh-a69620271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Contact;
