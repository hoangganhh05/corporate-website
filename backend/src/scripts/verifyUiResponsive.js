/**
 * SCRIPT KIỂM THỬ GIAO DIỆN VÀ TƯƠNG THÍCH TRÌNH DUYỆT (STORY-021)
 * Kiểm tra các tiêu chuẩn Responsive, Viewport, Grid System, Bootstrap Components và CSS Media Queries.
 */

const fs = require('fs');
const path = require('path');

const frontendDir = path.resolve(__dirname, '../../../frontend');
const pages = [
  { name: 'Trang chủ (Home)', path: 'index.html' },
  { name: 'Trang Giới thiệu (About)', path: 'pages/about/index.html' },
  { name: 'Trang Dịch vụ (Services)', path: 'pages/services/index.html' },
  { name: 'Trang Tin tức (News)', path: 'pages/news/index.html' },
  { name: 'Trang Thư viện ảnh (Gallery)', path: 'pages/gallery/index.html' },
  { name: 'Trang Liên hệ (Contact)', path: 'pages/contact/index.html' },
  { name: 'Trang Quản trị (Admin)', path: 'pages/admin/index.html' }
];

const testResults = [];

function recordTest(id, name, status, details) {
  testResults.push({ id, name, status, details });
  const icon = status === 'PASS' ? '✅' : '❌';
  console.log(`[${status}] ${icon} ${id}: ${name} - ${details}`);
}

