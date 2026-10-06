# ĐỀ CƯƠNG SLIDE THUYẾT MINH BẢO VỆ ĐỀ TÀI
## WEBSITE GIỚI THIỆU DOANH NGHIỆP — CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM

**Thời lượng thuyết trình đề xuất:** 15 – 20 phút  
**Cấu trúc bài thuyết minh:** 12 Slide chuẩn mực

---

### 🖥️ SLIDE 1: TRANG TIÊU ĐỀ & THÔNG TIN ĐỀ TÀI
- **Tiêu đề chính:** BÁO CÁO TỔNG KẾT THỰC TẬP TỐT NGHIỆP
- **Tên đề tài:** Thiết kế và xây dựng Website giới thiệu doanh nghiệp
- **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM
- **Cán bộ hướng dẫn doanh nghiệp:** Trương Thị Minh — Quản lý
- **Thời gian thực hiện:** 8 tuần (15/06/2026 – 09/08/2026)
- **Thông điệp:** *"Xây dựng cổng thông tin doanh nghiệp B2B SaaS hiện đại, tin cậy, tối ưu trải nghiệm và bảo mật cao."*

---

### 🖥️ SLIDE 2: ĐẶT VẤN ĐỀ & BỐI CẢNH DOANH NGHIỆP
- **Bối cảnh:** FFT Việt Nam là doanh nghiệp cung cấp giải pháp chuyển đổi số và phát triển phần mềm đang mở rộng quy mô.
- **Thách thức:** Cần một website doanh nghiệp chuẩn mực để:
  * Thể hiện năng lực công nghệ và hồ sơ năng lực (Profile) chuyên nghiệp.
  * Tối ưu hóa kênh chuyển đổi khách hàng B2B qua form tư vấn trực tuyến.
  * Có hệ thống quản trị nội bộ trực quan để theo dõi và xử lý phản hồi khách hàng.
- **Định hướng phong cách:** Enterprise B2B SaaS (Gọn gàng, độ tin cậy cao, loại bỏ hoàn toàn phong cách AI lòe loẹt - Anti-AI Slop).

---

### 🖥️ SLIDE 3: MỤC TIÊU & PHẠM VI DỰ ÁN
- **Mục tiêu cốt lõi:**
  1. Phân tích và thiết kế hệ thống phần mềm hướng đối tượng theo chuẩn công nghiệp (Use Case, Activity, ERD, Class Diagram).
  2. Xây dựng giao diện Frontend 7 trang chuẩn SEO, Responsive đa nền tảng.
  3. Xây dựng Backend RESTful APIs trên Node.js/Express kết hợp CSDL MySQL 8.0.
  4. Đảm bảo an toàn thông tin (chống XSS) và cơ chế chịu lỗi (Zero Downtime).
  5. Đạt 100% tiêu chí kiểm thử tự động (Functional, UI, Regression Audit).
- **Phạm vi:** 8 tuần làm việc, áp dụng quy trình chuẩn Git Flow (25 Stories).

---

### 🖥️ SLIDE 4: PHÂN TÍCH YÊU CẦU & THIẾT KẾ USE CASE
- **Đối tượng sử dụng (Actors):**
  * **Khách hàng vãng lai (Guest):** Xem thông tin công ty, dịch vụ, tin tức, thư viện ảnh, gửi yêu cầu liên hệ/tư vấn.
  * **Quản trị viên (Admin):** Đăng nhập, xem thống kê dashboard, lọc và xử lý liên hệ, đổi trạng thái sang 'read' và 'replied'.
  * **Hệ thống (System):** Kiểm định dữ liệu, làm sạch mã độc XSS, kích hoạt tầng dữ liệu dự phòng.
- **Sơ đồ phân rã Use Case:** 6 Use Case chính gắn liền với luồng nghiệp vụ.

---

### 🖥️ SLIDE 5: KIẾN TRÚC HỆ THỐNG & NGĂN XẾP CÔNG NGHỆ
- **Mô hình kiến trúc:** 3 Tầng phân tách rõ ràng (3-Tier MVC Architecture).
  * **Presentation Tier:** HTML5, CSS3, Bootstrap 5.3.3, Vanilla JavaScript (ES6+).
  * **Application Tier:** Node.js (v25), Express.js REST API, CORS, XSS Sanitization Middleware.
  * **Data Tier:** MySQL 8.0 (InnoDB, `utf8mb4_unicode_ci`), Pool Connection.
- **Tính năng độc đáo:** Tầng chịu lỗi dự phòng `fallbackData.js` giúp hệ thống không bao giờ bị lỗi 500 ngay cả khi CSDL tạm thời offline.

---

### 🖥️ SLIDE 6: THIẾT KẾ CƠ SỞ DỮ LIỆU (MYSQL ERD)
- **Cấu trúc 6 bảng chuẩn hóa 3NF:**
  1. `users`: Tài khoản và phân quyền quản trị viên.
  2. `company_info`: Thông tin hồ sơ doanh nghiệp, slogan, liên hệ.
  3. `services`: Danh mục dịch vụ, giải pháp công nghệ.
  4. `news`: Tin tức hoạt động và bài viết chuyên môn.
  5. `gallery`: Bộ sưu tập hình ảnh theo danh mục.
  6. `contacts`: Tiếp nhận yêu cầu tư vấn, ghi chú phản hồi, trạng thái vòng đời.
