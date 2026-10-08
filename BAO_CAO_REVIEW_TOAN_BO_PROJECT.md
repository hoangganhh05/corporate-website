# BÁO CÁO REVIEW TOÀN BỘ PROJECT

## Website giới thiệu doanh nghiệp — CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM

**Ngày review:** 08/10/2026  
**Phạm vi:** Toàn bộ repository `PJ_THUE`  
**Nguyên tắc:** Chỉ review, không sửa source code; nội dung không đủ bằng chứng được ghi là `CHƯA XÁC NHẬN`.

---

## 1. Kết luận tổng quan

- Mức hoàn thành thực chất: **khoảng 61%**.
- Project **chưa đủ an toàn để demo/nộp bản cuối**.
- Các trang công khai và cấu trúc database đã hình thành khá đầy đủ.
- Gallery và một phần quản lý Contact đã kết nối API/database.
- Xác thực Admin hiện là giả lập phía trình duyệt, API quản trị không được bảo vệ.
- Form liên hệ có thể báo thành công dù request thất bại hoặc backend không hoạt động.
- Phần lớn CRUD nội dung chưa tồn tại.
- Home, News và Services chưa sử dụng dữ liệu API đúng như tài liệu tuyên bố.
- Bộ test báo 100% PASS nhưng chủ yếu kiểm tra cấu trúc tĩnh và endpoint cơ bản, chưa chứng minh luồng end-to-end, browser compatibility và CRUD thực tế.
- Tài liệu thiết kế/báo cáo có nhiều nội dung không khớp source.
- `okl.docx` được khai báo là nguồn yêu cầu duy nhất nhưng không có trong repository, nên yêu cầu gốc chưa thể xác minh độc lập.

---

## 2. Phạm vi đã kiểm tra

Đã kiểm tra:

- Cấu trúc thư mục và danh sách file Git.
- Source frontend: 7 trang HTML, CSS và JavaScript dùng chung.
- Source backend Express: app, server, route, controller, model, middleware.
- Database: `schema.sql`, `seed.sql`, `initDb.js` và dữ liệu MySQL đang chạy.
- REST API và sự liên kết giữa frontend với API.
- README, project plan và toàn bộ tài liệu trong thư mục `docs`.
- Các script functional test, UI test, regression và final audit.
- Cú pháp toàn bộ file JavaScript backend.
- Chạy `npm.cmd run test:all`.

Không thực hiện sửa code hoặc thay đổi database có chủ đích.

---

## 3. Mục tiêu và phạm vi theo kế hoạch

### 3.1. Mục tiêu

Xây dựng website giới thiệu Công ty TNHH Công Nghệ FFT Việt Nam trong 8 tuần, gồm:

- Khảo sát và phân tích yêu cầu.
- Thiết kế Use Case, Activity, Class Diagram và database.
- Xây dựng website giới thiệu doanh nghiệp.
- Kết nối website với database.
- Quản lý và xử lý dữ liệu liên hệ/nội dung.
- Kiểm thử chức năng, responsive và trình duyệt.
- Hoàn thiện báo cáo và kịch bản demo/bảo vệ.

### 3.2. Phân hệ chức năng

- Trang chủ.
- Giới thiệu doanh nghiệp.
- Dịch vụ.
- Tin tức.
- Thư viện hình ảnh.
- Liên hệ.
- Cổng quản trị.
- Đăng nhập quản trị.
- Quản lý thông tin doanh nghiệp, dịch vụ, tin tức, hình ảnh và liên hệ.

### 3.3. Yêu cầu phi chức năng

- Nhất quán giữa tài liệu, giao diện, chức năng và database.
- Responsive trên desktop, tablet và mobile.
- Tương thích nhiều trình duyệt.
- Hoạt động ổn định.
- Dữ liệu chính xác.
- Tài liệu đầy đủ.
- Mật khẩu quản trị phải được lưu an toàn.

### 3.4. Công nghệ được lựa chọn

