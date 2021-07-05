import { Button, InputField, InputGroup, Label } from "../../FormComponents"
import {
  AuthForm,
  AuthContainer,
  SignUpImage,
  AuthLinks,
} from "../AuthForm.styles"
import { FaGooglePlusSquare, FaSignInAlt } from "react-icons/fa"
import { GoogleLogin } from "react-google-login"

const SignUpForm = () => {
  const responseGoogle = (response) => {
    console.log(response)
  }
  return (
    <AuthContainer>
      <SignUpImage />
      <AuthForm>
        <h1 style={{ marginTop: 0 }}>New Member?</h1>
        <InputGroup>
          <Label htmlFor="username">Username</Label>
          <InputField
            type="text"
            id="username"
            name="username"
            placeholder="johndoe001"
            required
          />
        </InputGroup>
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
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="cpassword">Confirm Password</Label>
          <InputField
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="********"
            min="8"
            required
          />
        </InputGroup>
        <InputGroup>
          <Button type="submit" style={{ marginTop: "2rem" }}>
            <FaSignInAlt />
            Sign Up
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
                Sign up with Google
              </Button>
            )}
            buttonText="Sign In Using Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </InputGroup>
        <InputGroup>
          <AuthLinks to="/auth/sign-in">Already a member? Login here</AuthLinks>
        </InputGroup>
      </AuthForm>
    </AuthContainer>
  )
}

export default SignUpForm
