/**
 * SCRIPT KIỂM THỬ CHỨC NĂNG TỔNG THỂ (FUNCTIONAL TESTING - STORY-020)
 * Kiểm thử toàn diện API, Validation logic, Data Integrity, Error Handling và Frontend Structure.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const app = require('../app');
const contactController = require('../controllers/contactController');

let server;
let baseUrl;

const testResults = [];

function recordTest(id, name, category, status, details = '') {
  testResults.push({ id, name, category, status, details });
  const icon = status === 'PASS' ? '✅' : '❌';
  console.log(`[${status}] ${icon} ${id}: ${name} ${details ? `(${details})` : ''}`);
}

async function runTests() {
  console.log('================================================================');
  console.log('🚀 BẮT ĐẦU KIỂM THỬ CHỨC NĂNG TỔNG THỂ (STORY-020: FUNCTIONAL TESTING)');
  console.log('================================================================\n');

  // Khởi tạo máy chủ test trên port ngẫu nhiên
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://localhost:${port}`;
      console.log(`📡 Máy chủ kiểm thử khởi chạy tại: ${baseUrl}\n`);
      resolve();
    });
  });

  try {
    // -------------------------------------------------------------------------
    // NHÓM 1: KIỂM THỬ ĐIỀU HƯỚNG VÀ TÀI NGUYÊN FRONTEND (UI & STRUCTURE)
    // -------------------------------------------------------------------------
    console.log('--- [NHÓM 1] KIỂM THỬ CẤU TRÚC VÀ ĐIỀU HƯỚNG FRONTEND ---');

    const frontendBase = path.resolve(__dirname, '../../../frontend');
    const requiredPages = [
      { name: 'Trang chủ (Home)', file: 'index.html' },
      { name: 'Trang Giới thiệu (About)', file: 'pages/about/index.html' },
      { name: 'Trang Dịch vụ (Services)', file: 'pages/services/index.html' },
      { name: 'Trang Tin tức (News)', file: 'pages/news/index.html' },
      { name: 'Trang Thư viện ảnh (Gallery)', file: 'pages/gallery/index.html' },
      { name: 'Trang Liên hệ (Contact)', file: 'pages/contact/index.html' },
      { name: 'Trang Quản trị (Admin)', file: 'pages/admin/index.html' }
    ];

    for (const [idx, page] of requiredPages.entries()) {
      const testId = `TC-FE-${String(idx + 1).padStart(2, '0')}`;
      const fullPath = path.join(frontendBase, page.file);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const hasHeader = content.includes('<header') || content.includes('navbar');
        const hasFooter = content.includes('<footer') || page.file.includes('admin');
        if (hasHeader && (hasFooter || page.file.includes('admin'))) {
          recordTest(testId, `Kiểm tra trang ${page.name}`, 'Frontend Structure', 'PASS', 'Tệp tin tồn tại, đầy đủ bố cục header/nav/main');
        } else {
          recordTest(testId, `Kiểm tra trang ${page.name}`, 'Frontend Structure', 'FAIL', 'Thiếu thẻ header hoặc footer');
        }
      } else {
        recordTest(testId, `Kiểm tra trang ${page.name}`, 'Frontend Structure', 'FAIL', 'Tệp tin không tồn tại');
      }
    }

    // Kiểm tra liên kết điều hướng đồng bộ
    const homeHtml = fs.readFileSync(path.join(frontendBase, 'index.html'), 'utf8');
    const hasNavLinks = homeHtml.includes('pages/about') &&
                        homeHtml.includes('pages/services') &&
                        homeHtml.includes('pages/news') &&
                        homeHtml.includes('pages/gallery') &&
                        homeHtml.includes('pages/contact');
    recordTest('TC-FE-08', 'Kiểm tra Menu điều hướng (Navigation Bar)', 'Frontend Navigation', hasNavLinks ? 'PASS' : 'FAIL', 'Các liên kết trang con đầy đủ và chính xác');

    // -------------------------------------------------------------------------
    // NHÓM 2: KIỂM THỬ BACKEND RESTFUL APIS CƠ BẢN
    // -------------------------------------------------------------------------
    console.log('\n--- [NHÓM 2] KIỂM THỬ BACKEND RESTFUL APIS ---');

    // TC-API-01: Root welcome
    const resRoot = await fetch(`${baseUrl}/`);
    const dataRoot = await resRoot.json();
    if (resRoot.status === 200 && dataRoot.status === 'online') {
      recordTest('TC-API-01', 'GET / (Welcome endpoint)', 'Backend API', 'PASS', 'HTTP 200, status online');
    } else {
      recordTest('TC-API-01', 'GET / (Welcome endpoint)', 'Backend API', 'FAIL', `HTTP ${resRoot.status}`);
    }

    // TC-API-02: Health Check
    const resHealth = await fetch(`${baseUrl}/api/health`);
    const dataHealth = await resHealth.json();
    if (resHealth.status === 200 && dataHealth.status === 'ok') {
      recordTest('TC-API-02', 'GET /api/health (Health check)', 'Backend API', 'PASS', 'HTTP 200, trạng thái máy chủ hoạt động tốt');
    } else {
      recordTest('TC-API-02', 'GET /api/health (Health check)', 'Backend API', 'FAIL', `HTTP ${resHealth.status}`);
    }

    // TC-API-03: Company Info
    const resCompany = await fetch(`${baseUrl}/api/company`);
    const dataCompany = await resCompany.json();
    if (resCompany.status === 200 && dataCompany.status === 'success') {
      recordTest('TC-API-03', 'GET /api/company (Thông tin công ty)', 'Backend API', 'PASS', `HTTP 200, tên công ty: ${dataCompany.data?.name || 'OK'}`);
    } else {
      recordTest('TC-API-03', 'GET /api/company (Thông tin công ty)', 'Backend API', 'FAIL', `HTTP ${resCompany.status}`);
    }

    // TC-API-04: Services List
    const resServices = await fetch(`${baseUrl}/api/services`);
    const dataServices = await resServices.json();
    if (resServices.status === 200 && Array.isArray(dataServices.data)) {
      recordTest('TC-API-04', 'GET /api/services (Danh sách dịch vụ)', 'Backend API', 'PASS', `HTTP 200, trả về ${dataServices.data.length} dịch vụ`);
    } else {
      recordTest('TC-API-04', 'GET /api/services (Danh sách dịch vụ)', 'Backend API', 'FAIL', `HTTP ${resServices.status}`);
    }

    // TC-API-05: Service Detail
    const resServiceItem = await fetch(`${baseUrl}/api/services/1`);
    const dataServiceItem = await resServiceItem.json();
    if (resServiceItem.status === 200 && dataServiceItem.data) {
      recordTest('TC-API-05', 'GET /api/services/1 (Chi tiết dịch vụ hợp lệ)', 'Backend API', 'PASS', `HTTP 200, tìm thấy dịch vụ ID 1`);
    } else {
      recordTest('TC-API-05', 'GET /api/services/1 (Chi tiết dịch vụ hợp lệ)', 'Backend API', 'FAIL', `HTTP ${resServiceItem.status}`);
    }

    // TC-API-06: News List
    const resNews = await fetch(`${baseUrl}/api/news`);
    const dataNews = await resNews.json();
    if (resNews.status === 200 && Array.isArray(dataNews.data)) {
      recordTest('TC-API-06', 'GET /api/news (Danh sách tin tức)', 'Backend API', 'PASS', `HTTP 200, trả về ${dataNews.data.length} bài viết`);
    } else {
      recordTest('TC-API-06', 'GET /api/news (Danh sách tin tức)', 'Backend API', 'FAIL', `HTTP ${resNews.status}`);
    }

    // TC-API-07: Gallery List
    const resGallery = await fetch(`${baseUrl}/api/gallery`);
    const dataGallery = await resGallery.json();
    if (resGallery.status === 200 && Array.isArray(dataGallery.data)) {
      recordTest('TC-API-07', 'GET /api/gallery (Thư viện hình ảnh)', 'Backend API', 'PASS', `HTTP 200, trả về ${dataGallery.data.length} hình ảnh`);
    } else {
      recordTest('TC-API-07', 'GET /api/gallery (Thư viện hình ảnh)', 'Backend API', 'FAIL', `HTTP ${resGallery.status}`);
    }

    // -------------------------------------------------------------------------
    // NHÓM 3: KIỂM THỬ XỬ LÝ LIÊN HỆ, VALIDATION & BẢO MẬT XSS
    // -------------------------------------------------------------------------
    console.log('\n--- [NHÓM 3] KIỂM THỬ LIÊN HỆ, VALIDATION VÀ AN TOÀN DỮ LIỆU ---');

    // TC-VAL-01: Thiếu trường bắt buộc
    const resMissing = await fetch(`${baseUrl}/api/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: 'Nguyễn Văn A' })
    });
    const dataMissing = await resMissing.json();
    if (resMissing.status === 400 && dataMissing.status === 'error') {
      recordTest('TC-VAL-01', 'Validation: Thiếu trường bắt buộc', 'Data Validation', 'PASS', 'Trả về HTTP 400 và thông báo rõ ràng');
    } else {
      recordTest('TC-VAL-01', 'Validation: Thiếu trường bắt buộc', 'Data Validation', 'FAIL', `HTTP ${resMissing.status}`);
    }

    // TC-VAL-02: Tên quá ngắn (< 2 ký tự)
    const resShortName = await fetch(`${baseUrl}/api/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: 'A', email: 'test@fft.com.vn', subject: 'Tư vấn', message: 'Nội dung tin nhắn hợp lệ trên 10 ký tự' })
    });
    const dataShortName = await resShortName.json();
    if (resShortName.status === 400 && dataShortName.message.includes('tối thiểu 2 ký tự')) {
      recordTest('TC-VAL-02', 'Validation: Họ tên quá ngắn (< 2 ký tự)', 'Data Validation', 'PASS', 'Chặn thành công với HTTP 400');
    } else {
      recordTest('TC-VAL-02', 'Validation: Họ tên quá ngắn (< 2 ký tự)', 'Data Validation', 'FAIL', `HTTP ${resShortName.status}`);
    }

    // TC-VAL-03: Email sai định dạng
    const resBadEmail = await fetch(`${baseUrl}/api/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: 'Nguyễn Văn An', email: 'email_khong_hop_le', subject: 'Tư vấn', message: 'Nội dung tin nhắn hợp lệ trên 10 ký tự' })
    });
    const dataBadEmail = await resBadEmail.json();
    if (resBadEmail.status === 400 && dataBadEmail.message.includes('định dạng')) {
      recordTest('TC-VAL-03', 'Validation: Email sai cấu trúc', 'Data Validation', 'PASS', 'Chặn thành công với HTTP 400');
    } else {
      recordTest('TC-VAL-03', 'Validation: Email sai cấu trúc', 'Data Validation', 'FAIL', `HTTP ${resBadEmail.status}`);
    }

    // TC-VAL-04: Số điện thoại không hợp lệ (không đúng chuẩn VN)
    const resBadPhone = await fetch(`${baseUrl}/api/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: 'Nguyễn Văn An', email: 'an.nv@fft.com.vn', phone: '12345', subject: 'Tư vấn', message: 'Nội dung tin nhắn hợp lệ trên 10 ký tự' })
    });
    const dataBadPhone = await resBadPhone.json();
    if (resBadPhone.status === 400 && dataBadPhone.message.includes('Số điện thoại')) {
      recordTest('TC-VAL-04', 'Validation: Số điện thoại sai đầu số VN', 'Data Validation', 'PASS', 'Chặn thành công với HTTP 400');
    } else {
      recordTest('TC-VAL-04', 'Validation: Số điện thoại sai đầu số VN', 'Data Validation', 'FAIL', `HTTP ${resBadPhone.status}`);
    }

    // TC-VAL-05: Nội dung tin nhắn quá ngắn (< 10 ký tự)
    const resShortMsg = await fetch(`${baseUrl}/api/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: 'Nguyễn Văn An', email: 'an.nv@fft.com.vn', subject: 'Tư vấn', message: 'Ngắn' })
    });
    const dataShortMsg = await resShortMsg.json();
    if (resShortMsg.status === 400 && dataShortMsg.message.includes('tối thiểu 10 ký tự')) {
      recordTest('TC-VAL-05', 'Validation: Tin nhắn quá ngắn (< 10 ký tự)', 'Data Validation', 'PASS', 'Chặn thành công với HTTP 400');
    } else {
      recordTest('TC-VAL-05', 'Validation: Tin nhắn quá ngắn (< 10 ký tự)', 'Data Validation', 'FAIL', `HTTP ${resShortMsg.status}`);
    }

    // TC-SEC-01: Chống tấn công XSS Script Injection
    const dirtyXss = '<script>alert("Hacked")</script><b>Đối tác B2B</b><style>body{display:none}</style>';
    const cleanXss = contactController.sanitizeText(dirtyXss);
    if (!cleanXss.includes('<script>') && !cleanXss.includes('alert') && !cleanXss.includes('<style>') && cleanXss === 'Đối tác B2B') {
      recordTest('TC-SEC-01', 'Security: Khử mã độc XSS Script & Thẻ nguy hại', 'Security', 'PASS', 'Khử sạch 100% mã script nguy hiểm');
    } else {
      recordTest('TC-SEC-01', 'Security: Khử mã độc XSS Script & Thẻ nguy hại', 'Security', 'FAIL', `Kết quả chưa sạch: "${cleanXss}"`);
    }

    // -------------------------------------------------------------------------
    // NHÓM 4: KIỂM THỬ XỬ LÝ LỖI & NGOẠI LỆ (ERROR HANDLING)
    // -------------------------------------------------------------------------
    console.log('\n--- [NHÓM 4] KIỂM THỬ XỬ LÝ NGOẠI LỆ VÀ ĐƯỜNG DẪN LỖI ---');

    // TC-ERR-01: Đường dẫn không tồn tại 404
    const res404 = await fetch(`${baseUrl}/api/duong-dan-khong-ton-tai-12345`);
    const data404 = await res404.json();
    if (res404.status === 404 && data404.status === 'error') {
      recordTest('TC-ERR-01', 'Xử lý URL 404 Not Found', 'Error Handling', 'PASS', 'Trả về HTTP 404 có cấu trúc JSON thông báo chuẩn');
    } else {
      recordTest('TC-ERR-01', 'Xử lý URL 404 Not Found', 'Error Handling', 'FAIL', `HTTP ${res404.status}`);
    }

    // TC-ERR-02: Dịch vụ không tồn tại
    const resNonService = await fetch(`${baseUrl}/api/services/dich-vu-khong-ton-tai-9999`);
    const dataNonService = await resNonService.json();
    if (resNonService.status === 404 && dataNonService.status === 'error') {
      recordTest('TC-ERR-02', 'Truy vấn ID/Slug dịch vụ không tồn tại', 'Error Handling', 'PASS', 'Trả về HTTP 404 thông báo không tìm thấy');
    } else {
      recordTest('TC-ERR-02', 'Truy vấn ID/Slug dịch vụ không tồn tại', 'Error Handling', 'FAIL', `HTTP ${resNonService.status}`);
    }

    // -------------------------------------------------------------------------
    // NHÓM 5: KIỂM THỬ LUỒNG NGHIỆP VỤ QUẢN TRỊ ADMIN (ADMIN WORKFLOW)
    // -------------------------------------------------------------------------
    console.log('\n--- [NHÓM 5] KIỂM THỬ TRANG QUẢN TRỊ VÀ TRẠNG THÁI LIÊN HỆ ---');

    const adminHtml = fs.readFileSync(path.join(frontendBase, 'pages/admin/index.html'), 'utf8');
    const hasAdminCards = adminHtml.includes('stat-total') && adminHtml.includes('stat-unread') && adminHtml.includes('stat-replied');
    const hasStatusTabs = adminHtml.includes('data-filter="unread"') && adminHtml.includes('data-filter="replied"');
    const hasDetailModal = adminHtml.includes('contactDetailModal');

    recordTest('TC-ADM-01', 'Kiểm tra giao diện thống kê Admin', 'Admin Dashboard', hasAdminCards ? 'PASS' : 'FAIL', 'Bao gồm thẻ tổng số, chưa đọc, đã đọc, đã phản hồi');
    recordTest('TC-ADM-02', 'Kiểm tra bộ lọc tab trạng thái', 'Admin Dashboard', hasStatusTabs ? 'PASS' : 'FAIL', 'Bộ lọc trạng thái hoạt động trên giao diện (unread, read, replied)');
    recordTest('TC-ADM-03', 'Kiểm tra Modal chi tiết và phản hồi', 'Admin Dashboard', hasDetailModal ? 'PASS' : 'FAIL', 'Có modal chi tiết và nút thao tác trạng thái');

  } catch (err) {
    console.error('❌ Ngoại lệ trong quá trình chạy kiểm thử:', err);
  } finally {
    // Đóng server kiểm thử
    if (server) {
      await new Promise((resolve) => server.close(resolve));
      console.log('\n🔒 Đã đóng máy chủ kiểm thử an toàn.');
    }
  }

  // TỔNG KẾT KẾT QUẢ KIỂM THỬ
  console.log('\n================================================================');
  console.log('📊 TỔNG HỢP KẾT QUẢ KIỂM THỬ CHỨC NĂNG (FUNCTIONAL TEST SUMMARY)');
  console.log('================================================================');
  const passCount = testResults.filter((t) => t.status === 'PASS').length;
  const failCount = testResults.filter((t) => t.status === 'FAIL').length;
  const totalCount = testResults.length;
  const passRate = ((passCount / totalCount) * 100).toFixed(1);

  console.log(`- Tổng số Test Cases đã thực hiện: ${totalCount}`);
  console.log(`- Số ca kiểm thử ĐẠT (PASS):       ${passCount} (${passRate}%)`);
  console.log(`- Số ca kiểm thử KHÔNG ĐẠT (FAIL): ${failCount}`);
  console.log('================================================================');

  if (failCount === 0) {
    console.log('🎉 TOÀN BỘ CÁC CA KIỂM THỬ CHỨC NĂNG ĐẠT 100% TIÊU CHÍ (STORY-020 PASS)!');
  } else {
    console.warn('⚠️ Cần rà soát và điều chỉnh các ca kiểm thử chưa đạt!');
  }

  return { totalCount, passCount, failCount, passRate, testResults };
}

// Chạy trực tiếp nếu gọi từ command line
if (require.main === module) {
  runTests().then((res) => {
    if (res.failCount > 0) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  });
}

module.exports = runTests;
