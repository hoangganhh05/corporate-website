# PROJECT PLAN
# Thiết kế và xây dựng Website giới thiệu doanh nghiệp

> Nguồn duy nhất của kế hoạch: `okl.docx` — tài liệu chuẩn do người dùng xác nhận.
> Không lấy công nghệ, chức năng hoặc tiến độ từ các nhật ký khác.

## 1. EXECUTIVE SUMMARY

### 1.1. Thông tin dự án

- **Đề tài:** Thiết kế và xây dựng Website giới thiệu doanh nghiệp.
- **Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM.
- **Người hướng dẫn:** Trương Thị Minh — Quản lý.
- **Thời lượng:** 8 tuần.

### 1.2. Mục tiêu

Xây dựng và hoàn thiện website giới thiệu doanh nghiệp, từ khảo sát và phân tích yêu cầu đến thiết kế hệ thống, xây dựng giao diện, xây dựng cơ sở dữ liệu, tích hợp, kiểm thử, hoàn thiện tài liệu và chuẩn bị demo/bảo vệ.

### 1.3. Kết quả đầu ra

1. Website giới thiệu doanh nghiệp hoàn thiện.
2. Tài liệu khảo sát và phân tích yêu cầu.
3. Use Case Diagram và mô tả chức năng.
4. Activity Diagram.
5. Sơ đồ/cấu trúc cơ sở dữ liệu.
6. Class Diagram.
7. Cơ sở dữ liệu có dữ liệu mẫu.
8. Website kết nối với cơ sở dữ liệu.
9. Kết quả kiểm thử và danh sách lỗi đã xử lý.
10. Bộ tài liệu phân tích, thiết kế và kiểm thử.
11. Báo cáo thực tập.
12. Nội dung demo và bảo vệ sản phẩm.

---

# 2. SOURCE OF TRUTH

## 2.1. Tài liệu sử dụng

- `okl.docx`.

## 2.2. Không sử dụng

Các file nhật ký khác không được dùng để suy ra công nghệ, kiến trúc hoặc chức năng của dự án này vì người dùng đã xác định `okl.docx` là tài liệu chuẩn.

## 2.3. Nguyên tắc lập kế hoạch

- Giữ nguyên các công việc được ghi trong `okl.docx`.
- Không tự thêm nghiệp vụ.
- Không tự gán framework/backend nếu tài liệu không ghi.
- Không tự thay đổi lịch tuần.
- Những nội dung tài liệu chưa mô tả chi tiết được đánh dấu `TBD`.

---

# 3. PROJECT SCOPE

## 3.1. In Scope

### Khảo sát và yêu cầu

- Tìm hiểu quy trình làm việc tại doanh nghiệp.
- Tiếp nhận đề tài.
- Khảo sát một số website doanh nghiệp.
- Tham khảo cách tổ chức nội dung và chức năng.
- Thống nhất mục tiêu, phạm vi và kế hoạch.
- Phân tích yêu cầu nghiệp vụ.
- Xác định đối tượng sử dụng.
- Xác định phạm vi chức năng.
- Phân tích nhóm dữ liệu cần quản lý.

### Phân tích và thiết kế

- Use Case Diagram.
- Mô tả các chức năng chính.
- Phân tích luồng xử lý.
- Thiết kế sơ đồ cơ sở dữ liệu.
- Xác định thực thể, thuộc tính, mối quan hệ.
- Activity Diagram.
- Class Diagram.
- Đối chiếu tài liệu phân tích với triển khai.

### Website

- Các trang chính của website.
- Nội dung giới thiệu doanh nghiệp.
- Dịch vụ.
- Tin tức.
- Hình ảnh.
- Liên hệ.
- Các nội dung liên quan theo thiết kế.
- Giao diện tổng thể.
- Kiểm tra nhiều kích thước màn hình.
- Kiểm tra nhiều trình duyệt.

### Database

- Cấu trúc cơ sở dữ liệu.
- Các bảng.
- Các mối quan hệ.
- Dữ liệu mẫu.
- Kiểm tra sự thống nhất giữa CSDL và hệ thống.

### Integration

- Kết nối website với cơ sở dữ liệu.
- Kiểm tra trao đổi dữ liệu giữa các thành phần.
- Kiểm tra chức năng quản lý dữ liệu.
- Hoàn thiện chức năng liên hệ và xử lý dữ liệu.

### Testing

- Kiểm thử tổng thể.
- Kiểm tra chức năng chính.
- Kiểm tra luồng xử lý nghiệp vụ.
- Kiểm tra tính chính xác của dữ liệu.
- Responsive.
- Browser compatibility.
- Tổng hợp lỗi.
- Chỉnh sửa lỗi.
- Kiểm tra lại sau sửa.

### Finalization

- Rà soát website.
- Rà soát chức năng, giao diện và dữ liệu.
- Hoàn thiện tài liệu.
- Hoàn thiện báo cáo.
- Chuẩn bị demo.
- Chuẩn bị bảo vệ.
- Báo cáo với cán bộ hướng dẫn.

## 3.2. Out of Scope

