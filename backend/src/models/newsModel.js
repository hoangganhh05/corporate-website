const { pool } = require('../config/db');

/**
 * Model thao tác với bảng news trong MySQL
 */
const NewsModel = {
  async getAllNews() {
    const [rows] = await pool.query(
      `SELECT n.*, u.full_name AS author_name
       FROM news n
       LEFT JOIN users u ON n.author_id = u.id
       ORDER BY n.created_at DESC`
    );
    return rows;
  },

  /**
   * Lấy danh sách tin tức đã xuất bản kèm tên tác giả
   */
  async getPublishedNews(limit = 10, offset = 0) {
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
  },

  /**
   * Lấy chi tiết bài viết theo đường dẫn slug và tự động tăng lượt xem
   */
  async getNewsBySlug(slug) {
    const [rows] = await pool.query(
      `SELECT n.*, u.full_name AS author_name
       FROM news n
       LEFT JOIN users u ON n.author_id = u.id
       WHERE n.slug = ? AND n.is_published = 1
       LIMIT 1`,
      [slug]
    );

    if (rows.length > 0) {
      pool.query('UPDATE news SET views_count = views_count + 1 WHERE id = ?', [rows[0].id]).catch(() => {});
      return rows[0];
    }
    return null;
  },

  async createNews(data, authorId) {
    const { title, slug, summary, content, thumbnail, is_published } = data;
    const [result] = await pool.query(
      `INSERT INTO news (author_id, title, slug, summary, content, thumbnail, is_published)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [authorId, title, slug, summary, content, thumbnail || null, is_published ? 1 : 0]
    );
    return result.insertId;
  },

  async updateNews(id, data) {
    const { title, slug, summary, content, thumbnail, is_published } = data;
    const [result] = await pool.query(
      `UPDATE news
       SET title = ?, slug = ?, summary = ?, content = ?, thumbnail = ?, is_published = ?
       WHERE id = ?`,
      [title, slug, summary, content, thumbnail || null, is_published ? 1 : 0, id]
    );
    return result.affectedRows > 0;
  },

  async deleteNews(id) {
    const [result] = await pool.query('DELETE FROM news WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
};

module.exports = NewsModel;
