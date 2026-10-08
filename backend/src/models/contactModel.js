const { pool } = require('../config/db');

/**
 * Model thao tác với bảng contacts trong MySQL
 */
const ContactModel = {
  /**
   * Lấy danh sách thông tin liên hệ (có hỗ trợ lọc theo trạng thái)
   */
  async getAllContacts(status = null) {
    let sql = 'SELECT * FROM contacts';
    const params = [];
    if (status && ['unread', 'read', 'replied'].includes(status)) {
      sql += ' WHERE status = ?';
      params.push(status);
    }
    sql += ' ORDER BY created_at DESC';
    const [rows] = await pool.query(sql, params);
    return rows;
  },

  /**
   * Lấy chi tiết một thông tin liên hệ theo ID
   */
  async getContactById(id) {
    const [rows] = await pool.query('SELECT * FROM contacts WHERE id = ? LIMIT 1', [id]);
    return rows[0] || null;
  },

  /**
   * Thêm mới một yêu cầu liên hệ từ khách hàng
   */
  async createContact(data) {
    const { fullName, email, phone, subject, message } = data;
    const [result] = await pool.query(
      `INSERT INTO contacts (full_name, email, phone, subject, message, status)
       VALUES (?, ?, ?, ?, ?, 'unread')`,
      [fullName, email, phone || null, subject, message]
    );
    return result.insertId;
  },

  /**
   * Cập nhật trạng thái xử lý và ghi chú của Quản trị viên
   */
  async updateStatus(id, status, adminNotes = null) {
    const isReplied = status === 'replied';
    const sql = isReplied
      ? `UPDATE contacts
         SET status = ?, admin_notes = COALESCE(?, admin_notes), replied_at = CURRENT_TIMESTAMP
         WHERE id = ?`
      : `UPDATE contacts
         SET status = ?, admin_notes = COALESCE(?, admin_notes)
         WHERE id = ?`;
    const [result] = await pool.query(sql, [status, adminNotes, id]);
    return result.affectedRows > 0;
  },

  /**
   * Xóa một bản ghi liên hệ
   */
  async deleteContact(id) {
    const [result] = await pool.query('DELETE FROM contacts WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },

  /**
   * Thống kê số lượng liên hệ theo các trạng thái
   */
  async getStatistics() {
    const [rows] = await pool.query(
      `SELECT
        COUNT(*) as total,
        SUM(CASE WHEN status = 'unread' THEN 1 ELSE 0 END) as unread,
        SUM(CASE WHEN status = 'read' THEN 1 ELSE 0 END) as read_count,
        SUM(CASE WHEN status = 'replied' THEN 1 ELSE 0 END) as replied
       FROM contacts`
    );
    return rows[0];
  }
};

module.exports = ContactModel;
