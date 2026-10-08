# BÁO CÁO XÂY DỰNG TRANG GIỚI THIỆU — ABOUT PAGE (STORY-011)

> **Mã công việc:** STORY-011  
> **Thuộc Epic:** EPIC-004 — Xây dựng website  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-010, REQ-F-011, REQ-NF-002, AC-003  
> **Thời gian thực hiện (Tuần 4):** 06/07/2026 – 12/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-011

Xây dựng hoàn thiện trang **Giới thiệu doanh nghiệp (About Page)** tại địa chỉ [frontend/pages/about/index.html](../frontend/pages/about/index.html):
* Thể hiện đầy đủ hồ sơ năng lực của CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM.
* Trình bày rõ ràng định hướng chiến lược: Tầm nhìn, Sứ mệnh và 4 Giá trị cốt lõi.
* Tóm lược các mốc lịch sử hình thành và phát triển từ năm 2018 đến 2026.
* Giới thiệu cơ cấu tổ chức và ban lãnh đạo (gắn liền với thông tin người hướng dẫn thực tập Trương Thị Minh theo đề tài).
* Đồng bộ 100% về mặt thẩm mỹ, màu sắc, thanh điều hướng và chân trang với Trang chủ.

---

## 2. BỐ CỤC NỘI DUNG CHI TIẾT TRÊN TRANG GIỚI THIỆU

1. **Thanh điều hướng (Navbar) & Breadcrumb:**
   - Đánh dấu trạng thái `active` trên mục "Giới thiệu".
   - Thanh điều hướng phân cấp: `Trang chủ / Giới thiệu` giúp người dùng dễ dàng định vị vị trí trang.
2. **Tổng quan doanh nghiệp (Company Overview):**
   - Nội dung giới thiệu chi tiết đối chiếu từ trường `about_detail` trong bảng `company_info`.
   - Khối trích dẫn châm ngôn: *"Tiên phong giải pháp công nghệ - Đồng hành cùng phát triển bền vững của cộng đồng doanh nghiệp"*.
   - Khung thông tin pháp lý: Tên công ty, địa chỉ trụ sở tại Phường Phan Đình Phùng, Tỉnh Thái Nguyên, hotline hỗ trợ, email liên hệ, giờ làm việc.
3. **Định hướng chiến lược (Tầm nhìn - Sứ mệnh - Giá trị cốt lõi):**
   - *Tầm nhìn:* Trở thành đơn vị công nghệ hàng đầu tại Việt Nam cung cấp hạ tầng số và phát triển phần mềm theo yêu cầu.
   - *Sứ mệnh:* Đồng hành cùng đối tác trên con đường số hóa, đơn giản hóa các bài toán phức tạp thông qua phần mềm tối ưu.
   - *Giá trị cốt lõi:* Tận tâm, Chuẩn mực, Sáng tạo, Bảo mật.
4. **Lịch sử hình thành & Cột mốc phát triển (Milestones):**
   - 2018: Khởi đầu - Tư vấn giải pháp CNTT.
   - 2021: Bứt phá - Thiết kế website chuyên nghiệp.
   - 2024: Mở rộng - Cán mốc 300+ dự án hoàn thành.
   - 2026: Nâng cấp hệ sinh thái số trên nền tảng công nghệ mới.
5. **Đội ngũ lãnh đạo & Chuyên gia (Leadership):**
   - Trương Thị Minh: Quản lý & Cán bộ hướng dẫn dự án.
   - Nguyễn Tuấn Dũng: Giám đốc Công nghệ (CTO).
   - Trần Hải Đăng: Trưởng nhóm Phát triển phần mềm (Lead Dev).
6. **Lời kêu gọi hành động (CTA) & Chân trang (Footer):**
   - Điều hướng khách hàng đến danh mục dịch vụ hoặc form liên hệ.
   - Footer 4 cột đồng bộ với toàn hệ thống.

---

## 3. ĐÁNH GIÁ HIỂN THỊ VÀ TIÊU CHÍ NGHIỆM THU AC-003

* [x] **Nội dung hoàn chỉnh:** Không sử dụng văn bản mẫu vô nghĩa (Lorem Ipsum), nội dung gắn liền thực tế với đơn vị thực tập FFT Việt Nam.
* [x] **Bố trí theo thiết kế:** Cấu trúc phân vùng trực quan, thẻ card nổi khối, typography rõ ràng, phân cấp thị giác hợp lý.
* [x] **Kiểm tra hiển thị (Responsive):** Hoạt động mượt mà trên Desktop, Tablet và Mobile.
* [x] **Đường dẫn liên kết (Routing):** Các liên kết tương đối (`../../index.html`, `../services/index.html`, `../contact/index.html`) hoạt động chính xác.

---

## 4. BƯỚC TIẾP THEO

- Chuyển tiếp sang **STORY-012: Xây dựng Trang Dịch vụ (Services Page)** tại `frontend/pages/services/index.html`.
