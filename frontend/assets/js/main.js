/**
 * main.js - Core JavaScript cho Website Giới Thiệu Doanh Nghiệp (FFT Việt Nam)
 * Giai đoạn: EPIC-005 — Tích hợp Website và CSDL (STORY-017)
 */

const API_BASE_URL = 'http://localhost:5000/api';

/**
 * ApiClient - Module trao đổi dữ liệu tập trung với Backend Node.js Express
 */
const ApiClient = {
  async getHealth() {
    const res = await fetch(`${API_BASE_URL}/health`);
    return await res.json();
  },

  async getCompanyInfo() {
    const res = await fetch(`${API_BASE_URL}/company`);
    return await res.json();
  },

  async getServices() {
    const res = await fetch(`${API_BASE_URL}/services`);
    return await res.json();
  },

  async getServiceBySlug(slug) {
    const res = await fetch(`${API_BASE_URL}/services/${slug}`);
    return await res.json();
  },

  async getNews(limit = 10) {
    const res = await fetch(`${API_BASE_URL}/news?limit=${limit}`);
    return await res.json();
  },

  async getNewsBySlug(slug) {
    const res = await fetch(`${API_BASE_URL}/news/${slug}`);
    return await res.json();
  },

  async getGallery(category = 'all') {
    const url = category && category !== 'all' 
      ? `${API_BASE_URL}/gallery?category=${encodeURIComponent(category)}`
      : `${API_BASE_URL}/gallery`;
    const res = await fetch(url);
    return await res.json();
  },

  async sendContact(data) {
    const res = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
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
