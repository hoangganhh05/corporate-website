# TÀI LIỆU PHÂN TÍCH YÊU CẦU NGHIỆP VỤ (STORY-003)

> **Mã công việc:** STORY-003  
> **Thuộc Epic:** EPIC-002 — Phân tích và thiết kế hệ thống  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-003, REQ-F-004, REQ-F-005, REQ-NF-001, BR-001  
> **Thời gian thực hiện (Tuần 2):** 29/06/2026 – 05/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. MỤC TIÊU VÀ PHẠM VI CỦA STORY-003

Tài liệu này chi tiết hóa toàn bộ các yêu cầu nghiệp vụ của hệ thống **Website giới thiệu doanh nghiệp**, định nghĩa rõ ràng đối tượng sử dụng, phạm vi tương tác của từng đối tượng, danh mục các chức năng chi tiết và cấu trúc các nhóm dữ liệu cốt lõi làm đầu vào chuẩn xác cho việc thiết kế Use Case (STORY-004), Activity Diagram (STORY-005) và CSDL (STORY-006).

---

## 2. PHÂN TÍCH ĐỐI TƯỢNG SỬ DỤNG (ACTORS)

Hệ thống phục vụ 2 nhóm đối tượng chính:

| STT | Actor | Mô tả đối tượng | Quyền hạn và phạm vi truy cập |
|:---:|---|---|---|
| 1 | **Khách vãng lai / Khách hàng (Guest / Client)** | Đối tác, khách hàng tiềm năng, người tìm hiểu về doanh nghiệp qua Internet. | - Truy cập toàn bộ giao diện công khai (Public Portal): Trang chủ, Giới thiệu, Dịch vụ, Tin tức, Thư viện hình ảnh, Liên hệ.<br>- Tìm kiếm/lọc nội dung dịch vụ, tin tức.<br>- Gửi thông tin liên hệ, phản hồi hoặc yêu cầu tư vấn thông qua form trực tuyến. |
| 2 | **Quản trị viên (Admin)** | Nhân sự thuộc doanh nghiệp phụ trách nội dung và quản lý website. | - Đăng nhập tài khoản quản trị bảo mật.<br>- Quản lý danh mục và chi tiết dịch vụ.<br>- Quản lý tin tức, bài viết, sự kiện.<br>- Quản lý thư viện hình ảnh hoạt động của doanh nghiệp.<br>- Tiếp nhận, đọc và cập nhật trạng thái xử lý các yêu cầu liên hệ từ khách hàng.<br>- Cập nhật thông tin liên hệ và giới thiệu chung của doanh nghiệp. |

---

## 3. PHÂN TÍCH CHI TIẾT CÁC PHÂN HỆ CHỨC NĂNG

### 3.1. Phân hệ Trang chủ (Home Module)
- **Mục tiêu nghiệp vụ:** Tạo ấn tượng đầu tiên chuyên nghiệp, truyền tải thông điệp thương hiệu và dẫn hướng người dùng đến các trang chuyên sâu.
- **Các khối chức năng chính:**
  1. *Hero Banner / Khẩu hiệu:* Giới thiệu ngắn gọn slogan và sứ mệnh doanh nghiệp.
  2. *Giới thiệu tóm tắt (About Highlight):* Điểm qua lịch sử, năng lực cốt lõi kèm nút bấm xem chi tiết.
  3. *Dịch vụ tiêu biểu (Featured Services):* Hiển thị dạng thẻ (card) 3-4 dịch vụ chính cùng icon trực quan.
  4. *Tin tức mới nhất (Latest News):* Hiển thị danh sách các bài viết mới cập nhật.
  5. *Call To Action (CTA):* Lời kêu gọi hợp tác dẫn thẳng về trang Liên hệ.

### 3.2. Phân hệ Giới thiệu (About Module)
- **Mục tiêu nghiệp vụ:** Cung cấp thông tin đầy đủ, uy tín và minh bạch về năng lực của doanh nghiệp.
- **Nội dung nghiệp vụ:**
  1. Lịch sử hình thành và phát triển.
  2. Tầm nhìn chiến lược, sứ mệnh kinh doanh và giá trị cốt lõi.
  3. Cơ cấu tổ chức và ban lãnh đạo / đội ngũ chuyên gia.
  4. Năng lực công nghệ và cơ sở vật chất.

