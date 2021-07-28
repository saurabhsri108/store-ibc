import { Router } from "express";
import {
  createOrder,
  getOrderDetails,
  updateOrderDetails,
} from "../controllers/orders.controller.js";
import protectUser from "../middleware/auth.middleware.js";

const route = Router();

route.route("/").post(protectUser, createOrder);
route.route("/:id").get(protectUser, getOrderDetails);
route.route("/:id/pay").put(protectUser, updateOrderDetails);

export default route;
