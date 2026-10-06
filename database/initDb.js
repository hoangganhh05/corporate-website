const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config({ path: path.join(__dirname, '../backend/.env') });

/**
 * Script tự động khởi tạo Cơ sở dữ liệu và nạp dữ liệu mẫu
 * Thực hiện theo STORY-008 (EPIC-003: Xây dựng cơ sở dữ liệu)
 */
async function initDatabase() {
  const host = process.env.DB_HOST || 'localhost';
  const port = parseInt(process.env.DB_PORT || '3306', 10);
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '';
  const database = process.env.DB_NAME || 'company_intro_db';

  console.log('====================================================');
  console.log('🔄 BẮT ĐẦU KHỞI TẠO CƠ SỞ DỮ LIỆU (STORY-008)');
  console.log(`📡 Máy chủ: ${host}:${port} | Tài khoản: ${user} | CSDL: ${database}`);
  console.log('====================================================');

  let connection;
  try {
    // 1. Kết nối không chỉ định database để tạo DB nếu chưa có
    connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
      multipleStatements: true,
    });
    console.log('✅ Đã kết nối thành công đến máy chủ MySQL.');

    // 2. Đọc và thực thi schema.sql
    const schemaPath = path.join(__dirname, 'schema.sql');
    if (fs.existsSync(schemaPath)) {
      console.log('⏳ Đang thực thi schema.sql để tạo cấu trúc bảng...');
      const schemaSql = fs.readFileSync(schemaPath, 'utf8');
      await connection.query(schemaSql);
      console.log('✅ Cấu trúc bảng đã được tạo thành công!');
    } else {
      throw new Error(`Không tìm thấy file schema.sql tại: ${schemaPath}`);
    }

    // 3. Đọc và thực thi seed.sql
    const seedPath = path.join(__dirname, 'seed.sql');
    if (fs.existsSync(seedPath)) {
      console.log('⏳ Đang thực thi seed.sql để nạp dữ liệu mẫu...');
      const seedSql = fs.readFileSync(seedPath, 'utf8');
      await connection.query(seedSql);
      console.log('✅ Dữ liệu mẫu đã được nạp thành công!');
    } else {
      throw new Error(`Không tìm thấy file seed.sql tại: ${seedPath}`);
    }

    // 4. Kiểm tra và đếm dữ liệu trong từng bảng
    await connection.changeUser({ database });
    console.log('----------------------------------------------------');
    console.log('🔍 KIỂM TRA SỐ LƯỢNG BẢN GHI ĐÃ NẠP (DATA AUDIT):');
    
    const tables = ['users', 'company_info', 'services', 'news', 'gallery', 'contacts'];
    for (const table of tables) {
      const [rows] = await connection.query(`SELECT COUNT(*) as total FROM \`${table}\``);
      console.log(`   * Bảng [${table.padEnd(12)}]: ${rows[0].total} bản ghi`);
    }
    console.log('----------------------------------------------------');
    console.log('🎉 KHỞI TẠO CƠ SỞ DỮ LIỆU HOÀN TẤT THÀNH CÔNG (STORY-008 DONE)!');

  } catch (error) {
    console.error('❌ LỖI KHỞI TẠO CSDL:', error.message);
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('👉 Vui lòng kiểm tra lại DB_USER và DB_PASSWORD trong file backend/.env');
    }
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Chạy hàm
initDatabase();
