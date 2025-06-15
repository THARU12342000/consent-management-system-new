// For demo: Simple middleware that logs request method and URL, extend as needed
const auditLogger = (req, res, next) => {
  console.log(`[AUDIT] ${new Date().toISOString()} - ${req.method} ${req.originalUrl} - User: ${req.customer ? req.customer._id : 'Guest'}`);
  next();
};

module.exports = auditLogger;
