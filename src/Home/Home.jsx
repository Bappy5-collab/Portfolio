import Resume from "../pages/Resume";
import About from "../pages/Services/About/About";
import Banner from "../pages/Services/Banner/Banner";
import Contact from "../pages/Services/Contact/Contact";
import Project from "../pages/Services/Projects/NavProject/Project";
import Projects from "../pages/Services/Projects/Projects";
import Services from "../pages/Services/Services";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Hire Frontend & MERN Stack Developer | Chandon Kumar</title>
            <meta
                name="description"
                content="Portfolio website of Chandon Kumar — a JavaScript, React, and Next.js Developer crafting high-performing MERN stack products, motion-rich landing pages, and accessible experiences."
            />
            <link rel="canonical" href="https://chandon-kumar-portfolio.vercel.app/" />
            <meta property="og:title" content="Hire Frontend & MERN Stack Developer | Chandon Kumar" />
            <meta
                property="og:description"
                content="Discover React, Next.js, and MERN stack case studies, services, and ways to hire Chandon Kumar for your next project."
            />
            <meta property="og:url" content="https://chandon-kumar-portfolio.vercel.app/" />
            <meta property="og:image" content="https://chandon-kumar-portfolio.vercel.app/public/images/hero-portrait.webp" />
            <meta name="twitter:title" content="Hire Frontend & MERN Stack Developer | Chandon Kumar" />
            <meta
                name="twitter:description"
                content="Frontend Developer portfolio featuring React, Next.js, and JavaScript projects ready for hire."
            />
        </Helmet>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
         <Banner />
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
         >
            <About />
         </motion.div>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
         >
            <Services />
         </motion.div>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
         >
            <Project />
         </motion.div>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
         >
            <Contact />
         </motion.div>
        </motion.div>
        </>
    );
};

export default Home;