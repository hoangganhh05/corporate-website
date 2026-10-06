# BÁO CÁO KIỂM TRA RESPONSIVE VÀ TƯƠNG THÍCH TRÌNH DUYỆT (STORY-016)

> **Mã công việc:** STORY-016  
> **Thuộc Epic:** EPIC-004 — Xây dựng website  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-018, REQ-NF-002, REQ-NF-003, AC-006  
> **Thời gian thực hiện (Tuần 6 & 7):** 20/07/2026 – 02/08/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU KIỂM THỬ

Thực hiện kiểm thử tổng thể giao diện người dùng (UI Testing) cho toàn bộ 6 phân hệ trang của **Website giới thiệu doanh nghiệp**:
* **Trang chủ (`frontend/index.html`)**
* **Trang Giới thiệu (`frontend/pages/about/index.html`)**
* **Trang Dịch vụ (`frontend/pages/services/index.html`)**
* **Trang Tin tức (`frontend/pages/news/index.html`)**
* **Trang Hình ảnh (`frontend/pages/gallery/index.html`)**
* **Trang Liên hệ (`frontend/pages/contact/index.html`)**

Đảm bảo website hiển thị sắc nét, không vỡ layout, không tràn ngang (Horizontal Scrollbar) và vận hành mượt mà trên nhiều kích thước màn hình và các trình duyệt phổ biến.

---

## 2. MA TRẬN KIỂM THỬ KÍCH THƯỚC MÀN HÌNH (RESPONSIVE TESTING)

| Trang kiểm thử | Màn hình Máy tính (Desktop ≥ 1200px) | Màn hình Máy tính bảng (Tablet 768px – 1199px) | Màn hình Điện thoại (Mobile < 768px) | Đánh giá chung |
|---|:---:|:---:|:---:|:---:|
| **Trang chủ (Home)** | Bố cục lưới rộng rãi, thanh Stats Bar nổi khối, navbar hiển thị đầy đủ | Lưới co giãn tự động (2 cột), thanh Stats Bar thu gọn cân đối | Menu chuyển thành nút Hamburger, thẻ card xếp dọc, chữ tự co giãn theo breakpoint | **ĐẠT (PASS)** |
| **Giới thiệu (About)** | Phân vùng Z-pattern 2 cột, bảng thông tin pháp lý nổi bật | Cột thông tin tự động căn chỉnh tỷ lệ 50/50 | Khối giới thiệu và pháp lý xếp chồng dọc, bảng Milestone co gọn | **ĐẠT (PASS)** |
| **Dịch vụ (Services)** | Bố cục đảo chiều so le (flex-row-reverse) giữa các dịch vụ | Thẻ so le thu nhỏ padding hợp lý | Xếp chồng dọc tự nhiên, các nút CTA dàn đều toàn chiều rộng | **ĐẠT (PASS)** |
| **Tin tức (News)** | Tỷ lệ 8/4 giữa Danh sách tin tức và Sidebar tiện ích | Sidebar thu xuống cạnh dưới nếu thu hẹp màn hình | Sidebar chuyển xuống cuối bài viết, ô tìm kiếm và danh mục dễ thao tác | **ĐẠT (PASS)** |
| **Hình ảnh (Gallery)** | Lưới ảnh 3 cột (col-lg-4), các tab lọc nằm ngang | Lưới ảnh 2 cột (col-md-6) | Lưới ảnh 1 cột (col-12), các nút tab lọc tự xuống dòng linh hoạt | **ĐẠT (PASS)** |
| **Liên hệ (Contact)** | Tỷ lệ 7/5 giữa Form liên hệ và Thông tin giờ làm việc/FAQ | Form và thông tin giờ làm việc căn chỉnh vừa vặn | Form chuyển sang 1 cột, bàn phím số kích hoạt tự động trên ô SĐT | **ĐẠT (PASS)** |

---

## 3. MA TRẬN KIỂM THỬ ĐA TRÌNH DUYỆT (BROWSER COMPATIBILITY TESTING)

Kiểm thử khả năng tương thích hiển thị và tính năng tương tác trên 4 trình duyệt web thị phần lớn nhất:

| Trình duyệt kiểm thử | Phiên bản thử nghiệm | Render giao diện | Tương tác JavaScript (Filter/Validation/Modal) | Trạng thái |
|---|:---:|:---:|:---:|:---:|
| **Google Chrome** | 124+ (Blink Engine) | Chuẩn sắc nét, font chữ đều, màu sắc chính xác | Hoạt động trơn tru 100% | **PASS** |
| **Microsoft Edge** | 124+ (Chromium) | Tương đồng 100% với Chrome | Hoạt động trơn tru 100% | **PASS** |
| **Mozilla Firefox** | 125+ (Gecko Engine) | Đổ bóng box-shadow và gradient hiển thị mượt mà | Hoạt động trơn tru 100% | **PASS** |
| **Apple Safari / Webkit** | 17+ (Webkit) | Tương thích tốt hệ thống Flexbox và CSS Grid | Modal và Form validation chạy ổn định | **PASS** |

---

## 4. GHI NHẬN CÁC HIỆU CHỈNH ĐÃ THỰC HIỆN

Trong quá trình kiểm thử, nhóm dự án đã bổ sung các đoạn mã CSS Media Queries chuyên sâu trong [frontend/assets/css/style.css](../frontend/assets/css/style.css):
1. **Thêm `scroll-behavior: smooth;`:** Giúp việc nhảy qua các anchor link (ví dụ: `#tu-van-giai-phap-cntt`) diễn ra cuộn mượt mà thay vì giật cục.
2. **Tối ưu hóa Hero Section trên Mobile:** Giảm kích thước font tiêu đề từ `2.75rem` xuống `1.85rem` (màn hình dưới 768px) và `1.65rem` (màn hình dưới 576px) để tránh hiện tượng tràn chữ hoặc ngắt dòng xấu.
3. **Menu Navigation nền tối trên Mobile:** Thêm nền tối `var(--dark-surface)` và padding khi mở menu Hamburger để các liên kết không bị chìm vào nội dung bên dưới.
4. **Nút bấm kích thước đầy đủ (Full Width Buttons) trên màn hình nhỏ:** Đảm bảo ngón tay người dùng dễ dàng chạm bấm (Touch-friendly) trên thiết bị di động.

---

## 5. TỔNG KẾT VÀ BÀN GIAO TOÀN DIỆN EPIC-004

Với việc hoàn thành **STORY-016**, toàn bộ giai đoạn **EPIC-004: Xây dựng website (Frontend Development)** đã hoàn tất xuất sắc:
* [x] **STORY-010:** Trang chủ (`frontend/index.html`).
* [x] **STORY-011:** Trang Giới thiệu (`frontend/pages/about/index.html`).
* [x] **STORY-012:** Trang Dịch vụ (`frontend/pages/services/index.html`).
* [x] **STORY-013:** Trang Tin tức (`frontend/pages/news/index.html`).
* [x] **STORY-014:** Trang Hình ảnh (`frontend/pages/gallery/index.html`).
* [x] **STORY-015:** Trang Liên hệ (`frontend/pages/contact/index.html`).
* [x] **STORY-016:** Kiểm tra Responsive và tương thích đa trình duyệt.

Hệ thống đã sẵn sàng bước sang giai đoạn then chốt: **EPIC-005 — Tích hợp Website và Cơ sở dữ liệu (Backend & Integration)**!
