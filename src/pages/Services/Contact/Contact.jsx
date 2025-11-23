import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Resume from "../../Resume";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j1e3cve",
        "template_ajw3pud",
        form.current,
        "xYuNdp0HE0k2IclfW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <motion.div
      id="contact"
      className="mb-10 sm:mb-16 md:mb-20 max-w-[1450px] mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Contact Me
          </span>
        </h1>
        <motion.div
          className="h-1 w-16 sm:w-24 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-3 sm:mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto px-2">
          Let's connect and bring your ideas to life
        </p>
      </motion.div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left: Form */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -40, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Modern glassmorphism card */}
            <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }} />
              </div>

              <div className="relative z-10 space-y-6">
                <motion.div
                  className="space-y-2 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">
                    Name
                  </label>
                  <motion.div
                    className="relative"
                    whileFocus={{ scale: 1.01 }}
                  >
                    <motion.input
                      type="text"
                      name="user_name"
                      placeholder="Enter Your Name"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base bg-slate-800/80 border-2 border-slate-700/50 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all backdrop-blur-sm"
                      required
                      whileFocus={{ borderColor: "rgba(34, 211, 238, 1)" }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                      initial={{ width: 0 }}
                      whileFocus={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="space-y-2 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">
                    Email
                  </label>
                  <motion.div
                    className="relative"
                    whileFocus={{ scale: 1.01 }}
                  >
                    <motion.input
                      type="email"
                      name="user_email"
                      placeholder="Enter Your Email"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base bg-slate-800/80 border-2 border-slate-700/50 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all backdrop-blur-sm"
                      required
                      whileFocus={{ borderColor: "rgba(34, 211, 238, 1)" }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                      initial={{ width: 0 }}
                      whileFocus={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="space-y-2 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-cyan-400 font-semibold mb-2 text-sm uppercase tracking-wider">
                    Message
                  </label>
                  <motion.div
                    className="relative"
                    whileFocus={{ scale: 1.01 }}
                  >
                    <motion.textarea
                      name="message"
                      rows="5"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base bg-slate-800/80 border-2 border-slate-700/50 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all resize-none backdrop-blur-sm"
                      placeholder="Write your message..."
                      required
                      whileFocus={{ borderColor: "rgba(34, 211, 238, 1)" }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                      initial={{ width: 0 }}
                      whileFocus={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-bold rounded-lg sm:rounded-xl shadow-xl relative overflow-hidden group/btn text-base sm:text-lg"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Send Message
                    </motion.span>
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      →
                    </motion.span>
                  </span>
                  
                  {/* Glowing effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover/btn:opacity-30 blur-xl"
                    animate={{
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden mt-6 lg:mt-0">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-cyan-500/10"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <div className="relative z-10 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Chandon Kumar
                  </h2>
                  <p className="text-gray-400 text-base sm:text-lg">Web Developer</p>
                </motion.div>
                
                <div className="space-y-4">
                  <motion.a
                    href="tel:+8801794912083"
                    className="group relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                        boxShadow: [
                          "0 4px 14px rgba(34, 211, 238, 0.2)",
                          "0 4px 20px rgba(34, 211, 238, 0.4)",
                          "0 4px 14px rgba(34, 211, 238, 0.2)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FaPhoneAlt className="text-cyan-400 text-xl" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Phone</p>
                      <p className="text-white font-semibold text-sm sm:text-lg truncate">+88 01794912083</p>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.a>
                  
                  <motion.a
                    href="mailto:chandonkumar2023@gmail.com"
                    className="group relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-500/30"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      animate={{
                        boxShadow: [
                          "0 4px 14px rgba(59, 130, 246, 0.2)",
                          "0 4px 20px rgba(59, 130, 246, 0.4)",
                          "0 4px 14px rgba(59, 130, 246, 0.2)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <CgMail className="text-blue-400 text-2xl" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Email</p>
                      <p className="text-white font-semibold text-xs sm:text-base md:text-lg break-all">chandonkumar2023@gmail.com</p>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.a>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-3 sm:mb-4">Connect With Me</h3>
                  <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
                    <motion.a
                      href="https://github.com/Bappy5-collab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-400/50 transition-all group/icon"
                      whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-cyan-400 text-xl sm:text-2xl relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity"
                      />
                    </motion.a>
                    <motion.a
                      href="https://www.facebook.com/chandonkumerbappy.chandonkumerbappy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-4 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-blue-400/50 transition-all group/icon"
                      whileHover={{ scale: 1.1, y: -5, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaFacebook className="text-blue-400 text-xl sm:text-2xl relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity"
                      />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/chandon-kumar-4033072a0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-4 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-indigo-400/50 transition-all group/icon"
                      whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin className="text-indigo-400 text-xl sm:text-2xl relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity"
                      />
                    </motion.a>
                    <motion.div
                      className="relative p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-400/50 transition-all group/icon"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Resume />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl opacity-0 group-hover/icon:opacity-100 transition-opacity"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
