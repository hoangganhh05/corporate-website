const { pool } = require('../config/db');

/**
 * Model thao tác với bảng services trong MySQL
 */
const ServiceModel = {
  /**
   * Lấy danh sách dịch vụ đang hoạt động (sắp xếp theo thứ tự ưu tiên)
   */
  async getActiveServices() {
    const [rows] = await pool.query(
      'SELECT * FROM services WHERE is_active = 1 ORDER BY display_order ASC, id ASC'
    );
    return rows;
  },

  /**
   * Lấy chi tiết dịch vụ theo đường dẫn slug
   */
  async getServiceBySlug(slug) {
    const [rows] = await pool.query(
      'SELECT * FROM services WHERE slug = ? AND is_active = 1 LIMIT 1',
      [slug]
    );
    return rows[0] || null;
  }
};

module.exports = ServiceModel;
