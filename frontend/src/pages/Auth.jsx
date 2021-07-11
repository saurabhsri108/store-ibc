import SignInForm from "../components/AuthComponents/SignInForm/SignInForm.component"
import SignUpForm from "../components/AuthComponents/SignUpForm/SignUpForm"
import ForgotPassword from "../components/AuthComponents/ForgotPassword/ForgotPassword.component"
import { motion } from "framer-motion"

const Auth = ({ history, location, match }) => {
  if (match.params.option === "sign-in")
    return (
      <motion.div
        key="signin-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <SignInForm />
      </motion.div>
    )
  if (match.params.option === "sign-up")
    return (
      <motion.div
        key="signup-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <SignUpForm />
      </motion.div>
    )
  if (match.params.option === "forgot-password")
    return (
      <motion.div
        key="forgotpassword-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ForgotPassword />
      </motion.div>
    )
  return null
}

export default Auth
