# BÁO CÁO XÂY DỰNG TRANG CHỦ — HOME PAGE (STORY-010)

> **Mã công việc:** STORY-010  
> **Thuộc Epic:** EPIC-004 — Xây dựng website  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-010, REQ-F-011, REQ-NF-002, AC-003  
> **Thời gian thực hiện (Tuần 3 & 4):** 29/06/2026 – 12/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-010

Triển khai hoàn thiện giao diện **Trang chủ (Home Page)** cho website giới thiệu doanh nghiệp theo các tiêu chuẩn:
* Bố cục mạch lạc, chuyên nghiệp, thể hiện rõ nhận diện thương hiệu của CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM.
* Đầy đủ các khối chức năng theo phân tích tại STORY-003, STORY-004 và đối chiếu dữ liệu tại STORY-009.
* Giao diện chuẩn Responsive bằng Bootstrap 5.3.3 kết hợp Bootstrap Icons.
* Không sử dụng các hiệu ứng lòe loẹt, đảm bảo tính thẩm mỹ chuẩn doanh nghiệp B2B (Clean, High Density, Professional).

---

## 2. BỐ CỤC CHI TIẾT CỦA TRANG CHỦ ([frontend/index.html](../frontend/index.html))

Trang chủ được cấu trúc thành 8 phân vùng rõ rệt:

1. **Thanh điều hướng (Navbar Sticky):**
   - Logo thương hiệu FFT VIỆT NAM.
   - Menu điều hướng 6 trang: *Trang chủ*, *Giới thiệu*, *Dịch vụ*, *Tin tức*, *Hình ảnh*, *Liên hệ*.
   - Nút gọi nhanh "Tư vấn ngay" hỗ trợ chuyển đổi khách hàng tiềm năng.
2. **Hero Banner & Khẩu hiệu:**
   - Huy hiệu nhận diện: *"Đối tác công nghệ tin cậy của doanh nghiệp"*.
   - Tiêu đề chính: *"Giải Pháp Công Nghệ & Chuyển Đổi Số Toàn Diện"*.
   - Đoạn giới thiệu súc tích và 2 nút kêu gọi hành động (*Khám phá dịch vụ*, *Về chúng tôi*).
3. **Thanh thống kê con số ấn tượng (Stats Bar):**
   - 8+ Năm kinh nghiệm.
   - 350+ Dự án hoàn thành.
   - 98% Khách hàng hài lòng.
   - 24/7 Hỗ trợ kỹ thuật.
4. **Khối tóm tắt hồ sơ năng lực (About Highlight):**
   - Giới thiệu sứ mệnh, đội ngũ và quy trình làm việc chuẩn mực của FFT Việt Nam.
   - 4 điểm mạnh cốt lõi: Quy trình chuẩn, Công nghệ tiên tiến, Bảo mật đa tầng, Chi phí tối ưu.
   - 3 khối cam kết: Cam kết chất lượng, Hiệu năng tối ưu, Đồng hành dài hạn.
5. **Khối Dịch vụ cốt lõi (Featured Services):**
   - Trình bày dạng thẻ card với icon trực quan:
     * *Tư vấn giải pháp CNTT* (bi-laptop)
     * *Thiết kế Website Doanh nghiệp* (bi-code-slash)
     * *Bảo trì & Vận hành Hệ thống* (bi-shield-check)
   - Liên kết dẫn đến trang chi tiết dịch vụ.
6. **Khối Tin tức & Sự kiện mới nhất (Latest News):**
   - Hiển thị các bài viết mới từ hệ thống dữ liệu mẫu: *Khởi động dự án nâng cấp hệ sinh thái số doanh nghiệp 2026*, *Hội thảo giải pháp công nghệ và tương lai số*.
7. **Khối kêu gọi hành động (Call To Action - CTA):**
   - Kêu gọi đăng ký tư vấn và hiển thị Hotline trực tiếp (`0978078902`).
8. **Chân trang (Footer):**
   - Cột 1: Thông tin pháp nhân và mạng xã hội.
   - Cột 2: Danh sách liên kết nội bộ nhanh.
   - Cột 3: Danh mục dịch vụ chính.
   - Cột 4: Thông tin liên hệ trực tiếp (Địa chỉ trụ sở, Hotline, Email, Giờ làm việc).

---

## 3. KIỂM TRA HIỂN THỊ VÀ TÍNH TƯƠNG THÍCH (RESPONSIVE)

* **Màn hình máy tính (Desktop >= 1200px):** Bố cục dạng lưới đa cột rộng rãi, các khối cân đối, thanh stats bar nổi khối hiện đại.
* **Màn hình máy tính bảng (Tablet 768px - 1199px):** Tự động điều chỉnh hệ thống cột (col-md-4, col-md-6) vừa vặn, không bị tràn ngang.
* **Màn hình di động (Mobile < 768px):** Menu tự động thu gọn vào Hamburger button, các thẻ card xếp dọc theo thứ tự đọc tự nhiên của người dùng di động.

---

## 4. TỔNG KẾT VÀ BƯỚC TIẾP THEO

- **Kết quả:** Hoàn thành toàn diện mã nguồn giao diện Trang chủ (`frontend/index.html` và `frontend/assets/css/style.css`).
- **Nghiệm thu STORY-010:** Đã triển khai bố cục, hoàn thiện nội dung và kiểm tra hiển thị.
- **Bước tiếp theo:** Triển khai **STORY-011: Xây dựng Trang Giới thiệu (About Page)** tại `frontend/pages/about/index.html`.
