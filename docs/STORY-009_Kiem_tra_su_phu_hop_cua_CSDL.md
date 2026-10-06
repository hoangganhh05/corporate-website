# BÁO CÁO KIỂM TRA SỰ PHÙ HỢP CỦA CƠ SỞ DỮ LIỆU (STORY-009)

> **Mã công việc:** STORY-009  
> **Thuộc Epic:** EPIC-003 — Xây dựng cơ sở dữ liệu  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** BR-002, REQ-NF-001, AC-004  
> **Thời gian thực hiện (Tuần 4):** 06/07/2026 – 12/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU KIỂM TRA ĐỐI CHIẾU

Theo quy tắc nghiệp vụ **BR-002** và yêu cầu phi chức năng **REQ-NF-001**, trước khi triển khai lập trình giao diện chi tiết (EPIC-004) và tích hợp API (EPIC-005), hệ thống bắt buộc phải thực hiện bước kiểm tra và đối chiếu 3 chiều giữa:
1. **Tài liệu phân tích & thiết kế** (STORY-003, STORY-004, STORY-006, STORY-007).
2. **Cấu trúc CSDL thực tế** ([database/schema.sql](../database/schema.sql) & [database/seed.sql](../database/seed.sql)).
3. **Các trường hiển thị & nhập liệu trên giao diện Website** (Frontend Forms & Layouts).

Báo cáo này ghi nhận kết quả kiểm tra tính phù hợp, xác nhận không có xung đột, thiếu sót hay dữ liệu dư thừa.

---

## 2. MA TRẬN ĐỐI CHIẾU GIỮA PHÂN TÍCH VÀ CƠ SỞ DỮ LIỆU

| Nhóm nghiệp vụ (Analysis) | Bảng trong CSDL | Các trường trong CSDL | Đánh giá tính phù hợp |
|---|---|---|:---:|
| **Quản trị người dùng** | `users` | `id`, `username`, `password`, `full_name`, `email`, `role`, `created_at`, `updated_at` | **100% Khớp** (Đáp ứng Actor Admin, bảo mật tài khoản) |
| **Hồ sơ doanh nghiệp** | `company_info` | `id`, `company_name`, `slogan`, `about_summary`, `about_detail`, `address`, `phone`, `email`, `working_hours`, `updated_at` | **100% Khớp** (Đáp ứng thông tin nhận diện, sứ mệnh, liên hệ) |
| **Dịch vụ & Giải pháp** | `services` | `id`, `title`, `slug`, `summary`, `description`, `icon`, `image_url`, `display_order`, `is_active`, `created_at`, `updated_at` | **100% Khớp** (Đáp ứng hiển thị lưới dịch vụ và trang chi tiết dịch vụ) |
| **Tin tức & Sự kiện** | `news` | `id`, `author_id`, `title`, `slug`, `summary`, `content`, `thumbnail`, `views_count`, `is_published`, `created_at`, `updated_at` | **100% Khớp** (Đáp ứng danh sách bài viết, khóa ngoại tác giả, xem chi tiết) |
| **Thư viện ảnh** | `gallery` | `id`, `title`, `category`, `image_url`, `description`, `display_order`, `created_at` | **100% Khớp** (Đáp ứng album ảnh theo chủ đề: Văn phòng, Hoạt động, Dự án) |
| **Hộp thư liên hệ** | `contacts` | `id`, `full_name`, `email`, `phone`, `subject`, `message`, `status`, `admin_notes`, `created_at`, `replied_at` | **100% Khớp** (Đáp ứng Form liên hệ và luồng xử lý phản hồi) |

---

## 3. MA TRẬN ĐỐI CHIẾU GIỮA CƠ SỞ DỮ LIỆU VÀ GIAO DIỆN WEBSITE

