import { Router } from "express"
import { postMessage } from "../controllers/messages.controller.js"

const route = Router()

route.post("/", postMessage)

export default route
