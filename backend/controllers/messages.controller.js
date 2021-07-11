import asyncHandler from "express-async-handler"
import Message from "../schema/message.schema.js"

/**
 * @desc    Add contact message
 * @route   POST /api/v1/messages
 * @access  Public
 */
export const postMessage = asyncHandler(async (req, res) => {
  const newMessage = await Message.create(req.body)
  res.status(201).json({
    newMessage: newMessage,
    message:
      "Thank you for contacting us. Your message has been sent. We will contact you shortly...",
  })
})
