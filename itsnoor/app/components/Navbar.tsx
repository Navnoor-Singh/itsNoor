"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const text = "Navnoor's Portfolio";
  const blink = "_";

  useEffect(() => {
    const handleType = () => {
      const currentIndex = displayText.length;

      if (!isDeleting && currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(text.substring(0, currentIndex - 1));
      }

      if (!isDeleting && currentIndex === text.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      const speed = isDeleting ? 50 : 150;
      setTypingSpeed(speed);
    };

    const timeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <nav className="w-full py-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-b border-white border-opacity-20 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
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
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="hover:text-gray-400 transition-colors text-white">
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/projects" className="hover:text-gray-400 transition-colors text-white">
              Projects
            </Link>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="/#about"
            className="hover:text-gray-400 transition-colors text-white"
          >
            About
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="/#contact"
            className="hover:text-gray-400 transition-colors text-white"
          >
            Contact
          </motion.a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
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

      {isOpen && (
        <div className="md:hidden bg-transparent text-white px-6 pt-4 pb-2 animate-fade-in-down">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="block py-2 hover:text-gray-400 transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/projects" className="block py-2 hover:text-gray-400 transition-colors" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </motion.div>
            <motion.a
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="/#about"
              className="block py-2 hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="/#contact"
              className="block py-2 hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </motion.a>
          </div>
        </div>
      )}
    </nav>
  );
}
