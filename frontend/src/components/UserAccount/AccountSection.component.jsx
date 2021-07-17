import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateProfile } from "../../redux/action-creators/user-action-creator"
import { Button, Form, InputField, InputGroup, Label } from "../FormComponents"
import Message from "../Messages/Message.component"

const AccountSection = ({ history, location }) => {
  const dispatch = useDispatch()
  const { userDetails } = useSelector((state) => state.userProfile)
  const { success } = useSelector((state) => state.updatedProfile)
  const [formData, setFormData] = useState({ ...userDetails })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const updateProfileHandler = async (e) => {
    e.preventDefault()
    await dispatch(updateProfile("profile", formData))
    history.push("/user/account")
  }

  const fileChangedHandler = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.files[0] })
  }

  return (
    <Form className="user-dashboard-form" onSubmit={updateProfileHandler}>
      {success && (
        <Message variant="success" width="100%" margin="0 auto">
          Profile Updated Successfully
        </Message>
      )}
      <InputGroup>
        <Label htmlFor="name">Name</Label>
        <InputField
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="username">Username</Label>
        <InputField
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <InputField
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="image">Profile Pic</Label>
        <InputField
          type="file"
          id="image"
          name="image"
          onChange={fileChangedHandler}
        />
      </InputGroup>
      <InputGroup>
        <Button type="submit" style={{ marginTop: "2rem" }}>
          Update Profile
        </Button>
      </InputGroup>
    </Form>
  )
}

export default AccountSection
