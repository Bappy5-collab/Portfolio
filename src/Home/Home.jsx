import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Banner from "../pages/Services/Banner/Banner";
import About from "../pages/Services/About/About";
import SkillsSection from "../pages/Services/SkillsSection/SkillsSection";
import Services from "../pages/Services/Services";
import Project from "../pages/Services/Projects/NavProject/Project";
import Contact from "../pages/Services/Contact/Contact";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Chandon Kumar Bappy — Full Stack Engineer</title>
        <meta
          name="description"
          content="Professional portfolio of Chandon Kumar Bappy. Full Stack Engineer specializing in React, Next.js, MERN stack, SaaS, and AI integration. Available for hire."
        />
        <link rel="canonical" href="https://chandon-kumar-portfolio.vercel.app/" />
        <meta property="og:title" content="Chandon Kumar Bappy — Full Stack Engineer" />
        <meta
          property="og:description"
          content="Full Stack Engineer: React, Next.js, MERN stack. Portfolio, projects, and contact."
        />
        <meta property="og:url" content="https://chandon-kumar-portfolio.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chandon Kumar Bappy — Full Stack Engineer" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Banner />
        <About />
        <SkillsSection />
        <Project />
        <Services />
        <Contact />
      </motion.div>
    </>
  );
}