- **Tự động hóa:** Script Node.js `npm run db:init` tự động nạp cấu trúc và dữ liệu mẫu thực tế.

---

### 🖥️ SLIDE 7: TRIỂN KHAI GIAO DIỆN NGƯỜI DÙNG (FRONTEND UI)
- **7 Trang chức năng hoàn chỉnh:**
  * Trang chủ (Home) | Giới thiệu (About) | Dịch vụ (Services) | Tin tức (News) | Thư viện ảnh (Gallery) | Liên hệ (Contact) | Quản trị (Admin Portal).
- **Thẩm mỹ chuẩn mực:** Màu sắc nhận diện xanh dương doanh nghiệp (`#2563eb`), nền tối tương phản mạnh (`#0f172a`), font chữ hệ thống sắc nét.
- **Trải nghiệm mượt mà:** Lọc tin tức/ảnh tức thì bằng JavaScript, modal xem ảnh phóng to, menu co giãn mượt mà.

---

### 🖥️ SLIDE 8: BACKEND RESTFUL APIS & AN TOÀN DỮ LIỆU
- **Hệ thống RESTful API endpoints:**
  * `/api/health`, `/api/company`, `/api/services`, `/api/news`, `/api/gallery`, `/api/contacts`.
- **An toàn thông tin:**
  * XSS Sanitization: Hàm `sanitizeText` đa tầng loại bỏ hoàn toàn `<script>`, `<style>` và mã độc trước khi xử lý.
  * Validation: Kiểm tra chặt chẽ định dạng email regex và số điện thoại chuẩn Việt Nam.
  * Vòng đời liên hệ: `unread` (chưa đọc) $\rightarrow$ `read` (đã xem) $\rightarrow$ `replied` (đã phản hồi).

---

### 🖥️ SLIDE 9: CỔNG QUẢN TRỊ ADMIN DASHBOARD
- **Giao diện Dashboard chuyên nghiệp:**
  * 4 Thẻ KPI: Tổng số liên hệ, Chưa đọc, Đã đọc, Đã phản hồi.
  * Bộ lọc Tab thông minh: Phân loại danh sách chỉ với 1 click.
  * Modal chi tiết: Tự động đánh dấu đã đọc khi xem, cho phép nhập ghi chú nghiệp vụ và xác nhận đã phản hồi.
  * Hỗ trợ cuộn ngang `-webkit-overflow-scrolling: touch` khi xem trên iPad/điện thoại di động.

---

### 🖥️ SLIDE 10: ĐẢM BẢO CHẤT LƯỢNG & KIỂM THỬ TỰ ĐỘNG
- **5 Bộ kiểm thử tự động tích hợp trong `package.json`:**
  * `npm run test:contact`: Kiểm tra tích hợp liên hệ & làm sạch dữ liệu.
  * `npm run test:functional`: 26/26 ca kiểm thử chức năng đạt (100% Pass).
  * `npm run test:ui`: 24/24 tiêu chí co giãn màn hình và trình duyệt đạt (100% Pass).
  * `npm run test:regression`: Kiểm thử hồi quy toàn diện đạt **Zero Regressions**.
  * `npm run test:audit`: Kiểm toán 6/6 hạng mục đạt chuẩn 100%.

---

### 🖥️ SLIDE 11: DEMO SẢN PHẨM TRỰC QUAN (LIVE DEMO)
- **Phần trình diễn 5 luồng chính:**
  1. Giới thiệu tổng quan Trang chủ & Dịch vụ.
  2. Bộ lọc Thư viện hình ảnh và xem Modal.
  3. Thử nghiệm Form liên hệ: Cảnh báo validation khi nhập sai $\rightarrow$ Gửi thành công dữ liệu hợp lệ.
  4. Đăng nhập Admin Portal: Thấy ngay bản ghi mới, mở xem chuyển sang 'read', nhập phản hồi chuyển sang 'replied'.
  5. Trình diễn Responsive trên thiết bị Mobile và Tablet qua DevTools.

---

### 🖥️ SLIDE 12: KẾT LUẬN & HƯỚNG PHÁT TRIỂN
- **Kết quả đạt được:**
  * Hoàn thành 100% các mục tiêu trong Kế hoạch 8 tuần theo chuẩn Git Flow.
  * Đạt điểm tối đa theo Ma trận truy vết yêu cầu (20 REQ-F, 5 REQ-NF, 5 AC).
  * Bàn giao sản phẩm hoàn thiện, hồ sơ tài liệu 25 Stories đóng gói chu đáo.
- **Hướng phát triển:** Tích hợp gửi email thông báo tự động (Nodemailer), tích hợp phân quyền JWT Token đa cấp cho Admin.
- **Lời cảm ơn & Xin ý kiến nhận xét của Hội đồng chấm điểm.**
