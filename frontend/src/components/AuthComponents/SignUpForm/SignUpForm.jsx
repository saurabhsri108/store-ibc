import { Button, InputField, InputGroup, Label } from "../../FormComponents"
import {
  AuthForm,
  AuthContainer,
  SignUpImage,
  AuthLinks,
} from "../AuthForm.styles"
import { FaGooglePlusSquare, FaSignInAlt } from "react-icons/fa"

const SignUpForm = () => {
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
          <Button
            bg="var(--color-google-signin-100)"
            bgh="var(--color-google-signin-90)"
          >
            <FaGooglePlusSquare />
            Sign Up With Google
          </Button>
        </InputGroup>
        <InputGroup>
          <AuthLinks to="/auth/sign-in">Already a member? Login here</AuthLinks>
        </InputGroup>
      </AuthForm>
    </AuthContainer>
  )
}

export default SignUpForm
