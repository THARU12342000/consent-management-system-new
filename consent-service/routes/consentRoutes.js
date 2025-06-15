const express = require('express');
const router = express.Router();
const {
  addConsent,
  getConsentsByUser,
  updateConsent
} = require('../controllers/consentController');

const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', protect, addConsent);
router.get('/:userId', protect, getConsentsByUser);
router.put('/:id', protect, updateConsent);

module.exports = router;
