import { Link } from "react-router-dom";

import icon1 from "../assets/img/icon/services_icon01.svg";
import icon2 from "../assets/img/icon/services_icon02.svg";
import icon3 from "../assets/img/icon/services_icon03.svg";
import icon4 from "../assets/img/icon/services_icon04.svg";
import icon5 from "../assets/img/icon/services_icon05.svg";
import icon6 from "../assets/img/icon/services_icon06.svg";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Retail Fixtures & Furniture",
    desc: "Premium store fixtures and customized furniture solutions.",
    icon: "🪑",
  },
  {
    title: "Visual Merchandising",
    desc: "Creative display solutions to attract and engage customers.",
    icon: "🛍️",
  },
  {
    title: "Signage & Branding",
    desc: "ACP signage, glow sign boards, and brand identity solutions.",
    icon: "📢",
  },
  {
    title: "Printing & Flex",
    desc: "High-quality printing, flex boards, and promotional materials.",
    icon: "🖨️",
  },
  {
    title: "Kiosk & Display Units",
    desc: "Modern kiosks and display units for retail environments.",
    icon: "🏪",
  },
  {
    title: "Turnkey Retail Solutions",
    desc: "End-to-end retail execution from concept to completion.",
    icon: "⚙️",
  },
];

const Services = () => {
  return (
    <section className="pb-16 px-4 md:px-10 lg:px-20 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-items-center mb-10 gap-10">
          
          <div>
            <p className="text-blue-600 font-semibold text-sm">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-50">
              What We Offer
            </h2>
          </div>

          <p className="text-gray-100 max-w-xl">
            We provide complete retail solutions including design,
            manufacturing, branding, and execution to help businesses
            create impactful retail environments.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              
              <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
                
                {/* ICON */}
                <div className="text-4xl mb-4  transition">
                  {service.icon}
                </div>

                {/* TITLE */}
                <h4 className="text-xl font-semibold mb-2 text-gray-400">
                  {service.title}
                </h4>

                {/* DESC */}
                <p className="text-gray-300 mb-4">
                  {service.desc}
                </p>

                {/* LINK */}
                <a
                  href="/services"
                  className="text-blue-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More →
                </a>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAV BUTTONS */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="prev-btn bg-white shadow px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
            ←
          </button>
          <button className="next-btn bg-white shadow px-4 py-2 rounded-full hover:bg-bue-600 hover:text-white transition">
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;