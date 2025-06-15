const express = require('express');
const router = express.Router();
const proxyRequest = require('../utils/proxyRequest');

router.use('/customers', proxyRequest('CUSTOMER_SERVICE_URL'));
router.use('/products', proxyRequest('PRODUCT_SERVICE_URL'));
router.use('/api/agreements', proxyRequest('AGREEMENT_SERVICE_URL'));
router.use('/orders', proxyRequest('ORDER_SERVICE_URL'));

module.exports = router;
