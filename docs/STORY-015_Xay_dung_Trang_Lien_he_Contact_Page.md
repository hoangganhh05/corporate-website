# BÁO CÁO XÂY DỰNG TRANG LIÊN HỆ — CONTACT PAGE (STORY-015)

> **Mã công việc:** STORY-015  
> **Thuộc Epic:** EPIC-004 — Xây dựng website  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-010, REQ-F-011, REQ-F-015, REQ-NF-002, AC-003  
> **Thời gian thực hiện (Tuần 4 & 6):** 06/07/2026 – 26/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-015

Triển khai hoàn thiện phân hệ **Liên hệ & Xử lý phản hồi (Contact Page)** tại [frontend/pages/contact/index.html](../frontend/pages/contact/index.html):
* Cung cấp các kênh liên lạc chính thức, minh bạch của CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM (Địa chỉ, Hotline, Email, Giờ làm việc).
* Xây dựng biểu mẫu liên hệ chuyên nghiệp tiếp nhận yêu cầu báo giá/tư vấn giải pháp từ đối tác và khách hàng.
* Tích hợp cơ chế kiểm tra tính hợp lệ dữ liệu (Form Validation) bằng JavaScript thuần trước khi gửi thông tin.
* Thiết lập giao diện sẵn sàng kết nối API `POST /api/contacts` với Backend Node.js và CSDL MySQL trong giai đoạn tích hợp (EPIC-005).

---

## 2. BỐ CỤC NỘI DUNG CHI TIẾT TRÊN TRANG LIÊN HỆ

1. **Thanh điều hướng (Navbar) & Breadcrumb:**
   - Trạng thái `active` trên mục "Liên hệ".
   - Breadcrumb phân cấp: `Trang chủ / Liên hệ`.
2. **Khối thẻ thông tin liên hệ trực tiếp:**
   - *Trụ sở hoạt động:* Tầng 5, Tòa nhà Công Nghệ, Quận Cầu Giấy, TP. Hà Nội.
   - *Đường dây nóng:* 024 1234 5678 (Hỗ trợ kỹ thuật 24/7).
   - *Hòm thư điện tử:* `contact@fft.com.vn` và `support@fft.com.vn`.
3. **Biểu mẫu gửi liên hệ trực tuyến (Contact Form):**
   - Trường *Họ và tên* (`fullName`): Bắt buộc, tối thiểu 2 ký tự.
   - Trường *Email* (`email`): Bắt buộc, kiểm tra đúng định dạng email tiêu chuẩn.
   - Trường *Số điện thoại* (`phone`): Tùy chọn, kiểm tra định dạng số điện thoại Việt Nam.
   - Trường *Tiêu đề* (`subject`): Bắt buộc.
   - Trường *Nội dung* (`message`): Bắt buộc, tối thiểu 10 ký tự.
4. **Cơ chế kiểm soát dữ liệu và trải nghiệm người dùng (UX):**
   - Khi dữ liệu không hợp lệ: Hệ thống lập tức đánh dấu viền đỏ (`is-invalid`) và hiển thị thông báo lỗi cụ thể dưới từng ô nhập.
   - Khi gửi tin nhắn: Nút bấm hiển thị trạng thái đang xử lý (`spinner-border`) để chống người dùng bấm liên tục (Spam Click).
   - Khi gửi thành công: Hiển thị hộp thông báo màu xanh (`alert-success`), xóa trắng dữ liệu đã điền (`form.reset()`).
5. **Khối lịch làm việc & Câu hỏi thường gặp (FAQ):**
   - Chi tiết giờ làm việc trong tuần và trực hỗ trợ ngày nghỉ.
   - Accordion giải đáp thắc mắc về thời gian phản hồi và cam kết bảo mật thỏa thuận NDA.
6. **Chân trang (Footer):**
   - Footer 4 cột đồng bộ toàn hệ thống.

---

## 3. ĐÁNH GIÁ HIỂN THỊ VÀ TIÊU CHÍ NGHIỆM THU AC-003

* [x] **Nội dung hoàn chỉnh:** Cung cấp đầy đủ thông tin liên hệ thực tế, biểu mẫu tiếp nhận thông điệp đa dạng.
* [x] **Validation chặt chẽ:** Kiểm tra lỗi đầu vào toàn diện ở phía trình duyệt (Client-side), ngăn chặn việc gửi dữ liệu rác.
* [x] **Kiểm tra hiển thị (Responsive):** 
  - Màn hình Desktop: Phân chia tỷ lệ 7/5 giữa Form liên hệ và Thông tin phụ trợ/FAQ.
  - Màn hình Mobile/Tablet: Bố cục tự động xếp chồng dọc khoa học, bàn phím số hiển thị phù hợp trên ô nhập điện thoại (`type="tel"`).

---

## 4. BƯỚC TIẾP THEO

- Chuyển tiếp sang **STORY-016: Kiểm tra Responsive và tương thích đa trình duyệt (Browser & Responsive Testing)** để tổng duyệt toàn bộ 6 trang giao diện trước khi kết thúc EPIC-004.
