import HomeSection from "../components/HomeSection/HomeSection.component";
import AboutSection from "../components/AboutSection/AboutSection.component";
import ContactSection from "../components/ContactSection/ContactSection.component";
import { motion } from "framer-motion";
import { pageAnimateVariants } from "../helpers/pageAnimations";

const Home = () => (
  <motion.div
    variants={pageAnimateVariants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    <HomeSection />
    <AboutSection />
    <ContactSection />
  </motion.div>
);

export default Home;
