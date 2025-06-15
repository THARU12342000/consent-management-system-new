const Consent = require('../models/Consent');

// @desc    Add new consent
// @route   POST /api/consents
// @access  Private (user)
exports.addConsent = async (req, res) => {
  const { consentType, status, validUntil } = req.body;

  if (!req.user) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  try {
    // Optional: Check if a consent of same type exists for this user and increment version
    const lastConsent = await Consent.findOne({ userId: req.user.id, consentType })
      .sort({ version: -1 });

    const newVersion = lastConsent ? lastConsent.version + 1 : 1;

    const consent = new Consent({
      userId: req.user.id,
      consentType,
      status,
      validUntil,
      version: newVersion,
    });

    await consent.save();
    res.status(201).json(consent);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc    Get all consents for a user
// @route   GET /api/consents/:userId
// @access  Private (user/admin)
exports.getConsentsByUser = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Not authorized' });

    // Allow access only if requester is the user or admin
    if (req.user.id !== req.params.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const consents = await Consent.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(consents);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc    Update consent status
// @route   PUT /api/consents/:id
// @access  Private (user/admin)
exports.updateConsent = async (req, res) => {
  const { status, validUntil } = req.body;

  try {
    const consent = await Consent.findById(req.params.id);

    if (!consent) return res.status(404).json({ message: 'Consent not found' });

    // Only the owner or admin can update
    if (req.user.id !== consent.userId.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    if (status) consent.status = status;
    if (validUntil) consent.validUntil = validUntil;

    await consent.save();
    res.json(consent);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};
