const GalleryModel = require('../models/galleryModel');

function validateGallery(body) {
  const fields = ['title', 'image_url'];
  const missing = fields.filter((field) => !String(body[field] || '').trim());
  return missing.length ? `Thiếu trường bắt buộc: ${missing.join(', ')}` : null;
}

/**
 * Controller xử lý thư viện hình ảnh
 */
const galleryController = {
  /**
   * GET /api/gallery
   * Lấy danh sách ảnh (có hỗ trợ query category)
   */
  async getGallery(req, res, next) {
    try {
      const { category } = req.query;
      const images = await GalleryModel.getGallery(category);
      return res.status(200).json({
        status: 'success',
        results: images.length,
        data: images
      });
    } catch (error) {
      next(error);
    }
  },

  async createGalleryItem(req, res, next) {
    try {
      const validationError = validateGallery(req.body);
      if (validationError) return res.status(400).json({ status: 'error', message: validationError });
      const id = await GalleryModel.createGalleryItem(req.body);
      return res.status(201).json({ status: 'success', data: { id } });
    } catch (error) {
      return next(error);
    }
  },

  async updateGalleryItem(req, res, next) {
    try {
      const validationError = validateGallery(req.body);
      if (validationError) return res.status(400).json({ status: 'error', message: validationError });
      const updated = await GalleryModel.updateGalleryItem(req.params.id, req.body);
      if (!updated) return res.status(404).json({ status: 'error', message: 'Không tìm thấy hình ảnh.' });
      return res.status(200).json({ status: 'success', message: 'Cập nhật hình ảnh thành công.' });
    } catch (error) {
      return next(error);
    }
  },

  async deleteGalleryItem(req, res, next) {
    try {
      const deleted = await GalleryModel.deleteGalleryItem(req.params.id);
      if (!deleted) return res.status(404).json({ status: 'error', message: 'Không tìm thấy hình ảnh.' });
      return res.status(200).json({ status: 'success', message: 'Xóa hình ảnh thành công.' });
    } catch (error) {
      return next(error);
    }
  }
};

module.exports = galleryController;
