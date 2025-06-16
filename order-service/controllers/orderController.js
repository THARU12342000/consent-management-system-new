const Order = require('../models/Order');

// @desc    Place a new order
// @route   POST /api/orders
// @access  Private
const placeOrder = async (req, res) => {
  const { productId, orderDescription, address } = req.body;
  const customerId = req.customerId;

  if (!productId || !address) {
    return res.status(400).json({ message: 'Product ID and address are required' });
  }

  try {
    // Check if customer has given consent - this should be checked externally or via Agreement Service in real scenario

    // Create new order with status PENDING
    const order = new Order({
      customerId,
      productId,
      orderDescription: orderDescription || '',
      address,
      orderStatus: 'PLACED',
      totalAmount: 0, // You can calculate based on product price if needed
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get orders for a customer
// @route   GET /api/orders
// @access  Private
const getOrders = async (req, res) => {
  const customerId = req.customerId;

  try {
    const orders = await Order.find({ customerId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  placeOrder,
  getOrders,
};
