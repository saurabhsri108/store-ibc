import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateProfile } from "../../../redux/action-creators/user-action-creator"

import {
  Button,
  FileInputField,
  Form,
  InputField,
  InputGroup,
  Label,
} from "../../FormComponents"
import Loader from "../../Loading/Loading.component"
import Message from "../../Messages/Message.component"

const AdminAccount = () => {
  const { userDetails } = useSelector((state) => state.userProfile)
  const [profilePic, setProfilePic] = useState(userDetails?.image)
  const [formData, setFormData] = useState({ ...userDetails })

  const dispatch = useDispatch()
  const { success, loadingProfile, errorProfile } = useSelector(
    (state) => state.updatedProfile
  )

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const fileChangedHandler = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfilePic(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
    setFormData({ ...formData, [e.target.name]: e.target.files[0] })
  }

  const updateProfileHandler = async (e) => {
    e.preventDefault()
    const formatedFormData = new FormData()
    formatedFormData.append("id", formData.id)
    formatedFormData.append("username", formData.username)
    formatedFormData.append("name", formData.name)
    formatedFormData.append("email", formData.email)
    formatedFormData.append("imageUrl", formData.image)
    dispatch(updateProfile("profile", formatedFormData))
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
        <p>Profile Picture</p>
        <img
          src={profilePic}
          alt="Profile DP"
          width="96px"
          style={{ marginTop: ".5rem", borderRadius: "50%" }}
        />
        <FileInputField
          labelText="Upload your profile picture"
          type="file"
          id="image"
          name="image"
          accept="image/*"
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

export default AdminAccount