- Frontend: HTML5, CSS3, JavaScript ES6+, Bootstrap 5.
- Backend: Node.js, Express.
- Database: MySQL/MariaDB, `mysql2/promise`.
- Kiến trúc source thực tế: Route → Controller → Model → MySQL.

Project plan gốc để công nghệ cụ thể ở trạng thái `TBD`; công nghệ trên được bổ sung trong các tài liệu phân tích sau đó.

### 3.5. Database dự kiến

Sáu bảng:

1. `users`
2. `company_info`
3. `services`
4. `news`
5. `gallery`
6. `contacts`

Quan hệ được thiết kế: `news.author_id → users.id`.

### 3.6. Giai đoạn dự án

- EPIC-001: Khảo sát và xác định yêu cầu.
- EPIC-002: Phân tích và thiết kế.
- EPIC-003: Xây dựng database.
- EPIC-004: Xây dựng website UI.
- EPIC-005: Tích hợp website và database.
- EPIC-006: Kiểm thử và sửa lỗi.
- EPIC-007: Hoàn thiện tài liệu, báo cáo và demo.

---

## 4. Bảng đối chiếu kế hoạch và project hiện tại

| STT | Hạng mục theo kế hoạch | Yêu cầu | Project hiện tại | Trạng thái | Mức hoàn thành | Vấn đề | Cách sửa |
|---:|---|---|---|---|---:|---|---|
| 1 | Nguồn yêu cầu gốc | Dùng `okl.docx` làm nguồn chuẩn | Chỉ có Markdown chuyển thể, không có `okl.docx` | CHƯA XÁC NHẬN | 50% | Không thể xác minh bản kế hoạch phản ánh chính xác DOCX | Bổ sung DOCX/PDF gốc và lập traceability |
| 2 | Khảo sát, phạm vi | Mục tiêu, actor, phạm vi, dữ liệu | Có EPIC-001 và STORY-003 khá chi tiết | HOÀN THÀNH | 90% | Một số yêu cầu chi tiết được mở rộng sau kế hoạch gốc | Phân biệt yêu cầu gốc với quyết định thiết kế bổ sung |
| 3 | Use Case | Sơ đồ và đặc tả chức năng | Có Mermaid và mô tả Use Case | HOÀN THÀNH | 85% | Một số Use Case quản trị chưa được triển khai | Cập nhật trạng thái Use Case theo source thật |
| 4 | Activity Diagram | Contact, login, xử lý liên hệ, quản lý nội dung | Có bốn luồng trong tài liệu | SAI KẾ HOẠCH | 60% | Luồng login và CRUD nội dung không khớp source | Sửa implementation hoặc cập nhật sơ đồ đúng hiện trạng |
| 5 | Class Diagram | Đối chiếu với triển khai | Có sơ đồ nhưng mô tả nhiều class/service không tồn tại | SAI KẾ HOẠCH | 45% | Có `AuthService`, `AuthController`, các Service chưa có trong source | Vẽ lại theo source hoặc triển khai đúng thiết kế |
| 6 | Database design | 6 bảng, constraint, quan hệ, seed | Schema đủ 6 bảng; database kết nối được | HOÀN THÀNH | 80% | Mật khẩu plaintext; quan hệ dữ liệu còn đơn giản | Hash mật khẩu và bổ sung constraint phù hợp |
| 7 | Dữ liệu mẫu | Có seed phục vụ kiểm thử | Có seed và dữ liệu trong MySQL | HOÀN THÀNH | 85% | Chưa xác nhận dữ liệu doanh nghiệp/ảnh là dữ liệu thật | Đánh dấu demo data và thay bằng dữ liệu được xác nhận |
| 8 | Trang chủ | Nội dung và tin mới từ database | Giao diện đầy đủ nhưng kiểm tra sai response API | CHƯA HOÀN THÀNH | 65% | Dùng `res.success`, backend trả `status` | Chuẩn hóa response API/client |
| 9 | Giới thiệu | Hiển thị thông tin doanh nghiệp | Giao diện đầy đủ nhưng nội dung hard-code | CHƯA HOÀN THÀNH | 65% | Không dùng `/api/company` | Fetch và render `company_info` |
| 10 | Dịch vụ | Danh sách/chi tiết từ database | Có HTML tĩnh; API chỉ được gọi để log | CHƯA HOÀN THÀNH | 55% | Không render API, không có chi tiết động | Render dữ liệu và làm trang/modal chi tiết |
| 11 | Tin tức | Danh sách và chi tiết bài viết | Có danh sách tĩnh và API nhưng chưa hoạt động đúng | CHƯA HOÀN THÀNH | 45% | Sai response contract, field không khớp, chưa có bài chi tiết | Chuẩn hóa field và triển khai trang chi tiết |
| 12 | Gallery | Hiển thị, lọc, xem ảnh | Fetch API, render, filter và modal hoạt động theo source | HOÀN THÀNH | 85% | Chèn dữ liệu API qua `innerHTML`; có fallback ảnh | Escape dữ liệu và thông báo rõ chế độ offline |
| 13 | Form liên hệ | Validate, POST và lưu database | Có validation và POST API | SAI KẾ HOẠCH | 55% | Luôn báo thành công dù fetch/API lỗi | Kiểm tra `response.ok`, chỉ reset khi HTTP 201 |
| 14 | Đăng nhập Admin | Backend xác thực user DB, tạo session/token | So sánh mật khẩu hard-code ở JavaScript | SAI KẾ HOẠCH | 15% | Có thể vượt qua bằng DevTools; mật khẩu công khai | API auth, bcrypt/Argon2, session/JWT |
| 15 | Bảo vệ API quản trị | Chỉ Admin đăng nhập được quản lý | GET/PATCH/DELETE contacts đều public | SAI KẾ HOẠCH | 10% | Không có auth/authorization middleware | Bảo vệ route và kiểm tra role |
| 16 | Quản lý liên hệ | Danh sách, chi tiết, trạng thái, ghi chú, xóa | Backend có CRUD; UI có danh sách và update | CHƯA HOÀN THÀNH | 65% | UI không gọi detail API, chưa có nút xóa, không kiểm tra PATCH response | Hoàn thiện đúng luồng và UI Delete |
| 17 | CRUD Company | Admin cập nhật thông tin doanh nghiệp | Model có update nhưng không có route/controller/UI | CHƯA HOÀN THÀNH | 20% | Hàm model không được sử dụng | Tạo protected endpoint và form quản trị |
| 18 | CRUD Services | Thêm, sửa, xóa dịch vụ | Chỉ có GET danh sách/chi tiết | CHƯA HOÀN THÀNH | 20% | Không có Create/Update/Delete | Bổ sung API và màn hình quản trị |
| 19 | CRUD News | Thêm, sửa, xóa tin tức | Chỉ có GET; có tăng view ngầm | CHƯA HOÀN THÀNH | 20% | Không có Create/Update/Delete | Bổ sung API, editor và trạng thái publish |
| 20 | CRUD Gallery | Thêm/xóa hình ảnh | Chỉ có GET | CHƯA HOÀN THÀNH | 20% | Không có quản lý ảnh/upload | Bổ sung upload/storage và CRUD |
| 21 | Frontend–API contract | Trao đổi dữ liệu thống nhất | Gallery khớp; Home/News/Services không khớp | SAI KẾ HOẠCH | 45% | `status` và `success` không nhất quán | Định nghĩa response schema và contract test |
| 22 | Frontend–Database | Website hiển thị dữ liệu database | Gallery/Contacts dùng API; các trang khác chủ yếu tĩnh | CHƯA HOÀN THÀNH | 50% | Chưa thể kết luận toàn website dùng DB | Tích hợp Company, Services và News |
| 23 | Fallback/offline | Ổn định nhưng không làm sai dữ liệu | Model nuốt lỗi DB và dùng dữ liệu giả/RAM | SAI KẾ HOẠCH | 30% | Che lỗi và có thể báo lưu thành công giả | Fallback phải explicit; lỗi ghi trả HTTP 503 |
| 24 | Validation | Kiểm tra dữ liệu chính xác | Contact validation tương đối đầy đủ | HOÀN THÀNH | 75% | Thiếu max length; ID/limit chưa validate chặt | Dùng schema validator và giới hạn kích thước |
| 25 | Security/XSS | Dữ liệu an toàn | Contact có sanitize; frontend chèn API vào `innerHTML` | CHƯA HOÀN THÀNH | 35% | Nguy cơ stored XSS | Escape output hoặc dùng `textContent`/sanitizer chuẩn |
| 26 | Responsive | Desktop/tablet/mobile | Có Bootstrap grid và media query | CHƯA XÁC NHẬN | 70% | Chưa có bằng chứng chạy viewport thật | Test bằng browser automation và lưu bằng chứng |
| 27 | Browser compatibility | Chrome, Edge, Firefox, Safari | Tài liệu tuyên bố PASS; script chỉ dò source | CHƯA XÁC NHẬN | 30% | Không có bằng chứng chạy browser thật | Chạy test trên các trình duyệt yêu cầu |
| 28 | Functional/E2E testing | Kiểm tra luồng thật và dữ liệu | Script báo 100% PASS | CHƯA HOÀN THÀNH | 45% | Không phát hiện auth giả, contact false-success, thiếu CRUD | Viết integration/E2E test theo hành vi thật |
| 29 | Tài liệu kiểm thử | Phản ánh đúng trạng thái hệ thống | Báo cáo tuyên bố 100% và zero regressions | SAI KẾ HOẠCH | 50% | Kết luận vượt quá bằng chứng | Cập nhật defect log và kết quả test thật |
| 30 | Báo cáo/demo | Báo cáo, slide và kịch bản demo | Có tài liệu Markdown và kịch bản | CHƯA HOÀN THÀNH | 70% | Kịch bản dựa trên chức năng chưa đúng thực tế | Sửa hệ thống rồi cập nhật tài liệu nộp |

