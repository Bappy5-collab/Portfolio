import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900 border-t border-blue-500/20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 opacity-50" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo and Copyright */}
          <motion.aside
            className="flex flex-col md:flex-row items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              className="h-[70px] drop-shadow-lg"
              src="public/images/logo.webp"
              alt="Chandon Kumar personal logo"
              width="70"
              height="70"
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className="text-gray-400 text-center md:text-left">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </motion.aside>

          {/* Right: Social Links */}
          <motion.nav
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="https://github.com/Bappy5-collab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-cyan-400 hover:text-cyan-300 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/chandonkumerbappy.chandonkumerbappy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-400 hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chandon-kumar-4033072a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-indigo-400 hover:text-indigo-300 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.nav>
        </div>

        {/* Bottom border with gradient */}
        <motion.div
          className="mt-8 pt-8 border-t border-blue-500/20 text-center space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            Designed & Developed with <span className="text-cyan-400">♥</span> by Chandon Kumar
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">
            Keywords: Frontend Developer · React Developer · Next.js Developer · MERN Stack Developer · JavaScript Developer · Hire Frontend Developer · Portfolio Website
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
