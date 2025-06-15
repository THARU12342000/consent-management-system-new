const express = require('express');
const cors = require('cors');
require('dotenv').config();
const apiRoutes = require('./routes/apiRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const { auditLogger } = require('./middleware/auditLogger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(auditLogger);

app.use('/api', apiRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