---

## 5. Các vấn đề theo mức độ ưu tiên

### A. BẮT BUỘC PHẢI SỬA

#### 5.1. Form liên hệ báo thành công giả

Trong `frontend/pages/contact/index.html`, lỗi mạng được đổi thành `null`, nhưng code vẫn hiển thị thông báo thành công và reset form. Code không kiểm tra `response.ok` hoặc HTTP 201.

**Rủi ro:** Demo khi backend tắt hoặc API trả lỗi vẫn báo đã gửi thành công nhưng dữ liệu không được lưu.

#### 5.2. Admin authentication chỉ là giao diện giả

Trang Admin chứa trực tiếp các mật khẩu được chấp nhận và lưu trạng thái đăng nhập bằng `sessionStorage`.

**Rủi ro:** Người dùng có thể xem source, tự đặt cờ đăng nhập hoặc gọi API trực tiếp.

#### 5.3. API quản trị không có authorization

Các API đọc, cập nhật và xóa Contact không có middleware xác thực hay kiểm tra vai trò.

**Rủi ro:** Bất kỳ ai truy cập API đều có thể xem hoặc thay đổi dữ liệu liên hệ.

#### 5.4. Home và News không dùng được response backend

Backend trả thuộc tính `status: "success"`, trong khi frontend Home và News kiểm tra `res.success`. Điều kiện render dữ liệu động luôn sai.

