import SignInForm from "../components/AuthComponents/SignInForm/SignInForm.component"
import SignUpForm from "../components/AuthComponents/SignUpForm/SignUpForm"
import ForgotPassword from "../components/AuthComponents/ForgotPassword/ForgotPassword.component"

const Auth = ({ history, location, match }) => {
  if (match.params.option === "sign-in")
    return <SignInForm history={history} location={location} />
  if (match.params.option === "sign-up")
    return <SignUpForm history={history} location={location} />
  if (match.params.option === "forgot-password")
    return <ForgotPassword history={history} location={location} />
  return null
}

export default Auth
