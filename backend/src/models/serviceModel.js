const { pool } = require('../config/db');

/**
 * Model thao tác với bảng services trong MySQL
 */
const ServiceModel = {
  async getAllServices() {
    const [rows] = await pool.query('SELECT * FROM services ORDER BY display_order ASC, id ASC');
    return rows;
  },

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
   * Lấy chi tiết dịch vụ theo đường dẫn slug hoặc ID
   */
  async getServiceBySlug(slug) {
    const isNumeric = !isNaN(slug);
    const query = isNumeric
      ? 'SELECT * FROM services WHERE (id = ? OR slug = ?) AND is_active = 1 LIMIT 1'
      : 'SELECT * FROM services WHERE slug = ? AND is_active = 1 LIMIT 1';
    const params = isNumeric ? [slug, slug] : [slug];
    const [rows] = await pool.query(query, params);
    return rows[0] || null;
  },

  async createService(data) {
    const { title, slug, summary, description, icon, image_url, display_order, is_active } = data;
    const [result] = await pool.query(
      `INSERT INTO services (title, slug, summary, description, icon, image_url, display_order, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, slug, summary || null, description || null, icon || 'bi-briefcase', image_url || null, display_order || 0, is_active ? 1 : 0]
    );
    return result.insertId;
  },

  async updateService(id, data) {
    const { title, slug, summary, description, icon, image_url, display_order, is_active } = data;
    const [result] = await pool.query(
      `UPDATE services
       SET title = ?, slug = ?, summary = ?, description = ?, icon = ?, image_url = ?, display_order = ?, is_active = ?
       WHERE id = ?`,
      [title, slug, summary || null, description || null, icon || 'bi-briefcase', image_url || null, display_order || 0, is_active ? 1 : 0, id]
    );
    return result.affectedRows > 0;
  },

  async deleteService(id) {
    const [result] = await pool.query('DELETE FROM services WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = ServiceModel;