`TBD theo tài liệu`: Tài liệu không quy định danh sách chức năng ngoài phạm vi. Do đó không tự bổ sung danh sách công nghệ/chức năng ngoài nội dung đã ghi.

---

# 4. ACTORS / USERS

| Actor | Căn cứ trong tài liệu | Phạm vi |
|---|---|---|
| Người dùng hệ thống | Tuần 2: xác định các đối tượng sử dụng hệ thống | Chức năng tương ứng được xác định trong phân tích |
| Admin | Tuần 2: xác định các đối tượng sử dụng hệ thống | Chức năng tương ứng được xác định trong phân tích |

> **TBD:** Tài liệu không mô tả chi tiết quyền của từng actor ở mức field/API.

---

# 5. REQUIREMENTS

## 5.1. Functional Requirements

### REQ-F-001 — Khảo sát website doanh nghiệp

Thực hiện khảo sát một số website doanh nghiệp để tham khảo cách tổ chức nội dung và chức năng.

### REQ-F-002 — Xác định mục tiêu và phạm vi

Thống nhất mục tiêu, phạm vi và kế hoạch thực hiện dự án.

### REQ-F-003 — Phân tích yêu cầu nghiệp vụ

Phân tích yêu cầu nghiệp vụ và các chức năng chính của website.

### REQ-F-004 — Xác định đối tượng sử dụng

Xác định các đối tượng sử dụng hệ thống và phạm vi chức năng tương ứng.

### REQ-F-005 — Phân tích dữ liệu

Xác định các nhóm dữ liệu cần quản lý.

### REQ-F-006 — Use Case

Xây dựng Use Case Diagram và mô tả các chức năng chính.

### REQ-F-007 — Activity

Phân tích luồng xử lý và xây dựng Activity Diagram cho các chức năng chính.

### REQ-F-008 — Database Design

Thiết kế sơ đồ/cấu trúc cơ sở dữ liệu và xác định thực thể, thuộc tính, mối quan hệ.

### REQ-F-009 — Class Diagram

Thiết kế Class Diagram và kiểm tra sự phù hợp với phần triển khai.

### REQ-F-010 — Website UI

Triển khai các trang và nội dung chính của website theo thiết kế đã thống nhất.

### REQ-F-011 — Nội dung chính

Phạm vi nội dung được tài liệu ghi nhận gồm giới thiệu doanh nghiệp, dịch vụ, tin tức, hình ảnh, liên hệ và các nội dung liên quan.

### REQ-F-012 — Database Implementation

Xây dựng cơ sở dữ liệu, tạo bảng, thiết lập quan hệ và có dữ liệu mẫu.

### REQ-F-013 — Website–Database Integration

Kết nối website với cơ sở dữ liệu.

### REQ-F-014 — Data Management

Kiểm tra các chức năng quản lý dữ liệu và quá trình trao đổi dữ liệu giữa các thành phần.

### REQ-F-015 — Contact/Data Processing

Hoàn thiện các chức năng liên quan đến liên hệ và xử lý dữ liệu.

### REQ-F-016 — Functional Testing

Kiểm thử các chức năng chính và luồng xử lý nghiệp vụ.

### REQ-F-017 — Data Validation

Kiểm tra tính chính xác của dữ liệu.

### REQ-F-018 — Responsive/Browser Testing

Kiểm tra giao diện trên máy tính, máy tính bảng, điện thoại và các trình duyệt khác nhau.

### REQ-F-019 — Final Review

Rà soát toàn bộ website, chức năng, giao diện và dữ liệu trước khi kết thúc.

### REQ-F-020 — Documentation/Report

Hoàn thiện tài liệu phân tích, thiết kế, kiểm thử, báo cáo và nội dung demo/bảo vệ.

## 5.2. Non-functional Requirements

### REQ-NF-001 — Consistency

Tài liệu, giao diện, chức năng và cơ sở dữ liệu phải được đối chiếu để bảo đảm thống nhất.

### REQ-NF-002 — Responsive

Website phải được kiểm tra trên nhiều kích thước màn hình.

### REQ-NF-003 — Browser Compatibility

Website phải được kiểm tra trên nhiều trình duyệt.

### REQ-NF-004 — Stability

Website được kiểm tra và khắc phục lỗi để hoạt động ổn định hơn trên môi trường kiểm tra.

### REQ-NF-005 — Documentation Completeness

Bộ tài liệu phân tích, thiết kế và kiểm thử phải được hoàn thiện.

## 5.3. Business Rules

### BR-001

Phần triển khai phải bám sát mục tiêu, phạm vi và yêu cầu đã thống nhất.

### BR-002

Tài liệu phân tích, giao diện và cơ sở dữ liệu phải được kiểm tra sự phù hợp.

### BR-003

Dữ liệu phải được kiểm tra về tính chính xác trong quá trình kiểm thử.

### BR-004

Lỗi sau khi chỉnh sửa phải được kiểm tra lại.

### BR-005

Trước khi kết thúc dự án phải rà soát toàn bộ website, chức năng, giao diện và dữ liệu.

