const Agreement = require('../models/Agreement');

// GET all agreements
exports.getAllAgreements = async (req, res, next) => {
  try {
    const agreements = await Agreement.find();
    res.json(agreements);
  } catch (err) {
    next(err);
  }
};

// POST a new agreement
exports.createAgreement = async (req, res, next) => {
  try {
    const agreement = new Agreement(req.body);
    await agreement.save();
    res.status(201).json(agreement);
  } catch (err) {
    next(err);
  }
};
