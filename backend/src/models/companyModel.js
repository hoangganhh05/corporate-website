const { pool } = require('../config/db');
const { fallbackCompany } = require('./fallbackData');

/**
 * Model thao tác với bảng company_info trong MySQL
 */
const CompanyModel = {
  /**
   * Lấy thông tin chính thức của doanh nghiệp (bản ghi id = 1)
   */
  async getCompanyInfo() {
    try {
      const [rows] = await pool.query('SELECT * FROM company_info WHERE id = 1 LIMIT 1');
      return rows[0] || fallbackCompany;
    } catch (error) {
      // Fallback khi MySQL ngoại tuyến hoặc chưa phân quyền
      return fallbackCompany;
    }
  },

  /**
   * Cập nhật thông tin doanh nghiệp
   */
  async updateCompanyInfo(data) {
    try {
      const { company_name, slogan, about_summary, about_detail, address, phone, email, working_hours } = data;
      const [result] = await pool.query(
        `UPDATE company_info 
         SET company_name = ?, slogan = ?, about_summary = ?, about_detail = ?, 
             address = ?, phone = ?, email = ?, working_hours = ? 
         WHERE id = 1`,
        [company_name, slogan, about_summary, about_detail, address, phone, email, working_hours]
      );
      return result.affectedRows > 0;
    } catch (error) {
      Object.assign(fallbackCompany, data);
      return true;
    }
  }
};

module.exports = CompanyModel;
