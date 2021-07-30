import { Router } from "express";
import {
  createOrder,
  getOrderDetails,
  updateOrderDetailsPaypal,
  updateOrderDetailsStripe,
} from "../controllers/orders.controller.js";
import protectUser from "../middleware/auth.middleware.js";

const route = Router();

route.route("/").post(protectUser, createOrder);
route.route("/:id").get(protectUser, getOrderDetails);
route.route("/:id/paypal").put(protectUser, updateOrderDetailsPaypal);
route.route("/:id/stripe").put(protectUser, updateOrderDetailsStripe);

export default route;