### 3.3. Phân hệ Dịch vụ (Services Module)
- **Mục tiêu nghiệp vụ:** Trình bày chi tiết các giải pháp và dịch vụ doanh nghiệp cung cấp để khách hàng dễ dàng tìm hiểu và lựa chọn.
- **Nội dung nghiệp vụ:**
  1. Danh sách dịch vụ dạng lưới (grid layout) kèm biểu tượng và mô tả ngắn.
  2. Xem nội dung chi tiết của từng dịch vụ (lợi ích, quy trình triển khai, phạm vi giải pháp).
  3. Nút đăng ký tư vấn gắn liền với dịch vụ đang xem.

### 3.4. Phân hệ Tin tức & Sự kiện (News Module)
- **Mục tiêu nghiệp vụ:** Cập nhật các hoạt động mới nhất của doanh nghiệp, thông cáo báo chí và các bài viết kiến thức chuyên ngành.
- **Nội dung nghiệp vụ:**
  1. Danh sách bài viết tin tức gồm: Ảnh đại diện (thumbnail), tiêu đề, ngày đăng, tóm tắt nội dung.
  2. Xem chi tiết bài viết (nội dung định dạng đầy đủ, tác giả, ngày đăng).
  3. Phân trang hoặc danh sách tin xem nhiều/tin liên quan.

### 3.5. Phân hệ Thư viện ảnh (Gallery Module)
- **Mục tiêu nghiệp vụ:** Minh họa bằng hình ảnh thực tế về văn phòng làm việc, hoạt động đội ngũ, sự kiện và dự án đã triển khai nhằm gia tăng mức độ tin cậy.
- **Nội dung nghiệp vụ:**
  1. Hiển thị danh sách hình ảnh trực quan dạng gallery/lightbox.
  2. Chú thích tiêu đề và thông tin ngắn của từng bức ảnh.

### 3.6. Phân hệ Liên hệ & Xử lý phản hồi (Contact Module)
- **Mục tiêu nghiệp vụ:** Là cầu nối trao đổi dữ liệu trực tiếp hai chiều giữa khách hàng và doanh nghiệp.
- **Luồng nghiệp vụ tiếp nhận:**
  1. Hiển thị thông tin chính thức: Tên doanh nghiệp, trụ sở, số điện thoại, email hỗ trợ, giờ làm việc.
  2. Biểu mẫu gửi liên hệ (Contact Form):
     - Họ và tên (bắt buộc, độ dài 2 - 100 ký tự).
     - Địa chỉ Email (bắt buộc, đúng định dạng RFC chuẩn).
     - Số điện thoại (tùy chọn, đúng định dạng số điện thoại Việt Nam).
     - Tiêu đề liên hệ (bắt buộc).
     - Nội dung tin nhắn (bắt buộc, tối thiểu 10 ký tự).
  3. Kiểm tra tính hợp lệ (Validation) cả ở Frontend và Backend.
  4. Lưu trữ an toàn vào cơ sở dữ liệu với trạng thái ban đầu là `unread` (chưa đọc).
  5. Phản hồi thông báo gửi thành công rõ ràng, thân thiện cho người dùng.

### 3.7. Phân hệ Quản trị hệ thống (Admin Portal)
- **Mục tiêu nghiệp vụ:** Giúp ban quản trị vận hành nội dung website và theo dõi liên hệ của khách hàng.
- **Chức năng:**
  1. Xác thực đăng nhập (Username & Password).
  2. Xem danh sách các thông tin liên hệ mới được gửi từ khách hàng.
  3. Đánh dấu trạng thái xử lý liên hệ (`unread`, `read`, `replied`).
  4. Quản lý thông tin doanh nghiệp, dịch vụ và tin tức cơ bản.

---

## 4. PHÂN TÍCH CÁC NHÓM DỮ LIỆU CẦN QUẢN LÝ (DATA ENTITIES)

Căn cứ vào nghiệp vụ ở trên, hệ thống xác định 6 nhóm dữ liệu cốt lõi (Đầu vào cho STORY-006):

