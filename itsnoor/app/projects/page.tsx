"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { VscGithub } from 'react-icons/vsc';

export default function Projects() {
  const projects = [
    {
      title: "Pygem",
      description:
        "A logic-based game built with Pygame, focusing on the concept of overflow. This project was designed to challenge users with puzzle-like gameplay that increases in difficulty as players advance.",
      technologies: "Python, Pygame, C++",
      role: "Game Developer",
      duration: "1 month",
      outcome:
        "Created an engaging game with logical challenges, successfully tested with various users for difficulty and enjoyment.",
      githubLink: "https://github.com/Navnoor-Singh/pyGem",
    },
    {
      title: "AidPath",
      description:
        "Developed a web application for the Community Wellbeing Hackathon, aimed at connecting people with resources and support services. The app features an interactive map, real-time data, and a user-friendly interface.",
      technologies: "React, Node.js, Express, MongoDB",
      role: "UI/UX",
      duration: "2 weeks",
      outcome:
        "Delivered a fully functional web app that was well-received at the hackathon, helping users find local resources efficiently.",
      githubLink: "https://github.com/vsavchyn-dev/qq-seneca-hackathon-2024",
    },
    {
      title: "it's Noor",
      description:
        "This personal portfolio website showcases various projects and skills. It is built with a modern stack, featuring dynamic components, animations, and a responsive design to provide an optimal viewing experience across devices.",
      technologies: "React, Next.js, Tailwind CSS, Framer Motion",
      role: "Full Stack Developer",
      duration: "Ongoing",
      outcome:
        "Created a professional and interactive platform to display work, including real-time updates and seamless user experience.",
      githubLink: "https://github.com/Navnoor-Singh/itsNoor",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        className="fixed top-24 left-0 w-full h-full flex overflow-x-auto overflow-y-hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        {projects.map((project, index) => (
          <motion.div
          key={index}
          className="min-w-[85vw] h-[calc(85vh-4rem)] shadow-lg flex flex-col justify-center text-white mx-8 card"
          // whileHover={{ y: -10, zIndex: 10 }}
        >
          <div className="card-content">
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
              className="relative inline-flex items-center px-8 py-4 text-xl font-semibold rounded-md minimalist-button"
            >
              <VscGithub className="mr-2" /> GitHub
            </motion.a>



          </div>
        </motion.div>
        
        ))}
      </section>
    </main>
  );
}
