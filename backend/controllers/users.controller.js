import asyncHandler from "express-async-handler"
import User from "../schema/user.schema.js"
import generateToken from "../utils/generatejwt.js"

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
    res.status(201).json({
      id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      image: user.imageUrl,
      givenName: user.givenName,
      familyName: user.familyName,
      isAdmin: user.isAdmin,
      message: "Registration successful",
    })
  } else {
    res.status(400)
    throw new Error("Error in registration. Please try again")
  }
})

/**
 * @desc    Delete existing user
 * @route   POST /api/v1/users/delete
 * @access  Admin || Private
 */
export const deleteUser = asyncHandler(async (req, res) => {})

/**
 * @desc    Login - Authenticate User
 * @route   POST /api/v1/users/login
 * @access  Private
 */
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email: email })

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      image: user.imageUrl,
      givenName: user.givenName,
      familyName: user.familyName,
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
  if (user) {
    user.username = req.body.username || user.username
    user.name = req.body.name || user.name
    user.givenName = req.body.name?.split(" ")[0] || user.givenName
    user.familyName = req.body.name?.split(" ")[1] || user.familyName
    user.email = req.body.email || user.email
    user.image = req.body.image || user.image
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
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})