#### 5.5. Services chỉ gọi API để ghi console

Trang Services không dùng kết quả API để cập nhật giao diện. Nội dung hiển thị vẫn hoàn toàn hard-code.

#### 5.6. Thiếu CRUD nội dung

Thiếu API và giao diện Create/Update/Delete cho:

- Company Info.
- Services.
- News.
- Gallery.

#### 5.7. Fallback che giấu lỗi database

Các model bắt mọi lỗi MySQL rồi trả dữ liệu giả hoặc lưu RAM. API có thể trả thành công dù database hỏng hoặc dữ liệu không được lưu bền vững.

#### 5.8. Cập nhật trạng thái Contact có thể báo thành công giả

Frontend không kiểm tra HTTP status của PATCH trước khi đóng modal và tải lại dữ liệu.

#### 5.9. Class Diagram không khớp code

Tài liệu có `AuthController`, `AuthService`, `ContactService`, `NewsService` và nhiều phương thức CRUD, nhưng các thành phần này không tồn tại trong source.

#### 5.10. Nguy cơ stored XSS

News, Gallery và bảng Admin ghép trực tiếp dữ liệu API vào `innerHTML`. Dữ liệu không tin cậy có thể chèn markup/script.

### B. NÊN SỬA

- Chuẩn hóa response `status`/`success`.
- Chuẩn hóa `thumbnail`/`image_url`, `created_at`/`published_at`.
- Validate `limit`, `offset`, ID và độ dài trường nhập.
- Không dùng `innerHTML` trực tiếp với dữ liệu server.
- Làm trang chi tiết News và Services.
- Hiển thị `views_count` thật thay vì số giả lập.
- Gọi API detail khi Admin mở Contact để cập nhật `unread → read`.
- Thêm nút xóa Contact trên UI nếu vẫn giữ DELETE endpoint.
- Đưa API base URL ra file cấu hình hoặc environment.
- Bổ sung loading, empty state, timeout và thông báo lỗi phù hợp.
- Cập nhật defect log đúng với lỗi hiện tại.

