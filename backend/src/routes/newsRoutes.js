const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// GET /api/news
router.get('/', newsController.getNews);

// GET /api/news/:slug
router.get('/:slug', newsController.getNewsBySlug);

module.exports = router;
