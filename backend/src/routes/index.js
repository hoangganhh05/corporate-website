const express = require('express');
const router = express.Router();

const healthRoutes = require('./healthRoutes');
const companyRoutes = require('./companyRoutes');
const serviceRoutes = require('./serviceRoutes');
const newsRoutes = require('./newsRoutes');
const galleryRoutes = require('./galleryRoutes');

// Mount routes
router.use('/health', healthRoutes);
router.use('/company', companyRoutes);
router.use('/services', serviceRoutes);
router.use('/news', newsRoutes);
router.use('/gallery', galleryRoutes);

module.exports = router;
