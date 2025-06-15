// orderController.js

const asyncHandler = require('express-async-handler');
const Order = require('../models/Order');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
  const { userId, products, totalPrice } = req.body;

  if (!products || products.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }

  const order = new Order({
    user: userId,
    orderItems: products,
    totalPrice,
  });

  const createdOrder = await order.save();

  res.status(201).json(createdOrder);
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

module.exports = {
  createOrder,
  getOrderById,
};
