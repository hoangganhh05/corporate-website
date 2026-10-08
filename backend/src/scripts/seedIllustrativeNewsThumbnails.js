require('dotenv').config();

const mysql = require('mysql2/promise');

async function seedIllustrativeNewsThumbnails() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  try {
    const [result] = await connection.query(
      `UPDATE news
       SET thumbnail = CASE id
         WHEN 1 THEN '/frontend/assets/images/gallery/team-workshop.png?v=2'
         WHEN 2 THEN '/frontend/assets/images/gallery/product-review.png?v=2'
       END
       WHERE id IN (1, 2)`
    );
    console.log(`Đã cập nhật ${result.affectedRows} thumbnail minh hoạ cho News.`);
  } finally {
    await connection.end();
  }
}

seedIllustrativeNewsThumbnails().catch((error) => {
  console.error('Không thể cập nhật thumbnail minh hoạ:', error.message);
  process.exitCode = 1;
});
