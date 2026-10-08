const CompanyModel = require('../models/companyModel');

/**
 * Controller xử lý thông tin doanh nghiệp
 */
const companyController = {
  /**
   * GET /api/company
   * Lấy thông tin chính thức của công ty
   */
  async getCompanyInfo(req, res, next) {
    try {
      const info = await CompanyModel.getCompanyInfo();
      if (!info) {
        return res.status(404).json({
          status: 'error',
          message: 'Chưa có thông tin doanh nghiệp trong hệ thống.'
        });
      }
      return res.status(200).json({
        status: 'success',
        data: info
      });
    } catch (error) {
      next(error);
    }
  },

  async updateCompanyInfo(req, res, next) {
    try {
      // Email chưa có nguồn xác nhận trong tài liệu dự án, nên cho phép để trống.
      const required = ['company_name', 'address', 'phone'];
      const missing = required.filter((field) => !String(req.body[field] || '').trim());
      if (missing.length) {
        return res.status(400).json({ status: 'error', message: `Thiếu trường bắt buộc: ${missing.join(', ')}` });
      }
      const updated = await CompanyModel.updateCompanyInfo(req.body);
      if (!updated) return res.status(404).json({ status: 'error', message: 'Không tìm thấy thông tin doanh nghiệp.' });
      return res.status(200).json({ status: 'success', message: 'Cập nhật thông tin doanh nghiệp thành công.' });
    } catch (error) {
      return next(error);
    }
  }
};

module.exports = companyController;
