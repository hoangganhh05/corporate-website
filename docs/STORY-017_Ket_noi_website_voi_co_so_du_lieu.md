# BÁO CÁO KẾT NỐI WEBSITE VỚI CƠ SỞ DỮ LIỆU (STORY-017)

> **Mã công việc:** STORY-017  
> **Thuộc Epic:** EPIC-005 — Tích hợp website và CSDL  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-013, AC-005, BR-002  
> **Thời gian thực hiện (Tuần 5 & 6):** 13/07/2026 – 26/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-017

Triển khai kết nối và xây dựng cơ chế trao đổi dữ liệu trực tiếp 2 chiều giữa Website (Frontend) và Cơ sở dữ liệu (MySQL) thông qua máy chủ ứng dụng Backend (Node.js + Express.js):
* Hiện thực hóa các lớp Model thực thi câu lệnh SQL qua MySQL Connection Pool (`mysql2/promise`).
* Xây dựng các Controllers và RESTful API Endpoints cung cấp dữ liệu cho các phân hệ của Website.
* Xây dựng module tích hợp `ApiClient` phía Frontend để giao tiếp bất đồng bộ qua HTTP Fetch API.
* Thiết lập cơ chế xử lý lỗi và dự phòng (Fallback) an toàn, đảm bảo giao diện không bị gián đoạn.

---

## 2. KIẾN TRÚC TÍCH HỢP ĐÃ XÂY DỰNG

```text
Frontend (Browser)
   │
   │  HTTP / RESTful API (JSON)
   ▼
Express Router (backend/src/routes/)
   │
   ▼
Controllers (backend/src/controllers/)
   │
   ▼
Models (backend/src/models/)
   │
   │  SQL Queries (Prepared Statements)
   ▼
MySQL Database (company_intro_db)
```

---

## 3. DANH MỤC CÁC RESTFUL API ENDPOINTS ĐÃ TRIỂN KHAI

| Phương thức | Endpoint | Model / Bảng ánh xạ | Mô tả chức năng |
|:---:|---|---|---|
| `GET` | `/api/health` | `db.testConnection()` | Kiểm tra trạng thái hoạt động của Backend và CSDL |
| `GET` | `/api/company` | `CompanyModel` (`company_info`) | Trả về thông tin chính thức, sứ mệnh, liên hệ của FFT Việt Nam |
| `GET` | `/api/services` | `ServiceModel` (`services`) | Trả về danh sách dịch vụ đang hoạt động theo thứ tự ưu tiên |
| `GET` | `/api/services/:slug` | `ServiceModel` (`services`) | Trả về thông tin chi tiết một dịch vụ theo đường dẫn thân thiện |
| `GET` | `/api/news` | `NewsModel` (`news` JOIN `users`) | Trả về danh sách bài viết đã xuất bản, tác giả và phân trang |
| `GET` | `/api/news/:slug` | `NewsModel` (`news`) | Trả về chi tiết bài viết và tự động tăng số lượt xem (`views_count`) |
| `GET` | `/api/gallery` | `GalleryModel` (`gallery`) | Trả về danh sách ảnh (hỗ trợ lọc qua query `?category=...`) |

---

## 4. CHI TIẾT CÁC THÀNH PHẦN MÃ NGUỒN ĐÃ TẠO LẬP

### 4.1. Tầng Models (Data Access Layer)
* [backend/src/models/companyModel.js](../backend/src/models/companyModel.js): Truy vấn và cập nhật hồ sơ doanh nghiệp.
* [backend/src/models/serviceModel.js](../backend/src/models/serviceModel.js): Lấy danh sách dịch vụ active và chi tiết dịch vụ theo slug.
* [backend/src/models/newsModel.js](../backend/src/models/newsModel.js): Lấy tin tức đã xuất bản và tự động tăng lượt xem khi bài viết được mở xem chi tiết.
* [backend/src/models/galleryModel.js](../backend/src/models/galleryModel.js): Truy vấn thư viện ảnh theo tiêu chí phân loại.

### 4.2. Tầng Controllers (Request Handlers)
* [backend/src/controllers/companyController.js](../backend/src/controllers/companyController.js): Xử lý request thông tin doanh nghiệp.
* [backend/src/controllers/serviceController.js](../backend/src/controllers/serviceController.js): Xử lý request danh sách và chi tiết dịch vụ.
* [backend/src/controllers/newsController.js](../backend/src/controllers/newsController.js): Xử lý request bài viết tin tức.
* [backend/src/controllers/galleryController.js](../backend/src/controllers/galleryController.js): Xử lý request danh mục hình ảnh.

### 4.3. Tầng Routes & Router Aggregator
* [backend/src/routes/companyRoutes.js](../backend/src/routes/companyRoutes.js)
* [backend/src/routes/serviceRoutes.js](../backend/src/routes/serviceRoutes.js)
* [backend/src/routes/newsRoutes.js](../backend/src/routes/newsRoutes.js)
* [backend/src/routes/galleryRoutes.js](../backend/src/routes/galleryRoutes.js)
* [backend/src/routes/index.js](../backend/src/routes/index.js): Đăng ký tập trung toàn bộ các route vào tiền tố `/api`.

### 4.4. Module tích hợp Client
* [frontend/assets/js/main.js](../frontend/assets/js/main.js): Tích hợp đối tượng `ApiClient` hỗ trợ gọi API bất đồng bộ (Promise/Async-Await) từ bất kỳ trang nào của Website.

---

## 5. ĐÁNH GIÁ VÀ TIÊU CHÍ NGHIỆM THU AC-005

* [x] **Website kết nối CSDL:** Thiết lập thành công kết nối thông suốt từ Frontend ➔ Express API ➔ MySQL.
* [x] **Trao đổi dữ liệu được kiểm tra:** Dữ liệu phản hồi chuẩn định dạng JSON, đầy đủ các trường nghiệp vụ.
* [x] **Cơ chế dự phòng an toàn:** Website tự động kích hoạt chế độ hiển thị dữ liệu tĩnh dự phòng khi Backend chưa khởi động, không làm gián đoạn trải nghiệm người dùng.

---

## 6. BƯỚC TIẾP THEO

- Chuyển tiếp sang **STORY-018: Kiểm tra chức năng quản lý dữ liệu (Admin Data Management & Verification)** để xây dựng và kiểm thử các chức năng quản lý dữ liệu phía Admin.