### C. CÓ THỂ CẢI TIẾN SAU

- Tìm kiếm và phân trang Admin.
- Upload ảnh thay vì nhập URL ngoài.
- Rate limiting và CAPTCHA cho Contact.
- Logging và audit trail.
- Email thông báo/phản hồi.
- Docker, migration và deployment pipeline.
- Accessibility và performance audit.
- CMS/editor cho News.
- Browser automation đa trình duyệt.

---

## 6. Đánh giá database

### 6.1. Kết quả kiểm tra thực tế

MySQL kết nối thành công tại thời điểm review.

| Bảng | Số bản ghi |
|---|---:|
| `users` | 1 |
| `company_info` | 1 |
| `services` | 3 |
| `news` | 2 |
| `gallery` | 6 |
| `contacts` | 2 |

### 6.2. Phần đạt

- Có đủ sáu bảng theo thiết kế.
- Có foreign key `news.author_id → users.id`.
- Sử dụng InnoDB và `utf8mb4`.
- Có index cho các trường truy vấn phổ biến.
- Có dữ liệu seed.

### 6.3. Phần chưa đạt

- Password Admin lưu plaintext.
- Backend không sử dụng bảng `users` để xác thực.
- Chưa có migration/versioning.
- `CREATE TABLE IF NOT EXISTS` không cập nhật database cũ nếu schema thay đổi.
- `company_info` giả định bản ghi ID 1 nhưng không có constraint đảm bảo singleton.
- Lỗi database bị che bởi fallback.

---

## 7. Ma trận CRUD thực tế

| Entity | Create | Read | Update | Delete | UI quản trị |
|---|---:|---:|---:|---:|---:|
| Company | Không | Có | Chỉ có model | Không | Không |
| Services | Không | Có | Không | Không | Không |
| News | Không | Có | Chỉ tăng view | Không | Không |
| Gallery | Không | Có | Không | Không | Không |
| Contacts | Có | Có | Có status/notes | Có | Read + Update; chưa có Delete |
| Users/Auth | Không | Không dùng cho auth | Không | Không | Login giả phía client |

Kết luận: Project chưa có CRUD đầy đủ. Chỉ Contact có đủ CRUD ở backend nhưng UI và bảo mật chưa hoàn chỉnh.

---

## 8. Đánh giá bộ kiểm thử

Lệnh `npm.cmd run test:all` chạy thành công và báo:

- 26/26 functional tests PASS.
- 24/24 UI tests PASS.
- Zero regressions.

Tuy nhiên, phạm vi test chưa đủ để chứng minh hệ thống hoàn thiện:

