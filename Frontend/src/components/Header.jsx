import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/img/logo/logo_01.png";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Clients", path: "/clients" },
    { name: "Projects", path: "/past-projects" },
    // { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white border-b border-white/10 shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-16" : "h-16"
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {menu.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`relative text-xl font-bold ${
                  scrolled ? "text-black" : "text-black"
                } group`}
              >
                {item.name}

                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-green-600 px-5 py-2 rounded-full 
                         hover:bg-green-700 transition shadow-lg hover:shadow-white-500/30 text-white"
            >
              <FaPhoneAlt /> 
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* 🔷 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-72 h-full bg-gray-900 z-50 p-6"
            >
              {/* Top */}
              <div className="flex justify-between items-center mb-8">
                <img src={logo} className="h-10" />
                <button onClick={() => setOpen(false)}>
                  <FaTimes size={22} />
                </button>
              </div>

              {/* Menu */}
              <nav className="flex flex-col gap-6">
                {menu.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-lg text-gray-300 hover:text-blue-400 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Contact Now
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