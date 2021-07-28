import asyncHandler from "express-async-handler";
import Order from "../schema/order.schema.js";

/**
 * @desc    Create a new order
 * @route   POST /api/v1/orders
 * @access  Private
 */

export const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items exists");
  }
  const createdOrder = await Order.create({
    orderItems,
    user: req.user._id,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  });

  res.status(200).json(createdOrder);
});

/**
 * @desc    Get order details
 * @route   GET /api/v1/orders/:id
 * @access  Private
 */

export const getOrderDetails = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(400);
    throw new Error("Order not found");
  }
});

/**
 * @desc    Update order details
 * @route   PUT /api/v1/orders/:id/pay
 * @access  Private
 */

export const updateOrderDetails = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } else {
    res.status(400);
    throw new Error("Order not found");
  }
});
