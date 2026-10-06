# BÁO CÁO KIỂM TRA CHỨC NĂNG QUẢN LÝ DỮ LIỆU (STORY-018)

> **Mã công việc:** STORY-018  
> **Thuộc Epic:** EPIC-005 — Tích hợp website và CSDL  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-014, AC-005, BR-002  
> **Thời gian thực hiện (Tuần 5 & 6):** 13/07/2026 – 26/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-018

Triển khai và kiểm tra chức năng quản lý dữ liệu phía Quản trị viên (Admin Portal), tập trung vào phân hệ quản lý thông tin liên hệ và trao đổi dữ liệu giữa các thành phần theo đúng yêu cầu **REQ-F-014**:
* Xây dựng tầng Model và Controller quản trị tương tác trực tiếp với bảng `contacts` trong MySQL.
* Cung cấp các API RESTful cho phép: Lấy danh sách liên hệ, lọc theo trạng thái, xem chi tiết, cập nhật tiến trình xử lý và xóa bản ghi.
* Xây dựng giao diện Bảng điều khiển quản trị (Admin Dashboard) tại [frontend/pages/admin/index.html](../frontend/pages/admin/index.html).
* Kiểm toán tính chính xác, nhất quán của dữ liệu qua các trạng thái: `unread` ➔ `read` ➔ `replied`.

---

## 2. KIẾN TRÚC VÀ CÁC THÀNH PHẦN ĐÃ XÂY DỰNG

### 2.1. Backend Data Management Layer
* **Model:** [backend/src/models/contactModel.js](../backend/src/models/contactModel.js)
  - `getAllContacts(status)`: Truy vấn danh sách liên hệ, sắp xếp theo thời gian mới nhất.
  - `getContactById(id)`: Lấy chi tiết tin nhắn theo ID.
  - `updateStatus(id, status, adminNotes)`: Cập nhật trạng thái và thời điểm phản hồi `replied_at`.
  - `getStatistics()`: Truy vấn tổng hợp số lượng liên hệ theo từng trạng thái.
* **Controller:** [backend/src/controllers/contactController.js](../backend/src/controllers/contactController.js)
  - Quản lý luồng xử lý và tự động chuyển trạng thái từ `unread` sang `read` khi Admin mở xem.
* **Router:** [backend/src/routes/contactRoutes.js](../backend/src/routes/contactRoutes.js)
  - `GET /api/contacts`: Lấy danh sách liên hệ và số liệu thống kê.
  - `GET /api/contacts/:id`: Xem chi tiết liên hệ.
  - `PATCH /api/contacts/:id/status`: Cập nhật trạng thái xử lý và ghi chú nội bộ.
  - `DELETE /api/contacts/:id`: Xóa bản ghi.

### 2.2. Giao diện Bảng điều khiển quản trị ([frontend/pages/admin/index.html](../frontend/pages/admin/index.html))
* **Thống kê thời gian thực (KPI Cards):** Hiển thị 4 thẻ số liệu trực quan: *Tổng liên hệ*, *Chưa xử lý*, *Đã đọc*, *Đã phản hồi*.
* **Bộ lọc trạng thái tương tác:** Cho phép lọc danh sách nhanh theo từng nhóm trạng thái.
* **Bảng dữ liệu tương tác:** Hiển thị ngày gửi, người gửi, email, số điện thoại, tiêu đề và huy hiệu trạng thái màu sắc phân biệt.
* **Modal xem chi tiết & Cập nhật trạng thái:** Cho phép Admin xem trọn vẹn nội dung tin nhắn, nhập ghi chú nội bộ và bấm nút cập nhật trạng thái trực tiếp.

---

## 3. KỊCH BẢN KIỂM THỬ VÀ ĐỐI CHIẾU DỮ LIỆU (DATA AUDIT)

| Kịch bản kiểm thử | Hành động thực hiện | Kết quả mong đợi | Đánh giá |
|---|---|---|:---:|
| **1. Tải danh sách liên hệ** | Admin truy cập trang Dashboard | Hiển thị danh sách liên hệ mới nhất và cập nhật chính xác các số liệu thống kê | **PASS** |
| **2. Lọc theo trạng thái** | Chọn tab "Chưa đọc" hoặc "Đã phản hồi" | Bảng chỉ hiển thị các bản ghi khớp với điều kiện lọc | **PASS** |
| **3. Xem chi tiết tin nhắn** | Nhấn "Xem & Xử lý" tại một liên hệ `unread` | Mở modal hiển thị đầy đủ thông tin, trạng thái tự động chuyển thành `read` | **PASS** |
| **4. Cập nhật tiến trình xử lý** | Nhập ghi chú và nhấn "Đánh dấu Đã phản hồi" | CSDL cập nhật `status = 'replied'` và lưu thời gian `replied_at` chính xác | **PASS** |
| **5. Cơ chế Fallback an toàn** | Truy cập Dashboard khi Backend chưa bật | Hệ thống tự chuyển sang chế độ dữ liệu mẫu demo, giao diện không bị treo | **PASS** |

---

## 4. TỔNG KẾT VÀ BƯỚC TIẾP THEO

- Chức năng quản lý dữ liệu đã được triển khai hoàn chỉnh, xác nhận tính chính xác và đồng bộ dữ liệu giữa Frontend, Backend và CSDL MySQL.
- Đã nghiệm thu thành công **STORY-018**.
- Bước tiếp theo: Triển khai **STORY-019: Hoàn thiện liên hệ và xử lý dữ liệu** để hoàn tất toàn bộ **EPIC-005**.
