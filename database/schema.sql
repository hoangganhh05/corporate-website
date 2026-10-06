-- ==============================================================================
-- DATABASE SCHEMA SKELETON
-- Đề tài: Thiết kế và xây dựng Website giới thiệu doanh nghiệp
-- Nguồn tham chiếu: PROJECT_PLAN_Web_gioi_thieu_doanh_nghiep_OKL.md
-- Giai đoạn: Giai đoạn 1 — Project Foundation
--
-- LƯU Ý QUAN TRỌNG:
-- Theo Q-003 và STORY-006 (EPIC-002), chi tiết thực thể, thuộc tính và ràng buộc
-- sẽ được hoàn thiện trong giai đoạn Phân tích và Thiết kế hệ thống (Tuần 3 & 4).
-- Các bảng dưới đây chỉ là khung khởi tạo sơ bộ, các trường chi tiết đánh dấu [TBD].
-- ==============================================================================

-- 1. Tạo cơ sở dữ liệu
CREATE DATABASE IF NOT EXISTS `company_intro_db`
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `company_intro_db`;

-- ------------------------------------------------------------------------------
-- 2. Bảng: users (Đối tượng sử dụng: Admin / Quản trị viên)
-- Căn cứ: Section 4 (Actors / Users) & REQ-F-004
-- Ghi chú: Q-004 đánh dấu quyền chi tiết là TBD
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(100) NULL,
  `role` VARCHAR(20) DEFAULT 'admin', -- [TBD] Xác định cụ thể vai trò/phân quyền tại EPIC-002
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 3. Bảng: company_info (Nội dung giới thiệu doanh nghiệp)
-- Căn cứ: In-Scope (Website) & STORY-011
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `company_info` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `company_name` VARCHAR(255) NOT NULL,
  `about_text` TEXT NULL,              -- [TBD] Cấu trúc giới thiệu chi tiết (lịch sử, tầm nhìn, sứ mệnh)
  `address` VARCHAR(255) NULL,
  `phone` VARCHAR(50) NULL,
  `email` VARCHAR(100) NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 4. Bảng: services (Dịch vụ doanh nghiệp)
-- Căn cứ: In-Scope (Website) & STORY-012
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `services` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,             -- [TBD] Cần xác định có thêm danh mục (category) hay không
  `icon` VARCHAR(100) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 5. Bảng: news (Tin tức & sự kiện)
-- Căn cứ: In-Scope (Website) & STORY-013
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `news` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `summary` TEXT NULL,
  `content` LONGTEXT NULL,             -- [TBD] Cần xác nhận định dạng nội dung (HTML/Markdown)
  `thumbnail` VARCHAR(255) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 6. Bảng: gallery (Hình ảnh hoạt động doanh nghiệp)
-- Căn cứ: In-Scope (Website) & STORY-014
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `gallery` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL,     -- [TBD] Cần xác nhận phân loại album/nhóm ảnh
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 7. Bảng: contacts (Thông tin liên hệ & phản hồi của khách hàng)
-- Căn cứ: In-Scope (Website) & STORY-015, STORY-019
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(50) NULL,
  `subject` VARCHAR(255) NULL,
  `message` TEXT NOT NULL,
  `status` VARCHAR(20) DEFAULT 'unread', -- [TBD] Trạng thái xử lý (unread, read, replied)
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
