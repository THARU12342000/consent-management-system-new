const mongoose = require('mongoose');

const agreementSchema = new mongoose.Schema({
  agreementId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  status: { type: String, enum: ['draft', 'active', 'terminated'], default: 'draft' },
  description: String,
  startDate: Date,
  endDate: Date
}, { timestamps: true });

module.exports = mongoose.model('Agreement', agreementSchema);
