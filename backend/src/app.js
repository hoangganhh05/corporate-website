const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root welcome route
app.get('/', (req, res) => {
  res.json({
    message: 'Chào mừng bạn đến với API Website Giới Thiệu Doanh Nghiệp',
    documentation: '/api/health',
    status: 'online',
  });
});

// API Routes
app.use('/api', routes);

// Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
