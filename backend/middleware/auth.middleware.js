import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"
import User from "../schema/user.schema.js"

const protectUser = asyncHandler(async (req, res, next) => {
  let token = null
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const verified = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(verified.id).select("-password")
    } catch (error) {
      res.status(401)
      throw new Error("User authorization failed. Cannot verify token")
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("Unauthorized access attempt. Invalid user token")
  }
  next()
})

export default protectUser