---

# 6. SYSTEM DESIGN DELIVERABLES

## 6.1. Use Case

- Xác định actor.
- Xác định Use Case.
- Vẽ Use Case Diagram.
- Mô tả chức năng.

## 6.2. Activity

- Chọn các chức năng chính.
- Phân tích luồng xử lý.
- Vẽ Activity Diagram.

## 6.3. Database

- Xác định thực thể.
- Xác định thuộc tính.
- Xác định quan hệ.
- Hoàn thiện sơ đồ CSDL.
- Xây dựng bảng.
- Tạo dữ liệu mẫu.

## 6.4. Class Diagram

- Xác định lớp.
- Xác định quan hệ giữa các lớp.
- Hoàn thiện Class Diagram.
- Đối chiếu với triển khai thực tế.

---

# 7. TECHNICAL PLAN

> **Quan trọng:** `okl.docx` không ghi tên cụ thể của Node.js, PHP, Express, React hay framework khác. Vì vậy phần này chỉ xác định các lớp công việc mà tài liệu thực sự yêu cầu.

## 7.1. Frontend

- Xây dựng các giao diện chính.
- Thống nhất bố cục.
- Kiểm tra nhiều kích thước màn hình.
- Kiểm tra nhiều trình duyệt.

## 7.2. Backend / Integration

- Kết nối website với CSDL.
- Trao đổi dữ liệu giữa các thành phần.
- Chức năng quản lý dữ liệu.
- Xử lý chức năng liên hệ và dữ liệu.

**Framework:** `TBD`

## 7.3. Database

- Xây dựng các bảng.
- Thiết lập quan hệ.
- Tạo dữ liệu mẫu.
- Kiểm tra tính chính xác và thống nhất dữ liệu.

---

# 8. EPIC BREAKDOWN

## EPIC-001 — Khảo sát và xác định yêu cầu

**Objective:** Hiểu dự án, mục tiêu, phạm vi và chức năng.

**Dependencies:** None.

**Output:** Khảo sát + yêu cầu + phạm vi + kế hoạch.

## EPIC-002 — Phân tích và thiết kế hệ thống

**Objective:** Hoàn thiện bộ tài liệu phân tích và thiết kế.

**Dependencies:** EPIC-001.

**Output:** Use Case + Activity + Database Design + Class Diagram.

## EPIC-003 — Xây dựng cơ sở dữ liệu

**Objective:** Triển khai CSDL theo mô hình đã thiết kế.

**Dependencies:** EPIC-002.

**Output:** Bảng + quan hệ + dữ liệu mẫu.

## EPIC-004 — Xây dựng website

**Objective:** Triển khai các trang và nội dung chính.

**Dependencies:** EPIC-001, EPIC-002.

**Output:** Website UI.

## EPIC-005 — Tích hợp website và CSDL

**Objective:** Kết nối các thành phần và hoàn thiện xử lý dữ liệu.

**Dependencies:** EPIC-003, EPIC-004.

**Output:** Website hoạt động với CSDL.

## EPIC-006 — Kiểm thử và sửa lỗi

**Objective:** Kiểm thử toàn hệ thống và khắc phục lỗi.

**Dependencies:** EPIC-005.

**Output:** Test results + fixed issues.

## EPIC-007 — Hoàn thiện và báo cáo

**Objective:** Hoàn thiện sản phẩm, tài liệu và trình bày.

**Dependencies:** EPIC-006.

**Output:** Website + tài liệu + báo cáo + demo.

---

# 9. DETAILED BACKLOG

## EPIC-001

### STORY-001 — Khảo sát website doanh nghiệp

- Khảo sát một số website.
- Tham khảo cách tổ chức nội dung.
- Tham khảo cách tổ chức chức năng.
- Tổng hợp kết quả.

### STORY-002 — Thống nhất mục tiêu và phạm vi

- Họp nhóm.
- Thống nhất mục tiêu.
- Thống nhất phạm vi.
- Thống nhất kế hoạch.
- Tổng hợp yêu cầu chính.

## EPIC-002

### STORY-003 — Phân tích yêu cầu nghiệp vụ

- Phân tích yêu cầu.
- Xác định chức năng.
- Xác định đối tượng sử dụng.
- Xác định phạm vi chức năng.
- Xác định nhóm dữ liệu.

### STORY-004 — Xây dựng Use Case

- Xác định actor.
- Xác định Use Case.
- Vẽ sơ đồ.
- Mô tả chức năng.
- Review và điều chỉnh.

### STORY-005 — Xây dựng Activity

- Xác định chức năng chính.
- Phân tích luồng xử lý.
- Vẽ Activity Diagram.
- Đối chiếu nghiệp vụ.

### STORY-006 — Thiết kế cơ sở dữ liệu

- Xác định thực thể.
- Xác định thuộc tính.
- Xác định mối quan hệ.
- Hoàn thiện sơ đồ CSDL.
- Kiểm tra cấu trúc.

### STORY-007 — Thiết kế Class Diagram

