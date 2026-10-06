# BÁO CÁO XÂY DỰNG VÀ KHỞI TẠO CƠ SỞ DỮ LIỆU (STORY-008)

> **Mã công việc:** STORY-008  
> **Thuộc Epic:** EPIC-003 — Xây dựng cơ sở dữ liệu  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-012, AC-004, BR-002  
> **Thời gian thực hiện (Tuần 4):** 06/07/2026 – 12/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-008

Triển khai hiện thực hóa mô hình cơ sở dữ liệu đã thiết kế tại STORY-006 lên hệ quản trị MySQL:
* Tạo CSDL `company_intro_db`.
* Tạo toàn bộ 6 bảng dữ liệu: `users`, `company_info`, `services`, `news`, `gallery`, `contacts`.
* Thiết lập đầy đủ khóa chính (PK), khóa ngoại (FK), chỉ mục tìm kiếm (Index).
* Cung cấp kịch bản nạp dữ liệu mẫu thực tế (Seed Data).
* Xây dựng công cụ kiểm toán dữ liệu (Data Audit) tự động để xác minh số lượng và tính toàn vẹn bản ghi sau khi khởi tạo.

---

## 2. CẤU TRÚC KỊCH BẢN CƠ SỞ DỮ LIỆU

### 2.1. File kịch bản DDL: [database/schema.sql](../database/schema.sql)
Bao gồm:
- Thiết lập bảng mã UTF-8 chuẩn (`utf8mb4_unicode_ci`) hỗ trợ hiển thị tiếng Việt hoàn chỉnh.
- Sử dụng Storage Engine `InnoDB` hỗ trợ giao dịch (Transactions) và khóa ngoại.
- Tạo các bảng:
  1. `users`: Quản lý tài khoản quản trị hệ thống.
  2. `company_info`: Thông tin doanh nghiệp và nội dung giới thiệu.
  3. `services`: Các dịch vụ cốt lõi, có trường `slug` đánh index phục vụ SEO.
  4. `news`: Tin tức, bài viết có ràng buộc khóa ngoại `author_id` liên kết bảng `users`.
  5. `gallery`: Thư viện ảnh theo phân loại danh mục.
  6. `contacts`: Hộp thư tiếp nhận thông tin liên hệ và trạng thái xử lý của khách hàng.

### 2.2. File kịch bản DML: [database/seed.sql](../database/seed.sql)
Nạp dữ liệu mẫu ban đầu:
- 01 tài khoản Quản trị viên (`admin` / `admin123`).
- 01 bản ghi thông tin chính thức của CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM.
- 03 gói dịch vụ tiêu biểu kèm icon và mô tả.
- 02 bài viết tin tức đầy đủ nội dung.
- 04 hình ảnh hoạt động văn phòng, teambuilding.
- 02 thông điệp liên hệ mẫu đại diện cho 2 trạng thái (`read`, `unread`).

---

## 3. CÔNG CỤ TỰ ĐỘNG HÓA KHỞI TẠO: [database/initDb.js](../database/initDb.js)

Để đơn giản hóa việc triển khai trên mọi môi trường và hỗ trợ kiểm thử tự động, một script Node.js đã được tạo lập:
* Đọc thông số kết nối từ `backend/.env`.
* Tự động tạo cơ sở dữ liệu nếu chưa tồn tại.
* Thực thi tuần tự `schema.sql` và `seed.sql`.
* Quét và đếm số lượng bản ghi của tất cả các bảng để kiểm toán tính toàn vẹn dữ liệu.

### Cách chạy:
Từ thư mục `backend`, chỉ cần chạy lệnh:
```bash
npm run db:init
```

---

## 4. NGHIỆM THU TIÊU CHÍ AC-004

* [x] **CSDL được xây dựng:** Đã tạo script `schema.sql` chuẩn MySQL 8.0+.
* [x] **Các bảng được tạo:** Đầy đủ 6 bảng nghiệp vụ theo đúng phân tích.
* [x] **Quan hệ được thiết lập:** Khóa ngoại `fk_news_author` liên kết `news(author_id)` với `users(id)` (`ON DELETE SET NULL ON UPDATE CASCADE`).
* [x] **Có dữ liệu mẫu:** Bộ dữ liệu `seed.sql` phong phú, thực tế.
* [x] **Công cụ kiểm tra tự động:** Script `initDb.js` tích hợp sẵn trong `package.json`.

---

## 5. BƯỚC TIẾP THEO

- Chuyển tiếp sang **STORY-009: Kiểm tra sự phù hợp của CSDL** để đối chiếu bảng CSDL với các biểu mẫu giao diện trước khi code UI chi tiết trong **EPIC-004**.
