// ===========================================
// Authentication Controller
// ===========================================
// This file handles all authentication-related operations
// Including user registration, login, logout, and profile management

const User = require('../models/User');
const { sendTokenResponse } = require('../middleware/auth');
const { validationResult } = require('express-validator');

// ===========================================
// USER REGISTRATION
// ===========================================

/**
 * Register a new user
 * POST /api/auth/register
 * This function creates a new user account with validation and error handling
 */
const register = async (req, res) => {
    try {
        // Check for validation errors from express-validator middleware
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        // Extract user data from request body
        const {
            username,
            email,
            password,
            firstName,
            lastName,
            experienceLevel = 'beginner',
            referralCode
        } = req.body;

        // Check if user already exists by email
        const existingUserByEmail = await User.findByEmail(email);
        if (existingUserByEmail) {
            return res.status(400).json({
                success: false,
                message: 'User with this email already exists',
                error: 'EMAIL_ALREADY_EXISTS'
            });
        }

        // Check if user already exists by username
        const existingUserByUsername = await User.findByUsername(username);
        if (existingUserByUsername) {
            return res.status(400).json({
                success: false,
                message: 'Username is already taken',
                error: 'USERNAME_ALREADY_EXISTS'
            });
        }

        // Handle referral code if provided
        let referredBy = null;
        if (referralCode) {
            const referrer = await User.findOne({ referralCode: referralCode.toUpperCase() });
            if (referrer) {
                referredBy = referrer._id;
                // Increment referrer's referral count
                referrer.referralCount += 1;
                await referrer.save();
            }
        }

        // Create new user object
        const userData = {
            username,
            email,
            password,
            firstName,
            lastName,
            experienceLevel,
            referredBy
        };

        // Create and save the new user
        const user = await User.create(userData);

        // Send success response with token
        sendTokenResponse(user, 201, res);

    } catch (error) {
        console.error('Registration error:', error);
        
        // Handle specific MongoDB errors
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return res.status(400).json({
                success: false,
                message: `${field} already exists`,
                error: `${field.toUpperCase()}_ALREADY_EXISTS`
            });
        }

        res.status(500).json({
            success: false,
            message: 'Error creating user account',
            error: 'REGISTRATION_ERROR'
        });
    }
};

// ===========================================
// USER LOGIN
// ===========================================

/**
 * Login user
 * POST /api/auth/login
 * This function authenticates a user and returns a JWT token
 */
const login = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { email, password } = req.body;

        // Find user by email and include password field for comparison
        const user = await User.findByEmail(email).select('+password');
        
        // Check if user exists
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
                error: 'INVALID_CREDENTIALS'
            });
        }

        // Check if user account is active
        if (!user.isActive) {
            return res.status(401).json({
                success: false,
                message: 'Account is deactivated. Please contact support.',
                error: 'ACCOUNT_DEACTIVATED'
            });
        }

        // Check if password is correct
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
                error: 'INVALID_CREDENTIALS'
            });
        }

        // Update last login timestamp
        await user.updateLastLogin();

        // Send success response with token
        sendTokenResponse(user, 200, res);

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Error during login',
            error: 'LOGIN_ERROR'
        });
    }
};

// ===========================================
// USER LOGOUT
// ===========================================

/**
 * Logout user
 * POST /api/auth/logout
 * This function clears the JWT token cookie
 */
const logout = async (req, res) => {
    try {
        // Clear the token cookie
        res.cookie('token', 'none', {
            expires: new Date(Date.now() + 10 * 1000), // Expire in 10 seconds
            httpOnly: true
        });

        res.status(200).json({
            success: true,
            message: 'User logged out successfully'
        });

    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            success: false,
            message: 'Error during logout',
            error: 'LOGOUT_ERROR'
        });
    }
};

// ===========================================
// GET CURRENT USER
// ===========================================

/**
 * Get current user profile
 * GET /api/auth/me
 * This function returns the current authenticated user's profile
 */
const getMe = async (req, res) => {
    try {
        // User is already attached to req by the protect middleware
        const user = req.user;

        res.status(200).json({
            success: true,
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
                referralCount: user.referralCount,
                preferences: user.preferences,
                lastLogin: user.lastLogin,
                createdAt: user.createdAt
            }
        });

    } catch (error) {
        console.error('Get me error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching user profile',
            error: 'PROFILE_FETCH_ERROR'
        });
    }
};

// ===========================================
// UPDATE USER PROFILE
// ===========================================

/**
 * Update user profile
 * PUT /api/auth/update-profile
 * This function allows users to update their profile information
 */
const updateProfile = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const user = req.user;
        const { firstName, lastName, experienceLevel, preferences } = req.body;

        // Update user fields
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (experienceLevel) user.experienceLevel = experienceLevel;
        if (preferences) {
            user.preferences = { ...user.preferences, ...preferences };
        }

        // Save the updated user
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
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
                referralCount: user.referralCount,
                preferences: user.preferences,
                lastLogin: user.lastLogin,
                createdAt: user.createdAt
            }
        });

    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating profile',
            error: 'PROFILE_UPDATE_ERROR'
        });
    }
};

// ===========================================
// CHANGE PASSWORD
// ===========================================

/**
 * Change user password
 * PUT /api/auth/change-password
 * This function allows users to change their password
 */
const changePassword = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const user = req.user;
        const { currentPassword, newPassword } = req.body;

        // Verify current password
        const isCurrentPasswordValid = await user.comparePassword(currentPassword);
        if (!isCurrentPasswordValid) {
            return res.status(400).json({
                success: false,
                message: 'Current password is incorrect',
                error: 'INVALID_CURRENT_PASSWORD'
            });
        }

        // Update password
        user.password = newPassword;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Password changed successfully'
        });

    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({
            success: false,
            message: 'Error changing password',
            error: 'PASSWORD_CHANGE_ERROR'
        });
    }
};

// ===========================================
// FORGOT PASSWORD
// ===========================================

/**
 * Forgot password
 * POST /api/auth/forgot-password
 * This function initiates the password reset process
 */
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        // Find user by email
        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found with this email',
                error: 'USER_NOT_FOUND'
            });
        }

        // Generate reset token (we'll implement this later)
        // For now, just return a success message
        res.status(200).json({
            success: true,
            message: 'Password reset email sent (feature coming soon)'
        });

    } catch (error) {
        console.error('Forgot password error:', error);
        res.status(500).json({
            success: false,
            message: 'Error processing password reset',
            error: 'PASSWORD_RESET_ERROR'
        });
    }
};

// ===========================================
// EXPORT CONTROLLER FUNCTIONS
// ===========================================

module.exports = {
    register,           // User registration
    login,             // User login
    logout,            // User logout
    getMe,             // Get current user profile
    updateProfile,     // Update user profile
    changePassword,    // Change password
    forgotPassword     // Forgot password
}; 