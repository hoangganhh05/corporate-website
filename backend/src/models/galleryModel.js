const { pool } = require('../config/db');

/**
 * Model thao tác với bảng gallery trong MySQL
 */
const GalleryModel = {
  /**
   * Lấy danh sách hình ảnh (có thể lọc theo danh mục)
   */
  async getGallery(category = null) {
    let sql = 'SELECT * FROM gallery';
    const params = [];
    if (category && category !== 'all') {
      sql += ' WHERE category = ?';
      params.push(category);
    }
    sql += ' ORDER BY display_order ASC, created_at DESC';
    const [rows] = await pool.query(sql, params);
    return rows;
  },

  async createGalleryItem(data) {
    const { title, category, image_url, description, display_order } = data;
    const [result] = await pool.query(
      `INSERT INTO gallery (title, category, image_url, description, display_order)
       VALUES (?, ?, ?, ?, ?)`,
      [title, category || 'Hoạt động', image_url, description || null, display_order || 0]
    );
    return result.insertId;
  },

  async updateGalleryItem(id, data) {
    const { title, category, image_url, description, display_order } = data;
    const [result] = await pool.query(
      `UPDATE gallery
       SET title = ?, category = ?, image_url = ?, description = ?, display_order = ?
       WHERE id = ?`,
      [title, category || 'Hoạt động', image_url, description || null, display_order || 0, id]
    );
    return result.affectedRows > 0;
  },

  async deleteGalleryItem(id) {
    const [result] = await pool.query('DELETE FROM gallery WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = GalleryModel;
