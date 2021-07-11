import { Router } from "express"
import * as methods from "../controllers/users.controller.js"
import protectUser from "../middleware/auth.middleware.js"

const router = Router()

router.route("/add").post(methods.addUser)
router.post("/login", methods.authUser)
router.route("/profile").get(protectUser, methods.getUserProfile)
router.post("/delete", methods.deleteUser)
router.post("/update", methods.updateUser)
router.post("/reset", methods.resetPasswordUser)

export default router
