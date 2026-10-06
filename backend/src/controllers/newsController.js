const NewsModel = require('../models/newsModel');

/**
 * Controller xử lý tin tức & bài viết
 */
const newsController = {
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
  }
};

module.exports = newsController;
