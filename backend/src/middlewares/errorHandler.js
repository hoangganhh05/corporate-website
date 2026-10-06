/**
 * Middleware xử lý route không tồn tại (404)
 */
const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: `Route không tồn tại: ${req.method} ${req.originalUrl}`,
  });
};

/**
 * Middleware xử lý lỗi tập trung
 */
const errorHandler = (err, req, res, next) => {
  console.error('[Error Handler]:', err.stack || err.message);

  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
