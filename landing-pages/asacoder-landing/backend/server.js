// Backend server for ASACODER landing page contact form
// This file will handle the contact form submissions

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { connectDB } = require('./config/database');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: [
    process.env.CORS_ORIGIN || 'http://localhost:3000',
    'https://1fd2e51e55f7.ngrok-free.app', // Allow ngrok URL
    'https://*.ngrok-free.app' // Allow any ngrok subdomain
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ 
    message: 'ASACODER Landing Page Backend API',
    database: 'MongoDB Connected',
    timestamp: new Date().toISOString()
  });
});

// Admin dashboard route
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-dashboard.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 MongoDB: ${process.env.MONGODB_URI ? 'Configured' : 'Not configured'}`);
  
  // Show database name from connection string if available
  if (process.env.MONGODB_URI) {
    try {
      const dbName = process.env.MONGODB_URI.split('/').pop().split('?')[0];
      console.log(`🗄️  Database Name: ${dbName}`);
    } catch (error) {
      console.log(`🗄️  Database Name: Unable to parse from connection string`);
    }
  }
});
