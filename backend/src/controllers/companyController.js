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
  }
};

module.exports = companyController;
