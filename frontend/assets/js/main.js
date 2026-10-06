/**
 * main.js - Script cơ bản cho Website Giới Thiệu Doanh Nghiệp
 * Giai đoạn: Nền tảng (Foundation)
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Frontend Website Giới Thiệu Doanh Nghiệp đã sẵn sàng.');

  const checkBackendBtn = document.getElementById('btn-check-backend');
  const backendStatusEl = document.getElementById('backend-status');
  const backendDetailsEl = document.getElementById('backend-details');

  if (checkBackendBtn && backendStatusEl) {
    checkBackendBtn.addEventListener('click', async () => {
      backendStatusEl.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> Đang kết nối...';
      backendStatusEl.className = 'badge bg-warning text-dark';
      
      try {
        const response = await fetch('http://localhost:5000/api/health');
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        
        backendStatusEl.textContent = 'Hoạt động bình thường (OK)';
        backendStatusEl.className = 'badge bg-success';
        
        if (backendDetailsEl) {
          backendDetailsEl.classList.remove('d-none');
          backendDetailsEl.textContent = JSON.stringify(data, null, 2);
        }
      } catch (error) {
        console.error('Không thể kết nối Backend:', error);
        backendStatusEl.textContent = 'Chưa kết nối được (Offline / Backend chưa chạy)';
        backendStatusEl.className = 'badge bg-danger';
        
        if (backendDetailsEl) {
          backendDetailsEl.classList.remove('d-none');
          backendDetailsEl.textContent = `Lỗi: ${error.message}\n(Hãy đảm bảo bạn đã khởi động Backend: cd backend && npm run dev)`;
        }
      }
    });
  }
});