async function runUiResponsiveVerification() {
  console.log('================================================================');
  console.log('📱 BẮT ĐẦU KIỂM THỬ GIAO DIỆN & TƯƠNG THÍCH TRÌNH DUYỆT (STORY-021)');
  console.log('================================================================\n');

  // 1. Kiểm tra Viewport & Meta Tags
  console.log('--- [NHÓM 1] KIỂM TRA VIEWPORT & TIÊU CHUẨN HTML5 TRÊN 7 TRANG ---');
  for (const [idx, page] of pages.entries()) {
    const fullPath = path.join(frontendDir, page.path);
    const content = fs.readFileSync(fullPath, 'utf8');

    const hasViewport = content.includes('name="viewport"') && content.includes('width=device-width');
    const hasCharset = content.includes('charset="UTF-8"') || content.includes('charset="utf-8"');
    const hasBootstrapCss = content.includes('bootstrap.min.css') || content.includes('bootstrap');
    const hasBootstrapJs = content.includes('bootstrap.bundle.min.js') || content.includes('bootstrap.bundle');

    const testId = `TC-UI-META-${idx + 1}`;
    if (hasViewport && hasCharset && hasBootstrapCss && hasBootstrapJs) {
      recordTest(testId, page.name, 'PASS', 'Đầy đủ Viewport, UTF-8, Bootstrap 5 CSS & JS bundle');
    } else {
      recordTest(testId, page.name, 'FAIL', `Thiếu cấu hình: VP=${hasViewport}, CS=${hasCharset}, CSS=${hasBootstrapCss}, JS=${hasBootstrapJs}`);
    }
  }

  // 2. Kiểm tra Mobile Navigation Toggler
  console.log('\n--- [NHÓM 2] KIỂM TRA MOBILE NAVBAR COLLAPSIBLE TRÊN CÁC TRANG ---');
  const userPages = pages.filter((p) => !p.path.includes('admin'));
  for (const [idx, page] of userPages.entries()) {
    const fullPath = path.join(frontendDir, page.path);
    const content = fs.readFileSync(fullPath, 'utf8');

    const hasToggler = content.includes('navbar-toggler') && content.includes('data-bs-toggle="collapse"');
    const hasCollapse = content.includes('navbar-collapse');
    const testId = `TC-UI-NAV-${idx + 1}`;

    if (hasToggler && hasCollapse) {
      recordTest(testId, `Navbar Toggle: ${page.name}`, 'PASS', 'Nút mở rộng menu di động sẵn sàng hoạt động');
    } else {
      recordTest(testId, `Navbar Toggle: ${page.name}`, 'FAIL', 'Thiếu class navbar-toggler hoặc navbar-collapse');
    }
  }

  // 3. Kiểm tra Grid System & Breakpoint Classes
  console.log('\n--- [NHÓM 3] KIỂM TRA HỆ THỐNG GRID RESPONSIVE (COL-MD, COL-LG) ---');
  for (const [idx, page] of pages.entries()) {
    const fullPath = path.join(frontendDir, page.path);
    const content = fs.readFileSync(fullPath, 'utf8');

    const hasGrid = (content.includes('col-md-') || content.includes('col-lg-') || content.includes('col-sm-')) && content.includes('row');
    const testId = `TC-UI-GRID-${idx + 1}`;

    if (hasGrid) {
      recordTest(testId, `Grid Layout: ${page.name}`, 'PASS', 'Sử dụng hệ thống chia cột đa màn hình (row/col-md/col-lg)');
    } else {
      recordTest(testId, `Grid Layout: ${page.name}`, 'FAIL', 'Thiếu cấu trúc row/col chia cột');
    }
  }

  // 4. Kiểm tra CSS Media Queries & Cross-Browser Styling
  console.log('\n--- [NHÓM 4] KIỂM TRA TẬP TIN STYLESHEET (STYLE.CSS) & MEDIA QUERIES ---');
  const cssPath = path.join(frontendDir, 'assets/css/style.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  const hasTabletQuery = cssContent.includes('@media (max-width: 991.98px)');
  const hasMobileQuery = cssContent.includes('@media (max-width: 767.98px)');
  const hasSmallMobileQuery = cssContent.includes('@media (max-width: 575.98px)');
  const hasCrossBrowserFixes = cssContent.includes('-webkit-overflow-scrolling') && cssContent.includes(':focus-visible');

  recordTest('TC-CSS-01', 'Media Query cho Tablet / Laptop nhỏ (<= 991.98px)', hasTabletQuery ? 'PASS' : 'FAIL', 'Điều chỉnh navbar và hero padding');
  recordTest('TC-CSS-02', 'Media Query cho Mobile ngang / Tablet đứng (<= 767.98px)', hasMobileQuery ? 'PASS' : 'FAIL', 'Co giãn tỷ lệ font chữ và khoảng cách');
  recordTest('TC-CSS-03', 'Media Query cho Mobile đứng nhỏ (<= 575.98px)', hasSmallMobileQuery ? 'PASS' : 'FAIL', 'Tối ưu nút bấm CTA và cuộn ngang bảng');
  recordTest('TC-CSS-04', 'Quy tắc tương thích đa trình duyệt & Accessibility', hasCrossBrowserFixes ? 'PASS' : 'FAIL', 'Webkit touch scrolling, focus ring WCAG');

  // Tổng kết
  console.log('\n================================================================');
  console.log('📊 TỔNG HỢP KẾT QUẢ KIỂM THỬ GIAO DIỆN & TRÌNH DUYỆT (STORY-021)');
  console.log('================================================================');
  const passCount = testResults.filter((t) => t.status === 'PASS').length;
  const failCount = testResults.filter((t) => t.status === 'FAIL').length;
  const totalCount = testResults.length;
  const passRate = ((passCount / totalCount) * 100).toFixed(1);

  console.log(`- Tổng số tiêu chí kiểm thử UI/Responsive: ${totalCount}`);
  console.log(`- Số tiêu chí ĐẠT (PASS):                   ${passCount} (${passRate}%)`);
  console.log(`- Số tiêu chí KHÔNG ĐẠT (FAIL):             ${failCount}`);
  console.log('================================================================');

  if (failCount === 0) {
    console.log('🎉 TOÀN BỘ TIÊU CHÍ GIAO DIỆN VÀ TRÌNH DUYỆT ĐẠT 100% (STORY-021 PASS)!');
  }

  return { totalCount, passCount, failCount, passRate };
}

if (require.main === module) {
  runUiResponsiveVerification().then((res) => {
    if (res.failCount > 0) process.exit(1);
    else process.exit(0);
  });
}

module.exports = runUiResponsiveVerification;
