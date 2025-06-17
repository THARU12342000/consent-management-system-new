const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const customerRoutes = require('./routes/customerRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors()); // <-- Add this line to enable CORS
app.use(express.json());

app.use('/api/customers', customerRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Customer Service running on port ${PORT}`);
});
