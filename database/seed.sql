-- ==============================================================================
-- DATABASE SEED DATA SKELETON
-- Đề tài: Thiết kế và xây dựng Website giới thiệu doanh nghiệp
-- Nguồn tham chiếu: PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md
-- Giai đoạn: Giai đoạn 1 — Project Foundation
--
-- Dữ liệu mẫu ban đầu để kiểm tra kết nối và truy vấn.
-- Bộ dữ liệu mẫu đầy đủ và chuẩn hóa sẽ được xây dựng tại EPIC-003 (STORY-008).
-- ==============================================================================

USE `company_intro_db`;

-- 1. Dữ liệu mẫu: Admin khởi tạo
-- Mật khẩu tạm thời: admin123 (sẽ được hash khi tích hợp chức năng bảo mật)
INSERT INTO `users` (`id`, `username`, `password`, `full_name`, `role`)
VALUES 
  (1, 'admin', 'admin123', 'Quản trị viên hệ thống', 'admin')
ON DUPLICATE KEY UPDATE `id`=`id`;

-- 2. Dữ liệu mẫu: Thông tin doanh nghiệp
INSERT INTO `company_info` (`id`, `company_name`, `about_text`, `address`, `phone`, `email`)
VALUES 
  (1, 'CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM', 'Công ty chuyên cung cấp các giải pháp công nghệ, phát triển phần mềm và dịch vụ chuyển đổi số.', 'Hà Nội, Việt Nam', '0123456789', 'contact@fft.com.vn')
ON DUPLICATE KEY UPDATE `id`=`id`;

-- 3. Dữ liệu mẫu: Dịch vụ
INSERT INTO `services` (`id`, `title`, `description`, `icon`)
VALUES 
  (1, 'Tư vấn giải pháp CNTT', 'Tư vấn kiến trúc hệ thống và chuyển đổi số cho doanh nghiệp.', 'bi-laptop'),
  (2, 'Thiết kế website doanh nghiệp', 'Xây dựng website giới thiệu doanh nghiệp chuẩn responsive và hiện đại.', 'bi-code-slash'),
  (3, 'Bảo trì & Vận hành hệ thống', 'Hỗ trợ kỹ thuật 24/7 và đảm bảo an toàn thông tin.', 'bi-gear')
ON DUPLICATE KEY UPDATE `id`=`id`;

-- 4. Dữ liệu mẫu: Tin tức
INSERT INTO `news` (`id`, `title`, `summary`, `content`, `thumbnail`)
VALUES 
  (1, 'Khởi động dự án Website Giới Thiệu Doanh Nghiệp', 'Dự án chính thức được khởi động theo kế hoạch 8 tuần.', 'Nội dung chi tiết về quá trình triển khai dự án website doanh nghiệp...', 'news-default.jpg')
ON DUPLICATE KEY UPDATE `id`=`id`;

-- 5. Dữ liệu mẫu: Hình ảnh hoạt động
INSERT INTO `gallery` (`id`, `title`, `image_url`, `description`)
VALUES 
  (1, 'Văn phòng làm việc', 'office-1.jpg', 'Không gian làm việc hiện đại tại công ty'),
  (2, 'Hoạt động nhóm', 'teamwork-1.jpg', 'Buổi họp trao đổi kỹ thuật của nhóm dự án')
ON DUPLICATE KEY UPDATE `id`=`id`;

-- 6. Dữ liệu mẫu: Liên hệ mẫu
INSERT INTO `contacts` (`id`, `full_name`, `email`, `phone`, `subject`, `message`, `status`)
VALUES 
  (1, 'Nguyễn Văn A', 'nguyenvana@example.com', '0987654321', 'Quan tâm dịch vụ thiết kế website', 'Xin chào, tôi muốn được tư vấn dịch vụ website cho doanh nghiệp.', 'unread')
ON DUPLICATE KEY UPDATE `id`=`id`;
