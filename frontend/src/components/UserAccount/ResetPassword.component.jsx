import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { resetPassword } from "../../redux/action-creators/user-action-creator"
import { Button, Form, InputField, InputGroup, Label } from "../FormComponents"
import Message from "../Messages/Message.component"

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const dispatch = useDispatch()

  const handleShowPassword = () => {
    setShowPassword((prevStatus) => !prevStatus)
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const updateProfileHandler = (e) => {
    e.preventDefault()
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage("Password must match")
    } else {
      setMessage("")
      dispatch(resetPassword("profile", formData.password))
    }
  }

  return (
    <Form className="user-dashboard-form" onSubmit={updateProfileHandler}>
      {message && (
        <Message variant="error" width="100%" margin="0 auto">
          {message}
        </Message>
      )}
      <InputGroup className="password-group">
        <Label htmlFor="oldPassword">Old Password</Label>
        <InputField
          type={showPassword ? "text" : "password"}
          id="oldPassword"
          name="oldPassword"
          value={formData.oldPassword}
          onChange={handleChange}
          handleShowPassword={handleShowPassword}
        />
        <span className="show-password" onClick={handleShowPassword}>
          {!showPassword && <FaEye />}
          {showPassword && <FaEyeSlash />}
        </span>
      </InputGroup>
      <InputGroup className="password-group">
        <Label htmlFor="newPassword">New Password</Label>
        <InputField
          type={showPassword ? "text" : "password"}
          id="newPassword"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          handleShowPassword={handleShowPassword}
        />
        <span className="show-password" onClick={handleShowPassword}>
          {!showPassword && <FaEye />}
          {showPassword && <FaEyeSlash />}
        </span>
      </InputGroup>
      <InputGroup className="password-group">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <InputField
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span className="show-password" onClick={handleShowPassword}>
          {!showPassword && <FaEye />}
          {showPassword && <FaEyeSlash />}
        </span>
      </InputGroup>
      <InputGroup>
        <Button type="submit" style={{ marginTop: "2rem" }}>
          Change Password
        </Button>
      </InputGroup>
    </Form>
  )
}

export default ResetPassword