- Xác định lớp.
- Xác định quan hệ.
- Vẽ Class Diagram.
- Đối chiếu với triển khai.

## EPIC-003

### STORY-008 — Xây dựng database

- Tạo database.
- Tạo bảng.
- Thiết lập quan hệ.
- Tạo dữ liệu mẫu.
- Kiểm tra dữ liệu.

### STORY-009 — Kiểm tra sự phù hợp của CSDL

- Đối chiếu CSDL với phân tích.
- Đối chiếu CSDL với giao diện.
- Điều chỉnh điểm chưa phù hợp.

## EPIC-004

### STORY-010 — Trang chủ

- Triển khai bố cục.
- Triển khai nội dung.
- Kiểm tra hiển thị.

### STORY-011 — Giới thiệu doanh nghiệp

- Triển khai nội dung.
- Bố trí theo thiết kế.
- Kiểm tra bố cục.

### STORY-012 — Dịch vụ

- Triển khai nội dung dịch vụ.
- Hoàn thiện bố cục.
- Kiểm tra hiển thị.

### STORY-013 — Tin tức

- Triển khai nội dung tin tức.
- Kiểm tra hiển thị.
- Chỉnh sửa.

### STORY-014 — Hình ảnh

- Triển khai khu vực/nội dung hình ảnh theo thiết kế.
- Kiểm tra hiển thị.

### STORY-015 — Liên hệ

- Hoàn thiện trang liên hệ.
- Hoàn thiện xử lý liên hệ.
- Kiểm tra dữ liệu.

### STORY-016 — Responsive và Browser

- Kiểm tra desktop.
- Kiểm tra tablet.
- Kiểm tra mobile.
- Kiểm tra nhiều trình duyệt.
- Sửa lỗi hiển thị.

## EPIC-005

### STORY-017 — Kết nối website với CSDL

- Thiết lập kết nối.
- Kiểm tra trao đổi dữ liệu.
- Kiểm tra dữ liệu hiển thị.
- Điều chỉnh lỗi tích hợp.

### STORY-018 — Kiểm tra chức năng quản lý dữ liệu

- Kiểm tra các chức năng quản lý.
- Kiểm tra dữ liệu.
- Ghi nhận lỗi.
- Chỉnh sửa.
- Kiểm tra lại.

### STORY-019 — Hoàn thiện liên hệ và xử lý dữ liệu

- Hoàn thiện chức năng liên hệ.
- Kiểm tra xử lý dữ liệu.
- Kiểm tra sau tích hợp.

## EPIC-006

### STORY-020 — Kiểm thử tổng thể

- Test chức năng chính.
- Test luồng nghiệp vụ.
- Test dữ liệu.
- Tổng hợp lỗi.

### STORY-021 — Kiểm thử giao diện và trình duyệt

- Test desktop.
- Test tablet.
- Test mobile.
- Test trình duyệt.
- Ghi nhận lỗi.

### STORY-022 — Sửa lỗi và kiểm tra lại

- Tổng hợp lỗi.
- Phối hợp chỉnh sửa.
- Kiểm tra lại chức năng.
- Kiểm tra lại dữ liệu.
- Regression check.

## EPIC-007

### STORY-023 — Final Review

- Rà soát website.
- Rà soát chức năng.
- Rà soát giao diện.
- Rà soát dữ liệu.

### STORY-024 — Hoàn thiện tài liệu

- Hoàn thiện tài liệu phân tích.
- Hoàn thiện tài liệu thiết kế.
- Hoàn thiện tài liệu kiểm thử.

### STORY-025 — Báo cáo và demo

- Tổng hợp kết quả.
- Hoàn thiện báo cáo thực tập.
- Chuẩn bị demo.
- Chuẩn bị bảo vệ.
- Báo cáo với cán bộ hướng dẫn.

---

# 10. IMPLEMENTATION ROADMAP — 8 TUẦN

## TUẦN 1 — 15/06/2026 - 21/06/2026

### Công việc

- Được giới thiệu về đơn vị, nội quy và quy trình làm việc.
- Tiếp nhận đề tài.
- Khảo sát một số website doanh nghiệp.
- Trao đổi và họp nhóm.
- Thống nhất mục tiêu, phạm vi, kế hoạch.
- Tìm hiểu công nghệ và công cụ dự kiến sử dụng.

### Kết quả

- Nắm quy trình làm việc.
- Xác định mục tiêu và phạm vi.
- Hoàn thành khảo sát ban đầu.
- Tổng hợp yêu cầu chính.
- Thống nhất kế hoạch.
- Chuẩn bị môi trường và công cụ.

**Epic:** EPIC-001.

---

## TUẦN 2 — 29/06/2026 - 05/07/2026

### Công việc

- Phân tích yêu cầu nghiệp vụ.
- Phân tích chức năng chính.
- Xác định đối tượng sử dụng.
- Xác định phạm vi chức năng.
- Phân tích nhóm dữ liệu.
- Thống nhất cấu trúc và bố cục giao diện tổng thể.
- Trao đổi và điều chỉnh yêu cầu.

### Kết quả

