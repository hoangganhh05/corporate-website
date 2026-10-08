const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

function getJwtSecret() {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    const error = new Error('JWT_SECRET phải được cấu hình với ít nhất 32 ký tự.');
    error.status = 500;
    throw error;
  }
  return process.env.JWT_SECRET;
}

const authController = {
  async login(req, res, next) {
    try {
      const username = String(req.body.username || '').trim();
      const password = String(req.body.password || '');

      if (!username || !password) {
        return res.status(400).json({
          status: 'error',
          message: 'Vui lòng nhập tên đăng nhập và mật khẩu.'
        });
      }

      const user = await UserModel.findByUsername(username);
      const isPasswordValid = user && await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({
          status: 'error',
          message: 'Tên đăng nhập hoặc mật khẩu không chính xác.'
        });
      }

      const token = jwt.sign(
        { sub: user.id, username: user.username, role: user.role },
        getJwtSecret(),
        { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
      );

      return res.status(200).json({
        status: 'success',
        data: {
          token,
          user: {
            id: user.id,
            username: user.username,
            fullName: user.full_name,
            role: user.role
          }
        }
      });
    } catch (error) {
      return next(error);
    }
  }
};

module.exports = { authController, getJwtSecret };
