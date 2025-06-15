const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
