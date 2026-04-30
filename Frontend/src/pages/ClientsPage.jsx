import React from "react";
import { motion } from "framer-motion";

import client1 from "../assets/img/clients/ClientImg1.jfif";
import client2 from "../assets/img/clients/ClientImg2.png";
import client3 from "../assets/img/clients/ClientImg3.webp";
import client4 from "../assets/img/clients/ClientImg4.png";
import client5 from "../assets/img/clients/ClientImg5.webp";

const clients = [
  { name: "Sparsh Pearl", img: client1 },
  { name: "Savour & Aura", img: client2 },
  { name: "Wonder Clean", img: client4 },
  { name: "Golfer's Shot", img: client3 },
  { name: "Wonder Clean", img: client4 },
  { name: "Goeka", img: client5 },
];

const Clients = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* 🔷 HERO */}
      <section className="relative py-20 pt-30 text-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Our Clients
          </h1>
          <p className="text-gray-300">
            Home / Clients
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
              Our Clients
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by Leading Brands
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              We proudly collaborate with top organizations to deliver
              high-quality retail and infrastructure solutions.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center 
                           shadow-md hover:shadow-xl hover:-translate-y-2 
                           transition duration-300 group"
              >
                
                {/* Logo */}
                <div className="h-20 flex items-center justify-center mb-4">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="max-h-16 object-contain grayscale 
                               group-hover:grayscale-0 transition duration-300"
                  />
                </div>

                {/* Name */}
                <p className="text-gray-800 text-sm md:text-base font-semibold text-center">
                  {client.name}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Clients;