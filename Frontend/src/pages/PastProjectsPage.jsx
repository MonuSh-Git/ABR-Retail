import React from "react";
import { motion } from "framer-motion";

import projectImg01 from "../assets/img/PastProject/PastProject01.jpg";
import projectImg02 from "../assets/img/PastProject/PastProject02.jpg";
import projectImg03 from "../assets/img/PastProject/PastProject03.jpg";
import projectImg04 from "../assets/img/PastProject/PastProject04.jpg";
import projectImg05 from "../assets/img/PastProject/PastProject05.jpg";

const projects = [
  {
    id: 1,
    name: "Savour & Aura",
    imgSrc: projectImg01,
    link: "#",
  },
  {
    id: 2,
    name: "Sweet Dream",
    imgSrc: projectImg02,
    link: "#",
  },
  {
    id: 3,
    name: "Old Smuggler",
    imgSrc: projectImg03,
    link: "#",
  },
  {
    id: 4,
    name: "Old Smuggler",
    imgSrc: projectImg04,
    link: "#",
  },
  {
    id: 5,
    name: "Wonder Clean",
    imgSrc: projectImg05,
    link: "#",
  },
];

const PastProjectsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* 🔷 HERO */}
      <section className="relative py-20 pt-30 text-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Past Projects
          </h1>
          <p className="text-gray-300">
            Home / Past Projects
          </p>
        </div>
      </section>

      {/* 🔷 CONTENT */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-blue-500 font-semibold">
              Our Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Projects We've Delivered
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              From concept to completion, we deliver retail solutions that elevate brand presence and customer experience.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >

                {/* Image */}
                <img
                  src={project.imgSrc}
                  alt={project.name}
                  className="w-full h-64 object-cover 
                             group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 
                                group-hover:opacity-100 transition duration-300 
                                flex items-center justify-center text-center p-4">
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.name}
                    </h3>

                    <a
                      href={project.link}
                      className="text-blue-400 hover:underline"
                    >
                      View Details →
                    </a>
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default PastProjectsPage;