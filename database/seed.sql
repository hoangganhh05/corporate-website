-- ==============================================================================
-- DATABASE SEED DATA HOÀN THIỆN
-- Đề tài: Thiết kế và xây dựng Website giới thiệu doanh nghiệp
-- Khởi tạo dữ liệu mẫu thực tế phục vụ kiểm thử và chạy ứng dụng
-- ==============================================================================

USE `company_intro_db`;

-- 1. Dữ liệu mẫu: Admin khởi tạo
-- Mật khẩu khởi tạo: admin123 (bcrypt hash, cần đổi khi triển khai thực tế)
INSERT INTO `users` (`id`, `username`, `password`, `full_name`, `email`, `role`)
VALUES 
  (1, 'admin', '$2b$12$KhQ2fm4pg1DisGdL/JY8MOID4oZPUyA2d7EqkIPHeoY5rlMuoyWvS', 'Quản trị viên hệ thống', 'admin@fft.com.vn', 'admin')
ON DUPLICATE KEY UPDATE `password`=VALUES(`password`), `full_name`=VALUES(`full_name`), `email`=VALUES(`email`), `role`=VALUES(`role`);

-- 2. Dữ liệu mẫu: Thông tin doanh nghiệp
INSERT INTO `company_info` (`id`, `company_name`, `slogan`, `about_summary`, `about_detail`, `address`, `phone`, `email`, `working_hours`)
VALUES 
  (1, 
   'CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM', 
   'Tiên phong giải pháp công nghệ - Đồng hành cùng phát triển',
   'Công ty TNHH Công Nghệ FFT Việt Nam là đơn vị chuyên nghiệp trong lĩnh vực cung cấp giải pháp chuyển đổi số, thiết kế phần mềm và xây dựng website doanh nghiệp chất lượng cao.',
   'Được thành lập với sứ mệnh mang các giải pháp công nghệ hiện đại đến với cộng đồng doanh nghiệp Việt Nam, FFT Việt Nam không ngừng nghiên cứu và đổi mới sáng tạo. Chúng tôi sở hữu đội ngũ kỹ sư phần mềm giàu nhiệt huyết, quy trình làm việc chuẩn mực, cam kết mang đến giá trị thực chất và sự hài lòng cao nhất cho khách hàng.',
   'Văn phòng số 7 - tổ 97, Phường Phan Đình Phùng, Tỉnh Thái Nguyên',
   '0978078902',
   '',
   NULL)
ON DUPLICATE KEY UPDATE `company_name`=`company_name`;

-- 3. Dữ liệu mẫu: Dịch vụ & Giải pháp
INSERT INTO `services` (`id`, `title`, `slug`, `summary`, `description`, `icon`, `image_url`, `display_order`, `is_active`)
VALUES 
  (1, 
   'Tư vấn giải pháp CNTT', 
   'tu-van-giai-phap-cntt',
   'Khảo sát, đánh giá hiện trạng và tư vấn lộ trình chuyển đổi số toàn diện cho doanh nghiệp.',
   'Dịch vụ tư vấn CNTT của FFT Việt Nam giúp doanh nghiệp định hình kiến trúc hệ thống, lựa chọn ngăn xếp công nghệ tối ưu và xây dựng lộ trình số hóa khoa học, tiết kiệm chi phí và tăng tối đa hiệu suất vận hành.',
   'bi-laptop', 
   'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', 
   1, 
   1),
  (2, 
   'Thiết kế Website Doanh nghiệp', 
   'thiet-ke-website-doanh-nghiep',
   'Xây dựng website chuẩn SEO, responsive đa nền tảng và nhận diện thương hiệu chuyên nghiệp.',
   'Chúng tôi mang đến giải pháp website doanh nghiệp hiện đại, tốc độ tải trang vượt trội, giao diện tương thích hoàn hảo trên di động, máy tính bảng và máy tính để bàn, tích hợp hệ thống quản trị trực quan.',
   'bi-code-slash', 
   'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', 
   2, 
   1),
  (3, 
   'Bảo trì & Vận hành Hệ thống', 
   'bao-tri-van-hanh-he-thong',
   'Dịch vụ giám sát kỹ thuật 24/7, tối ưu hóa hiệu năng và bảo đảm an toàn dữ liệu.',
   'Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ sao lưu dữ liệu, vá lỗi bảo mật định kỳ và nâng cấp hệ thống liên tục, đảm bảo tính liên tục trong hoạt động sản xuất kinh doanh.',
   'bi-shield-check', 
   'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80', 
   3, 
   1)
ON DUPLICATE KEY UPDATE `slug`=`slug`;

