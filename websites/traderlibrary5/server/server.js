// ===========================================
// TraderLibrary5 - Main Server File
// ===========================================
// This is the entry point for our Node.js/Express backend server
// It sets up the server, middleware, routes, and database connection

// Import required modules
const express = require('express');           // Web framework for Node.js
const mongoose = require('mongoose');         // MongoDB object modeling tool
const cors = require('cors');                 // Cross-Origin Resource Sharing middleware
const dotenv = require('dotenv');             // Environment variables loader
const rateLimit = require('express-rate-limit'); // Rate limiting for API protection

// Load environment variables from .env file
// This makes our configuration values available via process.env
dotenv.config();

// Create Express application instance
const app = express();

// ===========================================
// MIDDLEWARE CONFIGURATION
// ===========================================

// CORS (Cross-Origin Resource Sharing) Configuration
// This allows our React frontend to communicate with this backend
const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173', // Frontend URL
    credentials: true,  // Allow cookies and authentication headers
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};
app.use(cors(corsOptions));

// Rate Limiting Configuration
// This prevents abuse by limiting how many requests a user can make
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW) || 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX) || 100, // Limit each IP to 100 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use('/api/', limiter); // Apply rate limiting to all API routes

// Body Parser Middleware
// This allows us to parse JSON data sent in request bodies
app.use(express.json({ limit: process.env.MAX_FILE_SIZE || '10mb' }));
// This allows us to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true, limit: process.env.MAX_FILE_SIZE || '10mb' }));

// Static File Serving
// This serves static files (like images, CSS, JS) from the 'public' directory
app.use('/uploads', express.static('uploads'));

// ===========================================
// DATABASE CONNECTION
// ===========================================

// MongoDB Connection Configuration
const connectDB = async () => {
    try {
        // Connect to MongoDB using the URI from environment variables
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,      // Use new URL parser
            useUnifiedTopology: true,   // Use new server discovery and monitoring engine
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

// ===========================================
// ROUTE IMPORTS
// ===========================================

// Import route files
const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/users');
// const blogRoutes = require('./routes/blog');
// const resourceRoutes = require('./routes/resources');
// const asatRoutes = require('./routes/asat');

// ===========================================
// ROUTE MIDDLEWARE
// ===========================================

// API Routes
app.use('/api/auth', authRoutes);        // Authentication routes
// app.use('/api/users', userRoutes);       // User management routes
// app.use('/api/blog', blogRoutes);        // Blog and VIP blog routes
// app.use('/api/resources', resourceRoutes); // Ebooks and resources routes
// app.use('/api/asat', asatRoutes);        // ASATConcept strategy routes

// ===========================================
// BASIC ROUTES FOR TESTING
// ===========================================

// Health check route - useful for monitoring
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'TraderLibrary5 Server is running!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
    });
});

// Root route - basic welcome message
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to TraderLibrary5 API',
        version: '1.0.0',
        documentation: '/api/docs' // We'll add API documentation later
    });
});

// ===========================================
// ERROR HANDLING MIDDLEWARE
// ===========================================

// 404 handler - catches any routes that don't exist
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Route not found',
        message: `The route ${req.originalUrl} does not exist on this server`
    });
});

// Global error handler - catches any errors thrown in the application
app.use((error, req, res, next) => {
    console.error('Server Error:', error);
    
    res.status(error.status || 500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong!'
    });
});

// ===========================================
// SERVER STARTUP
// ===========================================

// Get port from environment variables or use default
const PORT = process.env.PORT || 5000;

// Start the server
const startServer = async () => {
    try {
        // First connect to the database
        await connectDB();
        
        // Then start the server
        app.listen(PORT, () => {
            console.log('🚀 TraderLibrary5 Server Started!');
            console.log(`📍 Server running on port ${PORT}`);
            console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
            console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
            console.log('📚 Ready to serve forex trading knowledge!');
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

// Start the server
startServer();

// ===========================================
// GRACEFUL SHUTDOWN HANDLING
// ===========================================

// Handle graceful shutdown when the process is terminated
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 SIGINT received. Shutting down gracefully...');
    process.exit(0);
}); 