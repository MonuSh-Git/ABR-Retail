import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sliderImg1 from "../assets/img/slider/slider_img01.jpg";
import sliderImg2 from "../assets/img/slider/slider_img02.jpg";
import sliderImg3 from "../assets/img/slider/slider_img03.jpg";
import sliderImg4 from "../assets/img/slider/slider_img04.jpg";
import sliderImg6 from "../assets/img/slider/slider_img06.jpg";
import sliderImg5 from "../assets/img/slider/slider_img05.jpg";

const slides = [
  {
    id: 1,
    background: sliderImg1,
    title: "Complete Retail Solutions Under One Roof",
    description: "From design to execution, we deliver end-to-end retail environments for modern brands.",
  },
  {
    id: 2,
    background: sliderImg2,
    title: "Crafting Premium Retail Experiences",
    description: "We design and manufacture fixtures, furniture, and branding that elevate store presence.",
  },
  {
    id: 3,
    background: sliderImg3,
    title: "In-House Manufacturing Excellence",
    description: "Advanced wood, metal, and acrylic production ensures quality, speed, and precision.",
  },
  {
    id: 4,
    background: sliderImg4,
    title: "Trusted by Retail Brands Across India",
    description: "Delivering consistent quality for multi-store rollouts with reliable execution.",
  },
  {
    id: 5,
    background: sliderImg5,
    title: "From Concept to Completion",
    description: "We transform ideas into impactful retail spaces with seamless project management.",
  },
];

const Slider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Slides */}
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === active && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Background Image (COVER STYLE) */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.background})` }}
              >
                {/* Overlay (Premium Look) */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-20 px-6 md:px-20">
        <div className="max-w-2xl text-white">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                {slides[active].title}
              </h1>

              <p className="text-gray-300 mb-6 text-lg">
                {slides[active].description}
              </p>

              <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg">
                Explore More
              </button>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-3 rounded-full transition-all ${
              i === active ? "w-8 bg-blue-500" : "w-3 bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Bottom Branding Strip */}
      <div className="absolute bottom-0 w-full bg-blue-600/80 backdrop-blur-md py-3 text-center text-white z-20">
        <p className="text-lg md:text-xl font-medium">
          Where Retail Meets Innovation.
        </p>
      </div>
    </section>
  );
};

export default Slider;