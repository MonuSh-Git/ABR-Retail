import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "https://abr-retail.onrender.com/send-email",
        formData
      );

      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* 🔷 HERO */}
      <section className="relative py-20 pt-30 text-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Contact Us
          </h1>
          <p className="text-gray-300">
            Home / Contact
          </p>
        </div>
      </section>

      {/* 🔷 CONTACT INFO */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-green-500 font-semibold">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Let’s Build Something Great Together
            </h2>
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">

            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                text: "Plot No.6, 11/6, Gurukul Industrial Area Faridabad Haryana 121003",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Call Us",
                text: "+91 9971837820",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                text: "info@abrretail.in",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-4 rounded-xl text-center 
                           border border-white/10 hover:border-orange-500 
                           transition duration-300"
              >
                <div className="text-3xl text-orange-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-center mb-6">
              Send Us a Message
            </h3>

            {status && (
              <p className="text-center text-orange-500 mb-4">{status}</p>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-orange-500 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-orange-500 outline-none"
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-orange-500 outline-none"
                required
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-orange-500 outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-orange-500 outline-none md:col-span-2 h-32"
                required
              />

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-md md:col-span-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;