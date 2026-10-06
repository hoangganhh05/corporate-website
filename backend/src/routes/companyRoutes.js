const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// GET /api/company
router.get('/', companyController.getCompanyInfo);

module.exports = router;
