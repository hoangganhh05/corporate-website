const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

// GET /api/gallery
router.get('/', galleryController.getGallery);

module.exports = router;
