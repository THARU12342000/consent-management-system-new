// orderRoutes.js
const express = require('express');
const router = express.Router();

const {
  createOrder,
  getOrderById,
} = require('../controllers/orderController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createOrder);
router.get('/:id', protect, getOrderById);

module.exports = router;
