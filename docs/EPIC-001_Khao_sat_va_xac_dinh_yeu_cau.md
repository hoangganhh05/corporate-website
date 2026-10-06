# BÁO CÁO TRIỂN KHAI EPIC-001: KHẢO SÁT VÀ XÁC ĐỊNH YÊU CẦU

> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Thời gian thực hiện (Tuần 1):** 15/06/2026 – 21/06/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  
> **Người hướng dẫn:** Trương Thị Minh — Quản lý  
> **Người thực hiện:** Developer / Thực tập sinh phụ trách dự án  

---

## 1. TỔNG QUAN TIẾP NHẬN ĐỀ TÀI & QUY TRÌNH LÀM VIỆC

### 1.1. Tiếp nhận đề tài
- **Tên đề tài:** Thiết kế và xây dựng Website giới thiệu doanh nghiệp.
- **Mục tiêu cốt lõi:** Xây dựng một website hoàn chỉnh phục vụ việc quảng bá thương hiệu, giới thiệu hồ sơ năng lực, các gói dịch vụ, tin tức sự kiện và tiếp nhận phản hồi/liên hệ từ đối tác và khách hàng.
- **Quy trình làm việc tại đơn vị:**
  - Làm việc theo mô hình chia giai đoạn (8 tuần), bám sát yêu cầu từ tài liệu chuẩn.
  - Tuân thủ quy tắc kiểm thử, đối chiếu tài liệu và nghiệm thu từng giai đoạn trước khi chuyển sang giai đoạn kế tiếp.

---

## 2. STORY-001: KHẢO SÁT WEBSITE DOANH NGHIỆP

### 2.1. Đối tượng khảo sát thực tế
Nhóm dự án tiến hành khảo sát cấu trúc, giao diện và luồng nghiệp vụ của một số website doanh nghiệp công nghệ và dịch vụ tiêu biểu trên thị trường:
1. **Website công nghệ & chuyển đổi số (Mô hình FPT Software, CMC Global):**
   - *Đặc điểm nổi bật:* Bố cục chuyên nghiệp, tông màu thương hiệu rõ ràng, tập trung làm nổi bật năng lực cốt lõi, danh mục giải pháp/dịch vụ và các case study/dự án tiêu biểu.
2. **Website doanh nghiệp sản xuất và thương mại dịch vụ:**
   - *Đặc điểm nổi bật:* Thanh điều hướng rõ ràng, phần thông tin liên hệ đa kênh (form đăng ký, hotline, bản đồ, email), hình ảnh cơ sở vật chất và hoạt động công ty trực quan.

### 2.2. Phân tích cách tổ chức nội dung
Qua khảo sát, một website giới thiệu doanh nghiệp tiêu chuẩn cần phân bổ nội dung theo các khối trang logic:
* **Trang chủ (Home):**
  - Banner chào mừng / Hero section thể hiện slogan và giá trị cốt lõi.
  - Tóm tắt giới thiệu doanh nghiệp và các con số ấn tượng.
  - Khối dịch vụ nổi bật (3-4 dịch vụ tiêu biểu).
  - Tin tức / sự kiện mới nhất.
  - Lời kêu gọi hành động (Call To Action - CTA) dẫn đến form liên hệ.
* **Giới thiệu (About Us):**
  - Lịch sử hình thành và phát triển.
  - Tầm nhìn, sứ mệnh, giá trị cốt lõi.
  - Đội ngũ nhân sự chủ chốt / Ban lãnh đạo.
* **Dịch vụ (Services):**
  - Danh sách các gói dịch vụ/giải pháp cung cấp.
  - Mô tả chi tiết từng dịch vụ, kèm biểu tượng (icon) hoặc hình ảnh minh họa.
* **Tin tức & Hoạt động (News):**
  - Danh mục tin tức nội bộ, thông cáo báo chí, bài viết chia sẻ kiến thức.
  - Danh sách bài viết dạng thẻ (cards) gồm ảnh thumbnail, tiêu đề, ngày đăng và tóm tắt ngắn.
