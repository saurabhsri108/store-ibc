import * as Form from "../../FormComponents"
import * as Component from "../AuthForm.styles"
import Loader from "../../Loading/Loading.component"
import Message from "../../Messages/Message.component"
import { FaGooglePlusSquare, FaSignInAlt } from "react-icons/fa"
import { GoogleLogin } from "react-google-login"
import { useEffect, useState } from "react"
import { userLogin } from "../../../redux/action-creators/user-action-creator"
import { useDispatch, useSelector } from "react-redux"

const SignInForm = ({ history, location }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)

  const dispatch = useDispatch()
  const { loadingUser, userInfo, error } = useSelector(
    (state) => state.userLogin
  )

  const redirect = location.search ? location.search.split("=")[1] : "/"

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, redirect, userInfo])

  const googleSuccessHandler = async (res) => {
    const { googleId, email } = res.profileObj
    dispatch(userLogin(email, googleId))
  }

  const googleFailureHandler = () => {
    alert("Google Sign In Failed. Try again!")
  }

  const signInHandler = (e) => {
    e.preventDefault()
    dispatch(userLogin(email, password))
  }

  return (
    <Component.AuthContainer>
      <Component.AuthForm onSubmit={signInHandler}>
        <h1 style={{ marginTop: 0 }}>Welcome Back!</h1>
        {loadingUser && <Loader />}
        {error && (
          <Message variant="error" width="100%" margin="0">
            {error}
          </Message>
        )}
        <Form.InputGroup>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.InputField
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@example.com"
            required
          />
        </Form.InputGroup>
        <Form.InputGroup>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.InputField
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            minLength="6"
            autoComplete="on"
            required
          />
        </Form.InputGroup>
        <Form.InputGroup>
          <Form.InputCheckbox
            name="remember_me"
            id="remember-me"
            value={remember}
            onChange={() => setRemember((prevRemember) => !prevRemember)}
          >
            Remember Me
          </Form.InputCheckbox>
        </Form.InputGroup>
        <Form.InputGroup>
          <Form.Button type="submit" style={{ marginTop: "2rem" }}>
            <FaSignInAlt />
            Sign In
          </Form.Button>
        </Form.InputGroup>
        <Form.InputGroup>
          <GoogleLogin
            clientId="737658306511-oi1irevlsosf3utuvcnc5diu8rrpbhe2.apps.googleusercontent.com"
            render={(renderProps) => (
              <Form.Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                bg="var(--color-google-signin-100)"
                bgh="var(--color-google-signin-90)"
              >
                <FaGooglePlusSquare />
                Sign in with Google
              </Form.Button>
            )}
            buttonText="Sign In Using Google"
            onSuccess={googleSuccessHandler}
            onFailure={googleFailureHandler}
            cookiePolicy={"single_host_origin"}
          />
        </Form.InputGroup>
        <Form.InputGroup>
          <Component.AuthLinks to="/auth/forgot-password">
            Forgot Password?
          </Component.AuthLinks>
          <Component.AuthLinks
            to={
              redirect ? `/auth/sign-up?redirect=${redirect}` : "/auth/sign-up"
            }
          >
            New member? Register here
          </Component.AuthLinks>
        </Form.InputGroup>
      </Component.AuthForm>
      <Component.SignInImage />
    </Component.AuthContainer>
  )
}

export default SignInForm
