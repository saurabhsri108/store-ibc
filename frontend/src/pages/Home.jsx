import HomeSection from "../components/HomeSection/HomeSection.component"
import AboutSection from "../components/AboutSection/AboutSection.component"
import ContactSection from "../components/ContactSection/ContactSection.component"
import { motion } from "framer-motion"

const Home = () => (
  <motion.div
    key="home-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <HomeSection />
    <AboutSection />
    <ContactSection />
  </motion.div>
)

export default Home
