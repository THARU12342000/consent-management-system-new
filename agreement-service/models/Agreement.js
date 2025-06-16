const mongoose = require('mongoose');

const agreementSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Customer',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  consentGiven: {
    type: Boolean,
    required: true,
    default: false,
  },
  consentDate: {
    type: Date,
    default: null,
  },
  termsVersion: {
    type: String,
    default: '1.0',
  },
}, { timestamps: true });

const Agreement = mongoose.model('Agreement', agreementSchema);

module.exports = Agreement;
