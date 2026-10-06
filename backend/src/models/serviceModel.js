const { pool } = require('../config/db');
const { fallbackServices } = require('./fallbackData');

/**
 * Model thao tác với bảng services trong MySQL
 */
const ServiceModel = {
  /**
   * Lấy danh sách dịch vụ đang hoạt động (sắp xếp theo thứ tự ưu tiên)
   */
  async getActiveServices() {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM services WHERE is_active = 1 ORDER BY display_order ASC, id ASC'
      );
      return rows;
    } catch (error) {
      return fallbackServices;
    }
  },

  /**
   * Lấy chi tiết dịch vụ theo đường dẫn slug hoặc ID
   */
  async getServiceBySlug(slug) {
    try {
      const isNumeric = !isNaN(slug);
      const query = isNumeric
        ? 'SELECT * FROM services WHERE (id = ? OR slug = ?) AND is_active = 1 LIMIT 1'
        : 'SELECT * FROM services WHERE slug = ? AND is_active = 1 LIMIT 1';
      const params = isNumeric ? [slug, slug] : [slug];

      const [rows] = await pool.query(query, params);
      return rows[0] || null;
    } catch (error) {
      return (
        fallbackServices.find(
          (s) => String(s.id) === String(slug) || s.slug === slug
        ) || null
      );
    }
  }
};

module.exports = ServiceModel;
