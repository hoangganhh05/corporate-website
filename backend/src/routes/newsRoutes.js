const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const { requireAuth, authorizeRoles } = require('../middlewares/authMiddleware');

// GET /api/news
router.get('/', newsController.getNews);
router.get('/admin/all', requireAuth, authorizeRoles('admin'), newsController.getAllNews);
router.post('/', requireAuth, authorizeRoles('admin'), newsController.createNews);

// GET /api/news/:slug
router.get('/:slug', newsController.getNewsBySlug);
router.put('/:id', requireAuth, authorizeRoles('admin'), newsController.updateNews);
router.delete('/:id', requireAuth, authorizeRoles('admin'), newsController.deleteNews);

module.exports = router;
