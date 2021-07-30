import asyncHandler from "express-async-handler";
import Order from "../schema/order.schema.js";
import Stripe from "stripe";
import { v4 as uuid } from "uuid";

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
 * @route   PUT /api/v1/orders/:id/paypal
 * @access  Private
 */

export const updateOrderDetailsPaypal = asyncHandler(async (req, res) => {
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

/**
 * @desc    Update order details
 * @route   PUT /api/v1/orders/:id/stripe
 * @access  Private
 */
/** stripe payment */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

export const updateOrderDetailsStripe = asyncHandler(async (req, res) => {
  const { order, token } = req.body;
  const idempotencyKey = uuid(); // stops multiple payments

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const charge = await stripe.charges.create(
      {
        amount: order.amount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        description: `One-time purchase fee for ${order.id}`,
        shipping: {
          name: token.card.name,
          address: {
            country: token.card.address_country,
          },
        },
      },
      { idempotencyKey }
    );
    if (charge.status === "succeeded") {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
          id: charge.id,
          status: charge.status,
          update_time: charge.created,
          email_address: charge.receipt_email,
        };
        const updatedOrder = await order.save();
        res.status(200).json(updatedOrder);
      } else {
        res.status(400);
        throw new Error("Order not found");
      }
    }
  } catch (err) {
    res.status(400);
    throw new Error("Order Payment Failed");
  }
});
