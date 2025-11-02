import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Resume from "../../Resume";
import { TypeAnimation } from 'react-type-animation';
import SpiderAnimation from '../../../components/SpiderAnimation';

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="home" className="mb-10 relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{
          backgroundImage: "url('https://i.postimg.cc/PNsW2VnY/Chandon-kumar-6.png')",
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated gradient blobs with mouse parallax */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-blue-600 rounded-full filter blur-3xl opacity-30"
        animate={{ 
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        style={{ 
          top: '-300px', 
          left: '-300px', 
          zIndex: 0,
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
      />
      <motion.div
        className="absolute w-[700px] h-[700px] bg-cyan-500 rounded-full filter blur-3xl opacity-25"
        animate={{ 
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 30, repeat: Infinity }}
        style={{ 
          bottom: '-200px', 
          right: '-200px', 
          zIndex: 0,
          x: mousePosition.x * -0.7,
          y: mousePosition.y * -0.7,
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-indigo-600 rounded-full filter blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 35, repeat: Infinity }}
        style={{ 
          top: '50%', 
          left: '50%', 
          zIndex: 0,
          x: `calc(-50% + ${mousePosition.x * 0.3}px)`,
          y: `calc(-50% + ${mousePosition.y * 0.3}px)`,
        }}
      />

      {/* Spider Animation */}
      <div className="absolute inset-0 z-[1]">
        <SpiderAnimation />
      </div>

      {/* Animated grid pattern overlay with parallax */}
      <motion.div 
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          x: mousePosition.x * 0.2,
          y: mousePosition.y * 0.2,
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </motion.div>

      {/* Content */}
      <section className="relative z-10 container mx-auto px-6 py-16 grid lg:grid-cols-2 items-center gap-12 min-h-screen">
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-lg md:text-xl font-semibold text-cyan-400 mb-2 block">
              Welcome to my Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Hi, I'm
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
              Chandon Kumar
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl mt-6 mb-8 text-gray-300 font-semibold h-12 flex items-center"
          >
            <TypeAnimation
              sequence={[
                "MERN Stack Developer", 2000,
                "Frontend Developer", 2000,
                "Full Stack Developer", 2000,
                "UI/UX Enthusiast", 2000
              ]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center gap-5 text-3xl"
          >
            <motion.a
              href="https://github.com/Bappy5-collab"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/chandonkumerbappy.chandonkumerbappy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-400 hover:text-blue-300 transition-all duration-300 cursor-pointer"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chandon-kumar-4033072a0/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-indigo-400 hover:text-indigo-300 transition-all duration-300 cursor-pointer"
            >
              <FaLinkedin />
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Resume />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-75 blur-xl animate-pulse" />
            <motion.img
              className="relative rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-4 border-cyan-400/50 shadow-2xl object-cover z-10"
              src="https://i.ibb.co/0py233V3/Untitled-Project.jpg"
              alt="Chandon Kumar"
              whileHover={{ 
                boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)",
                borderColor: "rgba(59, 130, 246, 0.8)"
              }}
            />
            {/* Floating particles around image */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
