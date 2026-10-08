const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { requireAuth, authorizeRoles } = require('../middlewares/authMiddleware');

const adminOnly = [requireAuth, authorizeRoles('admin')];

// GET /api/contacts - Lấy danh sách liên hệ
router.get('/', ...adminOnly, contactController.getContacts);

// GET /api/contacts/:id - Lấy chi tiết liên hệ
router.get('/:id', ...adminOnly, contactController.getContactDetail);

// POST /api/contacts - Tạo liên hệ mới
router.post('/', contactController.submitContact);

// PATCH /api/contacts/:id/status - Cập nhật trạng thái xử lý
router.patch('/:id/status', ...adminOnly, contactController.updateStatus);

// DELETE /api/contacts/:id - Xóa liên hệ
router.delete('/:id', ...adminOnly, contactController.deleteContact);

module.exports = router;
