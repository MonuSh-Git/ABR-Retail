import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 p-3 shadow-lg transition duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } bg-gray-800 text-white hover:text-amber-600`}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up text-xl"></i>
    </button>
  );
};

export default ScrollTop;
