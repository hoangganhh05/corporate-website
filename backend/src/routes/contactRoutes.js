const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// GET /api/contacts - Lấy danh sách liên hệ
router.get('/', contactController.getContacts);

// GET /api/contacts/:id - Lấy chi tiết liên hệ
router.get('/:id', contactController.getContactDetail);

// POST /api/contacts - Tạo liên hệ mới
router.post('/', contactController.submitContact);

// PATCH /api/contacts/:id/status - Cập nhật trạng thái xử lý
router.patch('/:id/status', contactController.updateStatus);

// DELETE /api/contacts/:id - Xóa liên hệ
router.delete('/:id', contactController.deleteContact);

module.exports = router;
