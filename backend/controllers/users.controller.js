import asyncHandler from "express-async-handler"
import User from "../schema/user.schema.js"
import generateToken from "../utils/generatejwt.js"

/**
 * @desc    Add new user - Signup
 * @route   POST /api/v1/users/add
 * @access  Admin || Public
 */
export const addUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  }
  const user = await User.create({ username, email, password })
  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
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
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error("Invalid user or password")
  }
})

/**
 * @desc    Update existing user
 * @route   POST /api/v1/users/update
 * @access  Admin || Private
 */
export const updateUser = asyncHandler(async (req, res) => {})

/**
 * @desc    Reset User password
 * @route   POST /api/v1/users/reset
 * @access  Private
 */
export const resetPasswordUser = asyncHandler(async (req, res) => {})

/**
 * @desc    Get User Data after login
 * @route   GET /api/v1/users/profile
 * @access  Private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password")
  if (user) {
    res.status(200).json({ user })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})
