import { useEffect, useState } from "react";

const Preloader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 2000);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Rotating Gradient Ring */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-transparent 
          border-t-green-500 border-r-orange-500 animate-spin"></div>

        {/* Inner Pulse Circle */}
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
      </div>

      {/* Brand Text */}
      <h1 className="mt-6 text-xl font-semibold tracking-wider text-white">
        <span className="text-green-500">ABR</span>{" "}
        <span className="text-orange-500">Retail</span>
      </h1>

      {/* Tagline */}
      <p className="text-sm text-gray-400 mt-2 animate-pulse">
        Crafting Retail Experiences...
      </p>
    </div>
  );
};

export default Preloader;