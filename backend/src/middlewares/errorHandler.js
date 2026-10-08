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

  const statusCode = err.status || 500;
  const isServerError = statusCode >= 500;

  res.status(statusCode).json({
    status: 'error',
    message: isServerError
      ? 'Đã xảy ra lỗi máy chủ. Vui lòng thử lại sau.'
      : (err.message || 'Yêu cầu không hợp lệ.'),
  });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
