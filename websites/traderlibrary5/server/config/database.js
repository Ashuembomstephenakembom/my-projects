// ===========================================
// Database Configuration
// ===========================================
// This file handles all database-related configuration and connection setup
// It provides a centralized place for database operations

const mongoose = require('mongoose');

// ===========================================
// DATABASE CONNECTION CONFIGURATION
// ===========================================

/**
 * Connect to MongoDB database
 * This function establishes a connection to MongoDB using the provided URI
 * It includes error handling and connection event listeners
 */
const connectDB = async () => {
    try {
        // Get MongoDB URI from environment variables
        const mongoURI = process.env.MONGODB_URI;
        
        if (!mongoURI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }

        // Connection options for MongoDB
        const options = {
            useNewUrlParser: true,        // Use new URL parser (deprecated but safe to keep)
            useUnifiedTopology: true,     // Use new server discovery and monitoring engine
            maxPoolSize: 10,              // Maximum number of connections in the pool
            serverSelectionTimeoutMS: 5000, // Timeout for server selection
            socketTimeoutMS: 45000,       // Timeout for socket operations
            bufferMaxEntries: 0,          // Disable mongoose buffering
            bufferCommands: false,        // Disable mongoose buffering
        };

        // Establish connection to MongoDB
        const conn = await mongoose.connect(mongoURI, options);

        console.log(`✅ MongoDB Connected Successfully!`);
        console.log(`📍 Host: ${conn.connection.host}`);
        console.log(`🗄️  Database: ${conn.connection.name}`);
        console.log(`🔗 Connection State: ${conn.connection.readyState}`);

        return conn;
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        console.error('🔍 Error Details:', error);
        
        // Exit the process if database connection fails
        // This is important because our app depends on the database
        process.exit(1);
    }
};

// ===========================================
// DATABASE EVENT LISTENERS
// ===========================================

// Listen for successful connection
mongoose.connection.on('connected', () => {
    console.log('🎉 Mongoose connected to MongoDB');
});

// Listen for connection errors
mongoose.connection.on('error', (err) => {
    console.error('❌ Mongoose connection error:', err);
});

// Listen for disconnection
mongoose.connection.on('disconnected', () => {
    console.log('🔌 Mongoose disconnected from MongoDB');
});

// Listen for process termination and close database connection
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('🛑 MongoDB connection closed through app termination');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error closing MongoDB connection:', error);
        process.exit(1);
    }
});

// ===========================================
// DATABASE UTILITY FUNCTIONS
// ===========================================

/**
 * Check if database is connected
 * @returns {boolean} True if connected, false otherwise
 */
const isConnected = () => {
    return mongoose.connection.readyState === 1;
};

/**
 * Get database connection status
 * @returns {string} Connection status string
 */
const getConnectionStatus = () => {
    const states = {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting'
    };
    return states[mongoose.connection.readyState] || 'unknown';
};

/**
 * Get database statistics
 * @returns {Object} Database statistics
 */
const getDatabaseStats = async () => {
    try {
        if (!isConnected()) {
            throw new Error('Database not connected');
        }

        const stats = await mongoose.connection.db.stats();
        return {
            database: stats.db,
            collections: stats.collections,
            dataSize: stats.dataSize,
            storageSize: stats.storageSize,
            indexes: stats.indexes,
            indexSize: stats.indexSize
        };
    } catch (error) {
        console.error('Error getting database stats:', error);
        return null;
    }
};

// ===========================================
// EXPORT FUNCTIONS
// ===========================================

module.exports = {
    connectDB,           // Main connection function
    isConnected,         // Check connection status
    getConnectionStatus, // Get connection status string
    getDatabaseStats     // Get database statistics
}; 