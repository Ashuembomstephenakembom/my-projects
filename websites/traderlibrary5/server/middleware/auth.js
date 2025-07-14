// ===========================================
// Authentication Middleware
// ===========================================
// This file contains middleware functions for user authentication
// It handles JWT token verification and user authorization

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ===========================================
// JWT TOKEN VERIFICATION MIDDLEWARE
// ===========================================

/**
 * Middleware to protect routes that require authentication
 * This middleware verifies the JWT token and attaches the user to the request
 */
const protect = async (req, res, next) => {
    try {
        let token;

        // Check if token exists in Authorization header
        // Format: "Bearer <token>"
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            // Extract token from "Bearer <token>"
            token = req.headers.authorization.split(' ')[1];
        }
        // Check if token exists in cookies (for web applications)
        else if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        }

        // If no token found, return error
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Access denied. No token provided.',
                error: 'AUTHENTICATION_REQUIRED'
            });
        }

        try {
            // Verify the JWT token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find user by ID from the decoded token
            // We need to explicitly select the password field to check if it was changed
            const user = await User.findById(decoded.id).select('+password');

            // If user doesn't exist, return error
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'User not found.',
                    error: 'USER_NOT_FOUND'
                });
            }

            // Check if user account is active
            if (!user.isActive) {
                return res.status(401).json({
                    success: false,
                    message: 'Account is deactivated.',
                    error: 'ACCOUNT_DEACTIVATED'
                });
            }

            // Check if password was changed after the token was issued
            if (user.changedPasswordAfter(decoded.iat)) {
                return res.status(401).json({
                    success: false,
                    message: 'Password was changed recently. Please log in again.',
                    error: 'PASSWORD_CHANGED'
                });
            }

            // Attach user to request object for use in route handlers
            req.user = user;
            next();

        } catch (jwtError) {
            // Handle JWT verification errors
            if (jwtError.name === 'JsonWebTokenError') {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid token.',
                    error: 'INVALID_TOKEN'
                });
            } else if (jwtError.name === 'TokenExpiredError') {
                return res.status(401).json({
                    success: false,
                    message: 'Token has expired.',
                    error: 'TOKEN_EXPIRED'
                });
            } else {
                return res.status(401).json({
                    success: false,
                    message: 'Token verification failed.',
                    error: 'TOKEN_VERIFICATION_FAILED'
                });
            }
        }

    } catch (error) {
        console.error('Auth middleware error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error during authentication.',
            error: 'AUTHENTICATION_ERROR'
        });
    }
};

// ===========================================
// ROLE-BASED AUTHORIZATION MIDDLEWARE
// ===========================================

/**
 * Middleware to restrict access based on user roles
 * @param {...string} roles - Array of allowed roles
 */
const authorize = (...roles) => {
    return (req, res, next) => {
        // Check if user exists (should be set by protect middleware)
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Authentication required.',
                error: 'AUTHENTICATION_REQUIRED'
            });
        }

        // Check if user's role is in the allowed roles
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Access denied. ${req.user.role} role is not authorized to access this resource.`,
                error: 'INSUFFICIENT_PERMISSIONS'
            });
        }

        next();
    };
};

/**
 * Middleware to check if user has premium subscription
 */
const requirePremium = async (req, res, next) => {
    try {
        // Check if user exists
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Authentication required.',
                error: 'AUTHENTICATION_REQUIRED'
            });
        }

        // Check if user has active premium subscription
        if (!req.user.hasActiveSubscription) {
            return res.status(403).json({
                success: false,
                message: 'Premium subscription required to access this content.',
                error: 'PREMIUM_REQUIRED'
            });
        }

        next();
    } catch (error) {
        console.error('Premium check error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error checking subscription status.',
            error: 'SUBSCRIPTION_CHECK_ERROR'
        });
    }
};

// ===========================================
// OPTIONAL AUTHENTICATION MIDDLEWARE
// ===========================================

/**
 * Middleware for optional authentication
 * This middleware tries to authenticate the user but doesn't fail if no token is provided
 * Useful for routes that work both for authenticated and anonymous users
 */
const optionalAuth = async (req, res, next) => {
    try {
        let token;

        // Check if token exists in Authorization header
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
        // Check if token exists in cookies
        else if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        }

        // If no token, continue without authentication
        if (!token) {
            req.user = null;
            return next();
        }

        try {
            // Verify the JWT token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find user by ID
            const user = await User.findById(decoded.id);

            // If user doesn't exist or is inactive, continue without authentication
            if (!user || !user.isActive) {
                req.user = null;
                return next();
            }

            // Check if password was changed after the token was issued
            if (user.changedPasswordAfter(decoded.iat)) {
                req.user = null;
                return next();
            }

            // Attach user to request object
            req.user = user;
            next();

        } catch (jwtError) {
            // If token is invalid, continue without authentication
            req.user = null;
            next();
        }

    } catch (error) {
        console.error('Optional auth middleware error:', error);
        req.user = null;
        next();
    }
};

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

/**
 * Generate JWT token for user
 * @param {Object} user - User object
 * @returns {string} - JWT token
 */
const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role
    };

    const options = {
        expiresIn: process.env.JWT_EXPIRE || '24h'
    };

    return jwt.sign(payload, process.env.JWT_SECRET, options);
};

/**
 * Send JWT token in response
 * @param {Object} user - User object
 * @param {number} statusCode - HTTP status code
 * @param {Object} res - Express response object
 */
const sendTokenResponse = (user, statusCode, res) => {
    // Generate token
    const token = generateToken(user);

    // Token expiration time
    const expiresIn = process.env.JWT_EXPIRE || '24h';
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (parseInt(expiresIn) * 1000));

    // Cookie options
    const cookieOptions = {
        expires: expirationDate,
        httpOnly: true, // Cookie cannot be accessed by client-side JavaScript
        secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
        sameSite: 'strict' // Protect against CSRF attacks
    };

    // Remove password from response
    user.password = undefined;

    // Send response
    res.status(statusCode)
        .cookie('token', token, cookieOptions)
        .json({
            success: true,
            token,
            expiresIn,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                fullName: user.fullName,
                role: user.role,
                experienceLevel: user.experienceLevel,
                subscription: user.subscription,
                hasActiveSubscription: user.hasActiveSubscription,
                profilePicture: user.profilePicture,
                referralCode: user.referralCode,
                createdAt: user.createdAt
            }
        });
};

// ===========================================
// EXPORT MIDDLEWARE AND UTILITIES
// ===========================================

module.exports = {
    protect,           // Protect routes requiring authentication
    authorize,         // Role-based authorization
    requirePremium,    // Require premium subscription
    optionalAuth,      // Optional authentication
    generateToken,     // Generate JWT token
    sendTokenResponse  // Send token response
}; 