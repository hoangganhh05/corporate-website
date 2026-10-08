/**
 * main.js - Core JavaScript cho Website Giới Thiệu Doanh Nghiệp (FFT Việt Nam)
 * Giai đoạn: EPIC-005 — Tích hợp Website và CSDL (STORY-017)
 */

const API_BASE_URL = ['localhost', '127.0.0.1'].includes(window.location.hostname)
  ? 'http://localhost:5000/api'
  : 'https://corporate-website-08lf.onrender.com/api';

/**
 * ApiClient - Module trao đổi dữ liệu tập trung với Backend Node.js Express
 */
async function requestApi(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);
  const payload = await response.json().catch(() => null);
  if (!response.ok || !payload || payload.status !== 'success') {
    throw new Error(payload?.message || `Yêu cầu API thất bại (${response.status}).`);
  }
  return payload;
}

const ApiClient = {
  async getHealth() {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) throw new Error('Không thể kết nối health check.');
    return response.json();
  },

  async getCompanyInfo() {
    return requestApi('/company');
  },

  async getServices() {
    return requestApi('/services');
  },

  async getServiceBySlug(slug) {
    return requestApi(`/services/${encodeURIComponent(slug)}`);
  },

  async getNews(limit = 10) {
    return requestApi(`/news?limit=${encodeURIComponent(limit)}`);
  },

  async getNewsBySlug(slug) {
    return requestApi(`/news/${encodeURIComponent(slug)}`);
  },

  async getGallery(category = 'all') {
    const url = category && category !== 'all' 
      ? `${API_BASE_URL}/gallery?category=${encodeURIComponent(category)}`
      : `${API_BASE_URL}/gallery`;
    return requestApi(url.replace(API_BASE_URL, ''));
  },

  async sendContact(data) {
    return requestApi('/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }
};

// Đính kèm ApiClient vào window để các trang có thể gọi dùng
window.ApiClient = ApiClient;

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Hệ thống Website FFT Việt Nam đã sẵn sàng.');

  // Kiểm tra kết nối Backend API trên console
  ApiClient.getHealth()
    .then(data => {
      console.log('🚀 Kết nối Backend thành công:', data);
    })
    .catch(() => {
      console.log('ℹ️ Backend đang ở chế độ offline. Website sử dụng dữ liệu tĩnh dự phòng.');
    });
});
