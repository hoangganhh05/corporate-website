const ServiceModel = require('../models/serviceModel');

/**
 * Controller xử lý danh mục dịch vụ
 */
const serviceController = {
  /**
   * GET /api/services
   * Lấy danh sách các dịch vụ đang hoạt động
   */
  async getServices(req, res, next) {
    try {
      const services = await ServiceModel.getActiveServices();
      return res.status(200).json({
        status: 'success',
        results: services.length,
        data: services
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * GET /api/services/:slug
   * Lấy chi tiết dịch vụ theo đường dẫn slug
   */
  async getServiceBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const service = await ServiceModel.getServiceBySlug(slug);
      if (!service) {
        return res.status(404).json({
          status: 'error',
          message: `Không tìm thấy dịch vụ với slug: ${slug}`
        });
      }
      return res.status(200).json({
        status: 'success',
        data: service
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = serviceController;
