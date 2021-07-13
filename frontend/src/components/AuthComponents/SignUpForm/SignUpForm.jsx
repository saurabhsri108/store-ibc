import * as Form from "../../FormComponents"
import * as Component from "../AuthForm.styles"
import Loader from "../../Loading/Loading.component"
import Message from "../../Messages/Message.component"
import { FaGooglePlusSquare, FaSignInAlt } from "react-icons/fa"
import { GoogleLogin } from "react-google-login"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userRegister } from "../../../redux/action-creators/user-action-creator"

const SignUpForm = ({ history, location }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")

  const dispatch = useDispatch()

  const { loadingUser, userInfo, error } = useSelector(
    (state) => state.userRegister
  )

  const redirect = location.search ? location.search.split("=")[1] : "/"
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, redirect, userInfo])

  const googleSuccessHandler = async (res) => {
    const { googleId, email, imageUrl, name, givenName, familyName } =
      res.profileObj
    dispatch(
      userRegister(
        googleId,
        email,
        googleId,
        imageUrl,
        name,
        givenName,
        familyName
      )
    )
  }

  const googleFailureHandler = () => {
    alert("Google Sign Up Failed. Try again!")
  }

  const signUpHandler = (e) => {
    e.preventDefault()
    if (!username.match(/^[a-z0-9_-]{3,15}$/)) {
      setMessage(
        "Username must be of length 3 to 15 letters and should contain only lowercase alphabets, uppercase alphabets, numbers from 0-9, and underscore"
      )
    } else if (password !== confirmPassword) {
      setMessage("Passwords must match")
    } else {
      dispatch(userRegister(username, email, password))
    }
  }
  return (
    <Component.AuthContainer>
      <Component.SignUpImage />
      <Component.AuthForm onSubmit={signUpHandler}>
        <h1 style={{ marginTop: 0 }}>New Member?</h1>
        {loadingUser && <Loader />}
        {error && (
          <Message variant="error" width="100%" margin="0">
            {error}
          </Message>
        )}
        {message && (
          <Message variant="error" width="100%" margin="0">
            {message}
          </Message>
        )}
        <Form.InputGroup>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.InputField
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="on"
            placeholder="johndoe001"
            required
          />
        </Form.InputGroup>
        <Form.InputGroup>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.InputField
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
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
            minLength="8"
            autoComplete="on"
            required
          />
        </Form.InputGroup>
        <Form.InputGroup>
          <Form.Label htmlFor="cpassword">Confirm Password</Form.Label>
          <Form.InputField
            type="password"
            name="cpassword"
            id="cpassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
            minLength="8"
            autoComplete="on"
            required
          />
        </Form.InputGroup>
        <Form.InputGroup>
          <Form.Button type="submit" style={{ marginTop: "2rem" }}>
            <FaSignInAlt />
            Sign Up
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
                Sign up with Google
              </Form.Button>
            )}
            buttonText="Sign In Using Google"
            onSuccess={googleSuccessHandler}
            onFailure={googleFailureHandler}
            cookiePolicy="single_host_origin"
          />
        </Form.InputGroup>
        <Form.InputGroup>
          <Component.AuthLinks to="/auth/sign-in">
            Already a member? Login here
          </Component.AuthLinks>
        </Form.InputGroup>
      </Component.AuthForm>
    </Component.AuthContainer>
  )
}

export default SignUpForm