- Frontend test chủ yếu kiểm tra file/tag/class tồn tại.
- Responsive test chỉ dò viewport, Bootstrap class và media query.
- Không chạy Chrome/Firefox/Edge/Safari thực tế.
- Không thao tác form Contact từ trình duyệt.
- Không kiểm tra backend authentication và authorization.
- Không kiểm tra CRUD Company/Services/News/Gallery.
- Không kiểm tra frontend có render đúng response API.
- Không phát hiện form báo thành công khi backend lỗi.

Kết quả PASS là đúng đối với các assertion hiện tại, nhưng chưa đủ cơ sở cho tuyên bố “website hoàn toàn đạt” hoặc “zero regressions”.

---

## 9. Đánh giá theo góc nhìn giảng viên

### 9.1. Mức hoàn thành

**Khoảng 61% so với toàn bộ yêu cầu được chi tiết hóa trong project.**

Nếu chỉ nhìn project plan tổng quát, project có vẻ hoàn thiện hơn. Khi đối chiếu với Use Case, Activity và tài liệu nghiệp vụ do chính project tạo ra, các chức năng quản trị và tích hợp còn thiếu đáng kể.

### 9.2. Điều kiện demo/nộp

- Demo giao diện công khai: **Có thể**.
- Demo Gallery và đọc danh sách Contact khi hệ thống đang chạy: **Có thể**.
- Demo Contact end-to-end đáng tin cậy: **Chưa**.
- Demo đăng nhập, bảo mật và CRUD nội dung: **Chưa**.
- Nộp bản cuối: **Chưa nên**.

### 9.3. Câu hỏi giảng viên có thể đặt ra

1. Tại sao mật khẩu được viết ngay trong JavaScript và hiển thị trên form?
2. Nếu gọi trực tiếp API PATCH/DELETE mà không đăng nhập thì sao?
3. Chứng minh Contact vừa gửi đã được ghi xuống MySQL như thế nào?
4. Tắt MySQL đi vì sao API vẫn báo thành công?
5. Admin quản lý Services, News, Gallery và Company Info ở đâu?
6. Vì sao Class Diagram có AuthService nhưng source không có?
7. Services có thật sự lấy dữ liệu từ database không?
8. “100% browser compatibility” đã được test trên trình duyệt nào?
9. Vì sao frontend kiểm tra `res.success` trong khi API trả `status`?
10. Vì sao báo cáo ghi zero regressions nhưng form Contact vẫn báo thành công khi backend chết?
11. File `okl.docx` nguồn chuẩn đang ở đâu?

### 9.4. Điểm yếu dễ bị phát hiện

1. Mật khẩu Admin được công khai.
2. API quản trị không cần đăng nhập.
3. Form Contact báo thành công khi request thất bại.
4. Services vẫn là dữ liệu tĩnh.
5. Không có CRUD Services/News/Gallery/Company.
6. Tài liệu mô tả class/service không tồn tại.
7. Báo cáo kiểm thử tuyên bố vượt quá bằng chứng thực tế.

---

## 10. Chấm điểm

| Tiêu chí | Điểm |
|---|---:|
| Đúng kế hoạch | 6.0/10 |
| Đầy đủ chức năng | 4.5/10 |
| Logic nghiệp vụ | 4.0/10 |
| Database | 7.0/10 |
| Frontend | 6.5/10 |
| Backend | 5.5/10 |
| UI/UX | 7.0/10 |
| Mức độ hoàn thiện | 5.5/10 |

**Điểm trung bình tham khảo: 5.75/10.**

**Tỷ lệ hoàn thành tổng thể: 61%.**

---

## 11. Danh sách chức năng còn thiếu

- Backend authentication.
- Session hoặc JWT.
- Authorization/role middleware.
- CRUD Company Info.
- CRUD Services.
- CRUD News.
- CRUD Gallery.
- Upload và quản lý hình ảnh.
- UI xóa Contact.
- Trang/modal chi tiết Service.
- Trang/modal chi tiết News.
- Render Company Info từ database.
- Render Services từ database.
- Render Home News và News list đúng contract API.
- Luồng tự chuyển Contact sang `read` từ UI.
- Xử lý lỗi Contact đúng HTTP result.
- Kiểm thử browser thực tế.
- E2E test các luồng nghiệp vụ.
- Bằng chứng đối chiếu với `okl.docx` gốc.

