const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const { requireAuth, authorizeRoles } = require('../middlewares/authMiddleware');

// GET /api/company
router.get('/', companyController.getCompanyInfo);
router.patch('/', requireAuth, authorizeRoles('admin'), companyController.updateCompanyInfo);

module.exports = router;
