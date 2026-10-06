const { pool } = require('../config/db');
const { fallbackGallery } = require('./fallbackData');

/**
 * Model thao tác với bảng gallery trong MySQL
 */
const GalleryModel = {
  /**
   * Lấy danh sách hình ảnh (có thể lọc theo danh mục)
   */
  async getGallery(category = null) {
    try {
      let sql = 'SELECT * FROM gallery';
      const params = [];

      if (category && category !== 'all') {
        sql += ' WHERE category = ?';
        params.push(category);
      }

      sql += ' ORDER BY display_order ASC, created_at DESC';

      const [rows] = await pool.query(sql, params);
      return rows;
    } catch (error) {
      if (category && category !== 'all') {
        return fallbackGallery.filter((g) => g.category.toLowerCase() === category.toLowerCase());
      }
      return fallbackGallery;
    }
  }
};

module.exports = GalleryModel;
