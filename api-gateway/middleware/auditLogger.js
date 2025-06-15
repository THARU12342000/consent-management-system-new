const auditLogger = (req, res, next) => {
  console.log(`[AUDIT] ${new Date().toISOString()} - ${req.method} ${req.originalUrl} - User: ${req.user ? req.user.id : 'Guest'}`);
  next();
};

module.exports = { auditLogger };
