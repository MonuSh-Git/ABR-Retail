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
    <section className="bg-gray-900 py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-green-500 font-semibold">Our Strength</p>
          <h2 className="text-2xl md:text-4xl font-bold">
            What Makes Us Different
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="
                relative overflow-hidden p-6 md:p-8 rounded-xl text-center
                border border-white/10
                transition duration-500 group

                /* overlay */
                before:absolute before:inset-0 
                before:bg-green-600 
                before:origin-bottom-left 
                before:scale-0 
                before:skew-x-12
                before:transition-transform 
                before:duration-500 
                before:-z-0

                /* corner border */
                after:absolute after:top-0 after:right-0 
                after:w-0 after:h-0 
                after:border-t-2 after:border-r-2 
                after:border-green-400
                after:transition-all after:duration-500

                /* DESKTOP */
                hover:before:scale-100
                hover:after:w-full hover:after:h-full
                hover:shadow-green-500/20 hover:shadow-xl

                /* MOBILE TOUCH */
                active:before:scale-100
                active:after:w-full active:after:h-full
                active:scale-[0.97] active:shadow-lg

                focus:before:scale-100
              "
            >
              <div className="relative z-10">

                {/* Icon */}
                <div
                  className="
                    text-3xl md:text-4xl text-green-400 mb-4 
                    transition
                    group-hover:text-white
                    group-active:text-white
                    group-active:scale-90
                  "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h5
                  className="
                    text-lg md:text-xl font-semibold mb-3 
                    transition
                    group-hover:text-white
                    group-active:text-white
                  "
                >
                  {item.title}
                </h5>

                {/* Description */}
                <p
                  className="
                    text-gray-300 text-sm leading-relaxed 
                    transition
                    group-hover:text-white
                    group-active:text-white
                  "
                >
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            to="/project"
            className="
              px-5 py-2.5 md:px-6 md:py-3 
              bg-green-600 rounded-lg
              transition

              hover:bg-green-700
              active:bg-green-800 active:scale-95
            "
          >
            View Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Features;