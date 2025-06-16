const express = require('express');
const router = express.Router();
const { placeOrder, getOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const auditLogger = require('../middleware/auditLogger');

router.post('/', auditLogger, protect, placeOrder);
router.get('/', auditLogger, protect, getOrders);

module.exports = router;
