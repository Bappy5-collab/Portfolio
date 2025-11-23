import React from "react";
import { motion } from "framer-motion";
import { FaPlug, FaServer, FaCode, FaMobileAlt } from "react-icons/fa";
import FloatingParticles from '../../components/FloatingParticles';

const services = [
  {
    title: "API Integration",
    description:
      "Seamless integration of third-party APIs and RESTful services to connect your applications with external data sources. I specialize in creating robust API connections, handling authentication, error handling, and data transformation to ensure smooth communication between frontend and backend systems.",
    icon: <FaPlug className="text-4xl" />,
    gradient: "from-cyan-400 to-cyan-600",
    borderColor: "border-cyan-400",
  },
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive web applications using React.js, Next.js, TypeScript, and Material UI. I create pixel-perfect user interfaces with optimal performance, seamless user experiences, and cross-browser compatibility. From component architecture to state management, I ensure scalable and maintainable code.",
    icon: <FaCode className="text-4xl" />,
    gradient: "from-blue-400 to-indigo-600",
    borderColor: "border-blue-400",
  },
  {
    title: "Backend Development",
    description:
      "Developing robust server-side applications using Node.js and Express.js. I create RESTful APIs, handle database operations with MongoDB, implement authentication and authorization, and ensure secure data handling. Building scalable backend architecture that supports your frontend applications efficiently.",
    icon: <FaServer className="text-4xl" />,
    gradient: "from-indigo-400 to-blue-600",
    borderColor: "border-indigo-400",
  },
  {
    title: "Responsive Design",
    description:
      "Creating mobile-first, responsive designs that work flawlessly across all devices and screen sizes. Using modern CSS frameworks like Tailwind CSS and Material UI, I ensure your applications look and function perfectly on desktops, tablets, and mobile devices.",
    icon: <FaMobileAlt className="text-4xl" />,
    gradient: "from-cyan-400 to-blue-600",
    borderColor: "border-cyan-400",
  },
];

const Services = () => {
  return (
    <div id="services" className="mb-32 max-w-[1450px] mx-auto pt-10 px-4 py-16 relative">
      <FloatingParticles count={15} />
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            My Services
          </span>
        </h1>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Crafting digital experiences that combine stunning design with powerful functionality
        </p>
      </motion.div>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradient={service.gradient}
              borderColor={service.borderColor}
              delay={index * 0.1}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, icon, gradient, borderColor, delay }) => (
  <motion.div
    className={`relative group rounded-2xl p-8 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 text-white shadow-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm`}
    initial={{ opacity: 0, y: 50, rotateX: -10 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, type: "spring", stiffness: 100 }}
    whileHover={{ scale: 1.03, y: -10, rotateY: 2 }}
    style={{ transformStyle: "preserve-3d" }}
  >
    {/* Animated gradient background */}
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
    
    {/* Glowing border effect */}
    <motion.div
      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
      animate={{
        opacity: [0, 0.1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    
    {/* Animated grid pattern */}
    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }} />
    </div>

    {/* Icon Container with 3D effect */}
    <motion.div
      className="relative z-10 mb-6"
      whileHover={{ scale: 1.1, rotateY: 15 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}>
        <motion.div
          className="text-white"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>

    {/* Content */}
    <div className="relative z-10">
      <motion.h2
        className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-gray-300 leading-relaxed text-justify"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
      >
        {description}
      </motion.p>
    </div>

    {/* Animated corner accent */}
    <motion.div
      className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-20 rounded-full blur-2xl`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    
    {/* Bottom accent line */}
    <motion.div
      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient}`}
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: delay + 0.5 }}
    />
  </motion.div>
);

export default Services;
