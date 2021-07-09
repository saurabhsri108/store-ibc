import mongoose from "mongoose"

const userSchema = mongoose.Schema(
  {
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
      required: true,
      default: `undefined`,
    },
    name: {
      type: String,
      required: true,
      default: `undefined`,
    },
    givenName: {
      type: String,
      required: true,
      default: `undefined`,
    },
    familyName: {
      type: String,
      required: true,
      default: `undefined`,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model("User", userSchema)

export default User
