const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());               // Enable CORS for all origins
app.use(express.json());       // Parse JSON request bodies

app.use('/api/products', productRoutes);  // Register product routes

// 404 handler - must be last middleware
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
