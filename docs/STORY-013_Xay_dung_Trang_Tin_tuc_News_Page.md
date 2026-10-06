# BÁO CÁO XÂY DỰNG TRANG TIN TỨC — NEWS PAGE (STORY-013)

> **Mã công việc:** STORY-013  
> **Thuộc Epic:** EPIC-004 — Xây dựng website  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-010, REQ-F-011, REQ-NF-002, AC-003  
> **Thời gian thực hiện (Tuần 5):** 13/07/2026 – 19/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-013

Triển khai hoàn thiện phân hệ **Tin tức & Sự kiện (News Page)** tại [frontend/pages/news/index.html](../frontend/pages/news/index.html):
* Thể hiện nội dung tin tức đa dạng, gắn kết với các dữ liệu mẫu đã thiết kế trong bảng `news` (tiêu đề, tóm tắt, ngày đăng, lượt xem, tác giả).
* Xây dựng bố cục 2 cột chuyên nghiệp: Cột chính hiển thị tin nổi bật, lưới bài viết và thanh phân trang; Cột phụ (Sidebar) tích hợp ô tìm kiếm, danh mục và bài viết xem nhiều.
* Giao diện chuẩn Responsive Bootstrap 5, kiểu dáng trang nhã và đồng bộ nhận diện với các trang trước đó.

---

## 2. BỐ CỤC NỘI DUNG CHI TIẾT TRÊN TRANG TIN TỨC

1. **Thanh điều hướng (Navbar) & Breadcrumb:**
   - Trạng thái `active` trên mục "Tin tức".
   - Breadcrumb phân cấp: `Trang chủ / Tin tức`.
2. **Khối Tin tức nổi bật (Featured Article Banner):**
   - Bài viết tiêu điểm: *"Khởi động dự án nâng cấp hệ sinh thái số doanh nghiệp 2026"*.
   - Hiển thị ngày đăng, lượt xem (`128 lượt xem`), tác giả (`Ban Quản Trị FFT`) và tóm tắt nội dung chiến lược.
3. **Danh sách bài viết mới nhất (Lưới 2 cột):**
   - *Bài 1:* Hội thảo giải pháp công nghệ và tương lai số (Danh mục: Sự kiện).
   - *Bài 2:* Tầm quan trọng của website chuẩn SEO đối với doanh nghiệp (Danh mục: Kiến thức).
   - *Bài 3:* Bảo mật dữ liệu và phòng ngừa tấn công mạng cho khối SMEs (Danh mục: An toàn thông tin).
   - *Bài 4:* Chương trình kết nối công nghệ và văn hóa doanh nghiệp FFT (Danh mục: Nội bộ).
4. **Cột tiện ích mở rộng (Sidebar Widgets):**
   - *Widget tìm kiếm:* Ô nhập từ khóa tìm kiếm nhanh bài viết.
   - *Widget danh mục tin:* Phân loại theo chủ đề (*Chuyển đổi số, Sự kiện & Hội thảo, Kiến thức công nghệ, Hoạt động nội bộ*) kèm số lượng bài viết.
   - *Widget bài viết xem nhiều:* Top các bài viết có lượng tương tác cao.
5. **Thanh phân trang (Pagination):**
   - Hỗ trợ chuyển trang (Trang 1, Trang 2, Trước, Tiếp) sẵn sàng cho tích hợp API ở EPIC-005.
6. **Khối bản tin công nghệ (Newsletter CTA) & Chân trang (Footer):**
   - Biểu mẫu đăng ký nhận tin định kỳ qua email.
   - Footer 4 cột đồng bộ với toàn hệ thống.

---

## 3. ĐÁNH GIÁ HIỂN THỊ VÀ TIÊU CHÍ NGHIỆM THU AC-003

* [x] **Nội dung hoàn chỉnh:** Dữ liệu tin tức bám sát thực tế hoạt động công nghệ của FFT Việt Nam.
* [x] **Kiểm tra hiển thị (Responsive):** 
  - Trên Desktop: Bố cục 8/4 cân đối giữa danh sách bài viết và Sidebar.
  - Trên Mobile/Tablet: Sidebar tự động chuyển xuống dưới danh sách bài viết mà không gây vỡ giao diện.
* [x] **Tương tác trực quan:** Hiệu ứng hover nổi thẻ card, chuyển màu liên kết mượt mà.

---

## 4. BƯỚC TIẾP THEO

- Chuyển tiếp sang **STORY-014: Xây dựng Trang Hình ảnh (Gallery Page)** tại `frontend/pages/gallery/index.html`.
