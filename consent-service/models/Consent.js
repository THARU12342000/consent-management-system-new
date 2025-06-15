const mongoose = require('mongoose');

const consentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  consentType: {
    type: String,
    required: true,
    enum: ['marketing', 'analytics', 'personalization', 'other'],
  },
  status: {
    type: String,
    required: true,
    enum: ['granted', 'revoked'],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  validUntil: {
    type: Date,
  },
  version: {
    type: Number,
    default: 1,
  }
}, { timestamps: true });

module.exports = mongoose.model('Consent', consentSchema);
