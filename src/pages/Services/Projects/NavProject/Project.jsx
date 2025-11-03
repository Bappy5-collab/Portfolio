import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = () => {
    const projectData = [
        {
            id: 5,
            title: "Perfect AI",
            image: "https://i.ibb.co.com/4RYHDcgY/Screenshot-2025-10-31-185529.png",
            description: "AI-powered web application platform.",
            liveLink: "https://www.perfect-ai.com",
            codeLink: "",
            status: "NEW",
        },
        {
            id: 1,
            title: "DVS",
            image: "https://i.ibb.co/hxGY0TPK/Screenshot-2025-06-23-165920.png",
            description: "Electronic voting system web application.",
            liveLink: "https://electronic-voting-system-beta.vercel.app",
            codeLink: "https://github.com/dreamwarrior6m/Electronic-Voting-System",
            status: "NEW",
        },
        {
            id: 2,
            title: "Trip Fables",
            image: "https://i.ibb.co/SXtyRrSW/Screenshot-2025-06-23-164330.png",
            description: "A Travel Agency website.",
            liveLink: "https://trips-fables.vercel.app/",
            codeLink: "https://github.com/chandonkumar23/Trips-Fables-client-site/tree/main/src",
            status: "NEW",
        },
        {
            id: 3,
            title: "RestuPOS",
            image: "https://i.ibb.co/4Z72CNHs/Screenshot-2025-06-23-165625.png",
            description: "A Restaurant pos website.",
            liveLink: "https://restupos-24070.web.app",
            codeLink: "https://github.com/chandonkumar23/Restu-POs-Client",
            status: "NEW",
        },
        {
            id: 4,
            title: "Furns",
            image: "https://i.ibb.co/h1L7zt6G/Screenshot-2025-06-23-170313.png",
            description: "E-commerce Landing page.",
            liveLink: "https://restupos-24070.web.app",
            codeLink: "https://github.com/chandonkumar23/Restu-POs-Client",
            status: "NEW",
        },
    ];

    return (
        <div id="projects" className="py-16">
            <div className="max-w-[1450px] mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            My Projects
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
                        Showcasing my recent work and creative solutions
                    </p>
                </motion.div>

                <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {projectData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project, index }) => (
    <motion.div
        className="group relative bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-800/95 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 60, rotateY: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05, y: -15, rotateY: 5, z: 50 }}
        style={{ transformStyle: "preserve-3d" }}
    >
        {/* Animated background glow */}
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
            animate={{
                opacity: [0, 0.05, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />

        {/* Image Container with parallax effect */}
        <div className="relative h-52 overflow-hidden">
            <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {/* Animated overlay on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
            
            {/* Floating Status Badge */}
            <motion.div
                className="absolute top-4 right-4 z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
            >
                <motion.span
                    className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-xs font-bold rounded-full shadow-lg block"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{
                        boxShadow: [
                            "0 4px 14px rgba(34, 211, 238, 0.3)",
                            "0 4px 20px rgba(59, 130, 246, 0.5)",
                            "0 4px 14px rgba(34, 211, 238, 0.3)",
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {project.status}
                </motion.span>
            </motion.div>
        </div>

        {/* Content with stagger animation */}
        <motion.div
            className="p-6 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
        >
            <motion.h3
                className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"
                whileHover={{ x: 5 }}
            >
                {project.title}
            </motion.h3>
            <motion.p
                className="text-gray-400 mb-4 text-sm leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
            >
                {project.description}
            </motion.p>
            
            {/* Animated Action Buttons */}
            <motion.div
                className="flex gap-3 mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            >
                {project.liveLink && (
                    <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-semibold text-sm transition-all shadow-lg relative overflow-hidden group/btn"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                        />
                        <FaExternalLinkAlt className="text-xs relative z-10" />
                        <span className="relative z-10">Live Preview</span>
                    </motion.a>
                )}
                {project.codeLink && (
                    <motion.a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold text-sm transition-all shadow-lg relative overflow-hidden group/btn"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                        />
                        <FaGithub className="relative z-10" />
                        <span className="relative z-10">Code</span>
                    </motion.a>
                )}
            </motion.div>
        </motion.div>

        {/* Animated border gradient */}
        <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur-2xl"
            animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
            }}
        />
    </motion.div>
);

export default Project;
