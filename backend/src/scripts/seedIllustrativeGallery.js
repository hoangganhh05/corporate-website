require('dotenv').config();

const mysql = require('mysql2/promise');

const illustrativeImages = [
  [101, 'Trao đổi phương án kỹ thuật', 'Minh hoạ', '../../assets/images/gallery/team-workshop.png', 'Ảnh minh hoạ cho hoạt động trao đổi kỹ thuật.', 1],
  [102, 'Cùng rà soát sản phẩm', 'Minh hoạ', '../../assets/images/gallery/product-review.png', 'Ảnh minh hoạ cho quá trình review sản phẩm.', 2],
  [103, 'Thảo luận tiến độ dự án', 'Minh hoạ', '../../assets/images/gallery/project-discussion.png', 'Ảnh minh hoạ cho buổi trao đổi dự án.', 3],
  [104, 'Kiểm thử chất lượng', 'Minh hoạ', '../../assets/images/gallery/quality-check.png', 'Ảnh minh hoạ cho công việc kiểm thử.', 4]
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