* **Thư viện hình ảnh (Gallery):**
  - Bộ sưu tập hình ảnh không gian văn phòng, hoạt động tập thể, dự án và sự kiện nổi bật của doanh nghiệp.
* **Liên hệ (Contact):**
  - Thông tin liên hệ chính thức: Địa chỉ trụ sở, số điện thoại, email hỗ trợ.
  - Form trực tuyến cho phép khách truy cập gửi yêu cầu tư vấn/góp ý.

### 2.3. Phân tích cách tổ chức chức năng kỹ thuật
* **Phía Người dùng (Client):**
  - Điều hướng mượt mà, menu điều hướng cố định (sticky navbar) hoặc rõ ràng trên mọi màn hình.
  - Tương thích tốt trên máy tính để bàn (Desktop), máy tính bảng (Tablet) và điện thoại thông minh (Mobile) nhờ thiết kế Responsive.
  - Kiểm tra dữ liệu đầu vào (Form Validation) tại form liên hệ trước khi gửi dữ liệu về hệ thống.
* **Phía Quản trị (Admin) & Lưu trữ dữ liệu:**
  - Hệ thống cơ sở dữ liệu lưu trữ thông tin có cấu trúc.
  - Cơ chế tiếp nhận và lưu trữ thông điệp liên hệ từ khách hàng một cách an toàn và toàn vẹn.

---

## 3. STORY-002: THỐNG NHẤT MỤC TIÊU VÀ PHẠM VI DỰ ÁN

### 3.1. Thống nhất mục tiêu (Project Objectives)
1. **Về sản phẩm:** Xây dựng website giới thiệu doanh nghiệp chuẩn responsive, giao diện trang nhã, tốc độ tải nhanh, kết nối backend và lưu trữ dữ liệu an toàn vào MySQL.
2. **Về đào tạo/thực tập:** Nắm vững quy trình phát triển phần mềm chuẩn từ phân tích yêu cầu, thiết kế kiến trúc hệ thống (UML), xây dựng CSDL, lập trình full-stack đến kiểm thử và viết báo cáo hoàn thiện.

### 3.2. Phạm vi dự án (Project Scope)

#### A. In-Scope (Trong phạm vi triển khai)
* **Khảo sát & Phân tích thiết kế:**
  - Lập tài liệu phân tích yêu cầu nghiệp vụ.
  - Xây dựng sơ đồ Use Case và mô tả chức năng.
  - Xây dựng Activity Diagram cho các luồng nghiệp vụ chính.
  - Thiết kế cấu trúc cơ sở dữ liệu (ERD / Thực thể - Thuộc tính - Quan hệ).
  - Thiết kế Class Diagram.
* **Giao diện Website (Frontend):**
  - Xây dựng hoàn chỉnh 6 phân hệ trang: Trang chủ (Home), Giới thiệu (About), Dịch vụ (Services), Tin tức (News), Hình ảnh (Gallery), Liên hệ (Contact).
  - Tương thích giao diện đa thiết bị (Responsive) và đa trình duyệt.
* **Cơ sở dữ liệu (Database):**
  - Thiết kế và triển khai CSDL MySQL (`company_intro_db`).
  - Tạo dữ liệu mẫu (Seed data) phục vụ chạy thử nghiệm.
* **Backend & Tích hợp (Integration):**
  - Xây dựng RESTful API bằng Node.js + Express.js.
  - Kết nối và trao đổi dữ liệu với MySQL.
  - Xử lý tiếp nhận và phản hồi dữ liệu từ Form liên hệ.
* **Kiểm thử & Báo cáo:**
  - Thực hiện kiểm thử chức năng, kiểm thử giao diện và kiểm thử tính toàn vẹn dữ liệu.
  - Hoàn thiện báo cáo thực tập và chuẩn bị nội dung thuyết minh/demo.

