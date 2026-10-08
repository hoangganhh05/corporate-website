# BÁO CÁO XÂY DỰNG TRANG DỊCH VỤ — SERVICES PAGE (STORY-012)

> **Mã công việc:** STORY-012  
> **Thuộc Epic:** EPIC-004 — Xây dựng website  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-010, REQ-F-011, REQ-NF-002, AC-003  
> **Thời gian thực hiện (Tuần 4):** 06/07/2026 – 12/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-012

Triển khai hoàn thiện trang **Dịch vụ & Giải pháp (Services Page)** tại [frontend/pages/services/index.html](../frontend/pages/services/index.html):
* Trình bày chi tiết, chuyên nghiệp các dịch vụ cốt lõi theo cấu trúc đã phân tích tại STORY-003, thiết kế tại STORY-006 và đối chiếu tại STORY-009.
* Làm rõ các giá trị thực tế, tính năng kỹ thuật và lợi ích mang lại cho khách hàng doanh nghiệp.
* Trình bày quy trình 5 bước triển khai chuẩn mực giúp khách hàng nắm rõ tiến độ và an tâm khi hợp tác.
* Giao diện chuẩn Responsive Bootstrap 5, điều hướng linh hoạt và tương thích hoàn hảo với toàn hệ thống.

---

## 2. BỐ CỤC NỘI DUNG CHI TIẾT TRÊN TRANG DỊCH VỤ

1. **Thanh điều hướng (Navbar) & Breadcrumb:**
   - Trạng thái `active` trên mục "Dịch vụ".
   - Breadcrumb phân cấp: `Trang chủ / Dịch vụ`.
2. **Chi tiết 3 nhóm dịch vụ trọng tâm (Đồng bộ theo trường `slug` trong bảng `services`):**
   * **Dịch vụ 1 — Tư vấn giải pháp CNTT (`tu-van-giai-phap-cntt`):**
     - Đánh giá hiện trạng hạ tầng và tư vấn lộ trình chuyển đổi số.
     - Lựa chọn ngăn xếp công nghệ tối ưu, giảm thiểu 30-40% chi phí vận hành.
     - Khối lợi ích: Nâng cao hiệu suất, bảo đảm an toàn, đúng mục tiêu kinh doanh.
   * **Dịch vụ 2 — Thiết kế Website Doanh nghiệp chuẩn SEO (`thiet-ke-website-doanh-nghiep`):**
     - Chuẩn Responsive trên Desktop, Tablet và Mobile.
     - Tối ưu điểm số Google PageSpeed và cấu trúc thân thiện SEO.
     - Các gói lựa chọn: *Gói Tiêu Chuẩn (Corporate Standard)* và *Gói May Đo Cao Cấp (Custom Enterprise)*.
   * **Dịch vụ 3 — Bảo trì & Vận hành Hệ thống 24/7 (`bao-tri-van-hanh-he-thong`):**
     - Giám sát máy chủ liên tục 24/7, sao lưu tự động hàng ngày.
     - Cam kết chất lượng dịch vụ (SLA): Uptime tối thiểu 99.9%, phản hồi sự cố dưới 15 phút, khôi phục dữ liệu an toàn.
3. **Quy trình 5 bước triển khai chuẩn mực:**
   - *Bước 1:* Tiếp nhận & Khảo sát yêu cầu.
   - *Bước 2:* Tư vấn giải pháp & Báo giá minh bạch.
   - *Bước 3:* Thiết kế kiến trúc & Lập trình chuẩn hóa.
   - *Bước 4:* Kiểm thử chất lượng (QA/QC) nghiêm ngặt.
   - *Bước 5:* Bàn giao, đào tạo & Bảo hành dài hạn.
4. **Khối chuyển đổi (CTA) & Chân trang (Footer):**
   - Nút hành động dẫn trực tiếp sang biểu mẫu liên hệ hoặc gọi điện qua Hotline `0978078902`.
   - Chân trang hiển thị thông tin pháp lý, dịch vụ chính và giờ làm việc.

---

## 3. ĐÁNH GIÁ HIỂN THỊ VÀ TIÊU CHÍ NGHIỆM THU AC-003

* [x] **Nội dung hoàn chỉnh & phong phú:** Cung cấp thông tin đầy đủ về phạm vi, gói dịch vụ và chính sách cam kết (SLA).
* [x] **Hoàn thiện bố cục:** Bố cục so le (Z-pattern) giữa hình minh họa/bảng lợi ích và văn bản giúp tăng trải nghiệm đọc.
* [x] **Kiểm tra hiển thị (Responsive):** Thử nghiệm hiển thị tốt trên Desktop, Tablet và Mobile, các khối tự động căn chỉnh mượt mà.
* [x] **Tính liên kết hệ thống:** Các anchor link (`#tu-van-giai-phap-cntt`, `#thiet-ke-website-doanh-nghiep`, `#bao-tri-van-hanh-he-thong`) và liên kết điều hướng đều hoạt động chính xác.

---

## 4. BƯỚC TIẾP THEO

- Chuyển tiếp sang **STORY-013: Xây dựng Trang Tin tức (News Page)** tại `frontend/pages/news/index.html`.
