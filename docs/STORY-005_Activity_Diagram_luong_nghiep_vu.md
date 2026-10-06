# TÀI LIỆU ACTIVITY DIAGRAM — PHÂN TÍCH LUỒNG XỬ LÝ NGHIỆP VỤ (STORY-005)

> **Mã công việc:** STORY-005  
> **Thuộc Epic:** EPIC-002 — Phân tích và thiết kế hệ thống  
> **Căn cứ kế hoạch:** [PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md](../PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md)  
> **Đáp ứng các yêu cầu:** REQ-F-007, AC-002  
> **Thời gian thực hiện (Tuần 4):** 06/07/2026 – 12/07/2026  
> **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  

---

## 1. TỔNG QUAN

Tài liệu này mô hình hóa tuần tự các luồng nghiệp vụ cốt lõi của **Website giới thiệu doanh nghiệp** bằng các sơ đồ hoạt động (**Activity Diagram**). Qua đó làm rõ sự tương tác giữa Người dùng (Frontend), Tầng xử lý nghiệp vụ (Backend) và Cơ sở dữ liệu (MySQL).

---

## 2. DANH MỤC CÁC LUỒNG HOẠT ĐỘNG CHÍNH

1. **Luồng 1:** Gửi thông tin liên hệ và yêu cầu tư vấn (Khách vãng lai ➔ Website ➔ CSDL).
2. **Luồng 2:** Xác thực và đăng nhập quản trị viên (Admin ➔ Backend ➔ CSDL).
3. **Luồng 3:** Xem và cập nhật trạng thái liên hệ của khách hàng (Admin Portal).
4. **Luồng 4:** Quản lý và cập nhật nội dung (Dịch vụ / Tin tức).

---

## 3. SƠ ĐỒ HOẠT ĐỘNG CHI TIẾT (ACTIVITY DIAGRAMS)

### 3.1. Luồng 1: Gửi thông tin liên hệ / phản hồi từ khách hàng

Luồng này mô tả quá trình khách truy cập điền và gửi form liên hệ, hệ thống xác thực tính hợp lệ dữ liệu và lưu trữ an toàn vào CSDL.

```mermaid
flowchart TD
    Start([● Bắt đầu]) --> AccessContact[Khách hàng truy cập trang Liên hệ]
    AccessContact --> InputForm[Nhập thông tin: Họ tên, Email, SĐT, Tiêu đề, Nội dung]
    InputForm --> ClickSubmit[Nhấn nút 'Gửi liên hệ']
    
    ClickSubmit --> ClientValidate{Dữ liệu đầu vào<br>hợp lệ?}
    ClientValidate -- Không hợp lệ --> ShowClientError[Hiển thị thông báo lỗi dưới ô nhập]
    ShowClientError --> InputForm
    
    ClientValidate -- Hợp lệ --> SendPost[Gửi HTTP POST tới API /api/contacts]
    SendPost --> ServerValidate{Backend kiểm tra<br>dữ liệu hợp lệ?}
    
    ServerValidate -- Không hợp lệ --> Return400[Trả về mã lỗi 400 Bad Request]
    Return400 --> ShowServerError[Frontend thông báo dữ liệu không hợp lệ]
    ShowServerError --> InputForm
    
    ServerValidate -- Hợp lệ --> InsertDB[(Thực thi INSERT vào bảng contacts<br>trạng thái: unread)]
    InsertDB --> DBResult{Ghi CSDL<br>thành công?}
    
    DBResult -- Lỗi kết nối/ghi --> Return500[Trả về mã lỗi 500 Server Error]
    Return500 --> ShowDBError[Frontend báo lỗi hệ thống, đề nghị thử lại sau]
    ShowDBError --> EndFail([● Kết thúc lỗi])
    
    DBResult -- Thành công --> Return201[Trả về mã 201 Created kèm thông báo]
    Return201 --> ResetForm[Frontend làm sạch form & hiện thông báo cảm ơn]
    ResetForm --> EndSuccess([◎ Kết thúc thành công])
```

---

### 3.2. Luồng 2: Xác thực và đăng nhập quản trị viên

Mô tả luồng kiểm tra tài khoản, xác thực thông tin đăng nhập của Admin trước khi cấp quyền thao tác trên trang quản trị.

```mermaid
flowchart TD
    StartLogin([● Bắt đầu]) --> AccessLoginPage[Admin truy cập trang đăng nhập]
    AccessLoginPage --> EnterCreds[Nhập Tên đăng nhập và Mật khẩu]
    EnterCreds --> ClickLoginBtn[Nhấn 'Đăng nhập']
    
    ClickLoginBtn --> CheckEmpty{Để trống<br>thông tin?}
    CheckEmpty -- Có --> AlertEmpty[Cảnh báo: Vui lòng nhập đủ thông tin]
    AlertEmpty --> EnterCreds
    
    CheckEmpty -- Không --> SendAuthReq[Gửi yêu cầu POST tới API xác thực]
    SendAuthReq --> QueryUser[(Truy vấn bảng users theo username)]
    
    QueryUser --> UserExist{Tài khoản<br>tồn tại?}
    UserExist -- Không --> AuthFailed[Trả về lỗi: Sai tài khoản hoặc mật khẩu]
    
    UserExist -- Có --> CheckPassword{Mật khẩu<br>chính xác?}
    CheckPassword -- Sai --> AuthFailed
    AuthFailed --> DisplayAuthError[Frontend hiển thị thông báo lỗi xác thực]
    DisplayAuthError --> EnterCreds
    
    CheckPassword -- Đúng --> CreateSession[Thiết lập phiên làm việc / Token đăng nhập]
    CreateSession --> RedirectDashboard[Chuyển hướng vào Admin Dashboard]
    RedirectDashboard --> EndLoginSuccess([◎ Đăng nhập thành công])
```

