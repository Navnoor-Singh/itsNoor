"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 flex-shrink-0">
      <p className="text-sm font-sans mt-2">
      Built with ❤️ by Navnoor Singh. All rights reserved. - Find the code on{" "}
        <a
          href="https://github.com/Navnoor-Singh/itsNoor"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-400 transition-colors"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
