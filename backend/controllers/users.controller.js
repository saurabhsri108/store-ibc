import asyncHandler from "express-async-handler"
import User from "../schema/user.schema.js"
import { emailMessage, sendEmail } from "../utils/emailer.js"
import generateToken from "../utils/generatejwt.js"
import jwt from "jsonwebtoken"
import imagekit from "../utils/imagekitUploader.js"

/**
 * @desc    Add new user - Signup
 * @route   POST /api/v1/users/add
 * @access  Admin || Public
 */
export const addUser = asyncHandler(async (req, res) => {
  const { username, email, password, imageUrl, name, givenName, familyName } =
    req.body
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  }
  const usernameExists = await User.findOne({ username })
  if (usernameExists) {
    res.status(400)
    throw new Error("Username already taken")
  }
  const user = await User.create({
    username,
    email,
    password,
    imageUrl,
    name,
    givenName,
    familyName,
  })
  if (user) {
    const emailMsg = emailMessage(user.email, user.name, generateToken(user.id))
    const statusCode = await sendEmail(emailMsg)
    if (statusCode === 202)
      res.status(201).json({
        id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
        image: user.imageUrl,
        givenName: user.givenName,
        familyName: user.familyName,
        verified: user.verified,
        isAdmin: user.isAdmin,
        message:
          "Registration successful! Verify your email by clicking on the link we sent to your email.",
      })
  } else {
    res.status(400)
    throw new Error("Error in registration. Please try again")
  }
})

/**
 * @desc    Verify new user - After Register
 * @route   POST /api/v1/users/verify/:token
 * @access  Private
 */

export const verifyNewUser = asyncHandler(async (req, res) => {
  try {
    const verified = jwt.verify(req.params.token, process.env.JWT_SECRET)

    const user = await User.findById(verified.id).select("-password")

    user.verified = true
    await user.save()
    res.status(200).json({
      isVerified: true,
      message: "Verification Done",
    })
  } catch (err) {
    res.status(401)
    throw new Error("Verification Link Expired. Try registering again!")
  }
})

/**
 * @desc    Login - Authenticate User
 * @route   POST /api/v1/users/login
 * @access  Private
 */
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email: email })

  if (!user) {
    res.status(401)
    throw new Error("You haven't signed up yet. Please sign up first!")
  }

  if (user.verified !== true) {
    res.status(401)
    throw new Error("You haven't verified your email")
  }
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      image: user.imageUrl,
      givenName: user.givenName,
      familyName: user.familyName,
      verified: user.verified,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error("Invalid user or password")
  }
})

/**
 * @desc    Get User Data after login
 * @route   GET /api/v1/users/profile
 * @access  Private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password")

  if (user) {
    res.status(200).json({
      id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      image: user.imageUrl,
      givenName: user.givenName,
      familyName: user.familyName,
      isAdmin: user.isAdmin,
      verified: user.verified,
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

/**
 * @desc    Update existing user
 * @route   PUT /api/v1/users/profile
 * @access  Admin || Private
 */
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.body.id })
  let fileUrl = false
  let fileUrlId = false

  if (
    user.email === "admin001@storejs.com" ||
    user.email === "user001@storejs.com"
  ) {
    res.status(401)
    throw new Error("Cannot change dummy user profile data")
  }

  if (req.files) {
    if (user.fileId) await imagekit.deleteFile(user.fileId)
    const { fileId, url, thumbnailUrl } = await imagekit.upload({
      file: req.files.imageUrl.data, // product has image url here.
      fileName: req.files.imageUrl.name,
      useUniqueFileName: true,
      folder: "/storejs-project/users/", // this is the folder I created in the media library on my dashboard
    })
    if (typeof url !== "string" && !url) {
      res.status(401)
      throw new Error("Profile pic failed to upload")
    }
    fileUrl = url
    fileUrlId = fileId
  }

  if (user) {
    user.username = req.body.username || user.username
    user.name = req.body.name || user.name
    user.givenName = req.body.name?.split(" ")[0] || user.givenName
    user.familyName = req.body.name?.split(" ")[1] || user.familyName
    user.email = req.body.email || user.email
    user.imageUrl = fileUrl || user.imageUrl
    user.fileId = fileUrlId || user.imageId
    user.password = req.body.password || user.password

    const updatedUser = await user.save()

    res.status(200).json({
      id: updatedUser._id,
      username: updatedUser.username,
      name: updatedUser.name,
      email: updatedUser.email,
      image: updatedUser.imageUrl,
      givenName: updatedUser.givenName,
      familyName: updatedUser.familyName,
      isAdmin: updatedUser.isAdmin,
      verified: user.verified,
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

/**
 * @desc    Check if old password is correct or not
 * @route   POST /api/v1/users/check
 * @access  Private
 */
export const checkOldPassword = asyncHandler(async (req, res) => {
  const { email, oldPassword } = req.body
  const user = await User.findOne({ email: email })

  if (!user) {
    res.status(401)
    throw new Error("You're not the owner of this account")
  }
  if (user) {
    const data = await user.matchPassword(oldPassword)
    if (data)
      res.status(200).json({
        hasPassed: data,
      })
    else {
      res.status(401)
      throw new Error("Old password doesn't match")
    }
  }
})

/**
 * @desc    Delete existing user
 * @route   POST /api/v1/users/delete
 * @access  Admin || Private
 */
export const deleteUser = asyncHandler(async (req, res) => {})
