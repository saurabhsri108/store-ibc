import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { resetPassword } from "../../../redux/action-creators/user-action-creator"
import {
  Button,
  Form,
  InputField,
  InputGroup,
  Label,
} from "../../FormComponents"
import Loader from "../../Loading/Loading.component"
import Message from "../../Messages/Message.component"

const ResetPassword = () => {
  const { success, errorProfile, loadingProfile } = useSelector(
    (state) => state.updatedProfile
  )
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const dispatch = useDispatch()

  const handleShowPassword = (target) => {
    if (target === "old") {
      setShowOldPassword((prevStatus) => !prevStatus)
    }
    if (target === "new") {
      setShowNewPassword((prevStatus) => !prevStatus)
    }
    if (target === "confirm") {
      setShowConfirmPassword((prevStatus) => !prevStatus)
    }
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
      dispatch(
        resetPassword("profile", {
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
        })
      )
    }
  }

  return (
    <Form className="user-dashboard-form" onSubmit={updateProfileHandler}>
      {loadingProfile && <Loader height="auto" />}
      {errorProfile && (
        <Message variant="error" width="100%" margin="0 auto">
          {errorProfile}
        </Message>
      )}
      {success && (
        <Message variant="success" width="100%" margin="0 auto">
          Profile Updated Successfully
        </Message>
      )}
      {message && (
        <Message variant="error" width="100%" margin="0 auto">
          {message}
        </Message>
      )}
      <InputField name="username" hidden={true} autoComplete="username" />
      <InputGroup className="password-group">
        <Label htmlFor="oldPassword">Old Password</Label>
        <InputField
          type={showOldPassword ? "text" : "password"}
          id="oldPassword"
          name="oldPassword"
          value={formData.oldPassword}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />
        <span
          className="show-password"
          onClick={() => handleShowPassword("old")}
        >
          {!showOldPassword && <FaEye />}
          {showOldPassword && <FaEyeSlash />}
        </span>
      </InputGroup>
      <InputGroup className="password-group">
        <Label htmlFor="newPassword">New Password</Label>
        <InputField
          type={showNewPassword ? "text" : "password"}
          id="newPassword"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          handleShowPassword={handleShowPassword}
          autoComplete="new-password"
          required
        />
        <span
          className="show-password"
          onClick={() => handleShowPassword("new")}
        >
          {!showNewPassword && <FaEye />}
          {showNewPassword && <FaEyeSlash />}
        </span>
      </InputGroup>
      <InputGroup className="password-group">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <InputField
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
        <span
          className="show-password"
          onClick={() => handleShowPassword("confirm")}
        >
          {!showConfirmPassword && <FaEye />}
          {showConfirmPassword && <FaEyeSlash />}
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
