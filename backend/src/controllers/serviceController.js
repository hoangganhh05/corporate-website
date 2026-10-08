const ServiceModel = require('../models/serviceModel');

function validateService(body) {
  const fields = ['title', 'slug'];
  const missing = fields.filter((field) => !String(body[field] || '').trim());
  if (missing.length) return `Thiếu trường bắt buộc: ${missing.join(', ')}`;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(body.slug)) return 'Slug chỉ được dùng chữ thường, số và dấu gạch ngang.';
  return null;
}

/**
 * Controller xử lý danh mục dịch vụ
 */
const serviceController = {
  async getAllServices(req, res, next) {
    try {
      const services = await ServiceModel.getAllServices();
      return res.status(200).json({ status: 'success', results: services.length, data: services });
    } catch (error) {
      return next(error);
    }
  },

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
  },

  async createService(req, res, next) {
    try {
      const validationError = validateService(req.body);
      if (validationError) return res.status(400).json({ status: 'error', message: validationError });
      const id = await ServiceModel.createService(req.body);
      return res.status(201).json({ status: 'success', data: { id } });
    } catch (error) {
      return next(error);
    }
  },

  async updateService(req, res, next) {
    try {
      const validationError = validateService(req.body);
      if (validationError) return res.status(400).json({ status: 'error', message: validationError });
      const updated = await ServiceModel.updateService(req.params.id, req.body);
      if (!updated) return res.status(404).json({ status: 'error', message: 'Không tìm thấy dịch vụ.' });
      return res.status(200).json({ status: 'success', message: 'Cập nhật dịch vụ thành công.' });
    } catch (error) {
      return next(error);
    }
  },

  async deleteService(req, res, next) {
    try {
      const deleted = await ServiceModel.deleteService(req.params.id);
      if (!deleted) return res.status(404).json({ status: 'error', message: 'Không tìm thấy dịch vụ.' });
      return res.status(200).json({ status: 'success', message: 'Xóa dịch vụ thành công.' });
    } catch (error) {
      return next(error);
    }
  }
};

module.exports = serviceController;
