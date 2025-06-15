const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// @desc    Register a new customer
// @route   POST /api/customers/register
// @access  Public
exports.registerCustomer = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const customer = new Customer({
      name,
      email,
      password: hashedPassword,
      role: role || 'user'
    });

    await customer.save();

    const token = generateToken(customer._id, customer.role);

    res.status(201).json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
      role: customer.role,
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc    Login customer
// @route   POST /api/customers/login
// @access  Public
exports.loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(customer._id, customer.role);

    res.json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
      role: customer.role,
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc    Get customer by ID
// @route   GET /api/customers/:id
// @access  Private (auth required)
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).select('-password');
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};
