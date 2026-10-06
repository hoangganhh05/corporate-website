# BÁO CÁO HOÀN THIỆN LIÊN HỆ VÀ XỬ LÝ DỮ LIỆU (STORY-019)

> **Mã công việc:** STORY-019  
> **Thuộc Epic:** EPIC-005 — Tích hợp website và CSDL  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-015, AC-005, BR-002  
> **Thời gian thực hiện (Tuần 6):** 20/07/2026 – 26/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-019

Hoàn thiện toàn diện chức năng tiếp nhận liên hệ và xử lý dữ liệu khép kín từ giao diện khách hàng (Frontend) qua máy chủ ứng dụng (Backend Node.js Express) đến cơ sở dữ liệu (MySQL), đồng thời đồng bộ hiển thị lên Bảng điều khiển quản trị (Admin Dashboard) theo đúng yêu cầu **REQ-F-015**:
* Tăng cường kiểm soát và khử khuẩn dữ liệu đầu vào (Input Sanitization & XSS Protection).
* Hoàn thiện trải nghiệm gửi phản hồi cho khách hàng trên [frontend/pages/contact/index.html](../frontend/pages/contact/index.html).
* Xây dựng kịch bản kiểm thử tích hợp tự động hóa ([backend/src/scripts/verifyContactIntegration.js](../backend/src/scripts/verifyContactIntegration.js)).
* Nghiệm thu trọn vẹn toàn bộ giai đoạn **EPIC-005**.

---

## 2. QUY TRÌNH XỬ LÝ DỮ LIỆU LIÊN HỆ KHÉP KÍN

```text
Khách hàng điền Form
   │ (Validation Client-side)
   ▼
Gửi HTTP POST /api/contacts
   │ (Sanitize, Trim, Validate Server-side)
   ▼
Ghi bản ghi vào MySQL (bảng contacts)
   │ (status = 'unread')
   ▼
Phản hồi 201 Created & Alert thành công trên Website
   │
   ▼
Admin mở Dashboard (/pages/admin/index.html)
   │ (Hiển thị bản ghi mới, tăng KPI "Chưa xử lý")
   ▼
Admin xem chi tiết ➔ CSDL cập nhật status = 'read'
   │
   ▼
Admin phản hồi khách ➔ Cập nhật status = 'replied' & replied_at
```

---

## 3. CÁC CẢI TIẾN BẢO MẬT VÀ XỬ LÝ DỮ LIỆU ĐÃ THỰC HIỆN

1. **Khử khuẩn thẻ HTML / Chống XSS:** Loại bỏ toàn bộ các thẻ `<script>`, `<style>` hoặc mã độc nhúng trong nội dung họ tên, tiêu đề và tin nhắn trước khi lưu vào CSDL.
2. **Kiểm tra độ dài và định dạng chuẩn:**
   - Họ và tên tối thiểu 2 ký tự.
   - Nội dung tin nhắn tối thiểu 10 ký tự.
   - Email chuẩn cú pháp RFC.
   - Số điện thoại tuân thủ đầu số viễn thông Việt Nam (`+84` hoặc `0[3|5|7|8|9]`).
3. **Cơ chế chống gửi lặp (Spam / Double Submit):**
   - Vô hiệu hóa nút bấm và hiển thị Spinner trong lúc đang gửi yêu cầu qua mạng.

---

## 4. KỊCH BẢN KIỂM THỬ TÍCH HỢP TỰ ĐỘNG ([backend/src/scripts/verifyContactIntegration.js](../backend/src/scripts/verifyContactIntegration.js))

Tích hợp lệnh kiểm thử nhanh:
```bash
cd backend
npm run test:contact
```

### Kết quả kiểm thử tự động 5 bước:
* [x] **Bước 1:** Khởi tạo bản ghi liên hệ mới qua Model `createContact()`.
* [x] **Bước 2:** Truy vấn bản ghi từ MySQL `getContactById()`, xác minh trạng thái ban đầu là `unread`.
* [x] **Bước 3:** Chuyển trạng thái sang `read` qua `updateStatus()`, xác minh trạng thái cập nhật chính xác.
* [x] **Bước 4:** Chuyển trạng thái sang `replied` qua `updateStatus()`, xác minh trạng thái `replied` và cột `replied_at` có giá trị thời gian thực.
* [x] **Bước 5:** Dọn dẹp bản ghi kiểm thử `deleteContact()`, bảo đảm dữ liệu luôn sạch sẽ.

---

## 5. TỔNG KẾT VÀ BÀN GIAO TOÀN DIỆN EPIC-005

Với việc hoàn thành **STORY-019**, toàn bộ giai đoạn **EPIC-005: Tích hợp website và CSDL** đã hoàn tất trọn vẹn 100%:
* [x] **STORY-017:** Kết nối website với CSDL (Xây dựng hệ thống RESTful API cho Company, Services, News, Gallery và ApiClient).
* [x] **STORY-018:** Kiểm tra chức năng quản lý dữ liệu (Admin Dashboard, thống kê thời gian thực và quản lý trạng thái).
* [x] **STORY-019:** Hoàn thiện liên hệ và xử lý dữ liệu (Form liên hệ khép kín, bảo mật đầu vào, kiểm thử tự động).

Hệ thống đã sẵn sàng bước sang giai đoạn: **EPIC-006 — Kiểm thử và sửa lỗi (Testing & Bug Fixing)**!
