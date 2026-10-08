const express = require('express');
const router = express.Router();

const healthRoutes = require('./healthRoutes');
const authRoutes = require('./authRoutes');
const companyRoutes = require('./companyRoutes');
const serviceRoutes = require('./serviceRoutes');
const newsRoutes = require('./newsRoutes');
const galleryRoutes = require('./galleryRoutes');
const contactRoutes = require('./contactRoutes');

// Mount routes
router.use('/health', healthRoutes);
router.use('/auth', authRoutes);
router.use('/company', companyRoutes);
router.use('/services', serviceRoutes);
router.use('/news', newsRoutes);
router.use('/gallery', galleryRoutes);
router.use('/contacts', contactRoutes);

module.exports = router;