---

### 3.3. Luồng 3: Xem và cập nhật trạng thái liên hệ (Admin Contact Management)

Mô tả quy trình Quản trị viên theo dõi thông tin khách hàng gửi về và cập nhật tiến trình xử lý liên hệ.

```mermaid
flowchart TD
    StartManage([● Bắt đầu]) --> AccessContactList[Admin chọn mục 'Quản lý liên hệ']
    AccessContactList --> FetchContacts[(Truy vấn bảng contacts<br>sắp xếp theo ngày gửi mới nhất)]
    FetchContacts --> DisplayTable[Hiển thị danh sách liên hệ trên bảng quản trị]
    
    DisplayTable --> SelectMessage[Admin chọn xem chi tiết 1 tin nhắn]
    SelectMessage --> ViewDetail[Hiển thị đầy đủ nội dung liên hệ]
    
    ViewDetail --> CheckUnread{Trạng thái hiện tại<br>là 'unread'?}
    CheckUnread -- Đúng --> UpdateRead[(Cập nhật status = 'read' trong MySQL)]
    CheckUnread -- Đã đọc --> SkipUpdate[Giữ nguyên trạng thái hiện tại]
    
    UpdateRead --> ProcessContact[Admin xử lý: gọi điện hoặc email phản hồi khách]
    SkipUpdate --> ProcessContact
    
    ProcessContact --> MarkReplied[Admin chọn 'Đã phản hồi khách hàng']
    MarkReplied --> UpdateReplied[(Cập nhật status = 'replied' trong MySQL)]
    UpdateReplied --> RefreshList[Làm mới giao diện danh sách]
    RefreshList --> EndManage([◎ Kết thúc luồng])
```

---

### 3.4. Luồng 4: Cập nhật nội dung Dịch vụ / Tin tức

Mô tả quá trình Quản trị viên thêm mới hoặc hiệu chỉnh các bài viết tin tức, gói dịch vụ phục vụ hiển thị trên Website.

```mermaid
flowchart TD
    StartContent([● Bắt đầu]) --> ChooseAction{Admin chọn thao tác}
    
    ChooseAction -- Thêm mới --> OpenCreateForm[Mở biểu mẫu thêm mới]
    ChooseAction -- Sửa đổi --> FetchCurrentItem[(Tải thông tin bản ghi hiện tại)]
    FetchCurrentItem --> OpenEditForm[Mở biểu mẫu chỉnh sửa]
    
    OpenCreateForm --> FillContent[Nhập tiêu đề, mô tả, tóm tắt, nội dung, chọn ảnh]
    OpenEditForm --> FillContent
    
    FillContent --> ClickSave[Nhấn 'Lưu thay đổi']
    ClickSave --> ValidateFields{Các trường bắt buộc<br>đầy đủ?}
    
    ValidateFields -- Thiếu --> AlertMissing[Cảnh báo trường thông tin còn thiếu]
    AlertMissing --> FillContent
    
    ValidateFields -- Đủ --> SendSaveReq[Gửi yêu cầu POST / PUT tới Backend API]
    SendSaveReq --> SaveToDB[(Cập nhật vào bảng news hoặc services)]
    
    SaveToDB --> SaveResult{Ghi dữ liệu<br>thành công?}
    SaveResult -- Thất bại --> AlertDBError[Báo lỗi lưu dữ liệu không thành công]
    AlertDBError --> FillContent
    
    SaveResult -- Thành công --> NotifySuccess[Thông báo lưu dữ liệu thành công]
    NotifySuccess --> RefreshContentUI[Cập nhật dữ liệu hiển thị mới nhất]
    RefreshContentUI --> EndContent([◎ Hoàn thành cập nhật])
```

---

## 4. ĐỐI CHIẾU NGHIỆP VỤ & KẾT LUẬN

* Các sơ đồ Activity Diagram trên đã bao phủ trọn vẹn các luồng tương tác 2 chiều giữa Người dùng, Hệ thống Web và Cơ sở dữ liệu.
* Toàn bộ các nhánh rẽ điều kiện (Decision Nodes) và các kịch bản ngoại lệ (Exception flows) đều được xác định rõ ràng, đảm bảo hệ thống không xảy ra hiện tượng treo hoặc thiếu phản hồi cho người dùng.
* Tài liệu này là căn cứ trực tiếp để thiết kế cấu trúc dữ liệu chi tiết trong **STORY-006 (Database Design)** và xây dựng các hàm Controller/Route trong Backend.
