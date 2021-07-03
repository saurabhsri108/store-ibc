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

const SignInForm = () => {
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
          <Button
            bg="var(--color-google-signin-100)"
            bgh="var(--color-google-signin-90)"
          >
            <FaGooglePlusSquare />
            Sign In Using Google
          </Button>
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
