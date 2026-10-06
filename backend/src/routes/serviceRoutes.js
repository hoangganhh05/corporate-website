const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// GET /api/services
router.get('/', serviceController.getServices);

// GET /api/services/:slug
router.get('/:slug', serviceController.getServiceBySlug);

module.exports = router;