---

## 12. Thứ tự ưu tiên sửa

1. Sửa Contact chỉ báo thành công sau HTTP 201.
2. Xây dựng backend authentication và bảo vệ API quản trị.
3. Hash mật khẩu, xóa mật khẩu khỏi HTML/JavaScript.
4. Loại bỏ việc fallback ghi giả hoặc trả trạng thái lỗi rõ ràng khi DB lỗi.
5. Chuẩn hóa API contract và sửa Home/News/Services.
6. Hoàn thiện CRUD nội dung theo Use Case.
7. Hoàn thiện đúng luồng quản lý Contact.
8. Ngăn XSS khi render dữ liệu API.
9. Viết integration/E2E test theo hành vi thật.
10. Kiểm thử responsive/browser thực tế.
11. Đồng bộ Class Diagram, Activity, test report và slide.
12. Bổ sung nguồn yêu cầu gốc hoặc giải trình việc thiếu `okl.docx`.

---

## 13. Kế hoạch sửa cụ thể

### Bước 1 — Chốt lại yêu cầu

- Bổ sung `okl.docx` hoặc PDF gốc.
- Lập ma trận yêu cầu → UI → API → database → test.
- Xác định chức năng bắt buộc cho buổi nộp.

### Bước 2 — Sửa lỗi demo nghiêm trọng

- Kiểm tra `response.ok` ở Contact và Admin.
- Chuẩn hóa JSON response.
- Không trả success khi thao tác database thất bại.
- Bỏ mật khẩu hard-code.

### Bước 3 — Hoàn thiện bảo mật Admin

- Tạo API login.
- Hash mật khẩu bằng bcrypt hoặc Argon2.
- Dùng session hoặc JWT.
- Thêm middleware xác thực và phân quyền.
- Bảo vệ Contacts và toàn bộ API CRUD nội dung.

### Bước 4 — Hoàn thiện tích hợp frontend

- About dùng `/api/company`.
- Services render `/api/services`.
- Home/News dùng đúng `status`, `thumbnail`, `created_at`, `views_count`.
- Gallery escape dữ liệu trước khi render.
- Chuyển API base URL sang cấu hình.

### Bước 5 — Hoàn thiện CRUD

- Company: Read/Update.
- Services: Create/Read/Update/Delete.
- News: Create/Read/Update/Delete/Publish.
- Gallery: CRUD hoặc đúng phạm vi đã được xác nhận.
- Contacts: Read/Update/Delete trên UI.

### Bước 6 — Kiểm thử lại

- Integration test với MySQL thật.
- Test khi database mất kết nối.
- E2E Guest gửi Contact → Admin login → xem → cập nhật → xóa.
- Xác nhận người chưa đăng nhập không gọi được API Admin.
- Test Chrome, Edge, Firefox và Safari nếu bắt buộc.
- Test desktop, tablet và mobile bằng viewport thật.

### Bước 7 — Đồng bộ tài liệu

- Sửa Class Diagram theo code cuối.
- Sửa Activity Diagram theo luồng thật.
- Cập nhật defect log.
- Bỏ tuyên bố 100%/zero regressions nếu chưa đủ bằng chứng.
- Cập nhật báo cáo và slide bằng kết quả kiểm thử thực tế.

---

## 14. Kết luận cuối

Project có nền tảng giao diện tương đối tốt, backend đọc dữ liệu, schema database và bộ tài liệu khá đầy đủ. Tuy nhiên, mức độ hoàn thiện trong tài liệu đang cao hơn implementation thực tế.

Ba nhóm việc phải hoàn thành trước khi demo chính thức:

1. Sửa luồng Contact để không báo thành công giả.
2. Xây dựng xác thực/authorization backend thực sự.
3. Chuẩn hóa API contract và hoàn thiện tích hợp dữ liệu động/CRUD.

Sau khi hoàn thành các phần trên, cần chạy lại test end-to-end và cập nhật toàn bộ tài liệu theo kết quả thực tế trước khi nộp.