- Tài liệu phân tích yêu cầu ban đầu.
- Xác định chức năng và nhóm dữ liệu.
- Thống nhất định hướng giao diện.
- Các thành viên nắm rõ nội dung triển khai.

**Epic:** EPIC-001 + EPIC-002.

---

## TUẦN 3 — 29/06/2026 - 05/07/2026

### Công việc

- Xây dựng Use Case Diagram.
- Mô tả chức năng chính.
- Phân tích luồng xử lý.
- Thiết kế sơ đồ cơ sở dữ liệu.
- Xác định thực thể, thuộc tính, mối quan hệ.
- Bắt đầu triển khai giao diện các trang chính.
- Báo cáo tiến độ và tiếp nhận góp ý.

### Kết quả

- Hoàn thành Use Case Diagram.
- Hoàn thành mô tả chức năng.
- Hoàn thiện mô hình dữ liệu ban đầu.
- Bắt đầu hình thành giao diện website.
- Thống nhất nội dung phân tích và định hướng triển khai.

**Epic:** EPIC-002 + EPIC-004.

---

## TUẦN 4 — 06/07/2026 - 12/07/2026

### Công việc

- Thiết kế Activity Diagram.
- Hoàn thiện sơ đồ và cấu trúc CSDL.
- Triển khai các trang giao diện chính.
- Tập trung vào giới thiệu doanh nghiệp và dịch vụ.
- Xây dựng CSDL.
- Tạo các bảng và thiết lập quan hệ.
- Kiểm tra sự thống nhất giữa tài liệu, giao diện và CSDL.

### Kết quả

- Activity Diagram hoàn thành.
- Mô hình CSDL hoàn thành.
- Giao diện chính được triển khai.
- CSDL có dữ liệu mẫu.
- Các thành phần bước đầu thống nhất.

**Epic:** EPIC-002 + EPIC-003 + EPIC-004.

---

## TUẦN 5 — 13/07/2026 - 19/07/2026

### Công việc

- Hoàn thiện tài liệu thiết kế.
- Kiểm tra phù hợp giữa phân tích và triển khai.
- Hoàn thiện tin tức, hình ảnh và nội dung liên quan.
- Kết nối website với CSDL.
- Kiểm tra chức năng quản lý dữ liệu.
- Kiểm tra trao đổi dữ liệu giữa các thành phần.
- Tiếp nhận ý kiến điều chỉnh.

### Kết quả

- Tài liệu phân tích và thiết kế tiếp tục được hoàn thiện.
- Trang/chức năng chính được triển khai tương đối đầy đủ.
- Website bước đầu kết nối CSDL.
- Chức năng quản lý dữ liệu được kiểm tra.
- Phần triển khai bám sát yêu cầu.

**Epic:** EPIC-003 + EPIC-004 + EPIC-005.

---

## TUẦN 6 — 20/07/2026 - 26/07/2026

### Công việc

- Theo dõi và hoàn thiện quá trình phát triển.
- Đối chiếu sản phẩm với tài liệu.
- Hoàn thiện chức năng liên hệ và xử lý dữ liệu.
- Kiểm tra nhiều kích thước màn hình.
- Kiểm tra nhiều trình duyệt.
- Kiểm tra/cập nhật dữ liệu.
- Xử lý lỗi phát sinh trong tích hợp.

### Kết quả

- Website hoàn thiện về cơ bản.
- Giao diện, chức năng và CSDL được tích hợp.
- Lỗi được phát hiện và khắc phục.
- Website hoạt động ổn định hơn.
- Hồ sơ phân tích và thiết kế được hoàn thiện.

**Epic:** EPIC-005 + EPIC-006.

---

## TUẦN 7 — 27/07/2026 - 02/08/2026

### Công việc

- Kiểm thử tổng thể website.
- Kiểm tra chức năng chính.
- Kiểm tra luồng xử lý nghiệp vụ.
- Kiểm tra tính chính xác dữ liệu.
- Kiểm tra desktop/tablet/mobile.
- Kiểm tra các trình duyệt.
- Tổng hợp lỗi.
- Phối hợp chỉnh sửa.
- Kiểm tra lại CSDL và chức năng quản lý.
- Báo cáo kết quả kiểm thử.

### Kết quả

- Hoàn thành kiểm thử các chức năng chính.
- Lỗi được phát hiện, tổng hợp và khắc phục.
- Giao diện được điều chỉnh.
- Dữ liệu và chức năng ổn định hơn.
- Website sẵn sàng bước hoàn thiện cuối.

**Epic:** EPIC-006.

---

## TUẦN 8 — 03/08/2026 - 09/08/2026

### Công việc

- Rà soát toàn bộ website.
- Rà soát chức năng, giao diện và dữ liệu.
- Hoàn thiện tài liệu phân tích.
- Hoàn thiện tài liệu thiết kế.
- Hoàn thiện tài liệu kiểm thử.
- Tổng hợp kết quả thực tập.
- Hoàn thiện báo cáo.
- Chuẩn bị demo và bảo vệ.
- Báo cáo kết quả với cán bộ hướng dẫn.