#### B. Out-of-Scope (Ngoài phạm vi)
* Các tính năng thương mại điện tử phức tạp: Giỏ hàng, cổng thanh toán trực tuyến, theo dõi đơn hàng, quản lý kho hàng.
* Tích hợp các hệ thống phân tán phức tạp: Microservices, Redis cache, Message Queue (Kafka/RabbitMQ), kiến trúc Docker/Kubernetes (chưa yêu cầu trong đề tài).

---

## 4. TỔNG HỢP CÁC NHÓM DỮ LIỆU & ĐỐI TƯỢNG SỬ DỤNG

### 4.1. Đối tượng sử dụng (Actors)
| STT | Đối tượng (Actor) | Mô tả vai trò | Phạm vi chức năng dự kiến |
|:---:|---|---|---|
| 1 | **Khách vãng lai / Khách hàng** | Đối tác hoặc khách hàng truy cập website | Xem thông tin công ty, dịch vụ, đọc tin tức, xem ảnh hoạt động, gửi thông tin liên hệ/yêu cầu tư vấn |
| 2 | **Quản trị viên (Admin)** | Nhân sự quản lý thông tin của doanh nghiệp | Đăng nhập hệ thống quản trị, xem/quản lý thông tin liên hệ từ khách hàng, cập nhật nội dung cơ bản |

### 4.2. Các nhóm dữ liệu cốt lõi cần quản lý
1. **Nhóm Thông tin Doanh nghiệp:** Tên doanh nghiệp, khẩu hiệu, địa chỉ, số điện thoại, email đại diện, nội dung giới thiệu lịch sử, tầm nhìn, sứ mệnh.
2. **Nhóm Dịch vụ:** Tên dịch vụ, mô tả tóm tắt, mô tả chi tiết, hình ảnh/biểu tượng đại diện.
3. **Nhóm Tin tức:** Tiêu đề bài viết, tóm tắt, nội dung chi tiết, hình thu nhỏ (thumbnail), ngày đăng.
4. **Nhóm Hình ảnh (Media/Gallery):** Tiêu đề hình ảnh, đường dẫn ảnh, mô tả ngắn, ngày đăng.
5. **Nhóm Liên hệ:** Họ và tên khách hàng, email, số điện thoại, tiêu đề liên hệ, nội dung tin nhắn, trạng thái xử lý (đã xem, chưa xem).
6. **Nhóm Quản trị / Người dùng:** Tài khoản, mật khẩu, họ tên, vai trò quản trị.

---

## 5. THỐNG NHẤT CÔNG CỤ VÀ KẾ HOẠCH TRIỂN KHAI

### 5.1. Công nghệ và môi trường kỹ thuật
- **Frontend:** HTML5, CSS3, JavaScript ES6+, Framework Bootstrap 5.
- **Backend:** Node.js v25+, Express.js framework, CORS, Dotenv.
- **Database:** MySQL 8.0+ / MariaDB, thư viện kết nối `mysql2/promise`.
- **Môi trường phát triển:** Visual Studio Code, Git, Postman/PowerShell để kiểm thử API.

### 5.2. Kế hoạch chuyển giao sang giai đoạn tiếp theo (Next Steps)
- Nghiệm thu kết quả **EPIC-001** (Đã đạt toàn bộ tiêu chí AC-001).
- Chuyển tiếp sang **EPIC-002: Phân tích và thiết kế hệ thống**:
  - STORY-003: Phân tích yêu cầu nghiệp vụ chi tiết.
  - STORY-004: Xây dựng sơ đồ Use Case Diagram và đặc tả chi tiết.
  - STORY-005: Xây dựng sơ đồ Activity Diagram luồng xử lý.
  - STORY-006: Hoàn thiện mô hình CSDL (ERD, cấu trúc bảng, kiểu dữ liệu, ràng buộc khóa ngoại - giải quyết dứt điểm các điểm TBD).
  - STORY-007: Xây dựng sơ đồ Class Diagram.

---
*Báo cáo được lập và lưu trữ tại tài liệu dự án để phục vụ theo dõi tiến độ và tổng hợp báo cáo thực tập.*
