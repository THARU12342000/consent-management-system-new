const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Customer',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  orderDescription: {
    type: String,
    default: '',
  },
  address: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ['PENDING', 'PLACED', 'PROCESSING', 'COMPLETED', 'CANCELLED'],
    default: 'PENDING',
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
