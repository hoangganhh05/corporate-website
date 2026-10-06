const { testConnection } = require('../config/db');

/**
 * Controller kiểm tra trạng thái hoạt động của Backend và kết nối Database
 * GET /api/health
 */
const getHealthStatus = async (req, res) => {
  const isDbConnected = await testConnection();

  return res.status(200).json({
    status: 'ok',
    message: 'Backend server is running normally',
    timestamp: new Date().toISOString(),
    service: 'backend-company-intro',
    environment: process.env.NODE_ENV || 'development',
    database: {
      status: isDbConnected ? 'connected' : 'disconnected/pending_setup',
    },
  });
};

module.exports = {
  getHealthStatus,
};
