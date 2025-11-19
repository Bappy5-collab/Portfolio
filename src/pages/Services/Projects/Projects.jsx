import { LiaEyeSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Eco AI",
    description:
      "AI-powered eco-friendly web application platform with advanced features and modern design.",
    img: "/images/project-eco-ai.webp",
    code: "https://github.com/Bappy5-collab/E-ai",
    live: "https://eco-ai-lime.vercel.app/",
  },
  {
    title: "Trips Fables",
    description:
      "Through this website, users can easily find and book their favorite travel destinations. Users can register/login, manage wishlists, and access a user dashboard. Admins can add sightseeing locations.",
    img: "/images/project-trip-fables.webp",
    code: "https://github.com/chandonkumar23/Trips-Fables-client-site",
    live: "https://assignment-12-17c04.web.app/",
  },
  {
    title: "CHOICE Events",
    description:
      "An educational event management platform with private routes, responsive design, user authentication, and secure password validation. Features include blog access, team section, and alerts on auth actions.",
    img: "/images/project-dvs.webp",
    code: "https://github.com/chandonkumar23/Choice-event",
    live: "https://event-management-8ba41.web.app/",
  },
  {
    title: "Handy",
    description:
      "A home service exchange site where users can post, browse, and book services. Features popular services, details view, conditional access based on auth, and booking functionality.",
    img: "/images/project-restupos.webp",
    code: "https://github.com/chandonkumar23/Handy-client-site",
    live: "https://assignment-7bce6.web.app",
  },
];

const Projects = () => {
  return (
    <div className="mb-32 max-w-[1450px] mx-auto px-4">
      <motion.h1
        className="text-4xl font-thin border-s-4 border-green-500 ps-3 font-bold mb-7"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h1>

      <div className="max-w-[1200px] mx-auto">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="grid lg:grid-cols-2 gap-6 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <img
                    className="h-[300px] w-full object-cover rounded-md shadow-md"
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2EC1DB] to-sky-500/60">
                    {project.title}
                  </h2>
                  <p className="text-justify text-white/90">{project.description}</p>
                  <div className="flex gap-4">
                    <Link
                      to={project.code}
                      target="_blank"
                      className="flex items-center gap-1 hover:text-green-400 transition"
                    >
                      <FaGithub className="text-2xl" />
                      <span>View Code</span>
                    </Link>
                    <Link
                      to={project.live}
                      target="_blank"
                      className="flex items-center gap-1 hover:text-green-400 transition"
                    >
                      <LiaEyeSolid className="text-2xl" />
                      <span>Live Preview</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
