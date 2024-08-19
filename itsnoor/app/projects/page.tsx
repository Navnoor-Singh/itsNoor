"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description:
        "A detailed description of Project One goes here. This project involved creating a highly responsive web application with modern design and interactive features.",
      technologies: "React, Next.js, Tailwind CSS, Node.js",
      role: "Frontend Developer",
      duration: "3 months",
      outcome:
        "Delivered a full-featured, dynamic web application with real-time updates and interactive UI.",
      githubLink: "https://github.com/username/project-one",
    },
    {
      title: "Project Two",
      description:
        "A detailed description of Project Two goes here. This project focused on creating a high-performance web application with scalable architecture.",
      technologies: "Angular, Firebase, Bootstrap",
      role: "Full Stack Developer",
      duration: "4 months",
      outcome:
        "Successfully built and deployed a scalable web application with cloud-based backend and dynamic UI.",
      githubLink: "https://github.com/username/project-two",
    },
    {
      title: "Project Three",
      description:
        "A detailed description of Project Three goes here. This project showcases my backend development skills, focusing on secure and efficient data handling.",
      technologies: "Vue.js, Laravel, MySQL",
      role: "Backend Developer",
      duration: "2 months",
      outcome:
        "Developed and deployed a secure, high-performance backend system with RESTful APIs.",
      githubLink: "https://github.com/username/project-three",
    },
  ];

  const neonColors = [
    "rgba(255, 0, 150, 0.7)", // Neon Pink
    "rgba(0, 255, 255, 0.7)", // Neon Cyan
    "rgba(255, 255, 0, 0.7)", // Neon Yellow
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = window.scrollY * 4; // Increase speed of horizontal scroll
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative min-h-[300vh] bg-black text-white font-sans">
      <Navbar />
      <section
        ref={scrollContainerRef}
        className="fixed top-24 left-0 w-full h-full flex overflow-x-auto overflow-y-hidden" // Adjusted top margin
        style={{ scrollBehavior: "smooth" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="min-w-[85vw] h-[calc(85vh-4rem)] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-12 rounded-lg shadow-lg flex flex-col justify-center text-white mx-8"
            style={{
              backgroundColor: neonColors[index],
            }}
            // whileHover={{ y: -10, zIndex: 10 }} // Raise the card by 10px on hover
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-extrabold mb-6"
            >
              {project.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-2xl mb-6"
            >
              {project.description}
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
              className="text-lg mb-8 space-y-3"
            >
              <li>
                <strong>Technologies Used:</strong> {project.technologies}
              </li>
              <li>
                <strong>Role:</strong> {project.role}
              </li>
              <li>
                <strong>Duration:</strong> {project.duration}
              </li>
              <li>
                <strong>Outcome:</strong> {project.outcome}
              </li>
            </motion.ul>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              className="inline-block px-8 py-4 text-xl text-black bg-white font-semibold rounded-lg shadow-md hover:bg-gray-200"
            >
              <span role="img" aria-label="GitHub">
                💻
              </span>{" "}
              View on GitHub
            </motion.a>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
