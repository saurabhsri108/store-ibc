import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: false,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  givenName: {
    type: String,
    required: false,
  },
  familyName: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  timestamps: true,
})

const User = mongoose.model("User", userSchema)

export default User