### Kết quả

- Website hoàn thiện.
- Bộ tài liệu hoàn chỉnh.
- Báo cáo thực tập hoàn thành.
- Nội dung demo/bảo vệ đầy đủ.
- Hoàn thành quá trình thực tập.

**Epic:** EPIC-007.

---

# 11. DEPENDENCY MAP

```text
EPIC-001 Khảo sát + Requirements
             |
             v
EPIC-002 Analysis + Design
             |
       +-----+------+
       |            |
       v            v
EPIC-003        EPIC-004
Database        Website
       |            |
       +-----+------+
             |
             v
       EPIC-005 Integration
             |
             v
       EPIC-006 Testing
             |
             v
       EPIC-007 Finalization
```

### Hard dependencies

- EPIC-002 phụ thuộc EPIC-001.
- EPIC-003 phụ thuộc EPIC-002.
- EPIC-004 phụ thuộc EPIC-001/002.
- EPIC-005 phụ thuộc EPIC-003/004.
- EPIC-006 phụ thuộc EPIC-005.
- EPIC-007 phụ thuộc EPIC-006.

---

# 12. ACCEPTANCE CRITERIA

## AC-001 — Requirements

- Mục tiêu được xác định.
- Phạm vi được thống nhất.
- Chức năng chính được xác định.
- Nhóm dữ liệu được xác định.

## AC-002 — Analysis & Design

- Use Case hoàn thành.
- Activity hoàn thành.
- Database design hoàn thành.
- Class Diagram hoàn thành.
- Tài liệu được đối chiếu với phần triển khai.

## AC-003 — Website

- Các trang/nội dung chính được triển khai.
- Giao diện phù hợp định hướng thiết kế.
- Các thành phần được thống nhất.

## AC-004 — Database

- CSDL được xây dựng.
- Bảng được tạo.
- Quan hệ được thiết lập.
- Có dữ liệu mẫu.

## AC-005 — Integration

- Website kết nối CSDL.
- Trao đổi dữ liệu được kiểm tra.
- Chức năng quản lý dữ liệu được kiểm tra.
- Chức năng liên hệ và xử lý dữ liệu được kiểm tra.

## AC-006 — Responsive / Browser

- Kiểm tra desktop.
- Kiểm tra tablet.
- Kiểm tra mobile.
- Kiểm tra nhiều trình duyệt.

## AC-007 — Testing

- Chức năng chính được kiểm thử.
- Luồng nghiệp vụ được kiểm tra.
- Dữ liệu được kiểm tra.
- Lỗi được tổng hợp và sửa.
- Có kiểm tra lại sau sửa.

## AC-008 — Final Delivery

- Website được rà soát toàn bộ.
- Tài liệu hoàn thiện.
- Báo cáo hoàn thiện.
- Demo/bảo vệ được chuẩn bị.

---

# 13. DEFINITION OF DONE

## Requirement

- Mục tiêu/phạm vi được thống nhất.
- Chức năng và nhóm dữ liệu được xác định.

## Analysis

- Use Case hoàn thành.
- Activity hoàn thành.
- Database design hoàn thành.
- Class Diagram hoàn thành.

## Website

- Các trang chính hoàn thành.
- Giao diện được kiểm tra.
- Responsive được kiểm tra.
- Browser compatibility được kiểm tra.

## Database

- CSDL hoạt động.
- Bảng/quan hệ được triển khai.
- Có dữ liệu mẫu.
- Dữ liệu được kiểm tra.

## Integration

- Website kết nối CSDL.
- Chức năng quản lý dữ liệu được kiểm tra.
- Liên hệ/xử lý dữ liệu được hoàn thiện.

## QA

- Functional testing hoàn thành.
- UI/browser testing hoàn thành.
- Dữ liệu được kiểm tra.
- Lỗi đã xử lý hoặc có trạng thái rõ ràng.
- Regression check hoàn thành.

## Documentation

- Tài liệu phân tích hoàn thành.
- Tài liệu thiết kế hoàn thành.
- Tài liệu kiểm thử hoàn thành.
- Báo cáo hoàn thành.
- Demo/bảo vệ sẵn sàng.

---

# 14. RISK REGISTER

| Risk ID | Risk | Probability | Impact | Mitigation |
|---|---|---|---|---|
| RISK-001 | Phân tích không khớp triển khai | Medium | High | Đối chiếu tài liệu và sản phẩm ở từng giai đoạn |
| RISK-002 | Lỗi tích hợp website và CSDL | Medium | High | Kiểm tra kết nối và trao đổi dữ liệu sớm |
| RISK-003 | Lỗi giao diện trên thiết bị/trình duyệt | High | Medium | Kiểm tra nhiều kích thước và trình duyệt |
| RISK-004 | Dữ liệu không chính xác | Medium | High | Kiểm tra dữ liệu trong giai đoạn testing |
| RISK-005 | Lỗi còn tồn tại trước hoàn thiện | Medium | High | Có final review và regression |
| RISK-006 | Chậm hoàn thiện tài liệu/báo cáo | Medium | Medium | Theo dõi tiến độ tài liệu trong toàn bộ dự án |

