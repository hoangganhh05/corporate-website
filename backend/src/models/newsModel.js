const { pool } = require('../config/db');
const { fallbackNews } = require('./fallbackData');

/**
 * Model thao tác với bảng news trong MySQL
 */
const NewsModel = {
  /**
   * Lấy danh sách tin tức đã xuất bản kèm tên tác giả
   */
  async getPublishedNews(limit = 10, offset = 0) {
    try {
      const limitNum = parseInt(limit, 10) || 10;
      const offsetNum = parseInt(offset, 10) || 0;
      const [rows] = await pool.query(
        `SELECT n.id, n.title, n.slug, n.summary, n.thumbnail, n.views_count, n.created_at,
                u.full_name AS author_name
         FROM news n
         LEFT JOIN users u ON n.author_id = u.id
         WHERE n.is_published = 1
         ORDER BY n.created_at DESC
         LIMIT ? OFFSET ?`,
        [limitNum, offsetNum]
      );
      return rows;
    } catch (error) {
      return fallbackNews;
    }
  },

  /**
   * Lấy chi tiết bài viết theo đường dẫn slug và tự động tăng lượt xem
   */
  async getNewsBySlug(slug) {
    try {
      const [rows] = await pool.query(
        `SELECT n.*, u.full_name AS author_name
         FROM news n
         LEFT JOIN users u ON n.author_id = u.id
         WHERE n.slug = ? AND n.is_published = 1
         LIMIT 1`,
        [slug]
      );

      if (rows.length > 0) {
        // Tăng view count trong nền
        pool.query('UPDATE news SET views_count = views_count + 1 WHERE id = ?', [rows[0].id]).catch(() => {});
        return rows[0];
      }
      return null;
    } catch (error) {
      return fallbackNews.find((n) => n.slug === slug || String(n.id) === String(slug)) || null;
    }
  }
};

module.exports = NewsModel;
