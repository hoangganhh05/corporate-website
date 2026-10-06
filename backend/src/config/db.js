const mysql = require('mysql2/promise');
require('dotenv').config();

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'company_intro_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/**
 * Kiểm tra kết nối MySQL database
 * Không làm crash ứng dụng nếu MySQL chưa sẵn sàng ở Giai đoạn 1 (Foundation)
 */
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('[MySQL] Kết nối cơ sở dữ liệu thành công!');
    connection.release();
    return true;
  } catch (error) {
    console.warn(`[MySQL] Chưa thể kết nối tới CSDL (${error.message}). Sẽ kết nối lại khi CSDL được khởi tạo.`);
    return false;
  }
}

module.exports = {
  pool,
  testConnection,
};
