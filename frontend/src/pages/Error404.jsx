import Error from "../components/ErrorComponent/Error.component"
import { motion } from "framer-motion"

const Error404 = () => (
  <motion.div
    key="home-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Error />
  </motion.div>
)

export default Error404
