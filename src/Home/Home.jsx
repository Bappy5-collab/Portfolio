import Resume from "../pages/Resume";
import About from "../pages/Services/About/About";
import Banner from "../pages/Services/Banner/Banner";
import Contact from "../pages/Services/Contact/Contact";
import Project from "../pages/Services/Projects/NavProject/Project";
import Projects from "../pages/Services/Projects/Projects";
import Services from "../pages/Services/Services";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
         <Banner></Banner>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
         >
            <About></About>
         </motion.div>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
         >
            <Services></Services>
         </motion.div>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
         >
            <Project></Project>
         </motion.div>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
         >
            <Contact></Contact>
         </motion.div>
        </motion.div>
    );
};

export default Home;