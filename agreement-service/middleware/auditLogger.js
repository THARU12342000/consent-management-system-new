const auditLogger = (req, res, next) => {
  const { method, originalUrl } = req;
  const timestamp = new Date().toISOString();
  const user = req.headers.authorization ? req.headers.authorization.split(' ')[1] : 'Guest';
  console.log(`[${timestamp}] ${method} ${originalUrl} by ${user}`);
  next();
};

module.exports = auditLogger;
