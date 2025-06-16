const express = require('express');
const router = express.Router();
const {
  getAgreementsByCustomer,
  createOrUpdateAgreement,
} = require('../controllers/agreementController');
const auditLogger = require('../middleware/auditLogger');

router.get('/customer/:customerId', auditLogger, getAgreementsByCustomer);
router.post('/', auditLogger, createOrUpdateAgreement);

module.exports = router;
