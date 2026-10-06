# BÁO CÁO XÂY DỰNG TRANG HÌNH ẢNH — GALLERY PAGE (STORY-014)

> **Mã công việc:** STORY-014  
> **Thuộc Epic:** EPIC-004 — Xây dựng website  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-010, REQ-F-011, REQ-NF-002, AC-003  
> **Thời gian thực hiện (Tuần 5):** 13/07/2026 – 19/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-014

Triển khai hoàn thiện phân hệ **Thư viện hình ảnh hoạt động (Gallery Page)** tại [frontend/pages/gallery/index.html](../frontend/pages/gallery/index.html):
* Thể hiện trực quan không gian văn phòng, hoạt động đội ngũ và các sự kiện vinh danh của CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM.
* Dữ liệu hình ảnh bám sát và đồng bộ với cấu trúc bảng `gallery` (`title`, `category`, `description`) trong MySQL.
* Tích hợp tính năng lọc danh mục ảnh mượt mà bằng JavaScript thuần (Vanilla JS) không tải lại trang.
* Hỗ trợ hộp thoại Modal phóng to để xem chi tiết ảnh và nội dung chú thích.
* Thiết kế chuẩn Responsive Bootstrap 5, mang lại trải nghiệm mượt mà trên đa thiết bị.

---

## 2. BỐ CỤC NỘI DUNG CHI TIẾT TRÊN TRANG HÌNH ẢNH

1. **Thanh điều hướng (Navbar) & Breadcrumb:**
   - Trạng thái `active` trên mục "Hình ảnh".
   - Breadcrumb phân cấp: `Trang chủ / Hình ảnh`.
2. **Bộ lọc danh mục tương tác (Filter Buttons):**
   - *Tất cả ảnh:* Hiển thị toàn bộ bộ sưu tập.
   - *Không gian văn phòng:* Lọc các hình ảnh cơ sở vật chất, phòng họp, khu làm việc mở.
   - *Hoạt động đội ngũ:* Lọc các hình ảnh họp kỹ thuật Sprint Review, teambuilding.
   - *Sự kiện & Vinh danh:* Lọc các hình ảnh trao giải, diễn đàn công nghệ.
3. **Lưới hình ảnh (Gallery Grid Cards):**
   - *Ảnh 1:* Không gian văn phòng mở hiện đại (Danh mục: Văn phòng).
   - *Ảnh 2:* Phòng họp sáng tạo & Brainstorm (Danh mục: Văn phòng).
   - *Ảnh 3:* Buổi họp kỹ thuật Sprint Review (Danh mục: Hoạt động).
   - *Ảnh 4:* Chuyến dã ngoại Teambuilding thường niên (Danh mục: Hoạt động).
   - *Ảnh 5:* Lễ vinh danh nhân sự xuất sắc quý 2/2026 (Danh mục: Sự kiện).
   - *Ảnh 6:* Hội thảo kết nối công nghệ số (Danh mục: Sự kiện).
4. **Hộp thoại phóng to (Lightbox Modal):**
   - Cho phép người dùng nhấn "Xem chi tiết" để hiển thị tiêu đề, huy hiệu danh mục và phần mô tả chi tiết của từng bức ảnh.
5. **Khối chuyển đổi (CTA) & Chân trang (Footer):**
   - Kêu gọi gia nhập hoặc hợp tác phát triển công nghệ cùng FFT Việt Nam.
   - Footer 4 cột đồng bộ với toàn hệ thống.

---

## 3. ĐÁNH GIÁ HIỂN THỊ VÀ TIÊU CHÍ NGHIỆM THU AC-003

* [x] **Nội dung hoàn chỉnh:** Các bức ảnh có tiêu đề và mô tả thực tế, không dùng dữ liệu giả lập.
* [x] **Trải nghiệm người dùng:** Bộ lọc tab hoạt động trơn tru, chuyển đổi danh mục tức thời không có độ trễ.
* [x] **Kiểm tra hiển thị (Responsive):** 
  - Màn hình Desktop: Lưới 3 cột (col-lg-4).
  - Màn hình Tablet: Lưới 2 cột (col-md-6).
  - Màn hình Mobile: Lưới 1 cột (col-12) tự động căn chỉnh hoàn hảo.

---

## 4. BƯỚC TIẾP THEO

- Chuyển tiếp sang **STORY-015: Xây dựng Trang Liên hệ (Contact Page)** tại `frontend/pages/contact/index.html`.
