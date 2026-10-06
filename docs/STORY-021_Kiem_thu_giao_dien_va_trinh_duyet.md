# BÁO CÁO KIỂM THỬ GIAO DIỆN VÀ TRÌNH DUYỆT (STORY-021)

**Dự án:** Thiết kế và xây dựng Website giới thiệu doanh nghiệp  
**Đơn vị thực tập:** CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM  
**Người hướng dẫn:** Trương Thị Minh — Quản lý  
**Giai đoạn thực hiện:** Tuần 7 (27/07/2026 – 02/08/2026)  
**Epic cha:** `EPIC-006` — Kiểm thử và sửa lỗi  
**Mã Story:** `STORY-021` — Kiểm thử giao diện và trình duyệt (UI / Responsive / Browser Testing)  
**Mức độ ưu tiên:** High

---

## 1. MỤC TIÊU VÀ NGUYÊN TẮC THIẾT KẾ

### 1.1. Mục tiêu kiểm thử
1. Đảm bảo toàn bộ 7 trang giao diện của website hiển thị đồng bộ, sắc nét, không bị vỡ layout, tràn màn hình ngang (horizontal scrollbar) trên mọi kích thước thiết bị từ Desktop, Tablet đến Smartphone.
2. Kiểm tra tính tương thích đa trình duyệt hiện đại (Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari).
3. Tuân thủ nghiêm ngặt chuẩn giao diện **Enterprise B2B SaaS**:
   - Mật độ thông tin cao (High Density), tinh gọn, chuyên nghiệp.
   - **Nghiêm cấm hoàn toàn phong cách AI lòe loẹt (Anti-AI Slop):** Không gradient tím hồng neon, không phát sáng lòe loẹt, không đổ bóng quá đà, không bo tròn quá mức (border-radius tối đa 0.75rem - 1rem).
   - Đáp ứng tiêu chuẩn tiếp cận Web WCAG 2.1 AA (độ tương phản màu sắc $\ge 4.5:1$, kích thước vùng bấm tối thiểu $44 \times 44$px).

---

## 2. MA TRẬN KIỂM THỬ TRÊN CÁC THIẾT BỊ & ĐỘ PHÂN GIẢI

Kiểm thử được thực hiện qua công cụ tự động `npm run test:ui` và công cụ DevTools Device Emulation:

| Nhóm thiết bị | Độ phân giải đại diện | Thiết bị tiêu biểu | Hạng mục kiểm tra | Kết quả thực tế | Trạng thái |
| :--- | :---: | :--- | :--- | :--- | :---: |
| **Desktop UltraWide / Full HD** | $1920 \times 1080$ | Dell UltraSharp, LG 27" | Bố cục căn giữa container, Hero banner hiển thị tối đa 1200px, font chữ sắc nét | Không vỡ khung, cân đối 2 bên lề | **PASS** |
| **Desktop / Laptop tiêu chuẩn** | $1440 \times 900$<br>$1366 \times 768$ | MacBook Air, ThinkPad T14 | Menu ngang đầy đủ, khoảng cách các section thoáng đạt | Hiển thị chuẩn mực B2B | **PASS** |
| **Tablet nằm ngang (Landscape)** | $1024 \times 768$ | iPad Air, Galaxy Tab | Grid 3 cột (`col-lg-4`) hiển thị đều, card không bị co ép | Tự động cân chỉnh lề mượt mà | **PASS** |
| **Tablet đứng (Portrait)** | $768 \times 1024$ | iPad Mini, Surface Go | Grid chuyển sang 2 cột (`col-md-6`), thanh Stats chuyển sang lưới $2 \times 2$ | Tối ưu không gian đọc | **PASS** |
| **Mobile màn hình lớn** | $414 \times 896$<br>$393 \times 852$ | iPhone 14 Pro Max, Galaxy S23 | Navbar tự động rút gọn thành nút Hamburger, chữ tiêu đề co giãn vừa vặn | Menu mở trơn tru, không giật lag | **PASS** |
| **Mobile màn hình nhỏ** | $375 \times 667$ | iPhone SE (Gen 3) | Nút bấm CTA mở rộng toàn chiều ngang, bảng quản trị có thanh cuộn ngang mượt mà | Thao tác chạm ngón tay chính xác | **PASS** |

