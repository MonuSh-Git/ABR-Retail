import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CounterBox = ({ number, label, delay }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  // 👇 Start only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 👇 Counter animation
  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const increment = number / (duration / 20);

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [start, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative flex items-center justify-center h-40 md:h-52"
    >
      {/* BIG FADED NUMBER */}
      <h1 className="absolute text-8xl md:text-8xl lg:text-9xl font-extrabold text-white opacity-10 select-none">
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

      {/* ✅ MOBILE: 2 columns | DESKTOP: 4 columns */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        
        <CounterBox number={40} label="Projects" delay={0.2} />
        <CounterBox number={25} label="Employees" delay={0.4} />
        <CounterBox number={10} label="Customers" delay={0.6} />
        <CounterBox number={14} label="Solutions" delay={0.8} />

      </div>
    </section>
  );
};

export default CounterSection;