---

# 15. OPEN QUESTIONS

### Q-001 — Công nghệ cụ thể của Backend/Frontend

Tài liệu `okl.docx` không ghi tên framework hoặc ngôn ngữ cụ thể.

**Status:** TBD

### Q-002 — Kiến trúc Backend

Tài liệu không mô tả kiến trúc, API, framework hoặc cấu trúc mã nguồn Backend.

**Status:** TBD

### Q-003 — Database Schema chi tiết

Tài liệu không cung cấp toàn bộ tên cột, kiểu dữ liệu và constraint ở mức triển khai.

**Status:** TBD

### Q-004 — Quyền cụ thể của Admin/Người dùng

Tài liệu xác định đối tượng sử dụng nhưng chưa mô tả quyền chi tiết.

**Status:** TBD

### Q-005 — Danh sách chức năng chi tiết từng màn hình

Tài liệu nêu các nhóm chức năng/nội dung nhưng chưa có đặc tả màn hình chi tiết.

**Status:** TBD

---

# 16. JIRA-READY BACKLOG

| ID | Type | Epic | Title | Component | Dependency | Priority | Estimate | Status |
|---|---|---|---|---|---|---|---|---|
| EPIC-001 | EPIC | EPIC-001 | Khảo sát và yêu cầu | BA | - | MUST | TBD | TODO |
| STORY-001 | STORY | EPIC-001 | Khảo sát website doanh nghiệp | BA | - | MUST | TBD | TODO |
| STORY-002 | STORY | EPIC-001 | Thống nhất mục tiêu và phạm vi | BA | STORY-001 | MUST | TBD | TODO |
| EPIC-002 | EPIC | EPIC-002 | Phân tích và thiết kế | BA | EPIC-001 | MUST | TBD | TODO |
| STORY-003 | STORY | EPIC-002 | Phân tích yêu cầu nghiệp vụ | BA | STORY-002 | MUST | TBD | TODO |
| STORY-004 | STORY | EPIC-002 | Use Case | BA | STORY-003 | MUST | TBD | TODO |
| STORY-005 | STORY | EPIC-002 | Activity | BA | STORY-004 | MUST | TBD | TODO |
| STORY-006 | STORY | EPIC-002 | Database Design | DATABASE | STORY-003 | MUST | TBD | TODO |
| STORY-007 | STORY | EPIC-002 | Class Diagram | BA | STORY-005/006 | MUST | TBD | TODO |
| EPIC-003 | EPIC | EPIC-003 | Xây dựng CSDL | DATABASE | EPIC-002 | MUST | TBD | TODO |
| STORY-008 | STORY | EPIC-003 | Xây dựng database | DATABASE | STORY-006 | MUST | TBD | TODO |
| STORY-009 | STORY | EPIC-003 | Kiểm tra sự phù hợp CSDL | DATABASE/QA | STORY-008 | MUST | TBD | TODO |
| EPIC-004 | EPIC | EPIC-004 | Xây dựng website | FRONTEND | EPIC-001/002 | MUST | TBD | TODO |
| STORY-010 | STORY | EPIC-004 | Trang chủ | FRONTEND | EPIC-002 | MUST | TBD | TODO |
| STORY-011 | STORY | EPIC-004 | Giới thiệu doanh nghiệp | FRONTEND | STORY-010 | MUST | TBD | TODO |
| STORY-012 | STORY | EPIC-004 | Dịch vụ | FRONTEND | STORY-010 | MUST | TBD | TODO |
| STORY-013 | STORY | EPIC-004 | Tin tức | FRONTEND | STORY-012 | MUST | TBD | TODO |
| STORY-014 | STORY | EPIC-004 | Hình ảnh | FRONTEND | STORY-012 | MUST | TBD | TODO |
| STORY-015 | STORY | EPIC-004 | Liên hệ | FRONTEND | STORY-010 | MUST | TBD | TODO |
| STORY-016 | STORY | EPIC-004 | Responsive và Browser | FRONTEND/QA | STORY-010..015 | MUST | TBD | TODO |
| EPIC-005 | EPIC | EPIC-005 | Tích hợp website và CSDL | BACKEND/INTEGRATION | EPIC-003/004 | MUST | TBD | TODO |
| STORY-017 | STORY | EPIC-005 | Kết nối website với CSDL | BACKEND | STORY-008 | MUST | TBD | TODO |
| STORY-018 | STORY | EPIC-005 | Quản lý dữ liệu | BACKEND/QA | STORY-017 | MUST | TBD | TODO |
| STORY-019 | STORY | EPIC-005 | Liên hệ và xử lý dữ liệu | BACKEND | STORY-017 | MUST | TBD | TODO |
| EPIC-006 | EPIC | EPIC-006 | Kiểm thử và sửa lỗi | QA | EPIC-005 | MUST | TBD | TODO |
| STORY-020 | STORY | EPIC-006 | Functional Testing | QA | STORY-018/019 | MUST | TBD | TODO |
| STORY-021 | STORY | EPIC-006 | Responsive/Browser Testing | QA | STORY-016 | MUST | TBD | TODO |
| STORY-022 | STORY | EPIC-006 | Fix và Regression | QA | STORY-020/021 | MUST | TBD | TODO |
| EPIC-007 | EPIC | EPIC-007 | Hoàn thiện và báo cáo | DOCUMENTATION | EPIC-006 | MUST | TBD | TODO |
| STORY-023 | STORY | EPIC-007 | Final Review | QA | STORY-022 | MUST | TBD | TODO |
| STORY-024 | STORY | EPIC-007 | Hoàn thiện tài liệu | DOCUMENTATION | STORY-023 | MUST | TBD | TODO |
| STORY-025 | STORY | EPIC-007 | Báo cáo và Demo | DOCUMENTATION | STORY-024 | MUST | TBD | TODO |

