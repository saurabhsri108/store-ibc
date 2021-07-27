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

  const googleSuccessHandler = (res) => {
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
        {loadingUser && <Loader height="auto" />}
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
          <Form.Button
            type="submit"
            style={{ marginTop: "2rem", marginRight: "1rem" }}
          >
            <FaSignInAlt />
            Sign In
          </Form.Button>
          <GoogleLogin
            clientId="737658306511-oi1irevlsosf3utuvcnc5diu8rrpbhe2.apps.googleusercontent.com"
            render={(renderProps) => (
              <Form.Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                bg="var(--color-google-signin-100)"
                bgh="var(--color-google-signin-90)"
                style={{ marginTop: "1rem" }}
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
      <div>
        <Component.SignInImage />
        <Form.InputGroup>
          <Form.Button
            bg="var(--color-white-100)"
            bgh="hsla(0, 0%, 90%, 0.8)"
            color="var(--color-black-70)"
            style={{
              marginTop: "1rem",
              marginRight: "1rem",
              border: "1px solid var(--color-black-70)",
            }}
            onClick={() => dispatch(userLogin("user001@storejs.com", "123456"))}
          >
            <FaSignInAlt />
            Dummy User Login
          </Form.Button>
          <Form.Button
            bg="var(--color-white-100)"
            bgh="hsla(0, 0%, 90%, 0.8)"
            color="var(--color-black-70)"
            style={{
              marginTop: "1rem",
              border: "1px solid var(--color-black-70)",
            }}
            onClick={() =>
              dispatch(userLogin("admin001@storejs.com", "123456"))
            }
          >
            <FaSignInAlt />
            Dummy Admin Login
          </Form.Button>
        </Form.InputGroup>
      </div>
    </Component.AuthContainer>
  )
}

export default SignInForm
