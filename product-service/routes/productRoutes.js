const express = require('express');
const router = express.Router();
const {
  getProducts,
  addProduct
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', getProducts);
router.post('/', protect, admin, addProduct);

module.exports = router;
