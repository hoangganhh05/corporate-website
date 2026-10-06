const { pool } = require('../config/db');
const { inMemoryContacts, getNextContactId } = require('./fallbackData');

/**
 * Model thao tác với bảng contacts trong MySQL
 */
const ContactModel = {
  /**
   * Lấy danh sách thông tin liên hệ (có hỗ trợ lọc theo trạng thái)
   */
  async getAllContacts(status = null) {
    try {
      let sql = 'SELECT * FROM contacts';
      const params = [];

      if (status && ['unread', 'read', 'replied'].includes(status)) {
        sql += ' WHERE status = ?';
        params.push(status);
      }

      sql += ' ORDER BY created_at DESC';

      const [rows] = await pool.query(sql, params);
      return rows;
    } catch (error) {
      if (status && ['unread', 'read', 'replied'].includes(status)) {
        return inMemoryContacts.filter((c) => c.status === status);
      }
      return inMemoryContacts;
    }
  },

  /**
   * Lấy chi tiết một thông tin liên hệ theo ID
   */
  async getContactById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM contacts WHERE id = ? LIMIT 1', [id]);
      return rows[0] || null;
    } catch (error) {
      return inMemoryContacts.find((c) => String(c.id) === String(id)) || null;
    }
  },

  /**
   * Thêm mới một yêu cầu liên hệ từ khách hàng
   */
  async createContact(data) {
    try {
      const { fullName, email, phone, subject, message } = data;
      const [result] = await pool.query(
        `INSERT INTO contacts (full_name, email, phone, subject, message, status)
         VALUES (?, ?, ?, ?, ?, 'unread')`,
        [fullName, email, phone || null, subject, message]
      );
      return result.insertId;
    } catch (error) {
      const newId = getNextContactId();
      const newRecord = {
        id: newId,
        full_name: data.fullName,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject,
        message: data.message,
        status: 'unread',
        admin_note: null,
        created_at: new Date(),
        replied_at: null
      };
      inMemoryContacts.unshift(newRecord);
      return newId;
    }
  },

  /**
   * Cập nhật trạng thái xử lý và ghi chú của Quản trị viên
   */
  async updateStatus(id, status, adminNotes = null) {
    try {
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
    } catch (error) {
      const item = inMemoryContacts.find((c) => String(c.id) === String(id));
      if (!item) return false;
      item.status = status;
      if (adminNotes) item.admin_note = adminNotes;
      if (status === 'replied') item.replied_at = new Date();
      return true;
    }
  },

  /**
   * Xóa một bản ghi liên hệ
   */
  async deleteContact(id) {
    try {
      const [result] = await pool.query('DELETE FROM contacts WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      const idx = inMemoryContacts.findIndex((c) => String(c.id) === String(id));
      if (idx !== -1) {
        inMemoryContacts.splice(idx, 1);
        return true;
      }
      return false;
    }
  },

  /**
   * Thống kê số lượng liên hệ theo các trạng thái
   */
  async getStatistics() {
    try {
      const [rows] = await pool.query(
        `SELECT 
          COUNT(*) as total,
          SUM(CASE WHEN status = 'unread' THEN 1 ELSE 0 END) as unread,
          SUM(CASE WHEN status = 'read' THEN 1 ELSE 0 END) as read_count,
          SUM(CASE WHEN status = 'replied' THEN 1 ELSE 0 END) as replied
         FROM contacts`
      );
      return rows[0];
    } catch (error) {
      const total = inMemoryContacts.length;
      const unread = inMemoryContacts.filter((c) => c.status === 'unread').length;
      const read_count = inMemoryContacts.filter((c) => c.status === 'read').length;
      const replied = inMemoryContacts.filter((c) => c.status === 'replied').length;
      return { total, unread, read_count, replied };
    }
  }
};

module.exports = ContactModel;
