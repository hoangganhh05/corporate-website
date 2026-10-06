const GalleryModel = require('../models/galleryModel');

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
  }
};

module.exports = galleryController;
