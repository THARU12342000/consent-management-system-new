const Agreement = require('../models/Agreement');

// @desc    Get agreements by customer ID
// @route   GET /api/agreements/customer/:customerId
// @access  Public or Protected (based on your auth strategy)
const getAgreementsByCustomer = async (req, res) => {
  try {
    const agreements = await Agreement.find({ customerId: req.params.customerId });
    res.json(agreements);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create or update consent agreement
// @route   POST /api/agreements
// @access  Public or Protected
const createOrUpdateAgreement = async (req, res) => {
  const { customerId, productId, consentGiven, termsVersion } = req.body;

  if (!customerId || !productId || consentGiven === undefined) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    let agreement = await Agreement.findOne({ customerId, productId });

    if (agreement) {
      agreement.consentGiven = consentGiven;
      agreement.consentDate = consentGiven ? new Date() : null;
      agreement.termsVersion = termsVersion || agreement.termsVersion;
      await agreement.save();
      res.json(agreement);
    } else {
      agreement = new Agreement({
        customerId,
        productId,
        consentGiven,
        consentDate: consentGiven ? new Date() : null,
        termsVersion: termsVersion || '1.0',
      });
      await agreement.save();
      res.status(201).json(agreement);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAgreementsByCustomer,
  createOrUpdateAgreement,
};
