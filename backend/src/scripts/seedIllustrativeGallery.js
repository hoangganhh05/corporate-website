require('dotenv').config();

const mysql = require('mysql2/promise');

const illustrativeImages = [
  [101, 'Không gian trao đổi kỹ thuật', 'Minh hoạ', '../../assets/images/gallery/team-workshop.png?v=2', 'Ảnh minh hoạ không gian chuẩn bị cho cuộc họp kỹ thuật.', 1],
  [102, 'Kiểm thử ứng dụng di động', 'Minh hoạ', '../../assets/images/gallery/product-review.png?v=2', 'Ảnh minh hoạ thao tác kiểm thử trên thiết bị di động.', 2],
  [103, 'Đào tạo nội bộ', 'Minh hoạ', '../../assets/images/gallery/project-discussion.png?v=2', 'Ảnh minh hoạ một buổi đào tạo kỹ thuật quy mô nhỏ.', 3],
  [104, 'Bảo trì hạ tầng mạng', 'Minh hoạ', '../../assets/images/gallery/quality-check.png?v=2', 'Ảnh minh hoạ công việc kiểm tra hạ tầng mạng.', 4]
];

async function seedIllustrativeGallery() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  try {
    await connection.query(
      `INSERT INTO gallery (id, title, category, image_url, description, display_order)
       VALUES ? ON DUPLICATE KEY UPDATE title = VALUES(title), category = VALUES(category),
       image_url = VALUES(image_url), description = VALUES(description), display_order = VALUES(display_order)`,
      [illustrativeImages]
    );
    console.log(`Đã thêm ${illustrativeImages.length} ảnh minh hoạ vào Gallery.`);
  } finally {
    await connection.end();
  }
}

seedIllustrativeGallery().catch((error) => {
  console.error('Không thể thêm ảnh minh hoạ:', error.message);
  process.exitCode = 1;
});
