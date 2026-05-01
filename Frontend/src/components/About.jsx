import { Link } from "react-router-dom";
import aboutImg1 from "../assets/img/images/h2_about_img01.jpg";
import aboutImg2 from "../assets/img/images/h2_about_img02.jpg";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-14 md:py-16 px-4 md:px-10 bg-gray-800 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* IMAGE SECTION */}
        <div className="relative w-full h-[320px] md:h-[500px] group">
          
          {/* Main Image */}
          <motion.img
            src={aboutImg2}
            alt="Main"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-[80%] md:w-[75%] rounded-2xl shadow-xl z-10 
                       transition-all duration-500 
                       hover:z-30 hover:scale-105
                       active:scale-95 active:z-30"
          />

          {/* Overlap Image */}
          <motion.img
            src={aboutImg1}
            alt="Overlap"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-[65%] md:w-[60%] rounded-2xl shadow-2xl border-4 border-white z-20
                       transition-all duration-500 
                       hover:z-30 hover:scale-110
                       active:scale-95 active:z-30"
          />

        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base md:text-lg text-green-600 font-semibold mb-2">
            Welcome to ABR Retail
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-50 mb-4 leading-snug">
            Building Retail Experiences That Connect Brands & Customers
          </h2>

          <p className="text-gray-300 mb-4 text-base md:text-xl leading-relaxed">
            ABR Retail delivers complete retail solutions including design,
            manufacturing, and execution of retail environments.
          </p>

          <p className="text-gray-400 mb-6 text-sm md:text-base">
            With in-house production and expert teams, we ensure quality,
            speed, and impactful retail experiences.
          </p>

          <Link
            to="/about"
            className="inline-block bg-green-600 text-white px-5 py-2.5 md:px-6 md:py-3 
                       rounded-lg shadow-md 
                       hover:bg-green-700 
                       active:bg-green-800 active:scale-95 
                       transition duration-200"
          >
            About More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;