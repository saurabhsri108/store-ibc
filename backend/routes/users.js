import { Router } from "express";
import * as methods from "../controllers/users.controller.js";
import protectUser from "../middleware/auth.middleware.js";

const router = Router();

router.route("/add").post(methods.addUser);
router.post("/login", methods.authUser);
router.post("/verify/:token", methods.verifyNewUser);

router.route("/check").post(protectUser, methods.checkOldPassword);
router
  .route("/profile")
  .get(protectUser, methods.getUserProfile)
  .put(protectUser, methods.updateUser)
  .delete(protectUser, methods.deleteUser);

export default router;
