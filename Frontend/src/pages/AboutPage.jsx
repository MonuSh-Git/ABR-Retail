import React from "react";
import { motion } from "framer-motion";
import Services from "../components/Services"; // reuse services slider
import EquipmentImg from "../assets/img/images/Aboutpg_Eq1.jpg";
import ProcessImg from "../assets/img/images/AboutProcess.png";


const AboutPage = () => {

  return (
    <div>

      {/* 🔷 BREADCRUMB / HERO */}
      <section className="relative bg-gray-900 pt-30 pb-20 text-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            About Us
          </h1>
          <p className="text-gray-300">
            Home / About Us
          </p>
        </div>
      </section>

      {/* 🔷 ABOUT SECTION */}
      <section className="py-16 bg-gray-900 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src={EquipmentImg}
              alt="ABR Retail"
              className="rounded-2xl shadow-lg"
            />

            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
              4000 sq.ft Facility
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-blue-600 font-semibold mb-2">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Retail Solutions Across India
            </h2>

            <p className="text-gray-200 mb-4">
              ABR Retail is a leading retail solution provider specializing in
              designing, manufacturing, and executing high-quality retail environments.
            </p>

            <p className="text-gray-100 mb-6">
              With in-house wood and metal manufacturing facilities and a skilled
              team of professionals, we deliver turnkey solutions for retail brands,
              ensuring quality, speed, and impactful customer experiences.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 text-gray-300 gap-4 mb-6">
              <p>✔ In-house Manufacturing</p>
              <p>✔ Premium Quality</p>
              <p>✔ Fast Execution</p>
              <p>✔ Turnkey Solutions</p>
            </div>

            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </motion.div>

        </div>
      </section>

      {/* 🔷 SERVICES */}
      <Services />

      {/* 🔷 WHY CHOOSE US */}
      <section className="py-16 bg-gray-100 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-3xl font-bold mb-4">
              Why Choose ABR Retail?
            </h3>

            <p className="text-gray-600 mb-6">
              We combine design, manufacturing, and execution to deliver seamless
              retail solutions tailored to your brand.
            </p>

            <ul className="space-y-3">
              <li>✔ End-to-End Retail Solutions</li>
              <li>✔ Experienced Team</li>
              <li>✔ Advanced Machinery</li>
              <li>✔ Trusted by Brands</li>
            </ul>
          </div>

          <div>
            <img
              src={ProcessImg}
              alt="Why Choose Us"
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* 🔷 TEAM */}
      <section className="py-16 bg-gray-900 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <p className="text-blue-600 font-semibold">Our Team</p>
          <h2 className="text-3xl font-bold">
            Meet Our Professionals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "XYZ", role: "Designer" },
            { name: "XYZ", role: "Designer" },
            { name: "XYZ", role: "Designer" },
            { name: "XYZ", role: "Designer" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="h-32 bg-gray-200 rounded mb-4"></div>
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutPage;