const { createProxyMiddleware } = require('http-proxy-middleware');

function proxyRequest(serviceEnvKey) {
  const target = process.env[serviceEnvKey];
  if (!target) {
    throw new Error(`[HPM] Missing target for ${serviceEnvKey}`);
  }

  return createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: (path, req) => path.replace(new RegExp(`^/api/${serviceEnvKey.split('_')[0].toLowerCase()}`), ''),
  });
}

module.exports = proxyRequest;
