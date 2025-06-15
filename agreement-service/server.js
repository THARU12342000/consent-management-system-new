const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const agreementRoutes = require('./routes/agreementRoutes');
const { errorHandler } = require('./middleware/errorHandler');

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/agreements', agreementRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Agreement service running on port ${PORT}`);
});
