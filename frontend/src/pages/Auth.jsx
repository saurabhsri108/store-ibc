import SignInForm from "../components/AuthComponents/SignInForm/SignInForm.component"
import SignUpForm from "../components/AuthComponents/SignUpForm/SignUpForm"
import ForgotPassword from "../components/AuthComponents/ForgotPassword/ForgotPassword.component"

const Auth = ({ history, location, match }) => {
  // console.log(history, location, match)

  if (match.params.option === "sign-in") return <SignInForm />
  if (match.params.option === "sign-up") return <SignUpForm />
  if (match.params.option === "forgot-password") return <ForgotPassword />
  return null
}

export default Auth
