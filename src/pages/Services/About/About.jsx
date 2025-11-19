import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaRocket } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";

const AboutMe = () => {
  return (
    <div id="about" className="max-w-[1450px] mx-auto lg:pt-20 mb-32 px-4 py-16 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-slate-900/50 rounded-3xl blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
        About Me
          </span>
          <motion.div
            className="h-1.5 w-32 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.h2>

        <div className="max-w-[1200px] mx-auto mt-16">
          {/* Top Section - Image and Intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl blur-2xl opacity-60 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl opacity-75 blur-sm" />
              <motion.img
                className="relative border-4 border-cyan-400/50 shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-300 w-full h-auto object-cover"
                src="/images/about-portrait.webp"
                alt="Chandon Kumar working as a Frontend Developer"
                loading="lazy"
                decoding="async"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              />
              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaCode className="text-white text-xl" />
              </motion.div>
            </motion.div>

            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-4">
                  Hello!
                </span>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  I'm <span className="text-cyan-400 font-bold">Chandon Kumar</span> — a Frontend Developer from Bangladesh with <span className="text-cyan-400 font-bold">3+ years of experience</span> creating modern websites that combine clean design and powerful functionality.
                </p>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed">
                As a React Developer, Next.js Developer, and JavaScript Developer, I specialize in transforming creative ideas into functional, accessible, and lightning-fast digital experiences. My passion for coding drives me to build innovative MERN stack solutions, reusable UI systems, and Portfolio Website experiences that convert visitors into customers for ambitious brands.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <motion.div
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-cyan-400 font-semibold">MERN Stack</span>
                </motion.div>
                <motion.div
                  className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-blue-500/10 border border-blue-500/30 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-blue-400 font-semibold">Frontend Expert</span>
                </motion.div>
                <motion.div
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-indigo-500/10 border border-indigo-500/30 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-indigo-400 font-semibold">UI/UX Designer</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Tabs Section */}
          <Tabs className="custom-tabs">
            <TabList className="flex gap-4 mb-8 border-b-2 border-blue-500/30 justify-center md:justify-start">
              <Tab className="px-6 py-3 text-gray-300 hover:text-cyan-400 transition-all cursor-pointer border-b-2 border-transparent hover:border-cyan-400 data-[selected]:text-cyan-400 data-[selected]:border-cyan-400 data-[selected]:border-b-2 font-semibold relative group">
                <span className="flex items-center gap-2">
                  <FaCode className="text-sm" />
                  Skills
                </span>
              </Tab>
              <Tab className="px-6 py-3 text-gray-300 hover:text-cyan-400 transition-all cursor-pointer border-b-2 border-transparent hover:border-cyan-400 data-[selected]:text-cyan-400 data-[selected]:border-cyan-400 data-[selected]:border-b-2 font-semibold relative group">
                <span className="flex items-center gap-2">
                  <FaBriefcase className="text-sm" />
                  Experience
                </span>
              </Tab>
              </TabList>

              {/* Skills Tab */}
              <TabPanel>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-2 gap-6 mt-8"
                >
                  {/* Frontend Technologies */}
                  <motion.div
                    className="relative group rounded-2xl border-l-4 border-cyan-400 p-8 bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-sm text-white shadow-2xl overflow-hidden border-r border-t border-b border-slate-700/50"
                    initial={{ opacity: 0, rotateX: -10 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.03, y: -8, rotateY: 2 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                    
                    {/* Glowing effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
                      animate={{
                        opacity: [0, 0.05, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="flex items-center gap-3 mb-6"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="p-3 bg-gradient-to-r from-cyan-500/30 to-cyan-600/30 rounded-xl border border-cyan-500/40 shadow-lg"
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
                          <FaCode className="text-cyan-400 text-2xl" />
                        </motion.div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Frontend Technologies</h2>
                      </motion.div>
                      
                      <motion.div
                        className="flex gap-3 flex-wrap mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {[
                          { src: "/images/icons/icon-react-devicon.svg", alt: "React", delay: 0 },
                          { src: "/images/icons/icon-nextjs.svg", alt: "Next.js", delay: 0.1 },
                          { src: "/images/icons/icon-typescript.svg", alt: "TypeScript", delay: 0.2 },
                          { src: "/images/icons/icon-materialui.svg", alt: "Material UI", delay: 0.3 },
                          { src: "/images/icons/icon-tailwind-svg.svg", alt: "Tailwind", delay: 0.4 },
                        ].map((tech, idx) => (
                          <motion.img
                            key={idx}
                            className="h-10 w-10 object-contain"
                            src={tech.src}
                            alt={tech.alt}
                        loading="lazy"
                        decoding="async"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: tech.delay,
                              type: "spring",
                              y: {
                                duration: 2 + idx * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.1,
                              },
                            }}
                            whileHover={{ scale: 1.3, rotate: [0, -10, 10, -10, 0], z: 50 }}
                            animate={{
                              y: [0, -5, 0],
                            }}
                          />
                        ))}
                      </motion.div>

                      {/* Progress Bars */}
                      <SkillBar title="React.js" percent="90%" color="cyan" />
                      <SkillBar title="Next.js" percent="85%" color="blue" />
                      <SkillBar title="TypeScript" percent="80%" color="cyan" />
                      <SkillBar title="Material UI" percent="85%" color="blue" />
                    </div>
                  </motion.div>

                  {/* Backend & Tools */}
                  <motion.div
                    className="relative group rounded-2xl border-l-4 border-blue-400 p-8 bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-sm text-white shadow-2xl overflow-hidden border-r border-t border-b border-slate-700/50"
                    initial={{ opacity: 0, rotateX: -10 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.03, y: -8, rotateY: -2 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                    
                    {/* Glowing effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
                      animate={{
                        opacity: [0, 0.05, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="flex items-center gap-3 mb-6"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="p-3 bg-gradient-to-r from-blue-500/30 to-indigo-600/30 rounded-xl border border-blue-500/40 shadow-lg"
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
                          <FaRocket className="text-blue-400 text-2xl" />
                        </motion.div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Backend & Tools</h2>
                      </motion.div>
                      
                      <motion.div
                        className="flex gap-3 flex-wrap mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {[
                          { src: "/images/icons/icon-nodejs.svg", alt: "Node.js", delay: 0 },
                          { src: "/images/icons/icon-express.svg", alt: "Express", delay: 0.1 },
                          { src: "/images/icons/icon-mongodb.svg", alt: "MongoDB", delay: 0.2 },
                          { src: "/images/icons/icon-git.svg", alt: "Git", delay: 0.3 },
                        ].map((tech, idx) => (
                          <motion.img
                            key={idx}
                            className="h-10 w-10 object-contain"
                            src={tech.src}
                            alt={tech.alt}
                            loading="lazy"
                            decoding="async"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: tech.delay + 0.5,
                              type: "spring",
                              y: {
                                duration: 2 + idx * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.1,
                              },
                            }}
                            whileHover={{ scale: 1.3, rotate: [0, 10, -10, 10, 0], z: 50 }}
                            animate={{
                              y: [0, -5, 0],
                            }}
                          />
                        ))}
                      </motion.div>

                    {/* Progress Bars */}
                      <SkillBar title="Node.js & Express" percent="75%" color="blue" />
                      <SkillBar title="MongoDB" percent="70%" color="cyan" />
                      <SkillBar title="API Integration" percent="85%" color="blue" />
                    </div>
                  </motion.div>
                </motion.div>
              </TabPanel>

              {/* Experience Tab */}
              <TabPanel>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Timeline Experience */}
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 opacity-30" />
                    
                    {/* Experience Card */}
                    <motion.div
                      className="relative pl-20 pb-12"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-6 top-0 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-slate-900 shadow-lg" />
                      
                      {/* Experience content */}
                      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border-l-4 border-cyan-400 rounded-xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden group">
                        {/* Background gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10">
                          <div className="flex items-start mb-4 flex-wrap gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <FaBriefcase className="text-cyan-400 text-2xl" />
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                  Front-end Developer
                                </h3>
                              </div>
                              <h4 className="text-xl font-semibold text-blue-400 mb-2">
                                Depth Search Limited
                              </h4>
                  </div>
                </div>
                          
                          <div className="space-y-4 mt-6">
                            <p className="text-gray-300 leading-relaxed">
                              As a Front-end Developer at Depth Search Limited, I'm responsible for creating 
                              engaging and responsive user interfaces using modern web technologies. I work 
                              closely with design teams to implement pixel-perfect layouts and ensure optimal 
                              user experiences across all devices.
                            </p>
                            
                            <div className="mt-6">
                              <h5 className="text-gray-400 font-semibold mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                                Key Responsibilities:
                              </h5>
                              <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                  <span className="text-cyan-400 mt-1.5">▹</span>
                                  <span>API Integration - Connecting frontend applications with RESTful APIs and ensuring seamless data flow</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-400 mt-1.5">▹</span>
                                  <span>Building functionalities with Next.js, TypeScript, and Material UI for robust web applications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-cyan-400 mt-1.5">▹</span>
                                  <span>Developing responsive and interactive web applications using React.js and Next.js</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-400 mt-1.5">▹</span>
                                  <span>Optimizing applications for maximum performance, speed, and scalability</span>
                                </li>
                              </ul>
                </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">
                                React.js
                              </span>
                              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">
                                Next.js
                              </span>
                              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-semibold border border-indigo-500/30">
                                TypeScript
                              </span>
                              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">
                                Material UI
                              </span>
                            </div>
                          </div>
                        </div>
                  </div>
                    </motion.div>
                  </div>
                </motion.div>
              </TabPanel>

            </Tabs>
        </div>
      </div>
    </div>
  );
};

// Reusable Skill Bar Component
const SkillBar = ({ title, percent, color = "cyan" }) => {
  const colorClasses = {
    cyan: "from-cyan-400 to-cyan-600",
    blue: "from-blue-400 to-blue-600",
    indigo: "from-indigo-400 to-indigo-600"
  };

  return (
  <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300 font-medium">{title}</span>
        <span className={`text-${color}-400 font-bold`}>{percent}</span>
    </div>
      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden shadow-inner">
      <motion.div
          className={`bg-gradient-to-r ${colorClasses[color]} h-3 rounded-full shadow-lg`}
        initial={{ width: 0 }}
        whileInView={{ width: percent }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);
};

export default AboutMe;