| STT | Nhóm dữ liệu (Entity) | Các thuộc tính nghiệp vụ cốt lõi | Ràng buộc nghiệp vụ |
|:---:|---|---|---|
| 1 | **Thông tin công ty (`company_info`)** | Tên công ty, slogan, địa chỉ trụ sở, số điện thoại, email, nội dung giới thiệu lịch sử/tầm nhìn/sứ mệnh, thời gian cập nhật. | Bảng chứa 1 bản ghi chính thức duy nhất của doanh nghiệp. |
| 2 | **Dịch vụ (`services`)** | Mã định danh, tên dịch vụ, mô tả tóm tắt, mô tả chi tiết, mã biểu tượng/hình ảnh, thứ tự sắp xếp, ngày tạo, ngày cập nhật. | Tên dịch vụ không được để trống, duy nhất theo từng gói. |
| 3 | **Tin tức (`news`)** | Mã bài viết, tiêu đề, tóm tắt ngắn, nội dung chi tiết, đường dẫn ảnh đại diện, ngày xuất bản, trạng thái hiển thị. | Tiêu đề và nội dung là bắt buộc. |
| 4 | **Hình ảnh (`gallery`)** | Mã hình ảnh, tiêu đề ảnh, đường dẫn tệp ảnh (URL), mô tả, ngày đăng. | Đường dẫn ảnh phải hợp lệ, không được để trống. |
| 5 | **Liên hệ (`contacts`)** | Mã liên hệ, họ tên khách, email, số điện thoại, tiêu đề, nội dung tin nhắn, trạng thái xử lý (`unread`/`read`/`replied`), thời điểm gửi. | Email phải đúng cú pháp; nội dung không được rỗng. |
| 6 | **Người dùng quản trị (`users`)** | Mã tài khoản, tên đăng nhập, mật khẩu, họ tên đầy đủ, vai trò (`admin`), ngày tạo. | Tên đăng nhập là duy nhất, mật khẩu được mã hóa an toàn. |

---

## 5. MA TRẬN PHÂN QUYỀN VÀ TRUY CẬP (ACCESS MATRIX)

| Phân hệ / Chức năng | Khách vãng lai (Guest) | Quản trị viên (Admin) |
|---|:---:|:---:|
| Xem Trang chủ, Giới thiệu, Dịch vụ | Có | Có |
| Xem Danh sách và Chi tiết Tin tức | Có | Có |
| Xem Thư viện hình ảnh | Có | Có |
| Gửi biểu mẫu Liên hệ & Phản hồi | Có | Không áp dụng |
| Đăng nhập tài khoản Quản trị | Không | Có |
| Xem danh sách liên hệ gửi về | Không | Có |
| Cập nhật trạng thái xử lý liên hệ | Không | Có |
| Chỉnh sửa bài viết, dịch vụ, hình ảnh | Không | Có |

---

## 6. YÊU CẦU PHI CHỨC NĂNG (NON-FUNCTIONAL REQUIREMENTS)

1. **Tính tương thích (Responsive Design):** Giao diện phải thích ứng tối ưu với màn hình Desktop (>= 1200px), Tablet (768px - 1199px) và Mobile (< 768px).
2. **Tính thân thiện và tốc độ tải trang:** Tải tài nguyên CDN nhẹ, tối ưu hình ảnh, tốc độ phản hồi API dưới 300ms.
3. **Tính an toàn và toàn vẹn dữ liệu:**
   - Dữ liệu người dùng gửi qua form phải được lọc, trim khoảng trắng và validate trước khi insert vào CSDL để ngăn chặn SQL Injection / XSS.
   - Trạng thái liên hệ phải được đồng bộ chính xác giữa Backend và Database.
4. **Tính mở rộng (Extensibility):** Cấu trúc mã nguồn Node.js/Express và MySQL được module hóa theo Controllers - Routes - Config để dễ mở rộng ở các giai đoạn sau.

---

## 7. NGHIỆM THU & BƯỚC CHUYỂN TIẾP

- **Đánh giá STORY-003:** Đã hoàn thành 100% nội dung phân tích nghiệp vụ, phân định rõ ràng đối tượng sử dụng và chuẩn hóa 6 nhóm dữ liệu.
- **Đầu ra bàn giao:** Tài liệu [docs/STORY-003_Phan_tich_yeu_cau_nghiep_vu.md](file:///e:/PJ_THUE/docs/STORY-003_Phan_tich_yeu_cau_nghiep_vu.md).
- **Công việc tiếp theo:** Tiến hành xây dựng **STORY-004: Xây dựng Use Case Diagram và mô tả Use Case** trên nhánh riêng.