---

# 17. TRACEABILITY MATRIX

| Requirement | Epic | Story | Status |
|---|---|---|---|
| REQ-F-001 | EPIC-001 | STORY-001 | TODO |
| REQ-F-002 | EPIC-001 | STORY-002 | TODO |
| REQ-F-003 | EPIC-002 | STORY-003 | TODO |
| REQ-F-004 | EPIC-002 | STORY-003/004 | TODO |
| REQ-F-005 | EPIC-002 | STORY-003/006 | TODO |
| REQ-F-006 | EPIC-002 | STORY-004 | TODO |
| REQ-F-007 | EPIC-002 | STORY-005 | TODO |
| REQ-F-008 | EPIC-002/003 | STORY-006/008 | TODO |
| REQ-F-009 | EPIC-002 | STORY-007 | TODO |
| REQ-F-010 | EPIC-004 | STORY-010..015 | TODO |
| REQ-F-011 | EPIC-004 | STORY-011..015 | TODO |
| REQ-F-012 | EPIC-003 | STORY-008 | TODO |
| REQ-F-013 | EPIC-005 | STORY-017 | TODO |
| REQ-F-014 | EPIC-005 | STORY-018 | TODO |
| REQ-F-015 | EPIC-005 | STORY-019 | TODO |
| REQ-F-016 | EPIC-006 | STORY-020 | TODO |
| REQ-F-017 | EPIC-006 | STORY-020 | TODO |
| REQ-F-018 | EPIC-006 | STORY-021 | TODO |
| REQ-F-019 | EPIC-007 | STORY-023 | TODO |
| REQ-F-020 | EPIC-007 | STORY-024/025 | TODO |
| REQ-NF-001 | EPIC-002/004/005 | STORY-003/016/017 | TODO |
| REQ-NF-002 | EPIC-004/006 | STORY-016/021 | TODO |
| REQ-NF-003 | EPIC-006 | STORY-021 | TODO |
| REQ-NF-004 | EPIC-005/006 | STORY-017/020 | TODO |
| REQ-NF-005 | EPIC-007 | STORY-024/025 | TODO |
| BR-001 | EPIC-001/002 | STORY-002/003 | TODO |
| BR-002 | EPIC-002/003/005 | STORY-006/008/017 | TODO |
| BR-003 | EPIC-006 | STORY-020 | TODO |
| BR-004 | EPIC-006 | STORY-022 | TODO |
| BR-005 | EPIC-007 | STORY-023 | TODO |

---

# 18. SOURCE-DERIVED TIMELINE NOTE

Tài liệu `okl.docx` ghi:

- Tuần 2: **29/06/2026 - 05/07/2026**.
- Tuần 3: **29/06/2026 - 05/07/2026**.

Đây là **mâu thuẫn ngày tháng tồn tại trong chính tài liệu**.

**Decision:** giữ nguyên mốc theo nguồn và đánh dấu `CONFLICT`, không tự sửa.

---

# 19. FINAL CONSISTENCY CHECK

- [x] Kế hoạch lấy `okl.docx` làm nguồn chính.
- [x] Bám đúng 8 tuần trong tài liệu.
- [x] Khảo sát được bao phủ.
- [x] Phân tích yêu cầu được bao phủ.
- [x] Use Case được bao phủ.
- [x] Activity được bao phủ.
- [x] Database Design được bao phủ.
- [x] Class Diagram được bao phủ.
- [x] Giao diện website được bao phủ.
- [x] Tin tức được bao phủ.
- [x] Hình ảnh được bao phủ.
- [x] Liên hệ được bao phủ.
- [x] Kết nối CSDL được bao phủ.
- [x] Kiểm thử được bao phủ.
- [x] Responsive/browser testing được bao phủ.
- [x] Sửa lỗi và final review được bao phủ.
- [x] Tài liệu, báo cáo, demo và bảo vệ được bao phủ.
- [x] Không tự xác định NodeJS/PHP/framework.
- [x] Không lấy công nghệ từ nhật ký khác.
- [x] Các chi tiết chưa có trong nguồn được đánh dấu TBD.
- [x] Mâu thuẫn về ngày được ghi nhận.

# END OF PROJECT PLAN
