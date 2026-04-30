import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaIndustry, FaTools, FaBullseye } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "To deliver modern and cost-effective infrastructure solutions aligned with evolving industry standards.",
    icon: <FaBullseye />,
  },
  {
    id: 2,
    title: "Our Expertise",
    description:
      "We specialize in project planning, execution, and management across civil, road, and infrastructure domains.",
    icon: <FaTools />,
  },
  {
    id: 3,
    title: "Industrial Solutions",
    description:
      "Providing reliable, scalable, and high-quality solutions tailored for industrial and retail sectors.",
    icon: <FaIndustry />,
  },
];

const Features = () => {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔷 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-green-500 font-semibold">Our Strength</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Makes Us Different
          </h2>
        </motion.div>

        {/* 🔷 Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="
                relative overflow-hidden p-8 rounded-xl text-center
                border border-white/10
                transition duration-500 group

                before:absolute before:inset-0 
                before:bg-green-600 
                before:origin-bottom-left 
                before:scale-0 
                before:skew-x-12
                before:transition-transform 
                before:duration-500 
                before:-z-0

                hover:before:scale-100

                after:absolute after:top-0 after:right-0 
                after:w-0 after:h-0 
                after:border-t-2 after:border-r-2 
                after:border-green-400
                after:transition-all after:duration-500

                hover:after:w-full hover:after:h-full

                hover:shadow-green-500/20 hover:shadow-xl
              "
            >
              {/* Content */}
              <div className="relative z-10">

                {/* Icon */}
                <div className="text-4xl text-green-400 mb-4 
                                group-hover:text-white transition">
                  {item.icon}
                </div>

                {/* Title */}
                <h5 className="text-xl font-semibold mb-3 
                               group-hover:text-white">
                  {item.title}
                </h5>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed 
                              group-hover:text-white">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* 🔷 Button */}
        <div className="text-center mt-12">
          <Link
            to="/project"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 
                       transition rounded-lg"
          >
            View Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Features;