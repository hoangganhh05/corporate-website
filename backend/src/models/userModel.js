const { pool } = require('../config/db');

const UserModel = {
  async findByUsername(username) {
    const [rows] = await pool.query(
      `SELECT id, username, password, full_name, email, role
       FROM users
       WHERE username = ?
       LIMIT 1`,
      [username]
    );
    return rows[0] || null;
  }
};

module.exports = UserModel;
