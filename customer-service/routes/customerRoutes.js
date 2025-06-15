const express = require('express');
const router = express.Router();
const {
  registerCustomer,
  loginCustomer,
  getCustomerById
} = require('../controllers/customerController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerCustomer);
router.post('/login', loginCustomer);

// Protected routes
router.get('/:id', protect, getCustomerById);

module.exports = router;
