const jwt = require('jsonwebtoken');
const { getJwtSecret } = require('../controllers/authController');

function requireAuth(req, res, next) {
  const authorization = req.headers.authorization || '';
  const [scheme, token] = authorization.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({
      status: 'error',
      message: 'Yêu cầu đăng nhập để truy cập tài nguyên này.'
    });
  }

  try {
    req.user = jwt.verify(token, getJwtSecret());
    return next();
  } catch (error) {
    return res.status(401).json({
      status: 'error',
      message: 'Phiên đăng nhập không hợp lệ hoặc đã hết hạn.'
    });
  }
}

function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        status: 'error',
        message: 'Bạn không có quyền thực hiện thao tác này.'
      });
    }
    return next();
  };
}

module.exports = { requireAuth, authorizeRoles };
