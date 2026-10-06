const ContactModel = require('../models/contactModel');

function sanitizeText(str) {
  if (!str) return '';
  return String(str)
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
}

/**
 * Controller xử lý các chức năng quản lý dữ liệu liên hệ
 */
const contactController = {
  sanitizeText,
  /**
   * GET /api/contacts
   * Lấy danh sách liên hệ (có thể lọc ?status=unread/read/replied)
   */
  async getContacts(req, res, next) {
    try {
      const { status } = req.query;
      const contacts = await ContactModel.getAllContacts(status);
      const stats = await ContactModel.getStatistics();

      return res.status(200).json({
        status: 'success',
        results: contacts.length,
        statistics: stats,
        data: contacts
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * GET /api/contacts/:id
   * Xem chi tiết liên hệ và tự động chuyển status sang 'read' nếu đang là 'unread'
   */
  async getContactDetail(req, res, next) {
    try {
      const { id } = req.params;
      const contact = await ContactModel.getContactById(id);

      if (!contact) {
        return res.status(404).json({
          status: 'error',
          message: `Không tìm thấy liên hệ với mã ID: ${id}`
        });
      }

      // Tự động chuyển unread sang read khi Admin mở xem
      if (contact.status === 'unread') {
        await ContactModel.updateStatus(id, 'read');
        contact.status = 'read';
      }

      return res.status(200).json({
        status: 'success',
        data: contact
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * POST /api/contacts
   * Tiếp nhận liên hệ từ form khách gửi
   */
  async submitContact(req, res, next) {
    try {
      let { fullName, email, phone, subject, message } = req.body;

      // Làm sạch dữ liệu đầu vào (Trim & XSS Protection)
      fullName = sanitizeText(fullName);
      email = (email || '').trim().toLowerCase();
      phone = (phone || '').trim().replace(/\s/g, '');
      subject = sanitizeText(subject);
      message = sanitizeText(message);

      // Validation
      if (!fullName || !email || !subject || !message) {
        return res.status(400).json({
          status: 'error',
          message: 'Vui lòng cung cấp đầy đủ: họ tên, email, tiêu đề và nội dung tin nhắn.'
        });
      }

      if (fullName.length < 2) {
        return res.status(400).json({
          status: 'error',
          message: 'Họ và tên phải có tối thiểu 2 ký tự.'
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          status: 'error',
          message: 'Địa chỉ email không đúng định dạng.'
        });
      }

      if (phone && !/^(\+84|0)[3|5|7|8|9][0-9]{8}$/.test(phone)) {
        return res.status(400).json({
          status: 'error',
          message: 'Số điện thoại không đúng định dạng chuẩn Việt Nam.'
        });
      }

      if (message.length < 10) {
        return res.status(400).json({
          status: 'error',
          message: 'Nội dung tin nhắn phải có tối thiểu 10 ký tự.'
        });
      }

      const newId = await ContactModel.createContact({ fullName, email, phone, subject, message });

      return res.status(201).json({
        status: 'success',
        message: 'Gửi yêu cầu liên hệ thành công!',
        data: { id: newId }
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * PATCH /api/contacts/:id/status
   * Cập nhật trạng thái xử lý và ghi chú của Admin
   */
  async updateStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status, adminNotes } = req.body;

      if (!status || !['unread', 'read', 'replied'].includes(status)) {
        return res.status(400).json({
          status: 'error',
          message: 'Trạng thái không hợp lệ. Chỉ chấp nhận: unread, read, replied.'
        });
      }

      const success = await ContactModel.updateStatus(id, status, adminNotes);
      if (!success) {
        return res.status(404).json({
          status: 'error',
          message: `Không tìm thấy liên hệ với ID: ${id} để cập nhật.`
        });
      }

      return res.status(200).json({
        status: 'success',
        message: 'Cập nhật trạng thái liên hệ thành công!'
      });
    } catch (error) {
      next(error);
    }
  },

  /**
   * DELETE /api/contacts/:id
   * Xóa một thông tin liên hệ
   */
  async deleteContact(req, res, next) {
    try {
      const { id } = req.params;
      const success = await ContactModel.deleteContact(id);

      if (!success) {
        return res.status(404).json({
          status: 'error',
          message: `Không tìm thấy liên hệ với ID: ${id} để xóa.`
        });
      }

      return res.status(200).json({
        status: 'success',
        message: 'Xóa liên hệ thành công!'
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = contactController;
