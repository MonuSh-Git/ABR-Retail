import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CounterBox = ({ number, label, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = number / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative flex items-center justify-center h-40 md:h-52"
    >
      {/* BIG FADED NUMBER */}
      <h1 className="absolute text-6xl md:text-8xl lg:text-9xl font-extrabold text-white opacity-10 select-none">
        {count}
      </h1>

      {/* CENTER TEXT */}
      <div className="relative text-center">
        <h3 className="text-white text-lg md:text-xl font-semibold">
          {label}
        </h3>
      </div>
    </motion.div>
  );
};

const CounterSection = () => {
  return (
    <section className="relative py-10 px-4 md:px-10 lg:px-20 bg-gray-900">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        
        <CounterBox number={40} label="Projects" delay={0.2} />
        <CounterBox number={25} label="Employees" delay={0.4} />
        <CounterBox number={10} label="Customers" delay={0.6} />
        <CounterBox number={14} label="Solutions" delay={0.8} />

      </div>
    </section>
  );
};

export default CounterSection;