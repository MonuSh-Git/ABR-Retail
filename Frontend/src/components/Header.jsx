import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/img/logo/logo_01.png";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Clients", path: "/clients", icon: <FaUsers /> },
    { name: "Projects", path: "/past-projects", icon: <FaProjectDiagram /> },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-12 md:h-16 transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {menu.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="relative text-xl font-bold text-black group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-green-600 px-5 py-2 rounded-full 
                         hover:bg-green-700 transition shadow-lg text-white"
            >
              <FaPhoneAlt />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-[70%] max-w-sm h-full 
                         bg-gray-900 z-50 p-6 shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button onClick={() => setOpen(false)}>
                  <FaTimes size={24} className="text-white" />
                </button>
              </div>

              {/* Menu Links with Icons */}
              <nav className="flex flex-col gap-6">
                {menu.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 text-lg font-medium text-gray-300 
                               hover:text-green-400 active:text-green-400 
                               transition duration-200"
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-12 flex justify-center">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2.5 bg-green-600 text-white rounded-lg 
               text-sm font-medium 
               hover:bg-green-700 active:bg-green-800 
               transition shadow-md"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
