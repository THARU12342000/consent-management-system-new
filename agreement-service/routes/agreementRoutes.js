const express = require('express');
const router = express.Router();
const { getAllAgreements, createAgreement } = require('../controllers/agreementController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAllAgreements);
router.post('/', protect, createAgreement);

module.exports = router;
