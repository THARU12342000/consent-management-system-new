const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const auditLogger = require('../middleware/auditLogger');

// Public routes
router.get('/', auditLogger, getProducts);
router.get('/:id', auditLogger, getProductById);

// Protected routes (assumed admin/service usage)
router.post('/', auditLogger, protect, createProduct);
router.put('/:id', auditLogger, protect, updateProduct);
router.delete('/:id', auditLogger, protect, deleteProduct);

module.exports = router;
