import {
  Button,
  InputField,
  InputGroup,
  Label,
  InputCheckbox,
} from "../../FormComponents"
import {
  AuthForm,
  AuthContainer,
  SignInImage,
  AuthLinks,
} from "../AuthForm.styles"
import { FaGooglePlusSquare, FaSignInAlt } from "react-icons/fa"
import { GoogleLogin } from "react-google-login"

const SignInForm = () => {
  const responseGoogle = (response) => {
    if (response.error) {
      console.error("Login screen closed by the user")
      return
    }
    const { profileObj, tokenId } = response
    const { email, imageUrl, name, givenName, familyName } = profileObj

    localStorage.setItem("profile", JSON.stringify(profileObj))
  }
  return (
    <AuthContainer>
      <AuthForm>
        <h1 style={{ marginTop: 0 }}>Welcome Back!</h1>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <InputField
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <InputField
            type="password"
            name="password"
            id="password"
            placeholder="********"
            min="8"
            autoComplete="on"
            required
          />
        </InputGroup>
        <InputGroup>
          <InputCheckbox name="remember_me" id="remember-me">
            Remember Me
          </InputCheckbox>
        </InputGroup>
        <InputGroup>
          <Button type="submit" style={{ marginTop: "2rem" }}>
            <FaSignInAlt />
            Sign In
          </Button>
        </InputGroup>
        <InputGroup>
          <GoogleLogin
            clientId="737658306511-oi1irevlsosf3utuvcnc5diu8rrpbhe2.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                bg="var(--color-google-signin-100)"
                bgh="var(--color-google-signin-90)"
              >
                <FaGooglePlusSquare />
                Sign in with Google
              </Button>
            )}
            buttonText="Sign In Using Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </InputGroup>
        <InputGroup>
          <AuthLinks to="/auth/forgot-password">Forgot Password?</AuthLinks>
          <AuthLinks to="/auth/sign-up">New member? Register here</AuthLinks>
        </InputGroup>
      </AuthForm>
      <SignInImage />
    </AuthContainer>
  )
}

export default SignInForm
