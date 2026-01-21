"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "UI Project 1",
    image: "/images/figma1.png",
    link: "https://www.figma.com/design/ksrfpv2mZgTQky4kGMtu4Y/Untitled?node-id=1-15&t=rQYhlspVR3QXkkY4-1",
    highlight: true,
  },
  {
    title: "UI Project 2",
    image: "/images/figma2.png",
    link: "https://www.figma.com/design/n0bj4HBoTd3umkF6gp94V8/Untitled?node-id=3-2011&t=uHfVIjsMSQlCI0AR-1",
  },
  {
    title: "UI Project 3",
    image: "/images/figma3.png",
    link: "https://www.figma.com/design/UDYVsnSufFb22VOMEwxz0J/Untitled?node-id=0-1&t=YY2lAYtTyiOiJZve-1",
  },
  {
    title: "UI Project 4",
    image: "/images/figma4.png",
    link: "https://www.figma.com/design/rNJJmglN3ILQmjibJt0YCC/UI-Design-Exploration-on-Sign-in-Sign-up--Community-?node-id=0-1&t=htG59bK42S51uc8s-1",
  },
  {
    title: "UI Project 5",
    image: "/images/figma5.png",
    link: "https://www.figma.com/design/vxqsLLEFUzmVtfKX4qBdKq/Untitled?node-id=0-1&t=lRRIIw2npRO7xIKF-1",
  },
    {
    title: "UI Project 6",
    image: "/images/figma6.png",
    link: "https://www.figma.com/design/PELleWmO8zr0Of62kKxPm0/Untitled?node-id=0-1&t=wW5e97vboU42YLmG-1",
  },
  
];

const WebMobileDesign = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 text-white bg-gradient-to-br from-black via-black/70 to-pink-600 overflow-hidden w-full h-full">
      {/* --- Titre --- */}
      <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-center">
        Web And mobile designe
      </h2>

      {/* --- Grille de cartes --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`relative h-96 sm:h-74 md:h-99 w-48 sm:w-56 md:w-64 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
              project.highlight ? "border-4 border-blue-500" : ""
            }`}
          >
            {/* Image du projet */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover w-full h-full"
            />

            {/* Overlay au survol */}
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
              <p className="text-center px-4 text-sm font-medium">
                {project.title}
              </p>
            </div>
          </motion.a>
        ))
        
        }
      </div>
    </section>
  );
};

export default WebMobileDesign;