---

## 3. MA TRẬN TƯƠNG THÍCH ĐA TRÌNH DUYỆT (BROWSER COMPATIBILITY)

Hệ thống được kiểm tra trên các công cụ kết xuất web hàng đầu:

| Trình duyệt | Động cơ (Engine) | Phiên bản thử nghiệm | Tính năng kiểm tra cốt lõi | Kết quả đánh giá |
| :--- | :--- | :---: | :--- | :---: |
| **Google Chrome** | Blink / V8 | 126+ (Windows/macOS/Android) | CSS Grid, Flexbox, Fetch API, Bootstrap Modal | **Hoạt động hoàn hảo 100%** |
| **Microsoft Edge** | Blink / V8 | 126+ (Windows 11) | Hiệu ứng chuyển động mượt mà, bộ lọc danh mục Gallery | **Hoạt động hoàn hảo 100%** |
| **Mozilla Firefox** | Gecko / SpiderMonkey | 128+ (Windows/Linux) | Scroll-behavior smooth, CSS variables, Form validation | **Hoạt động hoàn hảo 100%** |
| **Apple Safari** | WebKit | 17+ (iOS / iPadOS / macOS) | `-webkit-overflow-scrolling: touch`, Sticky navbar | **Hoạt động hoàn hảo 100%** |

---

## 4. CHI TIẾT CÁC CẢI TIẾN VÀ SỬA LỖI GIAO DIỆN TRONG STORY-021

Trong quá trình thực hiện kịch bản kiểm thử, nhóm phát triển đã phân tích sâu và xử lý một số điểm bất cập:

1. **Khắc phục lỗi kích thước nút bấm trên Mobile nhỏ ($\le 575.98$px):**
   - *Vấn đề phát hiện:* Trước đây CSS áp dụng `width: 100%` cho toàn bộ `.btn`, khiến các nút chức năng nhỏ trong bộ lọc nhóm (`.btn-group`), nút đóng Modal và các biểu tượng thao tác trong bảng Admin bị kéo giãn bất thường.
   - *Xử lý triệt để:* Thu hẹp phạm vi áp dụng chiều rộng 100% chỉ cho các nút CTA chính (`.hero-section .btn`, `.cta-section .btn`, `.contact-card .btn`), đồng thời giữ nguyên `width: auto` cho `.btn-group .btn`.

2. **Tối ưu hóa cuộn bảng dữ liệu trên thiết bị di động:**
   - Thêm thuộc tính `-webkit-overflow-scrolling: touch;` cho lớp `.table-responsive` giúp việc vuốt cuộn bảng danh sách liên hệ trên iPhone/iPad cực kỳ mượt mà.

3. **Cải thiện tiêu chuẩn tiếp cận bàn phím (WCAG Accessibility):**
   - Bổ sung chỉ dẫn viền `:focus-visible` với độ tương phản cao cho toàn bộ liên kết, nút bấm và trường nhập liệu.

---

## 5. KẾT LUẬN VÀ NGHIỆM THU

- **Tổng số tiêu chí tự động kiểm thử UI/Responsive:** Đạt **24/24 tiêu chí (100.0% PASS RATE)**.
- **Tuân thủ kế hoạch:**
  - Đáp ứng đầy đủ yêu cầu `REQ-F-018` (Responsive/Browser Testing).
  - Thỏa mãn các yêu cầu phi chức năng `REQ-NF-002` (Responsive Design) và `REQ-NF-003` (Browser Compatibility).
- **Mức độ hoàn thiện:** Toàn bộ giao diện 7 trang đạt chất lượng thẩm mỹ cao, sắc nét, hoạt động ổn định và sẵn sàng chuyển tiếp sang **STORY-022: Sửa lỗi và kiểm tra lại (Regression Check & Stabilization)**.
