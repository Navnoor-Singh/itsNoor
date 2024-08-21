"use client";

import Navbar from "../app/components/Navbar"; // Import the Navbar component
import Footer from "../app/components/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background Image or Video */}
      <section className="relative flex items-center justify-center md:justify-end h-screen px-8 md:px-24">
        {/* Background Image for Desktop */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-left transition-opacity duration-1000 ease-in-out opacity-100"
          style={{ backgroundImage: "url('/bgNoor.jpg')" }}
        ></div>

        {/* Background Video for Mobile */}
        <div className="block md:hidden absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100">
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
        <div className="hidden md:block absolute inset-0 bg-black opacity-10 transition-opacity duration-1000 ease-in-out"></div>

        {/* Content with Responsive Positioning and Animations */}
        <div className="relative z-10 max-w-lg text-center md:text-right flex flex-col items-center justify-center h-full md:items-end md:justify-center transition-all duration-1000 ease-in-out">
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
            Hi, I'm Navnoor. I design and develop web experiences that are
            visually appealing and highly functional.
          </motion.p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <motion.a
              href="/projects"
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
   {/* Project Card 1 - Pygem */}
<div className="card bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 relative">
  <div className="card-content">
    <h3 className="text-3xl font-semibold mb-6 text-white">pyGem</h3>
    <a
      href="/projects"
      className="relative inline-block px-8 py-3 text-lg font-semibold rounded-md bg-black text-white border-2 border-black transition-all duration-300 hover:bg-white hover:text-black z-20"
    >
      View Project &rarr;
    </a>
  </div>
</div>



    {/* Project Card 2 - AidPath */}
<div className="card bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 relative">
  <div className="card-content">
    <h3 className="text-3xl font-semibold mb-6 text-white">aidPath</h3>
    <a
      href="/projects"
      className="relative inline-block px-8 py-3 text-lg font-semibold rounded-md bg-black text-white border-2 border-black transition-all duration-300 hover:bg-white hover:text-black z-20"
    >
      View Project &rarr;
    </a>
  </div>
</div>

{/* Project Card 3 - Treasure Hunt */}
<div className="card bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 relative">
  <div className="card-content">
    <h3 className="text-3xl font-semibold mb-6 text-white">treasureHunt</h3>
    <a
      href="/projects"
      className="relative inline-block px-8 py-3 text-lg font-semibold rounded-md bg-black text-white border-2 border-black transition-all duration-300 hover:bg-white hover:text-black z-20"
    >
      View Project &rarr;
    </a>
  </div>
</div>

  </div>
</section>

          {/* About Section */}
    <section id="about" className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-12 text-white">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/noorProj.jpg" // Add your profile image here
            alt="Profile Picture"
            className="rounded-lg"
            width={600}
            height={300}
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <p className="text-lg text-white text-justify mb-6">
            I'm a passionate web developer and designer with a love for
            creating beautiful, functional websites. My goal is to build web
            experiences that are not only visually appealing but also
            user-friendly and accessible.
          </p>
          <p className="text-lg text-white text-justify mb-6">
            I specialize in front-end development, with experience in React,
            Next.js, and modern CSS frameworks like Tailwind CSS. When I'm not
            coding, you can find me exploring new design trends or working on
            personal projects.
          </p>

          {/* Add the button here */}
          <div className="mt-8">
            <a
              href="/resume"
              className="px-8 py-3 font-semibold rounded-lg text-white border-2 border-black bg-black button-gradient inset-animation transform transition-transform hover:scale-105"
              >
              Wanna know more? Check out my Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
      {/* Contact Section */}
      <footer id="contact" className="bg-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-black">
            Let's Work Together
          </h2>
          <p className="text-lg text-black mb-8 max-w-[70vw] mx-auto text-center">
            I'm currently available for freelance projects and open to collaboration. Feel free to reach out to discuss your next big idea.
          </p>

          <a
            href="/contact"
            className="px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors transition-transform duration-300 ease-in-out transform hover:scale-105"

          >
            Contact Me
          </a>
        </div>
      </footer>
      <Footer />
    </main>
  );
}