| Trang giao diện (Frontend) | Thành phần hiển thị / Nhập liệu | Bảng & Cột dữ liệu ánh xạ trong CSDL | Kết quả đối chiếu |
|---|---|---|:---:|
| **Trang chủ (`index.html`)** | Header / Slogan / Tóm tắt công ty | `company_info.company_name`, `company_info.slogan`, `company_info.about_summary` | Khớp hoàn toàn |
| | Khối dịch vụ tiêu biểu (3 cards) | `services` (`WHERE is_active = 1 ORDER BY display_order ASC LIMIT 3`) | Khớp hoàn toàn |
| | Khối tin tức mới nhất (2-3 cards) | `news` (`WHERE is_published = 1 ORDER BY created_at DESC LIMIT 3`) | Khớp hoàn toàn |
| | Chân trang (Footer) | `company_info.address`, `company_info.phone`, `company_info.email`, `company_info.working_hours` | Khớp hoàn toàn |
| **Giới thiệu (`pages/about`)** | Giới thiệu chi tiết, tầm nhìn, sứ mệnh, giá trị cốt lõi | `company_info.about_detail`, `company_info.about_summary` | Khớp hoàn toàn |
| **Dịch vụ (`pages/services`)** | Danh sách dịch vụ đầy đủ | `services` (`title`, `slug`, `summary`, `icon`, `image_url`) | Khớp hoàn toàn |
| | Trang chi tiết dịch vụ | `services.description` theo `slug` | Khớp hoàn toàn |
| **Tin tức (`pages/news`)** | Danh sách tin tức dạng card | `news` (`title`, `slug`, `summary`, `thumbnail`, `created_at`) | Khớp hoàn toàn |
| | Chi tiết bài viết tin tức | `news.content`, `news.views_count`, `users.full_name` (author) | Khớp hoàn toàn |
| **Hình ảnh (`pages/gallery`)** | Bộ sưu tập hình ảnh theo tab danh mục | `gallery` (`title`, `category`, `image_url`, `description`) | Khớp hoàn toàn |
| **Liên hệ (`pages/contact`)** | Form gửi thông điệp | `contacts` (`full_name`, `email`, `phone`, `subject`, `message`) | Khớp hoàn toàn |
| | Thông tin liên hệ trực tiếp | `company_info.address`, `company_info.phone`, `company_info.email` | Khớp hoàn toàn |
| **Quản trị (`Admin Portal`)** | Bảng danh sách liên hệ khách gửi | `contacts` (`id`, `full_name`, `email`, `status`, `created_at`) | Khớp hoàn toàn |
| | Cập nhật trạng thái xử lý | `contacts.status` (`unread` ➔ `read` ➔ `replied`), `contacts.admin_notes` | Khớp hoàn toàn |

---

## 4. GHI NHẬN CÁC TỐI ƯU HÓA ĐÃ ĐIỀU CHỈNH

Trong quá trình đối chiếu, nhóm dự án đã chủ động bổ sung và tinh chỉnh các trường kỹ thuật quan trọng nhằm đảm bảo ứng dụng vận hành trơn tru:
1. **Trường `slug` (Unique Index) trong bảng `services` và `news`:** Giúp xây dựng URL thân thiện người dùng và chuẩn SEO (thay vì dùng ID số thông thường).
2. **Trường `working_hours` trong bảng `company_info`:** Giúp giao diện chân trang và trang liên hệ thể hiện giờ làm việc chuyên nghiệp mà không bị hard-code trong mã HTML.
3. **Khóa ngoại `author_id` (`ON DELETE SET NULL`):** Đảm bảo tính toàn vẹn khi quản trị viên xóa một tài khoản tác giả thì các bài viết tin tức đã đăng vẫn được bảo lưu an toàn.
4. **Trường `status` và `admin_notes` trong bảng `contacts`:** Hỗ trợ quy trình nghiệp vụ chăm sóc khách hàng khép kín (nhận ➔ đọc ➔ phản hồi).

---

## 5. TỔNG KẾT VÀ BÀN GIAO EPIC-003

* **Kết quả:** Kiểm tra sự phù hợp đạt **100%**. Cơ sở dữ liệu và giao diện hoàn toàn đồng bộ, không phát hiện xung đột hay thiếu hụt trường dữ liệu.
* **Hoàn thành toàn diện EPIC-003 (Xây dựng cơ sở dữ liệu):**
  * [x] **STORY-008:** Xây dựng database & script khởi tạo tự động.
  * [x] **STORY-009:** Kiểm tra sự phù hợp của CSDL với phân tích và giao diện.
* **Sẵn sàng chuyển sang:** **EPIC-004 — Xây dựng website (Frontend Development)**, bắt đầu với **STORY-010: Xây dựng Trang chủ (Home Page)**.
