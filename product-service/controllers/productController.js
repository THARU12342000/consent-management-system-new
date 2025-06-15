const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc    Add new product (admin only)
// @route   POST /api/products
// @access  Private (admin)
exports.addProduct = async (req, res) => {
  const { name, description, requiresConsent } = req.body;

  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }

  try {
    const product = new Product({
      name,
      description,
      requiresConsent: requiresConsent || false
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};
