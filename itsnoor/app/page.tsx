"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // Define isOpen state for mobile menu
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const text = "Noor's Portfolio"; // Your title text
  const blink = "_";

  // Typewriter effect logic
  useEffect(() => {
    const handleType = () => {
      const currentIndex = displayText.length;
  
      if (!isDeleting && currentIndex < text.length) {
        // Typing logic
        setDisplayText(text.substring(0, currentIndex + 1));
      } else if (isDeleting && currentIndex > 0) {
        // Deleting logic
        setDisplayText(text.substring(0, currentIndex - 1));
      }
  
      if (!isDeleting && currentIndex === text.length) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentIndex === 0) {
        // Reset after deleting
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
  
      const speed = isDeleting ? 50 : 150; // Faster speed when deleting
      setTypingSpeed(speed);
    };
  
    const timeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, loopNum, typingSpeed]);
  

  return (
    <main className="relative min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="w-full py-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-b border-white border-opacity-20 fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Typewriter Effect Title */}
          <motion.h1
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {displayText}
            <span className="text-white animate-blink">{blink}</span>
          </motion.h1>
          <div className="hidden md:flex space-x-6">
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              href="#projects"
              className="hover:text-gray-400 transition-colors text-white"
            >
              Projects
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              href="#about"
              className="hover:text-gray-400 transition-colors text-white"
            >
              About
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="#contact"
              className="hover:text-gray-400 transition-colors text-white"
            >
              Contact
            </motion.a>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state on click
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-transparent text-white px-6 pt-4 pb-2 animate-fade-in-down">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }} // Slight delay for first item
                href="#projects"
                className="block py-2 hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }} // Increased delay for second item
                href="#about"
                className="block py-2 hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }} // Further increased delay for third item
                href="#contact"
                className="block py-2 hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </motion.a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Background Image or Video */}
      <section className="relative flex items-center justify-center md:justify-end h-screen px-8 md:px-24">
        {/* Background Image for Desktop */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-left"
          style={{ backgroundImage: "url('/bgNoor.jpg')" }}
        ></div>

        {/* Background Video for Mobile */}
        <div className="block md:hidden absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/bgmb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Black Overlay for Video */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Overlay for darkening the image on desktop */}
        <div className="hidden md:block absolute inset-0 bg-black opacity-10"></div>

        {/* Content with Responsive Positioning and Animations */}
        <div className="relative z-10 max-w-lg text-center md:text-right flex flex-col items-center justify-center h-full md:items-end md:justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6"
          >
            Welcome to My Creative Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-white mb-6 md:mb-8"
          >
            Hi, I'm Noor. I design and develop web experiences that are visually
            appealing and highly functional.
          </motion.p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <motion.a
              href="#projects"
              className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-white rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2 text-white">Project One</h3>
            <p className="text-justify text-gray-400 mb-4">
              A brief description of your project goes here. Highlight its key features or technologies used.
            </p>
            <a href="#" className="text-white hover:text-gray-400 transition-colors">
              View Project &rarr;
            </a>
          </div>
          {/* Add more project cards here */}
          <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2 text-white">Project Two</h3>
            <p className="text-justify text-gray-400 mb-4">
              A brief description of your project goes here. Highlight its key features or technologies used.
            </p>
            <a href="#" className="text-white hover:text-gray-400 transition-colors">
              View Project &rarr;
            </a>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2 text-white">Project Three</h3>
            <p className="text-justify text-gray-400 mb-4">
              A brief description of your project goes here. Highlight its key features or technologies used.
            </p>
            <a href="#" className="text-white hover:text-gray-400 transition-colors">
              View Project &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/noorProj.jpg"  // Add your profile image here
              alt="Profile Picture"
              className="rounded-lg"
              width={600}
              height={300}
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg text-white text-justify mb-6">
              I'm a passionate web developer and designer with a love for creating beautiful, functional websites. My goal is to build web experiences that are not only visually appealing but also user-friendly and accessible.
            </p>
            <p className="text-lg text-white text-justify mb-6">
              I specialize in front-end development, with experience in React, Next.js, and modern CSS frameworks like Tailwind CSS. When I'm not coding, you can find me exploring new design trends or working on personal projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-black py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Let's Work Together</h2>
          <p className="text-lg text-white mb-8">
            I'm currently available for freelance projects and open to collaboration. Feel free to reach out to discuss your next big idea.
          </p>
          <a
            href="mailto:contactnavnoorsingh@gmail.com"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </footer>
    </main>
  );
}
