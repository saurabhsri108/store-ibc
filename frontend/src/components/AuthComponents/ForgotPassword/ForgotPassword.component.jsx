import { Button, InputField, InputGroup, Label } from "../../FormComponents"
import {
  AuthForm,
  AuthContainer,
  ForgotImage,
  AuthLinks,
} from "../AuthForm.styles"
import { FaMailBulk } from "react-icons/fa"

const ForgotPassword = () => {
  return (
    <AuthContainer>
      <ForgotImage />
      <AuthForm>
        <h1 style={{ marginTop: 0 }}>Forgot Password?</h1>
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
          <Button type="submit" style={{ marginTop: "2rem" }}>
            <FaMailBulk />
            Reset Password
          </Button>
        </InputGroup>
        <InputGroup>
          <AuthLinks to="/auth/sign-in">
            Remembered your password? Login here
          </AuthLinks>
        </InputGroup>
      </AuthForm>
    </AuthContainer>
  )
}

export default ForgotPassword
