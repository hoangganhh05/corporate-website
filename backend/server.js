require('dotenv').config();
const app = require('./src/app');
const { testConnection } = require('./src/config/db');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, async () => {
  console.log(`==================================================`);
  console.log(`🚀 Backend Server đang chạy tại: http://localhost:${PORT}`);
  console.log(`🩺 Health check endpoint:        http://localhost:${PORT}/api/health`);
  console.log(`==================================================`);
  
  // Kiểm tra kết nối MySQL
  await testConnection();
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
