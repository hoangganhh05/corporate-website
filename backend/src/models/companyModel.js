const { pool } = require('../config/db');

/**
 * Model thao tác với bảng company_info trong MySQL
 */
const CompanyModel = {
  /**
   * Lấy thông tin chính thức của doanh nghiệp (bản ghi id = 1)
   */
  async getCompanyInfo() {
    const [rows] = await pool.query('SELECT * FROM company_info WHERE id = 1 LIMIT 1');
    return rows[0] || null;
  },

  /**
   * Cập nhật thông tin doanh nghiệp
   */
  async updateCompanyInfo(data) {
    const { company_name, slogan, about_summary, about_detail, address, phone, email, working_hours } = data;
    const [result] = await pool.query(
      `UPDATE company_info
       SET company_name = ?, slogan = ?, about_summary = ?, about_detail = ?,
           address = ?, phone = ?, email = ?, working_hours = ?
       WHERE id = 1`,
      [company_name, slogan, about_summary, about_detail, address, phone, email, working_hours]
    );
    return result.affectedRows > 0;
  }
};

module.exports = CompanyModel;
