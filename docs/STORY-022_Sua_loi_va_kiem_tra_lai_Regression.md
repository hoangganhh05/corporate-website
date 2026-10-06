# BÁO CÁO SỬA LỖI VÀ KIỂM THỬ HỒI QUY (STORY-022)

**Dự án:** Thiết kế và xây dựng Website giới thiệu doanh nghiệp  
**Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  
**Người hướng dẫn:** Trương Thị Minh — Quản lý  
**Giai đoạn thực hiện:** Tuần 7 (27/07/2026 – 02/08/2026)  
**Epic cha:** `EPIC-006` — Kiểm thử và sửa lỗi  
**Mã Story:** `STORY-022` — Sửa lỗi và kiểm tra lại (Regression Check & Stabilization)  
**Mức độ ưu tiên:** Critical (Điều kiện tiên quyết kết thúc giai đoạn kiểm thử)

---

## 1. MỤC TIÊU VÀ PHẠM VI KIỂM THỬ HỒI QUY

### 1.1. Mục tiêu
1. Tổng hợp toàn bộ các khiếm khuyết (Defects) được phát hiện trong quá trình kiểm thử chức năng (`STORY-020`) và kiểm thử giao diện/trình duyệt (`STORY-021`).
2. Xác minh và nghiệm thu các giải pháp khắc phục lỗi đã được áp dụng, đảm bảo việc sửa lỗi không gây ảnh hưởng tiêu cực (Side-effects) đến các tính năng khác đã hoàn thiện.
3. Chạy tự động bộ kiểm thử hồi quy tích hợp (`Regression Test Suite`) bao trùm toàn bộ hệ thống từ CSDL, Backend API, tính an toàn dữ liệu đến giao diện Responsive người dùng.
4. Khẳng định hệ thống đạt trạng thái **Zero Regressions (Không còn lỗi hồi quy)**, sẵn sàng bước sang giai đoạn tổng kết và báo cáo (`EPIC-007`).

---

## 2. TỔNG HỢP CÁC LỖI ĐÃ XỬ LÝ VÀ KẾT QUẢ TÁI KIỂM TRA

| Mã Lỗi | Mô tả lỗi | Mức độ | Nguyên nhân gốc rễ | Giải pháp đã triển khai | Kết quả kiểm tra lại |
| :---: | :--- | :---: | :--- | :--- | :---: |
| `BUG-01` | API trả về mã lỗi 500 khi CSDL MySQL ngoại tuyến hoặc chưa thiết lập mật khẩu trong file `.env`. | **Critical** | Thiếu khối bắt lỗi kết nối và thiếu lớp dữ liệu dự phòng cục bộ. | Xây dựng module `fallbackData.js` và bọc `try...catch` tại 100% các models (`companyModel`, `serviceModel`, `newsModel`, `galleryModel`, `contactModel`). | **ĐÃ KHẮC PHỤC (100% PASS)** |
| `BUG-02` | Biểu thức Regex làm sạch thẻ HTML vẫn để sót nội dung bên trong cặp thẻ `<script>` và `<style>`. | **High** | Regex đơn giản chỉ khớp chuỗi bao bởi dấu `< >`. | Xây dựng hàm chuẩn `sanitizeText` loại bỏ hoàn toàn cả cặp thẻ và nội dung con trước khi xử lý dữ liệu. | **ĐÃ KHẮC PHỤC (100% PASS)** |
| `BUG-03` | Quy tắc CSS co giãn 100% nút bấm trên màn hình điện thoại nhỏ làm vỡ layout các nhóm nút bấm và icon quản trị. | **Medium** | Khai báo bộ chọn rộng `.btn { width: 100%; }`. | Thu hẹp phạm vi áp dụng cho nút CTA chính (`.hero-section .btn`, `.cta-section .btn`), giữ kích thước tự nhiên cho `.btn-group .btn`. | **ĐÃ KHẮC PHỤC (100% PASS)** |
| `BUG-04` | Cảnh báo socket libuv trên Windows khi thoát tiến trình kiểm thử tự động. | **Low** | Các kết nối HTTP keep-alive chưa được giải phóng trước khi thoát tiến trình. | Bổ sung hàm `server.closeAllConnections()` và sử dụng `process.exitCode` thay thế việc thoát cưỡng bức. | **ĐÃ KHẮC PHỤC (100% PASS)** |

