const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const agreementRoutes = require('./routes/agreementRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/agreements', agreementRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Agreement Service running on port ${PORT}`);
});
