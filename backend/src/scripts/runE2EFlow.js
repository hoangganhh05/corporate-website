require('dotenv').config();

const app = require('../app');
const { pool } = require('../config/db');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function request(baseUrl, path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, options);
  const body = await response.json().catch(() => null);
  return { response, body };
}

async function run() {
  let server;
  let createdContactId;
  const createdRecords = [];

  try {
    server = await new Promise((resolve) => {
      const instance = app.listen(0, () => resolve(instance));
    });
    const baseUrl = `http://127.0.0.1:${server.address().port}`;

    console.log('E2E 1/11 Guest không thể đọc Contact quản trị...');
    let result = await request(baseUrl, '/api/contacts');
    assert(result.response.status === 401, 'Guest phải nhận HTTP 401 khi đọc Contact.');

    console.log('E2E 2/11 Guest gửi Contact hợp lệ...');
    result = await request(baseUrl, '/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'E2E Test User',
        email: 'e2e.test@example.com',
        phone: '0901234567',
        subject: 'E2E contact flow',
        message: 'Đây là nội dung kiểm thử end-to-end hợp lệ.'
      })
    });
    assert(result.response.status === 201 && result.body?.status === 'success', 'Guest Contact phải trả HTTP 201.');
    createdContactId = result.body.data.id;

    console.log('E2E 3/11 Admin đăng nhập bằng tài khoản MySQL bcrypt...');
    result = await request(baseUrl, '/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', password: 'admin123' })
    });
    assert(result.response.status === 200 && result.body?.data?.token, 'Admin login phải trả JWT.');
    const headers = { Authorization: `Bearer ${result.body.data.token}`, 'Content-Type': 'application/json' };

    console.log('E2E 3.1/11 Admin đọc danh sách quản trị News/Services...');
    result = await request(baseUrl, '/api/news/admin/all', { headers });
    assert(result.response.status === 200 && Array.isArray(result.body?.data), 'Admin phải đọc được danh sách News quản trị.');
    result = await request(baseUrl, '/api/services/admin/all', { headers });
    assert(result.response.status === 200 && Array.isArray(result.body?.data), 'Admin phải đọc được danh sách Services quản trị.');

    console.log('E2E 4/11 Admin đọc chi tiết Contact và hệ thống đổi unread sang read...');
    result = await request(baseUrl, `/api/contacts/${createdContactId}`, { headers });
    assert(result.response.status === 200 && result.body?.data?.status === 'read', 'Mở Contact unread phải đổi sang read.');

    console.log('E2E 5/11 Admin cập nhật Contact sang replied...');
    result = await request(baseUrl, `/api/contacts/${createdContactId}/status`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ status: 'replied', adminNotes: 'Đã kiểm thử E2E.' })
    });
    assert(result.response.status === 200 && result.body?.status === 'success', 'Admin phải cập nhật Contact thành replied.');

    console.log('E2E 6/11 Admin xóa Contact...');
    result = await request(baseUrl, `/api/contacts/${createdContactId}`, { method: 'DELETE', headers });
    assert(result.response.status === 200 && result.body?.status === 'success', 'Admin phải xóa được Contact.');
    createdContactId = null;

    console.log('E2E 7/11 Guest không thể gọi các API mutation quản trị...');
    const guestMutations = [
      ['/api/services', 'POST', { title: 'Blocked', slug: 'blocked-service' }],
      ['/api/news', 'POST', { title: 'Blocked', slug: 'blocked-news', summary: 'blocked', content: 'blocked' }],
      ['/api/gallery', 'POST', { title: 'Blocked', image_url: 'https://example.com/blocked.jpg' }],
      ['/api/company', 'PATCH', { company_name: 'Blocked' }]
    ];
    for (const [path, method, body] of guestMutations) {
      result = await request(baseUrl, path, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      assert(result.response.status === 401, `Guest phải nhận HTTP 401 cho ${method} ${path}.`);
    }

    console.log('E2E 8/11 Admin tạo/sửa/xóa Service...');
    result = await request(baseUrl, '/api/services', {
      method: 'POST', headers,
      body: JSON.stringify({ title: 'E2E Service', slug: 'e2e-service-temporary', summary: 'E2E summary', description: 'E2E description', is_active: true })
    });
    assert(result.response.status === 201, 'Admin phải tạo được Service.');
    const serviceId = result.body.data.id;
    createdRecords.push(['services', serviceId]);
    result = await request(baseUrl, `/api/services/${serviceId}`, {
      method: 'PUT', headers,
      body: JSON.stringify({ title: 'E2E Service Updated', slug: 'e2e-service-temporary', summary: 'E2E summary', description: 'E2E description', is_active: true })
    });
    assert(result.response.status === 200, 'Admin phải sửa được Service.');
    result = await request(baseUrl, `/api/services/${serviceId}`, { method: 'DELETE', headers });
    assert(result.response.status === 200, 'Admin phải xóa được Service.');
    createdRecords.pop();

    console.log('E2E 9/11 Admin tạo/sửa/xóa/publish News...');
    result = await request(baseUrl, '/api/news', {
      method: 'POST', headers,
      body: JSON.stringify({ title: 'E2E News', slug: 'e2e-news-temporary', summary: 'E2E summary', content: 'E2E content', is_published: false })
    });
    assert(result.response.status === 201, 'Admin phải tạo được News.');
    const newsId = result.body.data.id;
    createdRecords.push(['news', newsId]);
    result = await request(baseUrl, `/api/news/${newsId}`, {
      method: 'PUT', headers,
      body: JSON.stringify({ title: 'E2E News Updated', slug: 'e2e-news-temporary', summary: 'E2E summary', content: 'E2E content', is_published: true })
    });
    assert(result.response.status === 200, 'Admin phải sửa/xuất bản được News.');
    result = await request(baseUrl, `/api/news/${newsId}`, { method: 'DELETE', headers });
    assert(result.response.status === 200, 'Admin phải xóa được News.');
    createdRecords.pop();

    console.log('E2E 10/11 Admin tạo/sửa/xóa Gallery...');
    result = await request(baseUrl, '/api/gallery', {
      method: 'POST', headers,
      body: JSON.stringify({ title: 'E2E Gallery', category: 'Test', image_url: 'https://example.com/e2e.jpg', description: 'E2E image' })
    });
    assert(result.response.status === 201, 'Admin phải tạo được Gallery.');
    const galleryId = result.body.data.id;
    createdRecords.push(['gallery', galleryId]);
    result = await request(baseUrl, `/api/gallery/${galleryId}`, {
      method: 'PUT', headers,
      body: JSON.stringify({ title: 'E2E Gallery Updated', category: 'Test', image_url: 'https://example.com/e2e.jpg', description: 'E2E image updated' })
    });
    assert(result.response.status === 200, 'Admin phải sửa được Gallery.');
    result = await request(baseUrl, `/api/gallery/${galleryId}`, { method: 'DELETE', headers });
    assert(result.response.status === 200, 'Admin phải xóa được Gallery.');
    createdRecords.pop();

    console.log('E2E 11/11 Admin cập nhật Company...');
    result = await request(baseUrl, '/api/company');
    assert(result.response.status === 200, 'Phải đọc được Company trước khi cập nhật.');
    result = await request(baseUrl, '/api/company', { method: 'PATCH', headers, body: JSON.stringify(result.body.data) });
    assert(result.response.status === 200, 'Admin phải cập nhật được Company.');

    console.log('✅ E2E PASS: Contact end-to-end, authentication/authorization, toàn bộ CRUD quản trị.');
  } finally {
    if (createdContactId) {
      await pool.query('DELETE FROM contacts WHERE id = ?', [createdContactId]).catch(() => {});
    }
    for (const [table, id] of createdRecords) {
      await pool.query(`DELETE FROM \`${table}\` WHERE id = ?`, [id]).catch(() => {});
    }
    if (server) await new Promise((resolve) => server.close(resolve));
    await pool.end();
  }
}

run().catch((error) => {
  console.error(`❌ E2E FAIL: ${error.message}`);
  process.exitCode = 1;
});