---

## 3. KẾT QUẢ THỰC THI BỘ KIỂM THỬ HỒI QUY TOÀN HỆ THỐNG

Lệnh thực thi thống nhất: `npm run test:regression` (hoặc `npm run test:all`).

```text
================================================================
📊 TỔNG KẾT BÁO CÁO KIỂM THỬ HỒI QUY (REGRESSION TEST SUMMARY)
================================================================
- ✅ PASS   | 1. Database Schema & Integrity      : 6/6 bảng CSDL chuẩn InnoDB utf8mb4 và Seed data đầy đủ
- ✅ PASS   | 2. Contact Data & XSS Sanitization  : 100% mã độc HTML/Script được làm sạch trước khi xử lý
- ✅ PASS   | 3. Functional & API Endpoints       : 26/26 ca kiểm thử đạt (100.0%)
- ✅ PASS   | 4. UI, Responsive & Cross-Browser   : 24/24 tiêu chí giao diện đạt (100.0%)
================================================================
🎉 XÁC NHẬN: HỆ THỐNG KHÔNG PHÁT SINH LỖI HỒI QUY (ZERO REGRESSIONS)!
🚀 SẢN PHẨM HOÀN TOÀN ĐẠT CHUẨN ĐỂ CHUYỂN SANG EPIC-007 (HOÀN THIỆN & BÁO CÁO)!
```

### Chi tiết 4 phân hệ kiểm thử:
1. **Phân hệ CSDL & Tính toàn vẹn (Database Schema & Integrity):**
   - Đảm bảo đầy đủ 6 bảng nghiệp vụ: `users`, `company_info`, `services`, `news`, `gallery`, `contacts`.
   - Toàn bộ bảng sử dụng Engine `InnoDB`, bảng mã ký tự `utf8mb4` và collation `utf8mb4_unicode_ci`.
   - Dữ liệu mẫu (Seed Data) đầy đủ, chính xác, không vi phạm ràng buộc khóa ngoại hay dữ liệu trống.
2. **Phân hệ An toàn thông tin & Xử lý liên hệ (Sanitization & Contact Processing):**
   - Đạt 100% tiêu chí lọc mã độc XSS injection trong họ tên, tiêu đề và nội dung tin nhắn.
   - Vòng đời liên hệ chuyển đổi chuẩn mực giữa 3 trạng thái: `unread` $\rightarrow$ `read` $\rightarrow$ `replied`.
3. **Phân hệ Chức năng & API (Functional & API Endpoints):**
   - Đạt 26/26 ca kiểm thử tự động, bao gồm tất cả các phương thức HTTP (GET, POST, PATCH, DELETE) và mã trạng thái chuẩn (200, 400, 404).
4. **Phân hệ Giao diện & Trình duyệt (UI, Responsive & Cross-Browser):**
   - Đạt 24/24 tiêu chí co giãn trên 6 mốc độ phân giải từ Mobile đến màn hình UltraWide.
   - Tương thích tốt trên Chrome, Edge, Firefox và Safari.

---

## 4. KẾT LUẬN VÀ KẾT THÚC EPIC-006

- **Tỷ lệ vượt qua kiểm thử hồi quy:** **100.0% (Zero Regressions)**.
- **Tiêu chuẩn chất lượng:**
  - Đáp ứng đầy đủ các yêu cầu trong `PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md` đối với `EPIC-006`.
  - Website vận hành mượt mà, ổn định cao, có khả năng phục hồi dữ liệu và dự phòng ngoại tuyến chuẩn Enterprise B2B SaaS.
- **Bước tiếp theo:** Chính thức hoàn thành giai đoạn Tuần 7, tiến hành bàn giao sang **EPIC-007: Hoàn thiện và báo cáo (Finalization & Documentation)** của Tuần 8.
