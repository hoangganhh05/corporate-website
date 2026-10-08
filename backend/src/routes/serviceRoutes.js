const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { requireAuth, authorizeRoles } = require('../middlewares/authMiddleware');

// GET /api/services
router.get('/', serviceController.getServices);
router.get('/admin/all', requireAuth, authorizeRoles('admin'), serviceController.getAllServices);
router.post('/', requireAuth, authorizeRoles('admin'), serviceController.createService);

// GET /api/services/:slug
router.get('/:slug', serviceController.getServiceBySlug);
router.put('/:id', requireAuth, authorizeRoles('admin'), serviceController.updateService);
router.delete('/:id', requireAuth, authorizeRoles('admin'), serviceController.deleteService);

module.exports = router;
