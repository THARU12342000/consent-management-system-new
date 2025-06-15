const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const consentRoutes = require('./routes/consentRoutes');
const auditLogger = require('./middleware/auditLogger');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(auditLogger);

app.use('/api/consents', consentRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Consent service running on port ${PORT}`);
});