-- 4. Không tạo News mẫu: chỉ hiển thị bài viết do quản trị viên xuất bản.
/*
INSERT INTO `news` (`id`, `author_id`, `title`, `slug`, `summary`, `content`, `thumbnail`, `views_count`, `is_published`)
VALUES 
  (1, 
   1, 
   'Khởi động dự án nâng cấp hệ sinh thái số doanh nghiệp 2026', 
   'khoi-dong-du-an-nang-cap-he-sinh-thai-so-2026',
   'FFT Việt Nam chính thức công bố chiến lược chuyển đổi số giai đoạn mới với trọng tâm tối ưu trải nghiệm khách hàng.',
   '<p>Trong bối cảnh công nghệ thông tin phát triển vượt bậc, FFT Việt Nam tiếp tục khẳng định cam kết đồng hành cùng các đối tác thông qua dự án nâng cấp toàn diện website và hệ thống cổng thông tin giới thiệu doanh nghiệp...</p><p>Hệ thống mới được phát triển trên nền tảng công nghệ Node.js và kiến trúc tối ưu, mang lại tốc độ truy xuất nhanh chóng và tính bảo mật cao.</p>',
   '/frontend/assets/images/gallery/team-workshop.jpg?v=1',
   0,
   0),
  (2, 
   1, 
   'Hội thảo giải pháp công nghệ và tương lai số', 
   'hoi-thao-giai-phap-cong-nghe-va-tuong-lai-so',
   'Đại diện FFT Việt Nam tham gia chia sẻ kinh nghiệm xây dựng giải pháp phần mềm tại diễn đàn công nghệ thường niên.',
   '<p>Vừa qua, ban lãnh đạo công ty đã có buổi trao đổi cùng các chuyên gia đầu ngành về xu hướng ứng dụng công nghệ web tiên tiến trong việc quảng bá thương hiệu và tối ưu hóa quy trình tương tác khách hàng...</p>',
   '/frontend/assets/images/gallery/product-review.jpg?v=1',
   0,
   0)
ON DUPLICATE KEY UPDATE `slug`=`slug`;
*/

-- 5. Ảnh minh hoạ được tạo cho bản demo, không phải ảnh hoạt động thực tế của FFT.
INSERT INTO `gallery` (`id`, `title`, `category`, `image_url`, `description`, `display_order`)
VALUES
  (101, 'Không gian trao đổi kỹ thuật', 'Minh hoạ', '../../assets/images/gallery/team-workshop.jpg?v=1', 'Ảnh minh hoạ không gian chuẩn bị cho cuộc họp kỹ thuật.', 1),
  (102, 'Kiểm thử ứng dụng di động', 'Minh hoạ', '../../assets/images/gallery/product-review.jpg?v=1', 'Ảnh minh hoạ thao tác kiểm thử trên thiết bị di động.', 2),
  (103, 'Đào tạo nội bộ', 'Minh hoạ', '../../assets/images/gallery/project-discussion.jpg?v=1', 'Ảnh minh hoạ một buổi đào tạo kỹ thuật quy mô nhỏ.', 3),
  (104, 'Bảo trì hạ tầng mạng', 'Minh hoạ', '../../assets/images/gallery/quality-check.jpg?v=1', 'Ảnh minh hoạ công việc kiểm tra hạ tầng mạng.', 4)
ON DUPLICATE KEY UPDATE
  `title` = VALUES(`title`), `category` = VALUES(`category`), `image_url` = VALUES(`image_url`),
  `description` = VALUES(`description`), `display_order` = VALUES(`display_order`);

-- 6. Không tạo Contact mẫu: danh sách quản trị chỉ hiển thị liên hệ thực tế.
/*
INSERT INTO `contacts` (`id`, `full_name`, `email`, `phone`, `subject`, `message`, `status`, `admin_notes`)
VALUES 
  (1, 
   'Nguyễn Văn An', 
   'nguyenvanan@example.com', 
   '0912 345 678', 
   'Yêu cầu báo giá dịch vụ thiết kế website', 
   'Kính gửi FFT Việt Nam, công ty chúng tôi đang có nhu cầu thiết kế lại website doanh nghiệp để chuẩn hóa thương hiệu. Xin vui lòng gửi báo giá và tài liệu giới thiệu chi tiết qua email.', 
   'read',
   'Đã tiếp nhận yêu cầu, chuẩn bị liên hệ lại trong sáng mai.'),
  (2, 
   'Trần Thị Mai', 
   'tranmai.tech@example.com', 
   '0987 654 321', 
   'Tư vấn triển khai giải pháp chuyển đổi số', 
   'Tôi muốn tìm hiểu thêm về dịch vụ tư vấn giải pháp CNTT và khả năng tích hợp hệ thống cho doanh nghiệp sản xuất.', 
   'unread',
   NULL)
ON DUPLICATE KEY UPDATE `id`=`id`;
*/
