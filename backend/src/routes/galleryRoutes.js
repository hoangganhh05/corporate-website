const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');
const { requireAuth, authorizeRoles } = require('../middlewares/authMiddleware');

// GET /api/gallery
router.get('/', galleryController.getGallery);
router.post('/', requireAuth, authorizeRoles('admin'), galleryController.createGalleryItem);
router.put('/:id', requireAuth, authorizeRoles('admin'), galleryController.updateGalleryItem);
router.delete('/:id', requireAuth, authorizeRoles('admin'), galleryController.deleteGalleryItem);

module.exports = router;
