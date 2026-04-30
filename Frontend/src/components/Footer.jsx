import { Link } from "react-router-dom";
import logo from "../assets/img/logo/logo_01.png";
import { FaMapPin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-16 bg-black"
      // style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Us */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              ABR Retail delivers complete retail solutions including design,
              manufacturing, and execution of retail environments.
              With in-house production and expert teams, we ensure quality,
              speed, and impactful retail experiences.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-600">Retail Fixtures & Furniture</a></li>
              <li><a href="#" className="hover:text-amber-600">Visual Merchandising</a></li>
              <li><a href="#" className="hover:text-amber-600">Signage & Branding</a></li>
              <li><a href="#" className="hover:text-amber-600">Printing & Flex</a></li>
              <li><a href="#" className="hover:text-amber-600">Kiosk & Display Units</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-amber-600">About Us</Link></li>
              <li><Link to="#" className="hover:text-amber-600">Certifications</Link></li>
              <li><Link to="/past-projects" className="hover:text-amber-600">Past Work</Link></li>
              <li><Link to="/contact" className="hover:text-amber-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Featured Past Projects */}
          <div>
            <span className="flex gap-1">
              <FaMapPin className="text-amber-600 text-2xl"></FaMapPin>
              <h2 className="text-xl font-semibold mb-4">Office & Factory Address</h2>
            </span>
            <div className="">
              Plot No.6, 11/6, Gurukul Industrial Area Faridabad Haryana 121003
            </div>
          </div>
        </div>

        {/* Footer Logo & Contact */}
        <div className="mt-12 border-t border-gray-600 pt-8 flex flex-wrap items-center justify-between gap-8">

          {/* Logo */}
          <div class="bg-white">
            <a href="index.html" className="flex items-center">
              <img src={logo} alt="ABR Retail" className="h-16 p-0 m-0" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <i className="fas fa-phone-alt text-xl"></i>
            <div>
              <span className="block text-amber-600">Call Today!</span>
              <a href="tel:1234567890" className="text-lg font-semibold hover:text-amber-600">+91-9971837820</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Follow Us:</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-amber-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-xl hover:text-amber-600"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-xl hover:text-amber-600"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 flex flex-wrap items-center justify-between text-white text-sm">
          <p>© 2026 ABR Retail. All Rights Reserved | Design by .......</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-600">Privacy Policy</a>
            <a href="#" className="hover:text-amber-600">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
