require('dotenv').config();

const mysql = require('mysql2/promise');

async function clearUnverifiedMedia() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  try {
    await connection.beginTransaction();

    const [galleryResult] = await connection.execute(
      "DELETE FROM gallery WHERE id IN (1, 2, 3, 4, 5, 6) AND image_url LIKE 'https://images.unsplash.com/%'"
    );
    const [newsResult] = await connection.execute(
      "DELETE FROM news WHERE slug IN ('khoi-dong-du-an-nang-cap-he-sinh-thai-so-2026', 'hoi-thao-giai-phap-cong-nghe-va-tuong-lai-so')"
    );
    const [journalNewsResult] = await connection.execute(
      "DELETE FROM news WHERE slug IN ('khoi-dong-de-tai-website-gioi-thieu-doanh-nghiep', 'phan-tich-yeu-cau-va-du-lieu-he-thong', 'thiet-ke-use-case-va-co-so-du-lieu', 'hoan-thien-giao-dien-va-mo-hinh-du-lieu', 'ket-noi-website-voi-co-so-du-lieu', 'hoan-thien-lien-he-va-tich-hop-du-lieu', 'kiem-thu-tong-the-website', 'ra-soat-va-chuan-bi-demo-san-pham')"
    );
    const [contactResult] = await connection.execute(
      "DELETE FROM contacts WHERE email IN ('nguyenvanan@example.com', 'tranmai.tech@example.com')"
    );
    const [companyResult] = await connection.execute(
      "UPDATE company_info SET email = '', working_hours = NULL WHERE id = 1 AND (email = 'contact@fft.com.vn' OR working_hours = 'Thứ 2 - Thứ 6: 08:00 - 17:30')"
    );

    await connection.commit();
    console.log(`Đã xoá ${galleryResult.affectedRows} ảnh Gallery mẫu, ${newsResult.affectedRows} bài News mẫu, ${journalNewsResult.affectedRows} bài nhật ký không thuộc trang công khai, ${contactResult.affectedRows} Contact mẫu; đã xoá email/giờ làm việc chưa xác nhận của ${companyResult.affectedRows} bản ghi công ty.`);
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.end();
  }
}

clearUnverifiedMedia().catch((error) => {
  console.error('Không thể dọn dữ liệu ảnh mẫu:', error.message);
  process.exitCode = 1;
});
