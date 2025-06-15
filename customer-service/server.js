const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const customerRoutes = require('./routes/customerRoutes');
const auditLogger = require('./middleware/auditLogger');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(auditLogger);

app.use('/api/customers', customerRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Customer service running on port ${PORT}`);
});
