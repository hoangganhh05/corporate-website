const NewsModel = require('../models/newsModel');

function validateNews(body) {
  const fields = ['title', 'slug', 'summary', 'content'];
  const missing = fields.filter((field) => !String(body[field] || '').trim());
  if (missing.length) return `Thiếu trường bắt buộc: ${missing.join(', ')}`;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(body.slug)) return 'Slug chỉ được dùng chữ thường, số và dấu gạch ngang.';
  return null;
}

/**
 * Controller xử lý tin tức & bài viết
 */
const newsController = {
  async getAllNews(req, res, next) {
    try {
      const newsList = await NewsModel.getAllNews();
      return res.status(200).json({ status: 'success', results: newsList.length, data: newsList });
    } catch (error) {
      return next(error);
    }
  },

  /**
   * GET /api/news
   * Lấy danh sách tin tức đã xuất bản
   */
  async getNews(req, res, next) {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const newsList = await NewsModel.getPublishedNews(limit, offset);
      return res.status(200).json({
        status: 'success',
        results: newsList.length,
        data: newsList
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * GET /api/news/:slug
   * Lấy chi tiết bài viết theo slug
   */
  async getNewsBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const article = await NewsModel.getNewsBySlug(slug);
      if (!article) {
        return res.status(404).json({
          status: 'error',
          message: `Không tìm thấy bài viết với slug: ${slug}`
        });
      }
      return res.status(200).json({
        status: 'success',
        data: article
      });
    } catch (error) {
      next(error);
    }
  },

  async createNews(req, res, next) {
    try {
      const validationError = validateNews(req.body);
      if (validationError) return res.status(400).json({ status: 'error', message: validationError });
      const id = await NewsModel.createNews(req.body, req.user.sub);
      return res.status(201).json({ status: 'success', data: { id } });
    } catch (error) {
      return next(error);
    }
  },

  async updateNews(req, res, next) {
    try {
      const validationError = validateNews(req.body);
      if (validationError) return res.status(400).json({ status: 'error', message: validationError });
      const updated = await NewsModel.updateNews(req.params.id, req.body);
      if (!updated) return res.status(404).json({ status: 'error', message: 'Không tìm thấy bài viết.' });
      return res.status(200).json({ status: 'success', message: 'Cập nhật bài viết thành công.' });
    } catch (error) {
      return next(error);
    }
  },

  async deleteNews(req, res, next) {
    try {
      const deleted = await NewsModel.deleteNews(req.params.id);
      if (!deleted) return res.status(404).json({ status: 'error', message: 'Không tìm thấy bài viết.' });
      return res.status(200).json({ status: 'success', message: 'Xóa bài viết thành công.' });
    } catch (error) {
      return next(error);
    }
  }
};

module.exports = newsController;
