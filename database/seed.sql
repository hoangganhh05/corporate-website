-- ==============================================================================
-- DATABASE SEED DATA HOÀN THIỆN
-- Đề tài: Thiết kế và xây dựng Website giới thiệu doanh nghiệp
-- Khởi tạo dữ liệu mẫu thực tế phục vụ kiểm thử và chạy ứng dụng
-- ==============================================================================

USE `company_intro_db`;

-- 1. Dữ liệu mẫu: Admin khởi tạo
-- Mật khẩu tạm thời: admin123
INSERT INTO `users` (`id`, `username`, `password`, `full_name`, `email`, `role`)
VALUES 
  (1, 'admin', 'admin123', 'Quản trị viên hệ thống', 'admin@fft.com.vn', 'admin')
ON DUPLICATE KEY UPDATE `username`=`username`;

-- 2. Dữ liệu mẫu: Thông tin doanh nghiệp
INSERT INTO `company_info` (`id`, `company_name`, `slogan`, `about_summary`, `about_detail`, `address`, `phone`, `email`, `working_hours`)
VALUES 
  (1, 
   'CÔNG TY TNHH CÔNG NGHỆ FFT VIỆT NAM', 
   'Tiên phong giải pháp công nghệ - Đồng hành cùng phát triển',
   'Công ty TNHH Công Nghệ FFT Việt Nam là đơn vị chuyên nghiệp trong lĩnh vực cung cấp giải pháp chuyển đổi số, thiết kế phần mềm và xây dựng website doanh nghiệp chất lượng cao.',
   'Được thành lập với sứ mệnh mang các giải pháp công nghệ hiện đại đến với cộng đồng doanh nghiệp Việt Nam, FFT Việt Nam không ngừng nghiên cứu và đổi mới sáng tạo. Chúng tôi sở hữu đội ngũ kỹ sư phần mềm giàu nhiệt huyết, quy trình làm việc chuẩn mực, cam kết mang đến giá trị thực chất và sự hài lòng cao nhất cho khách hàng.',
   'Tầng 5, Tòa nhà Công Nghệ, Quận Cầu Giấy, TP. Hà Nội', 
   '024 1234 5678', 
   'contact@fft.com.vn',
   'Thứ 2 - Thứ 6: 08:00 - 17:30')
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

-- 4. Dữ liệu mẫu: Tin tức & Sự kiện
INSERT INTO `news` (`id`, `author_id`, `title`, `slug`, `summary`, `content`, `thumbnail`, `views_count`, `is_published`)
VALUES 
  (1, 
   1, 
   'Khởi động dự án nâng cấp hệ sinh thái số doanh nghiệp 2026', 
   'khoi-dong-du-an-nang-cap-he-sinh-thai-so-2026',
   'FFT Việt Nam chính thức công bố chiến lược chuyển đổi số giai đoạn mới với trọng tâm tối ưu trải nghiệm khách hàng.',
   '<p>Trong bối cảnh công nghệ thông tin phát triển vượt bậc, FFT Việt Nam tiếp tục khẳng định cam kết đồng hành cùng các đối tác thông qua dự án nâng cấp toàn diện website và hệ thống cổng thông tin giới thiệu doanh nghiệp...</p><p>Hệ thống mới được phát triển trên nền tảng công nghệ Node.js và kiến trúc tối ưu, mang lại tốc độ truy xuất nhanh chóng và tính bảo mật cao.</p>',
   'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', 
   128, 
   1),
  (2, 
   1, 
   'Hội thảo giải pháp công nghệ và tương lai số', 
   'hoi-thao-giai-phap-cong-nghe-va-tuong-lai-so',
   'Đại diện FFT Việt Nam tham gia chia sẻ kinh nghiệm xây dựng giải pháp phần mềm tại diễn đàn công nghệ thường niên.',
   '<p>Vừa qua, ban lãnh đạo công ty đã có buổi trao đổi cùng các chuyên gia đầu ngành về xu hướng ứng dụng công nghệ web tiên tiến trong việc quảng bá thương hiệu và tối ưu hóa quy trình tương tác khách hàng...</p>',
   'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80', 
   95, 
   1)
ON DUPLICATE KEY UPDATE `slug`=`slug`;

-- 5. Dữ liệu mẫu: Thư viện hình ảnh hoạt động
INSERT INTO `gallery` (`id`, `title`, `category`, `image_url`, `description`, `display_order`)
VALUES 
  (1, 'Không gian văn phòng mở hiện đại', 'Văn phòng', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', 'Khu vực làm việc tiện nghi, ngập tràn ánh sáng tự nhiên thúc đẩy khả năng sáng tạo của đội ngũ kỹ sư.', 1),
  (2, 'Phòng họp sáng tạo & Brainstorm', 'Văn phòng', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80', 'Không gian thảo luận chiến lược dự án, trang bị bảng tương tác và hệ thống họp trực tuyến bảo mật.', 2),
  (3, 'Buổi họp kỹ thuật Sprint Review', 'Hoạt động', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', 'Đội ngũ lập trình viên định kỳ đánh giá chất lượng sản phẩm, rà soát mã nguồn và chia sẻ kiến thức mới.', 3),
  (4, 'Chuyến dã ngoại Teambuilding', 'Hoạt động', 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80', 'Tinh thần đồng đội và văn hóa sẻ chia là nền tảng phát triển bền vững của FFT Việt Nam.', 4),
  (5, 'Lễ vinh danh nhân viên xuất sắc', 'Sự kiện', 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80', 'Ghi nhận và tri ân những đóng góp nổi bật của các kỹ sư và chuyên viên xuất sắc trong từng quý.', 5),
  (6, 'Hội thảo công nghệ Cloud & AI', 'Sự kiện', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', 'Diễn đàn trao đổi chuyên môn thường niên, cập nhật kiến trúc đám mây và ứng dụng trí tuệ nhân tạo.', 6)
ON DUPLICATE KEY UPDATE `id`=`id`;

-- 6. Dữ liệu mẫu: Phản hồi liên hệ mẫu
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
