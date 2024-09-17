"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
      title: "TreasureHuntGame",
      description: "A command-line game where players navigate a path to find hidden treasures while avoiding bombs. The game features configurable player lives, path length, and move limits, with interactive gameplay elements and status updates.",
      technologies: "C, Standard I/O, Conditional Logic, Loops",
      role: "C Programmer",
      duration: "24 hours",
      outcome:"Developed a fully functional game that allows players to configure settings, play multiple rounds, and receive immediate feedback on their progress, enhancing programming skills in C.",
      githubLink: "https://github.com/Navnoor-Singh/treasureHunt"

    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariantsDesktop = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen bg-black text-white font-sans mt-28">
      <Navbar />
      <section className="flex flex-col md:flex-row">
        <motion.div
          className="md:hidden px-8 py-16 space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card w-full h-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg p-8 flex flex-col justify-center text-white mx-auto rounded-lg"
              variants={cardVariantsMobile}
            >
              <div className="card-content">
                <motion.h2
                  className="text-3xl font-extrabold mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  className="text-lg mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  {project.description}
                </motion.p>
                <motion.ul
                  className="text-base mb-8 space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.4 }}
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
                  className="relative inline-flex items-center px-6 py-3 text-lg font-semibold rounded-md minimalist-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.6 }}
                >
                  <VscGithub className="mr-2" /> GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hidden md:flex flex-col space-y-8 px-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card w-full h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg p-8 flex flex-col justify-center text-white mx-auto rounded-lg"
              variants={cardVariantsDesktop}
            >
              <div className="card-content">
                <motion.h2
                  className="text-3xl sm:text-4xl font-extrabold mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  {project.description}
                </motion.p>
                <motion.ul
                  className="text-base sm:text-lg md:text-xl mb-8 space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.4 }}
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
                  className="relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-md minimalist-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.6 }}
                >
                  <VscGithub className="mr-2" /> GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer /> {/* The footer is now properly positioned at the bottom */}
    </main>
  );
}
