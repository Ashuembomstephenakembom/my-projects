// ===========================================
// User Model - MongoDB Schema
// ===========================================
// This file defines the User schema for MongoDB using Mongoose
// It includes all user-related fields, validation, and methods

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For password hashing

// ===========================================
// USER SCHEMA DEFINITION
// ===========================================

// Define the User schema with all necessary fields
const userSchema = new mongoose.Schema({
    // Basic Information
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true, // Each username must be unique
        trim: true,   // Remove whitespace
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [30, 'Username cannot exceed 30 characters'],
        match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores']
    },
    
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Each email must be unique
        lowercase: true, // Convert to lowercase
        trim: true,   // Remove whitespace
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false // Don't include password in queries by default (for security)
    },
    
    // Profile Information
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        maxlength: [50, 'First name cannot exceed 50 characters']
    },
    
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        maxlength: [50, 'Last name cannot exceed 50 characters']
    },
    
    // Profile Picture
    profilePicture: {
        type: String,
        default: '' // URL to profile picture (we'll handle file uploads later)
    },
    
    // User Role and Status
    role: {
        type: String,
        enum: ['user', 'premium', 'admin'], // Only these values are allowed
        default: 'user'
    },
    
    isActive: {
        type: Boolean,
        default: true // User account is active by default
    },
    
    isEmailVerified: {
        type: Boolean,
        default: false // Email verification status
    },
    
    // Trading Experience Level
    experienceLevel: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced', 'professional'],
        default: 'beginner'
    },
    
    // Subscription and Premium Features
    subscription: {
        type: {
            type: String,
            enum: ['free', 'premium', 'vip'],
            default: 'free'
        },
        startDate: {
            type: Date,
            default: null
        },
        endDate: {
            type: Date,
            default: null
        },
        isActive: {
            type: Boolean,
            default: false
        }
    },
    
    // Referral System
    referralCode: {
        type: String,
        unique: true,
        sparse: true // Allow null/undefined values
    },
    
    referredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    
    referralCount: {
        type: Number,
        default: 0
    },
    
    // User Preferences
    preferences: {
        notifications: {
            email: {
                type: Boolean,
                default: true
            },
            push: {
                type: Boolean,
                default: true
            },
            marketing: {
                type: Boolean,
                default: false
            }
        },
        timezone: {
            type: String,
            default: 'UTC'
        },
        language: {
            type: String,
            default: 'en'
        }
    },
    
    // Account Security
    lastLogin: {
        type: Date,
        default: null
    },
    
    passwordChangedAt: {
        type: Date,
        default: null
    },
    
    passwordResetToken: {
        type: String,
        default: null
    },
    
    passwordResetExpires: {
        type: Date,
        default: null
    }
    
}, {
    // Schema Options
    timestamps: true, // Automatically add createdAt and updatedAt fields
    toJSON: { virtuals: true }, // Include virtual fields when converting to JSON
    toObject: { virtuals: true }
});

// ===========================================
// VIRTUAL FIELDS (Computed Properties)
// ===========================================

// Virtual field for full name
userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`;
});

// Virtual field for subscription status
userSchema.virtual('hasActiveSubscription').get(function() {
    if (!this.subscription.isActive) return false;
    if (!this.subscription.endDate) return true;
    return new Date() < this.subscription.endDate;
});

// Virtual field for user's age (if we add birthDate later)
// userSchema.virtual('age').get(function() {
//     if (!this.birthDate) return null;
//     return Math.floor((new Date() - this.birthDate) / (365.25 * 24 * 60 * 60 * 1000));
// });

// ===========================================
// INDEXES (For Better Query Performance)
// ===========================================

// Create indexes for frequently queried fields
userSchema.index({ email: 1 }); // Index on email field
userSchema.index({ username: 1 }); // Index on username field
userSchema.index({ referralCode: 1 }); // Index on referral code
userSchema.index({ 'subscription.isActive': 1 }); // Index on subscription status
userSchema.index({ createdAt: -1 }); // Index on creation date (for sorting)

// ===========================================
// MIDDLEWARE (Pre/Post Save Hooks)
// ===========================================

// Pre-save middleware - Hash password before saving
userSchema.pre('save', async function(next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();
    
    try {
        // Hash password with bcrypt
        const saltRounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
        this.password = await bcrypt.hash(this.password, saltRounds);
        
        // Update passwordChangedAt timestamp
        this.passwordChangedAt = Date.now() - 1000; // Subtract 1 second to ensure token is created after password change
        
        next();
    } catch (error) {
        next(error);
    }
});

// Pre-save middleware - Generate referral code if not exists
userSchema.pre('save', function(next) {
    if (!this.referralCode) {
        // Generate a unique referral code
        this.referralCode = this.generateReferralCode();
    }
    next();
});

// ===========================================
// INSTANCE METHODS (Methods available on user instances)
// ===========================================

/**
 * Compare password with hashed password
 * @param {string} candidatePassword - Password to compare
 * @returns {Promise<boolean>} - True if passwords match
 */
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

/**
 * Check if password was changed after a given timestamp
 * @param {number} JWTTimestamp - JWT token timestamp
 * @returns {boolean} - True if password was changed after token
 */
userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        return JWTTimestamp < changedTimestamp;
    }
    return false;
};

/**
 * Generate a unique referral code
 * @returns {string} - Generated referral code
 */
userSchema.methods.generateReferralCode = function() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `${this.username}_${timestamp}${random}`.toUpperCase();
};

/**
 * Update last login timestamp
 */
userSchema.methods.updateLastLogin = function() {
    this.lastLogin = new Date();
    return this.save();
};

// ===========================================
// STATIC METHODS (Methods available on the User model)
// ===========================================

/**
 * Find user by email
 * @param {string} email - User's email
 * @returns {Promise<Object>} - User document
 */
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email: email.toLowerCase() });
};

/**
 * Find user by username
 * @param {string} username - User's username
 * @returns {Promise<Object>} - User document
 */
userSchema.statics.findByUsername = function(username) {
    return this.findOne({ username: username });
};

/**
 * Get users with active subscriptions
 * @returns {Promise<Array>} - Array of users with active subscriptions
 */
userSchema.statics.findActiveSubscribers = function() {
    return this.find({
        'subscription.isActive': true,
        'subscription.endDate': { $gt: new Date() }
    });
};

// ===========================================
// EXPORT THE MODEL
// ===========================================

// Create and export the User model
// The first parameter is the model name, second is the schema
const User = mongoose.model('User', userSchema);

module.exports = User; 