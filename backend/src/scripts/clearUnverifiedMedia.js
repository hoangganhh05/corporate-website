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
      "UPDATE news SET thumbnail = NULL WHERE id IN (1, 2) AND thumbnail LIKE 'https://images.unsplash.com/%'"
    );

    await connection.commit();
    console.log(`Đã xoá ${galleryResult.affectedRows} ảnh Gallery mẫu và bỏ ${newsResult.affectedRows} thumbnail mẫu.`);
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
